import naceNotesFull from "@/lib/nace_notes_full.json";
import kadStatsRaw from "@/public/data/kad.json";
import canonicalRaw from "@/public/data/canonical_indexable_kads.json";
import clsFbRaw from "@/lib/class_titles_fallback.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKadData } from "@/lib/kadData";
import ssgCodesRaw from "@/public/data/ssg_codes.json";
const ssgCodes = new Set(ssgCodesRaw as string[]);

import { getNace21 } from "@/lib/nace21";

const SECTIONS: Record<string, { name: string; icon: string; desc: string; keywords: string }> = {
  "01": { name: "Γεωργία & Κτηνοτροφία", icon: "🌾", desc: "Φυτική παραγωγή, κτηνοτροφία, αγρότες", keywords: "καδ αγροτών, καδ κτηνοτροφίας, καδ γεωργίας" },
  "02": { name: "Δασοκομία & Υλοτομία", icon: "🌲", desc: "Δασικές δραστηριότητες", keywords: "καδ δασοκομίας" },
  "03": { name: "Αλιεία & Υδατοκαλλιέργεια", icon: "🐟", desc: "Αλιεία, ιχθυοκαλλιέργεια", keywords: "καδ αλιείας" },
  "10": { name: "Βιομηχανία Τροφίμων", icon: "🍞", desc: "Παραγωγή και μεταποίηση τροφίμων", keywords: "καδ τροφίμων, καδ αρτοποιείου" },
  "11": { name: "Ποτοποιία", icon: "🍷", desc: "Παραγωγή ποτών", keywords: "καδ οινοποιείου, καδ ποτών" },
  "14": { name: "Κατασκευή Ενδυμάτων", icon: "👗", desc: "Βιομηχανία ένδυσης", keywords: "καδ ένδυσης" },
  "20": { name: "Χημική Βιομηχανία", icon: "⚗️", desc: "Χημικά προϊόντα", keywords: "καδ χημικής βιομηχανίας" },
  "21": { name: "Φαρμακευτική Βιομηχανία", icon: "💊", desc: "Φάρμακα και ιατρικά", keywords: "καδ φαρμακευτικής" },
  "25": { name: "Μεταλλικά Προϊόντα", icon: "🔩", desc: "Μεταλλουργία", keywords: "καδ μεταλλουργίας" },
  "41": { name: "Κατασκευές Κτιρίων", icon: "🏗️", desc: "Οικοδομές, κτίρια", keywords: "καδ κατασκευών, καδ εργολάβων, καδ οικοδομών" },
  "43": { name: "Εξειδικευμένες Κατασκευές", icon: "🔧", desc: "Ηλεκτρολόγοι, υδραυλικοί", keywords: "καδ ηλεκτρολόγων, καδ υδραυλικών, καδ τεχνιτών" },
  "45": { name: "Εμπόριο Οχημάτων", icon: "🚗", desc: "Αυτοκίνητα, συνεργεία", keywords: "καδ συνεργείων, καδ αυτοκινήτων" },
  "46": { name: "Χονδρικό Εμπόριο", icon: "📦", desc: "Χονδρεμπόριο, διανομή", keywords: "καδ εμπορίου, καδ χονδρεμπορίου, καδ διανομής" },
  "47": { name: "Λιανικό Εμπόριο", icon: "🛒", desc: "Καταστήματα λιανικής", keywords: "καδ λιανικού εμπορίου, καδ καταστημάτων, καδ εμπορίου" },
  "49": { name: "Χερσαίες Μεταφορές", icon: "🚛", desc: "Οδικές μεταφορές", keywords: "καδ μεταφορών, καδ φορτηγών, καδ logistics" },
  "55": { name: "Καταλύματα & Ξενοδοχεία", icon: "🏨", desc: "Ξενοδοχεία, τουρισμός", keywords: "καδ τουρισμού, καδ ξενοδοχείων, καδ τουριστικών καταλυμάτων, καδ airbnb" },
  "56": { name: "Εστίαση", icon: "🍽️", desc: "Εστιατόρια, καφέ, ταβέρνες", keywords: "καδ εστίασης, καδ εστιατορίου, καδ καφετέριας, καδ ταβέρνας" },
  "62": { name: "Πληροφορική & IT", icon: "💻", desc: "Software, IT υπηρεσίες", keywords: "καδ πληροφορικής, καδ IT, καδ software, καδ τεχνολογίας" },
  "68": { name: "Ακίνητη Περιουσία", icon: "🏠", desc: "Μεσιτεία, ακίνητα", keywords: "καδ μεσιτών, καδ ακινήτων" },
  "69": { name: "Νομικές & Λογιστικές", icon: "⚖️", desc: "Δικηγόροι, λογιστές", keywords: "καδ λογιστών, καδ δικηγόρων, καδ λογιστικής" },
  "70": { name: "Συμβουλευτικές Υπηρεσίες", icon: "💼", desc: "Business consulting", keywords: "καδ συμβούλων, καδ consulting" },
  "71": { name: "Αρχιτεκτονικές & Μηχανικές", icon: "📐", desc: "Αρχιτέκτονες, μηχανικοί", keywords: "καδ μηχανικών, καδ αρχιτεκτόνων" },
  "85": { name: "Εκπαίδευση", icon: "📚", desc: "Σχολεία, φροντιστήρια", keywords: "καδ εκπαίδευσης, καδ φροντιστηρίων" },
  "86": { name: "Υγεία", icon: "🏥", desc: "Γιατροί, κλινικές", keywords: "καδ υγείας, καδ γιατρών, καδ κλινικών" },
  "93": { name: "Αθλητισμός & Ψυχαγωγία", icon: "⚽", desc: "Αθλητικές εγκαταστάσεις", keywords: "καδ αθλητισμού, καδ γυμναστηρίων" },
  "50": { name: "Πλωτές Μεταφορές", icon: "⛴️", desc: "Ναυτιλία, πλοία", keywords: "καδ ναυτιλίας, καδ πλοίων, καδ θαλάσσιων μεταφορών" },
  "63": { name: "Υπηρεσίες Πληροφορίας", icon: "📡", desc: "Ψηφιακές υπηρεσίες πληροφορίας", keywords: "καδ υπηρεσιών πληροφορίας, καδ ψηφιακών υπηρεσιών" },
  "96": { name: "Άλλες Υπηρεσίες", icon: "🔧", desc: "Κομμωτήρια, επισκευές", keywords: "καδ κομμωτηρίων, καδ επισκευών" },
  "07": { name: "Εξόρυξη Μεταλλευμάτων", icon: "⛏️", desc: "Μεταλλεύματα σιδήρου και μη σιδηρούχα", keywords: "καδ εξόρυξη μεταλλευμάτων" },
  "08": { name: "Λοιπά Ορυχεία & Λατομεία", icon: "🪨", desc: "Λατομεία, αδρανή υλικά, αλάτι", keywords: "καδ λοιπά ορυχεία & λατομεία" },
  "13": { name: "Κλωστοϋφαντουργία", icon: "🧵", desc: "Νήματα, υφάσματα, κλωστοϋφαντουργικά προϊόντα", keywords: "καδ κλωστοϋφαντουργία" },
  "15": { name: "Δέρμα & Δερμάτινα Είδη", icon: "👞", desc: "Δέρματα, τσάντες, υποδήματα", keywords: "καδ δέρμα & δερμάτινα είδη" },
  "16": { name: "Βιομηχανία Ξύλου", icon: "🪵", desc: "Πριστήρια, προϊόντα ξύλου και φελλού", keywords: "καδ βιομηχανία ξύλου" },
  "17": { name: "Χαρτοποιία & Προϊόντα Χαρτιού", icon: "📄", desc: "Χαρτοπολτός, χαρτί, χάρτινες συσκευασίες", keywords: "καδ χαρτοποιία & προϊόντα χαρτιού" },
  "18": { name: "Εκτυπώσεις & Αναπαραγωγή", icon: "🖨️", desc: "Εκτυπωτικές δραστηριότητες, προεκτύπωση", keywords: "καδ εκτυπώσεις & αναπαραγωγή" },
  "22": { name: "Πλαστικά & Ελαστικά", icon: "🧴", desc: "Προϊόντα από ελαστικό και πλαστικές ύλες", keywords: "καδ πλαστικά & ελαστικά" },
  "23": { name: "Μη Μεταλλικά Ορυκτά", icon: "🧱", desc: "Γυαλί, τσιμέντο, κεραμικά, δομικά υλικά", keywords: "καδ μη μεταλλικά ορυκτά" },
  "24": { name: "Βασικά Μέταλλα", icon: "🔩", desc: "Χάλυβας, αλουμίνιο, χύτευση μετάλλων", keywords: "καδ βασικά μέταλλα" },
  "26": { name: "Ηλεκτρονικά & Οπτικά Προϊόντα", icon: "🔌", desc: "Ηλεκτρονικοί υπολογιστές, ηλεκτρονικά, οπτικά", keywords: "καδ ηλεκτρονικά & οπτικά προϊόντα" },
  "27": { name: "Ηλεκτρολογικός Εξοπλισμός", icon: "💡", desc: "Ηλεκτρικοί κινητήρες, καλώδια, φωτισμός", keywords: "καδ ηλεκτρολογικός εξοπλισμός" },
  "28": { name: "Μηχανήματα & Εξοπλισμός", icon: "⚙️", desc: "Μηχανήματα γενικής και ειδικής χρήσης", keywords: "καδ μηχανήματα & εξοπλισμός" },
  "29": { name: "Αυτοκίνητα & Εξαρτήματα", icon: "🚗", desc: "Μηχανοκίνητα οχήματα, αμαξώματα, εξαρτήματα", keywords: "καδ αυτοκίνητα & εξαρτήματα" },
  "30": { name: "Λοιπός Εξοπλισμός Μεταφορών", icon: "🚢", desc: "Ναυπηγική, σιδηροδρομικός & αεροπορικός εξοπλισμός", keywords: "καδ λοιπός εξοπλισμός μεταφορών" },
  "31": { name: "Κατασκευή Επίπλων", icon: "🪑", desc: "Έπιπλα κάθε είδους", keywords: "καδ κατασκευή επίπλων" },
  "32": { name: "Λοιπές Μεταποιητικές Δραστηριότητες", icon: "🛠️", desc: "Κοσμήματα, ιατρικά είδη, παιχνίδια κ.ά.", keywords: "καδ λοιπές μεταποιητικές δραστηριότητες" },
  "33": { name: "Επισκευή & Εγκατάσταση Μηχανημάτων", icon: "🔧", desc: "Επισκευή, συντήρηση και εγκατάσταση εξοπλισμού", keywords: "καδ επισκευή & εγκατάσταση μηχανημάτων" },
  "38": { name: "Διαχείριση Αποβλήτων & Ανακύκλωση", icon: "♻️", desc: "Συλλογή, επεξεργασία, ανάκτηση υλικών", keywords: "καδ διαχείριση αποβλήτων & ανακύκλωση" },
  "39": { name: "Εξυγίανση & Περιβάλλον", icon: "🌿", desc: "Απορρύπανση και περιβαλλοντικές υπηρεσίες", keywords: "καδ εξυγίανση & περιβάλλον" },
  "42": { name: "Έργα Πολιτικού Μηχανικού", icon: "🏗️", desc: "Δρόμοι, δίκτυα, ενεργειακά και τεχνικά έργα", keywords: "καδ έργα πολιτικού μηχανικού" },
  "52": { name: "Αποθήκευση & Υποστήριξη Μεταφορών", icon: "📦", desc: "Logistics, αποθήκες, τερματικοί σταθμοί", keywords: "καδ αποθήκευση & υποστήριξη μεταφορών" },
  "58": { name: "Εκδοτικές Δραστηριότητες", icon: "📚", desc: "Εκδόσεις βιβλίων, λογισμικού, περιοδικών", keywords: "καδ εκδοτικές δραστηριότητες" },
  "59": { name: "Παραγωγή Ταινιών & Ήχου", icon: "🎬", desc: "Κινηματογράφος, βίντεο, μουσικές εκδόσεις", keywords: "καδ παραγωγή ταινιών & ήχου" },
  "60": { name: "Ραδιοτηλεοπτικές Μεταδόσεις", icon: "📺", desc: "Ραδιόφωνο, τηλεόραση, streaming προγραμμάτων", keywords: "καδ ραδιοτηλεοπτικές μεταδόσεις" },
  "72": { name: "Επιστημονική Έρευνα & Ανάπτυξη", icon: "🔬", desc: "R&D σε φυσικές και κοινωνικές επιστήμες", keywords: "καδ επιστημονική έρευνα & ανάπτυξη" },
  "74": { name: "Λοιπές Επαγγελματικές & Επιστημονικές", icon: "🎨", desc: "Design, φωτογραφία, μετάφραση, εξειδικευμένες υπηρεσίες", keywords: "καδ λοιπές επαγγελματικές & επιστημονικές" },
  "75": { name: "Κτηνιατρικές Δραστηριότητες", icon: "🐾", desc: "Κτηνιατρικές υπηρεσίες", keywords: "καδ κτηνιατρικές δραστηριότητες" },
  "81": { name: "Υπηρεσίες Κτιρίων & Τοπίου", icon: "🧹", desc: "Καθαρισμός, συντήρηση κτιρίων, κηποτεχνία", keywords: "καδ υπηρεσίες κτιρίων & τοπίου" },
  "82": { name: "Διοικητικές Υπηρεσίες Γραφείου", icon: "🗂️", desc: "Γραμματειακή υποστήριξη, call centers, συνέδρια", keywords: "καδ διοικητικές υπηρεσίες γραφείου" },
  "87": { name: "Φροντίδα με Διαμονή", icon: "🏥", desc: "Μονάδες φροντίδας ηλικιωμένων και ΑμεΑ", keywords: "καδ φροντίδα με διαμονή" },
  "88": { name: "Κοινωνική Μέριμνα", icon: "🤝", desc: "Κοινωνική εργασία χωρίς διαμονή, παιδικοί σταθμοί", keywords: "καδ κοινωνική μέριμνα" },
  "90": { name: "Τέχνες & Πολιτισμός", icon: "🎭", desc: "Παραστατικές τέχνες, δημιουργικές δραστηριότητες", keywords: "καδ τέχνες & πολιτισμός" },
  "91": { name: "Βιβλιοθήκες, Αρχεία & Μουσεία", icon: "🏛️", desc: "Πολιτιστικοί χώροι και συλλογές", keywords: "καδ βιβλιοθήκες, αρχεία & μουσεία" },
  "95": { name: "Επισκευή Υπολογιστών & Ειδών", icon: "🔧", desc: "Επισκευές Η/Υ, κινητών, προσωπικών ειδών", keywords: "καδ επισκευή υπολογιστών & ειδών" },
};

