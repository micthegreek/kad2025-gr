import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σελίδα δεν βρέθηκε | kad2025.gr",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</div>
      <h1 style={{ marginBottom: "0.5rem" }}>Σελίδα δεν βρέθηκε</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}>
        Ο ΚΑΔ ή η σελίδα που αναζητάτε δεν υπάρχει.
      </p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Αν ψάχνετε συγκεκριμένο ΚΑΔ, χρησιμοποιήστε την αναζήτηση παρακάτω.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        <Link href="/" className="btn btn-primary">🏠 Αρχική</Link>
        <Link href="/antistoixisi" className="btn btn-ghost">🔄 Αντιστοίχιση ΚΑΔ</Link>
        <Link href="/kad-2025" className="btn btn-ghost">🆕 ΚΑΔ 2025</Link>
        <Link href="/kad-2008" className="btn btn-ghost">📋 ΚΑΔ 2008</Link>
      </div>
      <div style={{ background: "var(--bg-secondary)", borderRadius: "var(--radius)", padding: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        💡 Tip: Οι νέοι ΚΑΔ 2025 έχουν διαφορετικούς κωδικούς από τους παλιούς ΚΑΔ 2008.
        Χρησιμοποιήστε την <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>αντιστοίχιση</Link> για να βρείτε τον σωστό κωδικό.
      </div>
    </div>
  );
}
