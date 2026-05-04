import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πώς να Διορθώσετε τον ΚΑΔ σας στο myAADE — Βήμα-βήμα Οδηγός 2026",
  description:
    "Αναλυτικός οδηγός για τη διόρθωση λανθασμένου ΚΑΔ 2025 στο myAADE: ηλεκτρονικά μέσω Μεταβολής Εργασιών ή με έντυπο Δ211. Προθεσμία 1η Ιουνίου 2026.",
  alternates: { canonical: "https://www.kad2025.gr/blog/pos-na-diorthoso-kad-myaade" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Πώς να Διορθώσετε τον ΚΑΔ σας στο myAADE",
  datePublished: "2026-04-15",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function PosNaDiorthosoKadPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Διόρθωση ΚΑΔ στο myAADE</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 15 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 7 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Πώς να Διορθώσετε τον ΚΑΔ σας στο myAADE — Βήμα-βήμα Οδηγός 2026
      </h1>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "1.5rem" }}>
        <strong style={{ color: "#92400e" }}>📅 Προθεσμία: 1η Ιουνίου 2026</strong>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, margin: "0.25rem 0 0" }}>
          Έως αυτή την ημερομηνία μπορείτε να διορθώσετε τον ΚΑΔ σας χωρίς πρόστιμο. Μετά, η
          διόρθωση παραμένει δυνατή αλλά με επιβολή προστίμου εκπρόθεσμης μεταβολής.
        </p>
      </div>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πότε χρειάζεται διόρθωση;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Χρειάζεστε διόρθωση αν ο νέος ΚΑΔ 2025 που εμφανίζεται στο myAADE δεν αντικατοπτρίζει
          την πραγματική σας επαγγελματική δραστηριότητα. Αυτό μπορεί να συμβαίνει γιατί:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {[
            "Η ΑΑΔΕ επέλεξε λάθος ΚΑΔ 2025 κατά την αυτόματη αντιστοίχιση",
            "Ο παλιός ΚΑΔ 2008 αντιστοιχούσε σε δύο ή περισσότερους ΚΑΔ 2025 και επιλέχθηκε ο λάθος",
            "Η επαγγελματική σας δραστηριότητα άλλαξε και ο νέος κωδικός δεν την αντικατοπτρίζει πλέον",
            "Επιθυμείτε να προσθέσετε ή να αφαιρέσετε δευτερεύοντες ΚΑΔ",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.35rem 0.6rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6 }}>
              <span style={{ color: "var(--primary)", flexShrink: 0 }}>•</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Μέθοδος 1: Ηλεκτρονικά μέσω myAADE</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Η ταχύτερη και ευκολότερη μέθοδος για την πλειοψηφία των περιπτώσεων:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { step: "Βήμα 1", desc: "Συνδεθείτε στο myaade.gov.gr με τους κωδικούς TAXISnet σας." },
            { step: "Βήμα 2", desc: "Μεταβείτε στην ενότητα «Μητρώο & Επικοινωνία» → «Μεταβολή Εργασιών»." },
            { step: "Βήμα 3", desc: "Επιλέξτε «Μεταβολή κύριας/δευτερεύουσας δραστηριότητας» και εισάγετε τον νέο ΚΑΔ 2025 που επιθυμείτε." },
            { step: "Βήμα 4", desc: "Ορίστε ημερομηνία μεταβολής — για αποφυγή προστίμου, επιλέξτε ημερομηνία εντός Μαρτίου-Ιουνίου 2026." },
            { step: "Βήμα 5", desc: "Υποβάλετε την αίτηση ηλεκτρονικά. Θα λάβετε αριθμό πρωτοκόλλου και ενημέρωση μέσω email." },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.6rem 0.9rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <span style={{ background: "var(--primary)", color: "white", padding: "0.1rem 0.4rem", borderRadius: 4, fontSize: "0.72rem", fontWeight: 700, flexShrink: 0, height: "fit-content", marginTop: "0.15rem" }}>{s.step}</span>
              <span style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Μέθοδος 2: Αυτοπρόσωπα με έντυπο Δ211</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Αν η ηλεκτρονική μέθοδος δεν είναι εφικτή (π.χ. τεχνικό πρόβλημα στο myAADE,
          αντιρρήσεις ΔΟΥ, περίπλοκη μεταβολή), χρησιμοποιήστε το έντυπο Δ211:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Κατεβάστε ή ζητήστε το έντυπο Δ211 «Δήλωση Μεταβολής Εργασιών» από την αρμόδια ΔΟΥ σας",
            "Συμπληρώστε τα στοιχεία της επιχείρησης και τον νέο ΚΑΔ 2025 που επιθυμείτε",
            "Υποβάλετε το έντυπο αυτοπρόσωπα στην αρμόδια ΔΟΥ ή μέσω εξουσιοδοτημένου λογιστή",
            "Ζητήστε αριθμό πρωτοκόλλου ως απόδειξη υποβολής",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6 }}>
              <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συνηθισμένες δυσκολίες και πώς να τις αντιμετωπίσετε</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { prob: "Ο ΚΑΔ 2025 που θέλω δεν εμφανίζεται στις επιλογές", sol: "Χρησιμοποιήστε αναζήτηση με λέξη-κλειδί ή δοκιμάστε διαφορετική γραφή. Αν ο κωδικός δεν υπάρχει ως επιλογή, ελέγξτε αν υπάρχει παρεμφερής." },
            { prob: "Το σύστημα επιστρέφει σφάλμα κατά τη μεταβολή", sol: "Δοκιμάστε σε διαφορετικό browser (Chrome ή Firefox). Αν το πρόβλημα επιμένει, χρησιμοποιήστε το Δ211 ή επικοινωνήστε με τη ΔΟΥ σας." },
            { prob: "Δεν γνωρίζω ποιος είναι ο σωστός ΚΑΔ 2025 για τη δραστηριότητά μου", sol: "Χρησιμοποιήστε τα εργαλεία αναζήτησης ΚΑΔ ή τον AI Βοηθό αυτού του site πριν προχωρήσετε στη μεταβολή." },
            { prob: "Έχω πολλούς δευτερεύοντες ΚΑΔ — τι κάνω;", sol: "Αντιμετωπίστε κάθε ΚΑΔ ξεχωριστά. Δεν χρειάζεται να αλλάξετε όλους — μόνο αυτούς που έχουν λανθασμένη αντιστοίχιση." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#dc2626", marginBottom: "0.2rem" }}>❓ {item.prob}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>→ {item.sol}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Βρείτε τον σωστό ΚΑΔ 2025</Link>
        <Link href="/kad-2025" className="btn btn-ghost">🆕 Αναζήτηση ΚΑΔ 2025</Link>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
        ⚠️ Το περιεχόμενο αυτό είναι ενημερωτικό. Για επίσημες οδηγίες ανατρέξτε στο myaade.gov.gr
        ή συμβουλευτείτε τον λογιστή σας.
      </p>
    </div>
  );
}
