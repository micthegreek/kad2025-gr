import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Μεθοδολογία Δεδομένων kad2025.gr — Πώς Επεξεργαζόμαστε τα ΚΑΔ",
  description:
    "Αναλυτική παρουσίαση της μεθοδολογίας επεξεργασίας δεδομένων του kad2025.gr: πηγές, επαλήθευση, ενημέρωση και ορθή χρήση των αντιστοιχίσεων ΚΑΔ.",
  alternates: { canonical: "https://www.kad2025.gr/blog/metodologia-dedomenon" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Μεθοδολογία Δεδομένων kad2025.gr",
  datePublished: "2026-04-01",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function MetodologiaPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Μεθοδολογία Δεδομένων</span>
      </nav>

      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 1 Απριλίου 2026</span><span>·</span>
        <span>✍️ Ομάδα kad2025.gr</span><span>·</span>
        <span>⏱️ 5 λεπτά ανάγνωση</span>
      </div>

      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Μεθοδολογία Δεδομένων kad2025.gr — Πώς Επεξεργαζόμαστε τα ΚΑΔ
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η διαφάνεια στον τρόπο που δουλεύουμε είναι θεμελιώδης αξία για το kad2025.gr.
        Εδώ εξηγούμε αναλυτικά πώς συλλέγουμε, επεξεργαζόμαστε και ενημερώνουμε τα δεδομένα
        αντιστοίχισης ΚΑΔ.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Από πού προέρχονται τα δεδομένα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          <strong>Αποκλειστική πηγή:</strong> Επίσημες αποφάσεις της Ανεξάρτητης Αρχής Δημοσίων
          Εσόδων (ΑΑΔΕ), δημοσιευμένες στην Εφημερίδα της Κυβερνήσεως (ΦΕΚ):
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li><strong>Α.1003/2026:</strong> Ορίζει τους 10.923 νέους κωδικούς ΚΑΔ 2025 βάσει NACE Rev.2.1</li>
          <li><strong>Α.1004/2026:</strong> Επίσημος πίνακας αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025</li>
        </ul>
        <p style={{ lineHeight: 1.8, marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          Δεν χρησιμοποιούμε ανεπίσημες πηγές, εκτιμήσεις ή AI-generated αντιστοιχίσεις.
          Κάθε εγγραφή στη βάση μας είναι 1-1 αντιγραφή από τα επίσημα αρχεία ΑΑΔΕ.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι σημαίνουν οι πολλαπλές αντιστοιχίσεις</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η απόφαση Α.1004/2026 περιέχει περιπτώσεις όπου ένας παλιός ΚΑΔ 2008 αντιστοιχίζεται
          σε <strong>περισσότερους από έναν νέους ΚΑΔ 2025</strong>. Αυτό συμβαίνει επειδή το
          νέο σύστημα NACE Rev.2.1 διαχωρίζει ορισμένες δραστηριότητες που προηγουμένως
          ομαδοποιούνταν σε έναν κωδικό.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Στο kad2025.gr εμφανίζουμε <strong>όλες τις εναλλακτικές αντιστοιχίσεις</strong> για
          κάθε ΚΑΔ, ακριβώς όπως ορίζει η επίσημη απόφαση — χωρίς να επιλέγουμε ή να
          προτείνουμε εμείς ποια είναι η &quot;σωστή&quot;. Η επιλογή ανήκει στην επιχείρηση
          και τον λογιστή της.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πότε ενημερώνονται τα δεδομένα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Παρακολουθούμε τακτικά τον ιστότοπο της ΑΑΔΕ για τυχόν τροποποιήσεις ή διορθώσεις
          στις αποφάσεις Α.1003/2026 και Α.1004/2026. Σε περίπτωση ενημέρωσης:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>Επαληθεύουμε την αλλαγή έναντι του επίσημου ΦΕΚ</li>
          <li>Ενημερώνουμε τη βάση δεδομένων</li>
          <li>Ενημερώνουμε την ημερομηνία τελευταίας ενημέρωσης στις σχετικές σελίδες</li>
        </ol>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Αν εντοπίσετε ασυμφωνία μεταξύ των δεδομένων μας και της επίσημης απόφασης,
          παρακαλούμε ενημερώστε μας στο <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)" }}>info@kad2025.gr</a>.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem", background: "#fef3c7", border: "1px solid #f59e0b" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "#92400e" }}>⚠️ Όρια χρήσης</h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#78350f", margin: 0 }}>
          Τα δεδομένα του kad2025.gr παρέχονται <strong>αποκλειστικά για ενημερωτικούς σκοπούς</strong>.
          Δεν αποτελούν φορολογική, νομική ή λογιστική συμβουλή. Για οποιαδήποτε επίσημη
          ενέργεια (αλλαγή ΚΑΔ, δήλωση έναρξης), απευθυνθείτε στον λογιστή σας ή στο{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
        </p>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/methodology" className="btn btn-primary">⚙️ Τεχνική Μεθοδολογία</Link>
        <Link href="/sources" className="btn btn-ghost">📚 Πηγές & Αναφορές</Link>
        <Link href="/about" className="btn btn-ghost">ℹ️ Σχετικά με εμάς</Link>
      </div>
    </div>
  );
}
