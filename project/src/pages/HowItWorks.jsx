// SCOPE — How It Works page

const HowItWorksPage = ({ navigate }) => {
  return (
    <React.Fragment>
      <header className="page-header tinted-blue">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow">
            <IconSparkles size={14} color="var(--blue-600)" />
            How matching works
          </span>
          <h1 style={{ margin: '0 auto' }}>From a five-minute quiz to your personalised school list.</h1>
          <p className="lead" style={{ margin: '20px auto 0' }}>
            We combine what you tell us with public school data — Ofsted, results, specialisms,
            admissions, distance, support provision — and give you a ranked, reasoned list. Here's the full story.
          </p>
        </div>
      </header>

      {/* Big numbered steps */}
      <Section pad="96px 0">
        <div className="container">
          <div style={{ display: 'grid', gap: 80 }}>
            {STEPS.map((s, i) => (
              <BigStep key={s.n} step={s} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </Section>

      {/* What we factor in */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container">
          <div className="section-eyebrow">What we factor in</div>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Every school is scored across these dimensions.</h2>
          <p className="section-sub" style={{ marginBottom: 56 }}>
            Each one is weighted by your answers. A school can ace one dimension and fall short on another — your match score reflects both.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="factors-grid">
            {FACTORS.map((f, i) => (
              <div key={i} className="card card-pad card-hover">
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: f.bg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>{f.icon}</div>
                <h4 style={{ fontSize: 17, marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .factors-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </Section>

      {/* Match score breakdown */}
      <Section pad="96px 0">
        <div className="container">
          <div className="section-eyebrow">No black boxes</div>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Every match score is broken down for you.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            You can see exactly which of your answers contributed to a school's score, and which factors counted against. Nothing is hidden.
          </p>

          <MatchExplainer />
        </div>
      </Section>

      {/* Distance map */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 64, alignItems: 'center',
          }} className="distance-grid">
            <div>
              <div className="section-eyebrow">Real distance, not crow flies</div>
              <h2 className="section-heading" style={{ marginBottom: 16 }}>Bus routes. Walking times. Reality.</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                Most school search tools give you the "as the crow flies" distance — which is useless if there's a river or a railway between you. We use real routing.
              </p>
              <div style={{ display: 'grid', gap: 14 }}>
                {[
                  { icon: <IconBus size={18} color="var(--blue-600)" />, t: 'Bus routes', s: 'Live TfL & First Bus data, frequency by time of day' },
                  { icon: <IconMapPin size={18} color="var(--green-600)" />, t: 'Walking & cycling', s: 'OS-Maps routing — quietest routes, not shortest' },
                  { icon: <IconClock size={18} color="var(--purple-600)" />, t: 'Real arrival times', s: 'Total door-to-gate, including transfers' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: '#fff', boxShadow: 'var(--shadow-sm)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>{f.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{f.t}</div>
                      <div style={{ fontSize: 14, color: 'var(--neutral-600)' }}>{f.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DistanceMockMap />
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .distance-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </Section>

      {/* SEN / accessibility */}
      <Section pad="96px 0">
        <div className="container">
          <div style={{
            background: `linear-gradient(135deg, var(--pink-50) 0%, var(--purple-50) 100%)`,
            borderRadius: 24, padding: 56,
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 56, alignItems: 'center',
          }} className="sen-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--pink-700)',
                fontSize: 13, fontWeight: 600,
                padding: '6px 14px', borderRadius: 999,
                marginBottom: 20,
              }}>
                <IconAccessibility size={14} />
                SEN & accessibility
              </div>
              <h2 className="section-heading" style={{ marginBottom: 16 }}>The support you need, taken seriously.</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                We ask specific questions about SEN, EHCPs, physical access, EAL and other support needs. Schools are matched on their documented provision — not what they say in their prospectus.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 10 }}>
                {[
                  'Article 9 GDPR protection for special category data',
                  'Calm, neutral, affirming language — never pathologising',
                  'Each school\'s provision is sourced from EHCP returns & SENCO surveys',
                  'You can skip any question or delete answers at any time',
                ].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--neutral-800)' }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'var(--pink-100)', color: 'var(--pink-700)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                    }}>
                      <IconCheck size={12} stroke={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: '#fff', borderRadius: 20, padding: 28,
              boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--neutral-500)', marginBottom: 6 }}>Support needs · Optional</div>
              <h4 style={{ fontSize: 20, marginBottom: 14, lineHeight: 1.3 }}>Is there anything we should know about how you learn best?</h4>
              <div style={{ fontSize: 13.5, color: 'var(--neutral-600)', marginBottom: 18, padding: '12px 14px', background: 'var(--neutral-50)', borderRadius: 10, display: 'flex', gap: 10 }}>
                <IconLock size={16} color="var(--neutral-500)" />
                <div>This stays private. Schools never see your answers. You can skip or delete at any time.</div>
              </div>
              <div style={{ display: 'grid', gap: 8 }}>
                {[
                  'EHCP / Education, Health and Care Plan',
                  'SEN support (without EHCP)',
                  'Physical access requirements',
                  'English as an Additional Language',
                  'Prefer not to say / Skip',
                ].map((t, i) => (
                  <label key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '11px 14px', border: '1px solid var(--neutral-200)',
                    borderRadius: 10, cursor: 'pointer', fontSize: 14.5,
                    background: i === 0 ? 'var(--pink-50)' : '#fff',
                    borderColor: i === 0 ? 'var(--pink-300)' : 'var(--neutral-200)',
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: 4,
                      background: i === 0 ? 'var(--pink-600)' : '#fff',
                      border: `1.5px solid ${i === 0 ? 'var(--pink-600)' : 'var(--neutral-300)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>{i === 0 && <IconCheck size={11} stroke={3} color="#fff" />}</span>
                    {t}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .sen-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px !important; } }
        `}</style>
      </Section>

      {/* CTA */}
      <Section pad="96px 0" bg="var(--blue-900)" style={{ color: '#fff' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 16 }}>Ready to try it?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 19, marginBottom: 36 }}>
            See it work end-to-end. Free, no account needed to start.
          </p>
          <button className="btn btn-white btn-lg" onClick={() => navigate('quiz')}>
            Start the quiz <IconArrowRight size={16} />
          </button>
        </div>
      </Section>
    </React.Fragment>
  );
};

// ─── Sub-components ──────────────────────────────────────────
const STEPS = [
  {
    n: 1,
    eyebrow: 'Step one',
    title: 'You tell us about you.',
    body: 'About a dozen plain-English questions: where you live, what you actually enjoy at school, the kind of place you want to go to, and (optionally) any support needs. The whole thing takes about five minutes. You can pause and come back.',
    bullets: ['Plain language, no jargon', 'Skip anything optional', 'Edit any answer later'],
    accent: 'blue',
    visual: 'quiz',
  },
  {
    n: 2,
    eyebrow: 'Step two',
    title: "Our matching does the heavy lifting.",
    body: "We pull from public school data — Ofsted, GCSE & A Level results, specialisms, admissions criteria — combined with real travel routing from your postcode and each school's documented SEN provision. Every dimension is weighted by your answers.",
    bullets: ['2,400+ schools indexed in England', 'Real travel routing, not crow flies', 'Refreshed weekly with public data'],
    accent: 'purple',
    visual: 'matching',
  },
  {
    n: 3,
    eyebrow: 'Step three',
    title: 'You get a ranked list with reasoning.',
    body: 'Not just a number — every match has a breakdown: which of your answers it served, where it falls short, transport options, and what it actually looks like to attend. Save favourites, compare side-by-side, share with parents in one tap.',
    bullets: ['See exactly why each school matched', 'Save and compare your shortlist', 'Take notes from open evenings'],
    accent: 'green',
    visual: 'results',
  },
];

const BigStep = ({ step, flip }) => {
  const accentColor = {
    blue: 'var(--blue-500)', purple: 'var(--purple-500)', green: 'var(--green-500)',
  }[step.accent];
  const accentBg = {
    blue: 'var(--blue-50)', purple: 'var(--purple-50)', green: 'var(--green-50)',
  }[step.accent];

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 64, alignItems: 'center',
      direction: flip ? 'rtl' : 'ltr',
    }} className="big-step">
      <div style={{ direction: 'ltr' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 900,
            color: accentBg, lineHeight: 1, letterSpacing: '-0.04em',
          }}>{step.n}</div>
          <div style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: accentColor,
          }}>{step.eyebrow}</div>
        </div>
        <h2 style={{ fontSize: 38, marginBottom: 18, lineHeight: 1.15 }}>{step.title}</h2>
        <p style={{ fontSize: 17, color: 'var(--neutral-700)', marginBottom: 24, lineHeight: 1.6 }}>{step.body}</p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
          {step.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--neutral-800)' }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: accentBg, color: accentColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <IconCheck size={13} stroke={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center' }}>
        <StepVisual visual={step.visual} accent={step.accent} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .big-step { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
};

const StepVisual = ({ visual, accent }) => {
  if (visual === 'quiz') {
    return (
      <div style={{
        background: '#fff', borderRadius: 20, padding: 28,
        boxShadow: 'var(--shadow-lg)',
        maxWidth: 420, width: '100%',
        border: '1px solid var(--neutral-100)',
      }}>
        <div style={{ fontSize: 12, color: 'var(--neutral-500)', marginBottom: 10 }}>Question 5 of 12</div>
        <div style={{ height: 6, background: 'var(--neutral-100)', borderRadius: 999, marginBottom: 20 }}>
          <div style={{ width: '42%', height: '100%', background: 'var(--blue-500)', borderRadius: 999 }} />
        </div>
        <h4 style={{ fontSize: 20, marginBottom: 16, lineHeight: 1.3 }}>How do you feel about a long commute?</h4>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            "I'd rather stay close — short journey wins",
            "I don't mind 30 mins if the school is great",
            "Distance isn't a problem at all",
          ].map((t, i) => (
            <div key={i} style={{
              padding: '12px 14px', borderRadius: 12,
              border: i === 1 ? '2px solid var(--blue-500)' : '1px solid var(--neutral-200)',
              background: i === 1 ? 'var(--blue-50)' : '#fff',
              fontSize: 14.5, color: i === 1 ? 'var(--blue-800)' : 'var(--neutral-800)',
              fontWeight: i === 1 ? 600 : 500,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span>{t}</span>
              {i === 1 && <IconCheck size={16} stroke={3} color="var(--blue-600)" />}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (visual === 'matching') {
    return (
      <div style={{
        background: '#fff', borderRadius: 20, padding: 28,
        boxShadow: 'var(--shadow-lg)',
        maxWidth: 420, width: '100%',
        border: '1px solid var(--neutral-100)',
      }}>
        <div style={{ fontSize: 12, color: 'var(--neutral-500)', marginBottom: 12, fontWeight: 600 }}>Matching against 2,400+ schools</div>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            { l: 'Distance & transport', v: 90, c: 'var(--blue-500)' },
            { l: 'Subjects & interests', v: 84, c: 'var(--purple-500)' },
            { l: 'Ofsted & results', v: 78, c: 'var(--green-500)' },
            { l: 'Admissions criteria', v: 92, c: 'var(--coral-500)' },
            { l: 'Support provision', v: 88, c: 'var(--pink-600)' },
            { l: 'School character', v: 71, c: 'var(--blue-500)' },
          ].map((f, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                <span style={{ color: 'var(--neutral-700)' }}>{f.l}</span>
                <span style={{ fontWeight: 700, color: 'var(--neutral-900)' }}>{f.v}</span>
              </div>
              <div style={{ height: 6, background: 'var(--neutral-100)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${f.v}%`, height: '100%', background: f.c, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // results
  return (
    <div style={{
      background: '#fff', borderRadius: 20, padding: 24,
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 420, width: '100%',
      border: '1px solid var(--neutral-100)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Your top matches</div>
      <div style={{ fontSize: 12, color: 'var(--neutral-500)', marginBottom: 16 }}>5 schools · ranked</div>
      <div style={{ display: 'grid', gap: 8 }}>
        {SAMPLE_SCHOOLS.slice(0, 4).map((s, i) => (
          <div key={s.id} style={{
            padding: 12, borderRadius: 12,
            border: '1px solid var(--neutral-100)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: '50%',
              background: `var(--${s.accent}-500)`, color: '#fff',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{i + 1}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
              <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>{s.distance} · {s.type}</div>
            </div>
            <span className={`match-badge ${s.match >= 80 ? 'match-hi' : 'match-mid'}`} style={{ fontSize: 11, padding: '2px 8px' }}>{s.match}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FACTORS = [
  { icon: <IconMapPin size={20} color="var(--blue-600)" />, bg: 'var(--blue-50)', title: 'Distance & transport', body: 'Real bus, train, walking and cycling routes from your postcode. Door to gate.' },
  { icon: <IconBook size={20} color="var(--purple-600)" />, bg: 'var(--purple-50)', title: 'Subjects & specialisms', body: 'GCSE & A Level subjects available, specialisms, language options, technical pathways.' },
  { icon: <IconAward size={20} color="var(--green-600)" />, bg: 'var(--green-50)', title: 'Ofsted & results', body: 'Most recent Ofsted, attainment 8, Progress 8, A* / 9–7 rates, value added measures.' },
  { icon: <IconAccessibility size={20} color="var(--pink-700)" />, bg: 'var(--pink-50)', title: 'SEN & accessibility', body: "Documented SEN provision, SRP units, physical access, EAL support, EHCP returns." },
  { icon: <IconBuilding size={20} color="var(--coral-600)" />, bg: 'var(--coral-50)', title: 'Admissions criteria', body: 'Catchment, sibling priority, faith requirements, feeder schools, banding.' },
  { icon: <IconHeart size={20} color="var(--blue-600)" />, bg: 'var(--blue-50)', title: 'School character', body: 'Single-sex vs mixed, faith ethos, behaviour policy, uniform, extracurricular offer.' },
];

const MatchExplainer = () => {
  return (
    <div className="card" style={{ padding: 36, boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Hillside Academy · 94%</div>
          <div style={{ fontSize: 14, color: 'var(--neutral-600)' }}>State secondary · Battersea · 1.2 mi · Ofsted Outstanding</div>
        </div>
        <span className="match-badge match-hi" style={{ fontSize: 14, padding: '8px 16px' }}>
          <IconStar size={14} /> Excellent fit
        </span>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 24,
      }} className="match-grid">
        <div>
          <h4 style={{ fontSize: 15, marginBottom: 14, color: 'var(--green-700)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconCheckCircle size={16} /> What pushed the score up
          </h4>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { f: 'Distance', s: '+12', body: '1.2 miles, bus 137 direct from your postcode' },
              { f: 'Science specialism', s: '+18', body: 'You picked science labs as your favourite lesson type' },
              { f: 'Sixth form', s: '+8', body: 'On-site sixth form — you said you want to continue here' },
              { f: 'SEN provision', s: '+10', body: 'SENCO + speech & language support' },
            ].map((p, i) => (
              <div key={i} style={{
                padding: 14, borderRadius: 10,
                background: 'var(--green-50)',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800,
                  color: 'var(--green-700)', minWidth: 36,
                }}>{p.s}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{p.f}</div>
                  <div style={{ fontSize: 13, color: 'var(--neutral-700)' }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 15, marginBottom: 14, color: 'var(--neutral-700)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconInfo size={16} /> What counted against
          </h4>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { f: 'Spanish language', s: '–4', body: 'You said you wanted Spanish — only French offered here' },
              { f: 'Catchment area', s: '–3', body: "You're outside the catchment zone, sibling priority matters" },
              { f: 'Drama provision', s: '–2', body: 'Smaller drama programme than other matches' },
            ].map((p, i) => (
              <div key={i} style={{
                padding: 14, borderRadius: 10,
                background: 'var(--neutral-50)',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800,
                  color: 'var(--neutral-600)', minWidth: 36,
                }}>{p.s}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{p.f}</div>
                  <div style={{ fontSize: 13, color: 'var(--neutral-700)' }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 28, padding: 18, borderRadius: 12,
        background: 'var(--blue-50)', display: 'flex', gap: 14, alignItems: 'center',
      }}>
        <IconInfo size={20} color="var(--blue-600)" />
        <div style={{ fontSize: 14, color: 'var(--blue-800)' }}>
          Want to change a factor? Tweak your answers and the match scores re-calculate instantly. Nothing is set in stone.
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .match-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

const DistanceMockMap = () => (
  <div style={{
    background: '#fff', borderRadius: 20, padding: 0,
    boxShadow: 'var(--shadow-lg)',
    height: 400, position: 'relative', overflow: 'hidden',
  }}>
    {/* Mock map background */}
    <div style={{
      position: 'absolute', inset: 0,
      background: `
        linear-gradient(135deg, #E8EFF8 0%, #D9E6F2 100%)
      `,
    }}>
      {/* Mock streets */}
      <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ opacity: 0.5 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A8BDD4" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)"/>
        <path d="M 0 200 Q 100 180 200 200 T 400 220" stroke="#FFF" strokeWidth="6" fill="none"/>
        <path d="M 120 0 L 130 180 L 140 400" stroke="#FFF" strokeWidth="5" fill="none"/>
        <path d="M 280 0 L 290 200 L 300 400" stroke="#FFF" strokeWidth="5" fill="none"/>
        <circle cx="200" cy="300" r="60" fill="#B5D6BA" opacity="0.4"/>
        <circle cx="320" cy="100" r="40" fill="#B5D6BA" opacity="0.4"/>
        {/* Route line */}
        <path d="M 90 320 Q 140 280 180 240 T 270 140" stroke="var(--blue-500)" strokeWidth="3" fill="none" strokeDasharray="6 4"/>
      </svg>

      {/* Home pin */}
      <div style={{ position: 'absolute', bottom: 80, left: 80, transform: 'translate(-50%, 50%)' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--purple-500)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(148,120,192,0.4)',
          border: '3px solid #fff',
        }}>
          <IconHeart size={16} />
        </div>
        <div style={{
          position: 'absolute', top: 42, left: '50%', transform: 'translateX(-50%)',
          background: '#fff', padding: '4px 10px',
          borderRadius: 8, fontSize: 11, fontWeight: 600,
          boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap',
        }}>You</div>
      </div>

      {/* School pins */}
      {[
        { left: 270, top: 140, name: 'Hillside', dist: '1.2 mi', accent: 'var(--blue-500)' },
        { left: 350, top: 270, name: 'Riverside', dist: '2.8 mi', accent: 'var(--purple-500)' },
        { left: 180, top: 50, name: "St Catherine's", dist: '3.4 mi', accent: 'var(--pink-600)' },
      ].map((p, i) => (
        <div key={i} style={{ position: 'absolute', left: p.left, top: p.top, transform: 'translate(-50%, -50%)' }}>
          <div style={{
            width: 28, height: 36, borderRadius: '50% 50% 50% 0',
            background: p.accent, transform: 'rotate(-45deg)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid #fff',
          }}>
            <span style={{
              color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 12, transform: 'rotate(45deg)',
            }}>{i + 1}</span>
          </div>
        </div>
      ))}

      {/* Info card */}
      <div style={{
        position: 'absolute', bottom: 16, left: 16, right: 16,
        background: '#fff', borderRadius: 12, padding: '12px 14px',
        boxShadow: 'var(--shadow-md)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'var(--blue-50)', color: 'var(--blue-600)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <IconBus size={18} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>Bus 137 · 18 min</div>
          <div style={{ fontSize: 12, color: 'var(--neutral-500)' }}>To Hillside Academy from your postcode</div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--green-700)', fontWeight: 600 }}>Every 8 min</div>
      </div>
    </div>
  </div>
);

Object.assign(window, { HowItWorksPage });
