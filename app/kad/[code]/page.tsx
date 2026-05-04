import { kadRobots, isSensitiveKadPage } from "@/lib/adsense-utils";
import type { Metadata } from "next";
import Link from "next/link";
import PrintSaveBar from "@/components/PrintSaveBar";
import { NaceDescription } from "@/components/NaceDescription";
import { getNace21ForKad } from "@/lib/nace21";
import { notFound } from "next/navigation";
import kadDataRaw from "@/public/data/kad.json";
import ssgCodesRaw from "@/public/data/ssg_codes.json";

interface KadRecord {
  kad2008: string;
  kad2025: string;
  desc2008: string;
  desc2025: string;
}


// v83: Priority lookup — kad2008 first to avoid canonical mismatch
function findKadRecord(data: KadRecord[], code: string): KadRecord | undefined {
  const clean = code.replace(/\D/g, "");
  const padded = clean.padStart(8, "0");
  return (
    data.find((r) => r.kad2008 === clean) ??
    data.find((r) => r.kad2008 === padded) ??
    data.find((r) => r.kad2008.replace(/^0+/, "") === clean) ??
    data.find((r) => r.kad2025 === clean) ??
    data.find((r) => r.kad2025 === padded)
  );
}

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

function getKadData(): KadRecord[] {
  return kadDataRaw as KadRecord[];
}

function getSsgCodes(): Set<string> {
  return new Set(ssgCodesRaw as string[]);
}

function getSectionInfo(kod: string) {
  const prefix = kod.padStart(8, "0").slice(0, 2);
  return SECTION_MAP[prefix] || { name: "Οικονομικής Δραστηριότητας", audience: "επιχειρήσεις", desc: "επιχειρηματικό τομέα" };
}

function generateUniqueDescription(record: KadRecord, relatedOldCount: number): string {
  const section = getSectionInfo(record.kad2008);
  const changed = record.kad2008 !== record.kad2025;
  const desc2008Short = record.desc2008.toLowerCase();

  if (changed && relatedOldCount > 0) {
    return `Ο ΚΑΔ ${record.kad2008} (${record.desc2008}) αντικαταστάθηκε από τον νέο ΚΑΔ ${record.kad2025} στο πλαίσιο της αναθεώρησης NACE Rev.2.1, που τέθηκε σε ισχύ από 1η Μαρτίου 2026 με την απόφαση ΑΑΔΕ Α.1003/2026. Ο νέος κωδικός προέκυψε από τη συγχώνευση ${relatedOldCount + 1} παλιών κωδικών του κλάδου ${section.name} και αφορά ${section.audience}. Αν ο ΚΑΔ σας ήταν ${record.kad2008}, η ΑΑΔΕ τον αντιστοίχισε αυτόματα στον ${record.kad2025} — ελέγξτε το myAADE για επιβεβαίωση και διορθώστε αν χρειάζεται έως 1η Ιουνίου 2026 χωρίς πρόστιμο.`;
  } else if (changed) {
    return `Ο ΚΑΔ ${record.kad2008} (${record.desc2008}) αντικαταστάθηκε από τον ΚΑΔ ${record.kad2025} (${record.desc2025}) σύμφωνα με τον νέο πίνακα αντιστοίχισης ΑΑΔΕ (Α.1004/2026). Η αλλαγή αφορά τον κλάδο ${section.name} και ${section.audience} που δραστηριοποιούνται στον ${section.desc}. Η ΑΑΔΕ πραγματοποίησε αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026 — αν δεν συμφωνείτε με το αποτέλεσμα, μπορείτε να διορθώσετε χωρίς πρόστιμο έως 1η Ιουνίου 2026 μέσω myAADE.`;
  } else {
    return `Ο ΚΑΔ ${record.kad2008} (${record.desc2008}) παρέμεινε αμετάβλητος στη νέα ονοματολογία ΚΑΔ 2025, σύμφωνα με την απόφαση ΑΑΔΕ Α.1003/2026 που ισχύει από 1η Μαρτίου 2026. Αφορά ${section.audience} του κλάδου ${section.name}. Εφόσον η ΑΑΔΕ επιβεβαίωσε τον ίδιο κωδικό, δεν απαιτείται καμία ενέργεια από τις επιχειρήσεις που τον χρησιμοποιούν.`;
  }
}

