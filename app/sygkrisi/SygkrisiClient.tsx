"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface KadRecord {
  kad2025: string;
  desc2025: string;
  kad2008: string;
  desc2008: string;
}

function KadInput({ label, value, onChange, result, loading }: {
  label: string; value: string; onChange: (v: string) => void;
  result: KadRecord | null; loading: boolean;
}) {
  return (
    <div style={{ flex: 1, minWidth: 280 }}>
      <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value.replace(/\./g, ""))}
        placeholder="π.χ. 56101000"
        style={{ width: "100%", padding: "0.65rem 0.9rem", borderRadius: "var(--radius)", border: "1.5px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: "1rem", boxSizing: "border-box" }}
      />
      <div style={{ minHeight: 120, marginTop: "0.75rem" }}>
        {loading && <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", padding: "1rem" }}>⏳ Φόρτωση...</div>}
        {result && !loading && (
          <div className="card" style={{ borderTop: "3px solid var(--primary)" }}>
            <div style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{result.kad2025}</div>
            <div style={{ fontWeight: 500, marginBottom: "0.5rem" }}>{result.desc2025}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
              <strong>ΚΑΔ 2008:</strong> {result.kad2008}<br />
              <span>{result.desc2008}</span>
            </div>
          </div>
        )}
        {!result && !loading && value.length >= 3 && (
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", padding: "1rem 0" }}>Δεν βρέθηκε ΚΑΔ</div>
        )}
      </div>
    </div>
  );
}

export default function SygkrisiClient() {
  const [codeA, setCodeA] = useState("");
  const [codeB, setCodeB] = useState("");
  const [resultA, setResultA] = useState<KadRecord | null>(null);
  const [resultB, setResultB] = useState<KadRecord | null>(null);
  const [loadingA, setLoadingA] = useState(false);
  const [loadingB, setLoadingB] = useState(false);

  const lookup = useCallback(async (code: string, set: (r: KadRecord | null) => void, setLoading: (b: boolean) => void) => {
    if (code.length < 3) { set(null); return; }
    setLoading(true);
    try {
      // Client-side lookup from static data (no API route needed)
      const clean = code.replace(/\./g, "").trim();
      const res = await fetch("/data/kad.json");
      const rows: KadRecord[] = await res.json();
      const exact = rows.find(r => r.kad2025 === clean || r.kad2008 === clean);
      if (exact) { set(exact); return; }
      const prefix = rows.find(r => r.kad2025.startsWith(clean) || r.kad2008.startsWith(clean));
      set(prefix || null);
    } catch { set(null); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => lookup(codeA, setResultA, setLoadingA), 400);
    return () => clearTimeout(t);
  }, [codeA, lookup]);

  useEffect(() => {
    const t = setTimeout(() => lookup(codeB, setResultB, setLoadingB), 400);
    return () => clearTimeout(t);
  }, [codeB, lookup]);

  const sameKlados = resultA && resultB && resultA.kad2025.slice(0, 2) === resultB.kad2025.slice(0, 2);

  return (
    <div>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <KadInput label="ΚΑΔ Α" value={codeA} onChange={setCodeA} result={resultA} loading={loadingA} />
        <div style={{ display: "flex", alignItems: "center", paddingTop: "2rem", fontSize: "1.5rem", color: "var(--text-muted)" }}>⚖️</div>
        <KadInput label="ΚΑΔ Β" value={codeB} onChange={setCodeB} result={resultB} loading={loadingB} />
      </div>

      {resultA && resultB && (
        <div className="card" style={{ background: sameKlados ? "#f0fdf4" : "#fef9c3", border: `1px solid ${sameKlados ? "#86efac" : "#fde68a"}` }}>
          <strong>{sameKlados ? "✅ Ίδιος κλάδος (2ψήφιο)" : "⚠️ Διαφορετικός κλάδος"}</strong>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.25rem 0 0" }}>
            {sameKlados
              ? "Και οι δύο ΚΑΔ ανήκουν στον ίδιο κλάδο. Η επιλογή εξαρτάται από τη συγκεκριμένη δραστηριότητα."
              : "Οι ΚΑΔ ανήκουν σε διαφορετικούς κλάδους. Βεβαιωθείτε ότι επιλέγετε τον σωστό για τη δραστηριότητά σας."}
          </p>
        </div>
      )}

      <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        💡 Tip: Χρησιμοποιήστε το <Link href="/ai-suggester" style={{ color: "var(--primary)" }}>AI Βοηθό</Link> αν δεν ξέρετε ποιον ΚΑΔ να συγκρίνετε.
      </div>
    </div>
  );
}
