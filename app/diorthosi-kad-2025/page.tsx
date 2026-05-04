import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Διόρθωση ΚΑΔ 2025: Πότε Χρειάζεται και Πώς Γίνεται",
  description:
    "Πότε πρέπει να διορθώσετε τον ΚΑΔ 2025 σας, πώς γίνεται η διαδικασία μέσω myAADE, τι έγγραφα χρειάζονται και ποια είναι η προθεσμία χωρίς πρόστιμο.",
  alternates: { canonical: "https://www.kad2025.gr/diorthosi-kad-2025" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Πώς να διορθώσετε τον ΚΑΔ 2025 μέσω myAADE",
      description: "Βήμα-βήμα οδηγός για διόρθωση ΚΑΔ χωρίς πρόστιμο",
      datePublished: "2026-04-15",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      inLanguage: "el-GR",
      step: [
        { "@type": "HowToStep", name: "Βρείτε τον σωστό ΚΑΔ 2025", text: "Χρησιμοποιήστε το εργαλείο αντιστοίχισης για να βρείτε τον σωστό κωδικό" },
        { "@type": "HowToStep", name: "Συνδεθείτε στο myAADE", text: "Επισκεφθείτε το myaade.gov.gr και συνδεθείτε με taxisnet" },
        { "@type": "HowToStep", name: "Μεταβολή Εργασιών", text: "Επιλέξτε Μεταβολή Εργασιών και εισάγετε τον νέο κωδικό" },
        { "@type": "HowToStep", name: "Υποβολή", text: "Υποβάλτε και αποθηκεύστε το αποδεικτικό" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Μέχρι πότε μπορώ να διορθώσω χωρίς πρόστιμο;", acceptedAnswer: { "@type": "Answer", text: "Έως 1η Ιουνίου 2026, μέσω Μεταβολής Εργασιών στο myaade.gov.gr." } },
        { "@type": "Question", name: "Πόσο κοστίζει η διόρθωση ΚΑΔ;", acceptedAnswer: { "@type": "Answer", text: "Η ίδια η διαδικασία μέσω myAADE είναι δωρεάν. Το κόστος λογιστή (αν χρησιμοποιήσετε) ποικίλει." } },
      ],
    },
  ],
};

