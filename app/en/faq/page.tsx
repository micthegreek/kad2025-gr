import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greek Activity Codes (KAD) — English FAQ 2026",
  description:
    "Answers in English to the most common questions about Greek KAD activity codes: the 2025/2026 transition, the 30 October 2026 deadline, myAADE changes, grant eligibility and official NACE 2.1 definitions.",
  alternates: {
    canonical: "https://www.kad2025.gr/en/faq",
    languages: { el: "https://www.kad2025.gr/erotiseis", en: "https://www.kad2025.gr/en/faq", "x-default": "https://www.kad2025.gr/erotiseis" },
  },
};

const QA = [
  { q: "What is a KAD and who needs one?", a: "KAD is the 8-digit Greek business activity code declared to the tax authority (AADE). Every entity operating in Greece — companies, branches, freelancers, including foreign-owned ones — must declare a primary KAD and any relevant secondary codes." },
  { q: "What is the difference between KAD 2008 and KAD 2025?", a: "KAD 2025 is the new list implementing NACE Rev. 2.1, replacing the 2008 codes. Roughly two-thirds of codes changed numbering or description; some merged and many split into more specific new codes." },
  { q: "When did the new codes take effect?", a: "On 1 March 2026. Businesses that made no manual change were automatically re-mapped by AADE on 9 March 2026." },
  { q: "Is there a deadline I should worry about?", a: "Yes: corrections to the automatic mapping can be filed via myAADE until 30 October 2026. If the automatic mapping picked a code that does not describe your real activity — common where old codes were split — you should correct it before then." },
  { q: "How do I check what my new code actually covers?", a: "Every code page on kad2025.gr shows the official NACE Rev. 2.1 Explanatory Notes (ELSTAT edition): what the class includes, also includes and explicitly excludes, with links to the correct alternative codes." },
  { q: "Can I search the tools without speaking Greek?", a: "Yes — search by the 8-digit number (dots optional). The 4-digit class level is identical to EU-wide NACE, so you can research the concept in English and verify the Greek national code here. See the English tools walkthrough for details." },
  { q: "Do activity codes affect subsidy eligibility?", a: "Directly. Each Greek programme (Development Law regimes, Just Transition Fund/ESDIM actions, ESPA calls) publishes its own list of eligible KAD codes. The eligibility checker shows instantly which of the 9 tracked programmes list your code." },
  { q: "What are the Just Transition Fund (ESDIM) actions?", a: "Four active 2026 actions funding investment plans of SMEs and large enterprises in Greece's ESDIM transition regions (Regulation EU 2021/1056), with a common eligibility list of 4,144 KAD codes focused on manufacturing, health and IT — retail and primary agriculture are excluded." },
  { q: "How do I add or change a code?", a: "Through the myAADE portal (Registry → Change). The filing itself is quick; the substantive decision is choosing the right code, which this site helps you verify against the official definitions before you file." },
  { q: "Is kad2025.gr an official government site?", a: "No. It is an independent reference tool built on official public data (AADE mapping tables, ELSTAT NACE 2.1 explanatory notes), always with source attribution. For binding decisions consult your accountant or the tax authority." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: QA.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }} lang="en">
      <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/erotiseis" />
      <link rel="alternate" hrefLang="en" href="https://www.kad2025.gr/en/faq" />
      <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/erotiseis" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        <Link href="/en">🇬🇧 English Hub</Link> · FAQ · Updated July 2026
      </p>
      <h1>Greek Activity Codes (KAD): English FAQ</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Ten answers covering what foreign founders, investors and their advisors ask most about the Greek
        KAD system and the 2026 transition.
      </p>

      {QA.map((f, i) => (
        <details key={i} style={{ margin: "0.5rem 0", padding: "0.55rem 0.85rem", border: "1px solid var(--border)", borderRadius: 8 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
          <p style={{ margin: "0.5rem 0 0" }}>{f.a}</p>
        </details>
      ))}

      <p style={{ marginTop: "1.25rem" }}>
        Deeper reading: <Link href="/en/greek-activity-codes-guide">KAD explained →</Link> ·{" "}
        <Link href="/en/start-business-greece-activity-codes">Starting a business in Greece →</Link> ·{" "}
        <Link href="/en/kad-tools">Tools walkthrough →</Link>
      </p>
    </article>
  );
}
