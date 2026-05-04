import type { Metadata } from "next";
import Link from "next/link";
import { getKadData } from "@/lib/kadData";
import KadSearch from "@/components/KadSearch";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "ΚΑΔ 2008 — Αναζήτηση & Αντιστοίχιση",
  description:
    "Αναζήτηση ΚΑΔ 2008 με κωδικό ή λέξη. Δείτε τον νέο ΚΑΔ 2025 αμέσως. 9.717 κωδικοί, εξαγωγή Excel. Δεδομένα ΑΑΔΕ.",
  keywords: ["καδ 2008", "αντιστοίχιση καδ", "καδ 2025", "καδ 2026 ααδε", "λίστα καδ"],
  alternates: { canonical: "https://www.kad2025.gr/kad-2008" },
  openGraph: {
    title: "Αναζήτηση ΚΑΔ 2008 — Παλιοί Κωδικοί Δραστηριότητας",
    description: "9.717 ΚΑΔ 2008 με αντιστοίχιση στους νέους ΚΑΔ 2025. Instant αναζήτηση.",
  },
};

const SECTION_NAMES: Record<string, string> = {
  "01": "Γεωργία & Κτηνοτροφία", "03": "Αλιεία", "10": "Τρόφιμα",
  "14": "Ένδυση", "20": "Χημικά", "25": "Μεταλλικά",
  "41": "Κατασκευές", "43": "Εξειδικευμένες Κατασκευές",
  "45": "Εμπόριο Οχημάτων", "46": "Χονδρικό Εμπόριο", "47": "Λιανικό Εμπόριο",
  "49": "Μεταφορές", "55": "Ξενοδοχεία", "56": "Εστίαση",
  "62": "Πληροφορική", "68": "Ακίνητα", "69": "Λογιστικά & Νομικά",
  "85": "Εκπαίδευση", "86": "Υγεία", "93": "Αθλητισμός", "96": "Άλλες Υπηρεσίες",
};

export default async function Kad2008Page({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const data = getKadData();
  const totalUnique = new Set(data.map((r) => r.kad2008)).size;

  const sections: Record<string, { count: number; changed: number; sample: typeof data }> = {};
  data.forEach((r) => {
    const prefix = r.kad2008.padStart(8, "0").slice(0, 2);
    if (SECTION_NAMES[prefix]) {
      if (!sections[prefix]) sections[prefix] = { count: 0, changed: 0, sample: [] };
      sections[prefix].count++;
      if (r.kad2008 !== r.kad2025) sections[prefix].changed++;
      if (sections[prefix].sample.length < 2) sections[prefix].sample.push(r);
    }
  });

  const changedSample = data.filter((r) => r.kad2008 !== r.kad2025).slice(0, 20);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
      { "@type": "ListItem", position: 2, name: "ΚΑΔ 2008", item: "https://www.kad2025.gr/kad-2008" },
    ],
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>ΚΑΔ 2008</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.8rem" }}>ΚΑΔ 2008</span>
        <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Ισχύς έως 28/2/2026</span>
      </div>
      <h1 style={{ marginBottom: "0.5rem" }}>Αναζήτηση ΚΑΔ 2008</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Βάση <strong>{totalUnique.toLocaleString("el-GR")} μοναδικών ΚΑΔ 2008</strong> με αντιστοίχιση στους νέους ΚΑΔ 2025.
        Δείτε επίσης: <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>Αντιστοίχιση ΚΑΔ 2008 → 2025</Link> και{" "}
        <Link href="/kad-2025" style={{ color: "var(--primary)" }}>νέοι ΚΑΔ 2025</Link>.
      </p>

      {/* ===== SEARCH FIRST ===== */}
      <section style={{ marginBottom: "3rem" }}>
        <KadSearch mode="kad2008" initialData={data} initialQuery={params?.q || ""} />
      </section>

      {/* Directory after search */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>ΚΑΔ 2008 ανά Κλάδο Δραστηριότητας</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.6rem", marginBottom: "0.75rem" }}>
          {Object.entries(sections).map(([prefix, { count, changed, sample }]) => (
            <Link key={prefix} href={`/antistoixisi?q=${prefix}`} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "0.75rem", fontSize: "0.85rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{SECTION_NAMES[prefix]}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>
                  {count.toLocaleString("el-GR")} ΚΑΔ · {changed.toLocaleString("el-GR")} άλλαξαν
                </div>
                <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                  {sample.map((r) => (
                    <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
                      <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.68rem" }}>{r.kad2008}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/klados" style={{ color: "var(--primary)", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
          📂 Δείτε όλους τους κλάδους →
        </Link>
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>ΚΑΔ 2008 που Άλλαξαν — Δείγμα</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
          Ενδεικτικοί ΚΑΔ 2008 που αντιστοιχίστηκαν σε νέους ΚΑΔ 2025 από 1/3/2026.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {changedSample.map((r) => (
            <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.6rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.85rem", flexWrap: "wrap" }}>
                <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.78rem" }}>{r.kad2008}</span>
                <span style={{ color: "var(--text-muted)", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.desc2008}</span>
                <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>→ {r.kad2025}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
