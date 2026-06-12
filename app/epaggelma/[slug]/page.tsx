import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import professionsRaw from "@/public/data/professions.json";
import kadProgramsRaw from "@/public/data/kad_programs_lookup.json";

interface ProfCode { c: string; d08: string; n: string; d25: string; ch: boolean; idx: boolean }
interface Profession { slug: string; name: string; emoji: string; intro: string; codes: ProfCode[] }

const PROFESSIONS = professionsRaw as Profession[];
const kadPrograms = kadProgramsRaw as Record<string, string[]>;
const BY_SLUG = new Map(PROFESSIONS.map((p) => [p.slug, p]));

export async function generateStaticParams() {
  return PROFESSIONS.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = BY_SLUG.get(slug);
  if (!p) return { title: "Δεν βρέθηκε", robots: { index: false, follow: false } };
  const changed = p.codes.filter((c) => c.ch).length;
  const title = `ΚΑΔ για ${p.name} (2026) | Νέοι Κωδικοί & Αντιστοίχιση`;
  const description = `Ποιοι ΚΑΔ 2025 ισχύουν για ${p.name.toLowerCase()}: ${p.codes.length} βασικοί κωδικοί με την επίσημη αντιστοίχιση ΑΑΔΕ${changed > 0 ? `, ${changed} άλλαξαν με τη NACE Rev.2.1` : ""}. Έλεγχος επιλεξιμότητας ΕΣΠΑ.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.kad2025.gr/epaggelma/${slug}` },
    openGraph: { title, description },
  };
}

