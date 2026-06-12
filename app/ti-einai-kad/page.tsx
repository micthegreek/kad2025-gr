import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Τι είναι ΚΑΔ | Πλήρης Εξήγηση",
  description:
    "Τι είναι ο ΚΑΔ, πού χρησιμοποιείται, πώς τον βρίσκετε, πόσους μπορείτε να έχετε και ποια η διαφορά ΚΑΔ 2008 και ΚΑΔ 2025.",
  alternates: { canonical: "https://www.kad2025.gr/ti-einai-kad" },
};

const FAQS = [
  { q: "Τι είναι ο ΚΑΔ;", a: "Ο ΚΑΔ (Κωδικός Αριθμός Δραστηριότητας) είναι ένας 8ψήφιος αριθμός που κατατάσσει κάθε επαγγελματική δραστηριότητα σε κατηγορίες. Χρησιμοποιείται από την εφορία, ασφαλιστικούς φορείς και τράπεζες για να προσδιορίσουν τι κάνει μια επιχείρηση." },
  { q: "Πού χρησιμοποιείται ο ΚΑΔ;", a: "Ο ΚΑΔ χρησιμοποιείται στη φορολογική δήλωση, στη δήλωση έναρξης και διακοπής εργασιών, σε επιδοτήσεις ΕΣΠΑ, σε τραπεζικές συναλλαγές και στις ασφαλιστικές εισφορές." },
  { q: "Πόσους ΚΑΔ μπορώ να έχω;", a: "Μπορείτε να έχετε έναν κύριο ΚΑΔ (η βασική δραστηριότητά σας) και απεριόριστους δευτερεύοντες. Ο κύριος ΚΑΔ επηρεάζει τη φορολόγηση και τις ασφαλιστικές εισφορές." },
  { q: "Ποια η διαφορά ΚΑΔ 2008 και ΚΑΔ 2025;", a: "Οι ΚΑΔ 2008 ίσχυαν έως 28 Φεβρουαρίου 2026. Από 1η Μαρτίου 2026 ισχύουν οι νέοι ΚΑΔ 2025 που βασίζονται στην ευρωπαϊκή ταξινόμηση NACE Rev.2.1. Η ΑΑΔΕ αντιστοίχησε αυτόματα τους παλιούς ΚΑΔ στους νέους." },
  { q: "Πώς βρίσκω τον ΚΑΔ μου;", a: "Στο myAADE → Στοιχεία Επιχείρησης. Για νέες επιχειρήσεις, χρησιμοποιήστε το εργαλείο αναζήτησης ΚΑΔ." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Οδηγοί", item: "https://www.kad2025.gr/odigoi" },
        { "@type": "ListItem", position: 3, name: "Τι είναι ΚΑΔ", item: "https://www.kad2025.gr/ti-einai-kad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function TiEinaiKadPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>{" → "}
        <Link href="/odigoi" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>{" → "}
        <span>Τι είναι ΚΑΔ</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Τι είναι ΚΑΔ — Κωδικός Αριθμός Δραστηριότητας</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Ο <strong>ΚΑΔ (Κωδικός Αριθμός Δραστηριότητας)</strong> είναι ο αριθμός που προσδιορίζει
        επίσημα τι κάνει μια επιχείρηση. Κάθε επαγγελματική δραστηριότητα αντιστοιχεί σε έναν
        μοναδικό 8ψήφιο κωδικό.
      </p>

      {/* What is KAD */}
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Η βασική έννοια</h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
          Φανταστείτε τον ΚΑΔ ως τη <strong>«ταυτότητα δραστηριότητας»</strong> της επιχείρησής σας.
          Όταν κάνετε έναρξη στην εφορία, δηλώνετε τον ΚΑΔ που περιγράφει τι πουλάτε ή τι υπηρεσίες παρέχετε.
          Για παράδειγμα, ένα εστιατόριο έχει ΚΑΔ <strong>56101000</strong>, ένα κομμωτήριο <strong>96021000</strong>.
        </p>
      </section>

      {/* Structure */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Πώς είναι δομημένος ο ΚΑΔ</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            { digits: "2 ψηφία", example: "56", desc: "Τομέας (π.χ. Εστίαση)" },
            { digits: "4 ψηφία", example: "5610", desc: "Κλάδος (π.χ. Εστιατόρια)" },
            { digits: "6 ψηφία", example: "561010", desc: "Ομάδα" },
            { digits: "8 ψηφία", example: "56101000", desc: "Πλήρης ΚΑΔ (μοναδικός)" },
          ].map((s) => (
            <div key={s.digits} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "monospace", fontSize: "1.3rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>{s.example}</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.15rem" }}>{s.digits}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.35rem" }}>❓ {f.q}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Χρήσιμα Εργαλεία</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/enarxi-epixeirisis-kad", label: "🚀 ΚΑΔ για Έναρξη Επιχείρησης" },
            { href: "/kad-ana-epaggelma", label: "💼 ΚΑΔ ανά Επάγγελμα" },
            { href: "/antistoixisi", label: "🔄 Αντιστοίχιση ΚΑΔ 2008→2025" },
            { href: "/pos-allazw-kad", label: "✏️ Πώς Αλλάζω ΚΑΔ" },
            { href: "/prothesmia-kad-2025", label: "⏰ Προθεσμία ΚΑΔ 2025" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
