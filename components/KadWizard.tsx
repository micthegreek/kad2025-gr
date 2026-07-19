"use client";
import { useState } from "react";
import Link from "next/link";

type Leaf = { classes: { c: string; t: string; why: string }[]; note?: string; klados?: string };
type Node = { q: string; options: { label: string; next?: string; leaf?: Leaf }[] };

const TREE: Record<string, Node> = {
  root: {
    q: "Τι κάνει (κυρίως) η επιχείρησή σας;",
    options: [
      { label: "🛒 Πουλάω προϊόντα", next: "sell" },
      { label: "🛠 Παρέχω υπηρεσίες", next: "services" },
      { label: "🏭 Παράγω / κατασκευάζω προϊόντα", next: "make" },
      { label: "🏨 Φιλοξενία / Εστίαση", next: "hosp" },
      { label: "🏗 Τεχνικά έργα & κατασκευές", next: "constr" },
    ],
  },
  sell: {
    q: "Σε ποιον πουλάτε κυρίως;",
    options: [
      { label: "Σε ιδιώτες (λιανική)", next: "retail" },
      { label: "Σε επιχειρήσεις (χονδρική)", leaf: { classes: [{ c: "46", t: "Χονδρικό εμπόριο", why: "Οι τάξεις 46.x εξειδικεύονται ανά προϊόν — επιλέγετε τη 4ψήφια της κατηγορίας σας." }], klados: "46" } },
      { label: "Μεσολαβώ σε πωλήσεις τρίτων (προμήθεια)", leaf: { classes: [{ c: "46.1", t: "Εμπορικοί αντιπρόσωποι", why: "Η πώληση για λογαριασμό τρίτων με προμήθεια είναι διαμεσολάβηση — όχι εμπόριο ιδίων αγαθών." }], note: "Στη NACE 2.1 η διαμεσολάβηση αποτελεί διακριτή λογική και στο λιανικό (47.9x)." } },
    ],
  },
  retail: {
    q: "Πώς γίνεται η λιανική πώληση;",
    options: [
      { label: "Φυσικό κατάστημα", leaf: { classes: [{ c: "47", t: "Λιανικό εμπόριο σε καταστήματα", why: "Επιλέγετε την τάξη της κύριας κατηγορίας προϊόντων (τρόφιμα 47.2, ένδυση 47.7x κ.ο.κ.)." }], klados: "47" } },
      { label: "E-shop / εξ αποστάσεως", leaf: { classes: [{ c: "47.9", t: "Λιανικό εκτός καταστημάτων (εξ αποστάσεως)", why: "Οι online πωλήσεις ταξινομούνται στις εξ αποστάσεως τάξεις, εξειδικευμένες ανά προϊόν στη NACE 2.1." }], note: "Δείτε και τον αναλυτικό οδηγό ΚΑΔ για e-shop στο blog." } },
      { label: "Υπαίθρια / πάγκοι / λαϊκές", leaf: { classes: [{ c: "47.8", t: "Λιανικό σε υπαίθριους πάγκους & αγορές", why: "Ο παλιός ενιαίος κωδικός διασπάστηκε σε δεκάδες νέους ανά προϊόν — επιλέξτε προσεκτικά." }] } },
    ],
  },
  services: {
    q: "Τι είδους υπηρεσίες;",
    options: [
      { label: "💼 Συμβουλευτικές / διοίκησης", leaf: { classes: [{ c: "70.20", t: "Σύμβουλοι επιχειρήσεων", why: "Στρατηγική, οργάνωση, marketing συμβουλευτική." }] } },
      { label: "💻 Πληροφορική", next: "it" },
      { label: "📚 Εκπαίδευση / μαθήματα", leaf: { classes: [{ c: "85.5", t: "Λοιπή εκπαίδευση", why: "Ιδιαίτερα, φροντιστήρια δεξιοτήτων, αθλητική/πολιτιστική εκπαίδευση (personal trainers → 85.51)." }], klados: "85" } },
      { label: "🩺 Υγεία / ευεξία", leaf: { classes: [{ c: "86.9", t: "Λοιπές δραστηριότητες υγείας", why: "Φυσικοθεραπευτές, ψυχολόγοι, διαιτολόγοι κ.ά. — οι ιατροί στη 86.2." }, { c: "96.1", t: "Ευεξία & προσωπική φροντίδα", why: "Μασάζ/σπα χωρίς θεραπευτικό χαρακτήρα ταξινομούνται εδώ, όχι στην υγεία." }], klados: "86" } },
      { label: "🎨 Δημιουργικές (design, φωτογραφία, μετάφραση)", leaf: { classes: [{ c: "74.1", t: "Σχεδιαστές (design)", why: "Γραφιστική, βιομηχανικός & εσωτερικός σχεδιασμός." }, { c: "74.2", t: "Φωτογραφικές δραστηριότητες", why: "Λήψη & επεξεργασία — η εκτύπωση φωτογραφιών ανήκει στο 18.12." }, { c: "74.3", t: "Μετάφραση & διερμηνεία", why: "" }], klados: "74" } },
      { label: "🚚 Μεταφορές / logistics", leaf: { classes: [{ c: "49.4", t: "Οδικές μεταφορές εμπορευμάτων", why: "" }, { c: "52", t: "Αποθήκευση & υποστήριξη μεταφορών", why: "Αποθήκες, διαμεταφορά, logistics υπηρεσίες." }], klados: "52" } },
    ],
  },
  it: {
    q: "Τι ακριβώς στην πληροφορική;",
    options: [
      { label: "Ανάπτυξη custom λογισμικού", leaf: { classes: [{ c: "62.10", t: "Δραστηριότητες προγραμματισμού", why: "Λογισμικό κατά παραγγελία πελάτη." }], note: "Αν εκδίδετε/πουλάτε δικό σας τυποποιημένο λογισμικό ή apps, η σωστή θέση είναι οι εκδόσεις λογισμικού (58.2)." } },
      { label: "Συμβουλές / υποστήριξη συστημάτων", leaf: { classes: [{ c: "62.20", t: "Σύμβουλοι πληροφορικής", why: "Συμβουλές για υποδομές, συστήματα, ασφάλεια." }, { c: "62.90", t: "Λοιπές υπηρεσίες πληροφορικής", why: "Τεχνική υποστήριξη, ανάκτηση δεδομένων κ.ά." }], klados: "62" } },
      { label: "Έκδοση δικού μου λογισμικού / εφαρμογών / games", leaf: { classes: [{ c: "58.2", t: "Εκδόσεις λογισμικού", why: "Τυποποιημένο λογισμικό, apps και παιχνίδια που διαθέτετε μαζικά." }], klados: "58" } },
    ],
  },
  make: {
    q: "Τι παράγετε;",
    options: [
      { label: "🍞 Τρόφιμα / ποτά", leaf: { classes: [{ c: "10", t: "Βιομηχανία τροφίμων", why: "Επιλέγετε την τάξη του προϊόντος (αρτοποιία 10.7, γαλακτοκομικά 10.5 κ.ο.κ.)." }, { c: "11", t: "Ποτοποιία", why: "" }], klados: "10" } },
      { label: "🔩 Μεταλλικά προϊόντα / μηχανήματα", leaf: { classes: [{ c: "25", t: "Μεταλλικά προϊόντα", why: "Κατασκευές από μέταλλο, κλειδαριές, εργαλεία." }, { c: "28", t: "Μηχανήματα & εξοπλισμός", why: "" }], klados: "25", note: "Και οι δύο κλάδοι έχουν εκτεταμένη επιλεξιμότητα στις ενεργές δράσεις Δίκαιης Μετάβασης." } },
      { label: "🧴 Πλαστικά / χημικά / υλικά", leaf: { classes: [{ c: "22", t: "Πλαστικά & ελαστικά", why: "" }, { c: "20", t: "Χημικά προϊόντα", why: "" }, { c: "23", t: "Μη μεταλλικά ορυκτά", why: "Γυαλί, τσιμέντο, κεραμικά, δομικά." }], klados: "22" } },
      { label: "👗 Ένδυση / ύφασμα / δέρμα", leaf: { classes: [{ c: "14", t: "Ένδυση", why: "" }, { c: "13", t: "Κλωστοϋφαντουργία", why: "" }, { c: "15", t: "Δέρμα & υποδήματα", why: "" }], klados: "14" } },
      { label: "🪑 Ξύλο / έπιπλα / εκτυπώσεις", leaf: { classes: [{ c: "31", t: "Έπιπλα", why: "" }, { c: "16", t: "Προϊόντα ξύλου", why: "" }, { c: "18", t: "Εκτυπώσεις", why: "Εδώ και η εκτύπωση φωτογραφιών/υλικού τρίτων." }], klados: "31" } },
    ],
  },
  hosp: {
    q: "Τι ακριβώς;",
    options: [
      { label: "🏨 Ξενοδοχείο / κατάλυμα", leaf: { classes: [{ c: "55.10", t: "Ξενοδοχεία & παρόμοια", why: "Με καθημερινές υπηρεσίες (καθαριότητα κ.λπ.)." }, { c: "55.20", t: "Τουριστικά καταλύματα βραχείας διαμονής", why: "Βίλες, διαμερίσματα τύπου Airbnb με εναλλαγή επισκεπτών." }], klados: "55", note: "Για τη διάκριση από την απλή εκμίσθωση (68.20), δείτε τον οδηγό Airbnb στο blog." } },
      { label: "🍽 Εστιατόριο / καφέ / μπαρ", leaf: { classes: [{ c: "56.1", t: "Εστιατόρια & κινητές μονάδες", why: "" }, { c: "56.3", t: "Μπαρ & καφέ (ποτά)", why: "" }], klados: "56" } },
      { label: "🏠 Εκμίσθωση ακινήτων (μακροχρόνια)", leaf: { classes: [{ c: "68.20", t: "Εκμίσθωση ιδιόκτητων ακινήτων", why: "Η «στεγαστική» μίσθωση — όχι η τουριστική φιλοξενία." }], klados: "68" } },
    ],
  },
  constr: {
    q: "Τι είδους έργα;",
    options: [
      { label: "🏠 Κτίρια (ανέγερση/ανακαίνιση)", leaf: { classes: [{ c: "41", t: "Ανέγερση κτιρίων", why: "" }, { c: "43", t: "Εξειδικευμένες εργασίες (ηλεκτρολογικά, υδραυλικά, φινιρίσματα)", why: "" }], klados: "43" } },
      { label: "⚡ Ενεργειακά / δίκτυα / υποδομές", leaf: { classes: [{ c: "42.22", t: "Έργα κοινής ωφέλειας ηλεκτρισμού", why: "Εδώ ανήκει και η κατασκευή φωτοβολταϊκών & αιολικών πάρκων — όχι στο 43.21." }], klados: "42" } },
      { label: "🏗 Μελέτες μηχανικού / αρχιτεκτονικά", leaf: { classes: [{ c: "71.12", t: "Υπηρεσίες μηχανικών", why: "" }, { c: "71.11", t: "Αρχιτέκτονες", why: "" }], klados: "71" } },
    ],
  },
};

