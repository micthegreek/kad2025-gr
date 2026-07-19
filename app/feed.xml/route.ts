import { NextResponse } from "next/server";

export const dynamic = "force-static";

const BASE = "https://www.kad2025.gr";

const ITEMS = [
  { href: "/blog/epeksigimatikes-simeioseis-nace-odigos", title: "Τι Πραγματικά Περιλαμβάνει ο ΚΑΔ σας: Οδηγός των Επίσημων Επεξηγήσεων NACE 2.1", desc: "Ο τίτλος του ΚΑΔ δεν αρκεί: πώς διαβάζονται τα «Περιλαμβάνει / Δεν περιλαμβάνει» των επίσημων σημειώσεων ΕΛΣΤΑΤ και πού τα βρίσκετε για κάθε κωδικό.", pubDate: "Sat, 04 Jul 2026 06:00:00 +0300" },
  { href: "/blog/kad-diaspaseis-odigos", title: "Διασπάσεις ΚΑΔ: Όταν ο Παλιός σας Κωδικός Έγινε 2, 5 — ή και 52 Νέοι", desc: "685 κωδικοί διασπάστηκαν στη μετάβαση. Ποιοι είναι οι ακραίοι, γιατί η αυτόματη επιλογή μπορεί να είναι λάθος, και το 3-βημάτων checklist.", pubDate: "Mon, 06 Jul 2026 11:00:00 +0300" },
  { href: "/blog/kyrios-defterevon-kad-odigos", title: "Κύριος & Δευτερεύων ΚΑΔ: Ο Πλήρης Οδηγός", desc: "Διαφορές, όρια, επίδραση σε φορολογία και επιδοτήσεις, και πώς αλλάζετε τη σειρά στο myAADE.", pubDate: "Mon, 06 Jul 2026 10:00:00 +0300" },
  { href: "/blog/prosthiki-kad-kostos-mythoi", title: "Πόσο Κοστίζει η Προσθήκη ΚΑΔ; Οι 5 Μύθοι", desc: "Μηδέν ευρώ, πέντε λεπτά — και πέντε μύθοι που επιμένουν: φόροι, έλεγχοι, παράβολα. Τι ισχύει.", pubDate: "Mon, 06 Jul 2026 09:00:00 +0300" },
  { href: "/blog/kad-eleftheroi-epaggelmaties-2026", title: "ΚΑΔ για Freelancers: Οι 12 Πιο Συχνές Τάξεις", desc: "Σύμβουλοι, developers, design, υγεία, εκπαίδευση: πού δηλώνεται η συντριπτική πλειονότητα των ελεύθερων επαγγελματιών.", pubDate: "Mon, 06 Jul 2026 08:00:00 +0300" },
  { href: "/blog/kladoi-pou-allaksan-kad-2025", title: "Οι Κλάδοι που Άλλαξαν 100% στους ΚΑΔ 2025 — και οι 3 που Δεν Άλλαξαν Καθόλου", desc: "Ανάλυση δεδομένων της μετάβασης: ποιοι κλάδοι ανατράπηκαν πλήρως και ποιοι έμειναν άθικτοι.", pubDate: "Sun, 05 Jul 2026 09:00:00 +0300" },
  { href: "/blog/nees-proskliseis-tdm-esdim-epileximoi-kad", title: "Νέες Προσκλήσεις Δίκαιης Μετάβασης (ΕΣΔΙΜ): 4.144 Επιλέξιμοι ΚΑΔ", desc: "4 δράσεις ΤΔΜ στις περιοχές ΕΣΔΙΜ — πλήρης ανάλυση επιλέξιμων ΚΑΔ ανά τομέα.", pubDate: "Sat, 04 Jul 2026 08:00:00 +0300" },
  { href: "/blog/parexigimenes-taksinomiseis-kad", title: "Οι 10 πιο Παρεξηγημένες Ταξινομήσεις ΚΑΔ: Τι ΔΕΝ Περιλαμβάνει ο Κωδικός σας", desc: "Φόρτιση ηλεκτρικών ≠ βενζινάδικο, personal trainer ≠ γυμναστήριο: 10 πραγματικές περιπτώσεις όπου ο «προφανής» ΚΑΔ είναι λάθος — από τις επίσημες εξαιρέσεις NACE 2.1.", pubDate: "Sat, 04 Jul 2026 06:00:00 +0300" },
  { href: "/blog/lathos-kad-prostima", title: "Λάθος ΚΑΔ: Πρόστιμα & Συνέπειες το 2026", desc: "Το άμεσο πρόστιμο, οι έμμεσες συνέπειες σε ΕΣΠΑ και μητρώα, και το παράθυρο δωρεάν διόρθωσης έως 30/10/2026.", pubDate: "Wed, 10 Jun 2026 06:00:00 +0300" },
  { href: "/blog/kad-gia-eshop", title: "ΚΑΔ για E-shop: Οδηγός μετά την Κατάργηση του 47.91", desc: "Γιατί δεν υπάρχει πια ενιαίος ΚΑΔ e-shop, πώς ταξινομείται το ηλεκτρονικό εμπόριο ανά προϊόν, και τι ισχύει για marketplaces.", pubDate: "Wed, 10 Jun 2026 06:00:00 +0300" },
  { href: "/blog/kad-airbnb-vraxychronia", title: "ΚΑΔ για Airbnb: 55.20 ή 68.20 — και Πότε Κανέναν", desc: "Η κρίσιμη διάκριση καταλύματος/εκμίσθωσης, το όριο των 3 ακινήτων, ΑΜΑ vs ΚΑΔ, και τι άλλαξε στους ΚΑΔ 2025.", pubDate: "Wed, 10 Jun 2026 06:00:00 +0300" },
  { href: "/blog/paratasi-prothesmias-kad-30-oktovriou", title: "Παράταση Προθεσμίας ΚΑΔ: Νέα Ημερομηνία 30 Οκτωβρίου 2026", desc: "Με απόφαση ΑΑΔΕ Α.1113/2026, η προθεσμία επικαιροποίησης ΚΑΔ 2025 παρατείνεται από 1η Ιουνίου στις 30 Οκτωβρίου 2026 χωρίς πρόστιμο.", pubDate: "Thu, 04 Jun 2026 06:00:00 +0300" },
  { href: "/blog/anoixta-programmata-epidotisis", title: "Ανοιχτά Προγράμματα Επιδότησης 2026 — Επιλεξιμότητα ΚΑΔ", desc: "Ποια προγράμματα ΕΣΠΑ και Αναπτυξιακός Νόμος είναι ανοιχτά και πώς να ελέγξετε αν ο ΚΑΔ 2025 σας είναι επιλέξιμος.", pubDate: "Fri, 01 May 2026 06:00:00 +0300" },
  { href: "/blog/psifiaki-vevaiosi-kad-2025", title: "Νέα Ψηφιακή Βεβαίωση ΚΑΔ — ΑΑΔΕ 27/4/2026", desc: "Ψηφιακή βεβαίωση αντιστοίχισης, ειδικές κατηγορίες υπαίθριου εμπορίου & e-shop. Τι αποκάλυψε το επίσημο Δελτίο Τύπου ΑΑΔΕ.", pubDate: "Mon, 27 Apr 2026 06:00:00 +0300" },
  { href: "/blog/kad-kai-fpa-2026", title: "ΚΑΔ 2025 και ΦΠΑ: Τι Αλλάζει το 2026", desc: "Πώς ο νέος ΚΑΔ 2025 μπορεί να επηρεάσει τον συντελεστή ΦΠΑ σας και ποιοι κλάδοι πρέπει να δώσουν ιδιαίτερη προσοχή.", pubDate: "Sat, 25 Apr 2026 06:00:00 +0300" },
  { href: "/blog/nace-rev21-explainer", title: "NACE Rev.2.1: Η Ευρωπαϊκή Ταξινόμηση πίσω από τους ΚΑΔ", desc: "Τι είναι το NACE Rev.2.1, γιατί εκδόθηκε και πώς εφαρμόστηκε στην Ελλάδα ως ΚΑΔ 2025.", pubDate: "Mon, 20 Apr 2026 06:00:00 +0300" },
  { href: "/blog/pos-na-diorthoso-kad-myaade", title: "Πώς να Διορθώσετε τον ΚΑΔ σας στο myAADE", desc: "Βήμα-βήμα οδηγός: ηλεκτρονικά μέσω Μεταβολής Εργασιών ή με έντυπο Δ211. Προθεσμία 30 Οκτωβρίου 2026.", pubDate: "Wed, 15 Apr 2026 06:00:00 +0300" },
  { href: "/blog/kad-kai-epidotiseis", title: "ΚΑΔ και ΕΣΠΑ 2025: Τι να Προσέξετε", desc: "Πώς οι νέοι ΚΑΔ 2025 επηρεάζουν την επιλεξιμότητα σε ΕΣΠΑ, ΔΥΠΑ και άλλες επιδοτήσεις.", pubDate: "Fri, 10 Apr 2026 06:00:00 +0300" },
  { href: "/blog/pos-na-vro-ton-sosto-kad", title: "Πώς να Βρείτε τον Σωστό ΚΑΔ 2025", desc: "Βήμα-βήμα οδηγός εύρεσης του κατάλληλου ΚΑΔ 2025. Τρεις διαφορετικές μέθοδοι.", pubDate: "Sun, 05 Apr 2026 06:00:00 +0300" },
  { href: "/blog/kad-2008-vs-2025", title: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε", desc: "Συγκριτική ανάλυση παλιού και νέου συστήματος ΚΑΔ. Ποιοι κλάδοι επηρεάστηκαν περισσότερο.", pubDate: "Wed, 01 Apr 2026 06:00:00 +0300" },
  { href: "/blog/metodologia-dedomenon", title: "Μεθοδολογία Δεδομένων kad2025.gr", desc: "Αναλυτική παρουσίαση πηγών δεδομένων, διαδικασίας επαλήθευσης και ορθής ερμηνείας.", pubDate: "Wed, 01 Apr 2026 06:00:00 +0300" },
  { href: "/blog/kad-gia-nea-epixeirisi", title: "ΚΑΔ για Νέα Επιχείρηση 2026", desc: "Αναλυτικός οδηγός επιλογής ΚΑΔ για νέες επιχειρήσεις. Τι πρέπει να γνωρίζετε.", pubDate: "Wed, 25 Mar 2026 06:00:00 +0300" },
  { href: "/blog/kad-kai-logistes", title: "Οδηγός ΚΑΔ 2025 για Λογιστές", desc: "Πώς να ελέγξετε αποτελεσματικά τους ΚΑΔ δεκάδων πελατών με το MazikiTool.", pubDate: "Fri, 20 Mar 2026 06:00:00 +0300" },
  { href: "/blog/syxna-lathi-antistoixisis", title: "5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ 2008→2025", desc: "Ποια είναι τα πιο κοινά λάθη που κάνουν επιχειρήσεις και λογιστές και πώς να τα αποφύγετε.", pubDate: "Sun, 15 Mar 2026 06:00:00 +0300" },
];

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  const items = ITEMS.map(
    (it) => `    <item>
      <title>${esc(it.title)}</title>
      <link>${BASE}${it.href}</link>
      <guid isPermaLink="true">${BASE}${it.href}</guid>
      <description>${esc(it.desc)}</description>
      <pubDate>${it.pubDate}</pubDate>
    </item>`
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>kad2025.gr — Οδηγοί ΚΑΔ 2025</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Οδηγοί και αναλύσεις για την αντιστοίχιση ΚΑΔ 2008 → 2025, προθεσμίες ΑΑΔΕ και επιλεξιμότητα επιδοτήσεων.</description>
    <language>el</language>
    <lastBuildDate>${ITEMS[0]?.pubDate ?? ""}</lastBuildDate>
${items}
  </channel>
</rss>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
