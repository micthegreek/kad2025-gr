import type { Metadata } from "next";
import Link from "next/link";
import { getKadData } from "@/lib/kadData";

export const metadata: Metadata = {
  title: "Πότε ΔΕΝ Χρειάζεται Αλλαγή ΚΑΔ 2025",
  description:
    "Δείτε αν ο ΚΑΔ σας παρέμεινε αμετάβλητος στη μετάβαση 2008→2025. 3.683 κωδικοί δεν άλλαξαν. Ελέγξτε τον δικό σας και αποφύγετε περιττές ενέργειες.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.kad2025.gr/den-xreiazetai-allagi" },
};

export default function DenXreiazetaiAllagiPage() {
  const data = getKadData();
  const unchanged = data.filter((r) => r.kad2008 === r.kad2025);
  const changed = data.filter((r) => r.kad2008 !== r.kad2025);
  const sampleUnchanged = unchanged.slice(0, 20);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
      { "@type": "ListItem", position: 2, name: "Πότε δεν χρειάζεται αλλαγή ΚΑΔ", item: "https://www.kad2025.gr/den-xreiazetai-allagi" },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Πότε δεν χρειάζεται αλλαγή ΚΑΔ</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Πότε ΔΕΝ χρειάζεται Αλλαγή ΚΑΔ</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Από τους {data.length.toLocaleString("el-GR")} κωδικούς αντιστοίχισης, οι{" "}
        <strong>{unchanged.length.toLocaleString("el-GR")}</strong> παρέμειναν{" "}
        <strong>αμετάβλητοι</strong> — ο παλιός ΚΑΔ 2008 είναι ίδιος με τον νέο ΚΑΔ 2025.
        Αν ο δικός σας ΚΑΔ ανήκει σε αυτή την κατηγορία, <strong>δεν χρειάζεται να κάνετε τίποτα</strong>.
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Αμετάβλητοι ΚΑΔ", value: unchanged.length.toLocaleString("el-GR"), color: "var(--success)", icon: "✅" },
          { label: "Άλλαξαν ΚΑΔ", value: changed.length.toLocaleString("el-GR"), color: "var(--accent)", icon: "🔄" },
          { label: "Ποσοστό αμετάβλητων", value: `${Math.round((unchanged.length / data.length) * 100)}%`, color: "var(--primary)", icon: "📊" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{s.icon}</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick check */}
      <section className="card" style={{ marginBottom: "2rem", borderLeft: "3px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>🔍 Ελέγξτε τον ΚΑΔ σας Αμέσως</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
          Χρησιμοποιήστε το εργαλείο αντιστοίχισης για να δείτε αν ο ΚΑΔ σας άλλαξε ή όχι:
        </p>
        <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
          🔍 Ελέγξτε τον ΚΑΔ σας →
        </Link>
      </section>

      {/* When no action needed */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Σε Ποιες Περιπτώσεις ΔΕΝ χρειάζεται Ενέργεια</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { icon: "✅", title: "Ο ΚΑΔ σας παρέμεινε ίδιος", desc: "Αν ο αριθμός του ΚΑΔ δεν άλλαξε (π.χ. 47.11.00 → 47.11.00), δεν χρειάζεται καμία ενέργεια. Η ΑΑΔΕ έχει ήδη αντιστοιχίσει αυτόματα." },
            { icon: "✅", title: "Η ΑΑΔΕ αντιστοίχησε σωστά", desc: "Αν ο νέος ΚΑΔ 2025 που σας αντιστοιχίστηκε καλύπτει επαρκώς τη δραστηριότητά σας, δεν χρειάζεται διόρθωση." },
            { icon: "✅", title: "Η αλλαγή είναι μόνο τυπική", desc: "Μερικές αλλαγές είναι αναριθμήσεις χωρίς ουσιαστική διαφορά. Αν η περιγραφή ταιριάζει, δεν χρειάζεται ενέργεια." },
          ].map((s) => (
            <div key={s.title} className="card" style={{ display: "flex", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{s.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample unchanged */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
          Δείγμα Αμετάβλητων ΚΑΔ ({unchanged.length.toLocaleString("el-GR")} συνολικά)
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {sampleUnchanged.map((r) => (
            <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--success)", borderRadius: 8, fontSize: "0.82rem" }}>
                <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", flexShrink: 0 }}>{r.kad2025}</span>
                <span style={{ flex: 1, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.desc2025}</span>
                <span style={{ color: "var(--success)", fontSize: "0.75rem", flexShrink: 0, fontWeight: 600 }}>≡ Αμετάβλητος</span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/antistoixisi" style={{ display: "block", marginTop: "0.75rem", color: "var(--primary)", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
          Ελέγξτε τον δικό σας ΚΑΔ →
        </Link>
      </section>

      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Χρειάζεστε Διόρθωση;</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/lathos-antistoixisi", label: "⚠️ Ο ΚΑΔ μου αντιστοιχίστηκε λάθος — τι κάνω;" },
            { href: "/odigies-logistes", label: "📋 Οδηγός για λογιστές με πολλούς πελάτες" },
            { href: "/antistoixisi", label: "🔍 Αντιστοίχιση ΚΑΔ 2008 → 2025" },
            { href: "/blog", label: "📖 Πλήρης οδηγός αλλαγών ΚΑΔ 2025" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