export default function KadWizard() {
  const [path, setPath] = useState<string[]>(["root"]);
  const [leaf, setLeaf] = useState<Leaf | null>(null);
  const node = TREE[path[path.length - 1]];

  const reset = () => { setPath(["root"]); setLeaf(null); };
  const back = () => { if (leaf) setLeaf(null); else if (path.length > 1) setPath(path.slice(0, -1)); };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {!leaf ? (
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Βήμα {path.length} · {path.length === 1 ? "Ξεκινήστε" : "Συνεχίστε"}
          </div>
          <h2 style={{ fontSize: "1.15rem", margin: "0 0 0.9rem" }}>{node.q}</h2>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            {node.options.map((o, i) => (
              <button
                key={i}
                onClick={() => {
                  if (typeof window !== "undefined") (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "wizard_step", { step: path.length, choice: o.label.slice(0, 20) });
                  if (o.leaf) setLeaf(o.leaf);
                  else if (o.next) setPath([...path, o.next]);
                }}
                style={{ textAlign: "left", padding: "0.8rem 1rem", border: "1.5px solid var(--border)", borderRadius: 10, background: "var(--bg)", cursor: "pointer", fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="card" style={{ padding: "1.25rem" }}>
          <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.75rem" }}>🎯 Προτεινόμενες τάξεις για εσάς</h2>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            {leaf.classes.map((c) => (
              <div key={c.c} style={{ padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: 10, borderLeft: "4px solid var(--success)" }}>
                <Link href={`/kad-2025?q=${c.c.replace(".", "")}`} style={{ fontWeight: 800 }}>
                  {c.c} — {c.t} →
                </Link>
                {c.why && <p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "var(--text-muted)" }}>{c.why}</p>}
              </div>
            ))}
          </div>
          {leaf.note && (
            <p style={{ margin: "0.8rem 0 0", padding: "0.6rem 0.85rem", background: "var(--bg)", border: "1px dashed var(--border)", borderRadius: 8, fontSize: "0.85rem" }}>
              💡 {leaf.note}
            </p>
          )}
          <p style={{ margin: "0.9rem 0 0", fontSize: "0.85rem" }}>
            Επόμενο βήμα: ανοίξτε την τάξη, δείτε τους 8ψήφιους κωδικούς της και διαβάστε το «Τι περιλαμβάνει»
            (επίσημες επεξηγήσεις ΕΛΣΤΑΤ) πριν τη δήλωση.
            {leaf.klados && (
              <> Δείτε και τη <Link href={`/klados/${leaf.klados}`}>σελίδα του κλάδου</Link>.</>
            )}
          </p>
        </div>
      )}
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
        {(path.length > 1 || leaf) && (
          <button onClick={back} className="btn" style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem", cursor: "pointer", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg)" }}>← Πίσω</button>
        )}
        {(path.length > 1 || leaf) && (
          <button onClick={reset} className="btn" style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem", cursor: "pointer", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg)" }}>↺ Από την αρχή</button>
        )}
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        Ο οδηγός προτείνει <strong>τάξεις NACE 2.1</strong> για προσανατολισμό — η τελική επιλογή 8ψήφιου ΚΑΔ
        γίνεται με βάση τις επίσημες επεξηγήσεις και, όπου χρειάζεται, τη συμβουλή λογιστή.
      </p>
    </div>
  );
}
