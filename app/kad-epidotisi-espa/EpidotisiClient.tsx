"use client";
import { useState, useCallback } from "react";

const PROGRAMS: Record<string, { label: string; color: string; emoji: string; url: string }> = {
  e: {
    label: "ΕΣΠΑ «Παράγουμε στην Ελλάδα» (1η Τροποποίηση)",
    color: "#1d4ed8",
    emoji: "🏭",
    url: "https://www.espa.gr",
  },
  m: {
    label: "Αναπτυξιακός Νόμος — Μεταποίηση Δ' Κύκλος (Ν. 4887/2022)",
    color: "#7c3aed",
    emoji: "🔧",
    url: "https://ependyseis.mindev.gov.gr/el/idiotikes/prokirikseis",
  },
  p: {
    label: "Αναπτυξιακός Νόμος — Περιοχές Ειδικής Ενίσχυσης Β' Κύκλος (Ν. 4887/2022)",
    color: "#059669",
    emoji: "📍",
    url: "https://ependyseis.mindev.gov.gr/el/idiotikes/prokirikseis",
  },
  g: {
    label: "Αναπτυξιακός Νόμος — Μεγάλες Επενδύσεις Β' Κύκλος (Ν. 4887/2022)",
    color: "#d97706",
    emoji: "🏗️",
    url: "https://ependyseis.mindev.gov.gr/el/idiotikes/prokirikseis",
  },
  x: {
    label: "ΕΣΠΑ «Ξεκινώ Επιχειρηματικά»",
    color: "#0891b2",
    emoji: "🚀",
    url: "https://www.espa.gr",
  },
};

type Result = {
  code: string;
  eligible: string[];
  notEligible: string[];
};

export default function EpidotisiClient() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkEligibility = useCallback(async () => {
    const raw = query.trim().replace(/\./g, "").replace(/\s/g, "");
    if (!raw) return;

    // Normalize to 8-digit code
    let code = raw.replace(/\D/g, "");
    if (code.length < 8) code = code.padEnd(8, "0");
    if (code.length > 8) code = code.slice(0, 8);

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const resp = await fetch("/data/kad_programs_lookup.json");
      if (!resp.ok) throw new Error("Αδυναμία φόρτωσης δεδομένων");
      const lookup: Record<string, string[]> = await resp.json();

      const eligibleIds = lookup[code] ?? [];
      const eligible = eligibleIds;
      const notEligible = Object.keys(PROGRAMS).filter(k => !eligibleIds.includes(k));

      setResult({ code, eligible, notEligible });
    } catch (e) {
      setError("Σφάλμα κατά την αναζήτηση. Παρακαλώ δοκιμάστε ξανά.");
    } finally {
      setLoading(false);
    }
  }, [query]);

  const formatCode = (code: string) => {
    // Format 8-digit code as XX.XX.XX.XX or XX.XX.XX etc.
    const clean = code.replace(/^0+|0+$/g, '') || code;
    // Group digits: 2.2.2.2
    const parts = code.match(/^(\d{2})(\d{2})(\d{2})(\d{2})$/) ||
                  code.match(/^(\d{2})(\d{2})(\d{2})\d*$/);
    if (parts) {
      return parts.slice(1).filter(p => p && p !== "00").join(".");
    }
    return code;
  };

  return (
    <div className="card" style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>🔍 Έλεγχος Επιλεξιμότητας ΚΑΔ</h2>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setResult(null); setError(""); }}
          onKeyDown={e => e.key === "Enter" && checkEligibility()}
          placeholder="π.χ. 10111100 ή 10.11.11 ή 10111"
          style={{
            flex: 1, minWidth: 220,
            padding: "0.65rem 1rem",
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: "1rem",
            background: "var(--bg)",
            color: "var(--text)",
            outline: "none",
          }}
          aria-label="ΚΑΔ 2025 προς έλεγχο"
        />
        <button
          onClick={checkEligibility}
          disabled={loading || !query.trim()}
          className="btn btn-primary"
          style={{ minWidth: 120 }}
        >
          {loading ? "Αναζήτηση..." : "Έλεγχος"}
        </button>
      </div>

      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Εισάγετε ΚΑΔ 2025 (με ή χωρίς τελείες). Π.χ. 10.11.11, 10111100, 10111
      </p>

      {error && (
        <div style={{ color: "#dc2626", background: "#fef2f2", padding: "0.75rem 1rem", borderRadius: 8, marginBottom: "1rem" }}>
          {error}
        </div>
      )}

      {result && (
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem", color: "var(--text)" }}>
            Αποτελέσματα για ΚΑΔ: <span style={{ color: "var(--primary)", fontFamily: "monospace" }}>{formatCode(result.code)}</span>
          </div>

          {result.eligible.length === 0 && (
            <div style={{ background: "#fef2f2", border: "1.5px solid #fca5a5", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700, color: "#dc2626", marginBottom: "0.4rem" }}>
                ❌ Ο ΚΑΔ δεν είναι επιλέξιμος σε κανένα από τα 5 προγράμματα
              </div>
              <div style={{ fontSize: "0.85rem", color: "#7f1d1d" }}>
                Βεβαιωθείτε ότι εισάγατε τον σωστό ΚΑΔ 2025. Αν ο ΚΑΔ σας είναι στο σύστημα 2008, χρησιμοποιήστε πρώτα{" "}
                <a href="/antistoixisi" style={{ color: "var(--primary)" }}>την αντιστοίχιση</a>.
              </div>
            </div>
          )}

          {result.eligible.length > 0 && (
            <div style={{ background: "#f0fdf4", border: "1.5px solid #86efac", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700, color: "#15803d", marginBottom: "0.75rem" }}>
                ✅ Επιλέξιμος σε {result.eligible.length} πρόγραμμα{result.eligible.length > 1 ? "τα" : ""}:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {result.eligible.map(id => {
                  const p = PROGRAMS[id];
                  return (
                    <div key={id} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0.75rem", background: "white", border: `2px solid ${p.color}`, borderRadius: 8 }}>
                      <span style={{ fontSize: "1.1rem" }}>{p.emoji}</span>
                      <span style={{ fontWeight: 600, fontSize: "0.875rem", color: p.color }}>{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {result.notEligible.length > 0 && result.eligible.length > 0 && (
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "0.875rem 1.25rem" }}>
              <div style={{ fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                ❌ Μη επιλέξιμος σε:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {result.notEligible.map(id => {
                  const p = PROGRAMS[id];
                  return (
                    <div key={id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      <span style={{ opacity: 0.5 }}>{p.emoji}</span>
                      <span>{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
