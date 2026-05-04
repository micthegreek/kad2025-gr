"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface SavedKad { code: string; desc: string; savedAt: string; }

export default function SavedKadClient() {
  const [list, setList] = useState<SavedKad[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("saved-kads") || "[]");
      setList(raw.sort((a: SavedKad, b: SavedKad) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()));
    } catch {}
    setLoaded(true);
  }, []);

  const remove = (code: string) => {
    const updated = list.filter(k => k.code !== code);
    setList(updated);
    localStorage.setItem("saved-kads", JSON.stringify(updated));
  };

  const clearAll = () => { setList([]); localStorage.removeItem("saved-kads"); };

  if (!loaded) return <div style={{ color: "var(--text-muted)" }}>Φόρτωση...</div>;

  if (list.length === 0) return (
    <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>☆</div>
      <h2 style={{ marginBottom: "0.5rem" }}>Δεν έχετε αποθηκεύσει ΚΑΔ ακόμα</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Ανοίξτε οποιαδήποτε σελίδα ΚΑΔ και πατήστε "Αποθήκευση".
      </p>
      <Link href="/antistoixisi" className="btn btn-primary">Αναζήτηση ΚΑΔ →</Link>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{list.length} αποθηκευμένοι ΚΑΔ</span>
        <button onClick={clearAll} style={{ background: "none", border: "none", color: "#dc2626", cursor: "pointer", fontSize: "0.8rem" }}>Διαγραφή όλων</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {list.map(k => (
          <div key={k.code} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-primary)" }}>
            <div style={{ flex: 1 }}>
              <Link href={`/kad/${k.code}`} style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--primary)", textDecoration: "none", fontSize: "1rem" }}>
                {k.code}
              </Link>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{k.desc}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                Αποθηκεύτηκε: {new Date(k.savedAt).toLocaleDateString("el-GR")}
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
              <Link href={`/antistoixisi?q=${k.code}`} className="btn btn-ghost" style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem" }}>Αντιστοίχιση</Link>
              <button onClick={() => remove(k.code)} style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "0.3rem 0.6rem", cursor: "pointer", color: "var(--text-muted)", fontSize: "0.75rem" }}>✕</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem", padding: "1rem", background: "var(--bg-secondary)", borderRadius: "var(--radius)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
        💡 Τα αποθηκευμένα ΚΑΔ αποθηκεύονται μόνο στον browser σας. Αν σβήσετε cookies/cache, θα χαθούν.
      </div>
    </div>
  );
}
