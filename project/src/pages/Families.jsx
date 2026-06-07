// SCOPE — For Families page

const FamiliesPage = ({ navigate }) => {
  return (
    <React.Fragment>
      <header className="page-header tinted-green">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--green-700)', borderColor: 'var(--green-100)' }}>
            <IconHeart size={14} color="var(--green-600)" />
            For parents & guardians
          </span>
          <h1 style={{ margin: '0 auto' }}>Choosing a school just got a lot easier.</h1>
          <p className="lead" style={{ margin: '20px auto 0' }}>
            Scope was built for the student, but parents and guardians can use it too. Sit down with your child, take the quiz together, and end up with a real shortlist you can both stand behind.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('quiz')}>
              Try it with your child <IconArrowRight size={16} />
            </button>
            <button className="btn btn-ghost btn-lg" style={{ background: 'rgba(255,255,255,0.6)' }} onClick={() => navigate('faq')}>
              Read parent FAQs
            </button>
          </div>
        </div>
      </header>

      {/* Why parents like Scope */}
      <Section pad="96px 0">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="fam-grid">
            <div>
              <div className="section-eyebrow">Why parents like Scope</div>
              <h2 className="section-heading" style={{ marginBottom: 24 }}>From overwhelmed to informed in under an hour.</h2>

              <div style={{ display: 'grid', gap: 18 }}>
                {[
                  {
                    icon: <IconClock size={20} color="var(--green-600)" />,
                    bg: 'var(--green-50)',
                    title: 'No more weekend marathons',
                    body: 'No more printing prospectuses, no more spreadsheets, no more open-evening fatigue. Start with a real shortlist and visit the schools that actually fit.',
                  },
                  {
                    icon: <IconUsers size={20} color="var(--blue-600)" />,
                    bg: 'var(--blue-50)',
                    title: 'A genuine conversation with your child',
                    body: "The quiz is designed for your child to be in the driver's seat — but it's a brilliant prompt for the conversation that should be happening anyway.",
                  },
                  {
                    icon: <IconShield size={20} color="var(--purple-600)" />,
                    bg: 'var(--purple-50)',
                    title: 'You see the why, not just the what',
                    body: 'Every recommendation is reasoned. You\'ll know exactly which of your child\'s answers contributed to each school\'s score.',
                  },
                  {
                    icon: <IconAccessibility size={20} color="var(--pink-700)" />,
                    bg: 'var(--pink-50)',
                    title: 'SEN handled with care',
                    body: "If your child has an EHCP, SEN support, EAL needs or physical access requirements, we match against documented provision — and protect that data under Article 9 GDPR.",
                  },
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: b.bg, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>{b.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 18, marginBottom: 6 }}>{b.title}</h4>
                      <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Family quote stack */}
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{
                background: '#fff', borderRadius: 20, padding: 28,
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--neutral-100)',
              }}>
                <IconQuote size={26} color="var(--green-400)" />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, lineHeight: 1.35, margin: '14px 0 18px', color: 'var(--neutral-900)' }}>
                  Scope did in an evening what we'd been trying to do for two months. And our daughter actually felt like she chose her school, not us.
                </p>
                <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>
                  <strong style={{ color: 'var(--neutral-900)' }}>Priya M.</strong> — Parent in Wandsworth
                </div>
              </div>
              <div style={{
                background: 'var(--green-50)', borderRadius: 20, padding: 28,
                border: '1px solid var(--green-100)',
              }}>
                <IconQuote size={22} color="var(--green-600)" />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, lineHeight: 1.4, margin: '10px 0 14px', color: 'var(--neutral-900)' }}>
                  My son has an EHCP and most search tools just ignore that. Scope asked about it properly — and protected the answer.
                </p>
                <div style={{ fontSize: 13, color: 'var(--neutral-700)' }}>
                  <strong style={{ color: 'var(--neutral-900)' }}>Marcus T.</strong> — Parent in Camberwell
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .fam-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </Section>

      {/* How to do it together */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow">A practical guide</div>
            <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>How to do this together.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              A few small things that make a big difference, from parents who've done it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="guide-grid">
            {[
              {
                n: 1,
                title: 'Sit beside, not over',
                body: 'Let your child answer the quiz themselves. Watching beside them is fine — taking over isn\'t. The recommendations are only as good as their answers.',
              },
              {
                n: 2,
                title: 'Talk about the "why"',
                body: 'When a school comes up that surprises you, click into the breakdown. The reasoning is a great prompt for a real conversation.',
              },
              {
                n: 3,
                title: "Don't optimise for prestige",
                body: 'The "best" school for someone else is not the best for your child. Scope is built around fit, not league tables. Trust that.',
              },
              {
                n: 4,
                title: 'Visit your top 3',
                body: 'A shortlist of 3 schools is much better than the 10 you start with. Use open evenings to confirm the fit, not to start from scratch.',
              },
              {
                n: 5,
                title: 'Be honest about support needs',
                body: 'If your child has SEN, EAL, an EHCP or access needs, don\'t skip those questions. The data is protected, and the matches are dramatically better.',
              },
              {
                n: 6,
                title: 'Revisit before applying',
                body: "Things change. Run the quiz again a month or two before applications open. Scope updates with the latest data weekly.",
              },
            ].map(c => (
              <div key={c.n} className="card card-pad card-hover" style={{ padding: 28 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--green-100)', color: 'var(--green-700)',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>{c.n}</div>
                <h4 style={{ fontSize: 18, marginBottom: 10 }}>{c.title}</h4>
                <p style={{ fontSize: 14.5, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .guide-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 900px) and (max-width: 1100px) { .guide-grid { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
      </Section>

      {/* Timeline */}
      <Section pad="96px 0">
        <div className="container">
          <div className="section-eyebrow">The year ahead</div>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Year 6 → secondary. Year 11 → sixth form.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            A rough sense of what's happening, when. Dates shift slightly by local authority — check yours.
          </p>

          <Timeline />
        </div>
      </Section>

      {/* CTA */}
      <Section pad="96px 0" bg="var(--green-900)" style={{ color: '#fff' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 16 }}>Sit down with your child this evening.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 19, marginBottom: 36 }}>
            Five minutes. A real shortlist by bedtime.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn-white btn-lg" onClick={() => navigate('quiz')}>
              Start the quiz <IconArrowRight size={16} />
            </button>
            <button className="btn btn-outline-white btn-lg" onClick={() => navigate('faq')}>
              Parent FAQs
            </button>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

// ─── Timeline component ──────────────────────────────────────
const Timeline = () => {
  const items = [
    { when: 'September', what: 'Open evenings begin', body: 'Most schools host one or two evenings. You don\'t need to attend all of them.', color: 'var(--blue-500)' },
    { when: 'October', what: 'Take the Scope quiz', body: 'Get a shortlist of 3–5 schools. Use it to plan which open evenings to attend.', color: 'var(--green-500)' },
    { when: 'October – early November', what: 'Visit your top schools', body: 'Visit the 3 highest matches. Take notes in Scope as you go.', color: 'var(--purple-500)' },
    { when: '31 October', what: 'Secondary school applications close', body: 'Submit via your local authority. Sixth form applications usually run later.', color: 'var(--coral-500)' },
    { when: '1 March', what: 'National offer day', body: 'You\'ll be told which school has offered your child a place.', color: 'var(--pink-600)' },
  ];

  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      <div style={{
        position: 'absolute', left: 15, top: 8, bottom: 8,
        width: 2, background: 'var(--neutral-200)',
      }} />
      <div style={{ display: 'grid', gap: 32 }}>
        {items.map((t, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: -25, top: 8,
              width: 16, height: 16, borderRadius: '50%',
              background: t.color, border: '4px solid #fff',
              boxShadow: '0 0 0 2px var(--neutral-200)',
            }} />
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
              color: t.color, marginBottom: 4, textTransform: 'uppercase',
            }}>{t.when}</div>
            <h4 style={{ fontSize: 19, marginBottom: 6 }}>{t.what}</h4>
            <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.6, maxWidth: 600 }}>{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { FamiliesPage });
