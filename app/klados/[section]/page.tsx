import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKadData } from "@/lib/kadData";
import ssgCodesRaw from "@/public/data/ssg_codes.json";
const ssgCodes = new Set(ssgCodesRaw as string[]);

import { getNace21 } from "@/lib/nace21";

const SECTIONS: Record<string, { name: string; icon: string; desc: string; keywords: string }> = {
  "01": { name: "Γεωργία & Κτηνοτροφία", icon: "🌾", desc: "Φυτική παραγωγή, κτηνοτροφία, αγρότες", keywords: "καδ αγροτών, καδ κτηνοτροφίας, καδ γεωργίας" },
  "02": { name: "Δασοκομία & Υλοτομία", icon: "🌲", desc: "Δασικές δραστηριότητες", keywords: "καδ δασοκομίας" },
  "03": { name: "Αλιεία & Υδατοκαλλιέργεια", icon: "🐟", desc: "Αλιεία, ιχθυοκαλλιέργεια", keywords: "καδ αλιείας" },
  "10": { name: "Βιομηχανία Τροφίμων", icon: "🍞", desc: "Παραγωγή και μεταποίηση τροφίμων", keywords: "καδ τροφίμων, καδ αρτοποιείου" },
  "11": { name: "Ποτοποιία", icon: "🍷", desc: "Παραγωγή ποτών", keywords: "καδ οινοποιείου, καδ ποτών" },
  "14": { name: "Κατασκευή Ενδυμάτων", icon: "👗", desc: "Βιομηχανία ένδυσης", keywords: "καδ ένδυσης" },
  "20": { name: "Χημική Βιομηχανία", icon: "⚗️", desc: "Χημικά προϊόντα", keywords: "καδ χημικής βιομηχανίας" },
  "21": { name: "Φαρμακευτική Βιομηχανία", icon: "💊", desc: "Φάρμακα και ιατρικά", keywords: "καδ φαρμακευτικής" },
  "25": { name: "Μεταλλικά Προϊόντα", icon: "🔩", desc: "Μεταλλουργία", keywords: "καδ μεταλλουργίας" },
  "41": { name: "Κατασκευές Κτιρίων", icon: "🏗️", desc: "Οικοδομές, κτίρια", keywords: "καδ κατασκευών, καδ εργολάβων, καδ οικοδομών" },
  "43": { name: "Εξειδικευμένες Κατασκευές", icon: "🔧", desc: "Ηλεκτρολόγοι, υδραυλικοί", keywords: "καδ ηλεκτρολόγων, καδ υδραυλικών, καδ τεχνιτών" },
  "45": { name: "Εμπόριο Οχημάτων", icon: "🚗", desc: "Αυτοκίνητα, συνεργεία", keywords: "καδ συνεργείων, καδ αυτοκινήτων" },
  "46": { name: "Χονδρικό Εμπόριο", icon: "📦", desc: "Χονδρεμπόριο, διανομή", keywords: "καδ εμπορίου, καδ χονδρεμπορίου, καδ διανομής" },
  "47": { name: "Λιανικό Εμπόριο", icon: "🛒", desc: "Καταστήματα λιανικής", keywords: "καδ λιανικού εμπορίου, καδ καταστημάτων, καδ εμπορίου" },
  "49": { name: "Χερσαίες Μεταφορές", icon: "🚛", desc: "Οδικές μεταφορές", keywords: "καδ μεταφορών, καδ φορτηγών, καδ logistics" },
  "55": { name: "Καταλύματα & Ξενοδοχεία", icon: "🏨", desc: "Ξενοδοχεία, τουρισμός", keywords: "καδ τουρισμού, καδ ξενοδοχείων, καδ τουριστικών καταλυμάτων, καδ airbnb" },
  "56": { name: "Εστίαση", icon: "🍽️", desc: "Εστιατόρια, καφέ, ταβέρνες", keywords: "καδ εστίασης, καδ εστιατορίου, καδ καφετέριας, καδ ταβέρνας" },
  "62": { name: "Πληροφορική & IT", icon: "💻", desc: "Software, IT υπηρεσίες", keywords: "καδ πληροφορικής, καδ IT, καδ software, καδ τεχνολογίας" },
  "68": { name: "Ακίνητη Περιουσία", icon: "🏠", desc: "Μεσιτεία, ακίνητα", keywords: "καδ μεσιτών, καδ ακινήτων" },
  "69": { name: "Νομικές & Λογιστικές", icon: "⚖️", desc: "Δικηγόροι, λογιστές", keywords: "καδ λογιστών, καδ δικηγόρων, καδ λογιστικής" },
  "70": { name: "Συμβουλευτικές Υπηρεσίες", icon: "💼", desc: "Business consulting", keywords: "καδ συμβούλων, καδ consulting" },
  "71": { name: "Αρχιτεκτονικές & Μηχανικές", icon: "📐", desc: "Αρχιτέκτονες, μηχανικοί", keywords: "καδ μηχανικών, καδ αρχιτεκτόνων" },
  "85": { name: "Εκπαίδευση", icon: "📚", desc: "Σχολεία, φροντιστήρια", keywords: "καδ εκπαίδευσης, καδ φροντιστηρίων" },
  "86": { name: "Υγεία", icon: "🏥", desc: "Γιατροί, κλινικές", keywords: "καδ υγείας, καδ γιατρών, καδ κλινικών" },
  "93": { name: "Αθλητισμός & Ψυχαγωγία", icon: "⚽", desc: "Αθλητικές εγκαταστάσεις", keywords: "καδ αθλητισμού, καδ γυμναστηρίων" },
  "50": { name: "Πλωτές Μεταφορές", icon: "⛴️", desc: "Ναυτιλία, πλοία", keywords: "καδ ναυτιλίας, καδ πλοίων, καδ θαλάσσιων μεταφορών" },
  "63": { name: "Υπηρεσίες Πληροφορίας", icon: "📡", desc: "Ψηφιακές υπηρεσίες πληροφορίας", keywords: "καδ υπηρεσιών πληροφορίας, καδ ψηφιακών υπηρεσιών" },
  "96": { name: "Άλλες Υπηρεσίες", icon: "🔧", desc: "Κομμωτήρια, επισκευές", keywords: "καδ κομμωτηρίων, καδ επισκευών" },
};

export async function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const def = SECTIONS[section];
  if (!def) return { title: "Κλάδος ΚΑΔ" };
  const nace = getNace21(section);
  const naceSnippet = nace?.description ? ` ${nace.description.slice(0, 80)}.` : "";
  return {
    title: `ΚΑΔ ${def.name} 2025 | ${def.keywords.split(",")[0].trim()} — Αντιστοίχιση`,
    description: `Πλήρης λίστα ΚΑΔ 2008 και ΚΑΔ 2025 για τον κλάδο ${def.name}. ${def.keywords}. ${def.desc}.${naceSnippet} Αντιστοίχιση βάσει ΑΑΔΕ Α.1003/2026.`,
    keywords: def.keywords.split(",").map((k) => k.trim()),
    alternates: { canonical: `https://www.kad2025.gr/klados/${section}` },
  };
}

export default async function KladosDetailPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const def = SECTIONS[section];
  if (!def) notFound();

  const data = getKadData();
  const sectionData = data.filter((r) => r.kad2008.padStart(8, "0").startsWith(section));

  if (sectionData.length === 0) notFound();

  const changed = sectionData.filter((r) => r.kad2008 !== r.kad2025).length;
  const pct = Math.round((changed / sectionData.length) * 100);

  // Deduplicate by kad2008
  const unique = new Map<string, typeof sectionData[0]>();
  sectionData.forEach((r) => { if (!unique.has(r.kad2008)) unique.set(r.kad2008, r); });
  const uniqueList = Array.from(unique.values()).filter(r => ssgCodes.has(r.kad2008));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "Κλάδοι", item: "https://www.kad2025.gr/klados" },
          { "@type": "ListItem", position: 3, name: def.name, item: `https://www.kad2025.gr/klados/${section}` },
        ],
      },
      {
        "@type": "ItemList",
        name: `ΚΑΔ — ${def.name}`,
        description: `Λίστα κωδικών δραστηριότητας για ${def.name}`,
        numberOfItems: uniqueList.length,
        itemListElement: uniqueList.slice(0, 20).map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: r.desc2008,
          url: `https://www.kad2025.gr/kad/${r.kad2008}`,
        })),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/klados" style={{ color: "var(--primary)", textDecoration: "none" }}>Κλάδοι</Link>
        {" → "}
        <span>{def.name}</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "2rem" }}>{def.icon}</span>
        <div>
          <h1 style={{ marginBottom: "0.2rem" }}>ΚΑΔ 2025 — {def.name}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{def.desc}</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { label: "Σύνολο ΚΑΔ", value: uniqueList.length.toLocaleString("el-GR"), color: "var(--primary)" },
          { label: "Άλλαξαν", value: changed.toLocaleString("el-GR"), color: "var(--accent)" },
          { label: "Ποσοστό αλλαγής", value: `${pct}%`, color: pct > 70 ? "var(--accent)" : "var(--success)" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ height: 8, background: "var(--border)", borderRadius: 4, marginBottom: "1.5rem", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: pct > 70 ? "var(--accent)" : "var(--success)", borderRadius: 4 }} />
      </div>

      {/* NACE 2.1 description */}
      {(() => {
        const nace = getNace21(section);
        if (!nace) return null;
        return (
          <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
            <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              📋 Περιγραφή κλάδου (NACE 2.1)
            </h2>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{nace.title}</p>
            {nace.description && (
              nace.description.length > 400 ? (
                <details>
                  <summary style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", cursor: "pointer" }}>
                    {nace.description.slice(0, 350)}... <span style={{ color: "var(--primary)", fontWeight: 600 }}>[Περισσότερα]</span>
                  </summary>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", marginTop: "0.25rem" }}>
                    {nace.description}
                  </p>
                </details>
              ) : (
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)" }}>
                  {nace.description}
                </p>
              )
            )}
            {nace.excludes && (
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                <strong>Εξαιρούνται:</strong> {nace.excludes}
              </p>
            )}
          </div>
        );
      })()}

      {/* Quick actions */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <Link href={`/antistoixisi?q=${section}`} className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
          🔍 Αναζήτηση στον κλάδο
        </Link>
        <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
          📦 Μαζική Αντιστοίχιση
        </Link>
        <Link href="/statistika" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
          📊 Στατιστικά
        </Link>
      </div>

      {/* KAD list - ALL codes, grouped by changed/unchanged */}
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        ΚΑΔ — {def.name} ({uniqueList.length.toLocaleString("el-GR")} κωδικοί)
      </h2>

      {/* Changed KADs - first 200 for SEO internal linking */}
      <h3 style={{ fontSize: "0.95rem", color: "var(--accent)", marginBottom: "0.5rem", marginTop: "1rem" }}>
        🔄 Αλλαγμένοι ΚΑΔ ({uniqueList.filter((r) => r.kad2008 !== r.kad2025).length})
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
        {uniqueList.filter((r) => r.kad2008 !== r.kad2025).slice(0, 200).map((r) => (
          <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.55rem 0.75rem",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: 8, fontSize: "0.85rem", flexWrap: "wrap"
            }}>
              <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.75rem", flexShrink: 0 }}>{r.kad2008}</span>
              <span style={{ flex: 1, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.82rem" }}>{r.desc2008}</span>
              <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>→ {r.kad2025}</span>
            </div>
          </Link>
        ))}
      </div>
      {uniqueList.filter((r) => r.kad2008 !== r.kad2025).length > 200 && (
        <Link href={`/antistoixisi?q=${section}`} className="btn btn-primary" style={{ display: "inline-block", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
          🔍 Δείτε και τους υπόλοιπους {(uniqueList.filter((r) => r.kad2008 !== r.kad2025).length - 200).toLocaleString("el-GR")} αλλαγμένους ΚΑΔ →
        </Link>
      )}

      {/* Unchanged KADs - first 50 */}
      {uniqueList.filter((r) => r.kad2008 === r.kad2025).length > 0 && (
        <>
          <h3 style={{ fontSize: "0.95rem", color: "var(--success)", marginBottom: "0.5rem" }}>
            ✅ Αμετάβλητοι ΚΑΔ ({uniqueList.filter((r) => r.kad2008 === r.kad2025).length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1rem" }}>
            {uniqueList.filter((r) => r.kad2008 === r.kad2025).slice(0, 50).map((r) => (
              <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.45rem 0.75rem",
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--success)",
                  borderRadius: 8, fontSize: "0.82rem"
                }}>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", flexShrink: 0 }}>{r.kad2008}</span>
                  <span style={{ flex: 1, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.desc2008}</span>
                </div>
              </Link>
            ))}
          </div>
          {uniqueList.filter((r) => r.kad2008 === r.kad2025).length > 50 && (
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              ...και {(uniqueList.filter((r) => r.kad2008 === r.kad2025).length - 50).toLocaleString("el-GR")} ακόμα αμετάβλητοι. Χρησιμοποιήστε την{" "}
              <Link href={`/kad-2008?q=${section}`} style={{ color: "var(--primary)" }}>αναζήτηση ΚΑΔ</Link> για πλήρη λίστα.
            </p>
          )}
        </>
      )}

      {/* Related sections */}
      <div className="card" style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Δείτε και άλλους Κλάδους</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {Object.entries(SECTIONS).filter(([k]) => k !== section).map(([k, v]) => (
            <Link key={k} href={`/klados/${k}`} style={{ textDecoration: "none", padding: "0.3rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 20, fontSize: "0.82rem", color: "var(--primary)", fontWeight: 500 }}>
              {v.icon} {v.name}
            </Link>
          ))}
          <Link href="/klados" style={{ textDecoration: "none", padding: "0.3rem 0.75rem", background: "var(--primary)", borderRadius: 20, fontSize: "0.82rem", color: "white", fontWeight: 600 }}>
            Όλοι οι κλάδοι →
          </Link>
        </div>
      </div>
    </div>
  );
}
