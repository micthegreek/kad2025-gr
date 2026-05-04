/**
 * NACE Rev. 2.1 Explanatory Notes Helper
 * 
 * Loads compact NACE descriptions from /public/data/nace21.json
 * and provides lookup by code (e.g., "01", "01.1", "01.11").
 * 
 * JSON structure per entry:
 *   { "t": title, "d": description/includes, "x": excludes }
 */

import nace21Json from "../public/data/nace21.json";

export interface Nace21Entry {
  /** Greek title of the NACE class/group/division */
  title: string;
  /** What this code includes (cleaned up from "Περιλαμβάνει") */
  description?: string;
  /** What this code excludes (from "Εξαιρούνται") */
  excludes?: string;
}

interface CompactEntry {
  t: string;
  d?: string;
  x?: string;
}

let _cache: Record<string, CompactEntry> | null = null;

function loadData(): Record<string, CompactEntry> {
  if (_cache) return _cache;
  _cache = nace21Json as unknown as Record<string, CompactEntry>;
  return _cache!;
}

/**
 * Look up NACE 2.1 description by code.
 * Accepts codes like "01", "01.1", "01.11".
 */
export function getNace21(code: string): Nace21Entry | null {
  const data = loadData();
  const entry = data[code];
  if (!entry) return null;
  return {
    title: entry.t,
    description: entry.d,
    excludes: entry.x,
  };
}

/**
 * Convert a KAD 2025 8-digit code to NACE-style dotted codes.
 * E.g., "56101000" → { division: "56", group: "56.1", class: "56.10" }
 */
export function kadToNaceCodes(kad2025: string): {
  division: string;
  group: string;
  class_: string;
} {
  const padded = kad2025.padStart(8, "0");
  const div = padded.slice(0, 2);
  const grp = `${div}.${padded.slice(2, 3)}`;
  const cls = `${div}.${padded.slice(2, 4)}`;
  return { division: div, group: grp, class_: cls };
}

/**
 * Get all NACE 2.1 context for a KAD 2025 code.
 * Returns descriptions at division, group, and class level.
 */
export function getNace21ForKad(kad2025: string): {
  division?: Nace21Entry;
  group?: Nace21Entry;
  class_?: Nace21Entry;
} {
  const codes = kadToNaceCodes(kad2025);
  return {
    division: getNace21(codes.division) ?? undefined,
    group: getNace21(codes.group) ?? undefined,
    class_: getNace21(codes.class_) ?? undefined,
  };
}

/**
 * Get all entries for a given 2-digit division (for klados pages).
 * Returns a map of code → Nace21Entry for all groups and classes under that division.
 */
export function getNace21ByDivision(divisionCode: string): Record<string, Nace21Entry> {
  const data = loadData();
  const result: Record<string, Nace21Entry> = {};
  
  for (const [code, entry] of Object.entries(data)) {
    if (code === divisionCode || code.startsWith(`${divisionCode}.`)) {
      result[code] = {
        title: entry.t,
        description: entry.d,
        excludes: entry.x,
      };
    }
  }
  
  return result;
}
