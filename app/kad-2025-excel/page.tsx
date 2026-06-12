import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ 2025 Excel: Δωρεάν Πίνακας Αντιστοίχισης (10.923 γραμμές)",
  description:
    "Κατεβάστε δωρεάν τον πλήρη πίνακα ΚΑΔ 2025 σε Excel: 10.923 αντιστοιχίσεις ΚΑΔ 2008 → 2025 με περιγραφές και κατάσταση αλλαγής. Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026.",
  alternates: { canonical: "https://www.kad2025.gr/kad-2025-excel" },
  openGraph: {
    title: "ΚΑΔ 2025 σε Excel — Δωρεάν Λήψη Πλήρους Πίνακα",
    description: "10.923 αντιστοιχίσεις ΚΑΔ 2008 → 2025 σε μορφοποιημένο Excel με φίλτρα. Δωρεάν, χωρίς εγγραφή.",
  },
};

const faqItems = [
  {
    q: "Είναι πραγματικά δωρεάν το Excel με τους ΚΑΔ 2025;",
    a: "Ναι, εντελώς δωρεάν και χωρίς εγγραφή ή email. Το αρχείο περιέχει και τις 10.923 εγγραφές του επίσημου πίνακα αντιστοίχισης της ΑΑΔΕ (Α.1004/2026), μορφοποιημένες με φίλτρα και σταθερή γραμμή τίτλων.",
  },
  {
    q: "Πόσο ενημερωμένο είναι το αρχείο;",
    a: "Η τρέχουσα έκδοση δημιουργήθηκε στις 10 Ιουνίου 2026 και αποτυπώνει τον πίνακα των αποφάσεων Α.1003/2026 και Α.1004/2026, μαζί με τη νέα προθεσμία διόρθωσης (30 Οκτωβρίου 2026, Α.1113/2026). Αν οι αποφάσεις τροποποιηθούν, το αρχείο επανεκδίδεται.",
  },
  {
    q: "Ποια είναι η διαφορά από τη Μαζική Αντιστοίχιση του site;",
    a: "Το Excel περιέχει ολόκληρο τον πίνακα για offline χρήση. Η Μαζική Αντιστοίχιση (MazikiTool) δέχεται τη δική σας λίστα κωδικών — π.χ. τους ΚΑΔ των πελατών ενός λογιστικού γραφείου — και εξάγει μόνο τα δικά σας αποτελέσματα σε Excel ή CSV.",
  },
  {
    q: "Μπορώ να αναδημοσιεύσω ή να μοιραστώ το αρχείο;",
    a: "Ναι — μπορείτε να το μοιραστείτε ελεύθερα με συναδέλφους και πελάτες, με αναφορά στην πηγή (kad2025.gr). Τα ίδια τα δεδομένα προέρχονται από τις δημόσιες αποφάσεις της ΑΑΔΕ.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.kad2025.gr/kad-2025-excel",
      url: "https://www.kad2025.gr/kad-2025-excel",
      name: "ΚΑΔ 2025 σε Excel — Δωρεάν Πίνακας Αντιστοίχισης",
      inLanguage: "el-GR",
      dateModified: "2026-06-10",
      isPartOf: { "@id": "https://www.kad2025.gr/#website" },
    },
    {
      "@type": "Dataset",
      name: "Πίνακας Αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025",
      description:
        "Πλήρης πίνακας 10.923 αντιστοιχίσεων κωδικών αριθμών δραστηριότητας (ΚΑΔ) από το σύστημα 2008 στο σύστημα 2025 (NACE Rev.2.1), βάσει των αποφάσεων ΑΑΔΕ Α.1003/2026 και Α.1004/2026.",
      url: "https://www.kad2025.gr/kad-2025-excel",
      license: "https://www.kad2025.gr/terms",
      creator: { "@type": "Organization", name: "kad2025.gr" },
      dateModified: "2026-06-10",
      inLanguage: "el-GR",
      distribution: [
        {
          "@type": "DataDownload",
          encodingFormat: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          contentUrl: "https://www.kad2025.gr/kad-2025-antistoixisi.xlsx",
        },
      ],
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

export default function KadExcelPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>ΚΑΔ 2025 σε Excel</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        ΚΑΔ 2025 σε Excel: Δωρεάν Λήψη του Πλήρους Πίνακα Αντιστοίχισης
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
        Ενημέρωση: 10 Ιουνίου 2026 · Πηγή: ΑΑΔΕ Α.1003/2026 & Α.1004/2026 · Χωρίς εγγραφή
      </p>

      <div className="tldr">
        <strong style={{ color: "var(--primary)" }}>Σύντομη απάντηση:</strong>{" "}
        Κατεβάστε δωρεάν τον πλήρη πίνακα <strong>ΚΑΔ 2008 → ΚΑΔ 2025</strong> σε Excel:
        10.923 γραμμές με κωδικούς, επίσημες περιγραφές και ένδειξη «Άλλαξε / Αμετάβλητος»,
        έτοιμο για φίλτρα και αναζήτηση. Ισχύει και για όσους αναζητούν «νέους ΚΑΔ 2026» —
        πρόκειται για το ίδιο σύστημα.
      </div>

      {/* Download CTA */}
      <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "5px solid var(--accent)", textAlign: "center", padding: "1.5rem" }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📥</div>
        <h2 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>kad-2025-antistoixisi.xlsx</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
          631 KB · 10.923 γραμμές · 2 φύλλα εργασίας · Excel 2010+ / LibreOffice / Google Sheets
        </p>
        <a
          href="/kad-2025-antistoixisi.xlsx"
          download
          className="btn btn-primary"
          style={{ fontSize: "1rem", padding: "0.75rem 2rem", display: "inline-block" }}
        >
          ⬇️ Δωρεάν Λήψη Excel
        </a>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
          Χωρίς email, χωρίς εγγραφή — απλό αρχείο .xlsx
        </p>
      </div>

      {/* Τι περιέχει */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>📋 Τι περιέχει το αρχείο</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "0.85rem" }}>
          Το φύλλο «Αντιστοίχιση ΚΑΔ» έχει πέντε στήλες: <strong>ΚΑΔ 2008</strong>,{" "}
          <strong>Περιγραφή ΚΑΔ 2008</strong>, <strong>ΚΑΔ 2025</strong>,{" "}
          <strong>Περιγραφή ΚΑΔ 2025</strong> και <strong>Κατάσταση</strong> (Άλλαξε / Αμετάβλητος).
          Περιλαμβάνει και τις 10.923 εγγραφές του επίσημου πίνακα — μαζί με τις 685 περιπτώσεις
          διαχωρισμού, όπου ο ίδιος παλιός κωδικός εμφανίζεται σε περισσότερες από μία γραμμές.
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li>Σταθερή (frozen) γραμμή τίτλων και ενεργά αυτόματα φίλτρα σε όλες τις στήλες</li>
          <li>Δεύτερο φύλλο «Πληροφορίες» με πηγές, ημερομηνίες και την προθεσμία 30/10/2026</li>
          <li>Καθαρό κείμενο χωρίς τύπους — ανοίγει σε Excel, LibreOffice και Google Sheets</li>
        </ul>
      </div>

      {/* Πώς να το χρησιμοποιήσετε */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>🔎 Πώς να βρείτε τον ΚΑΔ σας μέσα στο Excel</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li><strong>Με φίλτρο:</strong> πατήστε το βελάκι στη στήλη «ΚΑΔ 2008», επιλέξτε «Φίλτρα κειμένου → Αρχίζει με» και πληκτρολογήστε τα πρώτα ψηφία του κωδικού σας.</li>
          <li><strong>Με αναζήτηση:</strong> Ctrl+F και πληκτρολογήστε τον 8ψήφιο κωδικό ή λέξη από την περιγραφή της δραστηριότητας.</li>
          <li><strong>Μόνο τις αλλαγές:</strong> φιλτράρετε τη στήλη «Κατάσταση» σε «Άλλαξε» για να δείτε τους 7.240 κωδικούς που πήραν νέο αριθμό.</li>
        </ol>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "0.75rem" }}>
          Συμβουλή για κωδικούς των τομέων 01–09: στο αρχείο εμφανίζονται όπως στον επίσημο πίνακα.
          Αν δεν βρίσκετε έναν κωδικό, δοκιμάστε την αναζήτηση και χωρίς το αρχικό μηδενικό.
        </p>
      </div>

      {/* ΚΑΔ 2026 clarification — targets «νεοι καδ 2026 excel» */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Ψάχνετε «νέους ΚΑΔ 2026»; Είναι το ίδιο αρχείο</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
          Πολλοί αναζητούν τους νέους κωδικούς ως «ΚΑΔ 2026», επειδή το νέο σύστημα τέθηκε σε ισχύ
          την 1η Μαρτίου 2026. Η επίσημη ονομασία είναι <strong>ΚΑΔ 2025</strong> (από την έκδοση
          NACE Rev.2.1) — πρόκειται για το ίδιο ακριβώς σύστημα κωδικών που ισχύει σήμερα και
          περιλαμβάνεται πλήρες σε αυτό το Excel. Δείτε και τη σελίδα{" "}
          <Link href="/kad-2026" style={{ color: "var(--primary)" }}>Νέοι ΚΑΔ 2026</Link> για
          τη σχετική ορολογία.
        </p>
      </div>

      {/* Online εναλλακτικές */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>⚡ Προτιμάτε online έλεγχο;</h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.85rem" }}>
          Αν θέλετε απάντηση για 1-2 κωδικούς ή να ελέγξετε ολόκληρη λίστα πελατών,
          τα online εργαλεία είναι ταχύτερα από το Excel:
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🔄 Αντιστοίχιση ενός ΚΑΔ</Link>
          <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📦 Μαζική αντιστοίχιση λίστας</Link>
          <Link href="/epaggelma" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>👥 ΚΑΔ ανά επάγγελμα</Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)" }}>
        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--warn-text)", margin: 0 }}>
          ⚠️ Το αρχείο παρέχεται για ενημερωτικούς σκοπούς και δεν υποκαθιστά τα επίσημα στοιχεία
          του Μητρώου σας. Για το ποιος ΚΑΔ έχει αποδοθεί στη δική σας επιχείρηση, ελέγξτε το{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--warn-strong)", fontWeight: 600 }}>myAADE</a>{" "}
          — προθεσμία δωρεάν διόρθωσης: <strong>30 Οκτωβρίου 2026</strong>.
        </p>
      </div>
    </div>
  );
}
