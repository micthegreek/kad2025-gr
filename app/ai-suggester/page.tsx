import type { Metadata } from "next";
import Link from "next/link";
import AISuggesterClient from "./AISuggesterClient";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Εύρεση ΚΑΔ 2025 — Βρείτε τον Σωστό Κωδικό",
  description: "Περιγράψτε τη δραστηριότητά σας και το AI σας προτείνει αυτόματα τους κατάλληλους ΚΑΔ 2025. Δωρεάν εργαλείο για επιχειρήσεις και λογιστές.",
  keywords: ["ai kad", "βρες kad", "ποιος kad", "kad suggester", "kad 2025 εύρεση"],
  alternates: { canonical: "https://www.kad2025.gr/ai-suggester" },
};

export default function AISuggesterPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="ai_suggester" />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>AI Βοηθός ΚΑΔ</span>
      </nav>

      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #7c3aed20, #1e3a5f20)", border: "1px solid #7c3aed40", borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", color: "#7c3aed" }}>
        ✨ AI-Powered — Νέο
      </div>

      <h1 style={{ marginBottom: "0.5rem" }}>AI Εύρεση ΚΑΔ 2025</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
        Περιγράψτε στα ελληνικά τι κάνει η επιχείρησή σας και το AI θα σας προτείνει τους πιο κατάλληλους <strong>ΚΑΔ 2025</strong> με ποσοστό βεβαιότητας.
      </p>

      <AISuggesterClient />

      <div className="card" style={{ marginTop: "2rem", background: "var(--bg-secondary)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        <strong>💡 Tip:</strong> Όσο πιο αναλυτικά περιγράψετε τη δραστηριότητά σας, τόσο πιο ακριβείς θα είναι οι προτάσεις.
        Μετά την εύρεση, χρησιμοποιήστε την <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>αντιστοίχιση</Link> για να επιβεβαιώσετε τον ΚΑΔ σας.
      </div>
    </div>
  );
}
