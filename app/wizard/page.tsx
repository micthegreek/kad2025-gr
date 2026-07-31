import type { Metadata } from "next";
import Link from "next/link";
import WizardClient from "./WizardClient";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  title: "Εύρεση ΚΑΔ 2025 — Βήμα-Βήμα Οδηγός",
  description: "Βρείτε τον σωστό ΚΑΔ 2025 για νέα επιχείρηση μέσα από 3 απλά βήματα. Οδηγός για επιχειρηματίες και λογιστές.",
  alternates: { canonical: "https://www.kad2025.gr/wizard" },
};

export default function WizardPage() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="wizard" />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Wizard ΚΑΔ</span>
      </nav>
      <h1 style={{ marginBottom: "0.5rem" }}>🧭 Βρες τον ΚΑΔ 2025 — Βήμα-Βήμα</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Απαντήστε σε 3 ερωτήσεις και θα σας κατευθύνουμε στον σωστό ΚΑΔ 2025.
      </p>
      <WizardClient />

      <p style={{ marginTop: "1.25rem", padding: "0.6rem 0.9rem", border: "1px dashed var(--border)", borderRadius: 8, fontSize: "0.85rem" }}>💡 Θέλετε καθοδήγηση με βάση τις επίσημες τάξεις NACE 2.1; Δοκιμάστε και τον <Link href="/odigos-epilogis-kad">Οδηγό Επιλογής ΚΑΔ ανά τάξη</Link>.</p>
    </div>
  );
}
