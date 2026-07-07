import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Οδηγοί ΚΑΔ 2025/2026: Προθεσμία 30/10, Διορθώσεις & Επιδοτήσεις",
  description: "Πλήρης οδηγός αλλαγών ΚΑΔ 2025: τι αλλάζει, πώς να αλλάξετε ΚΑΔ, προθεσμίες, συχνά λάθη, οδηγός για λογιστές. Επίσημα δεδομένα ΑΑΔΕ.",
  alternates: { canonical: "https://www.kad2025.gr/blog" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      name: "Οδηγοί ΚΑΔ 2025",
      url: "https://www.kad2025.gr/blog",
      description: "Οδηγοί και άρθρα για ΚΑΔ 2025",
      publisher: { "@type": "Organization", name: "kad2025.gr" },
      inLanguage: "el-GR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Από πότε ισχύουν οι νέοι ΚΑΔ 2025;", acceptedAnswer: { "@type": "Answer", text: "Από 1η Μαρτίου 2026." } },
        { "@type": "Question", name: "Μέχρι πότε μπορώ να διορθώσω τον ΚΑΔ χωρίς πρόστιμο;", acceptedAnswer: { "@type": "Answer", text: "Έως 30 Οκτωβρίου 2026 μέσω myAADE." } },
      ],
    },
  ],
};

