import styles from "./page.module.css";

export default function MensSkinHealthPage() {
  return (
    <main className={styles.page}>
      
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Men’s Skin Health</h1>
        <p className={styles.subtitle}>
          Specialist dermatology care for common and complex male skin concerns.
        </p>
      </section>

      {/* Intro */}
      <section className={styles.section}>
        <p className={styles.body}>
          Men experience a distinct pattern of skin concerns shaped by hormones, grooming habits,
          occupational exposures, and delayed help‑seeking. AbleDERM provides discreet,
          evidence‑based assessment and treatment for the full spectrum of male skin conditions —
          from everyday issues to complex or unusual presentations.
        </p>
      </section>

      {/* Common Conditions */}
      <Section title="Common Skin Conditions in Men">
        <Condition
          title="Acne & Acne Scarring"
          bullets={[
            "Often more severe and persistent due to higher androgen levels",
            "Includes cystic acne, truncal acne, and shaving‑related flare patterns",
          ]}
          treatments="Topical retinoids, benzoyl peroxide combinations, oral antibiotics, isotretinoin, microneedling, chemical peels, laser resurfacing."
        />

        <Condition
          title="Rosacea"
          bullets={["More common in men, often with phymatous changes"]}
          treatments="Metronidazole, azelaic acid, ivermectin, doxycycline, laser/IPL, CO₂ laser for rhinophyma."
        />

        <Condition
          title="Eczema & Dermatitis"
          bullets={[
            "Includes hand eczema, seborrhoeic dermatitis, occupational dermatitis",
          ]}
          treatments="Emollients, topical corticosteroids, calcineurin inhibitors, antifungals, patch testing."
        />

        <Condition
          title="Psoriasis"
          bullets={[
            "Often more extensive in men; may involve scalp, beard area, nails",
          ]}
          treatments="Vitamin D analogues, corticosteroids, phototherapy, systemic agents, biologics."
        />

        <Condition
          title="Hair Loss (Androgenetic Alopecia)"
          treatments="Minoxidil, finasteride, dutasteride (selected cases), PRP, hair transplantation."
        />

        <Condition
          title="Folliculitis & Ingrown Hairs"
          treatments="Antibacterial or antifungal therapy, laser hair reduction, topical retinoids."
        />
      </Section>

      {/* Less Common */}
      <Section title="Less Common or Overlooked Conditions">
        <Condition
          title="Hidradenitis Suppurativa"
          treatments="Antibiotic combinations, hormonal therapy, biologics, surgery."
        />

        <Condition
          title="Male Genital Dermatology"
          treatments="Topical corticosteroids, calcineurin inhibitors, circumcision (selected cases)."
        />

        <Condition
          title="Skin Cancer in Men"
          treatments="Dermoscopy, mole mapping, excision, cryotherapy, Mohs surgery, topical 5‑FU or imiquimod."
        />

        <Condition
          title="Keloids & Hypertrophic Scars"
          treatments="Intralesional steroids, silicone therapy, laser treatment, combination regimens."
        />

        <Condition
          title="Hyperhidrosis"
          treatments="Aluminium chloride, iontophoresis, botulinum toxin, systemic agents."
        />
      </Section>

      {/* Evidence */}
      <Section title="Evidence‑Based Treatment Approach">
        <p className={styles.body}>
          AbleDERM follows NICE, British Association of Dermatologists (BAD), and peer‑reviewed
          clinical guidelines. Our care model includes consultant‑led diagnosis, stepwise treatment
          plans, digital follow‑up, and access to advanced therapies including biologics,
          isotretinoin, and laser.
        </p>
      </Section>

      {/* References */}
      <Section title="Key Clinical References">
        <ul className={styles.list}>
          <li>NICE Guidelines: Acne, Psoriasis, Atopic Dermatitis, Hidradenitis Suppurativa</li>
          <li>British Association of Dermatologists Patient Information Leaflets</li>
          <li>AAD Guidelines for Acne, Rosacea, Skin Cancer</li>
          <li>BMJ Best Practice: Dermatology Modules</li>
          <li>Cochrane Reviews: Acne therapies, psoriasis biologics, alopecia treatments</li>
        </ul>
      </Section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <a href="/book" className={styles.ctaButton}>
          Book a Consultation
        </a>
      </section>
    </main>
  );
}

/* -----------------------------
   Reusable Components
   ----------------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}

function Condition({
  title,
  bullets,
  treatments,
}: {
  title: string;
  bullets?: string[];
  treatments: string;
}) {
  return (
    <div className={styles.condition}>
      <h3 className={styles.conditionTitle}>{title}</h3>

      {bullets && (
        <ul className={styles.list}>
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      <p className={styles.body}>
        <strong>Treatments:</strong> {treatments}
      </p>
    </div>
  );
}
