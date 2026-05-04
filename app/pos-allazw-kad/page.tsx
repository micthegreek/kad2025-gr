import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πώς Αλλάζω ΚΑΔ 2025 | Οδηγός myAADE",
  description:
    "Πώς να αλλάξετε ΚΑΔ στο myAADE βήμα-βήμα. Μεταβολή Εργασιών, έντυπο Δ211, προθεσμίες και συχνά λάθη. Έως 1/6/2026 χωρίς πρόστιμο.",
  alternates: { canonical: "https://www.kad2025.gr/pos-allazw-kad" },
};

const STEPS = [
  { n: "1", title: "Βρείτε τον σωστό νέο ΚΑΔ 2025", desc: "Πριν αλλάξετε, βεβαιωθείτε ότι ξέρετε ποιος είναι ο σωστός ΚΑΔ 2025. Χρησιμοποιήστε το εργαλείο αντιστοίχισης για να βρείτε τον νέο κωδικό.", link: { href: "/antistoixisi", label: "Εργαλείο Αντιστοίχισης →" } },
  { n: "2", title: "Συνδεθείτε στο myAADE", desc: "Πηγαίνετε στο myaade.gr και συνδεθείτε με τους κωδικούς TAXISnet.", link: null },
  { n: "3", title: "Μεταβολή Εργασιών", desc: 'Από το μενού επιλέξτε "Μεταβολή Εργασιών" → "Μεταβολή ΚΑΔ". Αναζητήστε τον νέο ΚΑΔ 2025 και επιλέξτε τον.', link: null },
  { n: "4", title: "Υποβολή", desc: "Ελέγξτε τα στοιχεία και υποβάλετε. Η αλλαγή ισχύει άμεσα.", link: null },
];

const FAQS = [
  { q: "Μέχρι πότε μπορώ να αλλάξω ΚΑΔ χωρίς πρόστιμο;", a: "Έως 1η Ιουνίου 2026 μπορείτε να διορθώσετε τον ΚΑΔ σας χωρίς κυρώσεις, εφόσον η αυτόματη αντιστοίχιση της ΑΑΔΕ δεν ήταν σωστή." },
  { q: "Μπορώ να κάνω την αλλαγή και από τη ΔΟΥ;", a: "Ναι — επισκεφτείτε τη ΔΟΥ σας με το έντυπο Δ211 συμπληρωμένο. Αυτό ισχύει αν δεν μπορείτε να ολοκληρώσετε τη διαδικασία ψηφιακά." },
  { q: "Χρειάζομαι λογιστή για να αλλάξω ΚΑΔ;", a: "Όχι αναγκαστικά — η διαδικασία μέσω myAADE είναι σχετικά απλή. Ωστόσο, αν έχετε πολλαπλούς ΚΑΔ ή αβεβαιότητα για τον σωστό κωδικό, συμβουλευτείτε τον λογιστή σας." },
  { q: "Τι γίνεται αν δεν αλλάξω ΚΑΔ εγκαίρως;", a: "Μετά την 1/6/2026 μπορεί να επιβληθούν κυρώσεις. Ωστόσο, αν η αυτόματη αντιστοίχιση της ΑΑΔΕ είναι σωστή, δεν χρειάζεται να κάνετε τίποτα." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Οδηγοί", item: "https://www.kad2025.gr/odigoi" },
        { "@type": "ListItem", position: 3, name: "Πώς Αλλάζω ΚΑΔ", item: "https://www.kad2025.gr/pos-allazw-kad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "HowTo",
      name: "Πώς να αλλάξετε ΚΑΔ μέσω myAADE",
      step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.desc })),
    },
  ],
};

export default function PosAllazwKadPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>{" → "}
        <Link href="/odigoi" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>{" → "}
        <span>Πώς Αλλάζω ΚΑΔ</span>
      </nav>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
        ⏰ Προθεσμία χωρίς πρόστιμο: <strong>1 Ιουνίου 2026</strong>
      </div>

      <h1 style={{ marginBottom: "0.5rem" }}>Πώς Αλλάζω ΚΑΔ;</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Η αλλαγή ΚΑΔ γίνεται μέσω <strong>Μεταβολής Εργασιών</strong> στο myAADE ή στη ΔΟΥ σας.
        Έχετε έως <strong>1/6/2026</strong> να διορθώσετε χωρίς κυρώσεις.
      </p>

      {/* Steps */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>Βήμα-προς-Βήμα μέσω myAADE</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {STEPS.map((s) => (
            <div key={s.n} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--primary)", color: "white", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{s.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
                {s.link && <Link href={s.link.href} style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", display: "block", marginTop: "0.4rem" }}>{s.link.label}</Link>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.35rem" }}>❓ {f.q}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Σχετικά</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/antistoixisi", label: "🔄 Βρείτε τον νέο ΚΑΔ 2025 σας" },
            { href: "/lathos-antistoixisi", label: "⚠️ Λάθος αντιστοίχιση — τι κάνω" },
            { href: "/prothesmia-kad-2025", label: "⏰ Προθεσμία ΚΑΔ 2025" },
            { href: "/odigies-logistes", label: "📋 Οδηγός για λογιστές" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
