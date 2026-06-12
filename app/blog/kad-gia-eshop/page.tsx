import type { Metadata } from "next";
import Link from "next/link";
import professionsRaw from "@/public/data/professions.json";

interface ProfCode { c: string; d08: string; n: string; d25: string; ch: boolean; idx: boolean }
interface Profession { slug: string; name: string; emoji: string; intro: string; codes: ProfCode[] }
const ESHOP = (professionsRaw as Profession[]).find((p) => p.slug === "eshop")!;

export const metadata: Metadata = {
  title: "ΚΑΔ για E-shop 2026: Οδηγός μετά την Κατάργηση του 47.91",
  description:
    "Ποιον ΚΑΔ χρειάζεται ένα e-shop το 2026: γιατί ο ενιαίος 47.91 καταργήθηκε στη NACE Rev.2.1, πώς ταξινομείται πλέον το ηλεκτρονικό εμπόριο ανά προϊόν, και τι ισχύει για marketplaces.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-gia-eshop" },
};

const faqItems = [
  {
    q: "Ποιος είναι ο ΚΑΔ για e-shop το 2026;",
    a: "Δεν υπάρχει πλέον ένας ενιαίος «ΚΑΔ e-shop». Στη NACE Rev.2.1 το ηλεκτρονικό εμπόριο ταξινομείται με βάση το προϊόν που πωλείται — ένα e-shop ρούχων, ένα ηλεκτρονικών και ένα ειδών σπιτιού παίρνουν διαφορετικούς κωδικούς λιανικού εμπορίου. Δείτε στη σελίδα ΚΑΔ για E-shop τους βασικούς κωδικούς ανά κατηγορία.",
  },
  {
    q: "Είχα τον 47.91 — τι ΚΑΔ έχω τώρα;",
    a: "Η ΑΑΔΕ σας αντιστοίχισε αυτόματα στις 9 Μαρτίου 2026 σε κωδικό της νέας δομής, ανάλογα με τον 8ψήφιο 47.91.x που είχατε. Ελέγξτε στο myAADE (Τρέχουσα Εικόνα Οντότητας) ποιος αποδόθηκε — και αν περιγράφει σωστά τα προϊόντα σας, καθώς οι παλιοί 47.91.x είχαν συχνά πολλαπλές αντιστοιχίσεις.",
  },
  {
    q: "Πουλάω μέσω marketplace (π.χ. πλατφόρμας) — αλλάζει κάτι;",
    a: "Η NACE Rev.2.1 εισήγαγε διακριτό στρώμα «υπηρεσιών διαμεσολάβησης» για πλατφόρμες που φέρνουν σε επαφή πωλητές και αγοραστές χωρίς να αποκτούν την κυριότητα των προϊόντων. Αν απλώς πουλάτε τα δικά σας προϊόντα μέσω πλατφόρμας, παραμένετε στο λιανικό εμπόριο του προϊόντος σας· αν λειτουργείτε εσείς την πλατφόρμα, σας αφορούν οι κωδικοί διαμεσολάβησης. Η οριοθέτηση θέλει προσοχή — συζητήστε τη με τον λογιστή σας.",
  },
  {
    q: "Χρειάζομαι ξεχωριστό ΚΑΔ για κάθε κατηγορία προϊόντος;",
    a: "Χρειάζεστε κωδικό για κάθε ουσιωδώς διαφορετική κατηγορία που πωλείτε συστηματικά — συνήθως έναν κύριο για τη βασική κατηγορία και δευτερεύοντες για τις υπόλοιπες. Η ακριβής σύνθεση εξαρτάται από το μείγμα προϊόντων σας.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ΚΑΔ για E-shop 2026: Οδηγός μετά την Κατάργηση του 47.91",
      datePublished: "2026-06-10",
      dateModified: "2026-06-10",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
      mainEntityOfPage: "https://www.kad2025.gr/blog/kad-gia-eshop",
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

export default function KadGiaEshopPage() {
  return (
    <div className="post-layout">
      <article className="post-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ για E-shop</span>
      </nav>
      <div className="meta-row">
        <span>📅 10 Ιουνίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 8 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ για E-shop το 2026: Τι Ισχύει μετά την Κατάργηση του 47.91
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Για 18 χρόνια, «ΚΑΔ e-shop» σήμαινε την οικογένεια 47.91 — λιανικό εμπόριο «με αλληλογραφία
        ή μέσω διαδικτύου». Η NACE Rev.2.1 άλλαξε ριζικά τη λογική: <strong>το πώς πουλάς έπαψε να
        είναι κριτήριο ταξινόμησης</strong>. Από την 1η Μαρτίου 2026, το ηλεκτρονικό εμπόριο
        κατατάσσεται με βάση το <em>τι</em> πουλάς — και κάθε e-shop χρειάζεται να ξέρει πού
        «προσγειώθηκε» ο παλιός του κωδικός.
      </p>

      <section id="s1" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Γιατί καταργήθηκε ο ενιαίος κωδικός e-shop</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Όταν σχεδιάστηκε το σύστημα του 2008, οι online πωλήσεις ήταν εξαίρεση που χωρούσε σε
          μία κατηγορία. Το 2026 είναι ο κανόνας: σχεδόν κάθε λιανική επιχείρηση πουλά και
          ψηφιακά. Ένα ταξινομικό σύστημα που χώριζε το εμπόριο σε «φυσικό» και «εξ αποστάσεως»
          είχε πάψει να περιγράφει την πραγματικότητα — γι' αυτό η Eurostat, στη NACE Rev.2.1,
          ενοποίησε το λιανικό εμπόριο γύρω από το προϊόν.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Στην ελληνική εφαρμογή (αποφάσεις ΑΑΔΕ Α.1003/2026 και Α.1004/2026), αυτό σημαίνει ότι
          οι παλιοί 8ψήφιοι κωδικοί 47.91.x αντιστοιχίστηκαν σε νέους κωδικούς ανά κατηγορία
          προϊόντος — με αρκετούς από αυτούς να έχουν <strong>πολλαπλές προβλεπόμενες
          αντιστοιχίσεις</strong>, αφού ένας «γενικός» κωδικός διαδικτυακών πωλήσεων μπορούσε να
          κρύβει πολύ διαφορετικά αντικείμενα. Είναι το ίδιο μοτίβο με τον μεγαλύτερο διαχωρισμό
          ολόκληρου του πίνακα: ο 47891000 (υπαίθριοι πάγκοι) αναλύθηκε σε 52 νέους κωδικούς —
          δείτε τη σύγκριση στο άρθρο{" "}
          <Link href="/blog/kad-2008-vs-2025" style={{ color: "var(--primary)" }}>ΚΑΔ 2008 vs 2025</Link>.
        </p>
      </section>

      <section id="s2" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.85rem" }}>Οι βασικοί παλιοί κωδικοί e-shop και πού οδηγούν</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.85rem", fontSize: "0.9rem" }}>
          Ο πίνακας δείχνει τους πιο διαδεδομένους κωδικούς 47.91.x του 2008 και την κύρια
          αντιστοίχισή τους στους ΚΑΔ 2025, όπως προκύπτει από τον επίσημο πίνακα:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {ESHOP.codes.map((c) => (
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
          Πατήστε σε κάθε κωδικό για όλες τις εναλλακτικές αντιστοιχίσεις του. Πλήρης λίστα και
          για άλλες κατηγορίες προϊόντων στη σελίδα{" "}
          <Link href="/epaggelma/eshop" style={{ color: "var(--primary)" }}>ΚΑΔ για E-shop</Link>.
        </p>
      </section>

      <section id="s3" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Το νέο στρώμα «διαμεσολάβησης»: marketplaces & πλατφόρμες</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η σημαντικότερη καινοτομία της NACE Rev.2.1 στο εμπόριο είναι η διάκριση ανάμεσα στην
          <strong> πώληση</strong> και τη <strong>διαμεσολάβηση στην πώληση</strong>. Οι νέοι
          κωδικοί «υπηρεσιών διαμεσολάβησης για λιανική πώληση» αφορούν πλατφόρμες και
          marketplaces που φέρνουν σε επαφή αγοραστές και πωλητές χωρίς να αποκτούν την κυριότητα
          των προϊόντων — γι' αυτό και η μεγαλύτερη συγχώνευση ολόκληρου του πίνακα (96 παλιοί
          κωδικοί σε έναν) καταλήγει σε κωδικό διαμεσολάβησης.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem" }}>
          Πρακτικός μπούσουλας: <strong>πουλάτε δικό σας απόθεμα</strong> (έστω και αποκλειστικά
          μέσω πλατφορμών τρίτων) → λιανικό εμπόριο του προϊόντος σας.{" "}
          <strong>Λειτουργείτε την πλατφόρμα</strong> όπου πουλούν άλλοι → υπηρεσίες
          διαμεσολάβησης. Ενδιάμεσα σχήματα (π.χ. dropshipping με διαφορετικές συμβατικές
          διαμορφώσεις) θέλουν κατά περίπτωση ανάλυση με τον λογιστή σας.
        </p>
      </section>

      <section id="s4" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success, #16a34a)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Checklist για κάθε e-shop (πριν τις 30/10/2026)</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2, fontSize: "0.9rem" }}>
          <li><strong>Δείτε τι σας αποδόθηκε:</strong> myAADE → Μητρώο & Επικοινωνία → Τρέχουσα Εικόνα Οντότητας — εκεί φαίνεται ο νέος ΚΑΔ της αυτόματης αντιστοίχισης (9/3/2026).</li>
          <li><strong>Συγκρίνετε με το πραγματικό σας μείγμα προϊόντων:</strong> αν πουλάτε κυρίως άλλη κατηγορία από αυτή του κωδικού, δείτε τις εναλλακτικές στη σελίδα του παλιού σας ΚΑΔ.</li>
          <li><strong>Ελέγξτε τους δευτερεύοντες:</strong> κάθε ουσιώδης κατηγορία προϊόντος χρειάζεται τον δικό της κωδικό — ειδικά αν στοχεύετε σε επιδότηση, όπου η λίστα επιλέξιμων ΚΑΔ είναι κλειστή (<Link href="/kad-epidotisi-espa" style={{ color: "var(--primary)" }}>έλεγχος επιλεξιμότητας</Link>).</li>
          <li><strong>Διορθώστε δωρεάν έως 30/10/2026</strong> μέσω «Μεταβολή Εργασιών» — μετά ισχύει το κανονικό καθεστώς (<Link href="/blog/lathos-kad-prostima" style={{ color: "var(--primary)" }}>τι κοστίζει ένας λάθος ΚΑΔ</Link>).</li>
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

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/epaggelma/eshop" className="btn btn-primary">🛍️ Όλοι οι ΚΑΔ για E-shop</Link>
        <Link href="/antistoixisi" className="btn btn-ghost">🔄 Αντιστοίχιση του κωδικού σας</Link>
        <Link href="/kad-2025-excel" className="btn btn-ghost">📥 Δωρεάν Excel ΚΑΔ 2025</Link>
      </div>
      </article>

      <aside className="post-toc">
        <div className="card post-toc-card">
          <div className="post-toc-title">Σε αυτό το άρθρο</div>
          <a href="#s1">Γιατί καταργήθηκε ο ενιαίος κωδικός e-shop</a>
          <a href="#s2">Οι βασικοί παλιοί κωδικοί e-shop και πού οδηγούν</a>
          <a href="#s3">Το νέο στρώμα «διαμεσολάβησης»: marketplaces & πλατφόρμες</a>
          <a href="#s4">Checklist για κάθε e-shop (πριν τις 30/10/2026)</a>
          <a href="#s5">Συχνές ερωτήσεις</a>
        </div>
      </aside>
    </div>
  );
}
