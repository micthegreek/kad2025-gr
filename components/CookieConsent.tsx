"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = "pending" | "accepted" | "rejected";

const STORAGE_KEY = "kad-cookie-consent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GtagFn = (...args: any[]) => void;

function initConsentMode(accepted: boolean) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function () { w.dataLayer.push(arguments); }; // eslint-disable-line prefer-rest-params
  }
  const gtag: GtagFn = w.gtag;
  // Google Consent Mode v2
  gtag("consent", "update", {
    ad_storage: accepted ? "granted" : "denied",
    ad_user_data: accepted ? "granted" : "denied",
    ad_personalization: accepted ? "granted" : "denied",
    analytics_storage: accepted ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [state, setState] = useState<ConsentState>("pending");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
      if (saved === "accepted" || saved === "rejected") {
        setState(saved);
        initConsentMode(saved === "accepted");
        setVisible(false);
      } else {
        // First visit — show banner after short delay
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setState("accepted");
    initConsentMode(true);
    setVisible(false);
  };

  const handleReject = () => {
    try { localStorage.setItem(STORAGE_KEY, "rejected"); } catch { /* noop */ }
    setState("rejected");
    initConsentMode(false);
    setVisible(false);
  };

  if (!visible || state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Συγκατάθεση cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "var(--bg-card, #fff)",
        borderTop: "2px solid var(--primary, #1d4ed8)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.15)",
        padding: "1rem 1.25rem",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ flex: 1, minWidth: 240 }}>
          <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
            🍪 <strong>Cookies & Απόρρητο</strong> — Χρησιμοποιούμε cookies για
            Google Analytics για ανώνυμα στατιστικά χρήσης. Δεν προβάλλουμε διαφημίσεις αυτή τη στιγμή.
            Μπορείτε να αποδεχτείτε ή να απορρίψετε τα μη απαραίτητα cookies.{" "}
            <Link
              href="/privacy"
              style={{ color: "var(--primary, #1d4ed8)", fontWeight: 600 }}
            >
              Πολιτική Απορρήτου
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleReject}
            style={{
              padding: "0.45rem 1rem",
              border: "1px solid var(--border, #e2e8f0)",
              borderRadius: 6,
              background: "transparent",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-muted, #64748b)",
            }}
          >
            Μόνο απαραίτητα
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: "0.45rem 1.25rem",
              border: "none",
              borderRadius: 6,
              background: "var(--primary, #1d4ed8)",
              color: "white",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 700,
            }}
          >
            Αποδοχή όλων
          </button>
        </div>
      </div>
    </div>
  );
}
