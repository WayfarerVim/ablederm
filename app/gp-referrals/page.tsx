'use client';

import React from 'react';
import { Shield, CheckCircle2, ArrowRight, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export default function GPReferrals() {
  const reasons = [
    { bold: 'Seen within days', rest: ' – not months' },
    { bold: 'GPwSI Dermatology', rest: ' specialist' },
    { bold: 'Dermoscopy', rest: ' included in all mole checks' },
    { bold: 'Minor surgery', rest: ' with histology' },
    { bold: 'PMI integrated', rest: ' (Bupa, AXA, Aviva, Vitality, WPA, Cigna)' },
    { bold: 'Self-referral', rest: ' accepted – minimal GP admin' },
    { bold: 'Clear pricing', rest: ' for self-pay patients' },
  ];

  const conditions = [
    'Acne & acne scarring', 'Rosacea', 'Eczema & dermatitis', 'Psoriasis',
    'Pigmentation', 'Hair & scalp conditions', 'Urticaria',
    'Moles & Skin Cancer Screening (non-urgent)',
  ];

  const procedures = [
    'Cryotherapy', 'Skin Tag Removal', 'Benign Lesion Removal', 'Mole Excision (with Histology)',
  ];

  const pricing = [
    { name: 'Dermatology Consultation', price: '£220' },
    { name: 'Follow-Up', price: '£160' },
    { name: 'Mole Check', price: '£190' },
    { name: 'Cryotherapy', price: 'from £180' },
    { name: 'Mole Excision', price: 'from £480' },
    { name: 'Aesthetic Treatments', price: 'from £210' },
  ];

  const referralOptions = [
    {
      option: 'Option 1',
      title: 'Patient Self-Referral',
      detail: 'Direct patients to:',
      contact: 'www.ablederm.co.uk',
    },
    {
      option: 'Option 2',
      title: 'GP Referral Form',
      detail: 'Email:',
      contact: 'referrals@ablederm.co.uk',
    },
    {
      option: 'Option 3',
      title: 'Practice Manager Call-Back',
      detail: 'Email:',
      contact: 'info@ablederm.health',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9F7F4', fontFamily: '"DM Sans", -apple-system, sans-serif', color: '#2C2C2C' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .section-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #D4AF37; display: block; margin-bottom: 12px;
        }
        .gold-divider { width: 48px; height: 1px; background: #D4AF37; margin: 16px 0 24px; }
        .referral-card {
          background: #fff; border: 1px solid rgba(107,62,62,0.12);
          border-top: 3px solid transparent; padding: 32px 28px;
          transition: all 0.3s;
        }
        .referral-card:hover {
          border-top-color: #D4AF37;
          box-shadow: 0 12px 40px rgba(61,38,38,0.08);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ background: 'rgba(249,247,244,0.97)', borderBottom: '1px solid rgba(107,62,62,0.12)', padding: '0 32px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src="/ablederm-logo-png.png" alt="AbleDERM" style={{ width: 40, height: 40, objectFit: 'contain' }} />
            <div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 600, color: '#3D2626', lineHeight: 1.1 }}>AbleDERM</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B5A5A' }}>Private Dermatology</div>
            </div>
          </a>
          <a href="/#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#6B3E3E', color: '#F9F7F4', border: 'none',
            padding: '10px 22px', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
          }}>
            Book Now <ArrowRight size={12} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #3D2626 0%, #6B3E3E 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <a href="/" style={{ fontSize: 13, color: 'rgba(249,247,244,0.6)', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={12} style={{ color: 'rgba(249,247,244,0.4)' }} />
            <span style={{ fontSize: 13, color: '#D4AF37' }}>GP Referrals</span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', display: 'block', marginBottom: 16 }}>For GP Surgeries in Surrey</span>
          <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, color: '#F9F7F4', lineHeight: 1.15, margin: '0 0 24px', maxWidth: 800 }}>
            Fast Private Dermatology Referrals for GP Surgeries in Surrey
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            {['Fast Access', 'GPwSI Dermatology', 'PMI Accepted'].map(tag => (
              <div key={tag} style={{ padding: '6px 16px', border: '1px solid rgba(212,175,55,0.4)', fontSize: 12, color: '#D4AF37', letterSpacing: '0.08em' }}>{tag}</div>
            ))}
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(249,247,244,0.75)', maxWidth: 680, marginBottom: 16, fontWeight: 300 }}>
            AbleDERM provides rapid, specialist dermatology assessment for patients who need faster access than NHS pathways or who hold private medical insurance.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(249,247,244,0.75)', maxWidth: 680, fontWeight: 300 }}>
            All consultations are delivered by <strong style={{ color: '#F9F7F4', fontWeight: 500 }}>Dr Anupama Lochab, GPwSI Dermatology</strong>, offering evidence-based care, dermoscopy, and minor skin surgery in a trusted clinical setting.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#F0EBE3', padding: '24px 32px', borderBottom: '1px solid rgba(107,62,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          {[
            [Shield, 'CQC Registered', 'Bradstowe Surgery, Woking'],
            [CheckCircle2, 'GPwSI Qualified', 'Specialist Dermatology'],
            [Clock, 'Seen Within Days', 'Not months'],
          ].map(([Icon, title, sub]: any) => (
            <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon size={16} style={{ color: '#D4AF37' }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#3D2626' }}>{title}</div>
                <div style={{ fontSize: 11, color: '#8B5A5A' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY REFER + CONDITIONS */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="two-col">
          <div>
            <span className="section-label">Referral Benefits</span>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#3D2626', margin: '0 0 8px' }}>Why Refer to AbleDERM?</h2>
            <div className="gold-divider" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {reasons.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(107,62,62,0.08)' }}>
                  <CheckCircle2 size={15} style={{ color: '#D4AF37', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#6B6060', lineHeight: 1.6 }}>
                    <strong style={{ color: '#3D2626', fontWeight: 500 }}>{r.bold}</strong>{r.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-label">Scope of Practice</span>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#3D2626', margin: '0 0 8px' }}>Conditions We See</h2>
            <div className="gold-divider" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {conditions.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(107,62,62,0.08)' }}>
                  <div style={{ width: 4, height: 4, background: '#D4AF37', flexShrink: 0, borderRadius: '50%' }} />
                  <span style={{ fontSize: 14, color: '#6B6060' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURES + PRICING */}
      <section style={{ padding: '80px 32px', background: '#F0EBE3' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="two-col">
          <div>
            <span className="section-label">Minor Surgery</span>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#3D2626', margin: '0 0 8px' }}>Minor Procedures</h2>
            <div className="gold-divider" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {procedures.map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: '1px solid rgba(107,62,62,0.1)' }}>
                  <div style={{ width: 4, height: 4, background: '#D4AF37', flexShrink: 0, borderRadius: '50%' }} />
                  <span style={{ fontSize: 14, color: '#6B6060' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-label">Transparent Fees</span>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#3D2626', margin: '0 0 8px' }}>Pricing (Self-Pay)</h2>
            <div className="gold-divider" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {pricing.map((p, i) => (
                <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(107,62,62,0.1)', background: i % 2 === 0 ? 'transparent' : 'rgba(107,62,62,0.02)' }}>
                  <span style={{ fontSize: 14, color: '#6B6060' }}>{p.name}</span>
                  <span className="serif" style={{ fontSize: 20, fontWeight: 500, color: '#6B3E3E' }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REFER */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Get Started</span>
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#3D2626', margin: 0 }}>How to Refer</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {referralOptions.map(r => (
              <div key={r.option} className="referral-card">
                <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 8 }}>{r.option}</div>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, color: '#3D2626', marginBottom: 16 }}>{r.title}</h3>
                <div style={{ width: 32, height: 1, background: '#D4AF37', marginBottom: 16 }} />
                <p style={{ fontSize: 13, color: '#8B5A5A', marginBottom: 8 }}>{r.detail}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#6B3E3E' }}>{r.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#3D2626', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#F9F7F4', marginBottom: 16 }}>Ready to Refer a Patient?</h2>
          <div style={{ width: 48, height: 1, background: '#D4AF37', margin: '0 auto 24px' }} />
          <p style={{ fontSize: 15, color: 'rgba(249,247,244,0.7)', lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
            AbleDERM, Bradstowe Surgery, Woking · Free On-Site Parking · Easy Access from Guildford, Weybridge & Surrounding Areas
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="mailto:referrals@ablederm.co.uk" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4AF37', color: '#3D2626', padding: '14px 32px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              <Mail size={14} /> Send Referral
            </a>
            <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F9F7F4', border: '1px solid rgba(249,247,244,0.3)', padding: '14px 32px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              <Phone size={14} /> Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2A1A1A', padding: '32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/ablederm-logo-png.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <div>
              <div className="serif" style={{ fontSize: 15, color: '#F9F7F4', fontWeight: 500 }}>AbleDERM</div>
              <div style={{ fontSize: 10, color: 'rgba(249,247,244,0.4)', letterSpacing: '0.12em' }}>Private Dermatology · Woking</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(249,247,244,0.35)' }}>
            © {new Date().getFullYear()} AbleDERM. All rights reserved. · CQC Compliant · Bradstowe Surgery
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Shield size={12} style={{ color: '#D4AF37' }} />
            <span style={{ fontSize: 11, color: 'rgba(212,175,55,0.7)' }}>CQC Registered</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
