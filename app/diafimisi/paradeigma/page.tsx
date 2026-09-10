import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Παραδείγματα Διαφημιστικών Θέσεων — kad2025.gr",
  description:
    "Δείτε ακριβώς πώς εμφανίζεται κάθε διαφημιστική θέση στο kad2025.gr: κύρια θέση μετά τα αποτελέσματα, θέση περιεχομένου και γραμμή υποσέλιδου.",
  alternates: { canonical: "https://www.kad2025.gr/diafimisi/paradeigma" },
  robots: { index: false, follow: true },
};

/* Εικονική διαφήμιση — δείχνει πώς θα φαινόταν ένας πραγματικός διαφημιζόμενος */
function DemoAd({ size }: { size: "main" | "content" | "footer" }) {
  if (size === "footer") {
    return (
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.7rem",
          flexWrap: "wrap", padding: "0.85rem 1rem", border: "1px solid var(--border)",
          borderRadius: 10, background: "var(--bg-card)", fontSize: "0.88rem",
        }}
      >
        <span style={{ fontSize: "0.63rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Χορηγός
        </span>
        <span style={{ fontWeight: 700 }}>Η ΕΠΩΝΥΜΙΑ ΣΑΣ</span>
        <span style={{ color: "var(--text-muted)" }}>— το μήνυμά σας σε μία σειρά</span>
        <span style={{ fontWeight: 700, color: "var(--primary)" }}>Μάθετε περισσότερα →</span>
      </div>
    );
  }
  const main = size === "main";
  return (
    <div
      style={{
        border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-card)",
        padding: main ? "1.3rem 1.5rem" : "1.1rem 1.25rem",
      }}
    >
      <span style={{ fontSize: "0.63rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
        Χορηγός
      </span>
      <div style={{ display: "flex", gap: "1.1rem", alignItems: "center", flexWrap: "wrap", marginTop: "0.6rem" }}>
        <div
          style={{
            width: 58, height: 58, borderRadius: 12, flexShrink: 0,
            background: "linear-gradient(135deg, var(--primary), var(--primary-dark, #1e3a5f))",
            display: "grid", placeItems: "center", color: "#fff", fontWeight: 800, fontSize: "0.72rem", textAlign: "center", lineHeight: 1.2,
          }}
        >
          ΤΟ<br />ΛΟΓΟ<br />ΣΑΣ
        </div>
        <div style={{ flex: "1 1 240px", minWidth: 0 }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: main ? "1.08rem" : "1rem" }}>
            Ο τίτλος της διαφήμισής σας
          </p>
          <p style={{ margin: "0.3rem 0 0", fontSize: "0.89rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
            Δύο σειρές κειμένου για το προϊόν ή την υπηρεσία σας — όσο χρειάζεται για να καταλάβει
            ο επισκέπτης τι προσφέρετε και γιατί τον αφορά.
          </p>
        </div>
        <span
          style={{
            flexShrink: 0, padding: "0.7rem 1.25rem", borderRadius: 9,
            background: "var(--primary)", color: "#fff", fontWeight: 800, fontSize: "0.9rem", whiteSpace: "nowrap",
          }}
        >
          Το κουμπί σας →
        </span>
      </div>
    </div>
  );
}

function Spec({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: "0.7rem 0 0", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{children}</p>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Παραδείγματα Διαφημιστικών Θέσεων",
  url: "https://www.kad2025.gr/diafimisi/paradeigma",
  inLanguage: "el-GR",
};

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p style={{ fontSize: "0.85rem", marginBottom: "0.8rem" }}>
        <Link href="/diafimisi">← Επιστροφή στις διαφημιστικές θέσεις</Link>
      </p>

      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.15, margin: "0 0 0.7rem" }}>
        Πώς θα εμφανίζεται η διαφήμισή σας
      </h1>
      <p style={{ fontSize: "1.02rem", color: "var(--text-muted)", maxWidth: "60ch", lineHeight: 1.6, marginBottom: "2rem" }}>
        Παρακάτω βλέπετε ακριβώς τη μορφή που παίρνει κάθε θέση μέσα στο site — στις πραγματικές
        διαστάσεις και με το πραγματικό στυλ. Τα κείμενα και τα χρώματα είναι ενδεικτικά και
        προσαρμόζονται στη δική σας ταυτότητα.
      </p>

      {/* ── 1. ΚΥΡΙΑ ΘΕΣΗ ── */}
      <section
        style={{
          border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem", marginBottom: "1.5rem",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", margin: 0 }}>1. Κύρια θέση</h2>
          <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 20, background: "var(--primary)", color: "#fff" }}>
            €150 / μήνα
          </span>
        </div>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: "0 0 1.2rem", lineHeight: 1.6 }}>
          Εμφανίζεται αμέσως μετά τα αποτελέσματα αναζήτησης, στις τέσσερις σελίδες με τη μεγαλύτερη
          κίνηση. Σε ευρείες οθόνες εμφανίζεται και ως σταθερή δεξιά στήλη, ορατή όσο ο επισκέπτης
          διαβάζει τα αποτελέσματα.
        </p>
        <DemoAd size="main" />
        <Spec>
          <strong>Περιλαμβάνει:</strong> λογότυπο, τίτλο έως 60 χαρακτήρες, περιγραφή έως 160 χαρακτήρες,
          κουμπί με δικό σας κείμενο και σύνδεσμο. Εμφανίσεις: ≈ 20.000/μήνα.
        </Spec>
      </section>

      {/* ── 2. ΘΕΣΗ ΠΕΡΙΕΧΟΜΕΝΟΥ ── */}
      <section
        style={{
          border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem", marginBottom: "1.5rem",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", margin: 0 }}>2. Θέση περιεχομένου</h2>
          <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 20, background: "var(--text-muted)", color: "#fff" }}>
            €100 / μήνα
          </span>
        </div>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: "0 0 1.2rem", lineHeight: 1.6 }}>
          Μέσα στις 63 σελίδες κλάδων και στους οδηγούς του blog — εκεί όπου ο επισκέπτης διαβάζει
          με προσοχή, όχι απλώς αναζητά.
        </p>
        <DemoAd size="content" />
        <Spec>
          <strong>Περιλαμβάνει:</strong> ίδια στοιχεία με την κύρια θέση, σε ελαφρώς πιο συμπαγή μορφή.
          Εμφανίσεις: ≈ 4.000/μήνα.
        </Spec>
      </section>

      {/* ── 3. ΓΡΑΜΜΗ ΥΠΟΣΕΛΙΔΟΥ ── */}
      <section
        style={{
          border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem", marginBottom: "1.5rem",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", margin: 0 }}>3. Γραμμή υποσέλιδου</h2>
          <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 20, background: "var(--text-muted)", color: "#fff" }}>
            €60 / μήνα
          </span>
        </div>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: "0 0 1.2rem", lineHeight: 1.6 }}>
          Διακριτική παρουσία σε κάθε σελίδα του site, συμπεριλαμβανομένων και των 9.400 σελίδων ΚΑΔ.
          Η οικονομικότερη λύση για συνεχή προβολή της επωνυμίας.
        </p>
        <DemoAd size="footer" />
        <Spec>
          <strong>Περιλαμβάνει:</strong> επωνυμία, μία σύντομη φράση και σύνδεσμο.
          Εμφάνιση: σε όλες τις σελίδες.
        </Spec>
      </section>

      <div
        style={{
          padding: "1.3rem 1.5rem", border: "2px solid var(--primary)", borderRadius: 14,
          background: "var(--bg-card)", textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 0.9rem", fontSize: "1rem", lineHeight: 1.6 }}>
          Θέλετε να δείτε πώς θα φαινόταν συγκεκριμένα το δικό σας υλικό;
          Στείλτε μας λογότυπο και κείμενο και θα σας στείλουμε προεπισκόπηση, χωρίς καμία δέσμευση.
        </p>
        <a
          href="mailto:info@kad2025.gr?subject=%CE%A0%CF%81%CE%BF%CE%B5%CF%80%CE%B9%CF%83%CE%BA%CF%8C%CF%80%CE%B7%CF%83%CE%B7%20%CE%B4%CE%B9%CE%B1%CF%86%CE%AE%CE%BC%CE%B9%CF%83%CE%B7%CF%82"
          style={{ display: "inline-block", padding: "0.8rem 1.7rem", borderRadius: 10, background: "var(--primary)", color: "#fff", fontWeight: 800, textDecoration: "none" }}
        >
          info@kad2025.gr
        </a>
      </div>

      <p style={{ fontSize: "0.85rem", marginTop: "1.5rem" }}>
        <Link href="/diafimisi">← Επιστροφή στις διαφημιστικές θέσεις και τα στατιστικά</Link>
      </p>
    </main>
  );
}