export async function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({ section }));
}


const SECTION_STATS: Record<string, { total: number; changed: number; pct: number }> = (() => {
  const acc: Record<string, { all: Set<string>; ch: Set<string> }> = {};
  for (const r of kadStatsRaw as { kad2008: string; kad2025: string; desc2008: string }[]) {
    const s2 = r.kad2008.padStart(8, "0").slice(0, 2);
    if (!acc[s2]) acc[s2] = { all: new Set(), ch: new Set() };
    acc[s2].all.add(r.kad2008);
    if (r.kad2008 !== r.kad2025) acc[s2].ch.add(r.kad2008);
  }
  return Object.fromEntries(Object.entries(acc).map(([k, v]) => [k, { total: v.all.size, changed: v.ch.size, pct: Math.round((100 * v.ch.size) / v.all.size) }]));
})();

const TDM_COUNT: Record<string, number> = { "07": 7, "08": 35, "10": 319, "11": 39, "13": 144, "14": 100, "15": 53, "16": 91, "17": 86, "18": 40, "20": 232, "21": 27, "22": 89, "23": 196, "24": 75, "25": 162, "26": 163, "27": 152, "28": 323, "29": 61, "30": 62, "31": 41, "32": 142, "33": 93, "38": 95, "39": 14, "41": 31, "42": 9, "43": 130, "52": 47, "55": 8, "56": 63, "58": 53, "59": 46, "60": 24, "62": 30, "63": 23, "70": 56, "71": 109, "72": 58, "74": 24, "75": 6, "81": 25, "82": 26, "85": 97, "86": 150, "87": 19, "88": 25, "90": 67, "91": 17, "93": 40, "95": 72, "96": 48 };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const def = SECTIONS[section];
  if (!def) return { title: "Κλάδος ΚΑΔ" };
  const nace = getNace21(section);
  const naceSnippet = nace?.description ? ` ${nace.description.slice(0, 80)}.` : "";
  return {
    title: `ΚΑΔ ${def.name} 2025 — ${SECTION_STATS[section]?.pct ?? 0}% Άλλαξαν`,
    description: `Στον κλάδο ${def.name} άλλαξαν ${SECTION_STATS[section]?.changed ?? 0} από ${SECTION_STATS[section]?.total ?? 0} ΚΑΔ (${SECTION_STATS[section]?.pct ?? 0}%). ${def.keywords}. ${def.desc}.${naceSnippet} Αντιστοίχιση βάσει ΑΑΔΕ Α.1003/2026.`,
    keywords: def.keywords.split(",").map((k) => k.trim()),
    alternates: { canonical: `https://www.kad2025.gr/klados/${section}` },
  };
}

