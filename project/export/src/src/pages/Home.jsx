// SCOPE — Home page

const HomePage = ({ navigate }) => {
  return (
    <React.Fragment>
      <HomeHero navigate={navigate} />
      <HomeLogosBar />
      <HomeHowItWorks navigate={navigate} />
      <HomeFeatures navigate={navigate} />
      <HomeQuizPreview navigate={navigate} />
      <HomeSchoolPreview navigate={navigate} />
      <HomeTestimonials />
      <HomeStats />
      <HomePrivacy navigate={navigate} />
      <HomeFAQ navigate={navigate} />
      <HomeCTA navigate={navigate} />
    </React.Fragment>
  );
};

// ─── Hero ────────────────────────────────────────────────────
const HomeHero = ({ navigate }) => {
  return (
    <section style={{
      padding: '96px 0 80px',
      background: `
        radial-gradient(ellipse 80% 60% at 90% 10%, rgba(148,120,192,0.10), transparent 60%),
        radial-gradient(ellipse 60% 50% at 10% 90%, rgba(123,174,143,0.10), transparent 60%),
        #fff
      `,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 48px',
        display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64, alignItems: 'center',
      }} className="hero-grid">

        <div className="fade-up">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--blue-50)', color: 'var(--blue-700)',
            fontSize: 13, fontWeight: 600, padding: '7px 14px',
            borderRadius: 999, marginBottom: 28,
            border: '1px solid var(--blue-100)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-500)' }}/>
            Now matching schools across England
          </div>

          <h1 style={{ fontSize: 64, marginBottom: 22 }}>
            Find the school<br/>
            <span style={{ color: 'var(--blue-500)' }}>that's right</span><br/>
            for you.
          </h1>

          <p style={{
            fontSize: 19, color: 'var(--neutral-700)',
            lineHeight: 1.6, maxWidth: 500, marginBottom: 36,
          }}>
            Scope matches you to secondary schools and sixth forms based on your interests,
            subjects, support needs and postcode. One quick quiz. A personalised ranked list.
          </p>

          <div style={{ display: 'flex', gap: 14, marginBottom: 44, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('quiz')}>
              Start the quiz <IconArrowRight size={16} />
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('how-it-works')}>
              <IconPlay size={14} /> See how it works
            </button>
          </div>

          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[
              { dot: 'var(--green-500)', text: 'Free for every student' },
              { dot: 'var(--purple-500)', text: 'Takes 5 minutes' },
              { dot: 'var(--blue-500)', text: 'Your data stays private' },
            ].map(p => (
              <div key={p.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--neutral-600)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.dot }}/>
                {p.text}
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup + floating cards */}
        <div style={{ position: 'relative' }} className="fade-up delay-2">
          <PhoneMockup>
            <PhoneResultsScreen />
          </PhoneMockup>

          <div style={{
            position: 'absolute', top: -10, right: -50,
            background: '#fff', borderRadius: 16, padding: '14px 18px',
            boxShadow: '0 10px 30px rgba(91,143,212,0.18)',
            animation: 'float 5s ease-in-out infinite',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: 'var(--green-50)', color: 'var(--green-600)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <IconCheckCircle size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--green-700)', lineHeight: 1 }}>94%</div>
                <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>Top match</div>
              </div>
            </div>
          </div>

          <div style={{
            position: 'absolute', bottom: 60, left: -70,
            background: '#fff', borderRadius: 16, padding: '14px 18px',
            boxShadow: '0 10px 30px rgba(91,143,212,0.18)',
            animation: 'float 6s ease-in-out infinite 1.5s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: 'var(--purple-50)', color: 'var(--purple-600)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <IconMapPin size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: 'var(--neutral-900)', lineHeight: 1.2 }}>1.2 mi away</div>
                <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>Bus 137 · 18 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; justify-items: center; text-align: center; }
          .hero-grid h1 { font-size: 44px !important; }
          .hero-grid > div:first-child > div:nth-child(2) { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
};

