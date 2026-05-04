import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πολλαπλή Αντιστοίχιση ΚΑΔ: Τι Σημαίνει και Τι Κάνω",
  description:
    "Τι συμβαίνει όταν ο παλιός ΚΑΔ 2008 αντιστοιχίζεται σε περισσότερους από έναν νέους ΚΑΔ 2025; Πώς επιλέγετε τον σωστό και ποιες είναι οι συνέπειες.",
  alternates: { canonical: "https://www.kad2025.gr/pollapli-antistoixisi-kad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Πολλαπλή Αντιστοίχιση ΚΑΔ: Τι Σημαίνει και Τι Κάνω",
      datePublished: "2026-04-15",
      dateModified: "2026-04-25",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr", url: "https://www.kad2025.gr" },
      inLanguage: "el-GR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Τι είναι η πολλαπλή αντιστοίχιση ΚΑΔ;",
          acceptedAnswer: { "@type": "Answer", text: "Πολλαπλή αντιστοίχιση σημαίνει ότι ένας παλιός ΚΑΔ 2008 αντιστοιχεί σε περισσότερους από έναν νέους ΚΑΔ 2025. Σε αυτές τις περιπτώσεις η ΑΑΔΕ επέλεξε αυτόματα τον πιο συνηθισμένο, αλλά ο επιχειρηματίας πρέπει να ελέγξει αν είναι ο σωστός." },
        },
        {
          "@type": "Question",
          name: "Τι κάνω αν ο ΚΑΔ μου έχει πολλαπλές εναλλακτικές;",
          acceptedAnswer: { "@type": "Answer", text: "Ελέγξτε ποιος νέος ΚΑΔ 2025 περιγράφει καλύτερα τη συγκεκριμένη δραστηριότητά σας. Αν χρειάζεται διόρθωση, κάντε τη μέσω myAADE έως 1η Ιουνίου 2026 χωρίς πρόστιμο." },
        },
      ],
    },
  ],
};

export default function PollaplhAntistoixisiPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Πολλαπλή Αντιστοίχιση ΚΑΔ</span>
      </nav>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: 20, background: "#dc2626", color: "white" }}>Σημαντικό</span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📅 15 Απριλίου 2026 · ✍️ Ομάδα kad2025.gr · ⏱️ 8 λεπτά</span>
      </div>

      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Πολλαπλή Αντιστοίχιση ΚΑΔ: Τι Σημαίνει, Πότε Συμβαίνει και Τι Κάνετε
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid #dc2626", paddingLeft: "1rem" }}>
        Η πολλαπλή αντιστοίχιση είναι ίσως το πιο σύνθετο πρόβλημα της μετάβασης ΚΑΔ 2025.
        Επηρεάζει χιλιάδες επιχειρήσεις και αν δεν αντιμετωπιστεί σωστά μπορεί να οδηγήσει
        σε λανθασμένη φορολογική εικόνα ή απώλεια επιλεξιμότητας για επιδοτήσεις.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #dc2626" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι η Πολλαπλή Αντιστοίχιση</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Κατά τη μετάβαση από ΚΑΔ 2008 σε ΚΑΔ 2025, ορισμένοι παλαιοί κωδικοί δεν αντιστοιχούν
          σε έναν και μόνο νέο κωδικό. Αντίθετα, ο πίνακας αντιστοίχισης ΑΑΔΕ (Α.1004/2026) τους
          συνδέει με <strong>2, 3 ή ακόμα και περισσότερους νέους ΚΑΔ 2025</strong>.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αυτό συμβαίνει γιατί το νέο ευρωπαϊκό πρότυπο NACE Rev.2.1 <strong>διαχώρισε
          ορισμένες δραστηριότητες</strong> που στο παλιό σύστημα ταξινομούνταν μαζί. Για παράδειγμα,
          μια κατηγορία "Υπηρεσίες πληροφορικής" στο ΚΑΔ 2008 μπορεί τώρα να χωρίζεται σε
          "Ανάπτυξη λογισμικού", "Συντήρηση δικτύων" και "Cloud υπηρεσίες" στο ΚΑΔ 2025.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η ΑΑΔΕ πραγματοποίησε αυτόματη επιλογή για κάθε επιχείρηση στις 9 Μαρτίου 2026,
          επιλέγοντας στατιστικά τον πιο πιθανό κωδικό. Αλλά <strong>αυτή η επιλογή δεν
          είναι πάντα σωστή</strong> για κάθε συγκεκριμένη επιχείρηση.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πόσο Συχνό είναι το Πρόβλημα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Από τα 10.923 αρχεία αντιστοίχισης του πίνακα ΑΑΔΕ, σημαντικός αριθμός περιλαμβάνει
          περιπτώσεις όπου ένας παλιός ΚΑΔ 2008 αντιστοιχεί σε <strong>πολλαπλούς νέους κωδικούς</strong>.
          Οι κλάδοι με τις περισσότερες πολλαπλές αντιστοιχίσεις είναι:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            { sector: "Πληροφορική & IT (62-63)", risk: "Υψηλός", reason: "Νέοι υποτομείς cloud, AI, cybersecurity" },
            { sector: "Χρηματοοικονομικά (64-66)", risk: "Υψηλός", reason: "Fintech, κρυπτονομίσματα, νέοι τύποι" },
            { sector: "Εμπόριο (46-47)", risk: "Μέτριος", reason: "Ηλεκτρονικό vs φυσικό εμπόριο" },
            { sector: "Επαγγελματικές Υπηρεσίες (69-71)", risk: "Μέτριος", reason: "Εξειδίκευση νομικών & λογιστικών" },
            { sector: "Κατασκευές (41-43)", risk: "Χαμηλός", reason: "Μικρές διαφοροποιήσεις" },
          ].map((s) => (
            <div key={s.sector} style={{ padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{s.sector}</div>
              <div style={{ fontSize: "0.78rem", color: s.risk === "Υψηλός" ? "#dc2626" : s.risk === "Μέτριος" ? "#d97706" : "#059669", fontWeight: 600, marginBottom: "0.2rem" }}>Κίνδυνος: {s.risk}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.reason}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα-βήμα: Τι Κάνετε αν έχετε Πολλαπλή Αντιστοίχιση</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            { num: "1", title: "Ελέγξτε τον τρέχοντα ΚΑΔ σας", desc: "Συνδεθείτε στο myAADE → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα. Δείτε ποιον ΚΑΔ 2025 σας αποδόθηκε αυτόματα." },
            { num: "2", title: "Ελέγξτε τις εναλλακτικές αντιστοιχίσεις", desc: "Αναζητήστε τον παλιό ΚΑΔ 2008 στο εργαλείο αντιστοίχισης του kad2025.gr. Αν υπάρχουν πολλαπλές επιλογές, θα εμφανιστούν όλες." },
            { num: "3", title: "Συγκρίνετε τις περιγραφές", desc: "Διαβάστε προσεκτικά την περιγραφή κάθε εναλλακτικού ΚΑΔ 2025. Ποια αντιστοιχεί καλύτερα στο τι κάνει πραγματικά η επιχείρησή σας;" },
            { num: "4", title: "Συμβουλευτείτε λογιστή αν υπάρχει αμφιβολία", desc: "Αν δεν είστε σίγουροι ποιος κωδικός είναι ο σωστός, συμβουλευτείτε εξουσιοδοτημένο λογιστή — ιδιαίτερα αν επηρεάζεται ΕΣΠΑ ή φορολογική εικόνα." },
            { num: "5", title: "Διορθώστε μέσω myAADE έως 1/6/2026", desc: "Αν ο αυτόματα αποδοθείς ΚΑΔ δεν είναι ο σωστός, κάντε Μεταβολή Εργασιών στο myAADE. Η διόρθωση είναι χωρίς πρόστιμο έως 1η Ιουνίου 2026." },
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
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Ποιον ΚΑΔ Επιλέγετε αν Ασκείτε Πολλαπλές Δραστηριότητες</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν η επιχείρησή σας ασκεί δραστηριότητες που αντιστοιχούν σε δύο διαφορετικούς νέους ΚΑΔ 2025,
          η σωστή προσέγγιση είναι:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li><strong>Κύριος ΚΑΔ:</strong> Ο κωδικός που αντιστοιχεί στη δραστηριότητα που παράγει <strong>το μεγαλύτερο μέρος των εσόδων</strong></li>
          <li><strong>Δευτερεύων ΚΑΔ:</strong> Ο άλλος κωδικός προστίθεται ως δευτερεύων (δωρεάν, χωρίς περιορισμούς)</li>
          <li>Και οι δύο ΚΑΔ δηλώνονται κατά τη Μεταβολή Εργασιών στο myAADE</li>
        </ul>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις για Πολλαπλή Αντιστοίχιση</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            { q: "Αν η ΑΑΔΕ επέλεξε αυτόματα έναν ΚΑΔ, μπορώ να τον αλλάξω;", a: "Ναι. Μέχρι 1η Ιουνίου 2026 μπορείτε να διορθώσετε τον ΚΑΔ σας χωρίς πρόστιμο μέσω της Μεταβολής Εργασιών στο myAADE." },
            { q: "Αν αλλάξω ΚΑΔ, επηρεάζεται ο ΦΠΑ μου;", a: "Εξαρτάται από τον κωδικό. Ορισμένοι ΚΑΔ έχουν διαφορετικό συντελεστή ΦΠΑ. Ελέγξτε με τον λογιστή σας πριν κάνετε οποιαδήποτε αλλαγή." },
            { q: "Πόσο χρόνο έχω για να ελέγξω;", a: "Η προθεσμία για διόρθωση χωρίς πρόστιμο είναι 1η Ιουνίου 2026. Μετά από αυτή, ισχύουν οι τακτικές κυρώσεις για εκπρόθεσμη μεταβολή." },
            { q: "Πώς ξέρω αν ο ΚΑΔ μου έχει πολλαπλές αντιστοιχίσεις;", a: "Αναζητήστε τον παλιό ΚΑΔ 2008 στο εργαλείο αντιστοίχισης. Αν υπάρχουν πολλαπλές επιλογές, θα εμφανιστούν όλες με τις περιγραφές τους." },
          ].map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔍 Ελέγξτε τον ΚΑΔ σας</Link>
        <Link href="/diorthosi-kad-2025" className="btn btn-ghost">✏️ Πώς να Διορθώσετε</Link>
        <Link href="/blog/syxna-lathi-antistoixisis" className="btn btn-ghost">⚠️ Συχνά Λάθη</Link>
      </div>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο — δεν αντικαθιστά τη συμβουλή εξουσιοδοτημένου λογιστή.
        Για επίσημες ενέργειες: <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
