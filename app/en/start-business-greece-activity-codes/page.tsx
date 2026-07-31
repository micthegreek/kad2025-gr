import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Starting a Business in Greece: Choosing KAD",
  description:
    "A practical guide for foreign founders and investors: primary vs secondary KAD codes, common codes for consulting, e-commerce, short-term rentals, IT and tourism, and how codes affect Greek subsidy eligibility.",
  alternates: {
    canonical: "https://www.kad2025.gr/en/start-business-greece-activity-codes",
    languages: {
      el: "https://www.kad2025.gr/enarxi-epixeirisis-kad",
      en: "https://www.kad2025.gr/en/start-business-greece-activity-codes",
      "x-default": "https://www.kad2025.gr/enarxi-epixeirisis-kad",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Starting a Business in Greece: How to Choose Your Activity Codes (KAD) in 2026",
  inLanguage: "en",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "kad2025.gr" },
  mainEntityOfPage: "https://www.kad2025.gr/en/start-business-greece-activity-codes",
};

const COMMON = [
  { act: "Management & business consulting", code: "70.20", note: "Covers strategy, organisational and management advisory — the standard choice for foreign consultants." },
  { act: "E-commerce (online retail)", code: "47.9x", note: "Online retail falls under distance-sales retail classes, specialised by product type; brick-and-mortar retail uses different classes." },
  { act: "Short-term rental (Airbnb-style)", code: "55.20", note: "Furnished tourist accommodation; long-term property letting belongs to real-estate classes (68.xx) instead." },
  { act: "Software development (custom)", code: "62.10", note: "Bespoke development and programming services. Off-the-shelf software you publish and sell falls under publishing (58.2x)." },
  { act: "IT consulting", code: "62.20", note: "Advisory on hardware, software and systems — distinct from hands-on development." },
  { act: "Holding / own-asset management", code: "64.20 / 68.20", note: "Depends on whether the entity holds participations or lets its own real estate — a classic setup question for foreign investors." },
];

export default function Page() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }} lang="en">
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/enarxi-epixeirisis-kad" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en/start-business-greece-activity-codes" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/enarxi-epixeirisis-kad" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        <Link href="/en">🇬🇧 English Hub</Link> · Guide · Updated July 2026
      </p>
      <h1>Starting a Business in Greece: How to Choose Your Activity Codes (KAD)</h1>

      <p>
        When you register a company or freelance activity in Greece, the registration itself is largely
        paperwork — but the <strong>activity codes you declare</strong> shape everything that follows: VAT
        treatment, whether you can issue the invoices your clients need, and your eligibility for Greek and EU
        grant programmes. Here is how to get them right the first time.
      </p>

      <h2>Primary vs secondary codes</h2>
      <p>
        You declare <strong>one primary KAD</strong> — the activity expected to generate most of your revenue —
        and as many <strong>secondary codes</strong> as you genuinely need. Secondary codes cost nothing to add
        and can be added later via myAADE, so the practical rule is: start with the codes you will invoice
        under in the first year, and extend when a new revenue stream actually appears. What you should{" "}
        <em>not</em> do is operate and invoice under an activity you never declared.
      </p>

      <h2>Common codes for foreign-owned businesses</h2>
      <div style={{ display: "grid", gap: "0.5rem", margin: "0.75rem 0 1rem" }}>
        {COMMON.map((c) => (
          <div key={c.code} style={{ padding: "0.7rem 0.9rem", border: "1px solid var(--border)", borderRadius: 10 }}>
            <strong>{c.act}</strong> — NACE class <code>{c.code}</code>
            <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{c.note}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Classes above are 4-digit NACE level; your Greek declaration uses the 8-digit national code beneath
        them. On each code page of this site you can read the official “includes / excludes” notes before
        committing.
      </p>

      <h2>Codes and subsidy eligibility</h2>
      <p>
        Greek grant programmes (Development Law regimes, Just Transition Fund actions, ESPA calls) each define
        their own list of eligible KAD codes. An eligible code is a <em>necessary but not sufficient</em>{" "}
        condition — but an ineligible primary code disqualifies you outright, which is why investors
        increasingly choose their code structure with future programmes in mind. Every code page here shows the
        programmes it is currently eligible for.
      </p>

      <h2>Practical workflow</h2>
      <p>
        (1) Shortlist candidate codes with the <Link href="/kad-2025">KAD 2025 search</Link> (Greek interface —
        numeric codes work language-free). (2) Open each code page and check the official includes/excludes
        section. (3) Check the eligibility badges if grants matter to you. (4) Give the final list to your Greek
        accountant for the myAADE filing. Corrections to the 2026 automatic re-mapping remain possible until{" "}
        <strong>30 October 2026</strong>.
      </p>

      <p style={{ marginTop: "1.25rem" }}>
        See also: <Link href="/en/greek-activity-codes-guide">KAD explained →</Link> ·{" "}
        <Link href="/en/kad-tools">Tools walkthrough →</Link> · <Link href="/en/faq">English FAQ →</Link>
      </p>
    </article>
  );
}