const articles = [
  { href: "/blog/epeksigimatikes-simeioseis-nace-odigos", title: "Τι Πραγματικά Περιλαμβάνει ο ΚΑΔ σας: Οδηγός των Επίσημων Επεξηγήσεων NACE 2.1", desc: "Ο τίτλος του ΚΑΔ δεν αρκεί: πώς διαβάζονται τα «Περιλαμβάνει / Δεν περιλαμβάνει» των επίσημων σημειώσεων ΕΛΣΤΑΤ και πού τα βρίσκετε για κάθε κωδικό.", date: "4 Ιουλίου 2026", tag: "🔴 Νέο", readTime: "7 λεπτά" },
  { href: "/blog/parexigimenes-taksinomiseis-kad", title: "Οι 10 πιο Παρεξηγημένες Ταξινομήσεις ΚΑΔ: Τι ΔΕΝ Περιλαμβάνει ο Κωδικός σας", desc: "Φόρτιση ηλεκτρικών ≠ βενζινάδικο, personal trainer ≠ γυμναστήριο: 10 πραγματικές περιπτώσεις όπου ο «προφανής» ΚΑΔ είναι λάθος — από τις επίσημες εξαιρέσεις NACE 2.1.", date: "4 Ιουλίου 2026", tag: "🔴 Νέο", readTime: "8 λεπτά" },
  { href: "/blog/lathos-kad-prostima", title: "Λάθος ΚΑΔ: Πρόστιμα & Συνέπειες το 2026", desc: "Το άμεσο πρόστιμο, οι έμμεσες συνέπειες σε ΕΣΠΑ και μητρώα, και το παράθυρο δωρεάν διόρθωσης έως 30/10/2026.", date: "10 Ιουνίου 2026", tag: "", readTime: "9 λεπτά" },
  { href: "/blog/kad-gia-eshop", title: "ΚΑΔ για E-shop: Οδηγός μετά την Κατάργηση του 47.91", desc: "Γιατί δεν υπάρχει πια ενιαίος ΚΑΔ e-shop, πώς ταξινομείται το ηλεκτρονικό εμπόριο ανά προϊόν, και τι ισχύει για marketplaces.", date: "10 Ιουνίου 2026", tag: "", readTime: "8 λεπτά" },
  { href: "/blog/kad-airbnb-vraxychronia", title: "ΚΑΔ για Airbnb: 55.20 ή 68.20 — και Πότε Κανέναν", desc: "Η κρίσιμη διάκριση καταλύματος/εκμίσθωσης, το όριο των 3 ακινήτων, ΑΜΑ vs ΚΑΔ, και τι άλλαξε στους ΚΑΔ 2025.", date: "10 Ιουνίου 2026", tag: "", readTime: "8 λεπτά" },

  { href: "/blog/paratasi-prothesmias-kad-30-oktovriou", title: "Παράταση Προθεσμίας ΚΑΔ: Νέα Ημερομηνία 30 Οκτωβρίου 2026", desc: "Με απόφαση ΑΑΔΕ Α.1113/2026, η προθεσμία επικαιροποίησης ΚΑΔ 2025 παρατείνεται από 1η Ιουνίου στις 30 Οκτωβρίου 2026 χωρίς πρόστιμο.", date: "4 Ιουνίου 2026", tag: "", readTime: "5 λεπτά" },
  
  { href: "/blog/anoixta-programmata-epidotisis", title: "Ανοιχτά Προγράμματα Επιδότησης 2026 — Επιλεξιμότητα ΚΑΔ", desc: "Ποια προγράμματα ΕΣΠΑ και Αναπτυξιακός Νόμος είναι ανοιχτά και πώς να ελέγξετε αν ο ΚΑΔ 2025 σας είναι επιλέξιμος.", date: "1 Μαΐου 2026", tag: "", readTime: "9 λεπτά" },
  { href: "/blog/psifiaki-vevaiosi-kad-2025", title: "Νέα Ψηφιακή Βεβαίωση ΚΑΔ — ΑΑΔΕ 27/4/2026", desc: "Ψηφιακή βεβαίωση αντιστοίχισης, ειδικές κατηγορίες υπαίθριου εμπορίου & e-shop. Τι αποκάλυψε το επίσημο Δελτίο Τύπου ΑΑΔΕ.", date: "27 Απριλίου 2026", tag: "Νέο", readTime: "5 λεπτά" },
  { href: "/blog/pos-na-diorthoso-kad-myaade", title: "Πώς να Διορθώσετε τον ΚΑΔ σας στο myAADE", desc: "Βήμα-βήμα οδηγός: ηλεκτρονικά μέσω Μεταβολής Εργασιών ή με έντυπο Δ211. Προθεσμία 30 Οκτωβρίου 2026.", date: "15 Απριλίου 2026", tag: "Οδηγός", readTime: "7 λεπτά" },
  { href: "/blog/kad-kai-fpa-2026", title: "ΚΑΔ 2025 και ΦΠΑ: Τι Αλλάζει το 2026", desc: "Πώς ο νέος ΚΑΔ 2025 μπορεί να επηρεάσει τον συντελεστή ΦΠΑ σας και ποιοι κλάδοι πρέπει να δώσουν ιδιαίτερη προσοχή.", date: "25 Απριλίου 2026", tag: "Φορολογικά", readTime: "6 λεπτά" },
  { href: "/blog/nace-rev21-explainer", title: "NACE Rev.2.1: Η Ευρωπαϊκή Ταξινόμηση πίσω από τους ΚΑΔ", desc: "Τι είναι το NACE Rev.2.1, γιατί εκδόθηκε και πώς εφαρμόστηκε στην Ελλάδα ως ΚΑΔ 2025.", date: "20 Απριλίου 2026", tag: "Ανάλυση", readTime: "7 λεπτά" },
  { href: "/blog/syxna-lathi-antistoixisis", title: "5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ 2008→2025", desc: "Ποια είναι τα πιο κοινά λάθη που κάνουν επιχειρήσεις και λογιστές και πώς να τα αποφύγετε.", date: "15 Μαρτίου 2026", tag: "Για όλους", readTime: "6 λεπτά" },
  { href: "/blog/kad-kai-logistes", title: "Οδηγός ΚΑΔ 2025 για Λογιστές", desc: "Πώς να ελέγξετε αποτελεσματικά τους ΚΑΔ δεκάδων πελατών με το MazikiTool.", date: "20 Μαρτίου 2026", tag: "Για Λογιστές", readTime: "8 λεπτά" },
  { href: "/blog/kad-gia-nea-epixeirisi", title: "ΚΑΔ για Νέα Επιχείρηση 2026", desc: "Αναλυτικός οδηγός επιλογής ΚΑΔ για νέες επιχειρήσεις. Τι πρέπει να γνωρίζετε.", date: "25 Μαρτίου 2026", tag: "Νέες Επιχειρήσεις", readTime: "7 λεπτά" },
  { href: "/blog/kad-2008-vs-2025", title: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε", desc: "Συγκριτική ανάλυση παλιού και νέου συστήματος ΚΑΔ. Ποιοι κλάδοι επηρεάστηκαν περισσότερο.", date: "1 Απριλίου 2026", tag: "Ανάλυση", readTime: "7 λεπτά" },
  { href: "/blog/pos-na-vro-ton-sosto-kad", title: "Πώς να Βρείτε τον Σωστό ΚΑΔ 2025", desc: "Βήμα-βήμα οδηγός εύρεσης του κατάλληλου ΚΑΔ 2025. Τρεις διαφορετικές μέθοδοι.", date: "5 Απριλίου 2026", tag: "Οδηγός", readTime: "6 λεπτά" },
  { href: "/blog/kad-kai-epidotiseis", title: "ΚΑΔ και ΕΣΠΑ 2025: Τι να Προσέξετε", desc: "Πώς οι νέοι ΚΑΔ 2025 επηρεάζουν την επιλεξιμότητα σε ΕΣΠΑ, ΔΥΠΑ και άλλες επιδοτήσεις.", date: "10 Απριλίου 2026", tag: "ΕΣΠΑ", readTime: "8 λεπτά" },
  { href: "/blog/metodologia-dedomenon", title: "Μεθοδολογία Δεδομένων kad2025.gr", desc: "Αναλυτική παρουσίαση πηγών δεδομένων, διαδικασίας επαλήθευσης και ορθής ερμηνείας.", date: "1 Απριλίου 2026", tag: "Διαφάνεια", readTime: "5 λεπτά" },
];

const tagColors: Record<string, string> = {
  "Για όλους": "#1d4ed8", "Για Λογιστές": "#7c3aed", "Νέες Επιχειρήσεις": "#059669",
  "Ανάλυση": "#0891b2", "Οδηγός": "#d97706", "ΕΣΠΑ": "#dc2626", "Διαφάνεια": "#374151", "Φορολογικά": "#0891b2",
};

const faqs = [
  { q: "Από πότε ισχύουν οι νέοι ΚΑΔ 2025;", a: "Από 1η Μαρτίου 2026. Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026." },
  { q: "Έγινε αυτόματη αντιστοίχιση — τι σημαίνει;", a: "Η ΑΑΔΕ αντιστοίχισε αυτόματα τους παλιούς ΚΑΔ 2008 για 1,9 εκ. επιχειρήσεις. Ελέγξτε αν η αντιστοίχιση είναι σωστή." },
  { q: "Πώς ελέγχω τον νέο ΚΑΔ μου;", a: "myaade.gov.gr → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Επιχείρησης." },
  { q: "Μέχρι πότε διορθώνω χωρίς πρόστιμο;", a: "Έως 30 Οκτωβρίου 2026, μέσω Μεταβολή Εργασιών στο myAADE ή με έντυπο Δ211." },
  { q: "Αλλάζουν οι ΚΑΔ στα τιμολόγια;", a: "Όχι. Οι ΚΑΔ χρησιμοποιούνται στο Μητρώο ΑΑΔΕ και δεν εμφανίζονται σε τιμολόγια." },
];

export default function BlogIndexPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Οδηγοί & Άρθρα</span>
      </nav>
      <h1 style={{ marginBottom: "0.5rem" }}>Οδηγοί & Άρθρα ΚΑΔ 2025</h1>
      <p style={{ marginTop: "-0.4rem", marginBottom: "1rem" }}><a href="/feed.xml" style={{ fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none" }}>📡 RSS feed</a></p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Πρακτικοί οδηγοί και άρθρα για επιχειρήσεις, λογιστές και ελεύθερους επαγγελματίες.
        Βασισμένα αποκλειστικά στις επίσημες αποφάσεις ΑΑΔΕ Α.1003/2026 & Α.1004/2026.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
        {articles.map((a) => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
            <div className="card" style={{ transition: "border-color 0.2s" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: 20, background: tagColors[a.tag] || "#374151", color: "white" }}>{a.tag}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>📅 {a.date} · ⏱️ {a.readTime}</span>
              </div>
              <div style={{ fontWeight: 700, color: "var(--primary)", marginBottom: "0.25rem", lineHeight: 1.4 }}>{a.title}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{a.desc}</div>
            </div>
          </Link>
        ))}
      </div>
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Νέοι ΚΑΔ 2025: Πλήρης Οδηγός Αλλαγών</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Από <strong>1η Μαρτίου 2026</strong>, η Ελλάδα υιοθέτησε νέο σύστημα ΚΑΔ σε εναρμόνιση με το ευρωπαϊκό
          NACE Rev.2.1. Η ΑΑΔΕ εξέδωσε την <strong>Α.1003/2026</strong> (νέοι κωδικοί) και <strong>Α.1004/2026</strong> (πίνακας αντιστοίχισης).
          Από τους 9.717 μοναδικούς ΚΑΔ 2008, <strong>7.240 άλλαξαν</strong> και 2.477 παρέμειναν ίδιοι.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η αυτόματη αντιστοίχιση 1,9 εκ. επιχειρήσεων έγινε στις <strong>9 Μαρτίου 2026</strong>. Αν η αντιστοίχιση
          δεν είναι σωστή για τη δραστηριότητά σας, έχετε έως <strong>30 Οκτωβρίου 2026</strong> να διορθώσετε χωρίς πρόστιμο.
        </p>
      </section>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
      <div style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "var(--warn-text)" }}>
        ⚠️ Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο — δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
        Για επίσημες ενέργειες επισκεφθείτε το{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--warn-strong)", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
