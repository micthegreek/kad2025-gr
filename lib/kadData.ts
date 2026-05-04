// Edge-compatible: static import instead of fs/path
import kadJson from "../public/data/kad.json";
import ssgCodesJson from "../public/data/ssg_codes.json";

export interface KadRecord {
  kad2008: string;
  kad2025: string;
  desc2008: string;
  desc2025: string;
}

const kadData: KadRecord[] = kadJson as KadRecord[];
const ssgCodesSet: Set<string> = new Set(ssgCodesJson as string[]);

export function getKadData(): KadRecord[] {
  return kadData;
}

export function getSsgCodes(): Set<string> {
  return ssgCodesSet;
}

/**
 * v59: Returns a safe /kad/ URL for a KAD record.
 * Prefers kad2008 (which is guaranteed in SSG after v57 filtering),
 * falls back to kad2025 if kad2008 isn't in SSG.
 * Returns null if neither is in SSG (caller should skip the link).
 */
export function getSafeKadUrl(record: KadRecord): string | null {
  if (ssgCodesSet.has(record.kad2008)) {
    return `/kad/${record.kad2008}`;
  }
  if (ssgCodesSet.has(record.kad2025)) {
    return `/kad/${record.kad2025}`;
  }
  return null;
}

/**
 * v59: Returns a safe /kad/ URL for a bare code string.
 * Returns null if not in SSG (caller should skip the link).
 */
export function getSafeKadUrlForCode(code: string): string | null {
  return ssgCodesSet.has(code) ? `/kad/${code}` : null;
}

/**
 * v59: Returns only records whose kad2008 is in SSG (safe to link to).
 * Used for homepage/hub pages that display lists of KAD records.
 */
export function filterSsgSafe(records: KadRecord[]): KadRecord[] {
  return records.filter((r) => ssgCodesSet.has(r.kad2008) || ssgCodesSet.has(r.kad2025));
}

export function getSampleChanged(count = 30): KadRecord[] {
  const changed = kadData.filter((r) => r.kad2008 !== r.kad2025);
  const sections = new Set<string>();
  const samples: KadRecord[] = [];
  for (const r of changed) {
    const prefix = r.kad2008.padStart(8, "0").slice(0, 2);
    if (!sections.has(prefix)) {
      samples.push(r);
      sections.add(prefix);
    }
    if (samples.length >= count) break;
  }
  return samples;
}

export function getKadsBySection(prefix: string): KadRecord[] {
  return kadData.filter((r) => r.kad2008.padStart(8, "0").startsWith(prefix));
}

export function getStats() {
  const unique2008 = new Set(kadData.map((r) => r.kad2008)).size;
  const unique2025 = new Set(kadData.map((r) => r.kad2025)).size;
  const changed = kadData.filter((r) => r.kad2008 !== r.kad2025).length;
  return { total: kadData.length, unique2008, unique2025, changed, unchanged: kadData.length - changed };
}
