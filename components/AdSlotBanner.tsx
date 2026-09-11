"use client";
import Link from "next/link";

/**
 * v133 — Διαφημιστική θέση.
 * variant="rail"    → σταθερή δεξιά στήλη σε ευρείες οθόνες (≥1400px)
 * variant="inline"  → μετά τα αποτελέσματα· μόνο <1400px
 * variant="compact" → σελίδες κλάδων / άρθρα
 * variant="footer"  → μία γραμμή, όλο το site
 */
export default function AdSlotBanner({ variant = "inline" }: { variant?: "inline" | "compact" | "footer" | "rail" }) {
  const track = () => {
    if (typeof window !== "undefined")
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "adslot_click", { variant });
  };

  const LABEL = (
    <span className="adslot-label">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M3 11v2a1 1 0 0 0 1 1h2l3.5 4.5a1 1 0 0 0 1.8-.6V6.1a1 1 0 0 0-1.8-.6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6.5a8 8 0 0 1 0 11"/></svg>
      Διαθέσιμη διαφημιστική θέση
    </span>
  );
  const TITLE = "Θέλετε να προβληθείτε εδώ;";
  const SUB = "Στοχευμένη επικοινωνία με επιχειρηματικό κοινό.";
  const BODY = "Το kad2025.gr προσφέρει περιορισμένες θέσεις προβολής για επιχειρήσεις που απευθύνονται σε λογιστές, επιχειρήσεις, νέους επιχειρηματίες, συμβούλους επιχειρήσεων κ.ά.";
  const CTA = "Δείτε στοιχεία & διαθεσιμότητα →";

  if (variant === "footer") {
    return (
      <Link href="/diafimisi" onClick={track} className="adslot-footer no-print">
        {LABEL}
        <span style={{ fontWeight: 800, color: "var(--text)" }}>{TITLE}</span>
        <span style={{ color: "var(--text-muted)" }}>{SUB}</span>
        <span style={{ fontWeight: 800, color: "var(--ad-accent)" }}>{CTA}</span>
      </Link>
    );
  }

  if (variant === "rail") {
    return (
      <aside className="adslot-rail no-print" aria-label="Διαφημιστική θέση">
        <Link href="/diafimisi" onClick={track} className="adslot-box" style={{ display: "block", textDecoration: "none" }}>
          <div style={{ textAlign: "center", marginBottom: "0.8rem" }}>{LABEL}</div>
          <p style={{ margin: "0 0 0.35rem", fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.3, color: "var(--text)" }}>{TITLE}</p>
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.84rem", fontWeight: 700, color: "var(--ad-accent-dark)", lineHeight: 1.4 }}>{SUB}</p>
          <p style={{ margin: "0 0 0.9rem", fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{BODY}</p>
          <span className="adslot-cta" style={{ display: "block", textAlign: "center", fontSize: "0.85rem" }}>{CTA}</span>
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
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: compact ? "1.02rem" : "1.1rem", color: "var(--text)" }}>{TITLE}</p>
          <p style={{ margin: "0.25rem 0 0", fontSize: "0.9rem", fontWeight: 700, color: "var(--ad-accent-dark)" }}>{SUB}</p>
          <p style={{ margin: "0.35rem 0 0", fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{BODY}</p>
        </div>
        <span className="adslot-cta" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>{CTA}</span>
      </div>
    </Link>
  );
}