export default async function ProfessionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = BY_SLUG.get(slug);
  if (!p) notFound();
  const prof = p!;

  const changedCodes = prof.codes.filter((c) => c.ch);
  const eligibleCount = prof.codes.filter((c) => (kadPrograms[c.n] ?? []).length > 0).length;
  const idx = PROFESSIONS.findIndex((x) => x.slug === slug);
  const related = [0, 1, 2, 3].map((i) => PROFESSIONS[(idx + i + 1) % PROFESSIONS.length]);
  const url = `https://www.kad2025.gr/epaggelma/${slug}`;

  const faqItems = [
    {
      q: `Ποιος είναι ο βασικός ΚΑΔ για ${prof.name.toLowerCase()};`,
      a: `Ο πιο αντιπροσωπευτικός κωδικός είναι ο ΚΑΔ ${prof.codes[0].c} (${prof.codes[0].d08})${prof.codes[0].ch ? `, που στους ΚΑΔ 2025 αντιστοιχίζεται στον ${prof.codes[0].n}` : ", που παρέμεινε αμετάβλητος στους ΚΑΔ 2025"}. Ανάλογα με τις επιμέρους δραστηριότητες μπορεί να χρειάζονται και δευτερεύοντες κωδικοί από τη λίστα.`,
    },
    {
      q: `Άλλαξαν οι ΚΑΔ για ${prof.name.toLowerCase()} με τη μετάβαση του 2026;`,
      a: changedCodes.length === 0
        ? `Όχι — και οι ${prof.codes.length} βασικοί κωδικοί του επαγγέλματος παρέμειναν αμετάβλητοι στη NACE Rev.2.1. Συνιστάται πάντως έλεγχος των περιγραφών, καθώς 906 κωδικοί πανελλαδικά κράτησαν τον αριθμό αλλά άλλαξαν λεκτικό.`
        : `Ναι — ${changedCodes.length} από τους ${prof.codes.length} βασικούς κωδικούς άλλαξαν (π.χ. ο ${changedCodes[0].c} έγινε ${changedCodes[0].n}). Η ΑΑΔΕ έκανε την αντιστοίχιση αυτόματα στις 9 Μαρτίου 2026 — ελέγξτε στο myAADE ότι ο νέος κωδικός αποδίδει σωστά τη δραστηριότητά σας.`,
    },
    {
      q: "Μέχρι πότε μπορώ να διορθώσω τον ΚΑΔ μου χωρίς πρόστιμο;",
      a: "Έως τις 30 Οκτωβρίου 2026 (απόφαση ΑΑΔΕ Α.1113/2026), μέσω της εφαρμογής «Μεταβολή Εργασιών» στο myAADE ή με έντυπο Δ211 μέσω «Τα Αιτήματά μου».",
    },
    {
      q: `Είναι οι ΚΑΔ ${prof.name.toLowerCase()} επιλέξιμοι για επιδοτήσεις;`,
      a: eligibleCount > 0
        ? `${eligibleCount} από τους ${prof.codes.length} κωδικούς της λίστας περιλαμβάνονται σε τουλάχιστον ένα ενεργό πρόγραμμα (ΕΣΠΑ ή Αναπτυξιακός Νόμος). Δείτε αναλυτικά ποιο πρόγραμμα αφορά κάθε κωδικό στη σελίδα του ή στο εργαλείο ελέγχου επιλεξιμότητας.`
        : "Οι συγκεκριμένοι κωδικοί δεν εμφανίζονται στις τρέχουσες λίστες επιλεξιμότητας που παρακολουθεί το kad2025.gr — οι προκηρύξεις όμως ανανεώνονται τακτικά, οπότε αξίζει επανέλεγχος πριν από κάθε αίτηση.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `ΚΑΔ για ${prof.name}`,
        description: prof.intro,
        inLanguage: "el-GR",
        dateModified: "2026-06-10",
        isPartOf: { "@id": "https://www.kad2025.gr/#website" },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "ΚΑΔ ανά Επάγγελμα", item: "https://www.kad2025.gr/epaggelma" },
          { "@type": "ListItem", position: 3, name: prof.name, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Κωδικοί ΚΑΔ για ${prof.name}`,
        itemListElement: prof.codes.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `ΚΑΔ ${c.c} — ${c.d08}`,
          url: `https://www.kad2025.gr/kad/${c.c}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/epaggelma" style={{ color: "var(--primary)", textDecoration: "none" }}>ΚΑΔ ανά Επάγγελμα</Link>
        {" → "}
        <span>{prof.name}</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        {prof.emoji} ΚΑΔ για {prof.name}: Οι Κωδικοί που Ισχύουν το 2026
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
        Ενημέρωση: 10 Ιουνίου 2026 · Βάσει ΑΑΔΕ Α.1003/2026 & Α.1004/2026 · Προθεσμία διόρθωσης: 30/10/2026
      </p>

      {/* TL;DR */}
      <div className="tldr">
        <strong style={{ color: "var(--primary)" }}>Σύντομη απάντηση:</strong>{" "}
        Για {prof.name.toLowerCase()} οι βασικοί κωδικοί είναι {prof.codes.length}: {prof.codes.slice(0, 3).map((c) => c.c).join(", ")}{prof.codes.length > 3 ? " κ.ά." : ""}.{" "}
        {changedCodes.length > 0
          ? <>Από αυτούς, <strong>{changedCodes.length} άλλαξαν</strong> στους ΚΑΔ 2025 — ελέγξτε την αυτόματη αντιστοίχιση στο myAADE.</>
          : <>Όλοι παρέμειναν <strong>αμετάβλητοι</strong> στους ΚΑΔ 2025.</>}
      </div>

      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>{prof.intro}</p>

      {/* Πίνακας κωδικών */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>📋 Οι κωδικοί αναλυτικά (2008 → 2025)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {prof.codes.map((c) => (
            <Link key={c.c} href={`/kad/${c.c}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", padding: "0.6rem 0.8rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: `3px solid ${c.ch ? "var(--accent)" : "var(--success)"}`, borderRadius: 8, flexWrap: "wrap" }}>
                <span className="kad-badge kad-badge-2008" style={{ flexShrink: 0 }}>{c.c}</span>
                <span style={{ fontSize: "0.85rem", flex: "1 1 250px", color: "var(--text)" }}>{c.d08}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: c.ch ? "var(--accent)" : "var(--success)", flexShrink: 0 }}>
                  {c.ch ? `→ ${c.n}` : "≡ αμετάβλητος"}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Πατήστε σε κάθε κωδικό για την πλήρη σελίδα του: εναλλακτικές αντιστοιχίσεις, περιγραφή NACE Rev.2.1
          και επιλεξιμότητα επιδοτήσεων. Η λίστα καλύπτει τους πιο αντιπροσωπευτικούς κωδικούς του επαγγέλματος —
          δεν υποκαθιστά την εξατομικευμένη επιλογή με τον λογιστή σας.
        </p>
      </div>

      {/* Επιδοτήσεις */}
      {eligibleCount > 0 && (
        <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "5px solid var(--success)" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "var(--success-strong)" }}>
            💶 {eligibleCount} από τους {prof.codes.length} κωδικούς είναι επιλέξιμοι για επιδότηση
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            Κωδικοί της λίστας περιλαμβάνονται σε ενεργά προγράμματα ΕΣΠΑ ή Αναπτυξιακού Νόμου.
            Η επιλεξιμότητα βάσει ΚΑΔ είναι αναγκαία αλλά όχι επαρκής προϋπόθεση — κάθε προκήρυξη
            ορίζει επιπλέον κριτήρια.
          </p>
          <Link href="/kad-epidotisi-espa" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
            💰 Έλεγχος επιλεξιμότητας ανά κωδικό
          </Link>
        </div>
      )}

      {/* Τι να κάνετε */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>✅ Τι πρέπει να κάνετε (3 βήματα)</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li><strong>Δείτε τι σας απέδωσε η ΑΑΔΕ:</strong> myAADE → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας.</li>
          <li><strong>Συγκρίνετε με τη λίστα παραπάνω:</strong> αν ο κωδικός που σας αποδόθηκε δεν περιγράφει την πραγματική σας δραστηριότητα, δείτε τις εναλλακτικές στη σελίδα του κάθε ΚΑΔ.</li>
          <li><strong>Διορθώστε έως 30/10/2026</strong> χωρίς πρόστιμο, μέσω «Μεταβολή Εργασιών» — και ενημερώστε λογιστή, τιμολογιακό πρόγραμμα και ΓΕΜΗ.</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Εργαλεία + σχετικά επαγγέλματα */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>🛠️ Χρήσιμα εργαλεία</h2>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>🔄 Αντιστοίχιση ΚΑΔ</Link>
          <Link href="/ai-suggester" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✨ AI εύρεση ΚΑΔ</Link>
          <Link href="/kad-2025-excel" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📥 Δωρεάν Excel ΚΑΔ 2025</Link>
          <Link href="/enarxi-epixeirisis-kad" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🚀 Οδηγός έναρξης</Link>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>👥 Δείτε και άλλα επαγγέλματα</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {related.map((r) => (
            <Link key={r.slug} href={`/epaggelma/${r.slug}`} style={{ textDecoration: "none" }}>
              <span className="chip">
                {r.emoji} {r.name}
              </span>
            </Link>
          ))}
          <Link href="/epaggelma" style={{ textDecoration: "none" }}>
            <span className="chip chip-primary">
              Όλα τα επαγγέλματα →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
