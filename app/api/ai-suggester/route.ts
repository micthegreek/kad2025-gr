import { NextRequest, NextResponse } from "next/server";
import kadValidCodes from "../../../public/data/kad-valid.json";

export const runtime = "edge";

// Build validation set once at module load (edge-compatible, no fs/path)
const kadSet = new Set<string>(kadValidCodes as string[]);

// If exact code not found, find closest valid KAD 2025 by prefix
function resolveCode(code: string): string | null {
  const clean = code.replace(/\D/g, "").padEnd(8, "0").slice(0, 8);
  if (kadSet.has(clean)) return clean;
  for (let len = 7; len >= 4; len--) {
    const prefix = clean.slice(0, len);
    for (const k of kadSet) {
      if (k.startsWith(prefix)) return k;
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { description } = await req.json();
    if (!description || description.trim().length < 3) {
      return NextResponse.json({ error: "Παρακαλώ περιγράψτε τη δραστηριότητά σας." }, { status: 400 });
    }
    if (description.trim().length > 300) {
      return NextResponse.json({ error: "Η περιγραφή δεν πρέπει να υπερβαίνει τους 300 χαρακτήρες." }, { status: 400 });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_API_KEY) {
      return NextResponse.json({ error: "Υπηρεσία μη διαθέσιμη." }, { status: 503 });
    }

    const systemPrompt = `Είσαι ειδικός σε ΚΑΔ 2025 (Κωδικούς Αριθμούς Δραστηριότητας) της ΑΑΔΕ Ελλάδας, βασισμένους στη νέα NACE Rev.2.1 ονοματολογία.
ΣΗΜΑΝΤΙΚΟ: Οι ΚΑΔ 2025 είναι ΔΙΑΦΟΡΕΤΙΚΟΙ από τους παλιούς ΚΑΔ 2008 (NACE Rev.2). ΜΗΝ χρησιμοποιείς ΚΑΔ 2008. Πολλοί κωδικοί άλλαξαν δομή στους ΚΑΔ 2025.
Ο χρήστης περιγράφει τη δραστηριότητά του και εσύ προτείνεις τους 3-5 πιο κατάλληλους ΚΑΔ 2025.
Απάντησε ΜΟΝΟ σε JSON format, χωρίς markdown, χωρίς επεξήγηση εκτός του JSON.
Format: {"suggestions": [{"code": "XXXXXXXX", "description": "Περιγραφή ΚΑΔ", "confidence": 85, "reason": "Σύντομη εξήγηση γιατί ταιριάζει"}]}
Το confidence είναι από 0-100. Οι κωδικοί πρέπει να είναι 8ψήφιοι ΚΑΔ 2025 (NACE Rev.2.1).`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Δραστηριότητα: ${description.trim()}` }
        ],
        temperature: 0.3,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Σφάλμα επικοινωνίας με AI." }, { status: 500 });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "{}";

    try {
      const clean = content.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);

      const validated = (parsed.suggestions || [])
        .map((s: { code: string; description: string; confidence: number; reason: string }) => {
          const resolvedCode = resolveCode(s.code);
          if (!resolvedCode) return null;
          return { ...s, code: resolvedCode };
        })
        .filter(Boolean)
        .filter((s: { code: string }, i: number, arr: { code: string }[]) =>
          arr.findIndex((x) => x.code === s.code) === i
        );

      return NextResponse.json({ suggestions: validated });
    } catch {
      return NextResponse.json({ error: "Σφάλμα επεξεργασίας αποτελεσμάτων." }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: "Σφάλμα διακομιστή." }, { status: 500 });
  }
}
