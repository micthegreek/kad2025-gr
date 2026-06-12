import type { Metadata } from "next";
import Link from "next/link";
import professionsRaw from "@/public/data/professions.json";

interface ProfCode { c: string; d08: string; n: string; d25: string; ch: boolean; idx: boolean }
interface Profession { slug: string; name: string; emoji: string; intro: string; codes: ProfCode[] }
const PROFESSIONS = professionsRaw as Profession[];

export const metadata: Metadata = {
  title: "ΚΑΔ ανά Επάγγελμα (2026) | Κωδικοί για 43 Επαγγέλματα",
  description:
    "Βρείτε τους σωστούς ΚΑΔ 2025 για το επάγγελμά σας: λογιστής, ηλεκτρολόγος, e-shop, Airbnb, εστίαση, γυμναστήριο και 35+ ακόμη επαγγέλματα με την επίσημη αντιστοίχιση ΑΑΔΕ.",
  alternates: { canonical: "https://www.kad2025.gr/epaggelma" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.kad2025.gr/epaggelma",
      url: "https://www.kad2025.gr/epaggelma",
      name: "ΚΑΔ ανά Επάγγελμα",
      inLanguage: "el-GR",
      dateModified: "2026-06-10",
      isPartOf: { "@id": "https://www.kad2025.gr/#website" },
    },
    {
      "@type": "ItemList",
      name: "Επαγγέλματα με κωδικούς ΚΑΔ 2025",
      itemListElement: PROFESSIONS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `https://www.kad2025.gr/epaggelma/${p.slug}`,
      })),
    },
  ],
};

export default function EpaggelmaIndexPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>ΚΑΔ ανά Επάγγελμα</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        ΚΑΔ ανά Επάγγελμα: Βρείτε τους Κωδικούς σας για το 2026
      </h1>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Επιλέξτε το επάγγελμά σας και δείτε τους βασικούς κωδικούς ΚΑΔ που το αφορούν,
        ποιοι άλλαξαν με τη μετάβαση στους ΚΑΔ 2025 (NACE Rev.2.1), και αν είναι επιλέξιμοι
        για ενεργά προγράμματα επιδότησης. Όλες οι αντιστοιχίσεις βασίζονται στις επίσημες
        αποφάσεις ΑΑΔΕ Α.1003/2026 και Α.1004/2026.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "0.75rem", marginBottom: "1.5rem" }}>
        {PROFESSIONS.map((p) => {
          const changed = p.codes.filter((c) => c.ch).length;
          return (
            <Link key={p.slug} href={`/epaggelma/${p.slug}`} className="tool-card" style={{ padding: "0.85rem 1rem" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>
                {p.emoji} {p.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                {p.codes.length} κωδικοί · {changed > 0 ? `${changed} άλλαξαν` : "χωρίς αλλαγές"}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Δεν βρίσκετε το επάγγελμά σας;</h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          Χρησιμοποιήστε την αναζήτηση με λέξεις-κλειδιά, τον AI βοηθό που προτείνει κωδικούς
          από την περιγραφή της δραστηριότητάς σας, ή τον οδηγό βήμα-βήμα.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>🔍 Αναζήτηση ΚΑΔ</Link>
          <Link href="/ai-suggester" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✨ AI εύρεση ΚΑΔ</Link>
          <Link href="/wizard" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🧭 Οδηγός βήμα-βήμα</Link>
          <Link href="/kad-ana-epaggelma" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📂 Κατηγορίες δραστηριοτήτων</Link>
        </div>
      </div>
    </div>
  );
}
