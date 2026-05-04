import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ για ΔΥΠΑ 2025 | Επιλέξιμοι Κωδικοί",
  description:
    "Ποιοι ΚΑΔ είναι αποδεκτοί για προγράμματα ΔΥΠΑ (πρώην ΟΑΕΔ) 2025-2026. Επιδοτούμενη απασχόληση, stage, νέοι εργαζόμενοι — ελέγξτε αν ο ΚΑΔ σας είναι επιλέξιμος.",
  keywords: [
    "καδ για δυπα",
    "καδ δυπα 2026",
    "επιλέξιμοι καδ δυπα",
    "καδ οαεδ",
    "επιδοτούμενη απασχόληση καδ",
    "stage καδ",
    "νέα θέση εργασίας καδ",
    "δυπα επιδότηση εργοδότη",
  ],
  alternates: { canonical: "https://www.kad2025.gr/kad-dypa" },
  openGraph: {
    title: "ΚΑΔ για ΔΥΠΑ 2025-2026",
    description: "Επιλέξιμοι ΚΑΔ για προγράμματα ΔΥΠΑ επιδοτούμενης απασχόλησης.",
    url: "https://www.kad2025.gr/kad-dypa",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ΚΑΔ για ΔΥΠΑ 2025-2026",
  description: "Οδηγός επιλεξιμότητας ΚΑΔ για προγράμματα ΔΥΠΑ.",
  url: "https://www.kad2025.gr/kad-dypa",
  inLanguage: "el",
  author: { "@type": "Organization", name: "kad2025.gr" },
  datePublished: "2026-04-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const PROGRAMS = [
  {
    title: "Πρόγραμμα Επιδοτούμενης Εργασίας",
    icon: "💼",
    desc: "Η ΔΥΠΑ επιδοτεί εργοδότες για τη δημιουργία νέων θέσεων εργασίας. Η επιλεξιμότητα εξαρτάται κυρίως από τον κλάδο δραστηριότητας (ΚΑΔ) της επιχείρησης.",
    eligible: ["Μεταποίηση (ΚΑΔ 10-33)", "Κατασκευές (ΚΑΔ 41-43)", "Τουρισμός (ΚΑΔ 55-56)", "IT & Τεχνολογία (ΚΑΔ 62-63)", "Υγεία (ΚΑΔ 86-88)"],
    excluded: "Δημόσιος τομέας, τυχερά παιχνίδια, χρηματοοικονομικά.",
  },
  {
    title: "Stage & Πρακτική Άσκηση",
    icon: "🎓",
    desc: "Επιδοτούμενη πρακτική άσκηση για νέους ανέργους ηλικίας 18-29. Σχεδόν όλοι οι ιδιωτικοί κλάδοι είναι επιλέξιμοι.",
    eligible: ["Εμπόριο (ΚΑΔ 46-47)", "Επαγγελματικές Υπηρεσίες (ΚΑΔ 69-71)", "IT (ΚΑΔ 62)", "Εστίαση (ΚΑΔ 56)", "Εκπαίδευση (ΚΑΔ 85)"],
    excluded: "Ατομικές επιχειρήσεις χωρίς προσωπικό, OE/EE χωρίς μισθωτούς.",
  },
  {
    title: "Voucher Κατάρτισης",
    icon: "📚",
    desc: "Επιταγές κατάρτισης για ανέργους. Οι εργοδότες που απορροφούν ωφελούμενους δεν χρειάζονται ειδικό ΚΑΔ — ισχύουν σχεδόν για όλους.",
    eligible: ["Όλοι οι ιδιωτικοί κλάδοι", "ΚΑΔ 56 (Εστίαση)", "ΚΑΔ 47 (Λιανικό)", "ΚΑΔ 62 (IT)", "ΚΑΔ 86 (Υγεία)"],
    excluded: "Δεν εφαρμόζεται περιορισμός ΚΑΔ στα περισσότερα voucher.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Ισχύει ο νέος ΚΑΔ 2025 για αιτήσεις ΔΥΠΑ;",
    a: "Ναι. Από τον Μάρτιο 2026, οι αιτήσεις αξιολογούνται βάσει ΚΑΔ 2025. Βεβαιωθείτε ότι ο ΚΑΔ σας έχει αντιστοιχιστεί σωστά πριν υποβάλετε αίτηση στη ΔΥΠΑ.",
  },
  {
    q: "Τι γίνεται αν ο ΚΑΔ μου άλλαξε και δεν είναι πλέον επιλέξιμος;",
    a: "Έχετε έως 1/6/2026 να διορθώσετε τον ΚΑΔ σας στο myAADE χωρίς πρόστιμο. Αν η αυτόματη αντιστοίχιση ΑΑΔΕ οδήγησε σε λάθος ΚΑΔ, μπορείτε να το διορθώσετε.",
  },
  {
    q: "Πού βρίσκω τους επιλέξιμους ΚΑΔ κάθε προγράμματος ΔΥΠΑ;",
    a: "Στον επίσημο οδηγό κάθε πρόσκλησης στο dypa.gov.gr. Κάθε πρόγραμμα αναρτά αναλυτική λίστα αποδεκτών ΚΑΔ.",
  },
];