const CANON_SET = new Set(canonicalRaw as string[]);
const CLASS_TITLES = (naceNotesFull as { classes: Record<string, { t: string }> }).classes;
const FULL_LADDER: Record<string, { cls: string; title: string; codes: string[] }[]> = (() => {
  const bySec: Record<string, Record<string, string[]>> = {};
  const clsFallback = clsFbRaw as Record<string, string>;
  const seen = new Set<string>();
  for (const r of kadStatsRaw as { kad2008: string; kad2025: string }[]) {
    const p8 = r.kad2008.padStart(8, "0");
    const sec = p8.slice(0, 2);
    const cls = `${p8.slice(0, 2)}.${p8.slice(2, 4)}`;
    if (!CANON_SET.has(r.kad2008) || seen.has(r.kad2008)) continue;
    seen.add(r.kad2008);
    (bySec[sec] ??= {})[cls] ??= [];
    bySec[sec][cls].push(r.kad2008);
  }
  const out: Record<string, { cls: string; title: string; codes: string[] }[]> = {};
  for (const [sec, byCls] of Object.entries(bySec)) {
    out[sec] = Object.keys(byCls).sort().map((cls) => ({
      cls, title: (CLASS_TITLES[cls]?.t || clsFallback[cls] || "").slice(0, 70), codes: byCls[cls].sort(),
    }));
  }
  return out;
})();

