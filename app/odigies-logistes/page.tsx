import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Οδηγός ΚΑΔ 2025 για Λογιστές",
  description:
    "Οδηγός για λογιστές: μαζική αντιστοίχιση ΚΑΔ 2025 πελατών. Εργαλεία ελέγχου, βήματα και προθεσμίες.",
  alternates: { canonical: "https://www.kad2025.gr/odigies-logistes" },
  openGraph: {
    title: "Οδηγός ΚΑΔ 2025 για Λογιστές — Μαζική Αντιστοίχιση",
    description: "Ελέγξτε και αντιστοιχίστε τους ΚΑΔ 2025 όλων των πελατών σας αποτελεσματικά.",
  },
};

const STEPS = [
  {
    n: "1",
    title: "Εξάγετε λίστα ΑΦΜ/ΚΑΔ από το λογιστικό σας σύστημα",
    desc: "Από το ERP ή λογιστικό πρόγραμμά σας, εξάγετε λίστα με όλους τους πελάτες και τους ΚΑΔ 2008 τους. Αρκεί ένα Excel με δύο στήλες: ΑΦΜ και ΚΑΔ.",
  },
  {
    n: "2",
    title: "Μαζική αντιστοίχιση μέσω kad2025.gr",
    desc: "Χρησιμοποιήστε το εργαλείο Μαζικής Αντιστοίχισης. Επικολλήστε έως 500 ΚΑΔ ταυτόχρονα και λάβετε αμέσως τους νέους ΚΑΔ 2025 σε Excel ή CSV.",
  },
  {
    n: "3",
    title: "Ελέγξτε τις αυτόματες αντιστοιχίσεις της ΑΑΔΕ",
    desc: "Η ΑΑΔΕ ολοκλήρωσε αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026 για 1,9 εκατ. επιχειρήσεις. Ελέγξτε στο myAADE αν συμφωνεί με τη δική σας αντιστοίχιση.",
  },
  {
    n: "4",
    title: "Εντοπίστε τις περιπτώσεις που χρειάζονται διόρθωση",
    desc: "Εστιάστε στους κλάδους με τα υψηλότερα ποσοστά αλλαγής: Λιανικό Εμπόριο (98%), Χονδρικό (87%), Γεωργία (85%). Εκεί είναι πιο πιθανό να χρειαστεί επίβλεψη.",
  },
  {
    n: "5",
    title: "Υποβολή διορθώσεων στο myAADE έως 1/6/2026",
    desc: "Αν η αυτόματη αντιστοίχιση δεν είναι σωστή, διορθώστε μέσω «Μεταβολή Εργασιών» στο myAADE ή με έντυπο Δ211. Έως 1 Ιουνίου 2026 χωρίς πρόστιμο.",
  },
];

