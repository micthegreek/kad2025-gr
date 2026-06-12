import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Δωρεάν Widget Ελέγχου ΚΑΔ για το Site σας | kad2025.gr",
  description:
    "Προσθέστε δωρεάν widget ελέγχου ΚΑΔ 2008 → 2025 στο site του λογιστικού σας γραφείου: ένα copy-paste snippet, χωρίς cookies, χωρίς συντήρηση. Επίσημα δεδομένα ΑΑΔΕ.",
  alternates: { canonical: "https://www.kad2025.gr/widget" },
};

const SNIPPET = `<!-- Widget Ελέγχου ΚΑΔ — kad2025.gr -->
<div id="kad2025-widget"></div>
<script src="https://www.kad2025.gr/widget/kad-widget.js" async></script>`;

const faqItems = [
  {
    q: "Είναι πραγματικά δωρεάν το widget;",
    a: "Ναι, εντελώς δωρεάν — χωρίς εγγραφή, κλειδιά API ή όρια χρήσης. Το μόνο που ζητάμε είναι να διατηρείτε τη διακριτική αναφορά «Δωρεάν από kad2025.gr» στο κάτω μέρος του.",
  },
  {
    q: "Συλλέγει δεδομένα των επισκεπτών μου;",
    a: "Όχι. Το widget δεν χρησιμοποιεί cookies, δεν στέλνει δεδομένα σε τρίτους και δεν παρακολουθεί τους επισκέπτες σας. Όταν ο χρήστης πατήσει «Έλεγχος», ανοίγει απλώς το kad2025.gr σε νέα καρτέλα με τον κωδικό που πληκτρολόγησε.",
  },
  {
    q: "Θα επιβαρύνει την ταχύτητα του site μου;",
    a: "Πρακτικά όχι: είναι ένα αρχείο ~3 KB που φορτώνει ασύγχρονα (async), χωρίς εξωτερικές βιβλιοθήκες, fonts ή CSS. Δεν μπλοκάρει το rendering της σελίδας σας.",
  },
  {
    q: "Πώς ενημερώνεται όταν αλλάξουν τα δεδομένα;",
    a: "Το widget οδηγεί στο live εργαλείο αντιστοίχισης του kad2025.gr, που ενημερώνεται με κάθε τροποποίηση των αποφάσεων ΑΑΔΕ. Δεν χρειάζεται καμία ενέργεια από εσάς — ούτε καν αλλαγή του snippet.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.kad2025.gr/widget",
      url: "https://www.kad2025.gr/widget",
      name: "Δωρεάν Widget Ελέγχου ΚΑΔ",
      inLanguage: "el-GR",
      dateModified: "2026-06-10",
      isPartOf: { "@id": "https://www.kad2025.gr/#website" },
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

export default function WidgetPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Widget Ελέγχου ΚΑΔ</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        Δωρεάν Widget Ελέγχου ΚΑΔ για το Site σας
      </h1>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Έχετε λογιστικό γραφείο, συμβουλευτική ή κλαδικό site; Προσφέρετε στους επισκέπτες σας
        άμεσο έλεγχο αντιστοίχισης ΚΑΔ 2008 → 2025 με <strong>ένα snippet δύο γραμμών</strong> —
        χωρίς εγγραφή, χωρίς cookies, χωρίς συντήρηση. Ιδανικό για την περίοδο έως την προθεσμία
        της 30ής Οκτωβρίου 2026, όπου κάθε πελάτης σας θα χρειαστεί αυτόν τον έλεγχο.
      </p>

      {/* Snippet */}
      <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "5px solid var(--accent)" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>1️⃣ Αντιγράψτε τον κώδικα</h2>
        <pre style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "1rem", fontSize: "0.8rem", lineHeight: 1.6, overflowX: "auto", fontFamily: "var(--font-mono, 'JetBrains Mono'), 'Courier New', monospace", whiteSpace: "pre", margin: 0 }}>
          <code>{SNIPPET}</code>
        </pre>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Επικολλήστε το οπουδήποτε στο HTML της σελίδας σας — sidebar, footer ή μέσα σε άρθρο.
          Σε WordPress: μπλοκ «Προσαρμοσμένο HTML». Λειτουργεί σε κάθε CMS και static site.
        </p>
      </div>

      {/* Preview */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>2️⃣ Έτσι θα φαίνεται</h2>
        <div style={{ background: "var(--bg)", border: "1px dashed var(--border)", borderRadius: 8, padding: "1.25rem", display: "flex", justifyContent: "center" }}>
          {/* Static replica of the widget for preview */}
          <div style={{ background: "#ffffff", border: "1px solid #d1dae8", borderRadius: 10, padding: 16, maxWidth: 360, width: "100%", boxShadow: "0 2px 12px rgba(26,58,107,0.10)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1a3a6b", marginBottom: 4 }}>🔄 Έλεγχος ΚΑΔ 2008 → 2025</div>
            <div style={{ fontSize: 11.5, color: "#5a6a7e", marginBottom: 10, lineHeight: 1.5 }}>
              Βρείτε τον νέο ΚΑΔ 2025 — επίσημα δεδομένα ΑΑΔΕ. Προθεσμία διόρθωσης: 30/10/2026.
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ flex: 1, padding: "9px 10px", border: "1px solid #d1dae8", borderRadius: 8, fontSize: 14, color: "#8a96a8", background: "#f4f7fb" }}>π.χ. 47910000</div>
              <div style={{ padding: "9px 14px", background: "#1a3a6b", color: "#fff", borderRadius: 8, fontSize: 13.5, fontWeight: 700 }}>Έλεγχος</div>
            </div>
            <div style={{ fontSize: 10.5, color: "#8a96a8", marginTop: 10, textAlign: "right" }}>
              ⚡ <span style={{ color: "#1a3a6b", fontWeight: 600 }}>Δωρεάν από kad2025.gr</span>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Ο επισκέπτης πληκτρολογεί τον 8ψήφιο κωδικό και ανοίγει σε νέα καρτέλα η πλήρης
          αντιστοίχιση στο kad2025.gr — εναλλακτικές, περιγραφές NACE Rev.2.1 και επιλεξιμότητα
          επιδοτήσεων. Το δικό σας site παραμένει ανοιχτό.
        </p>
      </div>

      {/* Why */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>Γιατί να το προσθέσετε</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { t: "Εξυπηρετείτε πελάτες χωρίς τηλεφωνήματα", d: "Κάθε «ποιος είναι ο νέος μου ΚΑΔ;» απαντιέται από το site σας, 24/7 — ειδικά χρήσιμο όσο πλησιάζει η προθεσμία της 30/10/2026." },
            { t: "Κρατάτε τους επισκέπτες περισσότερο", d: "Ένα χρηστικό εργαλείο στη σελίδα σας είναι λόγος επιστροφής — και διαφοροποίηση από ανταγωνιστικά γραφεία." },
            { t: "Μηδενικό τεχνικό κόστος", d: "Δεν φιλοξενείτε δεδομένα, δεν ενημερώνετε τίποτα, δεν αναλαμβάνετε ευθύνη για την ακρίβεια — το εργαλείο και τα δεδομένα ζουν στο kad2025.gr." },
          ].map((x) => (
            <div key={x.t} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{x.t}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{x.d}</div>
            </div>
          ))}
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

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Θέλετε κάτι παραπάνω;</h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          Για προσαρμογές (χρώματα, γλώσσα κειμένων) ή ενσωμάτωση σε newsletter/εφαρμογή,
          στείλτε μας στο <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)" }}>info@kad2025.gr</a>.
          Δείτε επίσης το <Link href="/kad-2025-excel" style={{ color: "var(--primary)" }}>δωρεάν Excel</Link>{" "}
          με ολόκληρο τον πίνακα αντιστοίχισης για offline χρήση στο γραφείο.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/odigies-logistes" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>📖 Οδηγός για λογιστές</Link>
          <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📦 Μαζική αντιστοίχιση πελατολογίου</Link>
        </div>
      </div>
    </div>
  );
}
