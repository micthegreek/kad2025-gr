import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Προθεσμία ΚΑΔ 2025 | Αλλαγή έως 1/6/26",
  description:
    "Όλες οι σημαντικές ημερομηνίες για τους ΚΑΔ 2025. Πότε έγινε η αυτόματη αντιστοίχιση, μέχρι πότε μπορείτε να διορθώσετε χωρίς πρόστιμο.",
  alternates: { canonical: "https://www.kad2025.gr/prothesmia-kad-2025" },
};

const TIMELINE = [
  { date: "1 Μαρτίου 2026", label: "Έναρξη ισχύος ΚΑΔ 2025", desc: "Από αυτή την ημερομηνία ισχύουν επίσημα οι νέοι ΚΑΔ 2025 σε όλη την Ελλάδα.", status: "done", icon: "✅" },
  { date: "9 Μαρτίου 2026", label: "Αυτόματη αντιστοίχιση ΑΑΔΕ", desc: "Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση ΚΑΔ για ~1,9 εκατ. επιχειρήσεις.", status: "done", icon: "✅" },
  { date: "1 Ιουνίου 2026", label: "Λήξη περιόδου διόρθωσης", desc: "Τελευταία ημέρα για να διορθώσετε λανθασμένη αντιστοίχιση χωρίς πρόστιμο.", status: "urgent", icon: "⏰" },
  { date: "Μετά 1/6/2026", label: "Κανονική λειτουργία", desc: "Ισχύουν κυρώσεις για αδήλωτες ή λανθασμένες δραστηριότητες.", status: "future", icon: "📋" },
];

const FAQS = [
  { q: "Τι γίνεται αν δεν κάνω τίποτα έως 1/6/2026;", a: "Αν η αυτόματη αντιστοίχιση της ΑΑΔΕ είναι σωστή, δεν χρειάζεται να κάνετε τίποτα. Αν όμως ο νέος ΚΑΔ δεν περιγράφει σωστά τη δραστηριότητά σας, πρέπει να διορθώσετε έως 1/6/2026 για να αποφύγετε κυρώσεις." },
  { q: "Ισχύει η προθεσμία για νέες επιχειρήσεις που ξεκινούν τώρα;", a: "Οι νέες επιχειρήσεις που κάνουν έναρξη μετά την 1/3/2026 δηλώνουν απευθείας τον νέο ΚΑΔ 2025 — δεν αφορά τους παλιούς ΚΑΔ 2008." },
  { q: "Ποια είναι η συνέπεια αν αλλάξω ΚΑΔ μετά την 1/6/2026;", a: "Μπορείτε να αλλάξετε ΚΑΔ και μετά την προθεσμία, αλλά ενδέχεται να επιβληθούν κυρώσεις για το διάστημα που ο ΚΑΔ ήταν λανθασμένος." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Οδηγοί", item: "https://www.kad2025.gr/odigoi" },
        { "@type": "ListItem", position: 3, name: "Προθεσμία ΚΑΔ 2025", item: "https://www.kad2025.gr/prothesmia-kad-2025" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function ProthesmiaPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>{" → "}
        <Link href="/odigoi" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>{" → "}
        <span>Προθεσμία ΚΑΔ 2025</span>
      </nav>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
        ⏰ Κρίσιμη προθεσμία: <strong>1 Ιουνίου 2026</strong> — μετά ισχύουν κυρώσεις
      </div>

      <h1 style={{ marginBottom: "0.5rem" }}>Προθεσμία ΚΑΔ 2025 — Πότε Πρέπει να Ενεργήσετε</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Η μετάβαση στους νέους ΚΑΔ 2025 έγινε αυτόματα από την ΑΑΔΕ. Έχετε χρόνο έως
        <strong> 1 Ιουνίου 2026</strong> να ελέγξετε αν η αντιστοίχιση είναι σωστή και να διορθώσετε αν χρειάζεται.
      </p>

      {/* Timeline */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>Χρονολόγιο</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {TIMELINE.map((t) => (
            <div key={t.date} className="card" style={{
              display: "flex", gap: "1rem", alignItems: "flex-start",
              borderLeft: `4px solid ${t.status === "done" ? "var(--success)" : t.status === "urgent" ? "#f59e0b" : "var(--border)"}`,
              opacity: t.status === "future" ? 0.7 : 1,
            }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{t.icon}</span>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: t.status === "urgent" ? "#b45309" : "var(--text-muted)", marginBottom: "0.15rem" }}>{t.date}</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{t.label}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.35rem" }}>❓ {f.q}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Ελέγξτε τον ΚΑΔ σας τώρα</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/antistoixisi", label: "🔄 Αντιστοίχιση ΚΑΔ 2008→2025" },
            { href: "/pos-allazw-kad", label: "✏️ Πώς αλλάζω ΚΑΔ" },
            { href: "/lathos-antistoixisi", label: "⚠️ Λάθος αντιστοίχιση — τι κάνω" },
            { href: "/odigies-logistes", label: "📋 Οδηγός για λογιστές" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