export default function KadDypaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
        <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
          {" → "}
          <span>ΚΑΔ για ΔΥΠΑ</span>
        </nav>

        <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #0369a1" }}>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            👷 ΚΑΔ για ΔΥΠΑ 2025-2026
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Η <strong>ΔΥΠΑ (Δημόσια Υπηρεσία Απασχόλησης)</strong>, πρώην ΟΑΕΔ, χρηματοδοτεί
            προγράμματα επιδοτούμενης απασχόλησης. Ο <strong>ΚΑΔ 2025</strong> της επιχείρησής
            σας καθορίζει αν είστε επιλέξιμοι. Ελέγξτε πρώτα ότι ο ΚΑΔ σας είναι σωστός.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "var(--bg)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <strong>⚠️ Προσοχή:</strong> Από 1/3/2026 ισχύουν οι ΚΑΔ 2025. Αν η ΑΑΔΕ σας αντιστοίχισε
            σε λάθος κωδικό, διορθώστε τον <strong>έως 1/6/2026</strong>.
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" style={{
            display: "inline-block", background: "var(--primary)", color: "white",
            padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 600
          }}>
            ✅ Ελέγξτε τον ΚΑΔ σας
          </Link>
          <Link href="/pos-allazw-kad" style={{
            display: "inline-block", background: "var(--bg)", color: "var(--text)",
            padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 600,
            border: "1px solid var(--border)"
          }}>
            🔧 Πώς αλλάζω ΚΑΔ
          </Link>
        </div>

        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Προγράμματα ΔΥΠΑ & Επιλέξιμοι Κλάδοι
        </h2>

        {PROGRAMS.map((prog) => (
          <div key={prog.title} className="card" style={{ marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              {prog.icon} {prog.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>{prog.desc}</p>
            <strong style={{ fontSize: "0.9rem" }}>Επιλέξιμοι κλάδοι:</strong>
            <ul style={{ margin: "0.5rem 0 0.75rem 1.25rem", lineHeight: 1.9 }}>
              {prog.eligible.map((s) => <li key={s} style={{ fontSize: "0.9rem" }}>{s}</li>)}
            </ul>
            <div style={{ padding: "0.5rem 0.75rem", background: "var(--bg)", borderRadius: 6, fontSize: "0.85rem", color: "var(--text-muted)" }}>
              ❌ Εξαιρούνται: {prog.excluded}
            </div>
          </div>
        ))}

        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις (FAQ ΑΑΔΕ)</h2>
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border)" }}>
              <strong style={{ fontSize: "0.95rem" }}>Q: {item.q}</strong>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.35rem", lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            { href: "/kad-epidotisi-espa", label: "ΚΑΔ για ΕΣΠΑ" },
            { href: "/prothesmia-kad-2025", label: "Προθεσμία 1/6/2026" },
            { href: "/lathos-antistoixisi", label: "Λάθος ΚΑΔ;" },
            { href: "/odigies-logistes", label: "Οδηγός Λογιστών" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "0.75rem", background: "var(--bg)",
              border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none",
              color: "var(--primary)", fontWeight: 500, fontSize: "0.9rem", textAlign: "center"
            }}>
              {l.label} →
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
