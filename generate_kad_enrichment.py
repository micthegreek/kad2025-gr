"""
generate_kad_enrichment.py — v3
Αυτόματη αναμονή στο rate limit. Τρέχεις μια φορά, τελειώνει μόνο του (~2-3 ώρες).

Χρήση (από C:\kad2025):
    python generate_kad_enrichment.py --key gsk_XXX --input public/data/kad.json --output public/data/kad_enrichment.json

Συνέχεια αν κοπεί:
    python generate_kad_enrichment.py --key gsk_XXX ... --resume
"""

import json, time, argparse, sys, re
from pathlib import Path

try:
    from groq import Groq
except ImportError:
    print("pip install groq")
    sys.exit(1)

SKIP_PATTERNS = ["ΕΛΛΕΙΨΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ", "ΑΔΡΑΝΟΠΟΙΗΣ", "ΑΓΡΟΤΗΣ ΕΙΔΙΚΟΥ ΚΑΘΕΣΤΩΤΟΣ"]
MODEL = "llama-3.1-8b-instant"

SYSTEM = (
    "Ειδικος σε ελληνικες επιχειρησεις και ΚΑΔ. "
    "Γραφεις συντομο πρακτικο κειμενο για επιχειρηματιες και λογιστες. "
    "ΜΗΝ αναφερεις αριθμους ΚΑΔ. ΜΗΝ γραφεις Ο κωδικος αυτος."
)

def should_skip(desc):
    return any(p in desc.upper() for p in SKIP_PATTERNS)

def parse_wait_seconds(error_message):
    m = re.search(r'try again in (\d+)m([\d.]+)s', str(error_message))
    if m:
        return int(m.group(1)) * 60 + float(m.group(2)) + 15
    m = re.search(r'try again in ([\d.]+)s', str(error_message))
    if m:
        return float(m.group(1)) + 10
    return 130

def generate(client, desc_2008, desc_2025, subs):
    sub_txt = ", ".join(subs[:5]) if subs else ""
    prompt = (
        "Γραψε 2 παραγραφους (120-160 λεξεις) στα ελληνικα για:\n\n"
        f"Κατηγορια: {desc_2025 or desc_2008}\n"
        + (f"Υποκατηγοριες: {sub_txt}\n" if sub_txt else "")
        + "\nΤο κειμενο να:\n"
        "1. Εξηγει ποιες επιχειρησεις/επαγγελματιες ανηκουν εδω (παραδειγματα)\n"
        "2. Αναφερει πρακτικες πληροφοριες (ΑΑΔΕ, ΕΣΠΑ, ΦΠΑ)\n"
        "3. Ειναι απλο και φυσικο υφος\n\n"
        "Μονο το κειμενο, χωρις τιτλο."
    )
    resp = client.chat.completions.create(
        model=MODEL,
        messages=[{"role": "system", "content": SYSTEM}, {"role": "user", "content": prompt}],
        max_tokens=350,
        temperature=0.7,
    )
    return resp.choices[0].message.content.strip()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--key", required=True)
    parser.add_argument("--input", default="public/data/kad.json")
    parser.add_argument("--output", default="public/data/kad_enrichment.json")
    parser.add_argument("--resume", action="store_true")
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    if not args.key.startswith("gsk_"):
        print(f"ΣΦΑΛΜΑ: key πρεπει να ξεκιναει με gsk_ (εδωσες: {args.key[:8]}...)")
        sys.exit(1)

    client = Groq(api_key=args.key)

    with open(args.input, encoding="utf-8") as f:
        data = json.load(f)

    seen, top_level = set(), []
    for r in data:
        code = r["kad2008"]
        if code.endswith("0000") and code not in seen and not should_skip(r.get("desc2008", "")):
            seen.add(code)
            top_level.append(r)

    print(f"Top-level KAD: {len(top_level)}")

    output_path = Path(args.output)
    results = {}
    if args.resume and output_path.exists():
        with open(output_path, encoding="utf-8") as f:
            results = json.load(f)
        print(f"Συνεχεια: {len(results)} ηδη ετοιμοι")

    subcodes_map = {}
    for r in data:
        prefix = r["kad2008"][:6]
        subcodes_map.setdefault(prefix, []).append(r.get("desc2025") or r.get("desc2008", ""))

    targets = top_level[:args.limit] if args.limit > 0 else top_level
    total = len(targets)
    processed = skipped = errors = 0
    print(f"Επεξεργασια {total} κωδικων — αυτοματη αναμονη στο rate limit")
    print("-" * 60)

    for i, record in enumerate(targets):
        code = record["kad2008"]
        desc_2008 = record.get("desc2008", "")
        desc_2025 = record.get("desc2025", "") or desc_2008

        if code in results and results[code].get("description"):
            skipped += 1
            continue

        subs = subcodes_map.get(code[:6], [])
        print(f"[{i+1}/{total}] {code}")

        for attempt in range(6):
            try:
                description = generate(client, desc_2008, desc_2025, subs)
                results[code] = {"desc2008": desc_2008, "desc2025": desc_2025, "description": description}
                processed += 1
                print(f"  OK ({len(description)} chars)")
                break
            except Exception as e:
                err_str = str(e)
                if "429" in err_str or "rate_limit" in err_str.lower():
                    wait_sec = parse_wait_seconds(err_str)
                    mins = int(wait_sec // 60)
                    secs = int(wait_sec % 60)
                    print(f"  Rate limit -> αναμονη {mins}m {secs}s (attempt {attempt+1}/6)...")
                    time.sleep(wait_sec)
                else:
                    print(f"  Σφαλμα: {err_str[:80]}")
                    errors += 1
                    break
        else:
            errors += 1

        if (i + 1) % 10 == 0:
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            pct = len(results) / total * 100
            print(f"  >>> Checkpoint: {len(results)}/{total} ({pct:.0f}%)")

        time.sleep(0.4)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*60}")
    print(f"ΤΕΛΟΣ: {processed} νεοι | {skipped} υπηρχαν | {errors} σφαλματα")
    print(f"Αρχειο: {output_path} ({len(results)} εγγραφες)")
    print("\nEπομενο βημα: ανεβασε το kad_enrichment.json στο Claude για v89")

if __name__ == "__main__":
    main()
