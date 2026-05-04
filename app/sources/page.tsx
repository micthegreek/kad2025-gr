import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πηγές & Επίσημες Αναφορές — kad2025.gr",
  description:
    "Πλήρης λίστα επίσημων πηγών και αναφορών που χρησιμοποιεί το kad2025.gr: αποφάσεις ΑΑΔΕ, ευρωπαϊκά πρότυπα NACE και κυβερνητικές υπηρεσίες.",
  alternates: { canonical: "https://www.kad2025.gr/sources" },
};

export default function SourcesPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/about" style={{ color: "var(--primary)", textDecoration: "none" }}>Σχετικά</Link>
        {" → "}
        <span>Πηγές</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem" }}>Πηγές & Επίσημες Αναφορές</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Όλες οι πληροφορίες του kad2025.gr βασίζονται αποκλειστικά σε επίσημες πηγές.
      </p>

      {/* Primary sources */}
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>🏛️ Πρωτεύουσες Πηγές (ΑΑΔΕ)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              ref: "Α.1003/2026",
              title: "Νέοι Κωδικοί Αριθμοί Δραστηριότητας (ΚΑΔ 2025)",
              body: "Απόφαση Διοικητή ΑΑΔΕ που ορίζει το νέο σύστημα ΚΑΔ 2025 βάσει NACE Rev.2.1. Δημοσιεύτηκε στη ΦΕΚ και ισχύει από 1η Μαρτίου 2026. Περιέχει τους 10.923 νέους κωδικούς με πλήρεις περιγραφές.",
              source: "aade.gr",
            },
            {
              ref: "Α.1004/2026",
              title: "Πίνακας Αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025",
              body: "Επίσημος πίνακας μετάβασης που χρησιμοποιήθηκε για την αυτόματη αντιστοίχιση 1,9 εκ. επιχειρήσεων στις 9 Μαρτίου 2026. Αποτελεί τη βάση της βάσης δεδομένων του kad2025.gr.",
              source: "aade.gr",
            },
            {
              ref: "myaade.gov.gr",
              title: "Πύλη Ψηφιακών Υπηρεσιών ΑΑΔΕ",
              body: "Επίσημη πύλη μέσω της οποίας οι επιχειρήσεις μπορούν να ελέγξουν και να διορθώσουν τον ΚΑΔ τους. Χρησιμοποιείτε αυτή την πύλη για κάθε επίσημη ενέργεια.",
              source: "myaade.gov.gr",
              href: "https://myaade.gov.gr",
            },
          ].map((s) => (
            <div key={s.ref} style={{ padding: "1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--primary)", borderRadius: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{s.ref}</span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "var(--bg-card)", padding: "0.15rem 0.5rem", borderRadius: 4, border: "1px solid var(--border)" }}>
                  📎 {s.source}
                </span>
              </div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{s.title}</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              {s.href && (
                <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontSize: "0.82rem", display: "inline-block", marginTop: "0.4rem" }}>
                  Επισκεφθείτε →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* European sources */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>🇪🇺 Ευρωπαϊκές Πηγές</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              ref: "NACE Rev.2.1",
              title: "Statistical classification of economic activities in the European Community",
              body: "Το ευρωπαϊκό πρότυπο ταξινόμησης οικονομικών δραστηριοτήτων (Eurostat). Το νέο ΚΑΔ 2025 εναρμονίζεται πλήρως με αυτό το πρότυπο.",
              source: "ec.europa.eu/eurostat",
            },
            {
              ref: "Κανονισμός (ΕΕ) 2023/137",
              title: "Τροποποίηση στατιστικής ταξινόμησης οικονομικών δραστηριοτήτων",
              body: "Ο Ευρωπαϊκός κανονισμός που υποχρεώνει τα κράτη-μέλη να υιοθετήσουν το NACE Rev.2.1.",
              source: "eur-lex.europa.eu",
            },
          ].map((s) => (
            <div key={s.ref} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid #3b82f6", borderRadius: 8 }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, color: "#1e40af", fontSize: "0.88rem" }}>{s.ref}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>· {s.source}</span>
              </div>
              <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{s.title}</div>
              <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, margin: 0 }}>
          ⚠️ <strong>Αποποίηση ευθύνης:</strong> Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο
          και δεν συνδέεται με την ΑΑΔΕ ή οποιαδήποτε κυβερνητική αρχή. Οι πληροφορίες παρέχονται
          αποκλειστικά για ενημερωτικούς σκοπούς. Για επίσημες ενέργειες απευθυνθείτε στον
          λογιστή σας ή στο{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link href="/methodology" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>⚙️ Μεθοδολογία</Link>
        <Link href="/about" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>ℹ️ Σχετικά με εμάς</Link>
      </div>
    </div>
  );
}