// ─── Phone results screen content ────────────────────────────
const PhoneResultsScreen = () => (
  <div style={{
    height: '100%', padding: '14px 16px 16px',
    background: 'var(--neutral-50)', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: 14,
    }}>
      <img src={window.__resources.logo} alt="Scope" style={{ height: 24, width: 'auto' }} />
      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        background: 'var(--blue-100)', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        color: 'var(--blue-700)', fontSize: 11, fontWeight: 700,
      }}>A</div>
    </div>
    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 6 }}>
      Your results
    </div>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 800, color: 'var(--neutral-900)', marginBottom: 4, lineHeight: 1.2 }}>
      Your top schools
    </div>
    <div style={{ fontSize: 11, color: 'var(--neutral-500)', marginBottom: 14 }}>
      Based on what you told us · 5 matches
    </div>
    {[
      { rank: 1, name: 'Hillside Academy', meta: 'State · 1.2 mi', match: 94, cls: 'match-hi', accent: 'var(--blue-500)' },
      { rank: 2, name: 'Riverside Secondary', meta: 'Academy · 2.8 mi', match: 87, cls: 'match-hi', accent: 'var(--purple-500)' },
      { rank: 3, name: "St Catherine's College", meta: 'Academy · 3.4 mi', match: 73, cls: 'match-mid', accent: 'var(--pink-500)' },
      { rank: 4, name: 'Oakwell School', meta: 'State · 4.1 mi', match: 68, cls: 'match-mid', accent: 'var(--green-500)' },
    ].map(s => (
      <div key={s.rank} style={{
        background: '#fff', borderRadius: 10, padding: '9px 11px',
        marginBottom: 7, display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 2px 8px rgba(91,143,212,0.08)',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: s.accent, color: '#fff',
          fontSize: 10, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>{s.rank}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: 'var(--neutral-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
          <div style={{ fontSize: 10, color: 'var(--neutral-500)' }}>{s.meta}</div>
        </div>
        <span className={`match-badge ${s.cls}`} style={{ fontSize: 10, padding: '2px 7px' }}>{s.match}%</span>
      </div>
    ))}
    <div style={{ flex: 1 }} />
    <button style={{
      width: '100%', background: 'var(--blue-500)', color: '#fff',
      border: 'none', borderRadius: 10, padding: 11,
      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, cursor: 'pointer',
    }}>See all 5 schools</button>
  </div>
);

// ─── Trust logos bar ─────────────────────────────────────────
const HomeLogosBar = () => (
  <div style={{ padding: '36px 0', background: '#fff', borderTop: '1px solid var(--neutral-100)', borderBottom: '1px solid var(--neutral-100)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{
        fontSize: 13, color: 'var(--neutral-500)',
        textAlign: 'center', marginBottom: 20, letterSpacing: '0.04em',
      }}>
        Partnered with local authorities, councils and parent groups across England
      </div>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: 56, flexWrap: 'wrap', opacity: 0.65,
      }}>
        {[
          'Lambeth Council', 'Wandsworth LA', 'Manchester EHC', 'Bristol Schools Partnership',
          'PTA UK', 'SENCO Forum',
        ].map(name => (
          <div key={name} style={{
            fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700,
            color: 'var(--neutral-500)',
            letterSpacing: '-0.01em',
          }}>{name}</div>
        ))}
      </div>
    </div>
  </div>
);

