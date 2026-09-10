"use client";
import Link from "next/link";

/**
 * v130 — Διαφημιστική θέση, υψηλής ορατότητας.
 * variant="rail"    → σταθερή δεξιά στήλη σε ευρείες οθόνες (≥1400px)
 * variant="inline"  → μετά τα αποτελέσματα· εμφανίζεται μόνο <1400px (δεν διπλοεμφανίζεται)
 * variant="compact" → σελίδες κλάδων / άρθρα
 * variant="footer"  → μία γραμμή, όλο το site
 */
export default function AdSlotBanner({ variant = "inline" }: { variant?: "inline" | "compact" | "footer" | "rail" }) {
  const track = () => {
    if (typeof window !== "undefined")
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "adslot_click", { variant });
  };

  const LABEL = (
    <span className="adslot-label">Διαθέσιμη διαφημιστική θέση</span>
  );

  if (variant === "footer") {
    return (
      <Link href="/diafimisi" onClick={track} className="adslot-footer no-print">
        {LABEL}
        <span style={{ fontWeight: 600 }}>Απευθύνεστε σε λογιστές και επιχειρήσεις; Το κοινό σας είναι ήδη εδώ.</span>
        <span style={{ fontWeight: 800, color: "var(--primary)" }}>Δείτε στοιχεία →</span>
      </Link>
    );
  }

  if (variant === "rail") {
    return (
      <aside className="adslot-rail no-print" aria-label="Διαφημιστική θέση">
        <Link href="/diafimisi" onClick={track} className="adslot-box" style={{ display: "block", textDecoration: "none" }}>
          <div style={{ textAlign: "center", marginBottom: "0.85rem" }}>{LABEL}</div>
          <p style={{ margin: "0 0 0.6rem", fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.35, color: "var(--text)" }}>
            Απευθύνεστε σε λογιστές και επιχειρήσεις;
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
            Το κοινό σας είναι ήδη εδώ — <strong style={{ color: "var(--text)" }}>20.000+ προβολές τον μήνα</strong> από Έλληνες επαγγελματίες, με μέση επίσκεψη <strong style={{ color: "var(--text)" }}>5,5 λεπτών</strong>.
          </p>
          <span className="adslot-cta" style={{ display: "block", textAlign: "center" }}>Δείτε στοιχεία →</span>
        </Link>
      </aside>
    );
  }

  const compact = variant === "compact";
  return (
    <Link
      href="/diafimisi" onClick={track}
      className={`adslot-box no-print${variant === "inline" ? " adslot-inline" : ""}`}
      style={{ display: "block", textDecoration: "none", margin: compact ? "1.4rem 0" : "1.6rem 0", padding: compact ? "1.05rem 1.2rem" : "1.25rem 1.4rem" }}
    >
      <div style={{ marginBottom: "0.75rem" }}>{LABEL}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: compact ? "1rem" : "1.08rem", color: "var(--text)" }}>
            Απευθύνεστε σε λογιστές και επιχειρήσεις;
          </p>
          <p style={{ margin: "0.35rem 0 0", fontSize: "0.89rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
            Το κοινό σας είναι ήδη εδώ — <strong style={{ color: "var(--text)" }}>20.000+ προβολές τον μήνα</strong> από Έλληνες επαγγελματίες, με μέση επίσκεψη <strong style={{ color: "var(--text)" }}>5,5 λεπτών</strong>.
          </p>
        </div>
        <span className="adslot-cta" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>Δείτε στοιχεία →</span>
      </div>
    </Link>
  );
}
