"use client";
export default function PrintResultsButton({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <button onClick={() => window.print()}
      style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 0.85rem", border: "1px solid var(--border)", borderRadius: 6, background: "var(--bg-primary)", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.8rem", fontWeight: 500 }}>
      🖨️ Εκτύπωση ({count})
    </button>
  );
}
