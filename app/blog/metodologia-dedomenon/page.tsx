import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Μεθοδολογία Δεδομένων: Πώς Επεξεργαζόμαστε τα ΚΑΔ",
  description:
    "Αναλυτική παρουσίαση της μεθοδολογίας του kad2025.gr: πηγές ΑΑΔΕ, πραγματικά στατιστικά της βάσης, ιδιαιτερότητες του πίνακα Α.1004/2026 και πώς επαληθεύετε μόνοι σας μια αντιστοίχιση.",
  alternates: { canonical: "https://www.kad2025.gr/blog/metodologia-dedomenon" },
};

const faqItems = [
  {
    q: "Από πού προέρχονται τα δεδομένα του kad2025.gr;",
    a: "Αποκλειστικά από τις επίσημες αποφάσεις ΑΑΔΕ Α.1003/2026 (νέοι ΚΑΔ 2025) και Α.1004/2026 (πίνακας αντιστοίχισης), όπως δημοσιεύτηκαν σε ΦΕΚ. Δεν χρησιμοποιούνται εκτιμήσεις ή AI-παραγόμενες αντιστοιχίσεις.",
  },
  {
    q: "Γιατί ένας ΚΑΔ εμφανίζει περισσότερες από μία αντιστοιχίσεις;",
    a: "Επειδή ο επίσημος πίνακας Α.1004/2026 προβλέπει 685 περιπτώσεις διαχωρισμού: ένας παλιός ΚΑΔ 2008 αντιστοιχεί σε δύο ή περισσότερους νέους ΚΑΔ 2025. Η επιλογή του σωστού ανήκει στην επιχείρηση, με βάση την πραγματική της δραστηριότητα.",
  },
  {
    q: "Τα δεδομένα ενημερώθηκαν μετά την παράταση της προθεσμίας;",
    a: "Ναι. Η απόφαση Α.1113/2026 παρέτεινε την προθεσμία διόρθωσης ΚΑΔ έως τις 30 Οκτωβρίου 2026 — όλες οι σελίδες του kad2025.gr αναφέρουν τη νέα προθεσμία. Οι ίδιες οι αντιστοιχίσεις (Α.1004/2026) δεν έχουν τροποποιηθεί.",
  },
  {
    q: "Πώς αναφέρω ένα πιθανό σφάλμα στα δεδομένα;",
    a: "Στείλτε email στο info@kad2025.gr με τον ΚΑΔ και την αναμενόμενη αντιστοίχιση. Κάθε αναφορά ελέγχεται έναντι του επίσημου ΦΕΚ πριν από οποιαδήποτε διόρθωση.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Μεθοδολογία Δεδομένων kad2025.gr",
      datePublished: "2026-04-01",
      dateModified: "2026-06-10",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
      mainEntityOfPage: "https://www.kad2025.gr/blog/metodologia-dedomenon",
      inLanguage: "el-GR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function MetodologiaPage() {
  return (
    <div className="post-layout">
      <article className="post-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Μεθοδολογία Δεδομένων</span>
      </nav>

      <div className="meta-row">
        <span>📅 Ενημέρωση: 10 Ιουνίου 2026</span><span>·</span>
        <span>✍️ Ομάδα kad2025.gr</span><span>·</span>
        <span>⏱️ 9 λεπτά ανάγνωση</span>
      </div>

      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Μεθοδολογία Δεδομένων: Πώς Επεξεργαζόμαστε τα ΚΑΔ
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η διαφάνεια στον τρόπο που δουλεύουμε είναι θεμελιώδης αξία για το kad2025.gr.
        Σε αυτόν τον οδηγό εξηγούμε από πού προέρχονται τα δεδομένα, τι περιέχει πραγματικά
        η βάση αντιστοίχισης, ποιες ιδιαιτερότητες έχει ο επίσημος πίνακας της ΑΑΔΕ —
        και, το σημαντικότερο, πώς μπορείτε να επαληθεύσετε μόνοι σας κάθε αντιστοίχιση.
      </p>

      <section id="s1" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Από πού προέρχονται τα δεδομένα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          <strong>Αποκλειστική πηγή:</strong> Επίσημες αποφάσεις της Ανεξάρτητης Αρχής Δημοσίων
          Εσόδων (ΑΑΔΕ), δημοσιευμένες στην Εφημερίδα της Κυβερνήσεως (ΦΕΚ):
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li><strong>Α.1003/2026:</strong> Ορίζει τους νέους κωδικούς ΚΑΔ 2025 βάσει NACE Rev.2.1</li>
          <li><strong>Α.1004/2026:</strong> Επίσημος πίνακας αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025 (10.923 εγγραφές)</li>
          <li><strong>Α.1113/2026:</strong> Παράταση προθεσμίας διόρθωσης ΚΑΔ έως 30 Οκτωβρίου 2026</li>
        </ul>
        <p style={{ lineHeight: 1.8, marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          Δεν χρησιμοποιούμε ανεπίσημες πηγές, εκτιμήσεις ή AI-generated αντιστοιχίσεις.
          Κάθε εγγραφή στη βάση μας είναι 1-1 αντιγραφή από τα επίσημα αρχεία ΑΑΔΕ.
          Οι περιγραφές NACE Rev.2.1 (τι περιλαμβάνει και τι εξαιρεί κάθε τάξη) προέρχονται
          από τις επεξηγηματικές σημειώσεις της ευρωπαϊκής ονοματολογίας.
        </p>
      </section>

      <section id="s2" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Τι περιέχει η βάση — τα πραγματικά νούμερα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Επειδή τα στρογγυλεμένα ποσοστά συχνά παραπλανούν, δημοσιεύουμε τα ακριβή μεγέθη
          της βάσης όπως προκύπτουν από τον πίνακα Α.1004/2026:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
          {[
            { num: "10.923", label: "Εγγραφές αντιστοίχισης" },
            { num: "9.717", label: "Μοναδικοί ΚΑΔ 2008" },
            { num: "9.422", label: "Μοναδικοί ΚΑΔ 2025" },
            { num: "7.240", label: "Εγγραφές με αλλαγή κωδικού (66,3%)" },
            { num: "3.683", label: "Εγγραφές με ίδιο κωδικό (33,7%)" },
            { num: "685", label: "ΚΑΔ 2008 με πολλαπλές αντιστοιχίσεις" },
            { num: "721", label: "ΚΑΔ 2025 που προέκυψαν από συγχώνευση" },
            { num: "906", label: "Ίδιος κωδικός με νέα περιγραφή" },
          ].map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)" }}>{s.num}</div>
              <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Προσοχή στη διάκριση: οι «εγγραφές» δεν ταυτίζονται με τους «μοναδικούς κωδικούς»,
          ακριβώς επειδή ένας ΚΑΔ 2008 μπορεί να εμφανίζεται σε περισσότερες από μία γραμμές
          του πίνακα (διαχωρισμός) και ένας ΚΑΔ 2025 μπορεί να δέχεται πολλούς παλιούς
          (συγχώνευση). Η ακραία περίπτωση συγχώνευσης στον πίνακα είναι 96 παλιοί κωδικοί
          που καταλήγουν σε έναν ενιαίο νέο ΚΑΔ λιανικής διαμεσολάβησης, ενώ ο μεγαλύτερος
          διαχωρισμός αφορά το υπαίθριο λιανικό εμπόριο, που αναλύθηκε σε 52 εξειδικευμένους
          νέους κωδικούς.
        </p>
      </section>

      <section id="s3" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Ιδιαιτερότητες του πίνακα Α.1004/2026 που πρέπει να γνωρίζετε</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Δουλεύοντας καθημερινά με τον επίσημο πίνακα, έχουμε καταγράψει σημεία που
          δυσκολεύουν ακόμη και έμπειρους λογιστές. Τα μοιραζόμαστε γιατί εξηγούν
          φαινομενικά «παράξενα» αποτελέσματα αναζήτησης:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { t: "Η σειρά των γραμμών δεν δηλώνει προτεραιότητα", d: "Στις πολλαπλές αντιστοιχίσεις, ο πίνακας δεν ορίζει «κύρια» επιλογή — απλώς απαριθμεί τις αποδεκτές. Στο kad2025.gr προβάλλουμε ως πρώτη την αντιστοίχιση ίδιου κωδικού ή ίδιου τομέα όταν υπάρχει, αλλά εμφανίζουμε πάντα όλες τις εναλλακτικές." },
            { t: "Υπάρχουν αντιστοιχίσεις σε εντελώς διαφορετικό τομέα", d: "Ορισμένοι ΚΑΔ 2008 αντιστοιχίζονται (μεταξύ άλλων) σε νέο κωδικό άλλου διψήφιου τομέα. Δεν είναι σφάλμα του kad2025.gr — έτσι προβλέπει ο πίνακας, συνήθως για να καλύψει οριακές χρήσεις του παλιού κωδικού." },
            { t: "906 κωδικοί κράτησαν τον αριθμό αλλά άλλαξαν περιγραφή", d: "Ο αριθμός μένει ίδιος, όμως το λεκτικό της δραστηριότητας έχει επικαιροποιηθεί. Σε ελέγχους ή έγγραφα όπου αναγράφεται η περιγραφή, χρησιμοποιήστε τη νέα διατύπωση." },
            { t: "Μηδενικά στην αρχή του κωδικού", d: "Οι κωδικοί των τομέων 01–09 γράφονται άλλοτε με το αρχικό μηδενικό (π.χ. 01120001) και άλλοτε χωρίς (1120001). Η αναζήτησή μας δέχεται και τις δύο μορφές και τις κανονικοποιεί πριν την αντιστοίχιση." },
            { t: "Κωδικοί με ενεργό ρόλο και στα δύο συστήματα", d: "Κάποιοι αριθμοί υπάρχουν και ως ΚΑΔ 2008 και ως ΚΑΔ 2025 — με διαφορετικό περιεχόμενο σε κάθε σύστημα. Γι' αυτό κάθε σελίδα μας δηλώνει ρητά σε ποιο σύστημα ανήκει ο κωδικός που βλέπετε." },
          ].map((item) => (
            <div key={item.t} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{item.t}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="s4" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success, #16a34a)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πώς επαληθεύετε μόνοι σας μια αντιστοίχιση</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Δεν σας ζητάμε να μας εμπιστευτείτε τυφλά. Κάθε αντιστοίχιση που εμφανίζει το
          kad2025.gr επαληθεύεται σε τρία βήματα, που μπορείτε να ακολουθήσετε και εσείς:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>
            <strong>Έλεγχος στο myAADE:</strong> Συνδεθείτε στο myaade.gov.gr → Μητρώο &
            Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας. Εκεί βλέπετε
            τον ΚΑΔ που απέδωσε η ΑΑΔΕ στη δική σας επιχείρηση κατά την αυτόματη
            αντιστοίχιση της 9ης Μαρτίου 2026.
          </li>
          <li>
            <strong>Αντιπαραβολή με τον πίνακα Α.1004/2026:</strong> Εντοπίστε τον παλιό
            σας ΚΑΔ στον επίσημο πίνακα (διαθέσιμος στο aade.gr και στις <Link href="/sources" style={{ color: "var(--primary)" }}>Πηγές</Link> μας)
            και επιβεβαιώστε ότι ο νέος κωδικός που βλέπετε περιλαμβάνεται στις
            προβλεπόμενες αντιστοιχίσεις.
          </li>
          <li>
            <strong>Έλεγχος περιγραφής NACE 2.1:</strong> Διαβάστε στη σελίδα του νέου ΚΑΔ
            τι «περιλαμβάνει» και τι «εξαιρεί» η τάξη του. Αν η πραγματική σας δραστηριότητα
            εμπίπτει στις εξαιρέσεις, ο σωστός κωδικός είναι άλλος — ακόμη κι αν η αυτόματη
            αντιστοίχιση λέει διαφορετικά.
          </li>
        </ol>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.5rem", lineHeight: 1.7 }}>
          Αν τα βήματα 1 και 2 δεν συμφωνούν μεταξύ τους, έχετε περιθώριο διόρθωσης χωρίς
          πρόστιμο έως τις <strong>30 Οκτωβρίου 2026</strong> (Α.1113/2026), μέσω της
          εφαρμογής «Μεταβολή Εργασιών» ή με έντυπο Δ211 μέσω «Τα Αιτήματά μου».
        </p>
      </section>

      <section id="s5" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πότε και πώς ενημερώνονται τα δεδομένα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Παρακολουθούμε τακτικά τον ιστότοπο της ΑΑΔΕ και τη Διαύγεια για τροποποιήσεις
          των αποφάσεων. Όταν εντοπιστεί αλλαγή:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li>Επαληθεύουμε την αλλαγή έναντι του επίσημου ΦΕΚ</li>
          <li>Ενημερώνουμε τη βάση δεδομένων και αναδημοσιεύουμε τις επηρεαζόμενες σελίδες</li>
          <li>Καταγράφουμε την ημερομηνία ενημέρωσης στο κάτω μέρος των σχετικών σελίδων</li>
        </ol>
        <p style={{ lineHeight: 1.8, marginTop: "0.75rem", fontSize: "0.9rem" }}>
          Παράδειγμα από την πράξη: όταν εκδόθηκε η Α.1113/2026 με την παράταση της
          προθεσμίας από την 1η Ιουνίου στις 30 Οκτωβρίου 2026, ενημερώθηκαν όλες οι
          σελίδες ΚΑΔ, οι οδηγοί και τα banner του ιστότοπου ώστε πουθενά να μην
          εμφανίζεται η παλιά ημερομηνία.
        </p>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Αν εντοπίσετε ασυμφωνία μεταξύ των δεδομένων μας και της επίσημης απόφασης,
          ενημερώστε μας στο <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)" }}>info@kad2025.gr</a> —
          κάθε αναφορά ελέγχεται και απαντάται.
        </p>
      </section>

      <section id="s6" className="card" style={{ marginBottom: "1.5rem", background: "var(--warn-bg)", border: "1px solid var(--warn-border)" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "var(--warn-strong)" }}>⚠️ Όρια χρήσης</h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--warn-text)", margin: 0 }}>
          Τα δεδομένα του kad2025.gr παρέχονται <strong>αποκλειστικά για ενημερωτικούς σκοπούς</strong>.
          Δεν αποτελούν φορολογική, νομική ή λογιστική συμβουλή. Για οποιαδήποτε επίσημη
          ενέργεια (αλλαγή ΚΑΔ, δήλωση έναρξης), απευθυνθείτε στον λογιστή σας ή στο{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--warn-strong)", fontWeight: 600 }}>myaade.gov.gr</a>.
        </p>
      </section>

      <section id="s7" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>❓ Συχνές ερωτήσεις για τα δεδομένα</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/methodology" className="btn btn-primary">⚙️ Τεχνική Μεθοδολογία</Link>
        <Link href="/sources" className="btn btn-ghost">📚 Πηγές & Αναφορές</Link>
        <Link href="/blog/kad-2008-vs-2025" className="btn btn-ghost">📊 ΚΑΔ 2008 vs 2025</Link>
        <Link href="/about" className="btn btn-ghost">ℹ️ Σχετικά με εμάς</Link>
      </div>
      </article>

      <aside className="post-toc">
        <div className="card post-toc-card">
          <div className="post-toc-title">Σε αυτό το άρθρο</div>
          <a href="#s1">Από πού προέρχονται τα δεδομένα</a>
          <a href="#s2">Τι περιέχει η βάση — τα πραγματικά νούμερα</a>
          <a href="#s3">Ιδιαιτερότητες του πίνακα Α.1004/2026 που πρέπει να γνω…</a>
          <a href="#s4">Πώς επαληθεύετε μόνοι σας μια αντιστοίχιση</a>
          <a href="#s5">Πότε και πώς ενημερώνονται τα δεδομένα</a>
          <a href="#s6">Όρια χρήσης</a>
          <a href="#s7">Συχνές ερωτήσεις για τα δεδομένα</a>
        </div>
      </aside>
    </div>
  );
}
