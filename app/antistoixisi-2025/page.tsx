import type { Metadata } from "next";
import Link from "next/link";
import { getKadData, getSafeKadUrlForCode, getSsgCodes } from "@/lib/kadData";
import KadSearch from "@/components/KadSearch";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  title: "Αντιστοίχιση ΚΑΔ 2025 → 2008 | Παλιός ΚΑΔ",
  description:
    "Αντιστοίχιση ΚΑΔ 2025 → ΚΑΔ 2008. Νέοι ΚΑΔ 2025 (ΚΑΔ 2026 ΑΑΔΕ) σε παλιούς ΚΑΔ 2008. 9.422 κωδικοί. ΑΑΔΕ Α.1003/2026 & Α.1004/2026.",
  keywords: ["αντιστοίχιση καδ", "καδ 2025", "καδ 2026", "νέοι καδ 2025", "καδ 2026 ααδε"],
  alternates: { canonical: "https://www.kad2025.gr/antistoixisi-2025" },
};

export default function Antistoixisi2025Page() {
  const data = getKadData();
  const ssg = getSsgCodes();

  // Server-rendered: many-to-one examples (most interesting for SEO)
  const map2025: Record<string, typeof data> = {};
  data.forEach((r) => {
    if (!map2025[r.kad2025]) map2025[r.kad2025] = [];
    map2025[r.kad2025].push(r);
  });

  // v60b: Find KADs where multiple old codes merged into one,
  // BUT only if at least one of the old codes (or the new one) is in SSG
  // so the link will lead to a real page (not 404)
  const mergedSamples = Object.entries(map2025)
    .filter(([kad2025, v]) => {
      if (v.length <= 2) return false;
      // Need a safe link target: kad2025 OR at least first kad2008 must be SSG
      return ssg.has(kad2025) || v.some((r) => ssg.has(r.kad2008));
    })
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 12)
    .map(([kad2025, records]) => ({ kad2025, desc2025: records[0].desc2025, oldCount: records.length, sample: records.slice(0, 3) }));

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="antistoixisi_2025" />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Αντιστοίχιση ΚΑΔ 2025 → 2008</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Αντιστοίχιση ΚΑΔ 2025 → 2008</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Πληκτρολογήστε νέο ΚΑΔ 2025 (αριθμό ή λέξη) και δείτε ποιοι παλιοί ΚΑΔ 2008 αντιστοιχούν σε αυτόν.
        Χρήσιμο για να κατανοήσετε ποιες παλιές δραστηριότητες συγχωνεύτηκαν σε έναν νέο κωδικό.
        Δείτε και την <Link href="/antistoixisi" style={{ color: "var(--primary)" }}>αντιστοίχιση ΚΑΔ 2008 → 2025</Link>.
      </p>

      <div style={{ marginBottom: "3rem" }}>
        <KadSearch mode="antistoixisi-2025" initialData={data} />
      </div>

      {/* Server-rendered: many-to-one merges */}
      <section>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>
          ΚΑΔ 2025 που Προέκυψαν από Συγχώνευση Πολλών Παλιών ΚΑΔ
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
          Πολλοί νέοι ΚΑΔ 2025 προέκυψαν από τη συγχώνευση πολλών παλιών ΚΑΔ 2008.
          Παρακάτω βλέπετε τους ΚΑΔ με τις περισσότερες συγχωνεύσεις.
          Για πλήρη στατιστικά δείτε τη <Link href="/statistika" style={{ color: "var(--primary)" }}>σελίδα στατιστικών</Link>.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {mergedSamples.map((m) => {
            // v60b: Prefer kad2025 link if SSG, else first kad2008 in sample, else search
            const safeKad2025Url = getSafeKadUrlForCode(m.kad2025);
            const safeKad2008Url = m.sample.find(s => getSafeKadUrlForCode(s.kad2008))?.kad2008;
            const href = safeKad2025Url || (safeKad2008Url ? `/kad/${safeKad2008Url}` : `/kad-2025?q=${m.kad2025}`);
            return (
              <Link key={m.kad2025} href={href} style={{ textDecoration: "none" }}>
                <div className="card" style={{ borderLeft: "4px solid var(--primary)", padding: "0.875rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                    <span className="kad-badge kad-badge-2025">{m.kad2025}</span>
                    <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{m.desc2025.slice(0, 60)}{m.desc2025.length > 60 ? "..." : ""}</span>
                    <span style={{ marginLeft: "auto", background: "var(--accent)", color: "#1a1a1a", fontSize: "0.75rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: 10 }}>
                      ← {m.oldCount} παλιοί ΚΑΔ
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {m.sample.map((s) => (
                      <span key={s.kad2008} className="kad-badge kad-badge-2008" style={{ fontSize: "0.75rem" }}>{s.kad2008}</span>
                    ))}
                    {m.oldCount > 3 && <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>+{m.oldCount - 3} ακόμα</span>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Editorial content */}
      <section className="card" style={{ marginBottom: "1.5rem", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι η Αντιστοίχιση ΚΑΔ 2025 → 2008</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η αντίστροφη αντιστοίχιση (ΚΑΔ 2025 → ΚΑΔ 2008) είναι χρήσιμη όταν γνωρίζετε τον
          νέο κωδικό και θέλετε να βρείτε ποιος παλιός ΚΑΔ 2008 αντιστοιχούσε σε αυτόν. Αυτό
          χρειάζεται συχνά για <strong>έλεγχο ιστορικών δεδομένων</strong>, σύγκριση με παλαιότερες
          φορολογικές δηλώσεις, ή κατανόηση της αλλαγής στην ταξινόμηση.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Σε πολλές περιπτώσεις, πολλοί παλιοί ΚΑΔ 2008 συγχωνεύτηκαν σε έναν νέο ΚΑΔ 2025.
          Το εργαλείο εμφανίζει <strong>όλους τους παλιούς κωδικούς</strong> που αντιστοιχούν
          στον νέο κωδικό, ώστε να έχετε πλήρη εικόνα της αλλαγής.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πότε χρειάζεται η αντίστροφη αναζήτηση</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
          {[
            { icon: "📋", title: "Λογιστικός έλεγχος", desc: "Σύγκριση ΚΑΔ σε παλαιότερα έγγραφα με τον νέο κωδικό που σας αποδόθηκε." },
            { icon: "📊", title: "ΕΣΠΑ & επιδοτήσεις", desc: "Επαλήθευση ότι ο νέος ΚΑΔ αντιστοιχεί στον κλάδο που ορίζεται ως επιλέξιμος." },
            { icon: "🔍", title: "Ιστορικά δεδομένα", desc: "Εύρεση του παλαιού κωδικού για σύγκριση στατιστικών ή κλαδικών δεδομένων." },
            { icon: "⚖️", title: "Νομικές διαδικασίες", desc: "Αναφορά σε παλαιούς ΚΑΔ σε συμβόλαια ή νομικά έγγραφα που έχουν συνταχθεί πριν το 2026." },
          ].map((item) => (
            <div key={item.title} style={{ padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.25rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            { q: "Μπορώ να χρησιμοποιήσω ΚΑΔ 2008 στις φορολογικές δηλώσεις του 2026;", a: "Όχι. Από 1η Μαρτίου 2026 χρησιμοποιούνται αποκλειστικά οι νέοι ΚΑΔ 2025. Οι παλαιοί ΚΑΔ 2008 δεν ισχύουν πλέον." },
            { q: "Γιατί ένας νέος ΚΑΔ 2025 αντιστοιχεί σε πολλούς παλιούς ΚΑΔ 2008;", a: "Επειδή το νέο σύστημα NACE Rev.2.1 συγχώνευσε ορισμένες κατηγορίες που στο ΚΑΔ 2008 ήταν διαχωρισμένες." },
            { q: "Είναι αξιόπιστα τα αποτελέσματα αντίστροφης αναζήτησης;", a: "Ναι — βασίζονται στον επίσημο πίνακα αντιστοίχισης ΑΑΔΕ Α.1004/2026. Για τελική επαλήθευση χρησιμοποιήστε το myaade.gov.gr." },
          ].map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο — δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
        Για επίσημες ενέργειες:{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
