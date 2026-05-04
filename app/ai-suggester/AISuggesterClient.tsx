"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { trackAiSuggesterUsed } from "@/lib/ga4";

interface Suggestion {
  code: string;
  description: string;
  confidence: number;
  reason: string;
}

const MAX_CHARS = 300;

function formatKAD(code: string, dots: boolean): string {
  if (!dots || !code) return code;
  if (code.length !== 7 && code.length !== 8) return code;
  const padded = code.length === 7 ? "0" + code : code;
  const groups: string[] = [];
  for (let i = 0; i < padded.length; i += 2) groups.push(padded.slice(i, i + 2));
  return groups.join(".");
}

export default function AISuggesterClient() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Suggestion[]>([]);
  const [error, setError] = useState("");
  const [showDots, setShowDots] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => { abortRef.current?.abort(); };
  }, []);

  const handleSubmit = async () => {
    if (text.trim().length < 5) return;
    // Abort any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError("");
    setResults([]);
    try {
      const res = await fetch("/api/ai-suggester", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: text }),
        signal: controller.signal,
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      const suggestions = data.suggestions || [];
      setResults(suggestions);
      if (suggestions.length > 0) trackAiSuggesterUsed(text.length, suggestions.length);
    } catch (err) {
      if ((err as Error).name === "AbortError") return; // φυσιολογική ακύρωση
      setError("Σφάλμα σύνδεσης. Δοκιμάστε ξανά.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem" }}>
          Περιγράψτε τη δραστηριότητά σας:
        </label>
        <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.6rem 0.75rem", marginBottom: "0.5rem", fontSize: "0.78rem", color: "#78350f", lineHeight: 1.5 }}>
          ⚠️ <strong>Σημαντικό:</strong> Μην εισάγετε προσωπικά δεδομένα, ΑΦΜ, επωνυμία ή εμπιστευτικές πληροφορίες. Η περιγραφή αποστέλλεται σε τρίτο πάροχο ΤΝ (Groq) για παραγωγή προτάσεων ΚΑΔ. <a href="/privacy" style={{ color: "#92400e" }}>Πολιτική Απορρήτου</a>
        </div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value.slice(0, MAX_CHARS))}
          placeholder='π.χ. "Έχω καφετέρια που κάνει και delivery" ή "Παρέχω υπηρεσίες web design σε επιχειρήσεις"'
          style={{ width: "100%", minHeight: 100, padding: "0.75rem", borderRadius: "var(--radius)", border: "1.5px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
          <span style={{ fontSize: "0.78rem", color: text.length >= MAX_CHARS ? "#dc2626" : "var(--text-muted)" }}>
            {text.length}/{MAX_CHARS} χαρακτήρες
          </span>
          <button
            onClick={handleSubmit}
            disabled={loading || text.trim().length < 5}
            className="btn btn-primary"
            style={{ minWidth: 140 }}
          >
            {loading ? "⏳ Αναζήτηση..." : "✨ Βρες ΚΑΔ"}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "var(--radius)", padding: "1rem", color: "#dc2626", marginBottom: "1rem" }}>
          ⚠️ {error}
        </div>
      )}

      {results.length > 0 && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 style={{ fontSize: "1rem", margin: 0 }}>Προτεινόμενοι ΚΑΔ 2025:</h2>
            <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)", cursor: "pointer" }}>
              <input type="checkbox" checked={showDots} onChange={e => setShowDots(e.target.checked)} />
              Εμφάνιση Αποτελεσμάτων με τελείες (πχ 55.20)
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {results.map((s, i) => {
              const cleanCode = s.code.replace(/\./g, "");
              const displayCode = formatKAD(cleanCode, showDots);
              return (
                <div key={i} className="card" style={{ borderLeft: `4px solid ${s.confidence >= 80 ? "#16a34a" : s.confidence >= 60 ? "#f5c842" : "#94a3b8"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)" }}>
                          {displayCode}
                        </span>
                        <span style={{ fontSize: "0.75rem", background: s.confidence >= 80 ? "#dcfce7" : s.confidence >= 60 ? "#fef9c3" : "#f1f5f9", color: s.confidence >= 80 ? "#166534" : s.confidence >= 60 ? "#854d0e" : "#475569", borderRadius: 20, padding: "0.15rem 0.6rem", fontWeight: 600 }}>
                          {s.confidence}% βεβαιότητα
                        </span>
                      </div>
                      <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>{s.description}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>💡 {s.reason}</div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <Link href={`/kad-2025?q=${cleanCode}`} className="btn btn-primary" style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}>
                        Αναζήτηση ΚΑΔ 2025 →
                      </Link>
                    </div>
                  </div>
                  <div style={{ marginTop: "0.5rem", height: 4, borderRadius: 2, background: "var(--border)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${s.confidence}%`, background: s.confidence >= 80 ? "#16a34a" : s.confidence >= 60 ? "#f5c842" : "#94a3b8" }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            ⚠️ Οι προτάσεις είναι ενδεικτικές. Επαληθεύστε με τον λογιστή σας ή μέσω <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myAADE</a>.
          </p>
        </div>
      )}
    </div>
  );
}
