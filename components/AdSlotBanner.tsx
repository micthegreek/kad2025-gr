"use client";
import Link from "next/link";

/**
 * v129 — «Η θέση που μιλάει»
 * Δείχνει ακριβώς πώς θα φαινόταν μια διαφήμιση σε αυτό το σημείο,
 * με το νούμερο που τη δικαιολογεί τη στιγμή της έκθεσης.
 * variant="inline"  → μετά τα αποτελέσματα (4 σελίδες υψηλής κίνησης)
 * variant="compact" → σελίδες κλάδων / άρθρα
 * variant="footer"  → μία γραμμή, όλο το site
 */
export default function AdSlotBanner({ variant = "inline" }: { variant?: "inline" | "compact" | "footer" }) {
  const track = () => {
    if (typeof window !== "undefined")
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "adslot_click", { variant });
  };

  if (variant === "footer") {
    return (
      <Link
        href="/diafimisi"
        onClick={track}
        className="no-print"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
          flexWrap: "wrap", padding: "0.7rem 1rem", margin: "1.5rem 0 0",
          border: "1px dashed var(--border)", borderRadius: 10,
          fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none",
          background: "transparent",
        }}
      >
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "var(--primary)" }}>Διαθέσιμη θέση</span>
        <span>Απευθύνεστε σε λογιστές και επιχειρήσεις; Το κοινό σας είναι ήδη εδώ.</span>
        <span style={{ fontWeight: 700, color: "var(--text)" }}>Δείτε στοιχεία →</span>
      </Link>
    );
  }

  const compact = variant === "compact";
  return (
    <Link
      href="/diafimisi"
      onClick={track}
      className="adslot no-print"
      style={{
        display: "block", textDecoration: "none",
        margin: compact ? "1.25rem 0" : "1.5rem 0",
        padding: compact ? "0.9rem 1.1rem" : "1.15rem 1.35rem",
        border: "1.5px dashed var(--border)", borderRadius: 14,
        background: "var(--bg-card)", position: "relative",
        transition: "border-color .25s, transform .25s",
      }}
    >
      <span
        style={{
          position: "absolute", top: -9, left: 16, background: "var(--bg)",
          padding: "0 0.5rem", fontSize: "0.65rem", fontWeight: 800,
          letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)",
        }}
      >
        Διαθέσιμη διαφημιστική θέση
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: compact ? "0.95rem" : "1.02rem", color: "var(--text)" }}>
            Απευθύνεστε σε λογιστές και επιχειρήσεις;
          </p>
          <p style={{ margin: "0.3rem 0 0", fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            Το κοινό σας είναι ήδη εδώ — <strong style={{ color: "var(--text)" }}>20.000+ προβολές τον μήνα</strong> από
            Έλληνες επαγγελματίες, με μέση επίσκεψη <strong style={{ color: "var(--text)" }}>5,5 λεπτών</strong>.
          </p>
        </div>
        <span
          style={{
            flexShrink: 0, padding: "0.6rem 1.1rem", borderRadius: 9,
            background: "var(--primary)", color: "#fff", fontWeight: 700,
            fontSize: "0.87rem", whiteSpace: "nowrap",
          }}
        >
          Δείτε στοιχεία →
        </span>
      </div>
    </Link>
  );
}
