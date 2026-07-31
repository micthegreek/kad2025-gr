import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Λάθος ΚΑΔ 2026: Πρόστιμα, Συνέπειες & Διόρθωση",
  description:
    "Τι κοστίζει ένας λάθος ΚΑΔ το 2026: το άμεσο πρόστιμο εκπρόθεσμης μεταβολής, οι έμμεσες συνέπειες σε ΕΣΠΑ και επιδοτήσεις, και πώς διορθώνετε δωρεάν έως 30 Οκτωβρίου 2026.",
  alternates: { canonical: "https://www.kad2025.gr/blog/lathos-kad-prostima" },
};

const faqItems = [
  {
    q: "Υπάρχει πρόστιμο αν διορθώσω τον ΚΑΔ μου τώρα;",
    a: "Όχι. Με την απόφαση ΑΑΔΕ Α.1113/2026, οι διορθώσεις ΚΑΔ που σχετίζονται με τη μετάβαση στους ΚΑΔ 2025 γίνονται χωρίς πρόστιμο έως τις 30 Οκτωβρίου 2026, μέσω της εφαρμογής «Μεταβολή Εργασιών» στο myAADE.",
  },
  {
    q: "Πόσο είναι το πρόστιμο για εκπρόθεσμη δήλωση μεταβολής ΚΑΔ;",
    a: "Η δήλωση μεταβολής εργασιών είναι δήλωση πληροφοριακού χαρακτήρα. Για τέτοιες δηλώσεις, ο Κώδικας Φορολογικής Διαδικασίας προβλέπει κατά κανόνα πρόστιμο 100 ευρώ ανά εκπρόθεσμη δήλωση. Το ακριβές ποσό εξαρτάται από την περίπτωση — επιβεβαιώστε με τον λογιστή σας.",
  },
  {
    q: "Μπορεί λάθος ΚΑΔ να με αποκλείσει από επιδότηση;",
    a: "Ναι — αυτό είναι στην πράξη το ακριβότερο κόστος. Οι προκηρύξεις ΕΣΠΑ και Αναπτυξιακού Νόμου ορίζουν λίστες επιλέξιμων ΚΑΔ 2025: αν στο Μητρώο εμφανίζεται κωδικός εκτός λίστας, η αίτηση απορρίπτεται ως μη επιλέξιμη, ανεξάρτητα από την πραγματική δραστηριότητα.",
  },
  {
    q: "Το λάθος προήλθε από την αυτόματη αντιστοίχιση της ΑΑΔΕ — φταίω εγώ;",
    a: "Η αυτόματη αντιστοίχιση της 9ης Μαρτίου 2026 έγινε βάσει του επίσημου πίνακα, αλλά στις 685 περιπτώσεις πολλαπλών αντιστοιχίσεων ο κωδικός που αποδόθηκε μπορεί να μην περιγράφει με ακρίβεια τη δική σας δραστηριότητα. Γι' αυτό δόθηκε το παράθυρο δωρεάν διόρθωσης: η ευθύνη ελέγχου και επιβεβαίωσης ανήκει στην επιχείρηση.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Λάθος ΚΑΔ: Πρόστιμα & Συνέπειες το 2026",
      datePublished: "2026-06-10",
      dateModified: "2026-06-10",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
      mainEntityOfPage: "https://www.kad2025.gr/blog/lathos-kad-prostima",
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

export default function LathosKadProstimaPage() {
  return (
    <div className="post-layout">
      <article className="post-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Λάθος ΚΑΔ: Πρόστιμα & Συνέπειες</span>
      </nav>
      <div className="meta-row">
        <span>📅 10 Ιουνίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 9 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Λάθος ΚΑΔ: Πρόστιμα, Συνέπειες και Πώς τα Αποφεύγετε το 2026
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Το άμεσο πρόστιμο για έναν λάθος ή μη ενημερωμένο ΚΑΔ είναι σχετικά μικρό. Το πραγματικό
        κόστος κρύβεται αλλού: σε απορριφθείσες αιτήσεις επιδότησης, σε ασυμφωνίες μητρώων και σε
        καθυστερήσεις τη στιγμή που τις χρειάζεστε λιγότερο. Μέχρι τις <strong>30 Οκτωβρίου 2026</strong>,
        όμως, η διόρθωση είναι εντελώς δωρεάν — δείτε τι ισχύει αναλυτικά.
      </p>

      <section id="s1" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι θεωρείται «λάθος ΚΑΔ» μετά τη μετάβαση</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Μετά την αυτόματη αντιστοίχιση της 9ης Μαρτίου 2026, οι περιπτώσεις λάθους
          συνοψίζονται σε τρεις:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { t: "Η αυτόματη αντιστοίχιση δεν ταιριάζει στη δραστηριότητά σας", d: "Στις 685 περιπτώσεις διαχωρισμού (1 παλιός → πολλοί νέοι ΚΑΔ), η ΑΑΔΕ απέδωσε έναν από τους προβλεπόμενους κωδικούς — όχι απαραίτητα αυτόν που περιγράφει ακριβέστερα τη δική σας δραστηριότητα. Παράδειγμα: ο 47891000 (υπαίθριοι πάγκοι) αναλύθηκε σε 52 νέους κωδικούς ανά προϊόν." },
            { t: "Ο ΚΑΔ δεν καλύπτει ό,τι πραγματικά κάνετε", d: "Η επιχείρηση εξελίχθηκε (π.χ. πρόσθεσε online πωλήσεις ή νέα υπηρεσία) χωρίς να δηλωθεί ο αντίστοιχος δευτερεύων ΚΑΔ. Στο νέο, πιο αναλυτικό σύστημα της NACE Rev.2.1, αυτές οι αποκλίσεις γίνονται πιο ορατές." },
            { t: "Αμετάβλητος αριθμός, αλλαγμένη περιγραφή", d: "906 κωδικοί κράτησαν τον ίδιο αριθμό με νέο λεκτικό. Σε έγγραφα και αιτήσεις όπου αναγράφεται η περιγραφή δραστηριότητας, η χρήση του παλιού λεκτικού δημιουργεί ασυμφωνίες." },
          ].map((x) => (
            <div key={x.t} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{x.t}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="s2" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Το άμεσο πρόστιμο: τι προβλέπει ο νόμος</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η αλλαγή ή προσθήκη ΚΑΔ γίνεται με <strong>δήλωση μεταβολής εργασιών</strong> — δήλωση
          «πληροφοριακού χαρακτήρα» κατά τον Κώδικα Φορολογικής Διαδικασίας. Για την εκπρόθεσμη
          υποβολή τέτοιων δηλώσεων προβλέπεται <strong>κατά κανόνα πρόστιμο 100 ευρώ</strong> ανά
          δήλωση. Δεν είναι ποσό που «πονάει» μια επιχείρηση — και ακριβώς εκεί κρύβεται η παγίδα:
          πολλοί το αντιμετωπίζουν ως αμελητέο και αφήνουν τον έλεγχο για αργότερα.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Σημείωση: το ακριβές ύψος και η επιβολή εξαρτώνται από την κατηγορία του υπόχρεου και τις
          περιστάσεις της κάθε περίπτωσης. Για οριστική εικόνα στη δική σας υπόθεση, επιβεβαιώστε με
          τον λογιστή σας — το παρόν άρθρο δίνει το γενικό πλαίσιο και δεν αποτελεί φορολογική συμβουλή.
        </p>
      </section>

      <section id="s3" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--danger, #dc2626)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Οι έμμεσες συνέπειες: εκεί είναι το πραγματικό κόστος</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { t: "Αποκλεισμός από ΕΣΠΑ και Αναπτυξιακό Νόμο", d: "Οι προκηρύξεις ορίζουν κλειστές λίστες επιλέξιμων ΚΑΔ 2025. Η αξιολόγηση γίνεται με βάση το Μητρώο — αν εκεί εμφανίζεται κωδικός εκτός λίστας ή λείπει ο σχετικός δευτερεύων, η αίτηση κόβεται στο πρώτο στάδιο, όσο επιλέξιμη κι αν είναι η πραγματική δραστηριότητα. Σε επιδοτήσεις δεκάδων χιλιάδων ευρώ, ένα «λάθος 100 ευρώ» γίνεται πολύ ακριβό." },
            { t: "Μέτρα στήριξης που φιλτράρουν με ΚΑΔ", d: "Η πρόσφατη εμπειρία το έδειξε ξεκάθαρα: έκτακτα μέτρα στήριξης (όπως οι ενισχύσεις της περιόδου 2020-2021) χορηγήθηκαν με κριτήριο τον δηλωμένο ΚΑΔ σε συγκεκριμένες ημερομηνίες αναφοράς. Όποιος είχε λάθος ή ανενημέρωτο κωδικό, έμεινε εκτός — χωρίς δυνατότητα αναδρομικής διόρθωσης." },
            { t: "Ασυμφωνίες με ΓΕΜΗ και επιμελητήρια", d: "Τα μητρώα ευθυγραμμίζονται σταδιακά με τους ΚΑΔ 2025. Διαφορετικός κωδικός σε ΑΑΔΕ και ΓΕΜΗ σημαίνει επιστροφές αιτήσεων, πρόσθετα δικαιολογητικά και καθυστερήσεις σε βεβαιώσεις και πιστοποιητικά." },
            { t: "Εικόνα σε ελέγχους και διασταυρώσεις", d: "Ο ΚΑΔ είναι το πρώτο φίλτρο κατηγοριοποίησης σε διασταυρώσεις της ΑΑΔΕ. Δραστηριότητα που δεν «κουμπώνει» με τον δηλωμένο κωδικό μπορεί να εγείρει ερωτήματα — όχι απαραίτητα κυρώσεις, αλλά χαμένο χρόνο και πρόσθετες εξηγήσεις." },
            { t: "Πρακτικά εμπόδια στην καθημερινότητα", d: "Από τραπεζικούς φακέλους χρηματοδότησης μέχρι συμμετοχή σε διαγωνισμούς και πλατφόρμες, ο ΚΑΔ ζητείται και επαληθεύεται όλο και συχνότερα. Κάθε ασυμφωνία μεταφράζεται σε email, τηλέφωνα και αναμονή." },
          ].map((x) => (
            <div key={x.t} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{x.t}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{x.d}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", marginTop: "0.85rem" }}>
          Δείτε αναλυτικά ποιοι κωδικοί είναι επιλέξιμοι σε ενεργά προγράμματα στο εργαλείο{" "}
          <Link href="/kad-epidotisi-espa" style={{ color: "var(--primary)" }}>ελέγχου επιλεξιμότητας ΕΣΠΑ</Link>.
        </p>
      </section>

      <section id="s4" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success, #16a34a)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Το παράθυρο που μηδενίζει το ρίσκο: έως 30/10/2026</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Με την απόφαση <strong>Α.1113/2026</strong>, η ΑΑΔΕ παρέτεινε την προθεσμία ελέγχου και
          διόρθωσης των ΚΑΔ από την 1η Ιουνίου στις <strong>30 Οκτωβρίου 2026</strong> — χωρίς
          κανένα πρόστιμο για τις σχετικές μεταβολές. Πρακτικά, μέχρι τότε κάθε λάθος της
          αυτόματης αντιστοίχισης διορθώνεται με μηδενικό κόστος, σε τρία βήματα:
        </p>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li><strong>Δείτε τι ισχύει σήμερα:</strong> myAADE → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας.</li>
          <li><strong>Επαληθεύστε την αντιστοίχιση:</strong> ελέγξτε τον παλιό σας κωδικό στο <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>εργαλείο αντιστοίχισης</Link> — και τις εναλλακτικές, αν υπάρχουν.</li>
          <li><strong>Διορθώστε ψηφιακά:</strong> εφαρμογή «Μεταβολή Εργασιών» ή έντυπο Δ211 μέσω «Τα Αιτήματά μου». Αναλυτικά βήματα στον οδηγό <Link href="/blog/pos-na-diorthoso-kad-myaade" style={{ color: "var(--primary)" }}>διόρθωσης ΚΑΔ στο myAADE</Link>.</li>
        </ol>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Μετά τις 30 Οκτωβρίου, οι μεταβολές επανέρχονται στο κανονικό καθεστώς προθεσμιών —
          και το «θα το δω αργότερα» αποκτά ξανά τιμολόγιο.
        </p>
      </section>

      <section id="s5" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a} Αν ο κωδικός σας προήλθε από <Link href="/blog/kad-diaspaseis-odigos">διάσπαση</Link>, ο έλεγχος είναι διπλά απαραίτητος.</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Ελέγξτε τον ΚΑΔ σας τώρα</Link>
        <Link href="/prothesmia-kad-2025" className="btn btn-ghost">⏰ Όλα για την προθεσμία</Link>
        <Link href="/kad-2025-excel" className="btn btn-ghost">📥 Δωρεάν Excel ΚΑΔ 2025</Link>
      </div>
      </article>

      <aside className="post-toc">
        <div className="card post-toc-card">
          <div className="post-toc-title">Σε αυτό το άρθρο</div>
          <a href="#s1">Τι θεωρείται «λάθος ΚΑΔ» μετά τη μετάβαση</a>
          <a href="#s2">Το άμεσο πρόστιμο: τι προβλέπει ο νόμος</a>
          <a href="#s3">Οι έμμεσες συνέπειες: εκεί είναι το πραγματικό κόστος</a>
          <a href="#s4">Το παράθυρο που μηδενίζει το ρίσκο: έως 30/10/2026</a>
          <a href="#s5">Συχνές ερωτήσεις</a>
        </div>
      </aside>
    </div>
  );
}
