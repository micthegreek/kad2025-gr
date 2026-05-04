import type { Metadata } from "next";
import Link from "next/link";
import { getKadData, getSafeKadUrlForCode } from "@/lib/kadData";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Στατιστικά ΚΑΔ 2008 → 2025 | Ανάλυση",
  description:
    "Πλήρη στατιστικά αντιστοίχισης ΚΑΔ 2008 → 2025. 10.923 εγγραφές, 7.240 αλλαγές, ανάλυση συγχωνεύσεων ανά κλάδο. Δεδομένα ΑΑΔΕ Α.1004/2026.",
  alternates: { canonical: "https://www.kad2025.gr/statistika" },
};

const SECTION_NAMES: Record<string, string> = {
  "01": "Γεωργία & Κτηνοτροφία", "10": "Βιομηχανία Τροφίμων",
  "41": "Κατασκευές", "43": "Εξειδικευμένες Κατασκευές",
  "45": "Εμπόριο Οχημάτων", "46": "Χονδρικό Εμπόριο", "47": "Λιανικό Εμπόριο",
  "49": "Μεταφορές", "55": "Ξενοδοχεία", "56": "Εστίαση",
  "62": "Πληροφορική", "68": "Ακίνητα", "69": "Λογιστικά & Νομικά",
  "85": "Εκπαίδευση", "86": "Υγεία", "96": "Άλλες Υπηρεσίες",
};

export default function StatistikaPage() {
  const data = getKadData();

  // Core stats
  const unique2008 = new Set(data.map((r) => r.kad2008)).size;
  const unique2025 = new Set(data.map((r) => r.kad2025)).size;
  const changed = data.filter((r) => r.kad2008 !== r.kad2025).length;
  const unchanged = data.length - changed;
  const changePercent = Math.round((changed / data.length) * 100);

  // Many-to-one: find KAD 2025 that absorbed many old KADs
  const map2025 = new Map<string, typeof data>();
  data.forEach((r) => {
    if (!map2025.has(r.kad2025)) map2025.set(r.kad2025, []);
    map2025.get(r.kad2025)!.push(r);
  });

  const mergedTop = Array.from(map2025.entries())
    .filter(([, v]) => v.length > 1)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 20);

  // Stats by section
  const sectionStats: Record<string, { total: number; changed: number; name: string }> = {};
  data.forEach((r) => {
    const prefix = r.kad2008.padStart(8, "0").slice(0, 2);
    if (SECTION_NAMES[prefix]) {
      if (!sectionStats[prefix]) sectionStats[prefix] = { total: 0, changed: 0, name: SECTION_NAMES[prefix] };
      sectionStats[prefix].total++;
      if (r.kad2008 !== r.kad2025) sectionStats[prefix].changed++;
    }
  });

  const sectionsSorted = Object.entries(sectionStats).sort((a, b) => b[1].total - a[1].total);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Στατιστικά Αντιστοίχισης</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>📊 Στατιστικά Αντιστοίχισης ΚΑΔ 2008 → 2025</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Πλήρης ανάλυση της αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025 βάσει επίσημων δεδομένων ΑΑΔΕ{" "}
        <Link href="/blog" style={{ color: "var(--primary)" }}>Α.1003/2026 & Α.1004/2026</Link>.
        Χρησιμοποιήστε το <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>εργαλείο αντιστοίχισης</Link>{" "}
        για να βρείτε τον νέο ΚΑΔ σας.
      </p>

      {/* Main stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { label: "Σύνολο Εγγραφών", value: data.length.toLocaleString("el-GR"), icon: "📊", color: "var(--primary)" },
          { label: "Μοναδικοί ΚΑΔ 2008", value: unique2008.toLocaleString("el-GR"), icon: "📂", color: "#1e40af" },
          { label: "Μοναδικοί ΚΑΔ 2025", value: unique2025.toLocaleString("el-GR"), icon: "🆕", color: "#166534" },
          { label: "Άλλαξαν ΚΑΔ", value: changed.toLocaleString("el-GR"), icon: "🔄", color: "#b45309" },
          { label: "Παρέμειναν Ίδιοι", value: unchanged.toLocaleString("el-GR"), icon: "✅", color: "var(--success)" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.2rem" }}>{s.icon}</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Change percentage bar */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Ποσοστό Αλλαγών στους ΚΑΔ</h2>
        <div style={{ display: "flex", height: 36, borderRadius: 8, overflow: "hidden", marginBottom: "0.5rem" }}>
          <div style={{ width: `${changePercent}%`, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a1a", fontSize: "0.85rem", fontWeight: 700 }}>
            {changePercent}% Άλλαξαν
          </div>
          <div style={{ flex: 1, background: "var(--success)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.85rem", fontWeight: 700 }}>
            {100 - changePercent}% Ίδιοι
          </div>
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Από τους {data.length.toLocaleString("el-GR")} συνολικούς κωδικούς, οι{" "}
          <strong>{changed.toLocaleString("el-GR")}</strong> ({changePercent}%) αντιστοιχίστηκαν σε νέο κωδικό,
          ενώ οι <strong>{unchanged.toLocaleString("el-GR")}</strong> παρέμειναν αμετάβλητοι.
        </p>
      </div>

      {/* Stats per section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Αλλαγές ανά Κλάδο Δραστηριότητας</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {sectionsSorted.map(([prefix, { total, changed: sec_changed, name }]) => {
            const pct = Math.round((sec_changed / total) * 100);
            return (
              <div key={prefix} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8 }}>
                <Link href={`/antistoixisi?q=${prefix}`} style={{ textDecoration: "none", minWidth: 180 }}>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--primary)" }}>{name}</span>
                </Link>
                <div style={{ flex: 1, height: 8, background: "var(--border)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: pct > 70 ? "var(--accent)" : "var(--success)", borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", minWidth: 80, textAlign: "right" }}>
                  {sec_changed}/{total} ({pct}%)
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top merged KADs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          🔀 ΚΑΔ 2025 με τις Περισσότερες Συγχωνεύσεις
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
          Νέοι ΚΑΔ που προέκυψαν από συγχώνευση πολλών παλιών κωδικών 2008.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {mergedTop.map(([kad2025, records]) => {
            // v60b: Prefer kad2025 SSG URL; fallback to first SSG kad2008; else search page
            const safeKad2025Url = getSafeKadUrlForCode(kad2025);
            const safeKad2008 = records.find(r => getSafeKadUrlForCode(r.kad2008))?.kad2008;
            const href = safeKad2025Url || (safeKad2008 ? `/kad/${safeKad2008}` : `/kad-2025?q=${kad2025}`);
            return (
              <Link key={kad2025} href={href} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, flexWrap: "wrap" }}>
                  <span className="kad-badge kad-badge-2025">{kad2025}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{records[0].desc2025.slice(0, 60)}{records[0].desc2025.length > 60 ? "..." : ""}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                      ← {records.map((r) => r.kad2008).slice(0, 5).join(", ")}{records.length > 5 ? ` +${records.length - 5} ακόμα` : ""}
                    </div>
                  </div>
                  <div style={{ background: "var(--accent)", color: "#1a1a1a", fontWeight: 800, padding: "0.25rem 0.6rem", borderRadius: 20, fontSize: "0.85rem", flexShrink: 0 }}>
                    {records.length}→1
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO info */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Περί της Αντιστοίχισης ΚΑΔ 2008 → 2025</h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
          Η αντιστοίχιση πραγματοποιήθηκε βάσει της απόφασης <strong>Α.1004/2026</strong> της ΑΑΔΕ
          και ολοκληρώθηκε αυτόματα στις <strong>9 Μαρτίου 2026</strong> για 1,9 εκατ. επιχειρήσεις.
          Συνολικά <strong>{changed.toLocaleString("el-GR")} κωδικοί άλλαξαν</strong> ({changePercent}% του συνόλου),
          ενώ πολλοί παλιοί κωδικοί συγχωνεύτηκαν σε έναν νέο. Για να βρείτε τον νέο ΚΑΔ σας,
          χρησιμοποιήστε το{" "}
          <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>εργαλείο αντιστοίχισης</Link> ή
          τη <Link href="/maziki-2008" style={{ color: "var(--primary)" }}>μαζική αντιστοίχιση</Link> αν
          έχετε πολλούς κωδικούς.
        </p>
      </div>
    </div>
  );
}
