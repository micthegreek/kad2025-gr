import type { Metadata } from "next";
import Link from "next/link";
import professionsRaw from "@/public/data/professions.json";

interface ProfCode { c: string; d08: string; n: string; d25: string; ch: boolean; idx: boolean }
interface Profession { slug: string; name: string; emoji: string; intro: string; codes: ProfCode[] }
const AIRBNB = (professionsRaw as Profession[]).find((p) => p.slug === "airbnb")!;

export const metadata: Metadata = {
  title: "ΚΑΔ για Airbnb & Βραχυχρόνια Μίσθωση 2026: 55.20 ή 68.20;",
  description:
    "Ποιος ΚΑΔ ισχύει για Airbnb και βραχυχρόνια μίσθωση το 2026: η κρίσιμη διάκριση 55.20 (καταλύματα με υπηρεσίες) και 68.20 (απλή εκμίσθωση), πότε απαιτείται έναρξη, και τι άλλαξε με τους ΚΑΔ 2025.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-airbnb-vraxychronia" },
};

const faqItems = [
  {
    q: "Χρειάζομαι ΚΑΔ για να νοικιάζω σπίτι στο Airbnb;",
    a: "Όχι πάντα. Φυσικό πρόσωπο που εκμισθώνει βραχυχρόνια χωρίς παροχή πρόσθετων υπηρεσιών (πέραν κλινοσκεπασμάτων) δηλώνει κατά κανόνα εισόδημα από ακίνητα χωρίς έναρξη επιχείρησης — απαιτείται όμως εγγραφή του ακινήτου στο Μητρώο Ακινήτων Βραχυχρόνιας Διαμονής (ΑΜΑ). Βάσει του ν.5073/2023, από το 2024 η εκμίσθωση τριών ή περισσότερων ακινήτων συνεπάγεται υποχρέωση έναρξης επιχειρηματικής δραστηριότητας — άρα και ΚΑΔ. Επιβεβαιώστε τα ισχύοντα όρια με τον λογιστή σας.",
  },
  {
    q: "55.20 ή 68.20 — ποια είναι η διαφορά;",
    a: "Ο 55.20 (καταλύματα διακοπών και σύντομης διαμονής) αφορά τουριστική εκμετάλλευση με παροχή υπηρεσιών — υποδοχή, καθαριότητα κατά τη διαμονή, αλλαγή ιματισμού κ.λπ. Ο 68.20 (εκμίσθωση ιδιόκτητων ή μισθωμένων ακινήτων) αφορά την απλή παραχώρηση χρήσης χωρίς τέτοιες υπηρεσίες. Η διάκριση καθορίζει αν το εισόδημα αντιμετωπίζεται ως επιχειρηματικό ή ως εισόδημα από ακίνητα, με διαφορετικές υποχρεώσεις.",
  },
  {
    q: "Άλλαξαν οι κωδικοί Airbnb με τους ΚΑΔ 2025;",
    a: "Οι βασικοί κωδικοί 55.20 και 68.20 διατήρησαν τη θέση τους στη NACE Rev.2.1 — οι 8ψήφιες εκδοχές τους εμφανίζονται στον πίνακα αντιστοίχισης είτε αμετάβλητες είτε με επικαιροποιημένο λεκτικό. Ελέγξτε πάντως τη δική σας εγγραφή στο myAADE, ειδικά αν είχατε δευτερεύοντες κωδικούς εστίασης ή υπηρεσιών.",
  },
  {
    q: "Τι είναι ο ΑΜΑ και σχετίζεται με τον ΚΑΔ;",
    a: "Ο Αριθμός Μητρώου Ακινήτου (ΑΜΑ) είναι η εγγραφή του ακινήτου στο Μητρώο Βραχυχρόνιας Διαμονής της ΑΑΔΕ και αναγράφεται υποχρεωτικά σε κάθε καταχώριση στις πλατφόρμες. Είναι ανεξάρτητος από τον ΚΑΔ: ο ΑΜΑ αφορά το ακίνητο, ο ΚΑΔ τη δραστηριότητα του προσώπου — ανάλογα με την περίπτωση μπορεί να χρειάζεστε μόνο ΑΜΑ, ή ΑΜΑ και ΚΑΔ.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ΚΑΔ για Airbnb & Βραχυχρόνια Μίσθωση 2026: 55.20 ή 68.20;",
      datePublished: "2026-06-10",
      dateModified: "2026-06-10",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
      mainEntityOfPage: "https://www.kad2025.gr/blog/kad-airbnb-vraxychronia",
      inLanguage: "el-GR",
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

export default function KadAirbnbPage() {
  return (
    <div className="post-layout">
      <article className="post-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ για Airbnb</span>
      </nav>
      <div className="meta-row">
        <span>📅 10 Ιουνίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 8 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ για Airbnb & Βραχυχρόνια Μίσθωση: 55.20 ή 68.20 — και Πότε Δεν Χρειάζεστε Κανέναν
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Στη βραχυχρόνια μίσθωση, η επιλογή ΚΑΔ δεν είναι τυπική λεπτομέρεια — καθορίζει αν το
        εισόδημά σας αντιμετωπίζεται ως <strong>επιχειρηματική δραστηριότητα</strong> ή ως
        <strong> εισόδημα από ακίνητα</strong>, με ό,τι αυτό συνεπάγεται σε υποχρεώσεις. Δείτε τη
        διάκριση 55.20 / 68.20, πότε απαιτείται έναρξη, και πώς πέρασαν οι σχετικοί κωδικοί στους
        ΚΑΔ 2025.
      </p>

      <section id="s1" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Η κρίσιμη διάκριση: υπηρεσίες ή απλή παραχώρηση χρήσης;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Όλη η ταξινόμηση της βραχυχρόνιας μίσθωσης κρέμεται από ένα ερώτημα: <strong>παρέχετε
          υπηρεσίες στον επισκέπτη κατά τη διαμονή του;</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>🏨 Με υπηρεσίες → 55.20 (Καταλύματα σύντομης διαμονής)</div>
            <div style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Υποδοχή επισκεπτών, καθαριότητα κατά τη διάρκεια της διαμονής, αλλαγή ιματισμού,
              πρωινό ή άλλες ξενοδοχειακού τύπου παροχές. Η εκμετάλλευση έχει χαρακτήρα
              τουριστικής δραστηριότητας — εισόδημα από επιχειρηματική δραστηριότητα, με έναρξη
              και πλήρεις υποχρεώσεις επιχείρησης.
            </div>
          </div>
          <div style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--success)", borderRadius: 8 }}>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>🔑 Χωρίς υπηρεσίες → 68.20 (Εκμίσθωση ακινήτων) ή καθόλου ΚΑΔ</div>
            <div style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Παραχωρείτε το ακίνητο επιπλωμένο, με μόνη «παροχή» τα κλινοσκεπάσματα. Για φυσικά
              πρόσωπα με λίγα ακίνητα, το εισόδημα δηλώνεται κατά κανόνα ως εισόδημα από ακίνητα
              χωρίς έναρξη επιχείρησης. Νομικά πρόσωπα ή όσοι ασκούν τη δραστηριότητα οργανωμένα
              χρησιμοποιούν τον 68.20.
            </div>
          </div>
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.85rem" }}>
          Προσοχή στο όριο πλήθους: βάσει του ν.5073/2023, από την 1/1/2024 τα φυσικά πρόσωπα που
          εκμισθώνουν βραχυχρόνια <strong>τρία ή περισσότερα ακίνητα</strong> υποχρεούνται σε
          έναρξη επιχειρηματικής δραστηριότητας — άρα και σε δήλωση ΚΑΔ — ακόμη κι αν δεν
          παρέχουν υπηρεσίες. Τα όρια και οι λεπτομέρειες εφαρμογής επικαιροποιούνται· επιβεβαιώστε
          την τρέχουσα εικόνα με τον λογιστή σας.
        </p>
      </section>

      <section id="s2" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.85rem" }}>Οι κωδικοί στους ΚΑΔ 2025 — τι άλλαξε</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.85rem", fontSize: "0.9rem" }}>
          Καλά νέα για τον κλάδο: οι βασικοί κωδικοί της βραχυχρόνιας μίσθωσης πέρασαν στη
          NACE Rev.2.1 χωρίς αναταράξεις. Ο πίνακας δείχνει τους 8ψήφιους κωδικούς και την
          κατάστασή τους στον επίσημο πίνακα αντιστοίχισης:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {AIRBNB.codes.map((c) => (
            <Link key={c.c} href={`/kad/${c.c}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", padding: "0.6rem 0.8rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: `3px solid ${c.ch ? "var(--accent)" : "var(--success)"}`, borderRadius: 8, flexWrap: "wrap" }}>
                <span className="kad-badge kad-badge-2008" style={{ flexShrink: 0 }}>{c.c}</span>
                <span style={{ fontSize: "0.83rem", flex: "1 1 250px", color: "var(--text)" }}>{c.d08}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: c.ch ? "var(--accent)" : "var(--success)", flexShrink: 0 }}>
                  {c.ch ? `→ ${c.n}` : "≡ αμετάβλητος"}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Πατήστε σε κάθε κωδικό για την πλήρη σελίδα του. Συγκεντρωτικά για το επάγγελμα:{" "}
          <Link href="/epaggelma/airbnb" style={{ color: "var(--primary)" }}>ΚΑΔ για Airbnb & Βραχυχρόνια Μίσθωση</Link>.
        </p>
      </section>

      <section id="s3" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>ΑΜΑ και ΚΑΔ: δύο διαφορετικά μητρώα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Συχνή σύγχυση του κλάδου: ο <strong>ΑΜΑ</strong> (Αριθμός Μητρώου Ακινήτου στο Μητρώο
          Βραχυχρόνιας Διαμονής της ΑΑΔΕ) δεν υποκαθιστά ούτε προϋποθέτει ΚΑΔ. Ο ΑΜΑ «κολλάει»
          στο ακίνητο και αναγράφεται υποχρεωτικά σε κάθε καταχώριση στις πλατφόρμες· ο ΚΑΔ
          αφορά τη δραστηριότητα του προσώπου στο φορολογικό Μητρώο. Έτσι:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li>Ιδιώτης με 1-2 ακίνητα χωρίς υπηρεσίες → μόνο ΑΜΑ, χωρίς ΚΑΔ.</li>
          <li>Ιδιώτης με 3+ ακίνητα ή με παροχή υπηρεσιών → ΑΜΑ <em>και</em> ΚΑΔ (68.20 ή 55.20 αντίστοιχα).</li>
          <li>Εταιρεία διαχείρισης καταλυμάτων → ΑΜΑ ανά ακίνητο και ΚΑΔ στη δραστηριότητα.</li>
        </ul>
      </section>

      <section id="s4" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success, #16a34a)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Checklist πριν τις 30/10/2026</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li><strong>Αν έχετε ήδη ΚΑΔ:</strong> ελέγξτε στο myAADE (Τρέχουσα Εικόνα Οντότητας) πώς πέρασε στην αυτόματη αντιστοίχιση της 9/3/2026 — και διορθώστε δωρεάν έως 30/10/2026 αν χρειάζεται.</li>
          <li><strong>Αν προσθέσατε υπηρεσίες</strong> (καθαριότητα κατά τη διαμονή, υποδοχή): εξετάστε με τον λογιστή σας τη μετάβαση από 68.20 σε 55.20 — η ουσία της δραστηριότητας υπερισχύει της ετικέτας.</li>
          <li><strong>Αν στοχεύετε σε επιδότηση</strong> (π.χ. προγράμματα τουρισμού): επαληθεύστε ότι ο κωδικός σας περιλαμβάνεται στη λίστα επιλέξιμων — <Link href="/kad-epidotisi-espa" style={{ color: "var(--primary)" }}>έλεγχος επιλεξιμότητας</Link>.</li>
        </ol>
      </section>

      <section id="s5" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "1rem" }}>❓ Συχνές ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="card" style={{ marginBottom: "1.5rem", background: "var(--warn-bg)", border: "1px solid var(--warn-border)" }}>
        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--warn-text)", margin: 0 }}>
          ⚠️ Το άρθρο δίνει το γενικό πλαίσιο και δεν αποτελεί φορολογική ή νομική συμβουλή. Η
          οριοθέτηση 55.20/68.20 και οι υποχρεώσεις έναρξης κρίνονται κατά περίπτωση — επιβεβαιώστε
          με τον λογιστή σας και τα επίσημα κείμενα της ΑΑΔΕ.
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/epaggelma/airbnb" className="btn btn-primary">🏠 Όλοι οι ΚΑΔ για Airbnb</Link>
        <Link href="/antistoixisi" className="btn btn-ghost">🔄 Αντιστοίχιση κωδικού</Link>
        <Link href="/blog/lathos-kad-prostima" className="btn btn-ghost">⚠️ Πρόστιμα λάθους ΚΑΔ</Link>
      </div>
      </article>

      <aside className="post-toc">
        <div className="card post-toc-card">
          <div className="post-toc-title">Σε αυτό το άρθρο</div>
          <a href="#s1">Η κρίσιμη διάκριση: υπηρεσίες ή απλή παραχώρηση χρήσης;</a>
          <a href="#s2">Οι κωδικοί στους ΚΑΔ 2025 — τι άλλαξε</a>
          <a href="#s3">ΑΜΑ και ΚΑΔ: δύο διαφορετικά μητρώα</a>
          <a href="#s4">Checklist πριν τις 30/10/2026</a>
          <a href="#s5">Συχνές ερωτήσεις</a>
        </div>
      </aside>
    </div>
  );
}
