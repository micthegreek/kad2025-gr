"use client";
import { useEffect, useState } from "react";
import { daysToDeadline } from "@/lib/deadline";

export default function DeadlineChip() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const d = daysToDeadline();
    if (d > 0 && d < 400) setDays(d);
  }, []);
  
  return (
    <span
      className="chip"
      style={{ display: "inline-block", marginTop: "0.6rem", fontSize: "0.82rem", background: "var(--warn-bg, rgba(230,194,0,0.12))", border: "1px solid var(--warn-border, #e6c200)" }}
      suppressHydrationWarning
    >
      ⏳ {days !== null ? `${days} ημέρες απομένουν για διορθώσεις ΚΑΔ (έως 30/10/2026)` : "Προθεσμία διορθώσεων ΚΑΔ: 30/10/2026"}
    </span>
  );
}
