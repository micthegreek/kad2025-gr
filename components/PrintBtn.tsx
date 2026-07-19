"use client";
export default function PrintBtn() {
  return (
    <button onClick={() => { if (typeof window !== "undefined") { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "print_card"); window.print(); } }} className="chip no-print" style={{ padding: "0.2rem 0.7rem", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg)", cursor: "pointer", fontSize: "0.78rem" }}>
      🖨 Εκτύπωση κάρτας
    </button>
  );
}
