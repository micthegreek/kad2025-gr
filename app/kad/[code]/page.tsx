import { isSensitiveKadPage } from "@/lib/adsense-utils";
import type { Metadata } from "next";
import Link from "next/link";
import PrintSaveBar from "@/components/PrintSaveBar";
import { NaceDescription } from "@/components/NaceDescription";
import { getNace21ForKad } from "@/lib/nace21";
import { notFound } from "next/navigation";
import kadDataRaw from "@/public/data/kad.json";
import ssgCodesRaw from "@/public/data/ssg_codes.json";
import kadEnrichmentRaw from "@/public/data/kad_enrichment.json";
import kadProgramsRaw from "@/public/data/kad_programs_lookup.json";
import professionsRaw from "@/public/data/professions.json";
import { RecentKadTracker } from "@/components/RecentKad";
import similarRaw from "@/public/data/similar_kads.json";

const SIMILAR = similarRaw as Record<string, string[]>;
const CLOSED_PROGRAMS = new Set(['espa-xekino-epixeirimatika', 'espa-paragoume-stin-ellada']);
const PROGRAM_SLUG: Record<string, string> = {
  x: "espa-xekino-epixeirimatika", e: "espa-paragoume-stin-ellada",
  m: "anaptyxiakos-metapoiisi", p: "anaptyxiakos-periohes-eidikis-enishysis",
  g: "anaptyxiakos-megales-ependyseis",
};

interface ProfCode { c: string; d08: string; n: string; d25: string; ch: boolean; idx: boolean }
interface ProfessionEntry { slug: string; name: string; emoji: string; intro: string; codes: ProfCode[] }
const PROFESSIONS = professionsRaw as ProfessionEntry[];
// v97: reverse map ΚΑΔ → επαγγέλματα (για το block «Σχετικές αναζητήσεις»)
const PROF_BY_CODE = new Map<string, ProfessionEntry[]>();
for (const p of PROFESSIONS) {
  for (const c of p.codes) {
    const arr = PROF_BY_CODE.get(c.c);
    if (arr) arr.push(p); else PROF_BY_CODE.set(c.c, [p]);
  }
}

type EnrichmentMap = Record<string, { description: string }>;
const kadEnrichment = kadEnrichmentRaw as EnrichmentMap;
const kadPrograms = kadProgramsRaw as Record<string, string[]>;

interface KadRecord {
  kad2008: string;
  kad2025: string;
  desc2008: string;
  desc2025: string;
}

const DATA = kadDataRaw as KadRecord[];
const SSG_CODES = new Set(ssgCodesRaw as string[]);

// ============================================================
// v95: Precomputed indexes (module scope — built once per worker,
// reused across all 7.000 SSG page builds → major build speedup)
// ============================================================
const BY_2008_FIRST = new Map<string, KadRecord>();
const BY_2008_ALL = new Map<string, KadRecord[]>();
const BY_2025_FIRST = new Map<string, KadRecord>();
const BY_2025_ALL = new Map<string, KadRecord[]>();
const BY_STRIPPED_2008_FIRST = new Map<string, KadRecord>();
const BY_PREFIX4_2025 = new Map<string, KadRecord[]>();
const CHANGED_BY_PREFIX2_2008 = new Map<string, KadRecord[]>();
const SECTOR_STATS = new Map<string, { total: number; changed: number }>();

for (const r of DATA) {
  if (!BY_2008_FIRST.has(r.kad2008)) BY_2008_FIRST.set(r.kad2008, r);
  const a08 = BY_2008_ALL.get(r.kad2008);
  if (a08) a08.push(r); else BY_2008_ALL.set(r.kad2008, [r]);

  if (!BY_2025_FIRST.has(r.kad2025)) BY_2025_FIRST.set(r.kad2025, r);
  const a25 = BY_2025_ALL.get(r.kad2025);
  if (a25) a25.push(r); else BY_2025_ALL.set(r.kad2025, [r]);

  const stripped = r.kad2008.replace(/^0+/, "");
  if (!BY_STRIPPED_2008_FIRST.has(stripped)) BY_STRIPPED_2008_FIRST.set(stripped, r);

  const p4 = r.kad2025.slice(0, 4);
  const ap4 = BY_PREFIX4_2025.get(p4);
  if (ap4) ap4.push(r); else BY_PREFIX4_2025.set(p4, [r]);

  const p2 = r.kad2008.padStart(8, "0").slice(0, 2);
  const stats = SECTOR_STATS.get(p2) ?? { total: 0, changed: 0 };
  stats.total += 1;
  if (r.kad2008 !== r.kad2025) {
    stats.changed += 1;
    const ac = CHANGED_BY_PREFIX2_2008.get(p2);
    if (ac) ac.push(r); else CHANGED_BY_PREFIX2_2008.set(p2, [r]);
  }
  SECTOR_STATS.set(p2, stats);
}

// v95: Primary-mapping selection for multi-mapping ΚΑΔ 2008.
// kad.json file order is NOT semantic — 66 codes had a cross-sector record first
// (e.g. 93291900 ΨΥΧΑΓΩΓΙΚΕΣ → 84250900 ΠΥΡΟΣΒΕΣΤΙΚΕΣ as "κύρια" while the
// self-mapping 93291900→93291900 existed). Data stays untouched; we only pick
// a sane primary: (1) self-mapping, (2) same 2-digit sector, (3) file order.
function selectPrimary(records: KadRecord[], kad2008: string): KadRecord {
  const sec = kad2008.padStart(8, "0").slice(0, 2);
  return (
    records.find((r) => r.kad2025 === kad2008) ??
    records.find((r) => r.kad2025.padStart(8, "0").slice(0, 2) === sec) ??
    records[0]
  );
}

// v83: Priority lookup — kad2008 first to avoid canonical mismatch (v95: Map-based + smart primary)
function findKadRecord(code: string): KadRecord | undefined {
  const clean = code.replace(/\D/g, "");
  const padded = clean.padStart(8, "0");
  const direct2008 =
    BY_2008_FIRST.get(clean) ??
    BY_2008_FIRST.get(padded) ??
    BY_STRIPPED_2008_FIRST.get(clean);
  if (direct2008) {
    const all = BY_2008_ALL.get(direct2008.kad2008);
    return all ? selectPrimary(all, direct2008.kad2008) : direct2008;
  }
  return BY_2025_FIRST.get(clean) ?? BY_2025_FIRST.get(padded);
}

// v95: Canonical code resolution. The canonical URL is the kad2008 page when it
// is pre-built; otherwise the page is self-canonical. Fixes canonical→404 bug
// and guarantees sitemap/canonical/robots consistency.
function getCanonicalCode(record: KadRecord, requestedCode: string): string {
  return SSG_CODES.has(record.kad2008) ? record.kad2008 : requestedCode;
}

// Klados pages that actually exist (must match SECTIONS in app/klados/[section]/page.tsx)
const KLADOS_PAGES = new Set([
  "01","02","03","10","11","14","20","21","25","41","43","45","46","47","49",
  "55","56","62","68","69","70","71","85","86","93","96","50","63",
]);

