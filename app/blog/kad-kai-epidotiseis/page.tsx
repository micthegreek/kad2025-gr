import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ και ΕΣΠΑ 2025: Πώς Επηρεάζει η Αλλαγή την Επιλεξιμότητά σας",
  description:
    "Πώς οι νέοι ΚΑΔ 2025 επηρεάζουν την επιλεξιμότητα σε ΕΣΠΑ, ΔΥΠΑ, Αναπτυξιακό Νόμο. Τι πρέπει να ελέγξετε πριν υποβάλετε αίτηση επιδότησης.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-kai-epidotiseis" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ΚΑΔ και ΕΣΠΑ 2025: Επίδραση στην Επιλεξιμότητα",
  datePublished: "2026-04-10",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function KadKaiEpidotiseisPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ και ΕΣΠΑ</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 10 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 8 λεπτά</span>
        <span>·</span><span>🎯 Για επιχειρήσεις & συμβούλους ΕΣΠΑ</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ και ΕΣΠΑ 2025: Πώς Επηρεάζει η Αλλαγή την Επιλεξιμότητά σας
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η αλλαγή ΚΑΔ δεν είναι μόνο φορολογικό θέμα — επηρεάζει άμεσα την επιλεξιμότητα σε
        προγράμματα επιδότησης. Αν έχετε ενεργό ΕΣΠΑ, ΔΥΠΑ ή Αναπτυξιακό Νόμο, ή σχεδιάζετε να
        υποβάλετε αίτηση, διαβάστε αυτόν τον οδηγό πρώτα.
      </p>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "1.5rem" }}>
        <strong style={{ color: "#92400e" }}>⚠️ Σημαντική σημείωση:</strong>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, margin: "0.5rem 0 0" }}>
          Το kad2025.gr παρέχει ενημερωτικές πληροφορίες. Για την επιλεξιμότητα σε συγκεκριμένο
          πρόγραμμα ΕΣΠΑ ή επιδότησης, απευθυνθείτε πάντα σε εξουσιοδοτημένο σύμβουλο και
          ελέγξτε τον επίσημο οδηγό του προγράμματος.
        </p>
      </div>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Γιατί ο ΚΑΔ είναι κρίσιμος για ΕΣΠΑ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Κάθε πρόγραμμα ΕΣΠΑ ορίζει <strong>επιλέξιμους ΚΑΔ</strong> — δηλαδή τους κωδικούς
          δραστηριότητας που πρέπει να έχει μια επιχείρηση για να υποβάλει αίτηση. Από το 2026,
          αυτοί οι κωδικοί αναφέρονται στο <strong>νέο σύστημα ΚΑΔ 2025</strong>, το οποίο
          βασίζεται στο ευρωπαϊκό πρότυπο NACE Rev.2.1.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν ο ΚΑΔ σας στο myAADE είναι λανθασμένος — λόγω εσφαλμένης αυτόματης αντιστοίχισης ή
          αδυναμίας της ΑΑΔΕ να αντιστοιχίσει ακριβώς τη δραστηριότητά σας — μπορεί να
          <strong> αποκλειστείτε από επιλέξιμο πρόγραμμα</strong>, ακόμα κι αν η πραγματική
          δραστηριότητά σας θα ήταν κανονικά επιλέξιμη.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Αντίστροφα, αν ο ΚΑΔ σας αντιστοιχίστηκε σε κωδικό που <em>δεν αντικατοπτρίζει</em> την
          πραγματική σας δραστηριότητα, μπορεί να φαίνεστε επιλέξιμοι ενώ στην πράξη δεν είστε —
          κάτι που μπορεί να δημιουργήσει πρόβλημα κατά τον έλεγχο.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τύποι Προγραμμάτων και Επίδραση ΚΑΔ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { prog: "ΕΣΠΑ (Ευρωπαϊκά Διαρθρωτικά Ταμεία) 2021–2027", impact: "Υψηλή", desc: "Τα περισσότερα νέα προγράμματα ΕΣΠΑ 2021–2027 που εκδίδονται από το 2026 και μετά χρησιμοποιούν αποκλειστικά ΚΑΔ 2025. Ο πίνακας επιλέξιμων ΚΑΔ κάθε πρόσκλησης αντιστοιχεί στο νέο σύστημα.", color: "#dc2626" },
            { prog: "ΔΥΠΑ (Επιδοτήσεις Απασχόλησης)", impact: "Μέτρια", desc: "Η ΔΥΠΑ ενημερώνει σταδιακά τους επιλέξιμους ΚΑΔ στα προγράμματα απασχόλησης. Ορισμένα παλαιότερα προγράμματα εξακολουθούν να αναφέρουν ΚΑΔ 2008. Ελέγξτε πάντα τον επίσημο οδηγό κάθε προγράμματος.", color: "#d97706" },
            { prog: "Αναπτυξιακός Νόμος (Ν. 4887/2022)", impact: "Υψηλή", desc: "Ο Αναπτυξιακός Νόμος χρησιμοποιεί ΚΑΔ για τον ορισμό επιλέξιμων δραστηριοτήτων, ποσοστών ενίσχυσης και κατηγοριοποίησης καθεστώτων. Τα νέα καθεστώτα ενίσχυσης (Μεταποίηση, Περιοχές, Μεγάλες Επενδύσεις) εκδίδουν πίνακες σε ΚΑΔ 2025.", color: "#dc2626" },
            { prog: "Ταμείο Ανάκαμψης (RRF)", impact: "Χαμηλή", desc: "Τα περισσότερα έργα RRF έχουν ήδη εγκριθεί με βάση τον παλαιότερο πίνακα ΚΑΔ. Νέες δράσεις ή τροποποιήσεις θα χρησιμοποιούν ΚΑΔ 2025.", color: "#059669" },
          ].map((p) => (
            <div key={p.prog} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: `3px solid ${p.color}`, borderRadius: 8 }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{p.prog}</span>
                <span style={{ fontSize: "0.72rem", padding: "0.1rem 0.4rem", borderRadius: 10, background: p.color, color: "white", fontWeight: 600 }}>Επίδραση: {p.impact}</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Ποια είναι τα πιο συνηθισμένα λάθη;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Στην πράξη, τα περισσότερα προβλήματα επιλεξιμότητας προκύπτουν από τρεις λόγους:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { title: "Λανθασμένη αυτόματη αντιστοίχιση", desc: "Η ΑΑΔΕ αντιστοίχισε τον ΚΑΔ 2008 σε διαφορετικό ΚΑΔ 2025 από αυτόν που αντικατοπτρίζει την πραγματική δραστηριότητα. Αυτό συμβαίνει κυρίως σε δραστηριότητες με πολλαπλές αντιστοιχίσεις." },
            { title: "Παλαιοί δευτερεύοντες ΚΑΔ", desc: "Πολλοί επιχειρηματίες έχουν δηλωμένους δευτερεύοντες ΚΑΔ που ουδέποτε χρησιμοποίησαν. Αν ένας από αυτούς είναι ο επιλέξιμος για κάποιο πρόγραμμα, πρέπει να ελεγχθεί αν παρέμεινε σωστός μετά την αντιστοίχιση." },
            { title: "Σύγχυση νέου/παλιού κωδικού", desc: "Κάποιοι επιχειρηματίες ψάχνουν τον παλιό ΚΑΔ 2008 στον πίνακα επιλέξιμων ΚΑΔ μιας πρόσκλησης, ενώ η πρόσκληση αναφέρεται στο νέο σύστημα 2025. Το αποτέλεσμα: νομίζουν ότι δεν είναι επιλέξιμοι, ενώ στην πραγματικότητα είναι." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem", color: "var(--primary)" }}>
                {i + 1}. {item.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Checklist πριν υποβάλετε αίτηση επιδότησης</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Πριν από κάθε αίτηση σε πρόγραμμα επιδότησης, βεβαιωθείτε ότι έχετε ελέγξει τα παρακάτω:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Ελέγξτε τον τρέχοντα κύριο ΚΑΔ σας στο myAADE — αυτόν που ισχύει τώρα, όχι αυτόν που είχατε πριν την αντιστοίχιση",
            "Συγκρίνετε τον ΚΑΔ σας με τον πίνακα επιλέξιμων ΚΑΔ του προγράμματος (αναζητήστε τον στην πρόσκληση)",
            "Αν υπάρχει ασυμφωνία, διορθώστε τον ΚΑΔ έως 1/6/2026 χωρίς πρόστιμο μέσω myAADE",
            "Ελέγξτε και τους δευτερεύοντες ΚΑΔ — ορισμένα προγράμματα απαιτούν συγκεκριμένο δευτερεύοντα ΚΑΔ",
            "Χρησιμοποιήστε το εργαλείο αντιστοίχισης για να επιβεβαιώσετε ότι ο νέος ΚΑΔ 2025 αντιστοιχεί στη δραστηριότητά σας",
            "Συμβουλευτείτε εξουσιοδοτημένο σύμβουλο ΕΣΠΑ για τη συγκεκριμένη πρόσκληση που σας ενδιαφέρει",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.5rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.875rem" }}>
              <span style={{ color: "var(--success)", fontWeight: 700, flexShrink: 0 }}>☑</span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem", background: "#f0fdf4", border: "1px solid #86efac" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#166534" }}>Πρακτικό παράδειγμα</h2>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "#14532d", marginBottom: "0.75rem" }}>
          Έστω ότι έχετε ΚΑΔ 2008: <strong>20140000</strong> (Παραγωγή άλλων βασικών χημικών). Η ΑΑΔΕ
          τον αντιστοίχισε αυτόματα στον ΚΑΔ 2025: <strong>20140000</strong> (αμετάβλητος). Μια νέα
          πρόσκληση ΕΣΠΑ για τη μεταποίηση περιλαμβάνει τον ΚΑΔ 2025 <strong>20140000</strong>
          στον πίνακα επιλέξιμων.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "#14532d", marginBottom: "0.75rem" }}>
          Αν κάποιος ελέγξει στο myAADE και δει τον ΚΑΔ 2025 του, και αυτός ταιριάζει με τον
          επιλέξιμο, η επιχείρηση μπορεί να υποβάλει αίτηση. Αν όμως η αυτόματη αντιστοίχιση
          έδωσε λανθασμένο ΚΑΔ, η επιχείρηση θα αποκλειστεί — ακόμα κι αν παράγει ακριβώς αυτό
          που ορίζει ο επιλέξιμος ΚΑΔ.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "#14532d" }}>
          Γι' αυτό ο έλεγχος του ΚΑΔ πρέπει να είναι <strong>το πρώτο βήμα</strong> πριν από
          οποιαδήποτε αίτηση επιδότησης.
        </p>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔍 Ελέγξτε τον ΚΑΔ σας</Link>
        <Link href="/kad-epidotisi-espa" className="btn btn-ghost">💰 Επιλεξιμότητα ΚΑΔ σε ΕΣΠΑ</Link>
        <Link href="/kad-dypa" className="btn btn-ghost">👥 ΚΑΔ για ΔΥΠΑ</Link>
      </div>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ Το περιεχόμενο αυτό είναι καθαρά ενημερωτικό και δεν αποτελεί νομική ή επιχειρηματική συμβουλή.
        Για επιλεξιμότητα ΕΣΠΑ απευθυνθείτε πάντα σε εξουσιοδοτημένο σύμβουλο και στον επίσημο οδηγό προγράμματος.
      </div>
    </div>
  );
}
