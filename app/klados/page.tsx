import type { Metadata } from "next";
import Link from "next/link";
import { getKadData } from "@/lib/kadData";

export const metadata: Metadata = {
  title: "ΚΑΔ 2025 ανά Κλάδο | Πλήρης Κατάλογος",
  description:
    "Πλήρης κατάλογος ΚΑΔ 2025 ανά κλάδο: Γεωργία, Εμπόριο, Εστίαση, Κατασκευές, Υγεία, Πληροφορική και άλλοι. Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026.",
  alternates: { canonical: "https://www.kad2025.gr/klados" },
};

const SECTIONS: Record<string, { name: string; icon: string; color: string; desc: string }> = {
  "01": { name: "Φυτική & Ζωική Παραγωγή", icon: "🌾", color: "#166534", desc: "Γεωργία, κτηνοτροφία, αγρότες" },
  "02": { name: "Δασοκομία & Υλοτομία", icon: "🌲", color: "#14532d", desc: "Δασικές δραστηριότητες" },
  "03": { name: "Αλιεία & Υδατοκαλλιέργεια", icon: "🐟", color: "#0e7490", desc: "Αλιεία, ιχθυοκαλλιέργεια" },
  "10": { name: "Βιομηχανία Τροφίμων", icon: "🍞", color: "#b45309", desc: "Παραγωγή τροφίμων" },
  "11": { name: "Ποτοποιία", icon: "🍷", color: "#7c3aed", desc: "Παραγωγή ποτών" },
  "14": { name: "Κατασκευή Ενδυμάτων", icon: "👗", color: "#be185d", desc: "Βιομηχανία ένδυσης" },
  "20": { name: "Χημική Βιομηχανία", icon: "⚗️", color: "#0369a1", desc: "Χημικά προϊόντα" },
  "21": { name: "Φαρμακευτική Βιομηχανία", icon: "💊", color: "#dc2626", desc: "Φάρμακα και ιατρικά" },
  "25": { name: "Μεταλλικά Προϊόντα", icon: "🔩", color: "#475569", desc: "Μεταλλουργία" },
  "41": { name: "Κατασκευές Κτιρίων", icon: "🏗️", color: "#7c3aed", desc: "Οικοδομές, κτίρια" },
  "43": { name: "Εξειδικευμένες Κατασκευές", icon: "🔧", color: "#6d28d9", desc: "Ηλεκτρολόγοι, υδραυλικοί" },
  "45": { name: "Εμπόριο Οχημάτων", icon: "🚗", color: "#1e40af", desc: "Αυτοκίνητα, συνεργεία" },
  "46": { name: "Χονδρικό Εμπόριο", icon: "📦", color: "#1d4ed8", desc: "Χονδρεμπόριο, διανομή" },
  "47": { name: "Λιανικό Εμπόριο", icon: "🛒", color: "#dc2626", desc: "Καταστήματα λιανικής" },
  "49": { name: "Χερσαίες Μεταφορές", icon: "🚛", color: "#92400e", desc: "Μεταφορές οδικές" },
  "50": { name: "Πλωτές Μεταφορές", icon: "⛴️", color: "#0c4a6e", desc: "Ναυτιλία" },
  "55": { name: "Καταλύματα & Ξενοδοχεία", icon: "🏨", color: "#0891b2", desc: "Ξενοδοχεία, τουρισμός" },
  "56": { name: "Εστίαση", icon: "🍽️", color: "#d97706", desc: "Εστιατόρια, καφέ, ταβέρνες" },
  "62": { name: "Πληροφορική & IT", icon: "💻", color: "#4f46e5", desc: "Software, IT υπηρεσίες" },
  "63": { name: "Υπηρεσίες Πληροφορίας", icon: "📡", color: "#3730a3", desc: "Ψηφιακές υπηρεσίες" },
  "68": { name: "Ακίνητη Περιουσία", icon: "🏠", color: "#059669", desc: "Μεσιτεία, ακίνητα" },
  "69": { name: "Νομικές & Λογιστικές", icon: "⚖️", color: "#7c3aed", desc: "Δικηγόροι, λογιστές" },
  "70": { name: "Συμβουλευτικές Υπηρεσίες", icon: "💼", color: "#0369a1", desc: "Business consulting" },
  "71": { name: "Αρχιτεκτονικές & Μηχανικές", icon: "📐", color: "#0891b2", desc: "Αρχιτέκτονες, μηχανικοί" },
  "85": { name: "Εκπαίδευση", icon: "📚", color: "#0369a1", desc: "Σχολεία, φροντιστήρια" },
  "86": { name: "Υγεία", icon: "🏥", color: "#dc2626", desc: "Γιατροί, κλινικές" },
  "93": { name: "Αθλητισμός & Ψυχαγωγία", icon: "⚽", color: "#16a34a", desc: "Αθλητικές εγκαταστάσεις" },
  "96": { name: "Άλλες Υπηρεσίες", icon: "🔧", color: "#6b7280", desc: "Κομμωτήρια, επισκευές" },
};

