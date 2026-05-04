import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ 2008→2025 — Πώς να τα Αποφύγετε",
  description:
    "Τα 5 πιο συχνά λάθη που κάνουν επιχειρήσεις και λογιστές στην αντιστοίχιση ΚΑΔ 2008→2025 και πώς να τα εντοπίσετε πριν την προθεσμία της 1ης Ιουνίου 2026.",
  alternates: { canonical: "https://www.kad2025.gr/blog/syxna-lathi-antistoixisis" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ 2008→2025",
  datePublished: "2026-03-15",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function SyxnaLathiPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Συχνά Λάθη Αντιστοίχισης</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 15 Μαρτίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 6 λεπτά ανάγνωση</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ 2008→2025 — Πώς να τα Αποφύγετε
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η αυτόματη αντιστοίχιση ΚΑΔ που πραγματοποίησε η ΑΑΔΕ στις 9 Μαρτίου 2026 δεν ήταν πάντα ακριβής.
        Παρακάτω καταγράφουμε τα πέντε λάθη που εμφανίζονται συχνότερα στην πράξη, με οδηγίες για το πώς
        να τα εντοπίσετε και να τα διορθώσετε.
      </p>

      {[
        {
          num: "01",
          title: "Δεν ελέγχουν ποτέ τι έγινε η αντιστοίχιση",
          body: [
            "Ο πιο συνηθισμένος από όλους. Πολλές επιχειρήσεις δέχτηκαν παθητικά την αυτόματη αντιστοίχιση χωρίς να ελέγξουν αν το αποτέλεσμα είναι σωστό. Αυτό είναι ιδιαίτερα επικίνδυνο γιατί μπορεί να οδηγήσει σε λανθασμένη φορολογική κατάταξη ή αποκλεισμό από ΕΣΠΑ.",
            "Πώς να το ελέγξετε: Συνδεθείτε στο myaade.gov.gr → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας. Δείτε τον κύριο ΚΑΔ που εμφανίζεται και συγκρίνετέ τον με αυτόν που είχατε πριν την αντιστοίχιση.",
            "Αν ο νέος ΚΑΔ 2025 δεν σας φαίνεται σωστός, χρησιμοποιήστε τα εργαλεία αυτού του site για να βρείτε τον σωστό και υποβάλετε διόρθωση.",
          ],
          color: "#dc2626",
        },
        {
          num: "02",
          title: "Σύγχυση μεταξύ πολλαπλών αντιστοιχίσεων",
          body: [
            "Ορισμένοι ΚΑΔ 2008 αντιστοιχούν σε δύο ή περισσότερους ΚΑΔ 2025. Η ΑΑΔΕ επέλεξε αυτόματα έναν από αυτούς, αλλά δεν είναι απαραίτητα ο σωστός για τη συγκεκριμένη δραστηριότητά σας.",
            "Παράδειγμα: ένας παλιός ΚΑΔ για γενική κατασκευαστική δραστηριότητα μπορεί να αντιστοιχεί σε τρεις νέους ΚΑΔ 2025 ανάλογα με τον τύπο κατασκευής. Αν η ΑΑΔΕ επέλεξε λάθος, ο επιχειρηματίας πρέπει να διορθώσει.",
            "Πώς να το χειριστείτε: Όταν βλέπετε πολλαπλές επιλογές αντιστοίχισης, διαβάστε προσεκτικά την περιγραφή κάθε νέου ΚΑΔ 2025 και επιλέξτε αυτόν που αντικατοπτρίζει καλύτερα την πραγματική σας δραστηριότητα.",
          ],
          color: "#d97706",
        },
        {
          num: "03",
          title: "Αγνόηση των δευτερευόντων ΚΑΔ",
          body: [
            "Οι επιχειρήσεις συνήθως εστιάζουν μόνο στον κύριο ΚΑΔ και αγνοούν τους δευτερεύοντες. Αλλά και αυτοί αντιστοιχίστηκαν αυτόματα — και μπορεί να έχουν λάθη.",
            "Αυτό έχει σημασία ιδιαίτερα σε προγράμματα ΕΣΠΑ, όπου ορισμένες φορές απαιτείται συγκεκριμένος δευτερεύων ΚΑΔ για την επιλεξιμότητα. Ένας λανθασμένος δευτερεύων ΚΑΔ μπορεί να αποκλείσει μια επιχείρηση.",
            "Τι να κάνετε: Ελέγξτε στο myAADE ΟΛΟΥς τους ΚΑΔ της επιχείρησής σας, τόσο τον κύριο όσο και τους δευτερεύοντες. Διορθώστε όσους δεν αντικατοπτρίζουν την πραγματική δραστηριότητα.",
          ],
          color: "#7c3aed",
        },
        {
          num: "04",
          title: "Χρήση παλαιών πινάκων επιλεξιμότητας ΕΣΠΑ",
          body: [
            "Στο διαδίκτυο κυκλοφορούν αρκετοί παλαιοί πίνακες επιλέξιμων ΚΑΔ από ανοιχτά προγράμματα ΕΣΠΑ. Πολλοί από αυτούς αναφέρονται στο παλιό σύστημα ΚΑΔ 2008 και δεν έχουν ακόμα ενημερωθεί.",
            "Αν συγκρίνετε τον νέο ΚΑΔ 2025 σας με έναν παλαιό πίνακα ΚΑΔ 2008, δεν θα βρείτε αντιστοιχία — ακόμα και αν η επιχείρησή σας είναι κανονικά επιλέξιμη.",
            "Η σωστή προσέγγιση: Πάντα κατεβάζετε τον επίσημο οδηγό της πρόσκλησης που σας ενδιαφέρει, απευθείας από το espa.gr ή το ependyseis.mindev.gov.gr, και ελέγξτε αν ο πίνακας επιλέξιμων ΚΑΔ αναφέρεται σε ΚΑΔ 2025 ή 2008.",
          ],
          color: "#0891b2",
        },
        {
          num: "05",
          title: "Αναβολή έως την τελευταία στιγμή",
          body: [
            "Η προθεσμία για έλεγχο και διόρθωση χωρίς πρόστιμο είναι η 1η Ιουνίου 2026. Πολλοί επιχειρηματίες αναβάλουν τον έλεγχο, πιστεύοντας ότι υπάρχει αρκετός χρόνος.",
            "Ωστόσο, η διαδικασία διόρθωσης μέσω myAADE ή η κατάθεση εντύπου Δ211 μπορεί να απαιτεί χρόνο, ιδιαίτερα αν το αίτημα αντιμετωπίσει τεχνικό πρόβλημα ή χρειαστεί επανεξέταση.",
            "Συστάσεις: Αν δεν έχετε ελέγξει ακόμα τον ΚΑΔ σας στο myAADE, κάντε το τώρα. Αν υπάρχει λάθος, υποβάλετε τη διόρθωση το συντομότερο δυνατό. Ο έλεγχος δεν παίρνει πάνω από 5 λεπτά.",
          ],
          color: "#059669",
        },
      ].map((err) => (
        <section key={err.num} className="card" style={{ marginBottom: "1.5rem", borderLeft: `4px solid ${err.color}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ background: err.color, color: "white", fontWeight: 800, fontSize: "0.85rem", padding: "0.2rem 0.6rem", borderRadius: 6, fontFamily: "monospace" }}>#{err.num}</span>
            <h2 style={{ fontSize: "1.05rem", margin: 0 }}>{err.title}</h2>
          </div>
          {err.body.map((p, i) => (
            <p key={i} style={{ lineHeight: 1.8, fontSize: "0.9rem", color: i === 0 ? "var(--text)" : "var(--text-muted)", marginBottom: i < err.body.length - 1 ? "0.75rem" : 0 }}>{p}</p>
          ))}
        </section>
      ))}

      <section className="card" style={{ marginBottom: "1.5rem", background: "#f0fdf4", border: "1px solid #86efac" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem", color: "#166534" }}>✅ Συνοπτικές ενέργειες</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Συνδεθείτε στο myaade.gov.gr και ελέγξτε τον ΚΑΔ σας στην Τρέχουσα Εικόνα Οντότητας",
            "Χρησιμοποιήστε το εργαλείο αντιστοίχισης για να επιβεβαιώσετε ότι ο νέος ΚΑΔ είναι σωστός",
            "Ελέγξτε ΚΑΙ τους δευτερεύοντες ΚΑΔ, όχι μόνο τον κύριο",
            "Αν υπάρχει λάθος, διορθώστε μέσω myAADE ή με έντυπο Δ211 (Αιτήματά μου)",
            "Μη χάσετε την προθεσμία της 1ης Ιουνίου 2026 για αποφυγή προστίμου",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.4rem 0.6rem", background: "white", borderRadius: 6, border: "1px solid #86efac" }}>
              <span style={{ color: "#16a34a", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ lineHeight: 1.6, color: "#14532d" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Αντιστοίχιση ΚΑΔ 2008→2025</Link>
        <Link href="/maziki-2008" className="btn btn-ghost">📦 Μαζική αντιστοίχιση</Link>
      </div>
    </div>
  );
}
