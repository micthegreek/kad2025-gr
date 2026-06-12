// GA4 Event Tracking Utility — kad2025.gr
// Fires events to Google Analytics via gtag

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function fireEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}

// Ο χρήστης έκανε αναζήτηση ΚΑΔ
export function trackKadSearch(query: string, resultCount: number, mode: string) {
  fireEvent("kad_search", {
    search_term: query,
    result_count: resultCount,
    search_mode: mode, // kad2008 | kad2025 | antistoixisi-2008 | antistoixisi-2025
  });
}

// Εξαγωγή CSV
export function trackCsvExport(resultCount: number, mode: string) {
  fireEvent("csv_export", {
    result_count: resultCount,
    export_mode: mode,
  });
}

// Εξαγωγή Excel
export function trackExcelExport(resultCount: number, mode: string) {
  fireEvent("excel_export", {
    result_count: resultCount,
    export_mode: mode,
  });
}

// Χρήση AI Suggester
export function trackAiSuggesterUsed(textLength: number, resultCount: number) {
  fireEvent("ai_suggester_used", {
    text_length: textLength,
    result_count: resultCount,
  });
}

// Αποθήκευση ΚΑΔ
export function trackKadSaved(code: string) {
  fireEvent("kad_saved", {
    kad_code: code,
  });
}

// Άνοιγμα εργαλείου (ποιο σελίδα/εργαλείο χρησιμοποιεί ο χρήστης)
export function trackPageToolUsed(toolName: string) {
  fireEvent("page_tool_used", {
    tool_name: toolName,
    // π.χ. "antistoixisi" | "maziki_2008" | "maziki_2025" | "ai_suggester" | "wizard" | "sygkrisi"
  });
}