function buildKladosFaq(name: string, st: { total: number; changed: number; pct: number }, offIntro?: string) {
  return [
    { q: `Πόσοι ΚΑΔ άλλαξαν στον κλάδο ${name} το 2025;`, a: `Στον κλάδο ${name} άλλαξαν ${st.changed} από τους ${st.total} κωδικούς (${st.pct}%), βάσει της αντιστοίχισης ΚΑΔ 2008 → 2025 της ΑΑΔΕ (Α.1003/2026, NACE Rev.2.1).` },
    { q: `Τι πρέπει να κάνω αν η επιχείρησή μου έχει ΚΑΔ του κλάδου ${name};`, a: `Ελέγξτε την αντιστοίχιση του κωδικού σας στη λίστα αυτής της σελίδας ή στο εργαλείο αντιστοίχισης. Οι νέοι ΚΑΔ 2025 ισχύουν από 1/3/2026, ενώ διορθώσεις στο μητρώο μπορούν να γίνουν έως 30/10/2026 μέσω myAADE.` },
    { q: `Ισχύουν ακόμα οι παλιοί ΚΑΔ 2008 του κλάδου ${name};`, a: `Οι παλιοί κωδικοί 2008 αντικαταστάθηκαν από τους ΚΑΔ 2025. Για όσους δεν έγινε χειροκίνητη μετάβαση, πραγματοποιήθηκε αυτόματη αντιστοίχιση στις 9/3/2026 — καλό είναι όμως να επιβεβαιώσετε ότι ο νέος κωδικός περιγράφει σωστά τη δραστηριότητά σας.` },
    { q: `Πού βλέπω όλους τους νέους ΚΑΔ του κλάδου ${name};`, a: `Σε αυτή τη σελίδα εμφανίζεται η πλήρης λίστα αντιστοίχισης του κλάδου. Μπορείτε επίσης να κατεβάσετε τον πλήρη πίνακα σε Excel ή να αναζητήσετε συγκεκριμένο κωδικό.` },
    ...(offIntro ? [{ q: `Τι περιλαμβάνει επίσημα ο κλάδος ${name};`, a: `${offIntro.length > 300 ? offIntro.slice(0, 300).trimEnd() + "…" : offIntro} (Πηγή: Επεξηγηματικές Σημειώσεις ΣΤΑΚΟΔ/NACE Αναθ. 2.1, ΕΛΣΤΑΤ.)` }] : []),
  ];
}

