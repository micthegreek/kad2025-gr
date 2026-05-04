import type { Metadata } from "next";
import Link from "next/link";
import { getKadData, getSsgCodes, getSafeKadUrl } from "@/lib/kadData";
import KadSearch from "@/components/KadSearch";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "ΚΑΔ 2025 — Λίστα & Αναζήτηση Κωδικών",
  description:
    "Λίστα & αναζήτηση νέων ΚΑΔ 2025 (νέοι ΚΑΔ 2026 ΑΑΔΕ). 9.422 κωδικοί σε ισχύ από 1/3/2026 βάσει NACE Rev.2.1. Βρείτε οποιοδήποτε κωδικό με αριθμό ή λέξη.",
  keywords: ["καδ 2025", "καδ 2026", "νέοι καδ 2025", "νέοι καδ 2026", "λίστα καδ", "ευρετήριο καδ", "καδ 2025 ααδε", "καδ 2026 ααδε", "καδ 2025 excel", "καδ 2026 excel"],
  alternates: { canonical: "https://www.kad2025.gr/kad-2025" },
  openGraph: {
    title: "Νέοι ΚΑΔ 2025 — Αναζήτηση Κωδικών από 1/3/2026",
    description: "9.422 νέοι ΚΑΔ 2025 σε ισχύ από 1 Μαρτίου 2026. Instant αναζήτηση.",
  },
};

const SECTION_NAMES: Record<string, { name: string; icon: string }> = {
  "01": { name: "Γεωργία & Κτηνοτροφία", icon: "🌾" },
  "10": { name: "Τρόφιμα & Ποτά", icon: "🍞" },
  "41": { name: "Κατασκευές", icon: "🏗️" },
  "46": { name: "Χονδρικό Εμπόριο", icon: "📦" },
  "47": { name: "Λιανικό Εμπόριο", icon: "🛒" },
  "49": { name: "Μεταφορές", icon: "🚛" },
  "55": { name: "Ξενοδοχεία & Τουρισμός", icon: "🏨" },
  "56": { name: "Εστίαση", icon: "🍽️" },
  "62": { name: "Πληροφορική & IT", icon: "💻" },
  "68": { name: "Ακίνητη Περιουσία", icon: "🏠" },
  "69": { name: "Λογιστικά & Νομικά", icon: "⚖️" },
  "85": { name: "Εκπαίδευση", icon: "📚" },
  "86": { name: "Υγεία", icon: "🏥" },
};

export default async function Kad2025Page({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const data = getKadData();
  const ssg = getSsgCodes();
  const unique2025Map = new Map<string, typeof data[0]>();
  data.forEach((r) => { if (!unique2025Map.has(r.kad2025)) unique2025Map.set(r.kad2025, r); });
  const unique2025 = Array.from(unique2025Map.values());
  const totalUnique = unique2025.length;

  // v60b: Only include records that link to SSG-safe pages (avoids 404s)
  const sectionCounts: Record<string, { count: number; sample: typeof data }> = {};
  unique2025.forEach((r) => {
    const prefix = r.kad2025.padStart(8, "0").slice(0, 2);
    if (SECTION_NAMES[prefix]) {
      if (!sectionCounts[prefix]) sectionCounts[prefix] = { count: 0, sample: [] };
      sectionCounts[prefix].count++;
      // Only sample records whose kad2008 OR kad2025 is in SSG
      if (sectionCounts[prefix].sample.length < 2 && (ssg.has(r.kad2008) || ssg.has(r.kad2025))) {
        sectionCounts[prefix].sample.push(r);
      }
    }
  });

  // v60b: Filter newSample to only records linkable to SSG pages
  const newSample = unique2025
    .filter((r) => r.kad2008 !== r.kad2025 && (ssg.has(r.kad2008) || ssg.has(r.kad2025)))
    .slice(0, 24);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
      { "@type": "ListItem", position: 2, name: "ΚΑΔ 2025", item: "https://www.kad2025.gr/kad-2025" },
    ],
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>ΚΑΔ 2025</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.8rem" }}>ΚΑΔ 2025</span>
        <span style={{ color: "var(--success)", fontSize: "0.875rem", fontWeight: 600 }}>✅ Σε ισχύ από 1/3/2026</span>
      </div>
      <h1 style={{ marginBottom: "0.5rem" }}>Αναζήτηση Νέων ΚΑΔ 2025</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Βάση <strong>{totalUnique.toLocaleString("el-GR")} μοναδικών ΚΑΔ 2025</strong> που ισχύουν από 1η Μαρτίου 2026.
        Για να βρείτε τον παλιό ΚΑΔ 2008 που αντιστοιχεί:{" "}
        <Link href="/antistoixisi-2025" style={{ color: "var(--primary)" }}>Αντιστοίχιση ΚΑΔ 2025 → 2008</Link>.
      </p>

      {/* ===== SEARCH FIRST ===== */}
      <section style={{ marginBottom: "3rem" }}>
        <KadSearch mode="kad2025" initialData={data} initialQuery={params?.q || ""} />
      </section>

      {/* Stats per section */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Νέοι ΚΑΔ 2025 ανά Κλάδο</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.6rem" }}>
          {Object.entries(SECTION_NAMES).map(([prefix, { name, icon }]) => {
            const sec = sectionCounts[prefix];
            if (!sec) return null;
            return (
              <Link key={prefix} href={`/klados`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "0.75rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.2rem" }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.2rem" }}>{name}</div>
                  <div style={{ color: "var(--primary)", fontWeight: 800 }}>{sec.count.toLocaleString("el-GR")}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>κωδικοί</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sample */}
      <section>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Δείγμα Νέων ΚΑΔ 2025</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0.5rem" }}>
          {newSample.map((r) => {
            const safeUrl = getSafeKadUrl(r) || `/kad-2025?q=${r.kad2025}`;
            return (
              <Link key={r.kad2025} href={safeUrl} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.55rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--success)", borderRadius: 8, fontSize: "0.82rem" }}>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", flexShrink: 0 }}>{r.kad2025}</span>
                  <span style={{ color: "var(--text-muted)", lineHeight: 1.4, fontSize: "0.8rem" }}>
                    {r.desc2025.slice(0, 45)}{r.desc2025.length > 45 ? "..." : ""}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
