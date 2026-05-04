import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Μεθοδολογία Δεδομένων — Πώς Λειτουργεί το kad2025.gr",
  description:
    "Αναλυτική περιγραφή της μεθοδολογίας που χρησιμοποιεί το kad2025.gr για την αντιστοίχιση ΚΑΔ 2008→2025 από τα επίσημα δεδομένα ΑΑΔΕ.",
  alternates: { canonical: "https://www.kad2025.gr/methodology" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Μεθοδολογία Δεδομένων kad2025.gr",
  description: "Πώς επεξεργαζόμαστε τα επίσημα δεδομένα ΑΑΔΕ για την αντιστοίχιση ΚΑΔ",
  datePublished: "2026-03-01",
  dateModified: "2026-04-01",
  author: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
  publisher: { "@type": "Organization", name: "kad2025.gr" },
};

export default function MethodologyPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/about" style={{ color: "var(--primary)", textDecoration: "none" }}>Σχετικά</Link>
        {" → "}
        <span>Μεθοδολογία</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem" }}>Μεθοδολογία Δεδομένων</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Πώς λειτουργεί η βάση δεδομένων του kad2025.gr · Τελευταία ενημέρωση: Απρίλιος 2026
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πηγές Δεδομένων</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Τα δεδομένα αντιστοίχισης του kad2025.gr προέρχονται <strong>αποκλειστικά</strong> από
          επίσημες κυβερνητικές αποφάσεις που δημοσιεύτηκαν στην Εφημερίδα της Κυβερνήσεως (ΦΕΚ)
          και στον ιστότοπο της ΑΑΔΕ:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              title: "Απόφαση ΑΑΔΕ Α.1003/2026",
              desc: "Ορίζει το πλήρες σύστημα ΚΑΔ 2025 βάσει του ευρωπαϊκού προτύπου NACE Rev.2.1. Περιέχει 10.923 κωδικούς οικονομικής δραστηριότητας. Ισχύς από 1η Μαρτίου 2026.",
            },
            {
              title: "Απόφαση ΑΑΔΕ Α.1004/2026",
              desc: "Περιέχει τον επίσημο πίνακα αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025 για κάθε κωδικό. Βάσει αυτού του πίνακα η ΑΑΔΕ πραγματοποίησε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026.",
            },
            {
              title: "NACE Rev.2.1 (Eurostat)",
              desc: "Το ευρωπαϊκό πρότυπο ταξινόμησης οικονομικών δραστηριοτήτων που αποτελεί τη βάση του νέου ΚΑΔ 2025. Ισχύει σε όλα τα κράτη-μέλη ΕΕ.",
            },
          ].map((s) => (
            <div key={s.title} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--primary)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{s.title}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Επεξεργασία Δεδομένων</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Τα αρχεία της ΑΑΔΕ μετατράπηκαν σε δομημένη βάση δεδομένων ακολουθώντας τα εξής βήματα:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>Λήψη επίσημων αρχείων από τον ιστότοπο της ΑΑΔΕ (aade.gr)</li>
          <li>Επαλήθευση πληρότητας — έλεγχος ότι όλοι οι ΚΑΔ 2008 έχουν αντιστοίχιση</li>
          <li>Κανονικοποίηση κωδικών — ομοιόμορφη αναπαράσταση 8ψήφιων κωδικών</li>
          <li>Εντοπισμός πολλαπλών αντιστοιχίσεων (1 ΚΑΔ 2008 → πολλοί ΚΑΔ 2025)</li>
          <li>Εμπλουτισμός με δεδομένα κλάδου από NACE Rev.2.1</li>
          <li>Ποιοτικός έλεγχος — δειγματοληπτική επαλήθευση έναντι των επίσημων αρχείων</li>
        </ol>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Ακρίβεια & Περιορισμοί</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το kad2025.gr καταβάλλει κάθε δυνατή προσπάθεια για την ακρίβεια των δεδομένων.
          Ωστόσο, υπάρχουν ορισμένοι ενδογενείς περιορισμοί:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>
            <strong>Πολλαπλές αντιστοιχίσεις:</strong> Ορισμένοι ΚΑΔ 2008 αντιστοιχίζονται σε
            περισσότερους από έναν ΚΑΔ 2025. Η επιλογή του σωστού κωδικού απαιτεί εξέταση
            της συγκεκριμένης δραστηριότητας.
          </li>
          <li>
            <strong>Ερμηνεία περιγραφών:</strong> Οι περιγραφές αντιγράφονται αυτούσιες από
            τις επίσημες αποφάσεις — δεν αποτελούν ερμηνεία ή νομική συμβουλή.
          </li>
          <li>
            <strong>Ενημερώσεις:</strong> Τυχόν τροποποιήσεις των επίσημων αποφάσεων θα
            αντικατοπτριστούν στη βάση δεδομένων εντός εύλογου χρόνου.
          </li>
        </ul>
        <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.75rem 1rem", marginTop: "1rem", fontSize: "0.875rem", color: "#78350f" }}>
          ⚠️ <strong>Σημαντικό:</strong> Για οποιαδήποτε επίσημη ενέργεια σχετική με τον ΚΑΔ σας,
          παρακαλούμε επικοινωνήστε με εξουσιοδοτημένο λογιστή ή επισκεφθείτε το{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Διαδικασία Αναφοράς Σφαλμάτων</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν εντοπίσετε σφάλμα στην αντιστοίχιση, μπορείτε να μας το αναφέρετε:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>Αποστολή email στο <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)" }}>info@kad2025.gr</a></li>
          <li>Αναφέρετε: ΚΑΔ 2008, ΚΑΔ 2025 που εμφανίζεται, και ΚΑΔ 2025 που θεωρείτε σωστό</li>
          <li>Επαλήθευση έναντι επίσημων αρχείων ΑΑΔΕ</li>
          <li>Διόρθωση εντός 48 ωρών αν επιβεβαιωθεί σφάλμα</li>
        </ol>
      </section>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link href="/sources" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>📚 Πηγές & Αναφορές</Link>
        <Link href="/about" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>ℹ️ Σχετικά με εμάς</Link>
        <Link href="/contact" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✉️ Αναφορά σφάλματος</Link>
      </div>
    </div>
  );
}