// ─── How it works ────────────────────────────────────────────
const HomeHowItWorks = ({ navigate }) => (
  <section style={{ padding: '112px 0', background: 'var(--neutral-50)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div className="section-eyebrow">How it works</div>
      <h2 className="section-heading">Three steps to your<br/>personalised school list.</h2>
      <p className="section-sub">
        No spreadsheets, no open evenings, no guesswork. Just a short quiz and a ranked list of schools that actually fit you.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24, marginTop: 56,
      }} className="hiw-grid">
        {[
          {
            n: 1,
            icon: <IconUser size={26} color="var(--blue-600)" />,
            bg: 'var(--blue-50)',
            title: 'Tell us about yourself',
            body: 'Postcode, subjects you love, the kind of school you want, any support needs. Five minutes, plain English questions.',
          },
          {
            n: 2,
            icon: <IconSparkles size={26} color="var(--purple-600)" />,
            bg: 'var(--purple-50)',
            title: 'We do the matching',
            body: 'Real travel distance, Ofsted, GCSE/A Level results, specialisms, SEN provision, admissions. All combined into your match.',
          },
          {
            n: 3,
            icon: <IconCheckCircle size={26} color="var(--green-600)" />,
            bg: 'var(--green-50)',
            title: 'Explore your matches',
            body: 'A ranked list with full reasoning. See why each school matched, save your favourites, compare side by side.',
          },
        ].map((s, i) => (
          <div key={s.n} className="card card-hover" style={{ padding: '32px 28px', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 20, right: 24,
              fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 900,
              color: 'var(--blue-50)', lineHeight: 1,
            }}>{s.n}</div>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: s.bg, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              marginBottom: 22,
            }}>{s.icon}</div>
            <h4 style={{ fontSize: 21, marginBottom: 10 }}>{s.title}</h4>
            <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{s.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <button className="btn btn-secondary btn-md" onClick={() => navigate('how-it-works')}>
          Learn how matching works <IconArrowRight size={14} />
        </button>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) { .hiw-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

// ─── Features ────────────────────────────────────────────────
const HomeFeatures = () => (
  <section style={{ padding: '112px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }} className="features-head">
        <div>
          <div className="section-eyebrow">Built for real students</div>
          <h2 className="section-heading">Not another generic search engine.</h2>
        </div>
        <p className="section-sub" style={{ maxWidth: 460 }}>
          Scope was built for the student making the decision, not for schools wanting to advertise. Every feature is designed around that.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18,
      }} className="feature-grid">
        {[
          {
            icon: <IconMapPin size={22} color="var(--blue-600)" />,
            bg: 'var(--blue-50)',
            title: 'Real distance matching',
            body: 'Enter your postcode. We calculate real travel routes, walking times and bus routes — not crow flies.',
          },
          {
            icon: <IconUsers size={22} color="var(--purple-600)" />,
            bg: 'var(--purple-50)',
            title: 'Built for every student',
            body: 'SEN, EHCPs, physical access needs, EAL — handled with care, never as an afterthought.',
          },
          {
            icon: <IconLock size={22} color="var(--green-600)" />,
            bg: 'var(--green-50)',
            title: 'Private by design',
            body: 'Article 9 GDPR protected. Never sold. Never shared with schools. Delete in one click.',
          },
          {
            icon: <IconZap size={22} color="var(--coral-600)" />,
            bg: 'var(--coral-50)',
            title: 'Always up to date',
            body: 'Ofsted ratings, admissions criteria, specialisms — all kept current. No outdated PDFs.',
          },
          {
            icon: <IconSliders size={22} color="var(--blue-600)" />,
            bg: 'var(--blue-50)',
            title: 'Tweak and re-match instantly',
            body: 'Change a single answer, see your list update in real time. Compare and reorder.',
          },
          {
            icon: <IconHeart size={22} color="var(--pink-700)" />,
            bg: 'var(--pink-50)',
            title: 'Save and share',
            body: 'Build a shortlist, share with parents in one tap, take notes after visits.',
          },
        ].map((f, i) => (
          <div key={i} className="card card-hover" style={{ padding: 28, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: f.bg, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{f.icon}</div>
            <div>
              <h4 style={{ fontSize: 17, marginBottom: 8 }}>{f.title}</h4>
              <p style={{ fontSize: 14.5, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .features-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        .feature-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

// ─── Quiz preview (interactive teaser) ───────────────────────
const HomeQuizPreview = ({ navigate }) => {
  const [pick, setPick] = useState('science');

  return (
    <section style={{
      padding: '112px 0',
      background: `linear-gradient(180deg, var(--blue-50) 0%, #fff 100%)`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'center',
        }} className="quiz-preview-grid">

          <div>
            <div className="section-eyebrow">Try a question</div>
            <h2 className="section-heading">Plain English questions.<br/>Plain English answers.</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              No jargon. No personality types. Just real questions about you and what you want from a school, and a personalised, ranked list at the end.
            </p>

            <div style={{ display: 'grid', gap: 14, maxWidth: 480 }}>
              {[
                { icon: <IconSparkles size={16} color="var(--purple-600)" />, t: 'No personality archetypes — we just look at what you actually like.' },
                { icon: <IconLock size={16} color="var(--green-600)" />, t: 'Skip any question. Nothing is required.' },
                { icon: <IconClock size={16} color="var(--blue-600)" />, t: 'Pause and come back whenever you like.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 10,
                    background: '#fff', boxShadow: 'var(--shadow-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{p.icon}</div>
                  <div style={{ fontSize: 15, color: 'var(--neutral-700)' }}>{p.t}</div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-lg" style={{ marginTop: 36 }} onClick={() => navigate('quiz')}>
              Try the quiz <IconArrowRight size={16} />
            </button>
          </div>

          <div className="card" style={{
            padding: 32, borderRadius: 24, boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--neutral-100)',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: 24,
            }}>
              <div style={{ fontSize: 13, color: 'var(--neutral-500)', fontWeight: 600 }}>Question 3 of 12</div>
              <div style={{ fontSize: 13, color: 'var(--neutral-500)' }}>Pause</div>
            </div>
            <div style={{ height: 6, background: 'var(--neutral-100)', borderRadius: 999, marginBottom: 28 }}>
              <div style={{ width: '25%', height: '100%', background: 'var(--blue-500)', borderRadius: 999 }} />
            </div>
            <h3 style={{ fontSize: 26, marginBottom: 8, lineHeight: 1.25 }}>What kind of lessons make you actually want to show up?</h3>
            <p style={{ fontSize: 14.5, color: 'var(--neutral-500)', marginBottom: 24 }}>Pick one. You can change this later.</p>

            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { id: 'science', label: 'Science labs, experiments, finding things out', icon: '🧪' },
                { id: 'arts', label: 'Drama, music, writing, making things', icon: '🎨' },
                { id: 'sport', label: 'Outside, moving, team games', icon: '⚽' },
                { id: 'people', label: 'Talking, debating, group projects', icon: '💬' },
              ].map(o => (
                <button
                  key={o.id}
                  onClick={() => setPick(o.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    border: `2px solid ${pick === o.id ? 'var(--blue-500)' : 'var(--neutral-200)'}`,
                    background: pick === o.id ? 'var(--blue-50)' : '#fff',
                    color: pick === o.id ? 'var(--blue-800)' : 'var(--neutral-900)',
                    borderRadius: 14,
                    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: pick === o.id ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <span style={{ fontSize: 22 }}>{o.icon}</span>
                  <span style={{ flex: 1 }}>{o.label}</span>
                  {pick === o.id && (
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'var(--blue-500)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconCheck size={14} stroke={3} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .quiz-preview-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

// ─── School preview ──────────────────────────────────────────
const HomeSchoolPreview = ({ navigate }) => (
  <section style={{ padding: '112px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div className="section-eyebrow">What you get</div>
        <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>A real school profile.<br/>Not a brochure.</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          We show you what actually matters — and what doesn't match — so you can make an informed choice.
        </p>
      </div>

      <SchoolPreviewCard school={SAMPLE_SCHOOLS[0]} onOpen={() => navigate('school/hillside')} />

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <button className="btn btn-secondary btn-md" onClick={() => navigate('school/hillside')}>
          See the full profile <IconArrowRight size={14} />
        </button>
      </div>
    </div>
  </section>
);

const SchoolPreviewCard = ({ school, onOpen }) => (
  <div className="card" style={{
    overflow: 'hidden', cursor: 'pointer',
    boxShadow: 'var(--shadow-lg)',
  }} onClick={onOpen}>
    <div style={{
      height: 200,
      background: `
        linear-gradient(135deg, rgba(91,143,212,0.85) 0%, rgba(91,143,212,0.50) 60%, rgba(123,174,143,0.4) 100%),
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 50%),
        var(--blue-700)
      `,
      position: 'relative', display: 'flex', alignItems: 'flex-end',
      padding: 28,
    }}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <span className="match-badge match-hi" style={{ fontSize: 13, padding: '6px 14px', background: '#fff' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-500)' }}/>94% match
        </span>
      </div>
      <div>
        <h3 style={{ color: '#fff', fontSize: 32, marginBottom: 6 }}>{school.name}</h3>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <span>{school.type}</span>
          <span>·</span>
          <span>{school.location}</span>
          <span>·</span>
          <span>{school.pupils} pupils</span>
        </div>
      </div>
    </div>

    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }} className="school-preview-body">
      <div>
        <h4 style={{ fontSize: 17, marginBottom: 14 }}>Why we matched you</h4>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { icon: <IconCheck size={14} stroke={3} color="var(--green-700)" />, bg: 'var(--green-50)', t: 'Strong science programme — matches your love of practical experiments' },
            { icon: <IconCheck size={14} stroke={3} color="var(--green-700)" />, bg: 'var(--green-50)', t: 'On-site sixth form so you can stay on for A Levels' },
            { icon: <IconCheck size={14} stroke={3} color="var(--green-700)" />, bg: 'var(--green-50)', t: 'SENCO + speech & language support — matches your support needs' },
            { icon: <IconInfo size={14} stroke={3} color="var(--neutral-500)" />, bg: 'var(--neutral-100)', t: 'No specific languages provision beyond French — you flagged Spanish as preferred' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 24, height: 24, borderRadius: 8,
                background: p.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{p.icon}</div>
              <div style={{ fontSize: 14.5, color: 'var(--neutral-800)' }}>{p.t}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ fontSize: 17, marginBottom: 14 }}>Profile snapshot</h4>
        <div style={{ display: 'grid', gap: 14 }}>
          <Bar label="Science & STEM" value={92} color="var(--blue-500)" />
          <Bar label="Maths" value={88} color="var(--blue-500)" />
          <Bar label="Arts" value={74} color="var(--purple-500)" />
          <Bar label="Sport" value={81} color="var(--green-500)" />
          <Bar label="SEN support" value={90} color="var(--pink-600)" />
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 800px) {
        .school-preview-body { grid-template-columns: 1fr !important; gap: 24px !important; }
      }
    `}</style>
  </div>
);

// ─── Testimonials ────────────────────────────────────────────
const HomeTestimonials = () => (
  <section style={{ padding: '112px 0', background: 'var(--blue-900)', color: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{ marginBottom: 56 }}>
        <div className="section-eyebrow" style={{ color: 'var(--blue-200)' }}>Real students. Real stories.</div>
        <h2 style={{ color: '#fff', fontSize: 44, lineHeight: 1.12, maxWidth: 760 }}>
          We built Scope after watching too many<br/>students settle for the wrong school.
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
      }} className="testimonial-grid">
        {TESTIMONIALS.map((t, i) => {
          const accent = {
            blue: 'var(--blue-300)', green: 'var(--green-300)',
            purple: 'var(--purple-300)', coral: 'var(--coral-300)',
          }[t.accent];
          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 32,
              backdropFilter: 'blur(8px)',
            }}>
              <IconQuote size={28} color={accent} />
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 22,
                fontWeight: 600, lineHeight: 1.4, color: '#fff',
                marginTop: 18, marginBottom: 22,
              }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: accent, color: 'var(--blue-900)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16,
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <style>{`
      @media (max-width: 800px) { .testimonial-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

// ─── Stats ───────────────────────────────────────────────────
const HomeStats = () => (
  <section style={{ padding: '80px 0', background: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 32, textAlign: 'center',
      }} className="stats-grid">
        {STATS.map((s, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 900,
              color: ['var(--blue-500)', 'var(--green-500)', 'var(--purple-500)', 'var(--coral-500)'][i],
              lineHeight: 1, marginBottom: 12,
              letterSpacing: '-0.02em',
            }}>{s.value}</div>
            <div style={{ fontSize: 14.5, color: 'var(--neutral-600)', maxWidth: 220, margin: '0 auto', lineHeight: 1.45 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 800px) { .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
    `}</style>
  </section>
);

// ─── Privacy band ────────────────────────────────────────────
const HomePrivacy = ({ navigate }) => (
  <section style={{
    padding: '80px 0',
    background: `linear-gradient(135deg, var(--purple-50) 0%, var(--pink-50) 100%)`,
    borderTop: '1px solid var(--purple-100)',
    borderBottom: '1px solid var(--purple-100)',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 60, alignItems: 'center',
      }} className="privacy-grid">
        <div>
          <div className="section-eyebrow" style={{ color: 'var(--purple-700)' }}>Privacy & GDPR</div>
          <h2 className="section-heading">Your data is yours.<br/>We're just guardians.</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            We collect the bare minimum, protect SEN data under Article 9 of UK GDPR, and never sell or share with schools. You can delete everything at any time, in one click.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-outline btn-md" onClick={() => navigate('privacy')}>
              Read our privacy policy
            </button>
            <button className="btn btn-ghost btn-md" style={{ background: 'rgba(255,255,255,0.6)' }} onClick={() => navigate('faq')}>
              GDPR questions
            </button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { icon: <IconShieldCheck size={20} color="var(--purple-600)" />, t: 'GDPR compliant', s: 'Article 9 protection for SEN data' },
            { icon: <IconLock size={20} color="var(--purple-600)" />, t: 'Never sold or shared', s: 'Schools cannot see your data, ever' },
            { icon: <IconUser size={20} color="var(--purple-600)" />, t: 'You stay anonymous', s: 'We only ask for your postcode area' },
            { icon: <IconClose size={20} color="var(--purple-600)" />, t: 'Delete in one click', s: 'Account + all data gone in 30 days' },
          ].map((p, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14,
              padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--purple-50)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{p.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>{p.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) { .privacy-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
    `}</style>
  </section>
);

// ─── FAQ teaser ──────────────────────────────────────────────
const HomeFAQ = ({ navigate }) => {
  const [open, setOpen] = useState(0);
  const items = FAQS[0].items.concat(FAQS[2].items).slice(0, 5);

  return (
    <section style={{ padding: '112px 0', background: 'var(--neutral-50)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>Things people ask us.</h2>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {items.map((f, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  padding: '22px 26px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  textAlign: 'left', cursor: 'pointer',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--neutral-900)' }}>{f.q}</span>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: open === i ? 'var(--blue-500)' : 'var(--neutral-100)',
                  color: open === i ? '#fff' : 'var(--neutral-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 200ms',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  <IconPlus size={16} stroke={2.5} />
                </div>
              </button>
              {open === i && (
                <div style={{ padding: '0 26px 26px', color: 'var(--neutral-700)', lineHeight: 1.65, fontSize: 15 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn-secondary btn-md" onClick={() => navigate('faq')}>
            See all questions <IconArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ───────────────────────────────────────────────
const HomeCTA = ({ navigate }) => (
  <section style={{
    padding: '120px 0',
    background: `
      radial-gradient(ellipse 60% 40% at 50% 0%, rgba(91,143,212,0.20), transparent 60%),
      linear-gradient(180deg, var(--blue-900) 0%, #0a1326 100%)
    `,
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 48px', textAlign: 'center', position: 'relative' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(255,255,255,0.06)',
        color: 'var(--blue-200)',
        fontSize: 13, fontWeight: 600,
        padding: '6px 14px', borderRadius: 999,
        marginBottom: 24, border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-400)' }}/>
        Free forever for students in England
      </div>
      <h2 style={{
        fontSize: 56, color: '#fff', lineHeight: 1.08,
        fontWeight: 900, marginBottom: 20,
        letterSpacing: '-0.025em',
      }}>
        Your school list<br/>is waiting.
      </h2>
      <p style={{
        fontSize: 19, color: 'rgba(255,255,255,0.7)',
        marginBottom: 40, lineHeight: 1.55,
      }}>
        Start the quiz, get matched, and explore your results in under five minutes.
        Free for every student in England.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button className="btn btn-white btn-lg" onClick={() => navigate('quiz')}>
          Start the quiz <IconArrowRight size={16} />
        </button>
        <button className="btn btn-outline-white btn-lg" onClick={() => navigate('how-it-works')}>
          How it works
        </button>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomePage });
