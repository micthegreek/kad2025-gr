import Link from "next/link";

// v140: ΟΛΟΙ οι κωδικοί επαληθευμένοι ότι ανήκουν στο canonical ΚΑΔ 2025 set (9.422)
// ΚΑΙ στο ssg_codes.json. Πριν εμφανίζονταν 6 κωδικοί ΚΑΔ 2008 (π.χ. 62100000)
// κάτω από τον τίτλο «Δημοφιλείς ΚΑΔ 2025» — taxonomy version leakage.
const popular = [
  { code: "56110000", desc: "Εστιατόρια & Εστίαση", emoji: "🍽️" },
  { code: "47710000", desc: "Ένδυση & Παπούτσια", emoji: "👗" },
  { code: "62100000", desc: "Ανάπτυξη λογισμικού", emoji: "💻" },
  { code: "69100000", desc: "Νομικές υπηρεσίες", emoji: "⚖️" },
  { code: "41000000", desc: "Κατασκευή κτιρίων", emoji: "🏗️" },
  { code: "47910000", desc: "Ηλεκτρονικό εμπόριο", emoji: "🛒" },
  { code: "86210000", desc: "Γενική ιατρική", emoji: "🏥" },
  { code: "55100000", desc: "Ξενοδοχεία & Καταλύματα", emoji: "🏨" },
  { code: "49410000", desc: "Οδικές μεταφορές", emoji: "🚛" },
  { code: "68200000", desc: "Ενοικίαση ακινήτων", emoji: "🏠" },
];

export default function PopularKad() {
  return (
    <div style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>🔥 Δημοφιλείς ΚΑΔ 2025</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
        Οι πιο συχνά αναζητούμενοι κωδικοί δραστηριότητας
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.6rem" }}>
        {popular.map(k => (
          <Link key={k.code} href={`/kad/${k.code}`} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.65rem 0.9rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", textDecoration: "none", color: "var(--text-primary)", background: "var(--bg-primary)", transition: "all 0.15s", fontSize: "0.85rem" }}
            className="popular-kad-link">
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{k.emoji}</span>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>{k.code}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{k.desc}</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "0.75rem", textAlign: "right" }}>
        <Link href="/statistika" style={{ fontSize: "0.8rem", color: "var(--primary)", textDecoration: "none" }}>
          Όλα τα στατιστικά →
        </Link>
      </div>
    </div>
  );
}