const FAQS = [
  {
    q: "Μπορώ να κάνω μαζική διόρθωση ΚΑΔ για πολλούς πελάτες ταυτόχρονα;",
    a: "Όχι — κάθε διόρθωση γίνεται ξεχωριστά για κάθε ΑΦΜ μέσω myAADE. Η μαζική αντιστοίχιση του kad2025.gr σας βοηθά να προετοιμαστείτε και να εντοπίσετε ποιοι πελάτες χρειάζονται διόρθωση.",
  },
  {
    q: "Τι γίνεται αν ο πελάτης έχει πολλαπλούς ΚΑΔ;",
    a: "Κάθε ΚΑΔ αντιστοιχίζεται ξεχωριστά. Εισάγετε όλους τους ΚΑΔ του πελάτη στο μαζικό εργαλείο για να δείτε αν κάποιος άλλαξε.",
  },
  {
    q: "Υπάρχει πρόστιμο αν δεν διορθώσω εγκαίρως;",
    a: "Έως 1/6/2026 δεν υπάρχει πρόστιμο. Μετά την προθεσμία, μπορεί να επιβληθούν κυρώσεις βάσει της εκάστοτε νομοθεσίας.",
  },
  {
    q: "Τι κάνω αν ο νέος ΚΑΔ δεν περιγράφει σωστά τη δραστηριότητα;",
    a: "Επιλέξτε τον ΚΑΔ 2025 που καλύπτει καλύτερα τη δραστηριότητα μέσω Μεταβολής Εργασιών στο myAADE. Δεν είστε υποχρεωμένοι να αποδεχτείτε την αυτόματη αντιστοίχιση.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Οδηγός για Λογιστές", item: "https://www.kad2025.gr/odigies-logistes" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function OdigiesLogistesPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Οδηγός για Λογιστές</span>
      </nav>

      <div style={{ display: "inline-block", background: "var(--primary)", color: "white", fontSize: "0.78rem", padding: "0.2rem 0.6rem", borderRadius: 4, marginBottom: "0.75rem", fontWeight: 600 }}>
        ΓΙΑ ΛΟΓΙΣΤΕΣ
      </div>
      <h1 style={{ marginBottom: "0.5rem" }}>Οδηγός ΚΑΔ 2025 για Λογιστές</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Πρακτικός οδηγός βήμα-προς-βήμα για λογιστές που πρέπει να ελέγξουν και να αντιστοιχίσουν
        τους ΚΑΔ πολλών πελατών ταυτόχρονα. Εκμεταλλευτείτε το εργαλείο μαζικής αντιστοίχισης
        για να εξοικονομήσετε χρόνο.
      </p>

      {/* Quick CTA */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        <Link href="/maziki-2008" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
          📦 Μαζική Αντιστοίχιση έως 500 ΚΑΔ
        </Link>
        <Link href="/antistoixisi" className="btn btn-ghost" style={{ fontSize: "0.9rem" }}>
          🔍 Αναζήτηση μεμονωμένου ΚΑΔ
        </Link>
      </div>

      {/* Steps */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Βήμα-προς-Βήμα για Λογιστές</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {STEPS.map((s) => (
            <div key={s.n} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--primary)", color: "white", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
                {s.n}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High change sectors */}
      <section className="card" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>⚠️ Κλάδοι με Υψηλά Ποσοστά Αλλαγής</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
          Δώστε προτεραιότητα στους πελάτες αυτών των κλάδων — έχουν τα υψηλότερα ποσοστά αλλαγής ΚΑΔ:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
          {[
            { name: "Λιανικό Εμπόριο", pct: "98%", color: "#ef4444" },
            { name: "Χονδρικό Εμπόριο", pct: "87%", color: "#f97316" },
            { name: "Γεωργία & Κτηνοτροφία", pct: "85%", color: "#f97316" },
            { name: "Κατασκευές", pct: "72%", color: "#eab308" },
            { name: "Μεταφορές", pct: "65%", color: "#eab308" },
            { name: "Εστίαση", pct: "61%", color: "#84cc16" },
          ].map((s) => (
            <div key={s.name} style={{ padding: "0.6rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: s.color }}>{s.pct}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>ποσοστό αλλαγής</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/statistika" style={{ color: "var(--primary)", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
            📊 Πλήρη στατιστικά ανά κλάδο →
          </Link>
        </div>
      </section>

      {/* Checklist */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>✅ Checklist Λογιστή — Αντιστοίχιση ΚΑΔ Πελατών</h2>
        <div className="card" style={{ borderLeft: "4px solid var(--success)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Εξαγωγή λίστας πελατών με τους ΚΑΔ 2008 τους",
              "Μαζική αντιστοίχιση μέσω kad2025.gr (έως 500 ΚΑΔ ταυτόχρονα)",
              "Σύγκριση αποτελεσμάτων με αυτόματη αντιστοίχιση ΑΑΔΕ",
              "Εντοπισμός πελατών σε κλάδους υψηλής αλλαγής (Λιανικό 98%, Χονδρικό 87%)",
              "Ειδοποίηση πελατών που χρειάζονται διόρθωση",
              "Υποβολή διορθώσεων στο myAADE ή έντυπο Δ211",
              "Επιβεβαίωση νέων ΚΑΔ στο myAADE για κάθε πελάτη",
              "Ολοκλήρωση έως 1 Ιουνίου 2026 (χωρίς πρόστιμο)",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.875rem" }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις Λογιστών</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>❓ {f.q}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Χρήσιμα Εργαλεία</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/maziki-2008", label: "📦 Μαζική Αντιστοίχιση ΚΑΔ 2008 → 2025 (έως 500 κωδικοί)" },
            { href: "/maziki-2025", label: "📦 Μαζική Αντιστοίχιση ΚΑΔ 2025 → 2008" },
            { href: "/antistoixisi", label: "🔍 Αναζήτηση & Αντιστοίχιση ΚΑΔ 2008 → 2025" },
            { href: "/klados", label: "📂 ΚΑΔ ανά Κλάδο Δραστηριότητας" },
            { href: "/blog", label: "📖 Πλήρης Οδηγός Αλλαγών ΚΑΔ 2025" },
            { href: "/lathos-antistoixisi", label: "⚠️ Τι κάνω αν ο ΚΑΔ αντιστοιχίστηκε λάθος" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
