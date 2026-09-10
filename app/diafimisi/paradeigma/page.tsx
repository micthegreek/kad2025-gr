import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Παραδείγματα Διαφημιστικών Θέσεων — kad2025.gr",
  description:
    "Δείτε ακριβώς πώς και πού εμφανίζεται κάθε διαφημιστική θέση μέσα στο kad2025.gr, σε πραγματική απεικόνιση των σελίδων.",
  alternates: { canonical: "https://www.kad2025.gr/diafimisi/paradeigma" },
  robots: { index: false, follow: true },
};

const BLUE = "#1d4ed8", TEAL = "#0d9488", AMBER = "#d97706";

/* ─── Μικρογραφία πραγματικής διαφήμισης ─── */
function Ad({ w = "full", accent }: { w?: "full" | "rail"; accent: string }) {
  const rail = w === "rail";
  return (
    <div style={{
      border: `2px solid ${accent}`, borderRadius: 10, background: "#fff",
      padding: rail ? "0.7rem" : "0.75rem 0.9rem", boxShadow: `0 3px 12px ${accent}33`,
    }}>
      <span style={{ display: "inline-block", background: accent, color: "#fff", fontSize: "0.5rem",
        fontWeight: 800, letterSpacing: "0.08em", padding: "0.15rem 0.4rem", borderRadius: 4 }}>ΧΟΡΗΓΟΣ</span>
      <div style={{ display: "flex", gap: "0.55rem", alignItems: "center", marginTop: "0.5rem",
        flexDirection: rail ? "column" : "row", textAlign: rail ? "center" : "left" }}>
        <div style={{ width: rail ? 40 : 34, height: rail ? 40 : 34, borderRadius: 8, flexShrink: 0,
          background: accent, display: "grid", placeItems: "center", color: "#fff",
          fontSize: "0.42rem", fontWeight: 800, lineHeight: 1.15 }}>ΤΟ<br />ΛΟΓΟ<br />ΣΑΣ</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: rail ? "0.72rem" : "0.76rem", color: "#111" }}>Ο τίτλος σας εδώ</div>
          <div style={{ fontSize: "0.63rem", color: "#666", marginTop: "0.15rem", lineHeight: 1.4 }}>
            Δύο σειρές για το προϊόν ή την υπηρεσία σας
          </div>
        </div>
        <div style={{ background: accent, color: "#fff", fontSize: "0.62rem", fontWeight: 800,
          padding: "0.35rem 0.7rem", borderRadius: 6, whiteSpace: "nowrap", width: rail ? "100%" : "auto",
          textAlign: "center" }}>Το κουμπί σας</div>
      </div>
    </div>
  );
}

/* ─── Στοιχεία μικρογραφίας του site ─── */
const bar = (w: string, h = 8, c = "#e2e8f0") => (
  <div style={{ width: w, height: h, background: c, borderRadius: 3 }} />
);

