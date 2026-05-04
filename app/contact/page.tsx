import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Επικοινωνία — kad2025.gr",
  description: "Επικοινωνήστε με την ομάδα του kad2025.gr για αναφορά λαθών, ερωτήσεις δεδομένων, τεχνικά θέματα ή αιτήματα GDPR.",
  alternates: { canonical: "https://www.kad2025.gr/contact" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Επικοινωνία — kad2025.gr",
  url: "https://www.kad2025.gr/contact",
  description: "Επικοινωνήστε με το kad2025.gr",
  publisher: { "@type": "Organization", name: "kad2025.gr", email: "info@kad2025.gr" },
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Επικοινωνία</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Επικοινωνία</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Η ομάδα του kad2025.gr είναι διαθέσιμη για ερωτήσεις, αναφορές λαθών και αιτήματα.
        Απαντάμε εντός <strong>1-2 εργάσιμων ημερών</strong>.
      </p>

      {/* Main contact */}
      <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>📧 Αποστολή Email</h2>
        <p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>
          Ο κύριος τρόπος επικοινωνίας είναι μέσω email. Στείλτε μας το μήνυμά σας στη διεύθυνση:
        </p>
        <a
          href="mailto:info@kad2025.gr"
          style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem", display: "block", marginBottom: "0.5rem" }}
        >
          info@kad2025.gr
        </a>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Ώρες απόκρισης: Δευτέρα–Παρασκευή, 09:00–18:00
        </p>
      </div>

      {/* Reasons to contact */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Για τι μπορείτε να επικοινωνήσετε</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              icon: "⚠️",
              title: "Αναφορά λανθασμένης αντιστοίχισης",
              desc: "Εντοπίσατε εσφαλμένη αντιστοίχιση ΚΑΔ 2008→2025; Αναφέρετε: (α) τον ΚΑΔ 2008, (β) τον ΚΑΔ 2025 που εμφανίζεται, (γ) τον ΚΑΔ 2025 που θεωρείτε σωστό. Ελέγχουμε και διορθώνουμε εντός 48 ωρών.",
            },
            {
              icon: "🔧",
              title: "Τεχνικό πρόβλημα",
              desc: "Αντιμετωπίζετε πρόβλημα με κάποιο εργαλείο, σελίδα που δεν φορτώνει ή άλλο τεχνικό θέμα; Περιγράψτε το πρόβλημα και τον browser που χρησιμοποιείτε.",
            },
            {
              icon: "🔒",
              title: "Αίτημα GDPR / Προσωπικά Δεδομένα",
              desc: "Για άσκηση δικαιωμάτων GDPR (πρόσβαση, διόρθωση, διαγραφή) σύμφωνα με την Πολιτική Απορρήτου μας. Απαντάμε εντός 30 ημερών.",
            },
            {
              icon: "💡",
              title: "Πρόταση βελτίωσης",
              desc: "Έχετε ιδέα για νέο εργαλείο ή βελτίωση υπάρχοντος; Χαιρετίζουμε τις προτάσεις της κοινότητας.",
            },
            {
              icon: "❓",
              title: "Ερώτηση για τα δεδομένα",
              desc: "Ερώτηση για τη μεθοδολογία, τις πηγές δεδομένων ή τον τρόπο ενημέρωσης της βάσης δεδομένων.",
            },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="card" style={{ marginBottom: "1.5rem", background: "#fef3c7", border: "1px solid #f59e0b" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "#92400e" }}>⚠️ Σημαντική Σημείωση</h2>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7 }}>
          Το kad2025.gr είναι <strong>ενημερωτικό εργαλείο</strong> και δεν παρέχει φορολογικές,
          λογιστικές ή νομικές συμβουλές. Δεν μπορούμε να απαντήσουμε σε ερωτήσεις τύπου
          «ποιος ΚΑΔ ταιριάζει στην επιχείρησή μου» — αυτό απαιτεί εξουσιοδοτημένο λογιστή.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, marginTop: "0.5rem" }}>
          Για <strong>επίσημες ενέργειες</strong> (αλλαγή ΚΑΔ, διόρθωση αντιστοίχισης) απευθυνθείτε
          στον λογιστή σας ή στο{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
        </p>
      </div>

      {/* Response time */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>⏱️ Χρόνοι Απόκρισης</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
          {[
            { type: "Αναφορά λάθους ΚΑΔ", time: "Έως 48 ώρες" },
            { type: "Τεχνικό πρόβλημα", time: "Έως 24 ώρες" },
            { type: "Αίτημα GDPR", time: "Έως 30 ημέρες" },
            { type: "Γενική ερώτηση", time: "1-2 εργάσιμες" },
          ].map((r) => (
            <div key={r.type} style={{ padding: "0.6rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, textAlign: "center" }}>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{r.type}</div>
              <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{r.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link href="/about" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>ℹ️ Σχετικά με εμάς</Link>
        <Link href="/privacy" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🔒 Πολιτική Απορρήτου</Link>
        <Link href="/methodology" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>⚙️ Μεθοδολογία</Link>
      </div>
    </div>
  );
}