export default async function KladosDetailPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const def = SECTIONS[section];
  if (!def) notFound();

  const data = getKadData();
  const sectionData = data.filter((r) => r.kad2008.padStart(8, "0").startsWith(section));

  if (sectionData.length === 0) notFound();

  const changed = new Set(sectionData.filter((r) => r.kad2008 !== r.kad2025).map((r) => r.kad2008)).size;
  const uniqTotal = new Set(sectionData.map((r) => r.kad2008)).size;
  const pct = uniqTotal ? Math.round((changed / uniqTotal) * 100) : 0;

  // Deduplicate by kad2008
  const unique = new Map<string, typeof sectionData[0]>();
  sectionData.forEach((r) => { if (!unique.has(r.kad2008)) unique.set(r.kad2008, r); });
  const uniqueList = Array.from(unique.values()).filter(r => ssgCodes.has(r.kad2008));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "Κλάδοι", item: "https://www.kad2025.gr/klados" },
          { "@type": "ListItem", position: 3, name: def.name, item: `https://www.kad2025.gr/klados/${section}` },
        ],
      },
      {
        "@type": "ItemList",
        name: `ΚΑΔ — ${def.name}`,
        description: `Λίστα κωδικών δραστηριότητας για ${def.name}`,
        numberOfItems: uniqueList.length,
        itemListElement: uniqueList.slice(0, 20).map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: r.desc2008,
          url: `https://www.kad2025.gr/kad/${r.kad2008}`,
        })),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/klados" style={{ color: "var(--primary)", textDecoration: "none" }}>Κλάδοι</Link>
        {" → "}
        <span>{def.name}</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "2rem" }}>{def.icon}</span>
        <div>
          <h1 style={{ marginBottom: "0.2rem" }}>ΚΑΔ 2025 — {def.name}</h1>
      
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{def.desc}</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { label: "Σύνολο ΚΑΔ", value: (SECTION_STATS[section]?.total ?? 0).toLocaleString("el-GR"), color: "var(--primary)" },
          { label: "Άλλαξαν", value: (SECTION_STATS[section]?.changed ?? 0).toLocaleString("el-GR"), color: "var(--accent)" },
          { label: "Ποσοστό αλλαγής", value: `${SECTION_STATS[section]?.pct ?? 0}%`, color: (SECTION_STATS[section]?.pct ?? 0) > 70 ? "var(--accent)" : "var(--success)" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ height: 8, background: "var(--border)", borderRadius: 4, marginBottom: "1.5rem", overflow: "hidden" }}>
        {(TDM_COUNT[section] ?? 0) > 0 && (
          <p style={{ margin: "0.75rem 0", fontSize: "0.9rem" }}>
            💶 <strong>{TDM_COUNT[section]}</strong> ΚΑΔ του κλάδου είναι επιλέξιμοι στις 4 ενεργές δράσεις{" "}
            <Link href="/programma" style={{ fontWeight: 700 }}>Δίκαιης Μετάβασης (ΕΣΔΙΜ) →</Link>
          </p>
        )}

        <div style={{ height: "100%", width: `${pct}%`, background: pct > 70 ? "var(--accent)" : "var(--success)", borderRadius: 4 }} />
      </div>

      {/* NACE 2.1 description */}
      {(() => {
        const nace = getNace21(section);
        if (!nace) return null;
        const nnDiv = (naceNotesFull as { divisions: Record<string, { inc: string[]; exc: { x: string }[] }> }).divisions[section];
        const fullDesc = (nnDiv?.inc?.length ? nnDiv.inc.join(" ") : nace.description) || "";
        const fullExc = (nnDiv?.exc?.length ? nnDiv.exc.map((e) => e.x).join("· ") : nace.excludes) || "";
        return (
          <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
            <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              📋 Περιγραφή κλάδου (NACE 2.1)
            </h2>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{nace.title}</p>
            {nace.description && (
              fullDesc.length > 400 ? (
                <details className="nace-expand">
                  <summary style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", cursor: "pointer" }}>
                    {fullDesc.slice(0, 350)}<span className="lbl-more">… <span style={{ color: "var(--primary)", fontWeight: 600 }}>[Περισσότερα]</span></span><span className="lbl-less" style={{ color: "var(--primary)", fontWeight: 600 }}> [Λιγότερα]</span>
                  </summary>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", marginTop: "0.25rem" }}>
                    {fullDesc.slice(350)}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>Πηγή: Επεξηγηματικές Σημειώσεις ΣΤΑΚΟΔ/NACE Αναθ. 2.1 (ΕΛΣΤΑΤ)</p>
                </details>
              ) : (
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)" }}>
                  {fullDesc}
                </p>
              )
            )}
            {nace.excludes && (
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                <strong>Εξαιρούνται:</strong> {fullExc}
              </p>
            )}
          </div>
        );
      })()}

      {/* Quick actions */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <Link href={`/antistoixisi?q=${section}`} className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
          🔍 Αναζήτηση στον κλάδο
        </Link>
        <Link href="/maziki-2008" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
          📦 Μαζική Αντιστοίχιση
        </Link>
        <Link href="/statistika" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
          📊 Στατιστικά
        </Link>
      </div>

      {/* KAD list - ALL codes, grouped by changed/unchanged */}
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        ΚΑΔ — {def.name} ({uniqueList.length.toLocaleString("el-GR")} κωδικοί)
      </h2>

      {/* Changed KADs - first 200 for SEO internal linking */}
      <h3 style={{ fontSize: "0.95rem", color: "var(--accent)", marginBottom: "0.5rem", marginTop: "1rem" }}>
        🔄 Αλλαγμένοι ΚΑΔ ({uniqueList.filter((r) => r.kad2008 !== r.kad2025).length})
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
        {uniqueList.filter((r) => r.kad2008 !== r.kad2025).slice(0, 200).map((r) => (
          <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.55rem 0.75rem",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: 8, fontSize: "0.85rem", flexWrap: "wrap"
            }}>
              <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.75rem", flexShrink: 0 }}>{r.kad2008}</span>
              <span style={{ flex: 1, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.82rem" }}>{r.desc2008}</span>
              <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>→ {r.kad2025}</span>
            </div>
          </Link>
        ))}
      </div>
      {uniqueList.filter((r) => r.kad2008 !== r.kad2025).length > 200 && (
        <Link href={`/antistoixisi?q=${section}`} className="btn btn-ghost" style={{ display: "inline-block", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
          🔍 Δείτε και τους υπόλοιπους {(uniqueList.filter((r) => r.kad2008 !== r.kad2025).length - 200).toLocaleString("el-GR")} αλλαγμένους ΚΑΔ →
        </Link>
      )}

      {/* Unchanged KADs - first 50 */}
      {uniqueList.filter((r) => r.kad2008 === r.kad2025).length > 0 && (
        <>
          <h3 style={{ fontSize: "0.95rem", color: "var(--success)", marginBottom: "0.5rem" }}>
            ✅ Αμετάβλητοι ΚΑΔ ({uniqueList.filter((r) => r.kad2008 === r.kad2025).length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1rem" }}>
            {uniqueList.filter((r) => r.kad2008 === r.kad2025).slice(0, 50).map((r) => (
              <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.45rem 0.75rem",
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--success)",
                  borderRadius: 8, fontSize: "0.82rem"
                }}>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem", flexShrink: 0 }}>{r.kad2008}</span>
                  <span style={{ flex: 1, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.desc2008}</span>
                </div>
              </Link>
            ))}
          </div>
          {uniqueList.filter((r) => r.kad2008 === r.kad2025).length > 50 && (
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              ...και {(uniqueList.filter((r) => r.kad2008 === r.kad2025).length - 50).toLocaleString("el-GR")} ακόμα αμετάβλητοι. Χρησιμοποιήστε την{" "}
              <Link href={`/kad-2008?q=${section}`} style={{ color: "var(--primary)" }}>αναζήτηση ΚΑΔ</Link> για πλήρη λίστα.
            </p>
          )}
        </>
      )}

      {/* Related sections */}
      <div className="card" style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Δείτε και άλλους Κλάδους</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {Object.entries(SECTIONS).filter(([k]) => k !== section).map(([k, v]) => (
            <Link key={k} href={`/klados/${k}`} style={{ textDecoration: "none", padding: "0.3rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 20, fontSize: "0.82rem", color: "var(--primary)", fontWeight: 500 }}>
              {v.icon} {v.name}
            </Link>
          ))}
          <Link href="/klados" style={{ textDecoration: "none", padding: "0.3rem 0.75rem", background: "var(--primary)", borderRadius: 20, fontSize: "0.82rem", color: "white", fontWeight: 600 }}>
            Όλοι οι κλάδοι →
          </Link>
        </div>
      </div>

      <section style={{ marginTop: "2rem" }}>
        <section className="card" style={{ marginTop: "1.25rem", padding: "1rem 1.15rem" }}>
          <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>📚 Πλήρης λίστα ΚΑΔ του κλάδου — ανά τάξη</h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 0.7rem" }}>
            Όλοι οι {(FULL_LADDER[section] ?? []).reduce((a, g) => a + g.codes.length, 0).toLocaleString("el-GR")} ενεργοί κωδικοί του κλάδου, οργανωμένοι στις τάξεις NACE 2.1.
          </p>
          {(FULL_LADDER[section] ?? []).map((g) => (
            <details key={g.cls} style={{ margin: "0.35rem 0", border: "1px solid var(--border)", borderRadius: 8, padding: "0.45rem 0.75rem" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "0.92rem" }}>
                Τάξη {g.cls}{g.title ? ` — ${g.title}` : " (ταξινόμηση 2008)"} <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>({g.codes.length})</span>
              </summary>
              <div style={{ margin: "0.5rem 0 0.2rem", display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {g.codes.map((k) => (
                  <Link key={k} href={`/kad/${k}`} className="ladder-chip">
                    {k.padStart(8, "0").replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4")}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </section>

        <h2>Συχνές Ερωτήσεις — ΚΑΔ {def.name}</h2>
        {buildKladosFaq(def.name, SECTION_STATS[section] ?? { total: 0, changed: 0, pct: 0 }, (naceNotesFull as { divisions: Record<string, { inc: string[] }> }).divisions[section]?.inc?.[0]).map((f, i) => (
          <details key={i} style={{ margin: "0.5rem 0", padding: "0.5rem 0.75rem", border: "1px solid var(--border, #333)", borderRadius: "8px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
            <p style={{ margin: "0.5rem 0 0" }}>{f.a}</p>
          </details>
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: buildKladosFaq(def.name, SECTION_STATS[section] ?? { total: 0, changed: 0, pct: 0 }, (naceNotesFull as { divisions: Record<string, { inc: string[] }> }).divisions[section]?.inc?.[0]).map((f) => ({
            "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      </section>
    </div>
  );
}
