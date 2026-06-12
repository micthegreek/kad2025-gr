"use client";
import { useState } from "react";

interface KadRecord {
  kad2008: string;
  kad2025: string;
  desc2008: string;
  desc2025: string;
}

export default function BulkPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Array<{ query: string; found: KadRecord | null }>>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const runBulk = async () => {
    const codes = input
      .split(/[\n,;]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (codes.length === 0) return;
    if (codes.length > 500) {
      alert("Μέγιστο 500 ΚΑΔ ανά αναζήτηση");
      return;
    }

    setLoading(true);
    setDone(false);

    const res = await fetch("/data/kad.json").then((r) => r.json()) as KadRecord[];
    const map = new Map<string, KadRecord>();
    res.forEach((r) => {
      map.set(r.kad2008, r);
      map.set(r.kad2008.replace(/^0+/, ""), r);
    });

    const out = codes.map((code) => ({
      query: code,
      found: map.get(code) || map.get(code.padStart(8, "0")) || null,
    }));

    setResults(out);
    setLoading(false);
    setDone(true);
  };

  const exportCSV = () => {
    const rows = [
      ["ΚΑΔ Αναζήτησης", "ΚΑΔ 2008", "Περιγραφή ΚΑΔ 2008", "ΚΑΔ 2025", "Περιγραφή ΚΑΔ 2025", "Κατάσταση"],
      ...results.map((r) =>
        r.found
          ? [r.query, r.found.kad2008, r.found.desc2008, r.found.kad2025, r.found.desc2025, r.found.kad2008 === r.found.kad2025 ? "Αμετάβλητος" : "Άλλαξε"]
          : [r.query, "", "", "", "", "Δεν βρέθηκε"]
      ),
    ];
    const csv =
      "\uFEFF" +
      rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bulk-antistoixisi-kad2025gr.csv";
    a.click();
  };

  const found = results.filter((r) => r.found).length;
  const changed = results.filter((r) => r.found && r.found.kad2008 !== r.found.kad2025).length;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>📦 Bulk Έλεγχος ΚΑΔ</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
          Επικολλήστε μια λίστα από παλιούς ΚΑΔ 2008 (έναν ανά γραμμή ή χωρισμένους με κόμμα)
          και λάβετε ομαδικά την αντιστοίχιση με τους νέους ΚΑΔ 2025.
          <br />
          <strong>Ιδανικό για λογιστές</strong> με πολλούς πελάτες — εξαγωγή σε CSV.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <label style={{ fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
          Εισάγετε ΚΑΔ 2008 (μέχρι 500):
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Παράδειγμα:\n1111100\n1112000\n47110000\n...`}
          rows={8}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: 8,
            border: "2px solid var(--border)",
            background: "var(--bg)",
            color: "var(--text)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.9rem",
            resize: "vertical",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <button
            className="btn btn-primary"
            onClick={runBulk}
            disabled={loading || !input.trim()}
            style={{ opacity: loading || !input.trim() ? 0.6 : 1 }}
          >
            {loading ? "⏳ Επεξεργασία..." : "🔍 Εκτέλεση Bulk Ελέγχου"}
          </button>
          {done && results.length > 0 && (
            <button className="btn btn-accent" onClick={exportCSV}>
              📥 Εξαγωγή CSV ({results.length} εγγραφές)
            </button>
          )}
          {done && (
            <button
              className="btn btn-ghost"
              onClick={() => { setInput(""); setResults([]); setDone(false); }}
            >
              🗑️ Καθαρισμός
            </button>
          )}
        </div>
      </div>

      {/* Summary */}
      {done && results.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {[
            { label: "Σύνολο", value: results.length, color: "var(--primary)" },
            { label: "Βρέθηκαν", value: found, color: "var(--success)" },
            { label: "Άλλαξαν", value: changed, color: "var(--accent)" },
            { label: "Δεν βρέθηκαν", value: results.length - found, color: "var(--danger)" },
          ].map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Results table */}
      {done && results.length > 0 && (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "var(--primary)", color: "white" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>ΚΑΔ Εισαγωγής</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>ΚΑΔ 2008</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", minWidth: 200 }}>Περιγραφή 2008</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>ΚΑΔ 2025</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", minWidth: 200 }}>Περιγραφή 2025</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center" }}>Κατάσταση</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <td style={{ padding: "0.6rem 1rem", fontFamily: "monospace" }}>{r.query}</td>
                    {r.found ? (
                      <>
                        <td style={{ padding: "0.6rem 1rem" }}>
                          <span className="kad-badge kad-badge-2008">{r.found.kad2008}</span>
                        </td>
                        <td style={{ padding: "0.6rem 1rem" }}>{r.found.desc2008}</td>
                        <td style={{ padding: "0.6rem 1rem" }}>
                          <span className="kad-badge kad-badge-2025">{r.found.kad2025}</span>
                        </td>
                        <td style={{ padding: "0.6rem 1rem" }}>{r.found.desc2025}</td>
                        <td style={{ padding: "0.6rem 1rem", textAlign: "center" }}>
                          {r.found.kad2008 === r.found.kad2025 ? (
                            <span style={{ color: "var(--success)", fontWeight: 700 }}>≡ Ίδιος</span>
                          ) : (
                            <span style={{ color: "var(--accent)", fontWeight: 700 }}>→ Άλλαξε</span>
                          )}
                        </td>
                      </>
                    ) : (
                      <td colSpan={5} style={{ padding: "0.6rem 1rem", color: "var(--danger)" }}>
                        ❌ Δεν βρέθηκε
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: "0.75rem 1rem", fontSize: "0.75rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
            Πηγή: kad2025.gr — Δεδομένα ΑΑΔΕ Α.1004/2026
          </div>
        </div>
      )}
    </div>
  );
}