// ΕΣΠΑ / Αναπτυξιακός program metadata (keys match kad_programs_lookup.json — keyed by ΚΑΔ 2025)
const PROGRAM_META: Record<string, { label: string; emoji: string }> = {
  e: { label: "ΕΣΠΑ «Παράγουμε στην Ελλάδα»", emoji: "🏭" },
  m: { label: "Αναπτυξιακός Νόμος — Μεταποίηση Δ΄ Κύκλος", emoji: "⚙️" },
  p: { label: "Αναπτυξιακός Νόμος — Περιοχές Ειδικής Ενίσχυσης Β΄", emoji: "📍" },
  g: { label: "Αναπτυξιακός Νόμος — Μεγάλες Επενδύσεις Β΄", emoji: "🏗️" },
  x: { label: "ΕΣΠΑ «Ξεκινώ Επιχειρηματικά»", emoji: "🚀" },
};

// Section definitions for rich content generation
const SECTION_MAP: Record<string, { name: string; audience: string; desc: string }> = {
  "01": { name: "Φυτικής & Ζωικής Παραγωγής", audience: "αγρότες και κτηνοτρόφους", desc: "πρωτογενή τομέα" },
  "02": { name: "Δασοκομίας & Υλοτομίας", audience: "επιχειρήσεις δασοκομίας", desc: "δασικό τομέα" },
  "03": { name: "Αλιείας & Υδατοκαλλιέργειας", audience: "αλιείς και υδατοκαλλιεργητές", desc: "αλιευτικό τομέα" },
  "10": { name: "Βιομηχανίας Τροφίμων", audience: "επιχειρήσεις τροφίμων", desc: "μεταποίηση τροφίμων" },
  "11": { name: "Ποτοποιίας", audience: "παραγωγούς ποτών", desc: "βιομηχανία ποτών" },
  "14": { name: "Κατασκευής Ενδυμάτων", audience: "επιχειρήσεις ένδυσης", desc: "κλωστοϋφαντουργία" },
  "20": { name: "Χημικής Βιομηχανίας", audience: "χημικές βιομηχανίες", desc: "χημικό τομέα" },
  "21": { name: "Φαρμακευτικής Βιομηχανίας", audience: "φαρμακευτικές εταιρείες", desc: "φαρμακευτικό τομέα" },
  "41": { name: "Κατασκευών", audience: "κατασκευαστικές εταιρείες", desc: "κατασκευαστικό τομέα" },
  "43": { name: "Εξειδικευμένων Κατασκευών", audience: "εξειδικευμένους εργολάβους", desc: "εξειδικευμένες κατασκευές" },
  "45": { name: "Εμπορίου Οχημάτων", audience: "αντιπροσώπους οχημάτων", desc: "εμπόριο αυτοκινήτων" },
  "46": { name: "Χονδρικού Εμπορίου", audience: "χονδρεμπόρους και διανομείς", desc: "χονδρικό εμπόριο" },
  "47": { name: "Λιανικού Εμπορίου", audience: "λιανέμπορους και καταστήματα", desc: "λιανικό εμπόριο" },
  "49": { name: "Χερσαίων Μεταφορών", audience: "μεταφορικές εταιρείες", desc: "οδικές μεταφορές" },
  "55": { name: "Καταλυμάτων & Ξενοδοχείων", audience: "ξενοδοχεία και καταλύματα", desc: "τουριστικό τομέα" },
  "56": { name: "Εστίασης", audience: "εστιατόρια και καφέ", desc: "κλάδο εστίασης" },
  "62": { name: "Πληροφορικής & IT", audience: "εταιρείες τεχνολογίας", desc: "ψηφιακό τομέα" },
  "68": { name: "Ακίνητης Περιουσίας", audience: "μεσίτες και διαχειριστές ακινήτων", desc: "αγορά ακινήτων" },
  "69": { name: "Νομικών & Λογιστικών", audience: "δικηγόρους και λογιστές", desc: "νομικές και λογιστικές υπηρεσίες" },
  "70": { name: "Συμβουλευτικών Υπηρεσιών", audience: "επιχειρηματικούς συμβούλους", desc: "συμβουλευτικές υπηρεσίες" },
  "71": { name: "Αρχιτεκτονικών & Μηχανικών", audience: "αρχιτέκτονες και μηχανικούς", desc: "τεχνικές υπηρεσίες" },
  "85": { name: "Εκπαίδευσης", audience: "σχολεία και φροντιστήρια", desc: "εκπαιδευτικό τομέα" },
  "86": { name: "Υγείας", audience: "γιατρούς και κλινικές", desc: "υγειονομικό τομέα" },
  "93": { name: "Αθλητισμού & Ψυχαγωγίας", audience: "αθλητικές εγκαταστάσεις", desc: "αθλητικό τομέα" },
  "96": { name: "Άλλων Υπηρεσιών", audience: "παρόχους υπηρεσιών", desc: "τομέα υπηρεσιών" },
  "12": { name: "Βιομηχανίας Καπνού", audience: "επιχειρήσεις καπνού", desc: "βιομηχανία καπνού" },
  "13": { name: "Κλωστοϋφαντουργίας", audience: "βιομηχανίες υφαντικών", desc: "κλωστοϋφαντουργία" },
  "15": { name: "Βιομηχανίας Δέρματος", audience: "βιομηχανίες δέρματος", desc: "βιομηχανία υποδημάτων" },
  "16": { name: "Βιομηχανίας Ξύλου", audience: "βιομηχανίες ξύλου", desc: "ξυλουργικές επιχειρήσεις" },
  "17": { name: "Χαρτοβιομηχανίας", audience: "βιομηχανίες χαρτιού", desc: "χαρτοβιομηχανία" },
  "18": { name: "Εκτύπωσης & Αναπαραγωγής", audience: "τυπογραφεία και εκδότες", desc: "εκτυπωτικές υπηρεσίες" },
  "19": { name: "Παραγωγής Οπτάνθρακα & Πετρελαίου", audience: "διυλιστήρια πετρελαίου", desc: "πετρελαϊκό τομέα" },
  "22": { name: "Βιομηχανίας Πλαστικών", audience: "βιομηχανίες πλαστικών", desc: "πλαστικά και καουτσούκ" },
  "23": { name: "Βιομηχανίας Μη Μεταλλικών", audience: "βιομηχανίες μη μεταλλικών", desc: "μη μεταλλικά ορυκτά" },
  "24": { name: "Μεταλλουργίας", audience: "μεταλλουργικές βιομηχανίες", desc: "βασικά μέταλλα" },
  "25": { name: "Κατασκευής Μεταλλικών Προϊόντων", audience: "μεταλλικές βιομηχανίες", desc: "μεταλλικά προϊόντα" },
  "26": { name: "Ηλεκτρονικών & Οπτικών", audience: "ηλεκτρονικές βιομηχανίες", desc: "ηλεκτρονικά προϊόντα" },
  "27": { name: "Ηλεκτρολογικού Εξοπλισμού", audience: "ηλεκτρολογικές βιομηχανίες", desc: "ηλεκτρολογικά προϊόντα" },
  "28": { name: "Μηχανολογικού Εξοπλισμού", audience: "μηχανουργεία", desc: "μηχανολογικός εξοπλισμός" },
  "29": { name: "Κατασκευής Οχημάτων", audience: "αυτοκινητοβιομηχανία", desc: "μεταφορικά μέσα" },
  "30": { name: "Λοιπού Εξοπλισμού", audience: "λοιπές βιομηχανίες", desc: "λοιπός εξοπλισμός" },
  "31": { name: "Επίπλων", audience: "βιομηχανίες επίπλων", desc: "βιομηχανία επίπλου" },
  "32": { name: "Λοιπής Μεταποίησης", audience: "λοιπές μεταποιητικές", desc: "λοιπή μεταποίηση" },
  "33": { name: "Επισκευής & Εγκατάστασης", audience: "τεχνικές υπηρεσίες", desc: "επισκευή μηχανημάτων" },
  "35": { name: "Παροχής Ηλεκτρικής Ενέργειας", audience: "εταιρείες ενέργειας", desc: "ηλεκτρισμό και ενέργεια" },
  "36": { name: "Συλλογής & Επεξεργασίας Νερού", audience: "επιχειρήσεις ύδρευσης", desc: "υδροδότηση" },
  "38": { name: "Διαχείρισης Αποβλήτων", audience: "εταιρείες αποβλήτων", desc: "διαχείριση αποβλήτων" },
  "39": { name: "Αποκατάστασης Περιβάλλοντος", audience: "περιβαλλοντικές εταιρείες", desc: "αποκατάσταση περιβάλλοντος" },
  "42": { name: "Έργων Πολιτικού Μηχανικού", audience: "εταιρείες υποδομών", desc: "κατασκευή υποδομών" },
  "44": { name: "Εμπορίου Ναυτιλιακού Εξοπλισμού", audience: "ναυτιλιακές επιχειρήσεις", desc: "ναυτιλιακό εμπόριο" },
  "50": { name: "Πλωτών Μεταφορών", audience: "ναυτιλιακές εταιρείες", desc: "πλωτές μεταφορές" },
  "51": { name: "Αεροπορικών Μεταφορών", audience: "αεροπορικές εταιρείες", desc: "αεροπορικές μεταφορές" },
  "52": { name: "Αποθήκευσης & Υποστήριξης Μεταφορών", audience: "logistics εταιρείες", desc: "αποθήκευση και logistics" },
  "53": { name: "Ταχυδρομικών Υπηρεσιών", audience: "ταχυδρομικές εταιρείες", desc: "ταχυδρομικές υπηρεσίες" },
  "58": { name: "Εκδοτικής Δραστηριότητας", audience: "εκδοτικούς οίκους", desc: "εκδοτική βιομηχανία" },
  "59": { name: "Κινηματογράφου & Τηλεόρασης", audience: "παραγωγικές εταιρείες", desc: "οπτικοακουστικές παραγωγές" },
  "60": { name: "Ραδιοτηλεοπτικής Δραστηριότητας", audience: "τηλεοπτικά και ραδιοφωνικά", desc: "μέσα ενημέρωσης" },
  "61": { name: "Τηλεπικοινωνιών", audience: "τηλεπικοινωνιακές εταιρείες", desc: "τηλεπικοινωνίες" },
  "63": { name: "Υπηρεσιών Πληροφορίας", audience: "εταιρείες πληροφορίας", desc: "υπηρεσίες δεδομένων" },
  "64": { name: "Χρηματοπιστωτικών Υπηρεσιών", audience: "τράπεζες και χρηματιστές", desc: "χρηματοπιστωτικό τομέα" },
  "65": { name: "Ασφαλιστικών Υπηρεσιών", audience: "ασφαλιστικές εταιρείες", desc: "ασφαλιστικό τομέα" },
  "66": { name: "Λοιπών Χρηματοοικονομικών", audience: "χρηματοοικονομικούς μεσάζοντες", desc: "χρηματοοικονομικές υπηρεσίες" },
  "72": { name: "Έρευνας & Ανάπτυξης", audience: "ερευνητικά ινστιτούτα", desc: "έρευνα και ανάπτυξη" },
  "73": { name: "Διαφήμισης & Έρευνας Αγοράς", audience: "διαφημιστικές εταιρείες", desc: "διαφήμιση και marketing" },
  "74": { name: "Άλλων Επαγγελματικών Δραστηριοτήτων", audience: "επαγγελματίες", desc: "επαγγελματικές υπηρεσίες" },
  "75": { name: "Κτηνιατρικών Υπηρεσιών", audience: "κτηνιάτρους", desc: "κτηνιατρικές υπηρεσίες" },
  "77": { name: "Ενοικίασης & Εκμίσθωσης", audience: "εταιρείες ενοικίασης", desc: "ενοικίαση εξοπλισμού" },
  "78": { name: "Απασχόλησης", audience: "γραφεία εύρεσης εργασίας", desc: "υπηρεσίες απασχόλησης" },
  "79": { name: "Τουριστικών Πρακτορείων", audience: "τουριστικά γραφεία", desc: "τουριστικές υπηρεσίες" },
  "80": { name: "Υπηρεσιών Ασφάλειας", audience: "εταιρείες ασφαλείας", desc: "υπηρεσίες φύλαξης" },
  "81": { name: "Υπηρεσιών Κτιρίων", audience: "εταιρείες καθαριότητας", desc: "διαχείριση κτιρίων" },
  "82": { name: "Διοικητικών Υπηρεσιών", audience: "γραφεία υποστήριξης", desc: "διοικητικές υπηρεσίες" },
  "84": { name: "Δημόσιας Διοίκησης", audience: "δημόσιους φορείς", desc: "δημόσια διοίκηση" },
  "87": { name: "Κοινωνικής Μέριμνας με Παροχή", audience: "οίκους ευγηρίας", desc: "κοινωνικές υπηρεσίες" },
  "88": { name: "Κοινωνικής Μέριμνας χωρίς Παροχή", audience: "κοινωνικούς φορείς", desc: "κοινωνική μέριμνα" },
  "90": { name: "Δημιουργικών Τεχνών", audience: "καλλιτέχνες και πολιτιστικούς", desc: "πολιτιστικές δραστηριότητες" },
  "91": { name: "Βιβλιοθηκών & Μουσείων", audience: "πολιτιστικούς οργανισμούς", desc: "πολιτιστικές υπηρεσίες" },
  "92": { name: "Τυχερών Παιχνιδιών", audience: "εταιρείες τυχερών παιχνιδιών", desc: "τυχερά παιχνίδια" },
  "94": { name: "Δραστηριοτήτων Οργανώσεων", audience: "σωματεία και ενώσεις", desc: "οργανώσεις μελών" },
  "95": { name: "Επισκευής Υπολογιστών", audience: "τεχνικούς υπολογιστών", desc: "επισκευή ηλεκτρονικών" },
};

