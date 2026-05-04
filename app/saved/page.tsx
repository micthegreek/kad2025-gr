import type { Metadata } from "next";
import Link from "next/link";
import SavedKadClient from "./SavedKadClient";

export const metadata: Metadata = {
  title: "Αποθηκευμένοι ΚΑΔ",
  description: "Δείτε τους ΚΑΔ που έχετε αποθηκεύσει για εύκολη πρόσβαση.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.kad2025.gr/saved" },
};

export default function SavedPage() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Αποθηκευμένοι ΚΑΔ</span>
      </nav>
      <h1 style={{ marginBottom: "0.5rem" }}>★ Αποθηκευμένοι ΚΑΔ</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>
        Οι ΚΑΔ που έχετε αποθηκεύσει αποθηκεύονται τοπικά στον browser σας.
      </p>
      <SavedKadClient />
    </div>
  );
}
