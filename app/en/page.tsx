import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greek Activity Codes (KAD) 2026: Mapping Tool",
  description:
    "Free English guide to Greece's new business activity codes (KAD 2025, NACE Rev.2.1): look up any of the 10,923 official 2008→2025 mappings, check the October 30, 2026 correction deadline, and download the full Excel table.",
  alternates: {
    canonical: "https://www.kad2025.gr/en",
    languages: { el: "https://www.kad2025.gr/", en: "https://www.kad2025.gr/en", "x-default": "https://www.kad2025.gr/" },
  },
};

const faq = [
  { q: "What is a KAD code?", a: "KAD (Κωδικός Αριθμός Δραστηριότητας) is Greece's official business activity classification, the national extension of the EU's NACE system. Every Greek company and freelancer is registered under one primary and optional secondary KAD codes in the AADE tax registry." },
  { q: "What changed in 2026?", a: "On March 1, 2026 Greece adopted KAD 2025, based on NACE Rev.2.1 (AADE decisions A.1003/2026 and A.1004/2026). 66.3% of the 10,923 mapping entries received a new code number; the tax authority migrated all registrations automatically on March 9, 2026." },
  { q: "Is there a deadline?", a: "Yes. Businesses can review and correct their automatically assigned codes free of charge until October 30, 2026 (decision A.1113/2026), via the myAADE portal." },
  { q: "Can I use this site in English?", a: "The interactive tools display official Greek code descriptions, but the search works with plain code numbers — type any old 8-digit KAD into the mapping tool to see its 2025 equivalent instantly. The full table is also available as a free Excel download." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.kad2025.gr/en",
      url: "https://www.kad2025.gr/en",
      name: "Greek Activity Codes (KAD) 2026 — English Guide",
      inLanguage: "en",
      dateModified: "2026-06-11",
      isPartOf: { "@id": "https://www.kad2025.gr/#website" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function EnglishPage() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/" />

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        Greek Activity Codes (KAD) 2026: The 2008 → 2025 Transition, Explained
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
        For international accountants, lawyers and companies operating in Greece · Updated June 11, 2026
      </p>

      <div className="tldr">
        <strong style={{ color: "var(--primary)" }}>In short:</strong> Greece replaced its business
        activity classification on <strong>March 1, 2026</strong>. Two thirds of all codes changed
        number. Registrations were migrated automatically, and corrections are free until{" "}
        <strong>October 30, 2026</strong>. This site hosts the complete official mapping —
        searchable, downloadable, and free.
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Key facts</h2>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.92rem" }}>
          <li><strong>10,923</strong> official mapping entries (AADE decision A.1004/2026)</li>
          <li><strong>66.3%</strong> of entries map to a new code number — including the entire IT (62), construction-of-buildings (41) and furniture (31) divisions</li>
          <li>Retail (47) was restructured almost entirely; the single e-commerce code 47.91 was abolished and redistributed by product</li>
          <li>Largest split: one 2008 code maps to <strong>52</strong> new codes · largest merge: <strong>96</strong> old codes into one</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Tools (work with plain code numbers)</h2>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>🔄 Map an old code → 2025</Link>
          <Link href="/kad-2025-excel" className="btn btn-ghost" style={{ fontSize: "0.88rem" }}>📥 Free Excel (full table)</Link>
          <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.88rem" }}>📦 Bulk mapping (paste a list)</Link>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Tip: paste the 8-digit code without dots (e.g. 62010000). Descriptions are shown in
          Greek, as published by the tax authority.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faq.map((f, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{f.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
        Sources: AADE decisions A.1003/2026, A.1004/2026 and A.1113/2026. This page is informational
        and not legal or tax advice. Ελληνική έκδοση: <Link href="/" style={{ color: "var(--primary)" }}>kad2025.gr</Link>
      </p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>English Guides</h2>
        <div style={{ display: "grid", gap: "0.6rem", marginTop: "0.6rem" }}>
          <Link href="/en/greek-activity-codes-guide" className="tool-card" style={{ padding: "0.8rem 1rem" }}>📘 <strong>Greek Activity Codes (KAD) Explained</strong> — the 2026 guide for foreign businesses</Link>
          <Link href="/en/start-business-greece-activity-codes" className="tool-card" style={{ padding: "0.8rem 1rem" }}>🚀 <strong>Starting a Business in Greece</strong> — choosing the right codes</Link>
          <Link href="/en/kad-tools" className="tool-card" style={{ padding: "0.8rem 1rem" }}>🛠 <strong>Free Tools Walkthrough</strong> — search, mapping & grant eligibility in English</Link>
          <Link href="/en/just-transition-fund-greece-kad" className="tool-card" style={{ padding: "0.8rem 1rem" }}>💶 <strong>Just Transition Fund (ESDIM)</strong> — 4,144 eligible codes for the 4 new actions</Link>
          <Link href="/en/faq" className="tool-card" style={{ padding: "0.8rem 1rem" }}>❓ <strong>English FAQ</strong> — 10 answers on the 2026 transition</Link>
        </div>
      </section>

    </div>
  );
}