function getSectionInfo(kod: string) {
  const prefix = kod.padStart(8, "0").slice(0, 2);
  return SECTION_MAP[prefix] || { name: "Οικονομικής Δραστηριότητας", audience: "επιχειρήσεις", desc: "επιχειρηματικό τομέα" };
}

// ============================================================
// v95: Rich, data-driven unique description — composes real facts
// (merge/split topology, sector statistics, program eligibility)
// so every page carries genuinely differentiated editorial content.
// kad_enrichment.json (Groq editorial) overrides paragraph 1 when present.
// ============================================================
function generateUniqueParagraphs(
  r: KadRecord,
  mergeCount: number,
  splitCount: number,
  eligiblePrograms: string[],
): string[] {
  const section = getSectionInfo(r.kad2008);
  const prefix2 = r.kad2008.padStart(8, "0").slice(0, 2);
  const stats = SECTOR_STATS.get(prefix2);
  const changed = r.kad2008 !== r.kad2025;
  const paragraphs: string[] = [];

  // Παράγραφος 1 — αφήγηση αντιστοίχισης με πραγματική τοπολογία
  if (changed && splitCount > 0) {
    paragraphs.push(
      `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) διασπάστηκε σε ${splitCount + 1} νέους κωδικούς στη νέα ονοματολογία ΚΑΔ 2025, με κύρια αντιστοίχιση τον ΚΑΔ ${r.kad2025} (${r.desc2025}). Η διάσπαση προβλέπεται από τον πίνακα αντιστοίχισης της απόφασης ΑΑΔΕ Α.1004/2026 και σημαίνει ότι η επιχείρηση πρέπει να επιλέξει τον κωδικό που περιγράφει ακριβέστερα την πραγματική της δραστηριότητα — η αυτόματη επιλογή της ΑΑΔΕ δεν είναι πάντοτε η καταλληλότερη.`
    );
  } else if (changed && mergeCount > 0) {
    paragraphs.push(
      `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντικαταστάθηκε από τον νέο ΚΑΔ ${r.kad2025} στο πλαίσιο της αναθεώρησης NACE Rev.2.1, που τέθηκε σε ισχύ την 1η Μαρτίου 2026 με την απόφαση ΑΑΔΕ Α.1003/2026. Ο νέος κωδικός προέκυψε από τη συγχώνευση ${mergeCount + 1} παλαιών κωδικών του κλάδου ${section.name}. Η συγχώνευση σημαίνει ότι περισσότερες συγγενείς δραστηριότητες περιγράφονται πλέον από έναν ενιαίο κωδικό, χωρίς αυτό να μεταβάλλει το αντικείμενο της επιχείρησης.`
    );
  } else if (changed) {
    paragraphs.push(
      `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντικαταστάθηκε από τον ΚΑΔ ${r.kad2025} (${r.desc2025}) σύμφωνα με τον επίσημο πίνακα αντιστοίχισης της ΑΑΔΕ (Α.1004/2026). Πρόκειται για αντιστοίχιση ένα-προς-ένα: η περιγραφή της δραστηριότητας προσαρμόστηκε στη δομή της NACE Rev.2.1, αλλά το αντικείμενο παραμένει το ίδιο. Η ΑΑΔΕ πραγματοποίησε την αλλαγή αυτόματα στις 9 Μαρτίου 2026.`
    );
  } else {
    if (splitCount > 0) {
      paragraphs.push(
        `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) διατηρείται και στη νέα ονοματολογία ΚΑΔ 2025 ως κύρια επιλογή, ωστόσο ο πίνακας αντιστοίχισης της ΑΑΔΕ (Α.1004/2026) προβλέπει συνολικά ${splitCount + 1} πιθανές αντιστοιχίσεις για τον κωδικό αυτό. Στις περισσότερες περιπτώσεις η αυτόματη αντιστοίχιση διατήρησε τον ίδιο κωδικό, αλλά αξίζει να επιβεβαιώσετε στο myAADE ποια επιλογή αποδόθηκε στη δική σας επιχείρηση — ιδίως αν η δραστηριότητά σας περιγράφεται ακριβέστερα από κάποια εναλλακτική.`
      );
    } else {
      paragraphs.push(
        `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) παρέμεινε αμετάβλητος στη νέα ονοματολογία ΚΑΔ 2025, σύμφωνα με την απόφαση ΑΑΔΕ Α.1003/2026 που ισχύει από την 1η Μαρτίου 2026. Εφόσον η ΑΑΔΕ επιβεβαίωσε τον ίδιο κωδικό κατά την αυτόματη αντιστοίχιση, δεν απαιτείται καμία ενέργεια από τις επιχειρήσεις που τον χρησιμοποιούν — ούτε μεταβολή στο Μητρώο ούτε ενημέρωση παραστατικών.`
      );
    }
  }

  // Παράγραφος 2 — πραγματικά στατιστικά κλάδου (μοναδικά ανά τομέα)
  if (stats && stats.total > 0) {
    const pct = Math.round((stats.changed / stats.total) * 100);
    if (changed) {
      paragraphs.push(
        `Στον κλάδο ${section.name} (τομέας ${prefix2}), ${stats.changed} από τους ${stats.total} κωδικούς (${pct}%) άλλαξαν με τη μετάβαση στη NACE Rev.2.1 — ο συγκεκριμένος ΚΑΔ είναι ένας από αυτούς. Αν δραστηριοποιείστε στον ${section.desc}, αξίζει να ελέγξετε και τους υπόλοιπους κωδικούς που τυχόν έχετε δηλωμένους ως δευτερεύουσες δραστηριότητες, καθώς οι αλλαγές στον κλάδο αυτό είναι ${pct >= 60 ? "εκτεταμένες" : pct >= 25 ? "σημαντικές" : "περιορισμένες αλλά υπαρκτές"}.`
      );
    } else {
      paragraphs.push(
        `Στον κλάδο ${section.name} (τομέας ${prefix2}), ${stats.changed} από τους ${stats.total} κωδικούς (${pct}%) άλλαξαν με τη NACE Rev.2.1 — ο συγκεκριμένος ΚΑΔ ανήκει στους ${stats.total - stats.changed} που διατηρήθηκαν ως είχαν. Ωστόσο, αν η επιχείρησή σας έχει δηλωμένες και άλλες δραστηριότητες στον ${section.desc}, ελέγξτε τις ξεχωριστά: το γεγονός ότι ο κύριος ΚΑΔ δεν άλλαξε δεν σημαίνει ότι ισχύει το ίδιο για τους δευτερεύοντες.`
      );
    }
  }

  // Παράγραφος 3 — επιλεξιμότητα προγραμμάτων (πραγματικά δεδομένα ανά κωδικό)
  if (eligiblePrograms.length > 0) {
    const CLOSED_KEYS = new Set(["x", "p"]);
    const names = eligiblePrograms.map((p) => PROGRAM_META[p] ? PROGRAM_META[p].label + (CLOSED_KEYS.has(p) ? " (ο κύκλος ολοκληρώθηκε)" : "") : null).filter(Boolean);
    paragraphs.push(
      `Σημαντικό για επιδοτήσεις: ο νέος ΚΑΔ ${r.kad2025} περιλαμβάνεται στους επιλέξιμους κωδικούς ${names.length === 1 ? "του προγράμματος" : `${names.length} ενεργών προγραμμάτων`}: ${names.join(" · ")}. Η επιλεξιμότητα βάσει ΚΑΔ είναι προϋπόθεση αλλά όχι εγγύηση ένταξης — απαιτείται έλεγχος και των λοιπών κριτηρίων κάθε προκήρυξης (μέγεθος επιχείρησης, περιοχή, ύψος επένδυσης). Ένας λανθασμένος ΚΑΔ στο Μητρώο μπορεί να αποκλείσει την επιχείρηση από χρηματοδότηση, γι' αυτό η επιβεβαίωση της αντιστοίχισης έχει και ουσιαστικό οικονομικό αντίκρισμα.`
    );
  } else if (changed) {
    paragraphs.push(
      `Ο κωδικός αυτός δεν εμφανίζεται στους πίνακες επιλέξιμων ΚΑΔ των τρεχόντων προγραμμάτων ΕΣΠΑ και Αναπτυξιακού Νόμου που παρακολουθεί το kad2025.gr. Οι προκηρύξεις όμως ανανεώνονται τακτικά και οι λίστες επιλεξιμότητας διαφέρουν ανά πρόγραμμα — αν σχεδιάζετε επένδυση, ελέγξτε την τρέχουσα κατάσταση στο εργαλείο επιλεξιμότητας ή στην εκάστοτε προκήρυξη.`
    );
  }

  // Παράγραφος 4 — πρακτική καθοδήγηση ανάλογα με την περίπτωση
  if (changed) {
    paragraphs.push(
      `Τι πρέπει να κάνετε: συνδεθείτε στο myAADE (Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας) και επιβεβαιώστε ότι ο ΚΑΔ ${r.kad2025} αποδίδει σωστά τη δραστηριότητά σας. Αν χρειάζεται διόρθωση, υποβάλλεται μέσω της εφαρμογής «Μεταβολή Εργασιών» χωρίς πρόστιμο έως τις 30 Οκτωβρίου 2026 (απόφαση Α.1113/2026). Ενημερώστε επίσης λογιστή, τιμολογιακά προγράμματα και τυχόν μητρώα (ΓΕΜΗ, επιμελητήρια) ώστε όλα τα συστήματα να αναφέρουν τον ίδιο κωδικό.`
    );
  }

  return paragraphs;
}

