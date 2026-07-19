import type { Metadata } from "next";
import Link from "next/link";
import programsRaw from "@/public/data/programs_pages.json";

interface Program { slug: string; label: string; emoji: string; family: string; total: number; sectionsCount: number }
const PROGRAMS = programsRaw as Program[];
const CLOSED_PROGRAMS = new Set(['espa-xekino-epixeirimatika', 'espa-paragoume-stin-ellada']);
const ACTIVE = PROGRAMS.filter((p) => !CLOSED_PROGRAMS.has(p.slug));
const OLDER = PROGRAMS.filter((p) => CLOSED_PROGRAMS.has(p.slug));

export const metadata: Metadata = {
  title: "Επιλέξιμοι ΚΑΔ ανά Πρόγραμμα Επιδότησης (ΕΣΠΑ & Αναπτυξιακός)",
  description:
    "Επιλέξιμοι ΚΑΔ 2025 ανά πρόγραμμα επιδότησης: τα ενεργά καθεστώτα του Αναπτυξιακού Νόμου με ανάλυση ανά τομέα, συν τις λίστες των ολοκληρωμένων ΕΣΠΑ (Ξεκινώ Επιχειρηματικά, Παράγουμε στην Ελλάδα) ως οδηγό για επόμενους κύκλους.",
  alternates: { canonical: "https://www.kad2025.gr/programma" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.kad2025.gr/programma",
  url: "https://www.kad2025.gr/programma",
  name: "Επιλέξιμοι ΚΑΔ ανά Πρόγραμμα",
  inLanguage: "el-GR",
  dateModified: "2026-06-11",
  isPartOf: { "@id": "https://www.kad2025.gr/#website" },
};

export default function ProgrammaIndexPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList", name: "Προγράμματα Επιδότησης — Επιλέξιμοι ΚΑΔ",
        itemListElement: PROGRAMS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.label, url: "https://www.kad2025.gr/programma/" + p.slug })) }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Προγράμματα</span>
      </nav>
      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        Επιλέξιμοι ΚΑΔ ανά Πρόγραμμα Επιδότησης
      </h1>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Κάθε προκήρυξη ΕΣΠΑ και κάθε καθεστώς του Αναπτυξιακού Νόμου ορίζει κλειστή λίστα
        επιλέξιμων ΚΑΔ 2025. Επιλέξτε πρόγραμμα για να δείτε πόσοι και ποιοι κωδικοί
        περιλαμβάνονται, με ανάλυση ανά τομέα δραστηριότητας — ή ελέγξτε απευθείας τον δικό σας. <Link href="/blog/nees-proskliseis-tdm-esdim-epileximoi-kad" style={{ fontWeight: 700 }}>📰 Νέο: Οι 4 δράσεις Δίκαιης Μετάβασης →</Link>
      </p>

      <h2 style={{ margin: "1.5rem 0 0.75rem" }}>🟢 Ενεργά Προγράμματα</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
        {ACTIVE.map((p) => (
          <Link key={p.slug} href={"/programma/" + p.slug} className="tool-card" style={{ padding: "1rem 1.15rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>{p.emoji} {p.label}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{p.family}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--primary)" }}>{p.total.toLocaleString("el-GR")}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>ΚΑΔ σε {p.sectionsCount} τομείς</div>
              </div>
            </div>
          </Link>
        ))}
        </div>
        <h2 style={{ margin: "2rem 0 0.75rem" }}>🗂 Παλαιότερα Προγράμματα — Οι Υποβολές Ολοκληρώθηκαν</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>Οι κύκλοι υποβολών έχουν κλείσει. Οι λίστες επιλέξιμων ΚΑΔ παραμένουν διαθέσιμες ως οδηγός για επόμενους κύκλους και αντίστοιχα προγράμματα.</p>
        <div className="tools-grid">
        {OLDER.map((p) => (
          <Link key={p.slug} href={"/programma/" + p.slug} className="tool-card" style={{ padding: "1rem 1.15rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>{p.emoji} {p.label}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{p.family}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--primary)" }}>{p.total.toLocaleString("el-GR")}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>ΚΑΔ σε {p.sectionsCount} τομείς</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Δεν ξέρετε από πού να ξεκινήσετε;</h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          Βάλτε τον ΚΑΔ σας στο εργαλείο ελέγχου και δείτε με μία κίνηση σε ποια από τα
          παραπάνω προγράμματα είναι επιλέξιμος.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/kad-epidotisi-espa" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>💶 Έλεγχος του ΚΑΔ μου</Link>
          <Link href="/epaggelma" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>👥 ΚΑΔ ανά επάγγελμα</Link>
        </div>
      </div>
    </div>
  );
}
