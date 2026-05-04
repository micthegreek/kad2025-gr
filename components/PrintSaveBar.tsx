"use client";
import { useState, useEffect } from "react";
import { trackKadSaved } from "@/lib/ga4";

interface Props {
  code: string;
  desc: string;
  code2008: string;
  desc2008: string;
}

export default function PrintSaveBar({ code, desc, code2008, desc2008 }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("saved-kads") || "[]");
      setSaved(list.some((k: { code: string }) => k.code === code));
    } catch {}
  }, [code]);

  const toggleSave = () => {
    try {
      const list = JSON.parse(localStorage.getItem("saved-kads") || "[]");
      const exists = list.some((k: { code: string }) => k.code === code);
      const updated = exists
        ? list.filter((k: { code: string }) => k.code !== code)
        : [...list, { code, desc, savedAt: new Date().toISOString() }];
      localStorage.setItem("saved-kads", JSON.stringify(updated));
      setSaved(!exists);
      if (!exists) trackKadSaved(code); // track only when saving, not unsaving
    } catch {}
  };

  const handlePrint = () => window.print();

  return (
    <>
      {/* Print/Save buttons */}
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <button onClick={toggleSave}
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", border: `1.5px solid ${saved ? "#f5c842" : "var(--border)"}`, borderRadius: "var(--radius)", background: saved ? "#fefce8" : "var(--bg-primary)", color: saved ? "#854d0e" : "var(--text-primary)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s" }}>
          {saved ? "★ Αποθηκευμένο" : "☆ Αποθήκευση"}
        </button>
        <button onClick={handlePrint}
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", border: "1.5px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-primary)", color: "var(--text-primary)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
          🖨️ Εκτύπωση
        </button>
      </div>

      {/* Print styles - only visible when printing */}
      <style>{`
        @media print {
          nav, header, footer, .no-print, button, a.btn {
            display: none !important;
          }
          body { background: white !important; color: black !important; }
          .card { border: 1px solid #ccc !important; box-shadow: none !important; }
          .print-footer {
            display: block !important;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 6px 16px;
            font-size: 10px;
            color: #666;
            border-top: 1px solid #ddd;
            text-align: center;
          }
        }
        @media screen {
          .print-footer { display: none; }
        }
      `}</style>
      <div className="print-footer">
        Πηγή: kad2025.gr | Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026 &amp; Α.1004/2026 | Εκτυπώθηκε: {new Date().toLocaleDateString("el-GR")}
      </div>
    </>
  );
}
