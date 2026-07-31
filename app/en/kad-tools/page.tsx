import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greek KAD Tools: Search, Mapping & Eligibility",
  description:
    "How to use kad2025.gr's free tools as a non-Greek speaker: code search, old-to-new mapping, bulk conversion, grant eligibility checker and the official NACE 2.1 explanatory notes.",
  alternates: {
    canonical: "https://www.kad2025.gr/en/kad-tools",
    languages: { el: "https://www.kad2025.gr/", en: "https://www.kad2025.gr/en/kad-tools", "x-default": "https://www.kad2025.gr/" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Greek KAD Tools: Search, Mapping & Grant Eligibility — English Walkthrough",
  inLanguage: "en",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "kad2025.gr" },
  mainEntityOfPage: "https://www.kad2025.gr/en/kad-tools",
};

const TOOLS = [
  { name: "KAD 2025 search", href: "/kad-2025", how: "Type an 8-digit code (dots optional) or a Greek keyword. Numeric search is fully language-independent. Each result carries an expandable panel with the official includes/excludes notes." },
  { name: "Old → new mapping (2008 → 2025)", href: "/antistoixisi", how: "Enter your old 2008 code to see the new 2025 code(s) it maps to — including splits, where one old code maps to several new ones and you must pick the best fit." },
  { name: "Bulk mapping", href: "/maziki-2008", how: "Paste a whole list of old codes (e.g. an accountant's client portfolio) and get the full mapping table at once, with export." },
  { name: "Grant eligibility checker", href: "/kad-epidotisi-espa", how: "Enter a 2025 code and instantly see which of the 9 tracked Greek subsidy programmes/actions list it as eligible — including the four active Just Transition Fund (ESDIM) actions." },
  { name: "Code pages", href: "/kad-2025", how: "Every code has a dedicated page: mapping history, official NACE 2.1 includes/excludes with cross-links, programme eligibility badges, and FAQ." },
];

export default function Page() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }} lang="en">
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en/kad-tools" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        <Link href="/en">🇬🇧 English Hub</Link> · Walkthrough · Updated July 2026
      </p>
      <h1>Free KAD Tools — An English Walkthrough</h1>

      <p>
        The tools on kad2025.gr have a Greek interface (they serve 30,000+ Greek businesses monthly), but they
        are perfectly usable without Greek: <strong>codes are numbers</strong>, results are structured, and this
        page tells you exactly what each screen does. Everything is free, with no registration.
      </p>

      <div style={{ display: "grid", gap: "0.6rem", margin: "1rem 0" }}>
        {TOOLS.map((t) => (
          <div key={t.href + t.name} style={{ padding: "0.8rem 1rem", border: "1px solid var(--border)", borderRadius: 10 }}>
            <Link href={t.href} style={{ fontWeight: 700 }}>
              {t.name} →
            </Link>
            <p style={{ margin: "0.3rem 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>{t.how}</p>
          </div>
        ))}
      </div>

      <h2>Two tips for non-Greek speakers</h2>
      <p>
        <strong>(1) Work with numbers.</strong> Search by 8-digit code whenever possible — numeric input
        bypasses the language entirely, and the 4-digit class level matches EU-wide NACE, so you can research in
        English on Eurostat and verify the Greek national code here. <strong>(2) Use the official notes.</strong>{" "}
        On every code page, the "Τι περιλαμβάνει" (What it includes) section is the official ELSTAT text — your
        accountant can confirm the final choice, but you arrive at the meeting already knowing the answer.
      </p>

      <p style={{ marginTop: "1.25rem" }}>
        See also: <Link href="/en/greek-activity-codes-guide">KAD explained →</Link> ·{" "}
        <Link href="/en/start-business-greece-activity-codes">Starting a business in Greece →</Link> ·{" "}
        <Link href="/en/faq">English FAQ →</Link>
      </p>
    </article>
  );
}
