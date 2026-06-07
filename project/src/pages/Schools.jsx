// SCOPE — For Schools page (B2B)

const SchoolsPage = ({ navigate }) => {
  return (
    <React.Fragment>
      <header className="page-header tinted-purple">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr',
            gap: 56, alignItems: 'center',
          }} className="sch-hero-grid">
            <div>
              <span className="eyebrow" style={{ color: 'var(--purple-700)', borderColor: 'var(--purple-100)' }}>
                <IconBuilding size={14} color="var(--purple-600)" />
                For schools
              </span>
              <h1 style={{ fontSize: 56 }}>Be discovered by the students who'll thrive at your school.</h1>
              <p className="lead">
                Scope matches students to schools — not the other way around. Claim your profile, keep your data current, and we'll do the rest. Free for state schools and academies.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-lg">Claim your profile <IconArrowRight size={16} /></button>
                <button className="btn btn-outline btn-lg">Book a demo</button>
              </div>
            </div>

            {/* Mock dashboard preview */}
            <DashboardPreview />
          </div>
        </div>
        <style>{`
          @media (max-width: 1000px) { .sch-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </header>

      {/* Pillars */}
      <Section pad="96px 0">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="sch-pillars">
            {[
              {
                icon: <IconTarget size={24} color="var(--blue-600)" />,
                bg: 'var(--blue-50)',
                title: 'Reach genuinely interested students',
                body: 'We only show your school to students whose answers genuinely match what you offer. Quality over quantity — every time.',
              },
              {
                icon: <IconShieldCheck size={24} color="var(--green-600)" />,
                bg: 'var(--green-50)',
                title: 'Stay honest, stay current',
                body: 'Your profile pulls from public data (Ofsted, DfE, ECHP returns) and is augmented with information only you can provide. We keep it current.',
              },
              {
                icon: <IconTrendingUp size={24} color="var(--purple-600)" />,
                bg: 'var(--purple-50)',
                title: 'Understand who you\'re reaching',
                body: 'Anonymous, aggregate trends only — never individual data. See what students in your catchment care about, and how that shifts year on year.',
              },
            ].map((p, i) => (
              <div key={i}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: p.bg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>{p.icon}</div>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.65 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .sch-pillars { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </Section>

      {/* Honest distinction band */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container">
          <div className="section-eyebrow">A note on how we're different</div>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>You can't pay to rank higher.</h2>
          <p className="section-sub" style={{ marginBottom: 56, maxWidth: 760 }}>
            We're an independent match engine, not an advertising platform. School rankings are determined entirely by student answers and public data — there is no paid placement, no boosted listings, no premium tier that affects what students see.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            background: '#fff', borderRadius: 20, overflow: 'hidden',
            border: '1px solid var(--neutral-100)',
            boxShadow: 'var(--shadow-md)',
          }} className="vs-grid">
            <div style={{ padding: 36, borderRight: '1px solid var(--neutral-100)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, color: 'var(--neutral-500)' }}>
                <IconClose size={18} />
                <span style={{ fontWeight: 600 }}>Most school search sites</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
                {[
                  'Paid placement decides what you see first',
                  'Generic profiles written by marketing teams',
                  'Optimised for ad clicks, not fit',
                  'SEN flagged as a tick-box, not understood',
                  'Sells your data to whoever pays',
                ].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--neutral-600)' }}>
                    <span style={{ flexShrink: 0, marginTop: 5, width: 6, height: 6, borderRadius: '50%', background: 'var(--neutral-300)' }}/>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 36, background: 'var(--blue-50)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, color: 'var(--blue-700)' }}>
                <IconCheckCircle size={18} />
                <span style={{ fontWeight: 700 }}>Scope</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
                {[
                  'Match-based rankings only — no paid placement',
                  'Profiles built from public data, augmented by schools',
                  'Optimised for the student finding the right fit',
                  'SEN provision treated as core data, not an afterthought',
                  'Never sells data. Article 9 GDPR for sensitive answers.',
                ].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--blue-900)' }}>
                    <span style={{ flexShrink: 0, marginTop: 3, color: 'var(--blue-600)' }}>
                      <IconCheck size={14} stroke={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .vs-grid { grid-template-columns: 1fr !important; } .vs-grid > div { border-right: 0 !important; border-bottom: 1px solid var(--neutral-100); } }
        `}</style>
      </Section>

      {/* Plans */}
      <Section pad="96px 0">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow">Plans</div>
            <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>Free for state schools. Honest pricing for everyone.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Funded by local authority partnerships and a single insights tier — never by paid placement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="pricing-grid">
            {[
              {
                name: 'Profile',
                price: 'Free',
                badge: 'State schools & academies',
                cta: 'Claim your profile',
                features: [
                  'Verify and edit your public profile',
                  'Add specialisms, photos, head\'s message',
                  'Respond to "ask a current student" prompts',
                  'Open evening promotion',
                ],
                accent: 'var(--green-500)',
              },
              {
                name: 'Insights',
                price: '£249',
                priceSuffix: '/month',
                highlight: true,
                badge: 'Most popular for MATs',
                cta: 'Start free trial',
                features: [
                  'Everything in Profile',
                  'Anonymous, aggregate trends dashboard',
                  'Quarterly catchment analysis report',
                  'Year-on-year applicant interest data',
                  'Priority profile support',
                ],
                accent: 'var(--blue-500)',
              },
              {
                name: 'Independent',
                price: '£599',
                priceSuffix: '/month',
                badge: 'Fee-paying schools',
                cta: 'Get in touch',
                features: [
                  'Everything in Insights',
                  'Bursary & scholarship visibility',
                  'Sixth form & open events feed',
                  'Dedicated success manager',
                ],
                accent: 'var(--purple-500)',
              },
            ].map((p, i) => (
              <div key={i} className="card" style={{
                padding: 32,
                border: p.highlight ? `2px solid ${p.accent}` : '1px solid var(--neutral-200)',
                position: 'relative',
                transform: p.highlight ? 'translateY(-8px)' : 'none',
                boxShadow: p.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              }}>
                {p.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: 32,
                    background: p.accent, color: '#fff',
                    fontSize: 12, fontWeight: 700,
                    padding: '4px 12px', borderRadius: 999,
                    letterSpacing: '0.04em',
                  }}>Most popular</div>
                )}
                <div style={{ fontSize: 12, fontWeight: 600, color: p.accent, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {p.badge}
                </div>
                <h3 style={{ fontSize: 26, marginBottom: 6 }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 900, color: 'var(--neutral-900)' }}>{p.price}</span>
                  {p.priceSuffix && <span style={{ fontSize: 14, color: 'var(--neutral-500)' }}>{p.priceSuffix}</span>}
                </div>
                <button
                  className={p.highlight ? 'btn btn-primary btn-md' : 'btn btn-outline btn-md'}
                  style={{ width: '100%', marginBottom: 24, justifyContent: 'center' }}
                >
                  {p.cta}
                </button>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 10 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--neutral-700)' }}>
                      <span style={{ color: p.accent, flexShrink: 0, marginTop: 1 }}>
                        <IconCheck size={14} stroke={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
            .pricing-grid > div { transform: none !important; }
          }
        `}</style>
      </Section>

      {/* Dashboard screenshot section */}
      <Section pad="96px 0" bg="var(--blue-900)" style={{ color: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr',
            gap: 64, alignItems: 'center',
          }} className="dash-grid">
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--blue-200)' }}>The dashboard</div>
              <h2 style={{ color: '#fff', fontSize: 40, lineHeight: 1.15, marginBottom: 20 }}>Aggregate insights.<br/>Never individual data.</h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 28 }}>
                See what students in your catchment are looking for. Track interest in your specialisms.
                Spot trends in SEN and EAL provision needs. All anonymised, all aggregate — never any individual data.
              </p>
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'Anonymous trends — never individual data',
                  'Compared against borough averages',
                  'Quarterly reports delivered by email',
                  'Ofsted-aligned reporting categories',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'rgba(255,255,255,0.85)' }}>
                    <span style={{ color: 'var(--green-300)', flexShrink: 0, marginTop: 2 }}>
                      <IconCheck size={14} stroke={3} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <DashboardPreview large />
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .dash-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </Section>

      {/* FAQ for schools */}
      <Section pad="96px 0">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-eyebrow">For school leaders</div>
            <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>The questions you'll ask first.</h2>
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { q: 'How do you decide which schools appear for a student?', a: 'Match score, full stop. The score is a function of the student\'s quiz answers against each school\'s data. There is no boost, no premium tier, no advertising spend that influences rankings.' },
              { q: 'Where does our profile data come from?', a: 'A combination of public DfE/Ofsted data and your own additions. Public data refreshes weekly; your additions are reviewed for accuracy by our team before going live.' },
              { q: 'Can we see who has matched with us?', a: 'No — and we never will. Students\' data is never shared with schools. The dashboard only shows aggregate, anonymised trends across your catchment.' },
              { q: 'What happens to our data if we leave?', a: 'Your additions are deleted; public data stays (it\'s public). You can re-claim at any time without penalty.' },
              { q: 'Is there a contract or commitment?', a: 'Free profiles have no commitment. Paid plans are month-to-month — cancel at any time, no notice period.' },
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <h4 style={{ fontSize: 16, marginBottom: 8 }}>{f.q}</h4>
                <p style={{ fontSize: 14.5, color: 'var(--neutral-700)', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section pad="96px 0" bg="var(--purple-50)">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>Ready to be discovered properly?</h2>
          <p className="section-sub" style={{ margin: '0 auto 36px' }}>
            Claim your profile in two minutes. We'll handle the rest.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg">Claim your profile <IconArrowRight size={16} /></button>
            <button className="btn btn-outline btn-lg">Book a demo</button>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

// ─── Dashboard preview ──────────────────────────────────────
const DashboardPreview = ({ large }) => (
  <div style={{
    background: '#fff', borderRadius: 18,
    boxShadow: large
      ? '0 30px 60px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.15)'
      : 'var(--shadow-lg)',
    overflow: 'hidden',
    border: '1px solid var(--neutral-100)',
  }}>
    <div style={{
      padding: '12px 16px',
      borderBottom: '1px solid var(--neutral-100)',
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'var(--neutral-50)',
    }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }}/>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }}/>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C940' }}/>
      <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--neutral-500)' }}>schools.scope.uk/dashboard</span>
    </div>
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--neutral-500)', fontWeight: 600 }}>HILLSIDE ACADEMY</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800 }}>Profile insights</div>
        </div>
        <div style={{
          padding: '4px 10px', background: 'var(--green-50)', color: 'var(--green-700)',
          borderRadius: 999, fontSize: 11, fontWeight: 600,
        }}>Live</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
        {[
          { l: 'Match views', v: '2,148', d: '+12%' },
          { l: 'Avg. match %', v: '78', d: '+3%' },
          { l: 'Profile saves', v: '342', d: '+24%' },
        ].map((s, i) => (
          <div key={i} style={{ padding: 12, background: 'var(--neutral-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--neutral-500)' }}>{s.l}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, marginTop: 4 }}>{s.v}</div>
            <div style={{ fontSize: 10, color: 'var(--green-700)', fontWeight: 600 }}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: 12, background: 'var(--neutral-50)', borderRadius: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 11, color: 'var(--neutral-500)', marginBottom: 8 }}>Interest in your specialisms (last 30 days)</div>
        <svg viewBox="0 0 200 60" width="100%" height="60">
          <polyline
            points="0,40 25,38 50,30 75,32 100,22 125,28 150,15 175,18 200,10"
            fill="none" stroke="var(--blue-500)" strokeWidth="2"
          />
          <polyline
            points="0,40 25,38 50,30 75,32 100,22 125,28 150,15 175,18 200,10 200,60 0,60"
            fill="var(--blue-100)" opacity="0.5"
          />
        </svg>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: 'var(--neutral-500)',
      }}>
        <span>1 Apr</span><span>10 Apr</span><span>20 Apr</span><span>30 Apr</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { SchoolsPage });
