"use client";
import { useEffect, useState } from "react";

type Exc = { x: string; see: string[] };
type Note = { t: string; inc: string[]; also: string[]; exc: Exc[] };

const cache = new Map<string, Promise<Record<string, Note>>>();
function loadDivision(dd: string): Promise<Record<string, Note>> {
  if (!cache.has(dd)) {
    cache.set(
      dd,
      fetch(`/data/notes/${dd}.json`)
        .then((r) => (r.ok ? r.json() : {}))
        .catch(() => ({}))
    );
  }
  return cache.get(dd)!;
}

export default function NaceNotesPanel({
  code2025,
  defaultOpen = false,
  onSeeRef,
}: {
  code2025: string;
  defaultOpen?: boolean;
  onSeeRef?: (q: string) => void;
}) {
  const [note, setNote] = useState<Note | null>(null);
  const [cls, setCls] = useState<string>("");
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    const p8 = code2025.padStart(8, "0");
    const dd = p8.slice(0, 2);
    const classCode = `${dd}.${p8.slice(2, 4)}`;
    const groupCode = `${dd}.${p8[2]}`;
    let alive = true;
    loadDivision(dd).then((div) => {
      if (!alive) return;
      const n = div[classCode] || div[groupCode] || null;
      if (n && (n.inc.length || n.also.length || n.exc.length)) {
        setNote(n);
        setCls(div[classCode] ? classCode : groupCode);
      }
    });
    return () => {
      alive = false;
    };
  }, [code2025]);

  if (!note) return null;

  const chip = (c: string) => (
    <button
      key={c}
      onClick={(e) => {
        e.preventDefault();
        onSeeRef?.(c.replace(".", ""));
      }}
      className="chip"
      style={{ fontSize: "0.72rem", padding: "0.1rem 0.5rem", marginLeft: "0.35rem", cursor: "pointer", border: "1px solid var(--border)", background: "var(--bg)", borderRadius: 12 }}
      title={`Αναζήτηση τάξης ${c}`}
    >
      → {c}
    </button>
  );

  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      style={{
        margin: "-0.35rem 0 0",
        padding: "0.55rem 0.9rem 0.65rem",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderTop: "1px dashed var(--border)",
        borderRadius: "0 0 10px 10px",
        fontSize: "0.86rem",
      }}
    >
      <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "0.82rem", color: "var(--text-muted)", userSelect: "none" }}>
        📖 Επίσημες επεξηγήσεις — Τι περιλαμβάνει η τάξη {cls} «{note.t}»
      </summary>
      <div style={{ marginTop: "0.55rem", display: "grid", gap: "0.55rem" }}>
        {note.inc.length > 0 && (
          <div>
            <div style={{ fontWeight: 700, color: "var(--success)", fontSize: "0.78rem", marginBottom: "0.2rem" }}>✅ Περιλαμβάνει</div>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.15rem" }}>
              {note.inc.slice(0, 8).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
            {note.inc.length > 8 && (
              <details style={{ marginTop: "0.2rem" }}>
                <summary style={{ cursor: "pointer", fontSize: "0.78rem", color: "var(--text-muted)" }}>+ {note.inc.length - 8} ακόμη</summary>
                <ul style={{ margin: "0.2rem 0 0", paddingLeft: "1.1rem", display: "grid", gap: "0.15rem" }}>
                  {note.inc.slice(8).map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}
        {note.also.length > 0 && (
          <div>
            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.78rem", marginBottom: "0.2rem" }}>➕ Περιλαμβάνει επίσης</div>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.15rem" }}>
              {note.also.slice(0, 6).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        )}
        {note.exc.length > 0 && (
          <div>
            <div style={{ fontWeight: 700, color: "var(--acc-red, #d9534f)", fontSize: "0.78rem", marginBottom: "0.2rem" }}>🚫 Δεν περιλαμβάνει (ταξινομείται αλλού)</div>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.2rem" }}>
              {note.exc.slice(0, 8).map((e, i) => (
                <li key={i}>
                  {e.x}
                  {e.see.map(chip)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
          Πηγή: Επεξηγηματικές Σημειώσεις ΣΤΑΚΟΔ/NACE Αναθ. 2.1 (ΕΛΣΤΑΤ, Έκδ. 1.05)
        </div>
      </div>
    </details>
  );
}
