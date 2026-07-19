import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ClassCompare from "@/components/ClassCompare";

export const metadata: Metadata = {
  title: "Σύγκριση Τάξεων ΚΑΔ/NACE: Δείτε 2 Κωδικούς Δίπλα-Δίπλα (55.20 vs 68.20 κ.ά.)",
  description:
    "Συγκρίνετε δύο τάξεις NACE 2.1 πλάι-πλάι με τα επίσημα «Περιλαμβάνει / Δεν περιλαμβάνει» της ΕΛΣΤΑΤ — και λύστε τα κλασικά διλήμματα: Airbnb ή εκμίσθωση, custom λογισμικό ή εκδόσεις, γυμναστήριο ή personal trainer.",
  alternates: { canonical: "https://www.kad2025.gr/sygkrisi-kad" },
};

const jsonLdApp = { "@context": "https://schema.org", "@type": "WebApplication", name: "Σύγκριση Τάξεων ΚΑΔ/NACE 2.1", url: "https://www.kad2025.gr/sygkrisi-kad", applicationCategory: "BusinessApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" } };
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Σύγκριση Τάξεων ΚΑΔ/NACE 2.1",
  url: "https://www.kad2025.gr/sygkrisi-kad",
  inLanguage: "el-GR",
  description: "Εργαλείο σύγκρισης δύο τάξεων NACE 2.1 με τις επίσημες επεξηγήσεις ΕΛΣΤΑΤ.",
};

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 1000, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>⚖️ Σύγκριση Τάξεων ΚΑΔ</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.1rem" }}>
        Βάλτε δύο κωδικούς (4ψήφιους ή 8ψήφιους) και δείτε τα επίσημα «Περιλαμβάνει / Δεν περιλαμβάνει» τους
        δίπλα-δίπλα — ο γρηγορότερος τρόπος να λυθεί ένα δίλημμα ταξινόμησης.
      </p>
      <Suspense fallback={<div style={{ padding: "1rem", color: "var(--text-muted)" }}>Φόρτωση…</div>}><ClassCompare /></Suspense>
      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}>
        Πηγή: Επεξηγηματικές Σημειώσεις ΣΤΑΚΟΔ/NACE Αναθ. 2.1 (ΕΛΣΤΑΤ). Σχετικά:{" "}
        <Link href="/odigos-epilogis-kad">Οδηγός επιλογής ΚΑΔ</Link> ·{" "}
        <Link href="/blog/parexigimenes-taksinomiseis-kad">Οι 10 παρεξηγημένες ταξινομήσεις</Link> ·{" "}
        <Link href="/kad-2025">Αναζήτηση ΚΑΔ 2025</Link>
      </p>
    </main>
  );
}
