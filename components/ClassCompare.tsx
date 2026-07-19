"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Note = { t: string; inc: string[]; also: string[]; exc: { x: string; see: string[] }[] };
const cache = new Map<string, Promise<Record<string, Note>>>();
function loadDiv(dd: string) {
  if (!cache.has(dd)) cache.set(dd, fetch(`/data/notes/${dd}.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({})));
  return cache.get(dd)!;
}
function normClass(input: string): string | null {
  const d = input.replace(/[^0-9]/g, "");
  if (d.length < 3) return null;
  const p = d.length >= 4 ? d.slice(0, 4) : d.padEnd(4, "0").slice(0, 4);
  return `${p.slice(0, 2)}.${p.slice(2, 4)}`;
}

function Column({ code }: { code: string }) {
  const [note, setNote] = useState<Note | null | undefined>(undefined);
  const [cls, setCls] = useState("");
  useEffect(() => {
    const c = normClass(code);
    if (!c) { setNote(null); return; }
    let ok = true;
    loadDiv(c.slice(0, 2)).then((div) => {
      if (!ok) return;
      const n = div[c] || div[`${c.slice(0, 2)}.${c[3] === "0" ? c[3] : c.slice(3, 4)}`] || div[c.slice(0, 4)] || null;
      const found = div[c] ? c : Object.keys(div).find((k) => k === c.slice(0, 4)) || c;
      setCls(div[c] ? c : found);
      setNote(div[c] || div[found] || null);
    });
    return () => { ok = false; };
  }, [code]);

  if (note === undefined) return <div style={{ padding: "1rem", color: "var(--text-muted)" }}>Φόρτωση…</div>;
  if (!note) return <div style={{ padding: "1rem", color: "var(--text-muted)" }}>Δεν βρέθηκε τάξη για «{code}» — δοκιμάστε 4ψήφιο (π.χ. 5520) ή 8ψήφιο κωδικό.</div>;
  return (
    <div>
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.02rem" }}>
        Τάξη {cls} — {note.t}{" "}
        <Link href={`/kad-2025?q=${cls.replace(".", "")}`} style={{ fontSize: "0.78rem", fontWeight: 700 }}>8ψήφιοι →</Link>
      </h3>
      {note.inc.length > 0 && (<>
        <div style={{ fontWeight: 700, color: "var(--success)", fontSize: "0.78rem" }}>✅ Περιλαμβάνει</div>
        <ul style={{ margin: "0.2rem 0 0.7rem", paddingLeft: "1.1rem", fontSize: "0.85rem", display: "grid", gap: "0.15rem" }}>
          {note.inc.slice(0, 6).map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </>)}
      {note.also.length > 0 && (<>
        <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.78rem" }}>➕ Επίσης</div>
        <ul style={{ margin: "0.2rem 0 0.7rem", paddingLeft: "1.1rem", fontSize: "0.85rem", display: "grid", gap: "0.15rem" }}>
          {note.also.slice(0, 3).map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </>)}
      {note.exc.length > 0 && (<>
        <div style={{ fontWeight: 700, color: "var(--acc-red, #d9534f)", fontSize: "0.78rem" }}>🚫 Δεν περιλαμβάνει</div>
        <ul style={{ margin: "0.2rem 0 0.4rem", paddingLeft: "1.1rem", fontSize: "0.85rem", display: "grid", gap: "0.18rem" }}>
          {note.exc.slice(0, 6).map((e, i) => <li key={i}>{e.x}{e.see.length > 0 && <span style={{ color: "var(--text-muted)" }}> → {e.see.join(", ")}</span>}</li>)}
        </ul>
      </>)}
    </div>
  );
}

function CompareInner() {
  const sp = useSearchParams();
  const [a, setA] = useState(sp.get("a") || "");
  const [b, setB] = useState(sp.get("b") || "");
  const [go, setGo] = useState(Boolean(sp.get("a") && sp.get("b")));

  const run = () => {
    if (!a.trim() || !b.trim()) return;
    setGo(true);
    if (typeof window !== "undefined") {
      const u = new URL(window.location.href);
      u.searchParams.set("a", a.replace(/[^0-9]/g, "")); u.searchParams.set("b", b.replace(/[^0-9]/g, ""));
      window.history.replaceState(null, "", u.toString());
      (window as unknown as { gtag?: (...x: unknown[]) => void }).gtag?.("event", "class_compare", { a: normClass(a), b: normClass(b) });
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center", marginBottom: "1rem" }}>
        <input value={a} onChange={(e) => setA(e.target.value)} aria-label="Πρώτος κωδικός ΚΑΔ ή τάξη" placeholder="Α: π.χ. 5520" inputMode="numeric" style={{ flex: "1 1 140px", padding: "0.6rem 0.8rem", border: "1.5px solid var(--border)", borderRadius: 10, fontSize: "1rem", background: "var(--bg)", color: "var(--text)" }} />
        <span style={{ fontWeight: 800 }}>vs</span>
        <input value={b} onChange={(e) => setB(e.target.value)} aria-label="Δεύτερος κωδικός ΚΑΔ ή τάξη" placeholder="Β: π.χ. 6820" inputMode="numeric" style={{ flex: "1 1 140px", padding: "0.6rem 0.8rem", border: "1.5px solid var(--border)", borderRadius: 10, fontSize: "1rem", background: "var(--bg)", color: "var(--text)" }} onKeyDown={(e) => e.key === "Enter" && run()} />
        <button onClick={run} style={{ padding: "0.6rem 1.1rem", border: "none", borderRadius: 10, background: "var(--primary)", color: "white", fontWeight: 800, cursor: "pointer", fontSize: "0.95rem" }}>Σύγκριση</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem", fontSize: "0.8rem" }}>
        Δημοφιλείς:{" "}
        {[["5520", "6820", "Airbnb vs Εκμίσθωση"], ["6210", "5829", "Custom vs Εκδόσεις SW"], ["9313", "8551", "Γυμναστήριο vs Trainer"], ["4321", "4222", "Ηλεκτρολόγος vs Πάρκα"]].map(([x, y, l]) => (
          <button key={l} onClick={() => { setA(x); setB(y); setGo(true); }} className="chip" style={{ padding: "0.25rem 0.7rem", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg)", cursor: "pointer", fontSize: "0.78rem" }}>{l}</button>
        ))}
      </div>
      {go && a && b && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1rem" }}>
          <div className="card" style={{ padding: "1rem" }}><Column code={a} /></div>
          <div className="card" style={{ padding: "1rem" }}><Column code={b} /></div>
        </div>
      )}
    </div>
  );
}

export default function ClassCompare() {
  return (
    <Suspense fallback={<div style={{ padding: "1rem", color: "var(--text-muted)" }}>Φόρτωση…</div>}>
      <CompareInner />
    </Suspense>
  );
}
