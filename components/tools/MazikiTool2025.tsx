"use client";

function formatKAD(code: string, dots: boolean): string {
  if (!dots || !code) return code;
  if (code.length !== 7 && code.length !== 8) return code;
  const padded = code.length === 7 ? "0" + code : code;
  const groups: string[] = [];
  for (let i = 0; i < padded.length; i += 2) groups.push(padded.slice(i, i + 2));
  return groups.join(".");
}
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface KadRecord { kad2008: string; kad2025: string; desc2008: string; desc2025: string; }
interface ResultRow { query: string; kad2025: string; desc2025: string; mappings: KadRecord[]; }

export default function MazikiTool2025() {
  const [input, setInput] = useState("");
  const [showDots, setShowDots] = useState(false);
  const [results, setResults] = useState<ResultRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
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
    setLoading(true); setDone(false); setSelected(new Set()); setExpandedRows(new Set());

    const res: KadRecord[] = await fetch("/data/kad.json").then((r) => r.json());
    const map = new Map<string, KadRecord[]>();
    res.forEach((r) => { if (!map.has(r.kad2025)) map.set(r.kad2025, []); map.get(r.kad2025)!.push(r); });

    const findRows = (code: string): ResultRow[] => {
      const cleaned = code.replace(/[^0-9]/g, "");
      if (!cleaned) return [];
      const tryCode = (k: string): ResultRow | null => {
        const found = map.get(k);
        if (!found) return null;
        return { query: code, kad2025: k, desc2025: found[0].desc2025, mappings: found };
      };
      let r = tryCode(cleaned) || tryCode(cleaned.padStart(8, "0"));
      if (r) return [r];
      // Prefix match - all unique kad2025 starting with cleaned
      const seen = new Set<string>();
      const rows: ResultRow[] = [];
      res.forEach((rec) => {
        const stripped = rec.kad2025.replace(/^0+/, "");
        if (!seen.has(rec.kad2025) && (rec.kad2025.startsWith(cleaned) || stripped.startsWith(cleaned))) {
          seen.add(rec.kad2025);
          const group = map.get(rec.kad2025) || [];
          rows.push({ query: code, kad2025: rec.kad2025, desc2025: rec.desc2025, mappings: group });
        }
      });
      return rows.length > 0 ? rows : [{ query: code, kad2025: "", desc2025: "", mappings: [] }];
    };

    const allRows: ResultRow[] = [];
    codes.forEach((code) => allRows.push(...findRows(code)));
    setResults(allRows);
    // Auto-select all rows with changed KADs
    const autoSelected = new Set<string>();
    allRows.forEach((row) => {
      if (row.kad2025 && row.mappings.some((m) => m.kad2008 !== m.kad2025)) {
        autoSelected.add(row.kad2025);
      }
    });
    setSelected(autoSelected);
    setLoading(false); setDone(true);
  };

  const toggleSelect = (kad: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(kad) ? next.delete(kad) : next.add(kad);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === results.filter(r => r.kad2025).length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(results.filter(r => r.kad2025).map(r => r.kad2025)));
    }
  };

  const toggleExpand = (kad: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(kad) ? next.delete(kad) : next.add(kad);
      return next;
    });
  };

  const exportData = async (format: "excel" | "csv") => {
    const selectedRows = results.filter((r) => r.kad2025 && selected.has(r.kad2025));
    // Flatten: one row per mapping
    const flat: string[][] = [["ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025", "ΚΑΔ 2008 (Παλιός)", "Περιγραφή ΚΑΔ 2008", "Κατάσταση"]];
    selectedRows.forEach((row) => {
      if (row.mappings.length === 0) {
        flat.push([row.kad2025, row.desc2025, "", "", "Δεν βρέθηκε αντιστοίχιση"]);
      } else {
        row.mappings.forEach((m) => {
          flat.push([m.kad2025, m.desc2025, m.kad2008, m.desc2008, m.kad2008 === m.kad2025 ? "Αμετάβλητος" : "Άλλαξε"]);
        });
      }
    });
    flat.push([], ["Πηγή: www.kad2025.gr — Αντιστοίχιση ΚΑΔ 2025 & 2008"], ["Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"]);

    if (format === "csv") {
      const csv = flat.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
      const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = "kad2025-antistoixisi.csv"; a.click();
      URL.revokeObjectURL(url);
    } else {
      const XLSX = await import("xlsx");
      const ws = XLSX.utils.aoa_to_sheet(flat);
      ws["!cols"] = [{ wch: 14 }, { wch: 55 }, { wch: 14 }, { wch: 55 }, { wch: 14 }];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "ΚΑΔ 2025");
      XLSX.writeFile(wb, "kad2025-antistoixisi.xlsx");
    }
  };

  const found = results.filter((r) => r.kad2025).length;
  const notFound = results.filter((r) => !r.kad2025).length;
  const changed = results.filter((r) => r.kad2025 && r.mappings.some((m) => m.kad2008 !== m.kad2025)).length;

  return (
    <div>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Εισάγετε ΚΑΔ 2025 (μέχρι 500, έναν ανά γραμμή).{" "}
        <span style={{ color: "#dc2626", fontWeight: 700, textDecoration: "underline" }}>        </span>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={8}
        placeholder={"55200000\n55201901\n5520"}
        style={{ width: "100%", padding: "0.75rem", borderRadius: 8, border: "2px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.9rem", resize: "vertical", outline: "none" }}
      />

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem", marginBottom: "1.5rem" }}>
        <button className="btn btn-primary" onClick={runBulk} disabled={loading || !input.trim()} style={{ opacity: loading || !input.trim() ? 0.6 : 1 }}>
          {loading ? "⏳ Αναζήτηση..." : "🔍 Εκτέλεση Μαζικής Αντιστοίχισης"}
        </button>
        {done && selected.size > 0 && (
          <>
            <button className="btn" onClick={() => exportData("excel")} style={{ background: "#16a34a", color: "white", border: "none" }}>
              📊 Excel ({selected.size})
            </button>
            <button className="btn btn-ghost" onClick={() => exportData("csv")}>
              📄 CSV ({selected.size})
            </button>
          </>
        )}
        {done && (
          <button className="btn btn-ghost" onClick={() => { setInput(""); setResults([]); setDone(false); }}>
            🗑 Καθαρισμός
          </button>
        )}
      </div>

      {done && (
        <>
          {/* Summary */}
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
              { label: "Με αλλαγή", value: changed, color: "var(--accent)" },
              { label: "Δεν βρέθηκαν", value: notFound, color: "var(--danger)" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Results table */}
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            {/* Table header with select all */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "var(--bg)", borderBottom: "2px solid var(--border)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)" }}>
              <input type="checkbox" checked={selected.size > 0 && selected.size === found}
                onChange={toggleAll} style={{ width: 16, height: 16, cursor: "pointer" }} />
              <span>✅ ΚΑΔ 2025 (Νέος κωδικός)</span>
              <span style={{ flex: 1 }}>Περιγραφή ΚΑΔ 2025</span>
              <span>📋 Παλιοί ΚΑΔ 2008</span>
              <span style={{ minWidth: 80, textAlign: "right" }}>Κατάσταση</span>
            </div>

            {results.map((row, i) => {
              const isSelected = selected.has(row.kad2025);
              const isExpanded = expandedRows.has(row.kad2025);
              const hasChange = row.mappings.some((m) => m.kad2008 !== m.kad2025);
              const isUnchanged = row.mappings.length > 0 && !hasChange;
              const notFoundRow = !row.kad2025;

              return (
                <div key={`${row.kad2025}-${i}`} style={{ borderBottom: "1px solid var(--border)", background: isSelected ? "rgba(var(--primary-rgb, 30,58,95),0.04)" : "transparent" }}>
                  {/* Main row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.65rem 1rem" }}>
                    <input type="checkbox" checked={isSelected} disabled={notFoundRow}
                      onChange={() => toggleSelect(row.kad2025)} style={{ width: 16, height: 16, cursor: notFoundRow ? "default" : "pointer" }} />

                    {notFoundRow ? (
                      <>
                        <span style={{ fontFamily: "monospace", fontSize: "0.82rem", color: "var(--danger)" }}>{row.query}</span>
                        <span style={{ flex: 1, fontSize: "0.82rem", color: "var(--danger)" }}>❌ Δεν βρέθηκε</span>
                      </>
                    ) : (
                      <>
                        {ssgCodes.has(row.kad2025) ? (
                          <Link href={`/kad/${row.kad2025}`} style={{ textDecoration: "none" }}>
                            <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem" }}>{formatKAD(row.kad2025, showDots)}</span>
                          </Link>
                        ) : (
                          <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem" }}>{formatKAD(row.kad2025, showDots)}</span>
                        )}
                        <span style={{ flex: 1, fontSize: "0.82rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {row.desc2025.slice(0, 60)}{row.desc2025.length > 60 ? "…" : ""}
                        </span>

                        {/* Mappings summary */}
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", minWidth: 140 }}>
                          {row.mappings.length === 0 ? (
                            <span style={{ color: "var(--danger)" }}>—</span>
                          ) : (
                            <button onClick={() => toggleExpand(row.kad2025)}
                              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--primary)", fontSize: "0.78rem", fontWeight: 600, padding: 0 }}>
                              {isExpanded ? "▲" : "▼"} {row.mappings.length} παλιοί ΚΑΔ 2008
                            </button>
                          )}
                        </div>

                        <span style={{ minWidth: 80, textAlign: "right", fontSize: "0.78rem", fontWeight: 700,
                          color: isUnchanged ? "var(--success)" : "var(--accent)" }}>
                          {isUnchanged ? "≡ Αμετάβλητος" : "→ Άλλαξε"}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Expanded mappings */}
                  {isExpanded && row.mappings.length > 0 && (
                    <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "0.5rem 1rem 0.75rem 3rem" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                        Παλιοί ΚΑΔ 2008 → αυτόν τον ΚΑΔ 2025:
                      </div>
                      {row.mappings.map((m) => (
                        <div key={m.kad2008} style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.3rem 0", borderBottom: "1px dashed var(--border)", fontSize: "0.8rem" }}>
                          {ssgCodes.has(m.kad2008) ? (
                            <Link href={`/kad/${m.kad2008}`} style={{ textDecoration: "none" }}>
                              <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.7rem" }}>{m.kad2008}</span>
                            </Link>
                          ) : (
                            <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.7rem" }}>{m.kad2008}</span>
                          )}
                          <span style={{ flex: 1, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {m.desc2008.slice(0, 70)}{m.desc2008.length > 70 ? "…" : ""}
                          </span>
                          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: m.kad2008 === m.kad2025 ? "var(--success)" : "var(--accent)" }}>
                            {m.kad2008 === m.kad2025 ? "≡" : "→ " + m.kad2025}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {done && (
            <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              ✅ Επιλέξτε γραμμές με το τικ → εξάγετε σε Excel/CSV | Κλικ στο "▼ X παλ. ΚΑΔ" για λεπτομέρειες αντιστοίχισης
            </div>
          )}
        </>
      )}
    </div>
  );
}
