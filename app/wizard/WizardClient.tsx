"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    q: "Τι τύπου δραστηριότητα έχει η επιχείρησή σας;",
    options: [
      { label: "🛒 Εμπόριο — Αγορά & πώληση προϊόντων", value: "emporio", hint: "Σούπερ μάρκετ, μαγαζί ρούχων, e-shop..." },
      { label: "🍽️ Εστίαση & Τρόφιμα", value: "estiasi", hint: "Καφετέρια, εστιατόριο, delivery, catering..." },
      { label: "🔧 Παροχή Υπηρεσιών", value: "ypiresies", hint: "Λογιστής, μηχανικός, συμβουλευτική, IT..." },
      { label: "🏗️ Κατασκευές & Τεχνικά", value: "kataskeyes", hint: "Οικοδομή, ηλεκτρολόγος, υδραυλικός..." },
      { label: "🏭 Παραγωγή / Μεταποίηση", value: "paragogi", hint: "Εργοστάσιο, βιοτεχνία, βιομηχανία..." },
      { label: "🌿 Αγροτικά / Κτηνοτροφία", value: "agrotika", hint: "Γεωργία, αλιεία, κτηνοτροφία..." },
    ],
  },
  {
    q: "Πού πραγματοποιείται κυρίως η δραστηριότητα;",
    options: [
      { label: "🏪 Σε φυσικό κατάστημα / χώρο", value: "physical", hint: "Μαγαζί, γραφείο, εργαστήρι..." },
      { label: "🌐 Online / Ψηφιακά", value: "online", hint: "E-commerce, διαδικτυακές υπηρεσίες..." },
      { label: "🏠 Στον χώρο του πελάτη", value: "client", hint: "Επισκέπτεστε πελάτες στο σπίτι/επιχείρησή τους" },
      { label: "📦 Μεικτά (φυσικό + online)", value: "mixed", hint: "Συνδυασμός φυσικού και ηλεκτρονικού" },
    ],
  },
  {
    q: "Ποιοι είναι κυρίως οι πελάτες σας;",
    options: [
      { label: "👤 Ιδιώτες / Καταναλωτές (B2C)", value: "b2c", hint: "Πωλείτε σε απλούς πολίτες" },
      { label: "🏢 Επιχειρήσεις / Επαγγελματίες (B2B)", value: "b2b", hint: "Πωλείτε σε άλλες επιχειρήσεις" },
      { label: "🏛️ Δημόσιο / Οργανισμοί (B2G)", value: "b2g", hint: "Προμηθεύετε το δημόσιο ή οργανισμούς" },
      { label: "👥 Όλοι οι παραπάνω", value: "all", hint: "Έχετε ποικίλη πελατεία" },
    ],
  },
];

const suggestions: Record<string, { label: string; search: string }[]> = {
  "emporio-physical-b2c": [{ label: "Λιανικό εμπόριο (47)", search: "47" }, { label: "Πωλήσεις σε κατάστημα", search: "4711" }],
  "emporio-online-b2c": [{ label: "Ηλεκτρονικό εμπόριο (47910)", search: "47910" }, { label: "Λιανικό e-shop", search: "47911" }],
  "emporio-online-b2b": [{ label: "Χονδρεμπόριο online (46)", search: "46" }],
  "estiasi-physical-b2c": [{ label: "Εστιατόρια (56101)", search: "56101" }, { label: "Καφετέριες (56301)", search: "56301" }],
  "estiasi-mixed-b2c": [{ label: "Εστίαση με delivery (56101)", search: "56101" }, { label: "Catering (56210)", search: "56210" }],
  "ypiresies-physical-b2b": [{ label: "Επαγγελματικές υπηρεσίες (69-74)", search: "69" }, { label: "Λογιστικές (6920)", search: "6920" }],
  "ypiresies-online-b2b": [{ label: "IT & Τεχνολογία (62)", search: "62" }, { label: "Σύμβουλοι (7022)", search: "7022" }],
  "kataskeyes-physical-b2c": [{ label: "Κατασκευές (41-43)", search: "41" }],
  "paragogi-physical-b2b": [{ label: "Μεταποίηση (10-33)", search: "10" }],
  "agrotika-physical-b2c": [{ label: "Γεωργία (01)", search: "01" }, { label: "Αλιεία (03)", search: "03" }],
};

function getSuggestions(answers: string[]) {
  const key = answers.join("-");
  if (suggestions[key]) return suggestions[key];
  const partial = answers.slice(0, 2).join("-");
  const found = Object.entries(suggestions).find(([k]) => k.startsWith(partial));
  if (found) return found[1];
  const first = answers[0];
  const fallbacks: Record<string, { label: string; search: string }[]> = {
    emporio: [{ label: "Εμπόριο (46-47)", search: "47" }],
    estiasi: [{ label: "Εστίαση & Τρόφιμα (56)", search: "56" }],
    ypiresies: [{ label: "Υπηρεσίες (69-74)", search: "69" }],
    kataskeyes: [{ label: "Κατασκευές (41-43)", search: "41" }],
    paragogi: [{ label: "Μεταποίηση (10-33)", search: "10" }],
    agrotika: [{ label: "Αγροτικά (01-03)", search: "01" }],
  };
  return fallbacks[first] || [{ label: "Αναζήτηση ΚΑΔ", search: "" }];
}

export default function WizardClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleSelect = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setDone(false); };

  const progress = done ? 100 : Math.round((step / steps.length) * 100);

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
          <span>Βήμα {done ? steps.length : step + 1} από {steps.length}</span>
          <span>{progress}%</span>
        </div>
        <div style={{ height: 6, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "var(--primary)", borderRadius: 3, transition: "width 0.4s ease" }} />
        </div>
      </div>

      {!done ? (
        <div className="card">
          <h2 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>{steps[step].q}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {steps[step].options.map(opt => (
              <button key={opt.value} onClick={() => handleSelect(opt.value)}
                style={{ textAlign: "left", padding: "0.9rem 1rem", border: "1.5px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-primary)", cursor: "pointer", transition: "all 0.15s", color: "var(--text-primary)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--primary)", e.currentTarget.style.background = "var(--bg-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)", e.currentTarget.style.background = "var(--bg-primary)")}>
                <div style={{ fontWeight: 500 }}>{opt.label}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{opt.hint}</div>
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)); }}
              style={{ marginTop: "1rem", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.85rem" }}>
              ← Πίσω
            </button>
          )}
        </div>
      ) : (
        <div className="card">
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
          <h2 style={{ marginBottom: "1rem" }}>Βρήκαμε κατάλληλους ΚΑΔ για σας!</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {getSuggestions(answers).map((s, i) => (
              <Link key={i} href={s.search ? `/kad-2025?q=${s.search}` : "/kad-2025"}
                style={{ display: "block", padding: "0.9rem 1rem", border: "1.5px solid var(--primary)", borderRadius: "var(--radius)", textDecoration: "none", color: "var(--primary)", fontWeight: 500, background: "var(--bg-secondary)" }}>
                🔍 {s.label} →
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/ai-suggester" className="btn btn-primary">✨ AI Αναλυτική Αναζήτηση</Link>
            <button onClick={reset} className="btn btn-ghost">🔄 Ξεκίνα πάλι</button>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            Για πιο ακριβείς αποτελέσματα χρησιμοποιήστε το <Link href="/ai-suggester" style={{ color: "var(--primary)" }}>AI Βοηθό</Link> ή την <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>αντιστοίχιση</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
