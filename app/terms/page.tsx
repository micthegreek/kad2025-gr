import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Όροι Χρήσης — kad2025.gr",
  description: "Πλήρεις όροι χρήσης του kad2025.gr: αποποίηση ευθύνης, πνευματικά δικαιώματα, περιορισμός ευθύνης, εφαρμοστέο δίκαιο.",
  alternates: { canonical: "https://www.kad2025.gr/terms" },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Όροι Χρήσης</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem" }}>Όροι Χρήσης</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Τελευταία ενημέρωση: <strong>Απρίλιος 2026</strong> · Ισχύει για: <strong>www.kad2025.gr</strong>
      </p>

      <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "2rem", fontSize: "0.875rem", lineHeight: 1.7, color: "#1e3a5f" }}>
        📋 <strong>Σε απλά λόγια:</strong> Το kad2025.gr είναι δωρεάν ενημερωτικό εργαλείο. Δεν παρέχει φορολογικές συμβουλές.
        Χρησιμοποιήστε τα δεδομένα για ενημέρωση αλλά επαληθεύετε πάντα στο myAADE για επίσημες ενέργειες.
      </div>

      <div style={{ lineHeight: 1.8 }}>
        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>1. Αποδοχή Όρων</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Με την πρόσβαση και χρήση του <strong>www.kad2025.gr</strong> αποδέχεστε ανεπιφύλακτα
            τους παρόντες Όρους Χρήσης. Αν διαφωνείτε με οποιονδήποτε όρο, παρακαλούμε σταματήστε
            αμέσως τη χρήση της υπηρεσίας. Η συνεχής χρήση μετά από ενημέρωση των όρων συνιστά αποδοχή
            των νέων όρων.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>2. Φύση και Σκοπός της Υπηρεσίας</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Το <strong>kad2025.gr</strong> είναι <strong>ανεξάρτητη, μη κυβερνητική ψηφιακή υπηρεσία</strong>
            που παρέχει ενημερωτικά εργαλεία αναζήτησης και αντιστοίχισης Κωδικών Αριθμών Δραστηριότητας
            (ΚΑΔ). Δεν αποτελεί επίσημο ιστότοπο της ΑΑΔΕ ή άλλης κυβερνητικής αρχής.
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Η υπηρεσία <strong>δεν παρέχει</strong>: φορολογικές συμβουλές, λογιστικές συμβουλές,
            νομικές συμβουλές, ή οδηγίες για επίσημες ενέργειες. Για κάθε επίσημη φορολογική ενέργεια
            απευθυνθείτε στον λογιστή σας ή στο <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myaade.gov.gr</a>.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>3. Ακρίβεια Δεδομένων και Αποποίηση</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Τα δεδομένα αντιστοίχισης ΚΑΔ προέρχονται από τις επίσημες αποφάσεις ΑΑΔΕ Α.1003/2026 και
            Α.1004/2026. Καταβάλλουμε κάθε δυνατή προσπάθεια για την ακρίβεια και ενημέρωσή τους.
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Ωστόσο, <strong>δεν εγγυόμαστε</strong>: την πλήρη ακρίβεια, πληρότητα ή επικαιρότητα
            των δεδομένων σε κάθε χρονική στιγμή. Ενδέχεται να υπάρχουν διαφορές μεταξύ των δεδομένων
            της πλατφόρμας και των επίσημων αρχείων ΑΑΔΕ, ιδίως μετά από τροποποιήσεις.
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Η <strong>τελική επαλήθευση</strong> του ΚΑΔ σας πρέπει πάντα να γίνεται μέσω του
            επίσημου ιστότοπου <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myaade.gov.gr</a>.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>4. Περιορισμός Ευθύνης</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Το kad2025.gr και οι διαχειριστές του <strong>δεν φέρουν ευθύνη</strong> για:
          </p>
          <ul style={{ fontSize: "0.875rem", color: "var(--text-muted)", paddingLeft: "1.25rem", lineHeight: 2 }}>
            <li>Οικονομική ζημία που προκύπτει από χρήση των δεδομένων της πλατφόρμας</li>
            <li>Λανθασμένες φορολογικές αποφάσεις που βασίστηκαν στα δεδομένα μας</li>
            <li>Τυχόν πρόστιμα ή κυρώσεις από εσφαλμένη εφαρμογή ΚΑΔ</li>
            <li>Προσωρινή ή μόνιμη διακοπή της υπηρεσίας</li>
            <li>Ζημία από χρήση εργαλείων τρίτων (AI Βοηθός, εξαγωγή Excel)</li>
          </ul>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>5. Πνευματική Ιδιοκτησία</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Τα <strong>πρωτογενή δεδομένα ΚΑΔ</strong> (κωδικοί, περιγραφές, αντιστοιχίσεις) προέρχονται
            από επίσημες αποφάσεις ΑΑΔΕ και αποτελούν δημόσια διαθέσιμες πληροφορίες της ελληνικής κυβέρνησης.
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Ο <strong>κώδικας, το σχεδιασμός, τα εργαλεία, τα κείμενα και η δομή</strong> της πλατφόρμας
            ανήκουν στο kad2025.gr. Απαγορεύεται η αναπαραγωγή, αντιγραφή ή εμπορική χρήση χωρίς
            γραπτή άδεια. Η εξαγωγή δεδομένων για προσωπική ή επαγγελματική χρήση (π.χ. Excel) επιτρέπεται
            με αναφορά πηγής «kad2025.gr — βάσει δεδομένων ΑΑΔΕ».
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>6. Επιτρεπόμενη και Απαγορευμένη Χρήση</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            <strong>Επιτρέπεται:</strong> Χρήση για προσωπική ή επαγγελματική ενημέρωση, εξαγωγή
            δεδομένων με αναφορά πηγής, χρήση εργαλείων για νόμιμους σκοπούς.
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            <strong>Απαγορεύεται:</strong> Αυτοματοποιημένη μαζική αντλία δεδομένων (scraping) πέραν
            των ορίων χρήσης, αναπαραγωγή δεδομένων σε ανταγωνιστικές υπηρεσίες, χρήση για
            παραπλανητικούς σκοπούς.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>7. Εξωτερικοί Σύνδεσμοι</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Το kad2025.gr περιέχει συνδέσμους σε εξωτερικές ιστοσελίδες (ΑΑΔΕ, myAADE, ΦΕΚ, Eurostat).
            Δεν φέρουμε ευθύνη για το περιεχόμενο, την ακρίβεια ή τη διαθεσιμότητα αυτών των ιστοσελίδων.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>8. Τροποποίηση Όρων</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Διατηρούμε το δικαίωμα τροποποίησης των παρόντων Όρων Χρήσης οποτεδήποτε, χωρίς
            προηγούμενη ειδοποίηση. Η ενημερωμένη ημερομηνία αναγράφεται στην κορυφή αυτής της σελίδας.
            Η συνέχιση χρήσης μετά από τροποποιήσεις συνεπάγεται αποδοχή τους.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>9. Εφαρμοστέο Δίκαιο</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Οι παρόντες Όροι Χρήσης διέπονται από το ελληνικό δίκαιο και τη νομοθεσία της Ευρωπαϊκής Ένωσης,
            συμπεριλαμβανομένου του GDPR (Κανονισμός ΕΕ 2016/679). Για τυχόν διαφορές αρμόδια είναι
            τα δικαστήρια της Ελλάδας.
          </p>
        </section>

        <section className="card" style={{ marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>10. Επικοινωνία</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Για ερωτήσεις σχετικά με τους Όρους Χρήσης:{" "}
            <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)", fontWeight: 600 }}>
              info@kad2025.gr
            </a>
          </p>
        </section>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <Link href="/privacy" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🔒 Πολιτική Απορρήτου</Link>
        <Link href="/about" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>ℹ️ Σχετικά με εμάς</Link>
        <Link href="/contact" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✉️ Επικοινωνία</Link>
      </div>
    </div>
  );
}
