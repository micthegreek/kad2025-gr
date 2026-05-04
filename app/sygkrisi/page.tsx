import type { Metadata } from "next";
import Link from "next/link";
import SygkrisiClient from "./SygkrisiClient";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Σύγκριση ΚΑΔ 2025 | Διαφορές Κωδικών",
  description: "Συγκρίνετε δύο ΚΑΔ 2025 δίπλα-δίπλα. Δείτε ποιος ΚΑΔ ταιριάζει καλύτερα στη δραστηριότητά σας.",
  alternates: { canonical: "https://www.kad2025.gr/sygkrisi" },
};

export default function SygkrisiPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="sygkrisi" />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Σύγκριση ΚΑΔ</span>
      </nav>
      <h1 style={{ marginBottom: "0.5rem" }}>⚖️ Σύγκριση ΚΑΔ 2025</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Συγκρίνετε δύο ΚΑΔ δίπλα-δίπλα για να δείτε τις διαφορές τους.
      </p>
      <SygkrisiClient />
    </div>
  );
}
