"use client";

function formatKAD(code: string, dots: boolean): string {
  if (!dots || !code) return code;
  if (code.length !== 7 && code.length !== 8) return code;
  const padded = code.length === 7 ? "0" + code : code;
  const groups: string[] = [];
  for (let i = 0; i < padded.length; i += 2) groups.push(padded.slice(i, i + 2));
  return groups.join(".");
}
import { useState, useEffect } from "react";
import Link from "next/link";

interface KadRecord { kad2008: string; kad2025: string; desc2008: string; desc2025: string; }
interface ResultRow { query: string; kad2008: string; desc2008: string; kad2025: string; desc2025: string; found: boolean; }

export default function MazikiTool2008() {
  const [input, setInput] = useState("");
  const [showDots, setShowDots] = useState(false);
  const [results, setResults] = useState<ResultRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // v60b: SSG codes for safe linking
  const [ssgCodes, setSsgCodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch("/data/ssg_codes.json").then((r) => r.json()).then((codes: string[]) => {
      setSsgCodes(new Set(codes));
    }).catch(() => { /* silently fail */ });
  }, []);

  const runBulk = async () => {
    const codes = input.split(/[\n,;]+/).map((s) => s.trim().replace(/\./g, "")).filter((s) => s.length > 0);
    if (!codes.length) return;
    if (codes.length > 500) { alert("Μέγιστο 500 ΚΑΔ ανά αναζήτηση"); return; }
    setLoading(true); setDone(false); setSelected(new Set());

    const res: KadRecord[] = await fetch("/data/kad.json").then((r) => r.json());

    const findAll = (code: string): KadRecord[] => {
      const cleaned = code.replace(/[^0-9]/g, "");
      if (!cleaned) return [];
      // Exact match
      const exact = res.filter((r) => r.kad2008 === cleaned || r.kad2008 === cleaned.padStart(8, "0"));
      if (exact.length > 0) return exact;
      // Prefix match — all unique kad2008 starting with cleaned
      const seen = new Set<string>();
      const matches: KadRecord[] = [];
      res.forEach((r) => {
        const stripped = r.kad2008.replace(/^0+/, "");
        if (!seen.has(r.kad2008) && (r.kad2008.startsWith(cleaned) || stripped.startsWith(cleaned))) {
          seen.add(r.kad2008);
          matches.push(r);
        }
      });
      return matches;
    };

    const rows: ResultRow[] = [];
    codes.forEach((code) => {
      const matches = findAll(code);
      if (matches.length === 0) {
        rows.push({ query: code, kad2008: "", desc2008: "", kad2025: "", desc2025: "", found: false });
      } else {
        matches.forEach((m) => rows.push({ query: code, kad2008: m.kad2008, desc2008: m.desc2008, kad2025: m.kad2025, desc2025: m.desc2025, found: true }));
      }
    });

    setResults(rows);
    // Auto-select changed
    const autoSel = new Set<string>();
    rows.forEach((r) => { if (r.found && r.kad2008 !== r.kad2025) autoSel.add(r.kad2008); });
    setSelected(autoSel);
    setLoading(false); setDone(true);
  };

  const toggleSelect = (kad: string) => {
    setSelected((prev) => { const n = new Set(prev); n.has(kad) ? n.delete(kad) : n.add(kad); return n; });
  };
  const toggleAll = () => {
    const allFound = results.filter(r => r.found).map(r => r.kad2008);
    setSelected(selected.size === allFound.length ? new Set() : new Set(allFound));
  };

  const exportData = async (format: "excel" | "csv") => {
    const rows = results.filter((r) => r.found && selected.has(r.kad2008));
    const flat = [
      ["ΚΑΔ 2008 (Παλιός)", "Περιγραφή ΚΑΔ 2008", "ΚΑΔ 2025 (Νέος)", "Περιγραφή ΚΑΔ 2025", "Κατάσταση"],
      ...rows.map((r) => [r.kad2008, r.desc2008, r.kad2025, r.desc2025, r.kad2008 === r.kad2025 ? "Αμετάβλητος" : "Άλλαξε"]),
      [], ["Πηγή: www.kad2025.gr"], ["Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
    if (format === "csv") {
      const csv = flat.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
      const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "kad2008-antistoixisi.csv"; a.click();
    } else {
      const XLSX = await import("xlsx");
      const ws = XLSX.utils.aoa_to_sheet(flat);
      ws["!cols"] = [{ wch: 14 }, { wch: 55 }, { wch: 14 }, { wch: 55 }, { wch: 14 }];
      const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "ΚΑΔ 2008"); XLSX.writeFile(wb, "kad2008-antistoixisi.xlsx");
    }
  };

  const found = results.filter(r => r.found).length;
  const notFound = results.filter(r => !r.found).length;
  const changed = results.filter(r => r.found && r.kad2008 !== r.kad2025).length;
  const unchanged = results.filter(r => r.found && r.kad2008 === r.kad2025).length;

  return (
    <div>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Εισάγετε ΚΑΔ 2008 (μέχρι 500, έναν ανά γραμμή).{" "}
        <span style={{ color: "#dc2626", fontWeight: 700, textDecoration: "underline" }}>        </span>
      </div>
      <textarea
        value={input} onChange={(e) => setInput(e.target.value)} rows={8}
        placeholder={"55100000\n55101001\n5510"}
        style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "2px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.9rem", resize: "vertical", outline: "none" }}
      />

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem", marginBottom: "1.5rem" }}>
        <button className="btn btn-primary" onClick={runBulk} disabled={loading || !input.trim()} style={{ opacity: loading || !input.trim() ? 0.6 : 1 }}>
          {loading ? "⏳ Αναζήτηση..." : "🔍 Εκτέλεση Μαζικής Αντιστοίχισης"}
        </button>
        {done && selected.size > 0 && (
          <>
            <button className="btn" onClick={() => exportData("excel")} style={{ background: "#16a34a", color: "white", border: "none" }}>📊 Excel ({selected.size})</button>
            <button className="btn btn-ghost" onClick={() => exportData("csv")}>📄 CSV ({selected.size})</button>
          </>
        )}
        {done && <button className="btn btn-ghost" onClick={() => { setInput(""); setResults([]); setDone(false); }}>🗑 Καθαρισμός</button>}
      </div>

      {done && (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)", cursor: "pointer" }}>
              <input type="checkbox" checked={showDots} onChange={e => setShowDots(e.target.checked)} />
              Εμφάνιση Αποτελεσμάτων με τελείες (πχ 55.20)
            </label>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {[
              { label: "Σύνολο", value: results.length, color: "var(--primary)" },
              { label: "Βρέθηκαν", value: found, color: "var(--success)" },
              { label: "Άλλαξαν ΚΑΔ", value: changed, color: "var(--accent)" },
              { label: "Αμετάβλητοι", value: unchanged, color: "var(--success)" },
              { label: "Δεν βρέθηκαν", value: notFound, color: "var(--danger)" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 1fr 110px", gap: "0.5rem", alignItems: "center", padding: "0.75rem 1rem", background: "#1e3a5f", color: "white", fontSize: "0.78rem", fontWeight: 700 }}>
              <input type="checkbox" checked={selected.size > 0 && selected.size === found} onChange={toggleAll} style={{ width: 16, height: 16, cursor: "pointer" }} />
              <span>📋 ΚΑΔ 2008 (Παλιός κωδικός)</span>
              <span>✅ ΚΑΔ 2025 (Νέος κωδικός)</span>
              <span style={{ textAlign: "right" }}>Κατάσταση</span>
            </div>

            {results.map((row, i) => {
              const isSelected = row.found && selected.has(row.kad2008);
              const changed = row.found && row.kad2008 !== row.kad2025;
              return (
                <div key={`${row.kad2008}-${i}`} style={{ display: "grid", gridTemplateColumns: "32px 1fr 1fr 110px", gap: "0.5rem", alignItems: "start", padding: "0.65rem 1rem", borderBottom: "1px solid var(--border)", background: isSelected ? "rgba(30,58,95,0.04)" : "transparent" }}>
                  <input type="checkbox" checked={isSelected} disabled={!row.found} onChange={() => toggleSelect(row.kad2008)} style={{ width: 16, height: 16, marginTop: 4, cursor: row.found ? "pointer" : "default" }} />

                  {!row.found ? (
                    <>
                      <span style={{ fontSize: "0.82rem", color: "var(--danger)", fontFamily: "monospace" }}>❌ {row.query} — Δεν βρέθηκε</span>
                      <span /><span />
                    </>
                  ) : (
                    <>
                      {/* OLD KAD */}
                      <div>
                        {ssgCodes.has(row.kad2008) ? (
                          <Link href={`/kad/${row.kad2008}`} style={{ textDecoration: "none" }}>
                            <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.72rem", display: "inline-block", marginBottom: "0.25rem" }}>{formatKAD(row.kad2008, showDots)}</span>
                          </Link>
                        ) : (
                          <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.72rem", display: "inline-block", marginBottom: "0.25rem" }}>{formatKAD(row.kad2008, showDots)}</span>
                        )}
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{row.desc2008.slice(0, 70)}{row.desc2008.length > 70 ? "…" : ""}</div>
                      </div>
                      {/* NEW KAD */}
                      <div>
                        {ssgCodes.has(row.kad2025) ? (
                          <Link href={`/kad/${row.kad2025}`} style={{ textDecoration: "none" }}>
                            <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", display: "inline-block", marginBottom: "0.25rem" }}>{formatKAD(row.kad2025, showDots)}</span>
                          </Link>
                        ) : (
                          <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", display: "inline-block", marginBottom: "0.25rem" }}>{formatKAD(row.kad2025, showDots)}</span>
                        )}
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{row.desc2025.slice(0, 70)}{row.desc2025.length > 70 ? "…" : ""}</div>
                      </div>
                      {/* STATUS */}
                      <div style={{ textAlign: "right", fontSize: "0.78rem", fontWeight: 700, color: changed ? "var(--accent)" : "var(--success)", paddingTop: 2 }}>
                        {changed ? "→ Άλλαξε" : "≡ Αμετάβλητος"}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            ✅ Επιλέξτε γραμμές με το τικ → εξάγετε σε Excel/CSV
          </div>
        </>
      )}
    </div>
  );
}
