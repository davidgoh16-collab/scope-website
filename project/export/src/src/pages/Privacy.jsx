// SCOPE — Privacy page

const PrivacyPage = ({ navigate }) => {
  return (
    <React.Fragment>
      <header className="page-header tinted-purple">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--purple-700)', borderColor: 'var(--purple-100)' }}>
            <IconShieldCheck size={14} color="var(--purple-600)" />
            Privacy & GDPR
          </span>
          <h1 style={{ margin: '0 auto' }}>Your data is yours.<br/>We're just guardians.</h1>
          <p className="lead" style={{ margin: '20px auto 0' }}>
            We collect the bare minimum, protect SEN data under Article 9 of UK GDPR,
            and never sell or share with schools. The full story is below — plain English, no legal boilerplate.
          </p>
        </div>
      </header>

      <Section pad="96px 0">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '260px 1fr',
            gap: 56, maxWidth: 1100, margin: '0 auto',
          }} className="privacy-grid">

            <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                On this page
              </div>
              <div style={{ display: 'grid', gap: 4 }}>
                {[
                  { id: 'what', label: 'What we collect' },
                  { id: 'why', label: 'Why we collect it' },
                  { id: 'sensitive', label: 'Sensitive (Article 9) data' },
                  { id: 'sharing', label: 'Who we share with' },
                  { id: 'rights', label: 'Your rights' },
                  { id: 'security', label: 'How we keep it safe' },
                  { id: 'contact', label: 'Get in touch' },
                ].map(s => (
                  <a key={s.id} href={`#${s.id}`} style={{
                    padding: '10px 14px',
                    fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'var(--neutral-700)',
                    textDecoration: 'none', borderRadius: 8,
                    display: 'block', transition: 'all 120ms',
                  }}>{s.label}</a>
                ))}
              </div>
            </aside>

            <div style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--neutral-800)' }}>
              <PrivacySection id="what" title="What we collect">
                <p>The quiz answers you give us. That's the bulk of it. Specifically:</p>
                <ul>
                  <li>Your postcode (you can give just the first half — e.g. SW11 — for less precise matching)</li>
                  <li>Your school year</li>
                  <li>Your subject and learning-style preferences</li>
                  <li>Your answers about school character (sixth form, faith, size, etc.)</li>
                  <li>If you sign up: your email address</li>
                  <li>Anonymous usage data (which pages you view, how long the quiz took) — used to improve the product</li>
                </ul>
                <p>We do <strong>not</strong> collect your full name, your date of birth, your full address, your phone number, your school's name, or any biometric data. We don't use third-party tracking pixels or advertising cookies.</p>
              </PrivacySection>

              <PrivacySection id="why" title="Why we collect it">
                <p>Three reasons, in order of importance:</p>
                <ol>
                  <li><strong>To produce your match.</strong> Without your answers, we can't recommend schools.</li>
                  <li><strong>To improve the product.</strong> Aggregate, anonymised data tells us where the quiz confuses people, which questions add value, and which we should cut.</li>
                  <li><strong>To support local authorities.</strong> Some of our LA partners receive anonymised, aggregate trend data about what students in their area are looking for. They never receive individual data.</li>
                </ol>
              </PrivacySection>

              <PrivacySection id="sensitive" title="Sensitive data — Article 9 GDPR">
                <div style={{
                  background: 'var(--pink-50)', padding: 20, borderRadius: 12,
                  border: '1px solid var(--pink-100)', marginBottom: 18,
                }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                    <IconLock size={18} color="var(--pink-700)" />
                    <strong style={{ color: 'var(--pink-800)' }}>Special category data</strong>
                  </div>
                  <p style={{ color: 'var(--pink-900)', fontSize: 14.5, margin: 0 }}>
                    Information about SEN, EHCPs, physical access needs, and ethnicity-related EAL data is classified as <em>special category data</em> under Article 9 of UK GDPR. We treat it accordingly.
                  </p>
                </div>
                <p>Specifically, sensitive data:</p>
                <ul>
                  <li>Is encrypted at rest with separate keys from your other answers</li>
                  <li>Cannot be exported, even by our own staff, without a documented, audited reason</li>
                  <li>Is <strong>never</strong> shared with schools</li>
                  <li>Is <strong>never</strong> sold to any third party</li>
                  <li>Can be deleted separately from the rest of your account, in one click</li>
                </ul>
                <p>If you'd rather skip these questions entirely, every one is optional and clearly marked.</p>
              </PrivacySection>

              <PrivacySection id="sharing" title="Who we share with">
                <p>The short answer is: nobody you wouldn't expect.</p>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr', gap: 12, margin: '16px 0',
                }}>
                  {[
                    { who: 'Schools', share: 'Nothing. Schools never see your data — only aggregate trends if they pay for the dashboard, and even then never linked to you.', positive: false },
                    { who: 'Local authorities', share: 'Aggregate trend data only — never anything linked to you individually. Some LA partnerships fund our work.', positive: true },
                    { who: 'Third-party advertisers', share: 'Never. We do not sell data and we do not run ads.', positive: false },
                    { who: 'Service providers', share: 'Our hosting and email providers (AWS, Postmark) process data on our behalf, bound by Data Processing Agreements that prevent any other use.', positive: true },
                    { who: 'Law enforcement', share: 'Only when legally compelled by a UK court order. We have not received a single such request to date.', positive: true },
                  ].map((r, i) => (
                    <div key={i} style={{
                      padding: 16, background: r.positive ? 'var(--neutral-50)' : 'var(--coral-50)',
                      borderRadius: 10, border: '1px solid ' + (r.positive ? 'var(--neutral-100)' : 'var(--coral-100)'),
                      display: 'flex', gap: 12,
                    }}>
                      <div style={{ flexShrink: 0, marginTop: 2, color: r.positive ? 'var(--green-700)' : 'var(--coral-700)' }}>
                        {r.positive ? <IconCheck size={16} stroke={3} /> : <IconClose size={16} stroke={3} />}
                      </div>
                      <div>
                        <strong>{r.who}</strong>
                        <p style={{ fontSize: 14, color: 'var(--neutral-700)', marginTop: 4 }}>{r.share}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PrivacySection>

              <PrivacySection id="rights" title="Your rights">
                <p>Under UK GDPR you have these rights. We respect all of them and never charge to exercise any of them:</p>
                <ul>
                  <li><strong>Access:</strong> see everything we have on you. Available instantly from your account settings.</li>
                  <li><strong>Rectification:</strong> change any answer at any time.</li>
                  <li><strong>Erasure:</strong> delete your account and all data. Takes effect immediately and is permanent within 30 days.</li>
                  <li><strong>Restrict processing:</strong> tell us to pause processing while we resolve a question.</li>
                  <li><strong>Data portability:</strong> export your data in machine-readable JSON.</li>
                  <li><strong>Object:</strong> opt out of analytics and aggregate trend sharing at any time.</li>
                  <li><strong>Complain:</strong> if we get something wrong, you can complain to the UK's Information Commissioner's Office (ICO). We'd rather you told us first so we can fix it — but you don't have to.</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="security" title="How we keep it safe">
                <ul>
                  <li>Encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Special category data uses a separate encryption key, accessible only to a tiny number of staff</li>
                  <li>UK data residency — your data never leaves the UK</li>
                  <li>SOC 2 Type II audit (most recent: October 2025)</li>
                  <li>Two-factor authentication on all internal accounts</li>
                  <li>External penetration testing twice a year</li>
                </ul>
              </PrivacySection>

              <PrivacySection id="contact" title="Get in touch">
                <p>Email <strong>privacy@scope.uk</strong> — our Data Protection Officer reads every message.</p>
                <p>Our registered ICO number is <strong>ZA987612</strong>. We are registered as a data controller in the UK.</p>
                <p>For data subject access requests, please use the in-product tool in your account settings (instant) or email us if you don't have an account.</p>
                <div style={{ marginTop: 20 }}>
                  <button className="btn btn-primary btn-md" onClick={() => navigate('faq')}>
                    Go to help centre <IconArrowRight size={14} />
                  </button>
                </div>
              </PrivacySection>

              <div style={{ marginTop: 60, padding: 24, background: 'var(--neutral-50)', borderRadius: 12, fontSize: 13, color: 'var(--neutral-600)' }}>
                <strong>Last updated:</strong> 18 March 2026. Version 4.2. Previous versions are available on request.
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .privacy-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .privacy-grid aside { position: static !important; }
          }
        `}</style>
      </Section>
    </React.Fragment>
  );
};

const PrivacySection = ({ id, title, children }) => (
  <section id={id} style={{ scrollMarginTop: 100, marginBottom: 48 }}>
    <h2 style={{ fontSize: 26, marginBottom: 16 }}>{title}</h2>
    <div className="prose" style={{ display: 'grid', gap: 14 }}>
      {children}
    </div>
    <style>{`
      .prose ul, .prose ol { padding-left: 22px; }
      .prose li { margin-bottom: 6px; }
    `}</style>
  </section>
);

Object.assign(window, { PrivacyPage });
