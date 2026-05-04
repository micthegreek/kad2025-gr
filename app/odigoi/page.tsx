import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Οδηγοί ΚΑΔ 2025 | Πλήρης Ενημέρωση",
  description:
    "Πλήρης ενημέρωση για τους ΚΑΔ 2025: τι είναι ΚΑΔ, πώς αλλάζετε ΚΑΔ, προθεσμίες, οδηγοί για λογιστές, αλλαγές ανά κλάδο και πολλά ακόμα.",
  alternates: { canonical: "https://www.kad2025.gr/odigoi" },
};

const SECTIONS = [
  {
    title: "🆕 Για Νέους Επιχειρηματίες",
    color: "#059669",
    links: [
      { href: "/enarxi-epixeirisis-kad", label: "ΚΑΔ για Έναρξη Επιχείρησης", desc: "Βρείτε τον σωστό ΚΑΔ για νέα επιχείρηση" },
      { href: "/kad-ana-epaggelma", label: "ΚΑΔ ανά Επάγγελμα", desc: "Λίστα με τους πιο συχνούς ΚΑΔ ανά επαγγελματικό τομέα" },
      { href: "/ti-einai-kad", label: "Τι είναι ΚΑΔ;", desc: "Πλήρης εξήγηση — τι είναι, πού χρησιμοποιείται, πώς λειτουργεί" },
    ],
  },
  {
    title: "🔄 Για Υπάρχουσες Επιχειρήσεις",
    color: "#7c3aed",
    links: [
      { href: "/pos-allazw-kad", label: "Πώς Αλλάζω ΚΑΔ;", desc: "Βήμα-βήμα οδηγός αλλαγής ΚΑΔ μέσω myAADE" },
      { href: "/prothesmia-kad-2025", label: "Προθεσμία ΚΑΔ 2025", desc: "Όλες οι ημερομηνίες και τι ισχύει πότε" },
      { href: "/lathos-antistoixisi", label: "Λάθος Αντιστοίχιση ΚΑΔ;", desc: "Τι κάνετε αν η ΑΑΔΕ αντιστοίχησε λάθος" },
      { href: "/den-xreiazetai-allagi", label: "Πότε ΔΕΝ χρειάζεται Αλλαγή", desc: "3.683 ΚΑΔ παρέμειναν αμετάβλητοι" },
    ],
  },
  {
    title: "📋 Για Λογιστές",
    color: "#1e40af",
    links: [
      { href: "/odigies-logistes", label: "Οδηγός για Λογιστές", desc: "Μαζική αντιστοίχιση πελατών, checklist, FAQ" },
      { href: "/maziki-2008", label: "Μαζική Αντιστοίχιση 2008→2025", desc: "Έως 500 ΚΑΔ ταυτόχρονα, εξαγωγή Excel/CSV" },
      { href: "/maziki-2025", label: "Μαζική Αντιστοίχιση 2025→2008", desc: "Εύρεση παλιών ΚΑΔ από νέους" },
    ],
  },
  {
    title: "📖 Γενική Ενημέρωση",
    color: "#b45309",
    links: [
      { href: "/blog", label: "Πλήρης Οδηγός Αλλαγών ΚΑΔ 2025", desc: "Όλα όσα πρέπει να ξέρετε για τη μετάβαση" },
      { href: "/statistika", label: "Στατιστικά Αντιστοίχισης", desc: "Ανάλυση αλλαγών ανά κλάδο" },
      { href: "/klados", label: "ΚΑΔ ανά Κλάδο", desc: "Πλήρης κατάλογος 26 κλάδων δραστηριότητας" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
    { "@type": "ListItem", position: 2, name: "Οδηγοί & Πληροφορίες", item: "https://www.kad2025.gr/odigoi" },
  ],
};

export default function OdigoiPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Οδηγοί & Πληροφορίες</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Οδηγοί & Πληροφορίες ΚΑΔ 2025</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
        Πλήρης ενημέρωση για τους ΚΑΔ 2025 — για νέους επιχειρηματίες, υπάρχουσες επιχειρήσεις και λογιστές.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem", borderLeft: `4px solid ${section.color}`, paddingLeft: "0.75rem" }}>
              {section.title}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
              {section.links.map((l) => (
                <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ borderTop: `3px solid ${section.color}`, height: "100%" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem", color: "var(--text)" }}>{l.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
