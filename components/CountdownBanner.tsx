"use client";
import { useState, useEffect } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number } | null;

function getTimeLeft(): TimeLeft {
  const deadline = new Date("2026-06-01T00:00:00+03:00").getTime();
  const diff = deadline - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function CountdownBanner() {
  // null αρχικά — populate μόνο client-side για να αποφύγουμε hydration mismatch
  const [time, setTime] = useState<TimeLeft>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  // Skeleton placeholder πριν το client mount (αποφυγή layout shift)
  if (time === null) return <div style={{ height: 80, marginBottom: "2rem" }} />;

  if (!time) return (
    <div style={{ background: "#dc2626", color: "white", borderRadius: "var(--radius)", padding: "1rem 1.5rem", textAlign: "center", fontWeight: 700, marginBottom: "2rem" }}>
      ⚠️ Η προθεσμία της 1ης Ιουνίου 2026 έχει παρέλθει.
    </div>
  );

  const Box = ({ val, label }: { val: number; label: string }) => (
    <div style={{ textAlign: "center", minWidth: 52 }}>
      <div style={{ fontSize: "1.6rem", fontWeight: 900, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {String(val).padStart(2, "0")}
      </div>
      <div style={{ fontSize: "0.65rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
    </div>
  );

  return (
    <div style={{ background: "linear-gradient(135deg, #7c2d12, #dc2626)", color: "white", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.2rem" }}>⏰ Προθεσμία: 1 Ιουνίου 2026</div>
        <div style={{ opacity: 0.9, fontSize: "0.85rem" }}>Διορθώστε τον ΚΑΔ σας έως τότε <strong>χωρίς πρόστιμο</strong>.</div>
      </div>
      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", background: "rgba(0,0,0,0.25)", borderRadius: 10, padding: "0.6rem 0.9rem" }}>
        <Box val={time.days} label="Μέρες" />
        <span style={{ fontSize: "1.4rem", fontWeight: 900, opacity: 0.7 }}>:</span>
        <Box val={time.hours} label="Ώρες" />
        <span style={{ fontSize: "1.4rem", fontWeight: 900, opacity: 0.7 }}>:</span>
        <Box val={time.minutes} label="Λεπτά" />
        <span style={{ fontSize: "1.4rem", fontWeight: 900, opacity: 0.7 }}>:</span>
        <Box val={time.seconds} label="Δευτ." />
      </div>
      <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ background: "white", color: "#dc2626", padding: "0.65rem 1.2rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
        myAADE →
      </a>
    </div>
  );
}
