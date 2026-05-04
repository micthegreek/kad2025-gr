"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { trackKadSearch, trackCsvExport, trackExcelExport } from "@/lib/ga4";

interface KadRecord {
  kad2008: string;
  kad2025: string;
  desc2008: string;
  desc2025: string;
}

interface SearchProps {
  mode: "kad2008" | "kad2025" | "antistoixisi-2008" | "antistoixisi-2025";
  initialQuery?: string;
  initialData?: KadRecord[];
}

// Normalize: remove Greek accents + dots + lowercase so "εστιατόριο" matches "ΕΣΤΙΑΤΟΡΙΟ"
function normalizeStr(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove accent marks
    .replace(/\./g, "")              // remove dots (55.20 → 5520)
    .toLowerCase()
    .trim();
}

function highlight(text: string, query: string) {
  if (!query || query.length < 2) return text;
  try {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((p) => p.toLowerCase() === query.toLowerCase() ? `<mark>${p}</mark>` : p).join("");
  } catch { return text; }
}

function copyToClipboard(text: string, setCopied: (v: string) => void) {
  navigator.clipboard.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(""), 2000); });
}

function exportCSV(results: KadRecord[], mode: string) {
  let rows: (string | undefined)[][];
  if (mode === "kad2008") {
    rows = [
      ["ΚΑΔ 2008", "Περιγραφή ΚΑΔ 2008"],
      ...results.map((r) => [r.kad2008, r.desc2008]),
      [],
      ["Πηγή: www.kad2025.gr — Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
  } else if (mode === "kad2025") {
    rows = [
      ["ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025"],
      ...results.map((r) => [r.kad2025, r.desc2025]),
      [],
      ["Πηγή: www.kad2025.gr — Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
  } else {
    rows = [
      ["ΚΑΔ 2008", "Περιγραφή ΚΑΔ 2008", "ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025", "Κατάσταση"],
      ...results.map((r) => [r.kad2008, r.desc2008, r.kad2025, r.desc2025, r.kad2008 === r.kad2025 ? "Αμετάβλητος" : "Άλλαξε"]),
      [],
      ["Πηγή: www.kad2025.gr — Αντιστοίχιση ΚΑΔ 2008 & 2025 | Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
  }
  const csv = "\uFEFF" + rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "kad-kad2025gr.csv"; a.click();
}

async function exportExcel(results: KadRecord[], mode: string) {
  const XLSX = await import("xlsx");
  let wsData: (string | undefined)[][];
  let filename: string;
  if (mode === "kad2008") {
    wsData = [
      ["ΚΑΔ 2008", "Περιγραφή ΚΑΔ 2008"],
      ...results.map((r) => [r.kad2008, r.desc2008]),
      [],
      ["Πηγή: www.kad2025.gr"],
      ["Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
    filename = "kad2008-kad2025gr.xlsx";
  } else if (mode === "kad2025") {
    wsData = [
      ["ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025"],
      ...results.map((r) => [r.kad2025, r.desc2025]),
      [],
      ["Πηγή: www.kad2025.gr"],
      ["Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
    filename = "kad2025-kad2025gr.xlsx";
  } else {
    wsData = [
      ["ΚΑΔ 2008", "Περιγραφή ΚΑΔ 2008", "ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025", "Κατάσταση"],
      ...results.map((r) => [r.kad2008, r.desc2008, r.kad2025, r.desc2025, r.kad2008 === r.kad2025 ? "Αμετάβλητος" : "Άλλαξε"]),
      [],
      ["Πηγή: www.kad2025.gr — Αντιστοίχιση ΚΑΔ 2008 & 2025"],
      ["Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026"],
    ];
    filename = "antistoixisi-kad-kad2025gr.xlsx";
  }
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  if (mode === "kad2008" || mode === "kad2025") {
    ws["!cols"] = [{ wch: 14 }, { wch: 80 }];
  } else {
    ws["!cols"] = [{ wch: 14 }, { wch: 60 }, { wch: 14 }, { wch: 60 }, { wch: 14 }];
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "kad2025.gr");
  XLSX.writeFile(wb, filename);
}

function isNumericQuery(q: string): boolean {
  return /^\d+$/.test(q.replace(/\./g, "").trim());
}

function formatKAD(code: string, dots: boolean): string {
  if (!dots || !code) return code;
  if (code.length !== 7 && code.length !== 8) return code;
  const padded = code.length === 7 ? "0" + code : code;
  const groups: string[] = [];
  for (let i = 0; i < padded.length; i += 2) groups.push(padded.slice(i, i + 2));
  return groups.join(".");
}

export default function KadSearch({ mode, initialQuery = "", initialData }: SearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<KadRecord[]>([]);
  const [showDots, setShowDots] = useState(false);
  const [allData, setAllData] = useState<KadRecord[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData);
  const [searching, setSearching] = useState(false);
  const [copied, setCopied] = useState("");
  const [page, setPage] = useState(1);
  const [startsWithMode, setStartsWithMode] = useState(true);
  // v60b: Load SSG codes for safe linking (avoid linking to non-existent /kad/ pages)
  const [ssgCodes, setSsgCodes] = useState<Set<string>>(new Set());
  const PER_PAGE = 20;
  const searchRef = useRef<NodeJS.Timeout | null>(null);

  const isNumeric = isNumericQuery(query);

  useEffect(() => {
    if (initialData && initialData.length > 0) return;
    fetch("/data/kad.json").then((r) => r.json()).then((data: KadRecord[]) => { setAllData(data); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  // v60b: Fetch SSG codes once on mount
  useEffect(() => {
    fetch("/data/ssg_codes.json").then((r) => r.json()).then((codes: string[]) => {
      setSsgCodes(new Set(codes));
    }).catch(() => { /* silently fail; links will fall back to search */ });
  }, []);

  const doSearch = useCallback((q: string, data: KadRecord[], useStartsWith: boolean) => {
    if (!q || q.length < 2) { setResults([]); setPage(1); return; }
    setSearching(true);
    const lower = normalizeStr(q);
    const numeric = isNumericQuery(q);
    // For numeric queries: use startsWith when useStartsWith=true, otherwise includes
    const matchCode = (code: string): boolean => {
      const clean = code.replace(/\./g, "");
      if (numeric && useStartsWith) return clean.startsWith(lower);
      return clean.includes(lower);
    };
    // When startsWithMode: only match by code prefix, skip description matching
    const matchRecord = (code: string, desc: string): boolean => {
      if (numeric && useStartsWith) return matchCode(code);
      return matchCode(code) || normalizeStr(desc).includes(lower);
    };
    let filtered: KadRecord[];

    if (mode === "kad2008") {
      const seen = new Set<string>();
      filtered = data.filter((r) => {
        if (!matchRecord(r.kad2008, r.desc2008)) return false;
        if (seen.has(r.kad2008)) return false;
        seen.add(r.kad2008); return true;
      });
    } else if (mode === "kad2025") {
      const seen = new Set<string>();
      filtered = data.filter((r) => {
        if (!matchRecord(r.kad2025, r.desc2025)) return false;
        if (seen.has(r.kad2025)) return false;
        seen.add(r.kad2025); return true;
      });
    } else if (mode === "antistoixisi-2008") {
      filtered = data.filter((r) => matchRecord(r.kad2008, r.desc2008));
    } else {
      // antistoixisi-2025: search by new KAD 2025
      filtered = data.filter((r) => matchRecord(r.kad2025, r.desc2025));
    }

    filtered.sort((a, b) => {
      // Priority 1: exact code match goes first
      const aExact = (a.kad2008 === lower || a.kad2025 === lower);
      const bExact = (b.kad2008 === lower || b.kad2025 === lower);
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      // Priority 2: strict numerical order — pad to 8 digits for correct comparison
      const useNewCode = mode === "kad2025" || mode === "antistoixisi-2025";
      const aCode = (useNewCode ? a.kad2025 : a.kad2008).replace(/\./g, "").padStart(8, "0");
      const bCode = (useNewCode ? b.kad2025 : b.kad2008).replace(/\./g, "").padStart(8, "0");
      if (aCode < bCode) return -1;
      if (aCode > bCode) return 1;
      // Secondary: if primary key equal, sort by the other code for stable multi-mappings
      const aCode2 = (useNewCode ? a.kad2008 : a.kad2025).replace(/\./g, "").padStart(8, "0");
      const bCode2 = (useNewCode ? b.kad2008 : b.kad2025).replace(/\./g, "").padStart(8, "0");
      return aCode2 < bCode2 ? -1 : aCode2 > bCode2 ? 1 : 0;
    });

    setResults(filtered); setPage(1); setSearching(false);
    if (filtered.length > 0) trackKadSearch(q, filtered.length, mode);
  }, [mode]);

  useEffect(() => {
    if (searchRef.current) clearTimeout(searchRef.current);
    searchRef.current = setTimeout(() => doSearch(query, allData, isNumeric && startsWithMode), 200);
    return () => { if (searchRef.current) clearTimeout(searchRef.current); };
  }, [query, allData, doSearch, startsWithMode, isNumeric]);

  useEffect(() => {
    if (typeof window !== "undefined" && query.length >= 2) {
      const url = new URL(window.location.href);
      url.searchParams.set("q", query);
      window.history.replaceState({}, "", url.toString());
    }
  }, [query]);

  const paginated = results.slice(0, page * PER_PAGE);

  const placeholders: Record<string, string> = {
    kad2008: "Αναζήτηση με κωδικό ή λέξη π.χ. 1111100 ή ΣΙΤΑΡΙ",
    kad2025: "Αναζήτηση ΚΑΔ — π.χ. ΕΣΤΙΑΤΟΡΙΟ, ΚΟΜΜΩΤΗΡΙΟ, ΚΑΤΑΣΚΕΥΕΣ",
    "antistoixisi-2008": "Πληκτρολογήστε παλιό ΚΑΔ 2008 ή λέξη → δείτε τον νέο ΚΑΔ 2025",
    "antistoixisi-2025": "Πληκτρολογήστε νέο ΚΑΔ 2025 ή λέξη → δείτε τον παλιό ΚΑΔ 2008",
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        {/* Input wrapper — position:relative εδώ ώστε τα absolute icons να υπολογίζονται μόνο ως προς το input */}
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", fontSize: "1.2rem", pointerEvents: "none", zIndex: 1 }}>🔍</span>
          <input type="search" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholders[mode]} autoFocus autoComplete="off" spellCheck={false} />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem", color: "var(--text-muted)", zIndex: 1 }}
            >✕</button>
          )}
        </div>
        {/* Starts-with checkbox — εμφανίζεται ΜΟΝΟ για αριθμητικά queries */}
        {isNumeric && query.length >= 2 && (
          <label style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", marginTop: "0.5rem", cursor: "pointer", userSelect: "none", padding: "0.35rem 0.75rem", background: startsWithMode ? "var(--primary)" : "var(--bg)", border: `1.5px solid ${startsWithMode ? "var(--primary)" : "var(--border)"}`, borderRadius: 20, transition: "all 0.15s" }}>
            <input
              type="checkbox"
              checked={startsWithMode}
              onChange={(e) => setStartsWithMode(e.target.checked)}
              style={{ width: 15, height: 15, accentColor: "white", cursor: "pointer" }}
            />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: startsWithMode ? "white" : "var(--text-muted)" }}>
              Να ξεκινάει με {query}
            </span>
          </label>
        )}
      </div>

      {!loading && query.length >= 2 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            {searching ? "Αναζήτηση..." : <><strong style={{ color: "var(--primary)" }}>{results.length.toLocaleString("el-GR")}</strong> αποτελέσματα για «{query}»</>}
          </span>
          {results.length > 0 && (
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "var(--text-muted)", cursor: "pointer", marginRight: "0.5rem" }}>
                <input type="checkbox" checked={showDots} onChange={e => setShowDots(e.target.checked)} style={{ cursor: "pointer" }} />
                Εμφάνιση Αποτελεσμάτων με τελείες (πχ 55.20)
              </label>
              <button onClick={() => window.print()} className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>🖨️</button>
              <button onClick={() => { exportExcel(results, mode); trackExcelExport(results.length, mode); }} className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>📊 Excel</button>
              <button onClick={() => { exportCSV(results, mode); trackCsvExport(results.length, mode); }} className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>📥 CSV</button>
            </div>
          )}
        </div>
      )}

      {loading && <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}><div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏳</div>Φόρτωση δεδομένων...</div>}
      {!loading && query.length < 2 && <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--text-muted)" }}><div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔎</div><div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Ξεκινήστε την αναζήτηση</div><div style={{ fontSize: "0.9rem" }}>Πληκτρολογήστε τουλάχιστον 2 χαρακτήρες</div></div>}
      {!loading && query.length >= 2 && results.length === 0 && !searching && <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--text-muted)" }}><div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😕</div><div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Δεν βρέθηκαν αποτελέσματα</div><div style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Δοκιμάστε διαφορετική λέξη ή μέρος κωδικού</div></div>}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {paginated.map((r, i) => <ResultCard key={`${r.kad2008}-${r.kad2025}-${i}`} record={r} mode={mode} query={query} copied={copied} setCopied={setCopied} showDots={showDots} ssgCodes={ssgCodes} />)}
      </div>

      {paginated.length < results.length && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button className="btn btn-primary" onClick={() => setPage((p) => p + 1)}>Φόρτωση περισσότερων ({results.length - paginated.length} ακόμα)</button>
        </div>
      )}
    </div>
  );
}

function ResultCard({ record, mode, query, copied, setCopied, showDots = false, ssgCodes }: { record: KadRecord; mode: string; query: string; copied: string; setCopied: (v: string) => void; showDots?: boolean; ssgCodes: Set<string>; }) {
  const changed = record.kad2008 !== record.kad2025;
  const isAntistoixisi = mode === "antistoixisi-2008" || mode === "antistoixisi-2025";
  const isReverse = mode === "antistoixisi-2025";

  if (isAntistoixisi) {
    const leftCode = isReverse ? record.kad2025 : record.kad2008;
    const leftCodeDisplay = formatKAD(leftCode, showDots);
    const rightCode2 = isReverse ? record.kad2008 : record.kad2025;
    const leftDesc = isReverse ? record.desc2025 : record.desc2008;
    const rightCode = isReverse ? record.kad2008 : record.kad2025;
    const rightDesc = isReverse ? record.desc2008 : record.desc2025;
    const leftBadge = isReverse ? "kad-badge-2025" : "kad-badge-2008";
    const rightBadge = isReverse ? "kad-badge-2008" : "kad-badge-2025";
    const leftLabel = isReverse ? "ΚΑΔ 2025 (Νέος)" : "ΚΑΔ 2008 (Παλιός)";
    const rightLabel = isReverse ? "ΚΑΔ 2008 (Παλιός)" : "ΚΑΔ 2025 (Νέος) ✅";

    return (
      <div className="card" style={{ borderLeft: changed ? "4px solid var(--accent)" : "4px solid var(--success)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "center" }} className="result-grid">
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.35rem", fontWeight: 600 }}>{leftLabel}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
              <span className={`kad-badge ${leftBadge}`} dangerouslySetInnerHTML={{ __html: highlight(formatKAD(leftCode, showDots), query) }} />
              <button className="btn btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }} onClick={() => copyToClipboard(leftCode, setCopied)}>{copied === leftCode ? <span className="copy-success">✓</span> : "📋"}</button>
            </div>
            <div style={{ fontSize: "0.85rem", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: highlight(leftDesc, query) }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", color: changed ? "var(--accent)" : "var(--success)" }}>{changed ? "→" : "≡"}</div>
            {changed && <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>ΑΛΛΑΓΗ</div>}
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.35rem", fontWeight: 600 }}>{rightLabel}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
              <span className={`kad-badge ${rightBadge}`} dangerouslySetInnerHTML={{ __html: highlight(formatKAD(rightCode, showDots), query) }} />
              <button className="btn btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }} onClick={() => copyToClipboard(rightCode, setCopied)}>{copied === rightCode ? <span className="copy-success">✓</span> : "📋"}</button>
              {ssgCodes.has(rightCode) && (
                <Link href={`/kad/${rightCode}`} style={{ fontSize: "0.75rem", color: "var(--primary)", textDecoration: "none" }}>🔗</Link>
              )}
            </div>
            <div style={{ fontSize: "0.85rem", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: highlight(rightDesc, query) }} />
          </div>
        </div>
      </div>
    );
  }

  const code = mode === "kad2008" ? record.kad2008 : record.kad2025;
  const desc = mode === "kad2008" ? record.desc2008 : record.desc2025;
  const badgeClass = mode === "kad2008" ? "kad-badge-2008" : "kad-badge-2025";
  const linkTo = mode === "kad2008" ? `/antistoixisi-2008?q=${record.kad2008}` : `/antistoixisi-2025?q=${record.kad2025}`;
  const linkLabel = mode === "kad2008" ? "→ 2025" : "→ 2008";

  return (
    <div className="card" style={{ borderLeft: "4px solid var(--border)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
        <span className={`kad-badge ${badgeClass}`} dangerouslySetInnerHTML={{ __html: highlight(formatKAD(code, showDots), query) }} />
        <button className="btn btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }} onClick={() => copyToClipboard(code, setCopied)}>{copied === code ? <span className="copy-success">✓ Αντιγράφηκε</span> : "📋 Αντιγραφή"}</button>
        <Link href={linkTo} style={{ fontSize: "0.8rem", color: "var(--primary)", textDecoration: "none" }}>🔄 Αντιστοίχιση {linkLabel}</Link>
      </div>
      <div style={{ fontSize: "0.9rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: highlight(desc, query) }} />
    </div>
  );
}
