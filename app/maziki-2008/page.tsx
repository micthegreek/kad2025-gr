import type { Metadata } from "next";
import Link from "next/link";
import { getKadData } from "@/lib/kadData";
import MazikiTool2008 from "@/components/tools/MazikiTool2008";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  title: "Μαζική Αντιστοίχιση ΚΑΔ 2008 → 2025",
  description:
    "Μαζική αντιστοίχιση ΚΑΔ — έως 500 παλιοί ΚΑΔ 2008 σε νέους ΚΑΔ 2025 (ΚΑΔ 2026 ΑΑΔΕ). Εξαγωγή Excel & CSV. Λίστα καδ για λογιστές. ΑΑΔΕ Α.1003/2026.",
  keywords: ["αντιστοίχιση καδ", "καδ 2025 excel", "καδ 2026 excel", "λίστα καδ", "μαζική αντιστοίχιση καδ"],
  alternates: { canonical: "https://www.kad2025.gr/maziki-2008" },
  openGraph: {
    title: "Μαζική Αντιστοίχιση ΚΑΔ 2008 → 2025 | Για Λογιστές",
    description: "Αντιστοιχίστε έως 500 ΚΑΔ ταυτόχρονα. Εξαγωγή Excel & CSV.",
  },
};

const USE_CASES = [
  { icon: "📊", title: "Λογιστές", desc: "Ελέγξτε ταυτόχρονα τους ΚΑΔ όλων των πελατών σας σε ένα βήμα" },
  { icon: "🏢", title: "Επιχειρήσεις", desc: "Επαληθεύστε τους ΚΑΔ όλων των υποκαταστημάτων και δραστηριοτήτων" },
  { icon: "💼", title: "Σύμβουλοι", desc: "Παράγετε reports αντιστοίχισης για πελάτες σε Excel & CSV" },
];

const STEPS = [
  "Επικολλήστε τους παλιούς ΚΑΔ 2008 — έναν ανά γραμμή, μέχρι 500",
  "Πατήστε «Εκτέλεση» — η αντιστοίχιση γίνεται αμέσως χωρίς αναμονή",
  "Κατεβάστε τα αποτελέσματα σε Excel ή CSV με αναφορά πηγής kad2025.gr",
];

