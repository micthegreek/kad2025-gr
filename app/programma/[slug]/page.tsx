import naceNotesFull from "@/lib/nace_notes_full.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import programsRaw from "@/public/data/programs_pages.json";

const DIV_INTRO: Record<string, string> = Object.fromEntries(
  Object.entries((naceNotesFull as { divisions: Record<string, { inc: string[] }> }).divisions)
    .filter(([, v]) => v.inc?.[0])
    .map(([k, v]) => [k, v.inc[0].length > 220 ? v.inc[0].slice(0, 220).trimEnd() + "…" : v.inc[0]])
);

const KLADOS_OK = new Set(["01","02","03","10","11","14","20","21","25","41","43","45","46","47","49","55","56","62","68","69","70","71","85","86","93","96","50","63","07","08","13","15","16","17","18","22","23","24","26","27","28","29","30","31","32","33","38","39","42","52","58","59","60","72","74","75","81","82","87","88","90","91","95"]);
const CLOSED_PROGRAMS = new Set(['espa-xekino-epixeirimatika', 'espa-paragoume-stin-ellada']);

interface ProgSample { c: string; d: string }
interface ProgSection { s: string; name: string; count: number; samples: ProgSample[] }
interface Program { slug: string; key: string; label: string; emoji: string; family: string; total: number; sectionsCount: number; sections: ProgSection[] }

const PROGRAMS = programsRaw as Program[];
const BY_SLUG = new Map(PROGRAMS.map((p) => [p.slug, p]));

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = BY_SLUG.get(slug);
  if (!p) return { title: "Δεν βρέθηκε", robots: { index: false, follow: false } };
  const title = `Επιλέξιμοι ΚΑΔ — ${p.label} (${p.total.toLocaleString("el-GR")} κωδικοί)${CLOSED_PROGRAMS.has(slug) ? " — Ο Κύκλος Ολοκληρώθηκε" : ""}`;
  const description = `Ποιοι ΚΑΔ 2025 είναι επιλέξιμοι στο πρόγραμμα «${p.label}»: ${p.total.toLocaleString("el-GR")} κωδικοί σε ${p.sectionsCount} τομείς δραστηριότητας, με ανάλυση ανά κλάδο και άμεσο έλεγχο του δικού σας ΚΑΔ.`;
  return { title, description, alternates: { canonical: `https://www.kad2025.gr/programma/${slug}` } };
}