function Navbar() {
  return (
    <div style={{ background: "#12233d", padding: "0.55rem 0.8rem", display: "flex",
      alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span style={{ color: "#f0b429", fontWeight: 800, fontSize: "0.68rem" }}>ΚΑΔ2025.gr</span>
      <div style={{ display: "flex", gap: "0.3rem", marginLeft: "auto" }}>
        {["Αρχική", "ΚΑΔ 2008", "ΚΑΔ 2025", "Αντιστοίχιση"].map((t, i) => (
          <span key={t} style={{ fontSize: "0.55rem", color: i === 2 ? "#12233d" : "rgba(255,255,255,.75)",
            background: i === 2 ? "#f0b429" : "rgba(255,255,255,.1)", padding: "0.18rem 0.45rem",
            borderRadius: 20, fontWeight: 600 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function ResultCard() {
  return (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "0.6rem 0.7rem", background: "#fff" }}>
      <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", marginBottom: "0.4rem" }}>
        <span style={{ background: "#dcfce7", color: "#166534", fontFamily: "monospace",
          fontSize: "0.6rem", fontWeight: 700, padding: "0.15rem 0.4rem", borderRadius: 4 }}>63100000</span>
        {bar("48px", 7)}{bar("60px", 7)}
      </div>
      {bar("92%", 7)}
      <div style={{ marginTop: "0.35rem" }}>{bar("70%", 7)}</div>
    </div>
  );
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#e8edf3",
        padding: "0.35rem 0.6rem", borderRadius: "10px 10px 0 0", border: "1px solid #cbd5e1", borderBottom: "none" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f87171" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fbbf24" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399" }} />
        <span style={{ marginLeft: "0.5rem", fontSize: "0.58rem", color: "#64748b", fontFamily: "monospace" }}>{label}</span>
      </div>
      <div style={{ border: "1px solid #cbd5e1", borderTop: "none", borderRadius: "0 0 10px 10px",
        overflow: "hidden", background: "#f8fafc" }}>{children}</div>
    </div>
  );
}

function Section({ id, n, title, price, color, desc, spec, children }: {
  id: string; n: string; title: string; price: string; color: string; desc: string; spec: string; children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ border: `3px solid ${color}`, borderLeft: `9px solid ${color}`,
      borderRadius: 16, padding: "1.5rem", marginBottom: "1.6rem", background: "var(--bg-card)", scrollMarginTop: "90px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        <span style={{ background: color, color: "#fff", width: 28, height: 28, borderRadius: "50%",
          display: "grid", placeItems: "center", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{n}</span>
        <h2 style={{ fontSize: "1.22rem", margin: 0 }}>{title}</h2>
        <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.05em",
          padding: "0.22rem 0.65rem", borderRadius: 20, background: color, color: "#fff" }}>{price}</span>
      </div>
      <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", margin: "0 0 1.2rem", lineHeight: 1.6 }}>{desc}</p>
      {children}
      <p style={{ margin: "0.9rem 0 0", fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{spec}</p>
    </section>
  );
}

const jsonLd = { "@context": "https://schema.org", "@type": "WebPage",
  name: "Παραδείγματα Διαφημιστικών Θέσεων", url: "https://www.kad2025.gr/diafimisi/paradeigma", inLanguage: "el-GR" };

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 940, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p style={{ fontSize: "0.85rem", marginBottom: "0.8rem" }}>
        <Link href="/diafimisi">← Επιστροφή στις διαφημιστικές θέσεις</Link>
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.15, margin: "0 0 0.7rem" }}>
        Πού ακριβώς εμφανίζεται η διαφήμισή σας
      </h1>
      <p style={{ fontSize: "1.02rem", color: "var(--text-muted)", maxWidth: "62ch", lineHeight: 1.6, marginBottom: "2rem" }}>
        Παρακάτω βλέπετε την πραγματική σελίδα του site σε μικρογραφία, με τη διαφήμιση ακριβώς
        στη θέση της. Έτσι ξέρετε από πριν τι αγοράζετε — πού μπαίνει, τι βλέπει ο επισκέπτης
        γύρω της, και πόσο ξεχωρίζει.
      </p>

      {/* ── 1. ΚΥΡΙΑ ΘΕΣΗ ── */}
      <Section id="thesi-kyria" n="1" title="Κύρια θέση" price="€150 / μήνα" color={BLUE}
        desc="Στη σελίδα αναζήτησης, δεξιά από τα αποτελέσματα. Παραμένει ορατή όσο ο επισκέπτης κατεβαίνει τη λίστα — τη στιγμή που έχει μόλις βρει αυτό που έψαχνε."
        spec="Περιλαμβάνει: λογότυπο, τίτλο έως 60 χαρακτήρες, περιγραφή έως 160 χαρακτήρες, κουμπί με δικό σας κείμενο και σύνδεσμο. Εμφανίσεις: ≈ 20.000/μήνα. Σε μικρότερες οθόνες η ίδια διαφήμιση εμφανίζεται πλήρους πλάτους, αμέσως μετά τα αποτελέσματα.">
        <Frame label="kad2025.gr/kad-2025?q=6310">
          <Navbar />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 168px", gap: "0.7rem", padding: "0.8rem" }}>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "#111" }}>Αναζήτηση Νέων ΚΑΔ 2025</div>
              <div style={{ border: "2px solid #12233d", borderRadius: 8, padding: "0.45rem 0.6rem",
                background: "#fff", fontSize: "0.65rem", color: "#111", marginBottom: "0.55rem" }}>🔍 6310</div>
              <div style={{ fontSize: "0.6rem", color: "#64748b", marginBottom: "0.5rem" }}><b>13</b> αποτελέσματα</div>
              <div style={{ display: "grid", gap: "0.45rem" }}><ResultCard /><ResultCard /></div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: -9, left: "50%", transform: "translateX(-50%)",
                  background: BLUE, color: "#fff", fontSize: "0.5rem", fontWeight: 800, padding: "0.15rem 0.5rem",
                  borderRadius: 20, whiteSpace: "nowrap", zIndex: 2 }}>↓ Η ΘΕΣΗ ΣΑΣ</div>
                <Ad w="rail" accent={BLUE} />
              </div>
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── 2. ΘΕΣΗ ΠΕΡΙΕΧΟΜΕΝΟΥ ── */}
      <Section id="thesi-periexomenou" n="2" title="Θέση περιεχομένου" price="€100 / μήνα" color={TEAL}
        desc="Μέσα στις 63 σελίδες κλάδων και στους οδηγούς του blog, ανάμεσα στο κείμενο. Ο επισκέπτης εδώ διαβάζει με προσοχή — η διαφήμιση δεν προσπερνιέται."
        spec="Περιλαμβάνει: ίδια στοιχεία με την κύρια θέση, σε πλήρες πλάτος περιεχομένου. Εμφανίσεις: ≈ 4.000/μήνα.">
        <Frame label="kad2025.gr/klados/62">
          <Navbar />
          <div style={{ padding: "0.8rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "#111" }}>ΚΑΔ Πληροφορική &amp; IT 2025</div>
            <div style={{ display: "grid", gap: "0.3rem", marginBottom: "0.7rem" }}>
              {bar("100%", 7)}{bar("96%", 7)}{bar("62%", 7)}
            </div>
            <div style={{ position: "relative", margin: "0.2rem 0 0.7rem" }}>
              <div style={{ position: "absolute", top: -9, left: 14, background: TEAL, color: "#fff",
                fontSize: "0.5rem", fontWeight: 800, padding: "0.15rem 0.5rem", borderRadius: 20, zIndex: 2 }}>↓ Η ΘΕΣΗ ΣΑΣ</div>
              <Ad accent={TEAL} />
            </div>
            <div style={{ display: "grid", gap: "0.3rem" }}>{bar("100%", 7)}{bar("88%", 7)}{bar("94%", 7)}{bar("45%", 7)}</div>
          </div>
        </Frame>
      </Section>

      {/* ── 3. ΓΡΑΜΜΗ ΥΠΟΣΕΛΙΔΟΥ ── */}
      <Section id="thesi-yposelidou" n="3" title="Γραμμή υποσέλιδου" price="€60 / μήνα" color={AMBER}
        desc="Στο κάτω μέρος κάθε σελίδας του site — και στις 9.400 σελίδες ΚΑΔ. Η οικονομικότερη λύση για συνεχή, διακριτική παρουσία της επωνυμίας σας παντού."
        spec="Περιλαμβάνει: επωνυμία, μία σύντομη φράση και σύνδεσμο. Εμφάνιση: σε όλες τις σελίδες του site.">
        <Frame label="kad2025.gr/kad/63100000">
          <div style={{ padding: "0.8rem 0.8rem 0" }}>
            <div style={{ display: "grid", gap: "0.3rem" }}>{bar("70%", 7)}{bar("100%", 7)}{bar("52%", 7)}</div>
          </div>
          <div style={{ background: "#12233d", padding: "0.7rem 0.8rem", marginTop: "0.7rem" }}>
            <div style={{ display: "flex", gap: "1.2rem", marginBottom: "0.6rem" }}>
              {["Εργαλεία", "Οδηγοί", "Εταιρεία"].map((t) => (
                <div key={t}>
                  <div style={{ color: "#fff", fontSize: "0.55rem", fontWeight: 700, marginBottom: "0.25rem" }}>{t}</div>
                  <div style={{ display: "grid", gap: "0.2rem" }}>
                    {bar("42px", 5, "rgba(255,255,255,.25)")}{bar("36px", 5, "rgba(255,255,255,.25)")}{bar("40px", 5, "rgba(255,255,255,.25)")}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "relative", marginTop: "0.7rem" }}>
              <div style={{ position: "absolute", top: -9, left: "50%", transform: "translateX(-50%)",
                background: AMBER, color: "#fff", fontSize: "0.5rem", fontWeight: 800, padding: "0.15rem 0.5rem",
                borderRadius: 20, whiteSpace: "nowrap", zIndex: 2 }}>↓ Η ΘΕΣΗ ΣΑΣ</div>
              <div style={{ border: `2px solid ${AMBER}`, borderRadius: 8, background: "#fff",
                padding: "0.5rem 0.7rem", display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", flexWrap: "wrap" }}>
                <span style={{ background: AMBER, color: "#fff", fontSize: "0.48rem", fontWeight: 800,
                  padding: "0.12rem 0.4rem", borderRadius: 4 }}>ΧΟΡΗΓΟΣ</span>
                <span style={{ fontSize: "0.63rem", fontWeight: 800, color: "#111" }}>Η ΕΠΩΝΥΜΙΑ ΣΑΣ</span>
                <span style={{ fontSize: "0.6rem", color: "#666" }}>— το μήνυμά σας σε μία σειρά</span>
                <span style={{ fontSize: "0.6rem", fontWeight: 800, color: AMBER }}>Μάθετε περισσότερα →</span>
              </div>
            </div>
          </div>
        </Frame>
      </Section>

      <div style={{ padding: "1.4rem 1.6rem", border: "2px solid var(--primary)", borderRadius: 14,
        background: "var(--bg-card)", textAlign: "center" }}>
        <p style={{ margin: "0 0 1rem", fontSize: "1rem", lineHeight: 1.65 }}>
          Θέλετε να δείτε πώς θα φαινόταν συγκεκριμένα το δικό σας υλικό;
          Στείλτε μας λογότυπο και κείμενο και θα σας στείλουμε προεπισκόπηση, χωρίς καμία δέσμευση.
        </p>
        <a href="mailto:info@kad2025.gr?subject=%CE%A0%CF%81%CE%BF%CE%B5%CF%80%CE%B9%CF%83%CE%BA%CF%8C%CF%80%CE%B7%CF%83%CE%B7%20%CE%B4%CE%B9%CE%B1%CF%86%CE%AE%CE%BC%CE%B9%CF%83%CE%B7%CF%82"
          style={{ display: "inline-block", padding: "0.85rem 1.8rem", borderRadius: 10,
            background: "var(--primary)", color: "#fff", fontWeight: 800, textDecoration: "none" }}>
          info@kad2025.gr
        </a>
      </div>

      <p style={{ fontSize: "0.85rem", marginTop: "1.5rem" }}>
        <Link href="/diafimisi">← Επιστροφή στις διαφημιστικές θέσεις και τα στατιστικά</Link>
      </p>
    </main>
  );
}
