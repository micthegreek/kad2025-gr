import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Λάθος ΚΑΔ 2025; Βήματα Διόρθωσης",
  description:
    "Αν η ΑΑΔΕ αντιστοίχησε λάθος τον ΚΑΔ σας, έχετε έως 1/6/2026 να το διορθώσετε χωρίς πρόστιμο. Δείτε πώς μέσω myAADE βήμα-βήμα.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.kad2025.gr/lathos-antistoixisi" },
  openGraph: {
    title: "Λάθος Αντιστοίχιση ΚΑΔ 2025; Πώς να το Διορθώσετε",
    description: "Οδηγός διόρθωσης λανθασμένης αντιστοίχισης ΚΑΔ 2025 μέσω myAADE. Χωρίς πρόστιμο έως 1/6/2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Λάθος Αντιστοίχιση ΚΑΔ", item: "https://www.kad2025.gr/lathos-antistoixisi" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Τι κάνω αν ο ΚΑΔ μου αντιστοιχίστηκε λάθος;",
          acceptedAnswer: { "@type": "Answer", text: "Πηγαίνετε στο myAADE → Μεταβολή Εργασιών → επιλέξτε τον σωστό ΚΑΔ 2025. Έχετε έως 1/6/2026 χωρίς πρόστιμο." },
        },
        {
          "@type": "Question",
          name: "Μέχρι πότε μπορώ να διορθώσω τον ΚΑΔ χωρίς πρόστιμο;",
          acceptedAnswer: { "@type": "Answer", text: "Έως 1η Ιουνίου 2026 μπορείτε να διορθώσετε χωρίς κυρώσεις." },
        },
      ],
    },
  ],
};

export default function LathosAntistoixisiPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Λάθος Αντιστοίχιση ΚΑΔ</span>
      </nav>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
        ⏰ Προθεσμία διόρθωσης χωρίς πρόστιμο: <strong>1 Ιουνίου 2026</strong>
      </div>

      <h1 style={{ marginBottom: "0.5rem" }}>Τι Κάνω αν ο ΚΑΔ Αντιστοιχίστηκε Λάθος;</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Η ΑΑΔΕ ολοκλήρωσε αυτόματη αντιστοίχιση ΚΑΔ στις 9 Μαρτίου 2026. Αν δεν συμφωνείτε με
        τον νέο ΚΑΔ 2025 που σας ανατέθηκε, έχετε δικαίωμα διόρθωσης έως <strong>1η Ιουνίου 2026</strong> χωρίς πρόστιμο.
      </p>

      {/* Step 1: Check */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Βήμα 1: Ελέγξτε τον τρέχοντα ΚΑΔ σας</h2>
        <div className="card" style={{ marginBottom: "0.75rem" }}>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            Πριν κάνετε οτιδήποτε, επιβεβαιώστε ποιος ΚΑΔ 2025 σας αντιστοιχίστηκε:
          </p>
          <ol style={{ paddingLeft: "1.5rem", fontSize: "0.875rem", lineHeight: 2 }}>
            <li>Συνδεθείτε στο <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myAADE.gr</a></li>
            <li>Μεταβείτε σε «Στοιχεία Επιχείρησης» ή «Μητρώο»</li>
            <li>Δείτε τον ΚΑΔ που εμφανίζεται τώρα</li>
          </ol>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
            🔍 Ελέγξτε τι αντιστοίχιση έπρεπε να γίνει
          </Link>
          <Link href="/antistoixisi-2025" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
            🔄 Βρείτε σωστό ΚΑΔ 2025
          </Link>
        </div>
      </section>

      {/* Step 2: Correct */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Βήμα 2: Κάντε Διόρθωση στο myAADE</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { n: "1", title: "Ψηφιακή διόρθωση (προτιμητέα)", desc: 'Συνδεθείτε στο myAADE → «Μεταβολή Εργασιών» → επιλέξτε «Μεταβολή ΚΑΔ» → αναζητήστε και επιλέξτε τον σωστό ΚΑΔ 2025.' },
            { n: "2", title: "Αν δεν μπορεί να γίνει ψηφιακά", desc: 'Υποβάλλετε αίτημα μέσω «Τα Αιτήματά μου» στο myAADE, με συνημμένο το έντυπο Δ211 συμπληρωμένο.' },
            { n: "3", title: "Αν δεν έχετε πρόσβαση στο myAADE", desc: 'Επισκεφτείτε τη ΔΟΥ σας με το έντυπο Δ211 και τα σχετικά δικαιολογητικά.' },
          ].map((s) => (
            <div key={s.n} className="card" style={{ display: "flex", gap: "1rem" }}>
              <div style={{ background: "var(--accent)", color: "#1a1a1a", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>
                {s.n}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When NOT to change */}
      <section className="card" style={{ marginBottom: "2rem", borderLeft: "3px solid var(--success)" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>✅ Πότε ΔΕΝ χρειάζεται να κάνετε τίποτα</h2>
        <div style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
          <p>Δεν χρειάζεται ενέργεια εάν:</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Ο νέος ΚΑΔ 2025 που σας αντιστοιχίστηκε καλύπτει επαρκώς τη δραστηριότητά σας</li>
            <li>Ο παλιός ΚΑΔ 2008 παρέμεινε αμετάβλητος (3.683 ΚΑΔ δεν άλλαξαν)</li>
            <li>Η αλλαγή είναι μόνο μορφολογική (αριθμός) χωρίς ουσιαστική διαφορά στη δραστηριότητα</li>
          </ul>
        </div>
        <Link href="/den-xreiazetai-allagi" style={{ color: "var(--primary)", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", display: "block", marginTop: "0.75rem" }}>
          Δείτε αναλυτικά πότε δεν χρειάζεται αλλαγή →
        </Link>
      </section>

      {/* Related */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Σχετικά</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/antistoixisi", label: "🔍 Αντιστοίχιση ΚΑΔ 2008 → 2025" },
            { href: "/antistoixisi-2025", label: "🔄 Εύρεση σωστού ΚΑΔ 2025" },
            { href: "/odigies-logistes", label: "📋 Οδηγός για Λογιστές" },
            { href: "/blog", label: "📖 Πλήρης Οδηγός Αλλαγών ΚΑΔ 2025" },
            { href: "/statistika", label: "📊 Στατιστικά αλλαγών ανά κλάδο" },
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