// All 15,201 KAD codes (2008 + 2025) pre-built at deploy via OpenNext/Cloudflare
// revalidate=false = static forever — KAD data never changes after deploy
export async function generateStaticParams() {
  const ssgCodes = getSsgCodes();
  return Array.from(ssgCodes).map((code) => ({ code }));
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

  const data = getKadData();
  const record = findKadRecord(data, code);

  if (!record) return { title: `ΚΑΔ ${code} - Δεν βρέθηκε`, robots: { index: false, follow: false } };

  const changed = record.kad2008 !== record.kad2025;
  const section = getSectionInfo(record.kad2008);
  const relatedOld = data.filter((r) => r.kad2025 === record.kad2025 && r.kad2008 !== record.kad2008);

  // Multi-mapping: how many KAD 2025 does this KAD 2008 map to?
  const allMappingsCount = data.filter((r) => r.kad2008 === record.kad2008 && r.kad2025 !== record.kad2025).length;
  const isMulti = allMappingsCount > 0;

  // All KAD pages should be indexed
  const isSensitive = isSensitiveKadPage(code.replace(/\./g, "").padStart(8, "0"), `${record.desc2008 ?? ""} ${record.desc2025 ?? ""}`);
  const shouldNoIndex = isSensitive || !kadRobots(code).index; // noindex: sensitive content OR non-category level

  // Enrich with NACE 2.1 description
  const nace = getNace21ForKad(record.kad2025);
  const naceTitle = nace.class_?.title ?? nace.group?.title ?? "";
  const naceSnippet = naceTitle ? ` ${naceTitle}.` : "";

  // Title: max 60 chars (template adds " | kad2025.gr" = 14 chars → page title max ~46)
  let pageTitle: string;
  let metaDesc: string;
  let ogDesc: string;

  if (isMulti) {
    // Multi-mapping: emphasize multiple options
    const totalOptions = allMappingsCount + 1;
    pageTitle = `ΚΑΔ ${record.kad2008} | ${totalOptions} Αντιστοιχίσεις 2025`;
    metaDesc = `Ο ΚΑΔ ${record.kad2008} αντιστοιχίζεται σε ${totalOptions} νέους ΚΑΔ 2025. Δείτε όλες τις επιλογές και ποια ταιριάζει στη δραστηριότητά σας. Κλάδος ${section.name}.`;
    ogDesc = `${record.desc2008} → ${totalOptions} πιθανοί ΚΑΔ 2025. Κλάδος: ${section.name}.`;
  } else {
    // Single mapping
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
    alternates: { canonical: `https://www.kad2025.gr/kad/${record.kad2008}` },
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

  // v58: Fast validation before expensive data lookup.
  // Malformed codes (non-numeric or wrong length) return 404 immediately instead of
  // triggering expensive operations that may timeout → 5xx errors.
  if (!/^\d{4,8}$/.test(code)) {
    notFound();
  }

  const data = getKadData();

  const record = findKadRecord(data, code);

  if (!record) notFound();
  const r = record!;

  // v57: Load SSG code set to filter out links to non-pre-rendered KAD pages
  // Previously, ~4,051 internal links pointed to codes not in ssg_codes.json → 404 errors
  const ssgCodes = getSsgCodes();

  // Multi-mapping: find ALL records where this KAD 2008 maps to different KAD 2025
  const allMappings = data.filter(
    (x) => x.kad2008 === r.kad2008 && x.kad2025 !== r.kad2025 && ssgCodes.has(x.kad2025)
  );

  const changed = r.kad2008 !== r.kad2025;
  const section = getSectionInfo(r.kad2008);
  const relatedOld = data.filter((x) => x.kad2025 === r.kad2025 && x.kad2008 !== r.kad2008 && ssgCodes.has(x.kad2008));
  const prefix4 = r.kad2025.slice(0, 4);
  // Use kad2008 prefix for sector (not kad2025) — prevents cross-sector contamination
  const prefix2 = r.kad2008.padStart(8, "0").slice(0, 2);
  // Same 4-digit prefix of new KAD (closely related activity)
  const relatedNew = data.filter((x) => x.kad2025.startsWith(prefix4) && x.kad2025 !== r.kad2025 && ssgCodes.has(x.kad2025)).slice(0, 5);
  // Same 2-digit prefix of OLD KAD (same sector) - strict sector match
  const relatedSector = data
    .filter((x) => x.kad2008.padStart(8,"0").slice(0,2) === prefix2 && x.kad2008 !== r.kad2008 && !relatedNew.find(n => n.kad2025 === x.kad2025) && ssgCodes.has(x.kad2008))
    .filter(row => row.kad2008 !== row.kad2025)
    .slice(0, 8 - relatedNew.length);
  const uniqueDesc = generateUniqueDescription(r, relatedOld.length);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        name: `ΚΑΔ ${r.kad2008} → ${r.kad2025}`,
        description: uniqueDesc,
        url: `https://www.kad2025.gr/kad/${r.kad2008}`,
        creator: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "Αντιστοίχιση ΚΑΔ", item: "https://www.kad2025.gr/antistoixisi" },
          { "@type": "ListItem", position: 3, name: `ΚΑΔ ${r.kad2008}`, item: `https://www.kad2025.gr/kad/${r.kad2008}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Σε ποιον νέο ΚΑΔ 2025 αντιστοιχεί ο ΚΑΔ ${r.kad2008};`,
            acceptedAnswer: { "@type": "Answer", text: allMappings.length > 0
              ? `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντιστοιχεί σε ${allMappings.length + 1} νέους ΚΑΔ 2025. Ο κύριος είναι ο ${r.kad2025} (${r.desc2025}). Ελέγξτε ποιος ταιριάζει στη δραστηριότητά σας.`
              : `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντιστοιχεί στον νέο ΚΑΔ ${r.kad2025} (${r.desc2025}). ${changed ? "Ο κωδικός άλλαξε." : "Ο κωδικός παρέμεινε αμετάβλητος."}` },
          },
          {
            "@type": "Question",
            name: "Πότε ισχύει η αντιστοίχιση;",
            acceptedAnswer: { "@type": "Answer", text: "Από 1η Μαρτίου 2026. Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026." },
          },
          {
            "@type": "Question",
            name: "Πώς διορθώνω τον ΚΑΔ μου αν δεν συμφωνώ;",
            acceptedAnswer: { "@type": "Answer", text: "Μέσω της εφαρμογής Μεταβολή Εργασιών στο myaade.gov.gr. Έχετε έως 1η Ιουνίου 2026 χωρίς πρόστιμο." },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/antistoixisi" style={{ color: "var(--primary)", textDecoration: "none" }}>Αντιστοίχιση</Link>
        {" → "}
        <Link href={`/klados`} style={{ color: "var(--primary)", textDecoration: "none" }}>{section.name}</Link>
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
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.85rem 1rem", marginBottom: "1.5rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
        <strong style={{ color: "var(--primary)" }}>Σύντομη απάντηση:</strong>{" "}
        {changed
          ? <>Ο ΚΑΔ {r.kad2008} αντιστοιχίζεται στον νέο ΚΑΔ <strong>{r.kad2025}</strong> ({r.desc2025}).{allMappings.length > 0 && <> Υπάρχουν {allMappings.length + 1} πιθανές αντιστοιχίσεις.</>} Απαιτείται έλεγχος μέσω <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myAADE</a>. Προθεσμία: 1/6/2026.</>
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
            <span style={{ background: "#fef3c7", color: "#92400e", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, border: "1px solid #f59e0b" }}>
              🔄 Ο ΚΑΔ άλλαξε
            </span>
          ) : (
            <span style={{ background: "#dcfce7", color: "#166534", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, border: "1px solid #86efac" }}>
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
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1e40af", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.5rem" }}>
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
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#166534", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.5rem" }}>
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
          </div>
        </div>

        {/* Urgency box if changed */}
        {changed && (
          <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem" }}>
            <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "#92400e", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              ⚠️ Ενέργεια απαιτείται
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#78350f", lineHeight: 1.6 }}>
              Ελέγξτε αν η αυτόματη αντιστοίχιση ΑΑΔΕ είναι σωστή για την επιχείρησή σας.
              Διορθώστε έως <strong>1η Ιουνίου 2026</strong> χωρίς πρόστιμο μέσω{" "}
              <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 700 }}>myAADE</a>.
            </p>
          </div>
        )}
      </div>

      {/* ===== MULTI-MAPPING — αν ο ΚΑΔ 2008 αντιστοιχεί σε 2+ ΚΑΔ 2025 ===== */}
      {allMappings.length > 0 && (
        <div className="card" style={{ borderLeft: "5px solid #3b82f6", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "#1e40af" }}>
            ⚠️ Ο ΚΑΔ {r.kad2008} αντιστοιχίζεται σε {allMappings.length + 1} επιλογές
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.6 }}>
            Ο παλιός ΚΑΔ {r.kad2008} μπορεί να αντιστοιχηθεί σε {allMappings.length + 1} διαφορετικούς νέους ΚΑΔ 2025.
            Ελέγξτε ποιος ταιριάζει καλύτερα στη δραστηριότητά σας.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {/* Primary mapping */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem 0.75rem", background: "var(--primary)", borderRadius: 8 }}>
              <span style={{ background: "white", color: "#166534", padding: "0.15rem 0.5rem", borderRadius: 4, fontSize: "0.8rem", fontWeight: 700, fontFamily: "monospace" }}>{r.kad2025}</span>
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

      {/* ===== ΜΟΝΑΔΙΚΗ ΠΕΡΙΓΡΑΦΗ — SEO content ===== */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
          📋 Πληροφορίες για τον ΚΑΔ {r.kad2008}
        </h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)" }}>
          {uniqueDesc}
        </p>
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
              <span style={{ background: "white", color: "#1e40af", padding: "0.15rem 0.5rem", borderRadius: 4, fontSize: "0.8rem", fontWeight: 700, fontFamily: "monospace" }}>{r.kad2008}</span>
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
        <div className="card" style={{ marginBottom: "1.5rem", background: "#eff6ff", border: "1px solid #bfdbfe" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "#1e40af" }}>
            🤔 Δεν είστε σίγουρος αν ο ΚΑΔ {r.kad2025} ταιριάζει;
          </h2>
          <div style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#1e3a5f" }}>
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
              <Link href="/ai-suggester" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>
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

      {/* ===== FAQ — Schema markup ===== */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές Ερωτήσεις (FAQ ΑΑΔΕ)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              q: `Σε ποιον νέο ΚΑΔ 2025 αντιστοιχεί ο ΚΑΔ ${r.kad2008};`,
              a: allMappings.length > 0
                ? `Ο ΚΑΔ ${r.kad2008} (${r.desc2008}) αντιστοιχεί σε ${allMappings.length + 1} νέους ΚΑΔ 2025: κυρίως στον ${r.kad2025} (${r.desc2025})${allMappings.map(m => `, αλλά και στον ${m.kad2025} (${m.desc2025})`).join('')}. Ελέγξτε ποιος ταιριάζει στη δραστηριότητά σας.`
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
              a: "Έως 1η Ιουνίου 2026, μέσω της εφαρμογής Μεταβολή Εργασιών στο myAADE ή μέσω Τα Αιτήματά μου με έντυπο Δ211.",
            },
          ].map((faq, i) => (
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
            <Link href={`/klados/${prefix2}`} style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
              Δείτε όλους τους ΚΑΔ κλάδου {section.name} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