// All 7.000 SSG codes pre-built at deploy — Cloudflare Pages route limit
export async function generateStaticParams() {
  return (ssgCodesRaw as string[]).map((code) => ({ code }));
}

export const dynamicParams = false;  // Cloudflare Pages doesn't support ISR — all codes must be pre-built
export const revalidate = false;     // static forever — KAD data never changes after deploy

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;

  // v58: Fast validation — malformed codes get minimal metadata with noindex
  if (!/^\d{4,8}$/.test(code)) {
    return { title: `ΚΑΔ ${code} - Δεν βρέθηκε`, robots: { index: false, follow: false } };
  }

  const record = findKadRecord(code);
  if (!record) return { title: `ΚΑΔ ${code} - Δεν βρέθηκε`, robots: { index: false, follow: false } };

  const changed = record.kad2008 !== record.kad2025;
  const section = getSectionInfo(record.kad2008);

  // Multi-mapping count — same SSG filter as the visible list (title must match page)
  const allMappingsCount = (BY_2008_ALL.get(record.kad2008) ?? [])
    .filter((x) => x.kad2025 !== record.kad2025 && SSG_CODES.has(x.kad2025)).length;
  const isMulti = allMappingsCount > 0;

  // v95: canonical/robots fully consistent with sitemap rules
  const canonicalCode = getCanonicalCode(record, code);
  const isAlternate = canonicalCode !== code;
  const isSensitive = isSensitiveKadPage(
    code.replace(/\./g, "").padStart(8, "0"),
    `${record.desc2008 ?? ""} ${record.desc2025 ?? ""}`
  );
  const shouldNoIndex = isSensitive || isAlternate;

  // Enrich with NACE 2.1 description
  const nace = getNace21ForKad(record.kad2025);
  const naceTitle = nace?.class_?.title ?? nace?.group?.title ?? "";
  const naceSnippet = naceTitle ? ` ${naceTitle}.` : "";

  // Title: max ~60 chars (template adds " | kad2025.gr")
  let pageTitle: string;
  let metaDesc: string;
  let ogDesc: string;

  if (isMulti) {
    const totalOptions = allMappingsCount + 1;
    pageTitle = `ΚΑΔ ${record.kad2008} | ${totalOptions} Αντιστοιχίσεις 2025`;
    metaDesc = `Ο ΚΑΔ ${record.kad2008} αντιστοιχίζεται σε ${totalOptions} νέους ΚΑΔ 2025. Δείτε όλες τις επιλογές και ποια ταιριάζει στη δραστηριότητά σας. Κλάδος ${section.name}.`;
    ogDesc = `${record.desc2008} → ${totalOptions} πιθανοί ΚΑΔ 2025. Κλάδος: ${section.name}.`;
  } else if (!changed) {
    // v95: αμετάβλητος κωδικός — διαφοροποιημένος τίτλος (το ⇒ "A → A" μπέρδευε)
    const titlePrefix = `ΚΑΔ ${record.kad2008} Αμετάβλητος | `;
    const maxDescLen = Math.max(20, 60 - titlePrefix.length);
    const titleDesc = record.desc2008.length > maxDescLen
      ? record.desc2008.slice(0, maxDescLen - 1) + "…"
      : record.desc2008;
    pageTitle = `${titlePrefix}${titleDesc}`;
    metaDesc = `Ο ΚΑΔ ${record.kad2008} (${record.desc2008.slice(0, 60)}) παρέμεινε ίδιος στους ΚΑΔ 2025. Κλάδος ${section.name}.${naceSnippet} Καμία ενέργεια δεν απαιτείται.`;
    ogDesc = `${record.desc2008} — αμετάβλητος στους ΚΑΔ 2025. Κλάδος: ${section.name}.${naceSnippet}`;
  } else {
    const titlePrefix = `ΚΑΔ ${record.kad2008} → ${record.kad2025} | `;
    const maxDescLen = Math.max(20, 60 - titlePrefix.length);
    const titleDesc = record.desc2008.length > maxDescLen
      ? record.desc2008.slice(0, maxDescLen - 1) + "…"
      : record.desc2008;
    pageTitle = `${titlePrefix}${titleDesc}`;
    metaDesc = `Αντιστοίχιση ΚΑΔ ${record.kad2008} (${record.desc2008.slice(0, 60)}) με νέο ΚΑΔ 2025: ${record.kad2025}. Κλάδος ${section.name}.${naceSnippet} Ισχύει από 1/3/2026.`;
    ogDesc = `${record.desc2008} → ${record.desc2025}. Κλάδος: ${section.name}.${naceSnippet}`;
  }

  return {
    title: pageTitle,
    description: metaDesc,
    alternates: { canonical: `https://www.kad2025.gr/kad/${canonicalCode}` },
    robots: shouldNoIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: ogDesc,
    },
  };
}