export default function DiorthosiKad2025Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Διόρθωση ΚΑΔ 2025</span>
      </nav>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: 20, background: "#d97706", color: "white" }}>Πρακτικός Οδηγός</span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📅 15 Απριλίου 2026 · ✍️ Ομάδα kad2025.gr · ⏱️ 7 λεπτά</span>
      </div>

      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Διόρθωση ΚΑΔ 2025: Πότε Χρειάζεται και Πώς Γίνεται Βήμα-βήμα
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η ΑΑΔΕ έδωσε προθεσμία έως <strong>1η Ιουνίου 2026</strong> για διόρθωση λανθασμένης
        αντιστοίχισης ΚΑΔ χωρίς πρόστιμο. Ορίστε πότε χρειάζεται και πώς γίνεται η διαδικασία.
      </p>

      {/* Deadline alert */}
      <div style={{ background: "#fef3c7", border: "2px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
        <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>⏰</span>
        <div>
          <div style={{ fontWeight: 700, color: "#92400e", marginBottom: "0.25rem" }}>Προθεσμία: 1η Ιουνίου 2026</div>
          <div style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.6 }}>
            Η διόρθωση ΚΑΔ χωρίς πρόστιμο ισχύει μέχρι αυτή την ημερομηνία.
            Μετά εφαρμόζονται κυρώσεις για εκπρόθεσμη μεταβολή εργασιών.
          </div>
        </div>
      </div>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πότε Χρειάζεται Διόρθωση ΚΑΔ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Δεν χρειάζονται όλες οι επιχειρήσεις διόρθωση. Η αυτόματη αντιστοίχιση της ΑΑΔΕ είναι
          σωστή για την πλειονότητα. Χρειάζεστε διόρθωση όταν:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {[
            { icon: "⚠️", title: "Λανθασμένη αυτόματη αντιστοίχιση", desc: "Ο ΚΑΔ που σας αποδόθηκε δεν αντικατοπτρίζει τη δραστηριότητά σας. Ειδικά σε περιπτώσεις πολλαπλών αντιστοιχίσεων." },
            { icon: "🔄", title: "Πολλαπλές εναλλακτικές αντιστοιχίσεις", desc: "Ο παλιός ΚΑΔ 2008 αντιστοιχούσε σε πολλούς νέους ΚΑΔ 2025 και η ΑΑΔΕ επέλεξε λάθος." },
            { icon: "📋", title: "Δευτερεύοντες ΚΑΔ λανθασμένοι", desc: "Οι δευτερεύοντες ΚΑΔ σας δεν αντιστοιχίστηκαν σωστά ή χρειάζεστε επιπλέον κωδικούς." },
            { icon: "💶", title: "ΕΣΠΑ/επιδότηση επηρεάζεται", desc: "Ο νέος ΚΑΔ σας δεν σας κάνει επιλέξιμο σε πρόγραμμα που θέλετε να υποβάλετε." },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", gap: "0.75rem", padding: "0.6rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.15rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πώς Γίνεται η Διόρθωση — Βήμα προς Βήμα</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            {
              num: "1",
              title: "Βρείτε πρώτα τον σωστό ΚΑΔ",
              desc: "Χρησιμοποιήστε το εργαλείο αντιστοίχισης ή τον AI Βοηθό ΚΑΔ για να βεβαιωθείτε ποιος κωδικός ταιριάζει στη δραστηριότητά σας. Συμβουλευτείτε τον λογιστή σας αν υπάρχει αμφιβολία.",
            },
            {
              num: "2",
              title: "Συνδεθείτε στο myAADE",
              desc: "Επισκεφθείτε το myaade.gov.gr και συνδεθείτε με τους κωδικούς taxisnet. Ο λογιστής σας μπορεί να το κάνει για λογαριασμό σας αν έχετε δώσει εξουσιοδότηση.",
            },
            {
              num: "3",
              title: "Μεταβολή Εργασιών ψηφιακά",
              desc: "Στο myAADE: Μητρώο & Επικοινωνία → Μεταβολή Εργασιών. Εισάγετε τον νέο ΚΑΔ 2025. Αν η ψηφιακή διαδικασία δεν είναι διαθέσιμη, υποβάλτε αίτηση μέσω «Τα Αιτήματά μου» με έντυπο Δ211.",
            },
            {
              num: "4",
              title: "Αποθηκεύστε το αποδεικτικό",
              desc: "Μετά την υποβολή, εκτυπώστε ή αποθηκεύστε το αποδεικτικό. Ελέγξτε σε 1-2 εργάσιμες ότι ο νέος ΚΑΔ εμφανίζεται σωστά στη «Βεβαίωση Εγγραφής».",
            },
          ].map((step) => (
            <div key={step.num} style={{ display: "flex", gap: "1rem", padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{step.num}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: "0.2rem" }}>{step.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Κόστος & Χρόνος Διεκπεραίωσης</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            { label: "Κόστος διαδικασίας", value: "Δωρεάν", note: "Η ΑΑΔΕ δεν χρεώνει", color: "#059669" },
            { label: "Προθεσμία χωρίς πρόστιμο", value: "1/6/2026", note: "Μετά ισχύουν κυρώσεις", color: "#dc2626" },
            { label: "Χρόνος διεκπεραίωσης", value: "1-3 εργάσιμες", note: "Ψηφιακά μέσω myAADE", color: "#1d4ed8" },
            { label: "Κόστος λογιστή", value: "Διαφέρει", note: "Ρωτήστε τον λογιστή σας", color: "#d97706" },
          ].map((item) => (
            <div key={item.label} style={{ padding: "0.75rem", background: "var(--bg)", border: `1px solid ${item.color}`, borderRadius: 8, textAlign: "center" }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{item.label}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: item.color }}>{item.value}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            { q: "Μπορώ να κάνω τη διόρθωση μόνος μου χωρίς λογιστή;", a: "Ναι, εφόσον έχετε πρόσβαση στο myAADE. Συνιστάται όμως λογιστής αν ο ΚΑΔ επηρεάζει ΦΠΑ, ΕΣΠΑ ή αδειοδότηση." },
            { q: "Τι γίνεται αν η προθεσμία 1/6/2026 παρέλθει χωρίς διόρθωση;", a: "Μπορείτε να κάνετε τη διόρθωση και μετά, αλλά με τις τακτικές κυρώσεις για εκπρόθεσμη μεταβολή. Το ύψος του προστίμου εξαρτάται από την καθυστέρηση." },
            { q: "Αλλάζω κύριο ΚΑΔ — επηρεάζεται η λογιστική του έτους 2026;", a: "Η αλλαγή ισχύει από την ημερομηνία υποβολής. Για θέματα που αφορούν την έναρξη του 2026 επικοινωνήστε με τον λογιστή σας." },
            { q: "Μπορώ να προσθέσω νέο δευτερεύοντα ΚΑΔ 2025 που δεν είχα στο 2008;", a: "Ναι, η Μεταβολή Εργασιών επιτρέπει και προσθήκη νέων κωδικών εκτός από διόρθωση υπαρχόντων." },
          ].map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔍 Βρείτε τον σωστό ΚΑΔ</Link>
        <Link href="/pollapli-antistoixisi-kad" className="btn btn-ghost">🔀 Πολλαπλή Αντιστοίχιση</Link>
        <Link href="/pos-allazw-kad" className="btn btn-ghost">✏️ Πώς Αλλάζω ΚΑΔ</Link>
      </div>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο και δεν παρέχει φορολογικές συμβουλές.
        Για επίσημες ενέργειες: <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
