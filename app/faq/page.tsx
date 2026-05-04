import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Συχνές Ερωτήσεις Αντιστοίχισης ΚΑΔ 2025 (ΑΑΔΕ)",
  description:
    "Απαντήσεις ΑΑΔΕ: υπόχρεοι αντιστοίχισης ΚΑΔ 2025, μετάβαση στους νέους κωδικούς, προθεσμία 1/6/2026, διόρθωση μέσω myAADE.",
  alternates: { canonical: "https://www.kad2025.gr/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Συχνές Ερωτήσεις – Αντιστοίχιση ΚΑΔ 2025 (Επίσημο ΑΑΔΕ)",
    description:
      "10 ερωτήσεις-απαντήσεις ΑΑΔΕ για τη μετάβαση στους νέους ΚΑΔ 2025. Προθεσμία, διαδικασία, πρόστιμα, διόρθωση μέσω myAADE.",
    url: "https://www.kad2025.gr/faq",
    type: "website",
    siteName: "kad2025.gr",
  },
};

const faqs = [
  { q: "Ποιοι είναι υπόχρεοι σε αντιστοίχιση ΚΑΔ;", a: "Όλα τα φυσικά και νομικά πρόσωπα, καθώς και οι νομικές οντότητες του άρθρου 3 του ΚΦΔ, ημεδαπά ή αλλοδαπά, τα οποία δεν έχουν προβεί σε διακοπή εργασιών." },
  { q: "Πώς πραγματοποιείται η μετάβαση στους νέους ΚΑΔ;", a: "Κεντρικά και αυτοματοποιημένα από την ΑΑΔΕ, χωρίς να απαιτείται ενέργεια από τους φορολογούμενους, εκτός εάν επιθυμούν να προβούν σε διόρθωση ή αλλαγή των καταχωρημένων στοιχείων." },
  { q: "Πότε διενεργήθηκε η αυτοματοποιημένη αντιστοίχιση ΚΑΔ;", a: "Ξεκίνησε την 1η Μαρτίου 2026 και ολοκληρώθηκε το α' δεκαήμερο Μαρτίου 2026. Σε αυτό το χρονικό διάστημα δεν ήταν δυνατή η πραγματοποίηση ενάρξεων, μεταβολών και διακοπών εργασιών μέσω των εφαρμογών." },
  { q: "Σε περίπτωση που μια υφιστάμενη δραστηριότητα αντιστοιχίζεται σε περισσότερους από έναν νέους ΚΑΔ, πώς ολοκληρώνεται η αντιστοίχιση;", a: "Διακρίνονται τρεις περιπτώσεις:\n\nα) Ο υφιστάμενος ΚΑΔ παραμένει και στη νέα ταξινόμηση: διατηρείται ως κύριος και οι επιπλέον ΚΑΔ δηλώνονται ως δευτερεύουσες δραστηριότητες.\n\nβ) Ο υφιστάμενος ΚΑΔ δεν παραμένει στη νέα ταξινόμηση: επιλέγεται ως κύριος ο πρώτος αριθμητικά ΚΑΔ, με την προϋπόθεση ότι παρουσιάζει τη μεγαλύτερη συνάφεια (κατόπιν εξέτασης των επεξηγηματικών σημειώσεων). Οι επιπλέον ΚΑΔ δηλώνονται ως δευτερεύουσες δραστηριότητες.\n\nγ) Ολική αναθεώρηση της ταξινόμησης: επιλέγεται ο ΚΑΔ με τη μεγαλύτερη συνάφεια με τον υφιστάμενο (βάσει των επεξηγηματικών σημειώσεων).\n\nΣε κάθε περίπτωση, οι φορολογούμενοι μπορούν να προβούν σε διόρθωση ή αλλαγή έως την 1η Ιουνίου 2026, χωρίς πρόστιμο." },
  { q: "Ποιο είναι το χρονικό περιθώριο για διόρθωση ή αλλαγή των ΚΑΔ χωρίς πρόστιμο;", a: "Οι φορολογούμενοι μπορούν να προχωρήσουν σε διορθώσεις ή αλλαγές έως την 1η Ιουνίου 2026, με ημερομηνία δήλωσης την ημερομηνία της αυτόματης αντιστοίχισης. Μετά το πέρας της 1ης Ιουνίου 2026 επιβάλλονται οι κυρώσεις του άρθρου 53 του ΚΦΔ." },
  { q: "Μετά την ολοκλήρωση της αυτόματης αντιστοίχισης, πώς ενημερώνονται οι φορολογούμενοι;", a: "Οι φορολογούμενοι ενημερώνονται με μήνυμα στον λογαριασμό τους στην ψηφιακή πύλη myAADE (myaade.gov.gr), στη διαδρομή Μητρώο & Επικοινωνία → Τα Μηνύματά μου. Παράλληλα, λαμβάνουν ειδοποίηση στο email τους. Μπορούν να δουν τους νέους ΚΑΔ στη διαδρομή: Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας/Επιχείρησης." },
  { q: "Πώς υποβάλλεται η δήλωση μεταβολής/διόρθωσης των ΚΑΔ μετά την αυτόματη αντιστοίχιση;", a: "Μέσω της ψηφιακής πύλης myAADE (myaade.gov.gr), στη διαδρομή: Μητρώο & Επικοινωνία → Αλλαγή Στοιχείων Μητρώου → Στοιχεία Επιχείρησης ή/και Στοιχεία Εγκατάστασης Εσωτερικού → Νέα Δήλωση." },
  { q: "Σε περίπτωση που δεν διενεργήθηκε η αυτόματη αντιστοίχιση, πώς υποβάλλεται η δήλωση νέων ΚΑΔ 2025;", a: "Κατόπιν ειδοποίησης του φορολογούμενου, υποβάλλεται αίτημα έως την 1η Ιουνίου 2026 χωρίς πρόστιμο, μέσω της εφαρμογής «Τα Αιτήματά μου» στο myAADE (myaade.gov.gr), στη θεματική ενότητα Μητρώο.\n\n• Φυσικά πρόσωπα: Μεταβολή εργασιών φυσικού προσώπου που δεν δύναται να ολοκληρωθεί μέσω της Ψηφιακής Πύλης myAADE.\n• Νομικά πρόσωπα/οντότητες: Μεταβολή εργασιών ημεδαπών/αλλοδαπών νομικών προσώπων και νομικών οντοτήτων που δεν δύναται να ολοκληρωθεί μέσω της Ψηφιακής Πύλης myAADE.\n\nΚατά την υποβολή επισυνάπτεται η δήλωση Μητρώου (έντυπο Δ211) και τα κατά περίπτωση δικαιολογητικά." },
  { q: "Τι γίνεται αν δεν έχει προηγηθεί αντιστοίχιση των ΚΑΔ 1997 με τους ΚΑΔ 2008;", a: "Θα αντικατασταθούν με ορισμένο ειδικό ΚΑΔ. Ο φορολογούμενος θα πρέπει στη συνέχεια να υποβάλει αίτημα αντιστοίχισης μέσω της εφαρμογής «Τα Αιτήματά μου» στο myAADE." },
  { q: "Πώς υποβάλλονται τα αιτήματα αναδρομικών μεταβολών ΚΑΔ μέχρι 28η Φεβρουαρίου 2026;", a: "Μέσω της εφαρμογής «Τα Αιτήματά μου» στο myAADE (myaade.gov.gr), στη θεματική ενότητα Μητρώο.\n\n• Φυσικά πρόσωπα: Μεταβολή εργασιών φυσικού προσώπου που δεν δύναται να ολοκληρωθεί μέσω της Ψηφιακής Πύλης myAADE.\n• Νομικά πρόσωπα/οντότητες: Μεταβολή εργασιών ημεδαπών/αλλοδαπών νομικών προσώπων και νομικών οντοτήτων που δεν δύναται να ολοκληρωθεί μέσω της Ψηφιακής Πύλης myAADE.\n\nΚατά την υποβολή επισυνάπτεται η δήλωση Μητρώου (έντυπο Δ211) και τα απαιτούμενα δικαιολογητικά τεκμηρίωσης δραστηριότητας." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", "@id": "https://www.kad2025.gr/faq#faqpage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/\n/g, " ") } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" }, { "@type": "ListItem", position: 2, name: "Συχνές Ερωτήσεις", item: "https://www.kad2025.gr/faq" }] },
    { "@type": "WebPage", "@id": "https://www.kad2025.gr/faq", name: "Συχνές Ερωτήσεις – Αντιστοίχιση ΚΑΔ 2025", url: "https://www.kad2025.gr/faq", datePublished: "2026-03-01", dateModified: "2026-04-15", inLanguage: "el", isPartOf: { "@type": "WebSite", "@id": "https://www.kad2025.gr", name: "kad2025.gr", url: "https://www.kad2025.gr" } },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
        <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>{" → "}<span>Συχνές Ερωτήσεις</span>
        </nav>

        <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "0.5rem" }}>
          Συχνές Ερωτήσεις – Αντιστοίχιση ΚΑΔ 2025
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
          Επίσημες απαντήσεις της ΑΑΔΕ (1η Μαρτίου 2026) για τη μετάβαση στους νέους Κωδικούς Αριθμούς Δραστηριότητας.
        </p>

        <div style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)", borderRadius: "var(--radius, 12px)", padding: "0.75rem 1rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
          <span>⚠️</span>
          <span><strong>Προθεσμία:</strong> Διορθώσεις χωρίς πρόστιμο έως <strong>1η Ιουνίου 2026</strong></span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, idx) => (
            <details key={idx} className="card" style={{ cursor: "pointer" }} {...(idx < 3 ? { open: true } : {})}>
              <summary style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem 1.25rem", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.5, listStyle: "none" }}>
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, marginTop: 1 }}>{idx + 1}</span>
                <span style={{ flex: 1 }}>{faq.q}</span>
                <span style={{ flexShrink: 0, marginTop: 4, fontSize: "0.75rem", color: "var(--text-muted)" }}>▼</span>
              </summary>
              <div style={{ padding: "0 1.25rem 1.25rem 3.5rem", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)", whiteSpace: "pre-line" }}>{faq.a}</div>
            </details>
          ))}
        </div>

        <div className="card" style={{ marginTop: "2.5rem", borderLeft: "4px solid var(--primary)" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>Χρειάζεστε βοήθεια με τους νέους ΚΑΔ;</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem", lineHeight: 1.6 }}>
            Χρησιμοποιήστε τα δωρεάν εργαλεία μας για να βρείτε αμέσως τον νέο ΚΑΔ σας ή{" "}
            <Link href="/pos-allazw-kad" style={{ color: "var(--primary)", textDecoration: "underline" }}>διαβάστε τον οδηγό αλλαγής ΚΑΔ</Link>.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/antistoixisi" className="btn btn-primary">🔍 Αντιστοίχιση ΚΑΔ 2008 → 2025</Link>
            <Link href="/ai-suggester" className="btn btn-ghost">🤖 AI Εύρεση ΚΑΔ</Link>
            <Link href="/wizard" className="btn btn-ghost">🧭 Οδηγός Επιλογής ΚΑΔ</Link>
          </div>
        </div>

        <h2 style={{ fontSize: "1.1rem", marginTop: "2.5rem", marginBottom: "1rem" }}>Σχετικοί Οδηγοί & Εργαλεία</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.75rem" }}>
          {[
            { href: "/ti-einai-kad", icon: "📖", title: "Τι είναι ο ΚΑΔ;", sub: "Πλήρης εξήγηση κωδικών δραστηριότητας" },
            { href: "/pos-allazw-kad", icon: "🔄", title: "Πώς αλλάζω ΚΑΔ;", sub: "Βήμα-βήμα οδηγός μέσω myAADE" },
            { href: "/klados", icon: "📂", title: "Κλάδοι Δραστηριοτήτων", sub: "Περιήγηση ΚΑΔ ανά κλάδο οικονομίας" },
            { href: "/sygkrisi", icon: "⚖️", title: "Σύγκριση ΚΑΔ", sub: "Δείτε τις αλλαγές side-by-side" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card" style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", textDecoration: "none", padding: "1rem", transition: "border-color 0.2s" }}>
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.sub}</div>
              </div>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
          Πηγή: ΑΑΔΕ – «Συχνές ερωτήσεις – απαντήσεις για την αντιστοίχιση ΚΑΔ 2025», Αθήνα, 1η Μαρτίου 2026. Οι απαντήσεις παρατίθενται με βάση το επίσημο κείμενο της ΑΑΔΕ.
        </p>
      </div>
    </>
  );
}