export default function Maziki2008Page() {
  const data = getKadData();
  const sampleChanged = data.filter((r) => r.kad2008 !== r.kad2025).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
      { "@type": "ListItem", position: 2, name: "Αντιστοίχιση", item: "https://www.kad2025.gr/antistoixisi" },
      { "@type": "ListItem", position: 3, name: "Μαζική ΚΑΔ 2008 → 2025", item: "https://www.kad2025.gr/maziki-2008" },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="maziki_2008" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/antistoixisi" style={{ color: "var(--primary)", textDecoration: "none" }}>Αντιστοίχιση</Link>
        {" → "}
        <span>Μαζική ΚΑΔ 2008 → 2025</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>📦 Μαζική Αντιστοίχιση ΚΑΔ 2008 → 2025</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Επικολλήστε λίστα παλιών ΚΑΔ 2008 (έναν ανά γραμμή) και λάβετε ομαδικά
        την αντιστοίχιση με τους νέους ΚΑΔ 2025. Εξαγωγή σε <strong>Excel & CSV</strong>.
        Δείτε επίσης: <Link href="/maziki-2025" style={{ color: "var(--primary)" }}>Μαζική ΚΑΔ 2025 → 2008</Link> ·{" "}
        <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>μεμονωμένη αντιστοίχιση</Link>.
      </p>

      {/* ===== TOOL FIRST ===== */}
      <MazikiTool2008 />

      {/* Content after tool */}
      <section style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Για ποιους είναι;</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
          {USE_CASES.map((u) => (
            <div key={u.title} className="card" style={{ padding: "0.875rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{u.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{u.title}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{u.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Πώς λειτουργεί;</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {STEPS.map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--primary)", color: "white", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0, marginTop: 2 }}>
                {i + 1}
              </div>
              <span style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Παράδειγμα ΚΑΔ για δοκιμή</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {sampleChanged.map((r) => (
            <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.55rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8, fontSize: "0.85rem", flexWrap: "wrap" }}>
                <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.78rem", flexShrink: 0 }}>{r.kad2008}</span>
                <span style={{ flex: 1, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.8rem" }}>
                  {r.desc2008.slice(0, 50)}{r.desc2008.length > 50 ? "..." : ""}
                </span>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.78rem", flexShrink: 0 }}>→ {r.kad2025}</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/klados" style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            📂 Δείτε ΚΑΔ ανά κλάδο →
          </Link>
        </div>
      </section>

      {/* Editorial content for AdSense quality */}
      <section className="card" style={{ marginBottom: "1.5rem", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι η Μαζική Αντιστοίχιση ΚΑΔ και πότε χρειάζεται</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η μαζική αντιστοίχιση ΚΑΔ είναι η διαδικασία εύρεσης των νέων ΚΑΔ 2025 για πολλαπλούς
          παλιούς κωδικούς ΚΑΔ 2008 ταυτόχρονα. Αντί να αναζητάτε κάθε κωδικό ξεχωριστά, μπορείτε
          να επεξεργαστείτε δεκάδες ή εκατοντάδες ΚΑΔ σε μία μόνο λειτουργία.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Απευθύνεται κυρίως σε <strong>λογιστές και φοροτεχνικούς</strong> που χειρίζονται πολλούς
          πελάτες, σε <strong>επιχειρήσεις</strong> με πολλαπλούς ΚΑΔ και δευτερεύουσες δραστηριότητες,
          και σε <strong>συμβούλους επιχειρήσεων</strong> που ετοιμάζουν reports αντιστοίχισης.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Το αποτέλεσμα εξάγεται σε <strong>Excel ή CSV</strong> με όλες τις πληροφορίες αντιστοίχισης
          (παλιός ΚΑΔ 2008, νέος ΚΑΔ 2025, περιγραφή, κατάσταση αλλαγής) έτοιμο για αρχειοθέτηση
          ή αποστολή σε πελάτη.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Οδηγίες Χρήσης — Βήμα προς Βήμα</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2.2 }}>
          <li><strong>Συγκεντρώστε τους ΚΑΔ 2008</strong> — Εξάγετε λίστα ΚΑΔ από το λογιστικό σας πρόγραμμα ή το myAADE</li>
          <li><strong>Επικολλήστε</strong> τους κωδικούς στο παραπάνω πεδίο (έναν ανά γραμμή, μέχρι 500)</li>
          <li><strong>Πατήστε Εκτέλεση</strong> — η αντιστοίχιση γίνεται αμέσως χωρίς αναμονή</li>
          <li><strong>Ελέγξτε τα αποτελέσματα</strong> — ιδιαίτερη προσοχή σε ΚΑΔ με πολλαπλές εναλλακτικές</li>
          <li><strong>Εξάγετε σε Excel ή CSV</strong> — αρχείο έτοιμο με αναφορά πηγής kad2025.gr & ΑΑΔΕ</li>
        </ol>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις για Μαζική Αντιστοίχιση</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            { q: "Πόσους ΚΑΔ μπορώ να επεξεργαστώ ταυτόχρονα;", a: "Έως 500 ΚΑΔ ανά εκτέλεση. Αν έχετε περισσότερους, χωρίστε τους σε ομάδες των 500." },
            { q: "Τι γίνεται με ΚΑΔ που δεν βρίσκονται;", a: "Εμφανίζονται στο αποτέλεσμα ως 'Δεν βρέθηκε' — ελέγξτε αν έχετε πληκτρολογήσει σωστά τον κωδικό." },
            { q: "Τι γίνεται με ΚΑΔ που έχουν πολλαπλές αντιστοιχίσεις;", a: "Εμφανίζονται όλες οι εναλλακτικές. Ο λογιστής πρέπει να επιλέξει χειροκίνητα τον σωστό για κάθε πελάτη." },
            { q: "Είναι δωρεάν η μαζική αντιστοίχιση;", a: "Ναι, το εργαλείο είναι εντελώς δωρεάν. Η εξαγωγή σε Excel και CSV είναι επίσης δωρεάν." },
          ].map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f", marginBottom: "1rem" }}>
        ⚠️ <strong>Αποποίηση:</strong> Το kad2025.gr είναι ανεξάρτητο εργαλείο — δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
        Για οριστικές ενέργειες επαληθεύστε στο{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
