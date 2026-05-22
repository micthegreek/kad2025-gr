/**
 * adsense-utils.ts — v85
 * Sensitive content detection + robots directives for KAD pages.
 */

/**
 * Strip Greek accents for accent-insensitive matching.
 */
function stripAccents(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Returns true if the given KAD page contains sensitive/restricted content
 * that should be excluded from sitemaps and set to noindex.
 *
 * Covers Google Publisher Restrictions: gambling, tobacco, weapons/explosives,
 * alcohol (production/wholesale/retail), sexual services.
 */
export function isSensitiveKadPage(code: string, description: string): boolean {
  const padded = code.replace(/\D/g, "").padStart(8, "0");

  // Sector-based exclusions (all codes in these sectors)
  if (padded.startsWith("92")) return true; // Gambling / lottery / betting
  if (padded.startsWith("1101") || padded.startsWith("1102") ||
      padded.startsWith("1103") || padded.startsWith("1104") ||
      padded.startsWith("1105") || padded.startsWith("1106")) return true; // Alcohol production

  const raw = description.toLowerCase();
  const text = stripAccents(raw); // accent-insensitive

  const sensitivePatterns = [
    // Sexual services
    /σεξουαλ/, /πορν/, /ιεροδουλ/,
    // Gambling (text patterns — sector 92 handled above)
    /τυχερ\s*παιχνιδ/, /στοιχη/, /καζιν/,
    /λαχει\w*\s*παιχν/, /μπιγκο/,
    // Tobacco — precise (NOT καπνιστά ψάρια or καπνοδόχος)
    /τσιγαρ/, /πουρων/, /πουρα/,
    /καπνοβιομ/,
    /καλλιεργεια\s*καπν/,
    /εμπορια\s*καπν/,
    /λιανικ\w{0,10}καπν/,
    /χονδρικ\w{0,10}καπν/,
    // Weapons / explosives / pyrotechnics
    /κατασκευη\s*οπλ/,
    /κατασκ\w*\s*πυροβολ/,
    /πυρομαχ/,
    /εκρηκτ/,
    /πυριτιδ/,
    // Alcohol — production, wholesale, retail (text patterns)
    /αλκοολουχ/,        // catches all alcohol variants without accent dependency
    /οινοπνευμ/,
    /αποσταγμ\w*\s*ποτ/,
    /ζυθοποι/,          // beer brewing
    /οινοποι/,          // winemaking
    /εμπορι\w*\s*αλκοολ/,
    /λιανικ\w{0,10}αλκοολ/,
    /χονδρικ\w{0,10}αλκοολ/,
  ];

  return sensitivePatterns.some((p) => p.test(text));
}

/**
 * Returns the robots directive for a given KAD code.
 */
export function kadRobots(code: string): { index: boolean; follow: boolean } {
  return isIndexableKadPage(code)
    ? { index: true, follow: true }
    : { index: false, follow: true };
}

/**
 * KAD pages are indexable only at the category level (codes ending in "00").
 * Sub-codes (e.g. 10111100) get noindex to avoid near-duplicate thin pages.
 */
export function isIndexableKadPage(code: string): boolean {
  // v88: Only top-level category pages (ending in "0000") are indexable.
  // Sub-category pages remain accessible but noindex to improve AdSense content quality signal.
  const padded = code.replace(/\./g, "").padStart(8, "0");
  if (!padded.endsWith("0000")) return false;
  // Exclude "ΕΛΛΕΙΨΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ" placeholder codes (10000, 20000, 30000, 40000)
  const placeholders = ["00010000", "00020000", "00030000", "00040000"];
  return !placeholders.includes(padded);
}
