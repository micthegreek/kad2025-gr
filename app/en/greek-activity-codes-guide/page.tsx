import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greek Activity Codes (KAD) Explained — The 2026 Guide for Foreign Businesses",
  description:
    "What are Greek KAD activity codes, how the 2025/2026 NACE 2.1 transition works, the 30 October 2026 correction deadline, and how to find the right code for your business in Greece.",
  alternates: {
    canonical: "https://www.kad2025.gr/en/greek-activity-codes-guide",
    languages: {
      el: "https://www.kad2025.gr/ti-einai-kad",
      en: "https://www.kad2025.gr/en/greek-activity-codes-guide",
      "x-default": "https://www.kad2025.gr/ti-einai-kad",
    },
  },
};

const faq = [
  { q: "What is a KAD code?", a: "KAD (Κωδικός Αριθμός Δραστηριότητας) is the 8-digit Greek activity code every business must declare to the tax authority (AADE). It is the national extension of the EU NACE classification: the first four digits follow NACE Rev. 2.1, while the last four provide Greek national detail." },
  { q: "What changed in 2025/2026?", a: "Greece replaced the KAD 2008 list with KAD 2025, based on NACE Rev. 2.1 (AADE decisions A.1003/2026 and A.1004/2026). The new codes apply from 1 March 2026; businesses that took no action were automatically re-mapped on 9 March 2026, and corrections can be filed until 30 October 2026 via myAADE." },
  { q: "Do I need a Greek accountant to change my KAD?", a: "The change itself is a simple online filing in myAADE, but choosing the correct code has tax and grant-eligibility consequences. Most foreign-owned businesses handle it through their Greek accountant; this site helps you verify the mapping and the official scope of each code beforehand." },
  { q: "Where do the official 'includes / excludes' descriptions come from?", a: "From the official Greek edition of the NACE Rev. 2.1 Explanatory Notes published by ELSTAT (the Hellenic Statistical Authority), which kad2025.gr integrates on every code page with source attribution." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Greek Activity Codes (KAD) Explained — The 2026 Guide for Foreign Businesses", inLanguage: "en", datePublished: "2026-07-05", dateModified: "2026-07-05", author: { "@type": "Organization", name: "kad2025.gr" }, mainEntityOfPage: "https://www.kad2025.gr/en/greek-activity-codes-guide" },
    { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Page() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }} lang="en">
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/ti-einai-kad" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en/greek-activity-codes-guide" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/ti-einai-kad" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        <Link href="/en">🇬🇧 English Hub</Link> · Guide · Updated July 2026
      </p>
      <h1>Greek Activity Codes (KAD) Explained: The 2026 Guide for Foreign Businesses</h1>

      <p>
        Every business operating in Greece — including foreign-owned companies, branches and freelancers — must
        declare one or more <strong>KAD activity codes</strong> to the Greek tax authority (AADE). Your KAD
        determines tax treatment, invoicing rules, and critically, <strong>eligibility for Greek and EU
        subsidy programmes</strong>. In 2026 the entire classification changed, and getting the mapping right
        matters more than ever.
      </p>

      <h2>How the system works</h2>
      <p>
        A KAD is an 8-digit code (e.g. <code>62.10.11.01</code>). The first four digits follow the EU-wide{" "}
        <strong>NACE Rev. 2.1</strong> classification, so your Greek code is directly comparable to activity
        codes across the EU; the last four digits add Greek national detail. A business declares one{" "}
        <em>primary</em> code (its main activity) and any number of <em>secondary</em> codes — adding a
        secondary code is free, while operating under a wrong or missing code can block grant applications and
        cause issues in tax audits.
      </p>

      <h2>The 2025/2026 transition — what you must know</h2>
      <p>
        Greece replaced the 2008 code list with <strong>KAD 2025</strong>, implementing NACE Rev. 2.1 (AADE
        decisions A.1003/2026, A.1004/2026). Key dates: the new codes apply from <strong>1 March 2026</strong>;
        businesses that took no action were <strong>automatically re-mapped on 9 March 2026</strong>; and
        corrections to the automatic mapping can be filed via myAADE until{" "}
        <strong>30 October 2026</strong>. About two-thirds of all codes changed number or description, and many
        were split — meaning the automatic mapping may not reflect your actual activity. Verifying it takes two
        minutes with the <Link href="/antistoixisi">mapping tool</Link> (interface in Greek; enter your old
        8-digit code).
      </p>

      <h2>Official scope: what each code really includes</h2>
      <p>
        The title of a code rarely tells the whole story. kad2025.gr integrates the official{" "}
        <strong>NACE Rev. 2.1 Explanatory Notes</strong> (ELSTAT edition) on every code page: what the class
        includes, what it also covers, and what it explicitly excludes — with cross-references to the correct
        alternative code. If you are unsure whether your planned activity fits a code, this section answers it
        with the official text rather than guesswork.
      </p>

      <h2>Quick FAQ</h2>
      {faq.map((f, i) => (
        <details key={i} style={{ margin: "0.5rem 0", padding: "0.5rem 0.8rem", border: "1px solid var(--border)", borderRadius: 8 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
          <p style={{ margin: "0.5rem 0 0" }}>{f.a}</p>
        </details>
      ))}

      <p style={{ marginTop: "1.25rem" }}>
        Next: <Link href="/en/start-business-greece-activity-codes">Choosing codes when starting a business in Greece →</Link>{" "}
        · <Link href="/en/kad-tools">Free tools walkthrough →</Link> · <Link href="/en/faq">Full English FAQ →</Link>
      </p>
    </article>
  );
}
