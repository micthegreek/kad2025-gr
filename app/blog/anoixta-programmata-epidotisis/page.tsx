import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ανοιχτά Προγράμματα Επιδότησης 2026: Ελέγξτε αν ο ΚΑΔ σας Είναι Επιλέξιμος",
  description:
    "Ποια προγράμματα επιδότησης ΕΣΠΑ και Αναπτυξιακός Νόμος είναι ανοιχτά το 2026, πόσες επιχειρήσεις καλύπτουν και πώς να ελέγξετε αν ο ΚΑΔ 2025 σας είναι επιλέξιμος.",
  alternates: { canonical: "https://www.kad2025.gr/blog/anoixta-programmata-epidotisis" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ανοιχτά Προγράμματα Επιδότησης 2026 — Επιλεξιμότητα ΚΑΔ",
  datePublished: "2026-05-01",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function AnoixtaProgrammataPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Ανοιχτά Προγράμματα 2026</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 1 Μαΐου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 9 λεπτά</span>
        <span>·</span><span>🎯 Για επιχειρήσεις & συμβούλους</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Ανοιχτά Προγράμματα Επιδότησης 2026: Ελέγξτε αν ο ΚΑΔ σας Είναι Επιλέξιμος
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Το 2026 έχει ήδη αρκετά ενεργά προγράμματα επιδότησης για ελληνικές επιχειρήσεις. Σε όλα αυτά,
        ο ΚΑΔ 2025 είναι κρίσιμη προϋπόθεση επιλεξιμότητας. Δείτε τι είναι διαθέσιμο και πώς να
        ελέγξετε αν η επιχείρησή σας πληροί τις προϋποθέσεις.
      </p>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "2rem" }}>
        <strong style={{ color: "#92400e" }}>⚠️ Ενημερωτική σημείωση:</strong>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, margin: "0.5rem 0 0" }}>
          Τα στοιχεία που ακολουθούν είναι ενημερωτικά και βασίζονται σε δημόσια διαθέσιμες πληροφορίες
          κατά τη στιγμή της σύνταξης. Για επίσημες και ενημερωμένες πληροφορίες, ανατρέξτε πάντα
          στις επίσημες πηγές κάθε προγράμματος (espa.gr, ependyseis.mindev.gov.gr).
        </p>
      </div>

      {[
        {
          id: "e",
          title: "ΕΣΠΑ «Παράγουμε στην Ελλάδα» (1η Τροποποίηση)",
          color: "#1d4ed8",
          emoji: "🏭",
          kads: "1.288",
          budget: "Έως 400.000€ ενίσχυση",
          target: "Μεταποιητικές επιχειρήσεις",
          desc: "Πρόγραμμα του ΕΣΠΑ 2021–2027 που ενισχύει επιχειρήσεις μεταποίησης για την ανάπτυξη παραγωγικής δραστηριότητας στην Ελλάδα. Απευθύνεται κυρίως σε μικρές και πολύ μικρές επιχειρήσεις μεταποιητικού χαρακτήρα. Επιλέξιμες δαπάνες περιλαμβάνουν εξοπλισμό, κτιριακές εργασίες, λογισμικό και εργαζόμενους.",
          eligibility: "Εν λειτουργία επιχείρηση με κύριο ΚΑΔ στον μεταποιητικό κλάδο — κλάδοι 10-33 του NACE. Απαιτείται συγκεκριμένο μέγεθος (μικρή/πολύ μικρή επιχείρηση) και ελάχιστος προϋπολογισμός επένδυσης.",
          source: "https://www.espa.gr",
          sourceLabel: "espa.gr",
        },
        {
          id: "m",
          title: "Αναπτυξιακός Νόμος — Μεταποίηση Δ' Κύκλος",
          color: "#7c3aed",
          emoji: "🔧",
          kads: "2.673",
          budget: "Από 30% έως 70% ενίσχυση",
          target: "Επιχειρήσεις μεταποίησης",
          desc: "Το καθεστώς Μεταποίησης του Αναπτυξιακού Νόμου (Ν. 4887/2022) ενισχύει επενδυτικά σχέδια στον τομέα της μεταποίησης. Το ποσοστό ενίσχυσης εξαρτάται από το μέγεθος της επιχείρησης και τον γεωγραφικό τόπο εγκατάστασης, βάσει Χάρτη Περιφερειακών Ενισχύσεων. Ελάχιστος προϋπολογισμός: 300.000€ για πολύ μικρές επιχειρήσεις.",
          eligibility: "Υφιστάμενες ή νεοσύστατες επιχειρήσεις με ΚΑΔ σε επιλέξιμο μεταποιητικό κλάδο. Ελάχιστα κριτήρια: ελάχιστος προϋπολογισμός, ιδία συμμετοχή τουλάχιστον 25%, εφαρμογή ΤΕΙ (Τεχνική Έκθεση Ιδιαίτερης Εκτελεστικότητας).",
          source: "https://ependyseis.mindev.gov.gr",
          sourceLabel: "ependyseis.mindev.gov.gr",
        },
        {
          id: "p",
          title: "Αναπτυξιακός Νόμος — Περιοχές Ειδικής Ενίσχυσης Β' Κύκλος",
          color: "#059669",
          emoji: "📍",
          kads: "2.721",
          budget: "Από 35% έως 75% ενίσχυση",
          target: "Επιχειρήσεις σε μειονεκτικές περιοχές",
          desc: "Ειδικό καθεστώς για επενδύσεις σε περιοχές με γεωγραφικά, δημογραφικά ή αναπτυξιακά μειονεκτήματα: ορεινές περιοχές, νησιά, παραμεθόριες ζώνες, περιοχές με υψηλή ανεργία. Το καθεστώς αυτό παρέχει υψηλότερα ποσοστά ενίσχυσης σε σχέση με το γενικό καθεστώς.",
          eligibility: "Η επένδυση πρέπει να πραγματοποιείται σε επιλέξιμη γεωγραφική περιοχή. Απαιτείται ο ΚΑΔ να είναι συμπεριλαμβανόμενος στον πίνακα επιλέξιμων δραστηριοτήτων και ελάχιστος προϋπολογισμός από 150.000€.",
          source: "https://ependyseis.mindev.gov.gr",
          sourceLabel: "ependyseis.mindev.gov.gr",
        },
        {
          id: "g",
          title: "Αναπτυξιακός Νόμος — Μεγάλες Επενδύσεις Β' Κύκλος",
          color: "#d97706",
          emoji: "🏗️",
          kads: "2.718",
          budget: "Από 10% έως 55% ενίσχυση",
          target: "Επενδυτικά σχέδια άνω των 3 εκατ. €",
          desc: "Απευθύνεται σε επενδυτικά σχέδια μεγάλης κλίμακας (ελάχιστος προϋπολογισμός 3 εκατ. €) σε ευρύ φάσμα παραγωγικών δραστηριοτήτων. Το καθεστώς καλύπτει μεταποίηση, τουρισμό, αγροδιατροφή, τεχνολογίες, logistics και περιβαλλοντικά έργα.",
          eligibility: "Ελάχιστος προϋπολογισμός 3 εκατ. € (ή 1 εκατ. για ειδικές κατηγορίες). Η επιχείρηση πρέπει να έχει επιλέξιμο ΚΑΔ και να πληροί τα κριτήρια βιωσιμότητας του νόμου. Απαιτείται τεκμηριωμένο επιχειρηματικό σχέδιο.",
          source: "https://ependyseis.mindev.gov.gr",
          sourceLabel: "ependyseis.mindev.gov.gr",
        },
        {
          id: "x",
          title: "ΕΣΠΑ «Ξεκινώ Επιχειρηματικά»",
          color: "#0891b2",
          emoji: "🚀",
          kads: "4.926",
          budget: "Έως 50.000€ ενίσχυση",
          target: "Νέες επιχειρήσεις & άνεργοι",
          desc: "Πρόγραμμα του ΕΣΠΑ 2021–2027 για τη στήριξη νέων επιχειρήσεων που δημιουργούνται από άτομα που βρίσκονταν σε αδράνεια ή ανεργία. Στόχος είναι η ενθάρρυνση νέων αυτοαπασχολούμενων και πολύ μικρών επιχειρήσεων σε βιώσιμους τομείς δραστηριότητας. Καλύπτει δαπάνες εξοπλισμού, λογισμικού, μισθώματα και λειτουργικά έξοδα.",
          eligibility: "Νέα επιχείρηση που δεν έχει υπερβεί ορισμένο αριθμό μηνών λειτουργίας. Ο ιδρυτής να πληροί κριτήρια εισοδήματος ή ανεργίας. Ο ΚΑΔ πρέπει να συμπεριλαμβάνεται στον επίσημο πίνακα επιλέξιμων ΚΑΔ του προγράμματος (4.926 ΚΑΔ).",
          source: "https://www.espa.gr",
          sourceLabel: "espa.gr",
        },
      ].map((prog) => (
        <section key={prog.id} className="card" style={{ marginBottom: "1.5rem", borderLeft: `4px solid ${prog.color}` }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{prog.emoji}</span>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.25rem", color: prog.color }}>{prog.title}</h2>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.75rem", padding: "0.1rem 0.5rem", borderRadius: 10, background: prog.color + "20", color: prog.color, border: `1px solid ${prog.color}40`, fontWeight: 600 }}>{prog.kads} ΚΑΔ</span>
                <span style={{ fontSize: "0.75rem", padding: "0.1rem 0.5rem", borderRadius: 10, background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{prog.budget}</span>
                <span style={{ fontSize: "0.75rem", padding: "0.1rem 0.5rem", borderRadius: 10, background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{prog.target}</span>
              </div>
            </div>
          </div>
          <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>{prog.desc}</p>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.65rem 0.9rem", marginBottom: "0.5rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Κύρια κριτήρια επιλεξιμότητας:</div>
            <div style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{prog.eligibility}</div>
          </div>
          <a href={prog.source} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: prog.color }}>
            📋 Επίσημη πηγή: {prog.sourceLabel} →
          </a>
        </section>
      ))}

      <section className="card" style={{ marginBottom: "1.5rem", background: "#eff6ff", border: "1px solid #bfdbfe" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#1e40af" }}>
          🔍 Ελέγξτε αμέσως αν ο ΚΑΔ σας είναι επιλέξιμος
        </h2>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "#1e3a5f", marginBottom: "1rem" }}>
          Χρησιμοποιήστε το εργαλείο ελέγχου επιλεξιμότητας αυτού του site για να δείτε άμεσα
          σε ποια από τα πέντε προγράμματα είναι επιλέξιμος ο ΚΑΔ 2025 σας. Εισάγετε τον κωδικό
          και το σύστημα ελέγχει αυτόματα και τα πέντε προγράμματα ταυτόχρονα.
        </p>
        <Link href="/kad-epidotisi-espa" className="btn btn-primary">
          💰 Έλεγχος Επιλεξιμότητας ΚΑΔ →
        </Link>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι πρέπει να κάνω αν ο ΚΑΔ μου δεν είναι επιλέξιμος;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Αν ο τρέχων ΚΑΔ σας δεν περιλαμβάνεται στα επιλέξιμα, εξετάστε τα παρακάτω:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Ελέγξτε αν υπάρχει παρεμφερής ΚΑΔ που να καλύπτει τη δραστηριότητά σας και να είναι επιλέξιμος",
            "Βεβαιωθείτε ότι ο ΚΑΔ σας στο myAADE είναι ο σωστός — ενδέχεται η αυτόματη αντιστοίχιση να έχει δώσει λανθασμένο κωδικό",
            "Αν ο ΚΑΔ είναι λανθασμένος, διορθώστε τον μέσω myAADE έως 1/6/2026 χωρίς πρόστιμο",
            "Ελέγξτε αν ο επιλέξιμος ΚΑΔ για το πρόγραμμα μπορεί να δηλωθεί ως δευτερεύων ΚΑΔ — σε ορισμένα προγράμματα αυτό αρκεί",
            "Συμβουλευτείτε εξουσιοδοτημένο σύμβουλο που γνωρίζει το συγκεκριμένο πρόγραμμα",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6 }}>
              <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/kad-epidotisi-espa" className="btn btn-primary">💰 Έλεγχος Επιλεξιμότητας</Link>
        <Link href="/antistoixisi" className="btn btn-ghost">🔄 Αντιστοίχιση ΚΑΔ</Link>
      </div>
    </div>
  );
}