export default function KladosPage() {
  const data = getKadData();

  // Build section data
  const sectionData: Record<string, { count: number; changed: number; kads: typeof data }> = {};
  // Count unique kad2008 codes (not total records) to match /klados/[section] page
  const seenKad2008 = new Set<string>();
  data.forEach((r) => {
    const prefix = r.kad2008.padStart(8, "0").slice(0, 2);
    if (!sectionData[prefix]) sectionData[prefix] = { count: 0, changed: 0, kads: [] };
    if (!seenKad2008.has(r.kad2008)) {
      seenKad2008.add(r.kad2008);
      sectionData[prefix].count++;
      if (r.kad2008 !== r.kad2025) sectionData[prefix].changed++;
    }
    if (sectionData[prefix].kads.length < 6) sectionData[prefix].kads.push(r);
  });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Κλάδοι Δραστηριότητας</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>📂 ΚΑΔ 2025 ανά Κλάδο Δραστηριότητας</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: 1.6 }}>
        Πλήρης κατάλογος κωδικών δραστηριότητας ανά οικονομικό κλάδο.
        Κάντε κλικ σε έναν κλάδο για να δείτε όλους τους ΚΑΔ και την αντιστοίχησή τους.
        Βάσει αποφάσεων ΑΑΔΕ <Link href="/blog" style={{ color: "var(--primary)" }}>Α.1003/2026 & Α.1004/2026</Link>.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
        {Object.entries(SECTIONS).map(([prefix, def]) => {
          const sec = sectionData[prefix];
          if (!sec || sec.count === 0) return null;
          const changePercent = Math.round((sec.changed / sec.count) * 100);

          return (
            <div key={prefix} className="card" style={{ borderTop: `4px solid ${def.color}`, padding: "1.25rem" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.8rem" }}>{def.icon}</span>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: "1rem", marginBottom: "0.1rem" }}>{def.name}</h2>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{def.desc}</span>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: def.color }}>{sec.count.toLocaleString("el-GR")}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>ΚΑΔ σύνολο</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent)" }}>{sec.changed.toLocaleString("el-GR")}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>άλλαξαν</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary)" }}>{changePercent}%</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>ποσοστό</div>
                </div>
              </div>

              {/* Change bar */}
              <div style={{ height: 6, background: "var(--border)", borderRadius: 3, marginBottom: "0.75rem", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${changePercent}%`, background: def.color, borderRadius: 3 }} />
              </div>

              {/* Sample KADs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "0.75rem" }}>
                {sec.kads.slice(0, 4).map((r) => (
                  <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none", display: "flex", gap: "0.4rem", alignItems: "center" }}>
                    <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.7rem", flexShrink: 0 }}>{r.kad2008}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {r.desc2008.slice(0, 45)}{r.desc2008.length > 45 ? "..." : ""}
                    </span>
                    {r.kad2008 !== r.kad2025 && (
                      <span style={{ color: "var(--accent)", fontSize: "0.7rem", flexShrink: 0 }}>→ {r.kad2025}</span>
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/klados/${prefix}`}
                style={{ display: "block", textAlign: "center", padding: "0.5rem", background: def.color + "15", color: def.color, borderRadius: 8, textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
              >
                Δες όλους τους {sec.count} ΚΑΔ →
              </Link>
            </div>
          );
        })}
      </div>

      {/* SEO text */}
      <div className="card" style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Οδηγός Κλάδων ΚΑΔ 2025</h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text)" }}>
          Οι Κωδικοί Αριθμών Δραστηριότητας (ΚΑΔ 2025) οργανώνονται σε κλάδους βάσει της ευρωπαϊκής
          ταξινόμησης <strong>NACE Rev.2.1</strong>. Από 1η Μαρτίου 2026, κάθε επιχείρηση στην Ελλάδα
          χρησιμοποιεί τους νέους κωδικούς στο Φορολογικό Μητρώο της ΑΑΔΕ.
          Για να βρείτε τον σωστό ΚΑΔ για τη δραστηριότητά σας, χρησιμοποιήστε το{" "}
          <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>εργαλείο αντιστοίχισης</Link> ή
          διαβάστε τον <Link href="/blog" style={{ color: "var(--primary)" }}>πλήρη οδηγό αλλαγών ΚΑΔ</Link>.
        </p>
      </div>
    </div>
  );
}