export default async function KadDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  // v58: Fast validation before data lookup — malformed codes 404 immediately
  if (!/^\d{4,8}$/.test(code)) {
    notFound();
  }

  const record = findKadRecord(code);
  if (!record) notFound();
  const r = record!;

  // Multi-mapping: ALL records where this KAD 2008 maps to different KAD 2025 (SSG-safe links only)
  const allMappings = (BY_2008_ALL.get(r.kad2008) ?? []).filter(
    (x) => x.kad2025 !== r.kad2025 && SSG_CODES.has(x.kad2025)
  );

  const changed = r.kad2008 !== r.kad2025;
  const section = getSectionInfo(r.kad2008);
  const relatedOld = (BY_2025_ALL.get(r.kad2025) ?? []).filter(
    (x) => x.kad2008 !== r.kad2008 && SSG_CODES.has(x.kad2008)
  );
  const prefix4 = r.kad2025.slice(0, 4);
  // Use kad2008 prefix for sector (not kad2025) — prevents cross-sector contamination
  const prefix2 = r.kad2008.padStart(8, "0").slice(0, 2);
  // Same 4-digit prefix of new KAD (closely related activity)
  const relatedNew = (BY_PREFIX4_2025.get(prefix4) ?? [])
    .filter((x) => x.kad2025 !== r.kad2025 && SSG_CODES.has(x.kad2025))
    .slice(0, 5);
  // Same 2-digit prefix of OLD KAD (same sector) — strict sector match, changed codes only
  const relatedSector = (CHANGED_BY_PREFIX2_2008.get(prefix2) ?? [])
    .filter((x) => x.kad2008 !== r.kad2008 && !relatedNew.find((n) => n.kad2025 === x.kad2025) && SSG_CODES.has(x.kad2008))
    .slice(0, Math.max(0, 8 - relatedNew.length));

  // v95: program eligibility (lookup keyed by ΚΑΔ 2025) + rich unique content
  const eligiblePrograms = kadPrograms[r.kad2025] ?? [];
  const uniqueParagraphs = generateUniqueParagraphs(r, relatedOld.length, allMappings.length, eligiblePrograms);
  const enrichedFirst = kadEnrichment[r.kad2008]?.description;

  const canonicalCode = getCanonicalCode(r, code);
  const canonicalUrl = `https://www.kad2025.gr/kad/${canonicalCode}`;
  const hasKladosPage = KLADOS_PAGES.has(prefix2);
  const kladosHref = hasKladosPage ? `/klados/${prefix2}` : "/klados";

  // Single FAQ source — used by BOTH visible FAQ and JSON-LD (Google requires exact match)
  const faqItems = [
    {
      q: `Σε ποιον νέο ΚΑΔ 2025 αντιστοιχεί ο ΚΑΔ ${r.kad2008};`,
      a: allMappings.length > 0
        ? `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντιστοιχεί σε ${allMappings.length + 1} νέους ΚΑΔ 2025: κυρίως στον ${r.kad2025} (${r.desc2025})${allMappings.map((m) => `, αλλά και στον ${m.kad2025} (${m.desc2025})`).join("")}. Ελέγξτε ποιος ταιριάζει στη δραστηριότητά σας.`
        : `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντιστοιχεί στον νέο ΚΑΔ ${r.kad2025} (${r.desc2025}). ${changed ? "Ο κωδικός άλλαξε με την εφαρμογή της NACE Rev.2.1." : "Ο κωδικός παρέμεινε αμετάβλητος."}`,
    },
    {
      q: "Πότε ισχύει η νέα αντιστοίχιση ΚΑΔ;",
      a: "Από 1η Μαρτίου 2026. Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026 με βάση τις αποφάσεις Α.1003/2026 και Α.1004/2026.",
    },
    {
      q: "Πώς ελέγχω τον νέο ΚΑΔ μου στο myAADE;",
      a: "Συνδεθείτε στο myaade.gov.gr → Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας.",
    },
    {
      q: "Μέχρι πότε μπορώ να διορθώσω τον ΚΑΔ μου χωρίς πρόστιμο;",
      a: "Έως 30 Οκτωβρίου 2026 (απόφαση Α.1113/2026), μέσω της εφαρμογής Μεταβολή Εργασιών στο myAADE ή μέσω Τα Αιτήματά μου με έντυπο Δ211.",
    },
  ];

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
    { "@type": "ListItem", position: 2, name: "Αντιστοίχιση ΚΑΔ", item: "https://www.kad2025.gr/antistoixisi" },
    ...(hasKladosPage
      ? [{ "@type": "ListItem", position: 3, name: section.name, item: `https://www.kad2025.gr/klados/${prefix2}` }]
      : []),
    { "@type": "ListItem", position: hasKladosPage ? 4 : 3, name: `ΚΑΔ ${r.kad2008}`, item: canonicalUrl },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": "https://www.kad2025.gr/#kadset2025",
        name: "ΚΑΔ 2025 — Κωδικοί Αριθμοί Δραστηριότητας (NACE Rev.2.1)",
        url: "https://www.kad2025.gr",
      },
      {
        "@type": "DefinedTerm",
        "@id": `${canonicalUrl}#term2008`,
        termCode: r.kad2008,
        name: r.desc2008,
        inDefinedTermSet: { "@type": "DefinedTermSet", "@id": "https://www.kad2025.gr/#kadset2008", name: "ΚΑΔ 2008 (NACE Rev.2)" },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${canonicalUrl}#term2025`,
        termCode: r.kad2025,
        name: r.desc2025,
        inDefinedTermSet: { "@id": "https://www.kad2025.gr/#kadset2025" },
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: `ΚΑΔ ${r.kad2008} → ${r.kad2025} | Αντιστοίχιση 2025`,
        description: (enrichedFirst ?? uniqueParagraphs[0] ?? "").slice(0, 300),
        inLanguage: "el-GR",
        dateModified: "2026-06-10",
        isPartOf: { "@id": "https://www.kad2025.gr/#website" },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <RecentKadTracker code={r.kad2008} desc={r.desc2008} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/antistoixisi" style={{ color: "var(--primary)", textDecoration: "none" }}>Αντιστοίχιση</Link>
        {" → "}
        <Link href={kladosHref} style={{ color: "var(--primary)", textDecoration: "none" }}>{section.name}</Link>
        {" → "}
        <span>ΚΑΔ {code}</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
        ΚΑΔ {r.kad2008} — {r.desc2008}
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
        Κλάδος: <strong>{section.name}</strong> · Αντιστοίχιση βάσει ΑΑΔΕ Α.1003/2026 & Α.1004/2026
      </p>

      {/* ===== TL;DR — AI answer box for SGE/ChatGPT citations ===== */}
      <div className="tldr">
        <strong style={{ color: "var(--primary)" }}>Σύντομη απάντηση:</strong>{" "}
        {changed
          ? <>Ο ΚΑΔ {r.kad2008} αντιστοιχίζεται στον νέο ΚΑΔ <strong>{r.kad2025}</strong> ({r.desc2025}).{allMappings.length > 0 && <> Υπάρχουν {allMappings.length + 1} πιθανές αντιστοιχίσεις.</>} Απαιτείται έλεγχος μέσω <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myAADE</a>. Προθεσμία: 30/10/2026.</>
          : allMappings.length > 0
          ? <>Ο ΚΑΔ {r.kad2008} <strong>διατηρείται ως κύρια επιλογή</strong>, αλλά ο πίνακας ΑΑΔΕ προβλέπει και {allMappings.length} εναλλακτικ{allMappings.length === 1 ? "ή αντιστοίχιση" : "ές αντιστοιχίσεις"}. Ελέγξτε στο <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myAADE</a> ποια αποδόθηκε στην επιχείρησή σας.</>
          : <>Ο ΚΑΔ {r.kad2008} <strong>παρέμεινε αμετάβλητος</strong>. Δεν απαιτείται καμία ενέργεια.</>
        }
      </div>

      {/* ===== ΚΥΡΙΑ ΠΛΗΡΟΦΟΡΙΑ — μεγάλο, αμέσως ορατό ===== */}
      <div
        className="card"
        style={{
          borderLeft: `5px solid ${changed ? "var(--accent)" : "var(--success)"}`,
          marginBottom: "1.5rem",
        }}
      >
        {/* Status badge */}
        <div style={{ marginBottom: "1rem" }}>
          {changed ? (
            <span style={{ background: "var(--warn-bg)", color: "var(--warn-strong)", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, border: "1px solid var(--warn-border)" }}>
              🔄 Ο ΚΑΔ άλλαξε
            </span>
          ) : (
            <span style={{ background: "var(--success-bg)", color: "var(--success-strong)", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, border: "1px solid var(--success-border)" }}>
              ✅ Ο ΚΑΔ παρέμεινε ίδιος
            </span>
          )}
        </div>

        {/* Two column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1.5rem", alignItems: "center" }} className="result-grid">
          {/* OLD */}
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              ΚΑΔ 2008 (Παλιός)
            </div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--info-strong)", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.5rem" }}>
              {r.kad2008}
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>{r.desc2008}</p>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center", padding: "0 0.5rem" }}>
            <div style={{ fontSize: "2.5rem", color: changed ? "var(--accent)" : "var(--success)", lineHeight: 1 }}>
              {changed ? "→" : "≡"}
            </div>
          </div>

          {/* NEW */}
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              ΚΑΔ 2025 (Νέος) ✅
            </div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--success-strong)", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.5rem" }}>
              {r.kad2025}
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>{r.desc2025}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ borderTop: "1px solid var(--border)", marginTop: "1.25rem", paddingTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <PrintSaveBar code={code} desc={r.desc2025} code2008={r.kad2008} desc2008={r.desc2008} />
          <Link href={`/antistoixisi?q=${r.kad2008}`} className="btn btn-primary">🔄 Αντιστοίχιση 2008→2025</Link>
          <Link href={`/antistoixisi-2025?q=${r.kad2025}`} className="btn btn-ghost">🔄 Αντιστοίχιση 2025→2008</Link>
          <Link href={`/maziki-2008`} className="btn btn-ghost">📦 Μαζική Αντιστοίχιση</Link>
        </div>
      </div>

      {/* ===== ΕΠΙΠΛΕΟΝ ΠΛΗΡΟΦΟΡΙΕΣ — ορατές, μικρότερο font ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {/* Quick stats */}
        <div className="card" style={{ padding: "1rem" }}>
          <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            📌 Πληροφορίες
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>Κλάδος</span>
              <span style={{ fontWeight: 600 }}>{section.name}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>Κατάσταση</span>
              <span style={{ fontWeight: 600, color: changed ? "var(--accent)" : "var(--success)" }}>
                {changed ? "Άλλαξε" : "Αμετάβλητος"}
              </span>
            </div>
            {relatedOld.length > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Συγχωνεύσεις</span>
                <span style={{ fontWeight: 600 }}>{relatedOld.length + 1} ΚΑΔ → 1</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>Ισχύει από</span>
              <span style={{ fontWeight: 600 }}>1/3/2026</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>Επιδοτήσεις</span>
              <span style={{ fontWeight: 600, color: eligiblePrograms.length > 0 ? "var(--success)" : "var(--text-muted)" }}>
                {eligiblePrograms.length > 0 ? `${eligiblePrograms.length} προγράμματα` : "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Urgency box if changed */}
        {changed && (
          <div style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)", borderRadius: "var(--radius)", padding: "1rem" }}>
            <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--warn-strong)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              ⚠️ Ενέργεια απαιτείται
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--warn-text)", lineHeight: 1.6 }}>
              Ελέγξτε αν η αυτόματη αντιστοίχιση ΑΑΔΕ είναι σωστή για την επιχείρησή σας.
              Διορθώστε έως <strong>30 Οκτωβρίου 2026</strong> χωρίς πρόστιμο μέσω{" "}
              <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--warn-strong)", fontWeight: 700 }}>myAADE</a>.
            </p>
          </div>
        )}
      </div>

      {/* ===== MULTI-MAPPING — αν ο ΚΑΔ 2008 αντιστοιχεί σε 2+ ΚΑΔ 2025 ===== */}
      {allMappings.length > 0 && (
        <div className="card" style={{ borderLeft: "5px solid #3b82f6", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "var(--info-strong)" }}>
            ⚠️ Ο ΚΑΔ {r.kad2008} αντιστοιχίζεται σε {allMappings.length + 1} επιλογές
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.6 }}>
            Ο παλιός ΚΑΔ {r.kad2008} μπορεί να αντιστοιχηθεί σε {allMappings.length + 1} διαφορετικούς νέους ΚΑΔ 2025.
            Ελέγξτε ποιος ταιριάζει καλύτερα στη δραστηριότητά σας.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {/* Primary mapping */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--primary)", borderRadius: 8 }}>
              <span style={{ background: "white", color: "var(--ink-success)", padding: "0.15rem 0.5rem", borderRadius: 4, fontSize: "0.8rem", fontWeight: 700, fontFamily: "monospace" }}>{r.kad2025}</span>
              <span style={{ fontSize: "0.85rem", color: "white", flex: 1 }}>{r.desc2025}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>κύρια</span>
            </div>
            {/* Alternative mappings */}
            {allMappings.map((x) => (
              <Link key={x.kad2025} href={`/kad/${x.kad2025}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--bg)", borderRadius: 8, border: "1px solid var(--border)", transition: "border-color 0.2s" }}>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.78rem" }}>{x.kad2025}</span>
                  <span style={{ fontSize: "0.85rem", flex: 1 }}>{x.desc2025}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>εναλλακτική</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ===== ΕΠΙΛΕΞΙΜΟΤΗΤΑ ΕΠΙΔΟΤΗΣΕΩΝ — v95: μοναδικά δεδομένα ανά ΚΑΔ ===== */}
      {eligiblePrograms.length > 0 && (
        <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "5px solid var(--success)" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "var(--success-strong)" }}>
            💶 Επιλέξιμος ΚΑΔ για {eligiblePrograms.length === 1 ? "πρόγραμμα επιδότησης" : `${eligiblePrograms.length} προγράμματα επιδότησης`}
          </h2>
          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", margin: "0.5rem 0 0.75rem" }}>
            {eligiblePrograms.map((pk) => {
              const slug = PROGRAM_SLUG[pk];
              const meta = PROGRAM_META[pk];
              if (!slug || !meta) return null;
              return (
                <Link key={pk} href={`/programma/${slug}`} style={{ textDecoration: "none" }}>
                  <span className="chip" style={{ fontSize: "0.78rem", opacity: CLOSED_PROGRAMS.has(slug) ? 0.75 : 1 }}>{meta.emoji} {meta.label.length > 34 ? meta.label.slice(0, 32) + "…" : meta.label}{CLOSED_PROGRAMS.has(slug) ? " · ολοκληρώθηκε" : ""}</span>
                </Link>
              );
            })}
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.6 }}>
            Ο νέος ΚΑΔ {r.kad2025} περιλαμβάνεται στις λίστες επιλέξιμων κωδικών των παρακάτω ενεργών προγραμμάτων:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "0.85rem" }}>
            {eligiblePrograms.map((p) => {
              const meta = PROGRAM_META[p];
              if (!meta) return null;
              return (
                <div key={p} style={{ display: "flex", gap: "0.6rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--success-bg)", border: "1px solid #a7f3d0", borderRadius: 8 }}>
                  <span style={{ fontSize: "1.1rem" }}>{meta.emoji}</span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--success-strong)" }}>{meta.label}</span>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.75rem" }}>
            Η επιλεξιμότητα βάσει ΚΑΔ είναι αναγκαία αλλά όχι επαρκής προϋπόθεση — κάθε προκήρυξη ορίζει επιπλέον κριτήρια
            (μέγεθος, περιοχή, προϋπολογισμός). Επιβεβαιώστε στην εκάστοτε πρόσκληση.
          </p>
          <Link href="/kad-epidotisi-espa" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
            💰 Πλήρης έλεγχος επιλεξιμότητας
          </Link>
        </div>
      )}

      {/* ===== ΜΟΝΑΔΙΚΗ ΠΕΡΙΓΡΑΦΗ — SEO editorial content (v95: data-driven, πολυπαράγραφο) ===== */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
          📋 Πληροφορίες για τον ΚΑΔ {r.kad2008}
        </h2>
        {enrichedFirst && (
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "0.85rem" }}>
            {enrichedFirst}
          </p>
        )}
        {(enrichedFirst ? uniqueParagraphs.slice(1) : uniqueParagraphs).map((para, i) => (
          <p key={i} style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "0.85rem" }}>
            {para}
          </p>
        ))}
      </div>

      {/* ===== NACE 2.1 ΠΕΡΙΓΡΑΦΗ — enriched content ===== */}
      <NaceDescription kad2025={r.kad2025} />

      {/* ===== ΣΥΓΧΩΝΕΥΣΕΙΣ — many to one ===== */}
      {relatedOld.length > 0 && (
        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            🔀 {relatedOld.length + 1} παλιοί ΚΑΔ 2008 συγχωνεύτηκαν στον ΚΑΔ {r.kad2025}
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            Ο νέος ΚΑΔ {r.kad2025} προέκυψε από τη συγχώνευση {relatedOld.length + 1} παλιών κωδικών:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {/* Current */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--primary)", borderRadius: 8 }}>
              <span style={{ background: "white", color: "var(--ink-info)", padding: "0.15rem 0.5rem", borderRadius: 4, fontSize: "0.8rem", fontWeight: 700, fontFamily: "monospace" }}>{r.kad2008}</span>
              <span style={{ fontSize: "0.85rem", color: "white" }}>{r.desc2008}</span>
              <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>τρέχων</span>
            </div>
            {relatedOld.map((x) => (
              <Link key={x.kad2008} href={`/kad/${x.kad2008}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--bg)", borderRadius: 8, border: "1px solid var(--border)", transition: "border-color 0.2s" }}>
                  <span className="kad-badge kad-badge-2008">{x.kad2008}</span>
                  <span style={{ fontSize: "0.85rem" }}>{x.desc2008}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ===== DECISION HELP — AI SEO content ===== */}
      {changed && (
        <div className="card" style={{ marginBottom: "1.5rem", background: "var(--info-bg)", border: "1px solid var(--info-border)" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--info-strong)" }}>
            🤔 Δεν είστε σίγουρος αν ο ΚΑΔ {r.kad2025} ταιριάζει;
          </h2>
          <div style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--info-text)" }}>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Πότε ταιριάζει ο ΚΑΔ {r.kad2025}:</strong> Αν η δραστηριότητά σας αφορά {r.desc2025.toLowerCase().slice(0, 80)}.
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Πότε ΔΕΝ ταιριάζει:</strong> Αν η δραστηριότητά σας είναι διαφορετική από αυτή που περιγράφει ο κωδικός.
              {allMappings.length > 0 && ` Σε αυτή την περίπτωση, ελέγξτε τις ${allMappings.length} εναλλακτικές αντιστοιχίσεις παραπάνω.`}
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Συχνό λάθος:</strong> Πολλές επιχειρήσεις αποδέχονται την αυτόματη αντιστοίχιση ΑΑΔΕ χωρίς έλεγχο. Αν ο νέος ΚΑΔ δεν αντιστοιχεί ακριβώς στη δραστηριότητά σας, μπορεί να επηρεάσει τα φορολογικά σας.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/ai-suggester" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                ✨ Βρες τον σωστό ΚΑΔ με AI
              </Link>
              <Link href="/wizard" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                🧭 Βήμα-βήμα εύρεση ΚΑΔ
              </Link>
              <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                📦 Μαζική αντιστοίχιση (για λογιστές)
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ===== FAQ — visible text identical to JSON-LD ===== */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις (FAQ ΑΑΔΕ)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ΣΧΕΤΙΚΟΙ ΚΑΔ ===== */}
      {relatedNew.length > 0 && (
        <div className="card">
          <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
            🔗 Σχετικοί ΚΑΔ 2025 ίδιου κλάδου ({section.name})
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {relatedNew.map((x) => (
              <Link key={x.kad2025} href={`/kad/${x.kad2025}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.6rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.8rem", transition: "border-color 0.2s" }}>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.75rem" }}>{x.kad2025}</span>
                  <span style={{ color: "var(--text-muted)", maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{x.desc2025}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedSector.length > 0 && (
        <div className="card">
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            📂 Άλλοι αλλαγμένοι ΚΑΔ στον κλάδο {section.name}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {relatedSector.map((x) => (
              <Link key={x.kad2008} href={`/kad/${x.kad2008}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", padding: "0.4rem 0.6rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "2px solid var(--accent)", borderRadius: 8, fontSize: "0.8rem" }}>
                  <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.72rem", flexShrink: 0 }}>{x.kad2008}</span>
                  <span style={{ color: "var(--text-muted)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{x.desc2008.slice(0, 45)}{x.desc2008.length > 45 ? "..." : ""}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.72rem", flexShrink: 0 }}>→ {x.kad2025}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "0.75rem" }}>
            <Link href={kladosHref} style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
              Δείτε όλους τους ΚΑΔ κλάδου {section.name} →
            </Link>
          </div>
        </div>
      )}

      {/* ===== ΣΧΕΤΙΚΕΣ ΑΝΑΖΗΤΗΣΕΙΣ — v97: internal links σε επαγγέλματα/εργαλεία ===== */}
      <div className="card" style={{ marginTop: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.65rem" }}>🔎 Σχετικές αναζητήσεις</h2>
        {(SIMILAR[r.kad2008] ?? []).length >= 2 && (
          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", alignItems: "center", marginBottom: "0.7rem", paddingBottom: "0.7rem", borderBottom: "1px dashed var(--border)" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)" }}>🧭 Παρόμοιες δραστηριότητες:</span>
            {(SIMILAR[r.kad2008] ?? []).map((sc) => {
              return (
                <Link key={sc} href={`/kad/${sc}`} style={{ textDecoration: "none" }} title={sc}>
                  <span className="chip" style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.78rem" }}>{sc}</span>
                </Link>
              );
            })}
          </div>
        )}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {(PROF_BY_CODE.get(r.kad2008) ?? []).slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/epaggelma/${p.slug}`} style={{ textDecoration: "none" }}>
              <span className="chip">
                {p.emoji} ΚΑΔ για {p.name}
              </span>
            </Link>
          ))}
          {hasKladosPage && (
            <Link href={kladosHref} style={{ textDecoration: "none" }}>
              <span className="chip">
                📂 Κλάδος {section.name}
              </span>
            </Link>
          )}
          <Link href="/kad-2025-excel" style={{ textDecoration: "none" }}>
            <span className="chip">
              📥 ΚΑΔ 2025 σε Excel (δωρεάν)
            </span>
          </Link>
          <Link href="/prothesmia-kad-2025" style={{ textDecoration: "none" }}>
            <span className="chip">
              ⏰ Προθεσμία 30/10/2026
            </span>
          </Link>
          <Link href="/epaggelma" style={{ textDecoration: "none" }}>
            <span className="chip">
              👥 ΚΑΔ ανά επάγγελμα
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
