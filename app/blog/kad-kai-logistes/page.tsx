import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Οδηγός ΚΑΔ 2025 για Λογιστές — Πώς να Διαχειριστείτε Δεκάδες Πελάτες Αποτελεσματικά",
  description:
    "Πρακτικός οδηγός για λογιστές: πώς να ελέγξετε και να διορθώσετε αποτελεσματικά τους ΚΑΔ 2025 για πολλούς πελάτες, ποια λάθη να προσέξετε και πώς να οργανώσετε τη διαδικασία.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-kai-logistes" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Οδηγός ΚΑΔ 2025 για Λογιστές",
  datePublished: "2026-03-20",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function KadKaiLogistesPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Οδηγός για Λογιστές</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 20 Μαρτίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 8 λεπτά ανάγνωση</span><span>·</span><span>🎯 Για λογιστές & φοροτεχνικούς</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Οδηγός ΚΑΔ 2025 για Λογιστές — Πώς να Διαχειριστείτε Δεκάδες Πελάτες Αποτελεσματικά
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Αν έχετε 50, 100 ή 200+ πελάτες, η ατομική αντιμετώπιση κάθε ΚΑΔ δεν είναι εφικτή. Αυτός ο
        οδηγός σας δείχνει πώς να οργανώσετε αποτελεσματικά τον έλεγχο, να εντοπίσετε τα πιο συνηθισμένα
        προβλήματα και να ολοκληρώσετε τη διαδικασία πριν την προθεσμία της 1ης Ιουνίου 2026.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Γιατί ο λογιστής πρέπει να παρέμβει</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η αυτόματη αντιστοίχιση της ΑΑΔΕ (9 Μαρτίου 2026) είναι μηχανιστική — δεν λαμβάνει υπόψη
          αν η πραγματική δραστηριότητα του πελάτη ταιριάζει στον νέο ΚΑΔ που επιλέχθηκε.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Ο λογιστής γνωρίζει καλύτερα από τον ίδιο τον επιχειρηματία τι είναι ο κύριος ΚΑΔ της
          επιχείρησης, τι δηλώνεται στις κατηγορίες εισοδήματος και πού μπορεί να υπάρχει ασυμφωνία.
          Ακόμα, για πελάτες που σχεδιάζουν αίτηση σε ΕΣΠΑ ή Αναπτυξιακό Νόμο, η ορθότητα του ΚΑΔ
          είναι κρίσιμη προϋπόθεση.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Επιπλέον, πελάτες με λανθασμένο ΚΑΔ μπορεί να υποστούν διαφορετική φορολογική κατάταξη,
          επηρεάζοντας ΦΠΑ, ασφαλιστικές εισφορές ή κατηγορία βιβλίων.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα 1 — Αρχική καταγραφή πελατών</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το πρώτο βήμα είναι να δημιουργήσετε μια λίστα με όλους τους πελάτες και τους ΚΑΔ που είχαν
          πριν την αντιστοίχιση. Αν χρησιμοποιείτε λογισμικό λογιστηρίου, αυτές οι πληροφορίες είναι
          ήδη εκεί.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Στη λίστα σας, καταγράψτε για κάθε πελάτη: τον ΑΦΜ, τον παλιό κύριο ΚΑΔ 2008, τους
          δευτερεύοντες ΚΑΔ 2008 (αν υπάρχουν) και τη σύντομη περιγραφή της δραστηριότητάς τους με
          δικά σας λόγια.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Αυτή η τελευταία λεπτομέρεια — η δική σας κατανόηση της δραστηριότητας — είναι το πιο
          χρήσιμο εργαλείο για να αξιολογήσετε αν ο νέος ΚΑΔ 2025 είναι σωστός.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα 2 — Μαζική αντιστοίχιση και σύγκριση</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αντί να ελέγχετε έναν-έναν τους πελάτες στο myAADE, μπορείτε να χρησιμοποιήσετε το εργαλείο
          μαζικής αντιστοίχισης αυτού του site. Εισάγετε τη λίστα παλιών ΚΑΔ 2008 και λαμβάνετε άμεσα
          τον πίνακα με τους νέους ΚΑΔ 2025.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Στη συνέχεια, συγκρίνετε αυτό το αποτέλεσμα με τον ΚΑΔ που εμφανίζεται στο myAADE για κάθε
          πελάτη. Αν υπάρχει διαφορά, εκεί εντοπίζεται πιθανό πρόβλημα αντιστοίχισης.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Σημείωση: ορισμένοι ΚΑΔ 2008 αντιστοιχούν σε περισσότερους από έναν ΚΑΔ 2025. Σε αυτές
          τις περιπτώσεις, χρειάζεται να αξιολογήσετε ποια επιλογή ταιριάζει καλύτερα στη
          συγκεκριμένη επιχείρηση.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα 3 — Κατηγοριοποίηση και προτεραιοποίηση</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αφού κάνετε τον αρχικό έλεγχο, κατηγοριοποιήστε τους πελάτες σε τρεις ομάδες:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { label: "Χωρίς πρόβλημα", desc: "Ο νέος ΚΑΔ 2025 φαίνεται σωστός και αντικατοπτρίζει τη δραστηριότητα. Δεν απαιτείται ενέργεια.", color: "#059669" },
            { label: "Πιθανό πρόβλημα — να επιβεβαιωθεί", desc: "Υπάρχει ασυμφωνία ή αβεβαιότητα. Χρειάζεται επικοινωνία με τον πελάτη για επιβεβαίωση.", color: "#d97706" },
            { label: "Σίγουρο λάθος — απαιτείται διόρθωση", desc: "Ο νέος ΚΑΔ 2025 προφανώς δεν ταιριάζει. Πρέπει να υποβληθεί αίτηση διόρθωσης.", color: "#dc2626" },
          ].map((cat) => (
            <div key={cat.label} style={{ display: "flex", gap: "0.75rem", padding: "0.6rem 0.9rem", background: "var(--bg)", border: `1px solid var(--border)`, borderLeft: `4px solid ${cat.color}`, borderRadius: 8 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: cat.color, marginBottom: "0.2rem" }}>{cat.label}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{cat.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Ξεκινήστε από τους πελάτες της τρίτης κατηγορίας και δουλέψτε προς τα πάνω. Δώστε προτεραιότητα
          σε πελάτες που σχεδιάζουν αίτηση σε ΕΣΠΑ ή Αναπτυξιακό Νόμο.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα 4 — Διαδικασία διόρθωσης</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η διόρθωση ΚΑΔ γίνεται ηλεκτρονικά μέσω myAADE (Μεταβολή Εργασιών) ή με φυσικό παρουσία
          με έντυπο Δ211 (Αιτήματά μου). Η ηλεκτρονική οδός είναι ταχύτερη για τη συντριπτική
          πλειοψηφία των περιπτώσεων.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Σε ορισμένες πολύπλοκες περιπτώσεις — π.χ. όταν η ΑΑΔΕ αρνηθεί την ηλεκτρονική μεταβολή
          ή όταν απαιτείται αλλαγή σε πολλούς κωδικούς ταυτόχρονα — μπορεί να χρειαστεί αυτοπρόσωπη
          παρουσία στην αρμόδια ΔΟΥ.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η προθεσμία χωρίς πρόστιμο είναι η <strong>1η Ιουνίου 2026</strong>. Μετά από αυτή την
          ημερομηνία, η διόρθωση παραμένει δυνατή αλλά με επιβολή προστίμου για εκπρόθεσμη μεταβολή.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Κατηγορίες πελατών που χρειάζονται ιδιαίτερη προσοχή</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Επιχειρήσεις με ΚΑΔ στον κλάδο κατασκευών (41-43) — πολλές υποκατηγορίες, συχνές λανθασμένες αντιστοιχίσεις",
            "Εμπορικές επιχειρήσεις με διπλό αντικείμενο — χονδρικό και λιανικό — όπου ο κύριος ΚΑΔ μπορεί να άλλαξε",
            "Ελεύθεροι επαγγελματίες υγείας (γιατροί, ψυχολόγοι, φυσιοθεραπευτές) — νέες υποκατηγορίες στον κλάδο 86",
            "Επιχειρήσεις εστίασης και καταλυμάτων — σημαντικές αναδιαρθρώσεις στους κλάδους 55-56",
            "IT και ψηφιακές υπηρεσίες — νέες εξειδικευμένες κατηγορίες στον κλάδο 62-63",
            "Επιχειρήσεις που σχεδιάζουν αίτηση ΕΣΠΑ ή Αναπτυξιακό Νόμο στο άμεσο μέλλον",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6 }}>
              <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>›</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/maziki-2008" className="btn btn-primary">📦 Μαζική Αντιστοίχιση ΚΑΔ</Link>
        <Link href="/antistoixisi" className="btn btn-ghost">🔄 Αντιστοίχιση ΚΑΔ</Link>
        <Link href="/kad-epidotisi-espa" className="btn btn-ghost">💰 Επιλεξιμότητα ΕΣΠΑ</Link>
      </div>
    </div>
  );
}