export default async function ProgrammaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = BY_SLUG.get(slug);
  if (!p) notFound();
  const prog = p!;
  const url = `https://www.kad2025.gr/programma/${slug}`;
  const top3 = prog.sections.slice(0, 3);

  const faqItems = [
    {
      q: `Πόσοι ΚΑΔ είναι επιλέξιμοι στο πρόγραμμα «${prog.label}»;`,
      a: `${prog.total.toLocaleString("el-GR")} κωδικοί ΚΑΔ 2025, κατανεμημένοι σε ${prog.sectionsCount} τομείς δραστηριότητας. Οι μεγαλύτερες συγκεντρώσεις: ${top3.map((s) => `${s.name} (${s.count})`).join(", ")}.`,
    },
    {
      q: "Αν ο ΚΑΔ μου είναι στη λίστα, σημαίνει ότι δικαιούμαι την επιδότηση;",
      a: "Όχι απαραίτητα. Η επιλεξιμότητα ΚΑΔ είναι αναγκαία αλλά όχι επαρκής προϋπόθεση: κάθε προκήρυξη ορίζει επιπλέον κριτήρια (μέγεθος επιχείρησης, γεωγραφία, ύψος επένδυσης, χρόνος λειτουργίας κ.ά.). Επιβεβαιώστε πάντα στο επίσημο κείμενο της πρόσκλησης ή με σύμβουλο.",
    },
    {
      q: "Ο ΚΑΔ μου άλλαξε με τη μετάβαση του 2026 — ποιον κοιτάζω;",
      a: "Τις λίστες επιλεξιμότητας με τους νέους ΚΑΔ 2025. Αν γνωρίζετε μόνο τον παλιό σας κωδικό, βρείτε πρώτα τον νέο στο εργαλείο αντιστοίχισης και ελέγξτε εκείνον — η αξιολόγηση γίνεται με βάση το τρέχον Μητρώο.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `Επιλέξιμοι ΚΑΔ — ${prog.label}`,
        inLanguage: "el-GR",
        dateModified: "2026-06-11",
        isPartOf: { "@id": "https://www.kad2025.gr/#website" },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "Προγράμματα", item: "https://www.kad2025.gr/programma" },
          { "@type": "ListItem", position: 3, name: prog.label, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Τομείς με επιλέξιμους ΚΑΔ — ${prog.label}`,
        itemListElement: top3.map((s, i) => ({
          "@type": "ListItem", position: i + 1,
          name: `${s.name} — ${s.count} επιλέξιμοι ΚΑΔ`,
          url: KLADOS_OK.has(s.s) ? `https://www.kad2025.gr/klados/${s.s}` : `https://www.kad2025.gr/programma/${prog.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/programma" style={{ color: "var(--primary)", textDecoration: "none" }}>Προγράμματα</Link>
        {" → "}
        <span>{prog.label}</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.35rem, 3vw, 1.9rem)" }}>
        {prog.emoji} Επιλέξιμοι ΚΑΔ για το «{prog.label}»
      </h1>
      {CLOSED_PROGRAMS.has(slug) && (
        <div style={{ background: "var(--warn-bg, #fff8e6)", border: "1px solid var(--warn-border, #e6c200)", borderRadius: "8px", padding: "0.75rem 1rem", margin: "0.75rem 0 1rem", fontSize: "0.92rem" }}>
          ⏸ <strong>Οι υποβολές του προγράμματος έχουν ολοκληρωθεί.</strong> Η λίστα επιλέξιμων ΚΑΔ παραμένει ως οδηγός για επόμενους κύκλους και αντίστοιχα προγράμματα επιδοτήσεων.
        </div>
      )}
      {slug.startsWith("tdm-") && (
        <p style={{ fontSize: "0.88rem", margin: "0.5rem 0 1rem" }}>
          📰 <Link href="/blog/nees-proskliseis-tdm-esdim-epileximoi-kad" style={{ fontWeight: 700 }}>Νέο: Η πλήρης ανάλυση των 4 δράσεων ΤΔΜ και του προφίλ επιλεξιμότητας →</Link>
        </p>
      )}
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
        {prog.family} · Ενημέρωση λιστών: 11 Ιουνίου 2026 · Κωδικοποίηση: ΚΑΔ 2025 (NACE Rev.2.1)
      </p>

      <div className="tldr">
        <strong style={{ color: "var(--primary)" }}>Σύντομη απάντηση:</strong>{" "}
        Στο πρόγραμμα είναι επιλέξιμοι <strong>{prog.total.toLocaleString("el-GR")} ΚΑΔ 2025</strong> σε{" "}
        {prog.sectionsCount} τομείς. Οι μεγαλύτερες συγκεντρώσεις: {top3.map((s) => s.name).join(", ")}.
        Παρακάτω η ανάλυση ανά τομέα με ενδεικτικούς κωδικούς — και άμεσος έλεγχος του δικού σας.
      </div>

      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.6rem", marginBottom: "1.5rem" }}>
        {[
          { v: prog.total.toLocaleString("el-GR"), l: "επιλέξιμοι ΚΑΔ 2025" },
          { v: String(prog.sectionsCount), l: "τομείς δραστηριότητας" },
          { v: top3[0]?.name ?? "—", l: `κορυφαίος τομέας (${top3[0]?.count ?? 0})` },
        ].map((x) => (
          <div key={x.l} className="card" style={{ padding: "0.75rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)" }}>{x.v}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* Έλεγχος CTA */}
      <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "5px solid var(--accent)" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>⚡ Ελέγξτε τον δικό σας ΚΑΔ σε 10 δευτερόλεπτα</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          Πληκτρολογήστε τον κωδικό σας (νέο ή παλιό) και δείτε σε ποια από τα ενεργά προγράμματα
          περιλαμβάνεται — μαζί με την αντιστοίχιση 2008 → 2025.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/kad-epidotisi-espa" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
            💶 Έλεγχος επιλεξιμότητας ΚΑΔ
          </Link>
          <Link href="/antistoixisi" className="btn btn-ghost" style={{ fontSize: "0.9rem" }}>🔄 Πρώτα η αντιστοίχιση</Link>
        </div>
      </div>

      {/* Ανά τομέα */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.05rem", marginBottom: "0.85rem" }}>📂 Επιλέξιμοι ΚΑΔ ανά τομέα δραστηριότητας</h2>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "0.85rem" }}>
          Ανοίξτε τον τομέα σας για ενδεικτικούς επιλέξιμους κωδικούς. Κάθε κωδικός οδηγεί στη
          σελίδα του με την πλήρη αντιστοίχιση και τα προγράμματα που τον αφορούν.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {prog.sections.map((sec) => (
            <details key={sec.s} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.5rem 0.85rem" }}>
              <summary style={{ cursor: "pointer", fontSize: "0.88rem", fontWeight: 700 }}>
                Τομέας {sec.s} — {sec.name}: <span style={{ color: "var(--primary)" }}>{sec.count} επιλέξιμοι ΚΑΔ</span>
              </summary>
              {DIV_INTRO[sec.s] && (
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0.4rem 0 0.5rem", lineHeight: 1.55 }}>
                  {DIV_INTRO[sec.s]} <span style={{ fontSize: "0.68rem" }}>(Πηγή: Σημειώσεις NACE 2.1, ΕΛΣΤΑΤ)</span>
                </p>
              )}
              <div style={{ padding: "0.75rem 0 0.35rem", display: "flex", gap: "0.45rem", flexWrap: "wrap", alignItems: "center" }}>
                {sec.samples.map((sm) => (
                  <Link key={sm.c} href={`/kad/${sm.c}`} style={{ textDecoration: "none" }} title={sm.d}>
                    <span className="chip" style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.78rem" }}>{sm.c}</span>
                  </Link>
                ))}
                {KLADOS_OK.has(sec.s) ? <Link key="kl" href={`/klados/${sec.s}`} style={{ fontSize: "0.78rem", color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
                  Όλος ο κλάδος {sec.s} →
                </Link> : null}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((f, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{f.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--warn-text)", margin: 0 }}>
          ⚠️ Οι λίστες αποτυπώνουν τις δημοσιευμένες προσκλήσεις όπως τις παρακολουθεί το kad2025.gr
          και ενημερώνονται με κάθε τροποποίηση. Η τελική επιλεξιμότητα κρίνεται από το επίσημο
          κείμενο κάθε προκήρυξης — η σελίδα δεν αποτελεί συμβουλή επένδυσης ή υπαγωγής.
        </p>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Συνεχίστε</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {PROGRAMS.filter((x) => x.slug !== slug).map((x) => (
            <Link key={x.slug} href={`/programma/${x.slug}`} style={{ textDecoration: "none" }}>
              <span className="chip">{x.emoji} {x.label.length > 38 ? x.label.slice(0, 36) + "…" : x.label}</span>
            </Link>
          ))}
          <Link href="/epaggelma" style={{ textDecoration: "none" }}>
            <span className="chip">👥 ΚΑΔ ανά επάγγελμα</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
