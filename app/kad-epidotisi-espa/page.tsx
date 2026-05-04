import type { Metadata } from "next";
import Link from "next/link";
import EpidotisiClient from "./EpidotisiClient";

export const metadata: Metadata = {
  title: "Επιλεξιμότητα ΚΑΔ σε Προγράμματα Επιδότησης — kad2025.gr",
  description:
    "Ελέγξτε αν ο ΚΑΔ σας είναι επιλέξιμος στον Αναπτυξιακό Νόμο, στο ΕΣΠΑ «Παράγουμε στην Ελλάδα» και στο ΕΣΠΑ «Ξεκινώ Επιχειρηματικά».",
  alternates: { canonical: "https://www.kad2025.gr/kad-epidotisi-espa" },
};

export default function KadEpidotisiPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Επιλεξιμότητα ΚΑΔ</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
        Επιλεξιμότητα ΚΑΔ 2025 σε Προγράμματα Επιδότησης
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
        Αναζητήστε τον ΚΑΔ 2025 σας και ελέγξτε αν είναι επιλέξιμος στα παρακάτω ενεργά προγράμματα.
        Τα δεδομένα προέρχονται από τους επίσημους πίνακες επιλεξιμότητας κάθε προγράμματος.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { color: "#1d4ed8", emoji: "🏭", title: "ΕΣΠΑ «Παράγουμε στην Ελλάδα»", desc: "1η Τροποποίηση — 1.288 επιλέξιμοι ΚΑΔ" },
          { color: "#7c3aed", emoji: "🔧", title: "Αναπτυξιακός Νόμος — Μεταποίηση Δ' Κύκλος", desc: "Ν. 4887/2022 — 2.673 επιλέξιμοι ΚΑΔ" },
          { color: "#059669", emoji: "📍", title: "Αναπτυξιακός Νόμος — Περιοχές Ειδικής Ενίσχυσης Β' Κύκλος", desc: "Ν. 4887/2022 — 2.721 επιλέξιμοι ΚΑΔ" },
          { color: "#d97706", emoji: "🏗️", title: "Αναπτυξιακός Νόμος — Μεγάλες Επενδύσεις Β' Κύκλος", desc: "Ν. 4887/2022 — 2.718 επιλέξιμοι ΚΑΔ" },
          { color: "#0891b2", emoji: "🚀", title: "ΕΣΠΑ «Ξεκινώ Επιχειρηματικά»", desc: "4.926 επιλέξιμοι ΚΑΔ" },
        ].map((p, i) => (
          <div key={i} style={{ padding: "0.75rem 1rem", background: "var(--bg-card)", border: `2px solid ${p.color}`, borderRadius: 10 }}>
            <div style={{ fontSize: "1.4rem", marginBottom: "0.3rem" }}>{p.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: "0.82rem", color: p.color, marginBottom: "0.2rem", lineHeight: 1.4 }}>{p.title}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <EpidotisiClient />

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f", marginTop: "2rem" }}>
        ⚠️ <strong>Σημαντική σημείωση:</strong> Η επιλεξιμότητα ΚΑΔ είναι αναγκαία αλλά όχι ικανή προϋπόθεση.
        Απαιτούνται επιπλέον κριτήρια (μέγεθος επιχείρησης, ελάχιστος προϋπολογισμός, τόπος εγκατάστασης κ.λπ.).
        Για θέματα επιλεξιμότητας ΚΑΔ σε προγράμματα επιδότησης, μπορείτε να στείλετε γραπτό ερώτημα στο{" "}
        <a href="mailto:info@kad2025.gr" style={{ color: "#92400e", fontWeight: 600 }}>info@kad2025.gr</a>.
      </div>

      {/* Official sources section */}
      <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
        <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>📋 Επίσημες Πηγές Προγραμμάτων</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a href="https://www.espa.gr" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#1d4ed8", textDecoration: "none" }}>
            🏭 <span><strong>ΕΣΠΑ — «Παράγουμε στην Ελλάδα»:</strong> www.espa.gr</span>
          </a>
          <a href="https://ependyseis.mindev.gov.gr/el/idiotikes/prokirikseis" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#7c3aed", textDecoration: "none" }}>
            🏗️ <span><strong>Αναπτυξιακός Νόμος — Καθεστώτα Ενισχύσεων:</strong> ependyseis.mindev.gov.gr</span>
          </a>
          <a href="https://www.espa.gr" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#0891b2", textDecoration: "none" }}>
            🚀 <span><strong>ΕΣΠΑ — «Ξεκινώ Επιχειρηματικά»:</strong> www.espa.gr</span>
          </a>
        </div>
      </div>
    </div>
  );
}
