import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Just Transition Fund Greece: Eligible KAD 2026",
  description:
    "Four active Greek Just Transition Fund actions (Reg. EU 2021/1056) support investment plans of SMEs and large enterprises in ESDIM transition regions. Full list of the 4,144 eligible KAD activity codes, sector profile, and how to check yours.",
  alternates: {
    canonical: "https://www.kad2025.gr/en/just-transition-fund-greece-kad",
    languages: {
      el: "https://www.kad2025.gr/blog/nees-proskliseis-tdm-esdim-epileximoi-kad",
      en: "https://www.kad2025.gr/en/just-transition-fund-greece-kad",
      "x-default": "https://www.kad2025.gr/blog/nees-proskliseis-tdm-esdim-epileximoi-kad",
    },
  },
};

const faq = [
  { q: "What is the Just Transition Fund (ESDIM) in Greece?", a: "An EU fund (Regulation 2021/1056) financing investment in Greek regions affected by de-lignitisation and the transition to a climate-neutral economy. In 2026 four actions are open: existing SMEs, new & under-formation SMEs, existing large enterprises, and new & under-formation large enterprises." },
  { q: "Which activity codes are eligible?", a: "Annexes XIV and XVIII of the calls define a common list corresponding to 4,144 eight-digit KAD 2025 codes, with a strong productive focus: food manufacturing (319 codes), metal products (162), health services (150), IT (30). Retail trade and primary agriculture are excluded." },
  { q: "Is an eligible code enough to receive funding?", a: "No — it is a necessary but not sufficient condition. Each action sets additional criteria: implementation region, enterprise size, budget thresholds and evaluation scoring. Verify your code first, then review the full call terms with your advisor." },
  { q: "How do I check a specific code in English?", a: "Enter the 8-digit code in the eligibility checker (numeric input, language-independent). If eligible, the four ESDIM action badges appear instantly, alongside any other of the nine tracked Greek programmes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Just Transition Fund Greece (ESDIM) 2026: Eligible Activity Codes for the 4 New Actions", inLanguage: "en", datePublished: "2026-07-05", dateModified: "2026-07-05", author: { "@type": "Organization", name: "kad2025.gr" }, mainEntityOfPage: "https://www.kad2025.gr/en/just-transition-fund-greece-kad" },
    { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Page() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }} lang="en">
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/blog/nees-proskliseis-tdm-esdim-epileximoi-kad" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en/just-transition-fund-greece-kad" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/blog/nees-proskliseis-tdm-esdim-epileximoi-kad" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        <Link href="/en">🇬🇧 English Hub</Link> · Funding · Updated July 2026
      </p>
      <h1>Just Transition Fund Greece (ESDIM): Eligible Activity Codes for the 4 New 2026 Actions</h1>

      <p>
        Greece has opened <strong>four Just Transition Fund actions</strong> (Reg. EU 2021/1056) financing
        investment plans in the mainland ESDIM transition regions — two for SMEs (existing / new &
        under-formation) and two for large enterprises. For foreign investors evaluating Greek production,
        health or technology projects, the first gating question is always the same:{" "}
        <strong>is the activity code eligible?</strong> This site processed the official Annexes XIV & XVIII
        and answers it per code.
      </p>

      <h2>The eligibility profile at a glance</h2>
      <p>
        The list — <strong>common to all four actions, 4,144 eight-digit KAD 2025 codes across 53
        sectors</strong> — has a clear productive orientation: food & beverage manufacturing (319 codes),
        fabricated metal products (162), human health services (150), information technology (30), plus broad
        coverage of machinery, plastics, chemicals and selected tourism. Retail trade and primary agricultural
        production are excluded. Each of the four action pages lists the eligible codes sector-by-sector with
        official NACE 2.1 sector descriptions:
      </p>
      <div style={{ display: "grid", gap: "0.5rem", margin: "0.75rem 0 1rem" }}>
        <Link href="/programma/tdm-esdim-mme-yfistamenes" className="tool-card" style={{ padding: "0.7rem 1rem" }}>🌱 <strong>Existing SMEs</strong> — eligible codes by sector</Link>
        <Link href="/programma/tdm-esdim-mme-nees-ypo-systasi" className="tool-card" style={{ padding: "0.7rem 1rem" }}>🌿 <strong>New & under-formation SMEs</strong></Link>
        <Link href="/programma/tdm-esdim-megales-yfistamenes" className="tool-card" style={{ padding: "0.7rem 1rem" }}>⚡ <strong>Existing large enterprises</strong></Link>
        <Link href="/programma/tdm-esdim-megales-nees-ypo-systasi" className="tool-card" style={{ padding: "0.7rem 1rem" }}>🔋 <strong>New & under-formation large enterprises</strong></Link>
      </div>

      <h2>Check a code in 10 seconds — no Greek required</h2>
      <p>
        Open the <Link href="/kad-epidotisi-espa">eligibility checker</Link> and type the 8-digit code (dots
        optional). Eligible codes light up all four ESDIM badges plus any other of the nine tracked Greek
        programmes. Remember: code eligibility is <em>necessary but not sufficient</em> — location within the
        ESDIM regions, size criteria and scoring apply per the official call texts.
      </p>

      <h2>FAQ</h2>
      {faq.map((f, i) => (
        <details key={i} style={{ margin: "0.5rem 0", padding: "0.5rem 0.8rem", border: "1px solid var(--border)", borderRadius: 8 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
          <p style={{ margin: "0.5rem 0 0" }}>{f.a}</p>
        </details>
      ))}

      <p style={{ marginTop: "1.25rem" }}>
        Related: <Link href="/en/start-business-greece-activity-codes">Starting a business in Greece →</Link> ·{" "}
        <Link href="/en/greek-activity-codes-guide">KAD explained →</Link> · <Link href="/en/faq">English FAQ →</Link>
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "1rem" }}>
        Eligibility source: Annexes XIV & XVIII of the ESDIM/JTF calls. For binding terms consult the official
        call documents.
      </p>
    </article>
  );
}
