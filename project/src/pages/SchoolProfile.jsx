// SCOPE — School Profile page

const SchoolProfilePage = ({ navigate, schoolId }) => {
  const school = SAMPLE_SCHOOLS.find(s => s.id === schoolId) || SAMPLE_SCHOOLS[0];
  const [tab, setTab] = useState('overview');
  const [saved, setSaved] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Derived contact details for this school — in production these come from the schools API.
  const contact = {
    phone: '020 7946 0' + (100 + (school.id?.charCodeAt(0) || 65) % 900).toString(),
    email: 'admissions@' + (school.name || 'school').toLowerCase().replace(/[^a-z]/g, '').slice(0, 14) + '.sch.uk',
    address: school.location + ', London',
    hours: 'Mon–Fri, 8:30am – 4:30pm',
    admissionsLead: school.headTeacher.replace(/^(Mr|Mrs|Ms|Dr)\.? /, '') + ' (Admissions Office)',
  };

  const accentColor = `var(--${school.accent}-500)`;
  const accentDark = `var(--${school.accent}-700)`;
  const accentBg = `var(--${school.accent}-50)`;

  return (
    <React.Fragment>
      {/* Hero banner */}
      <section style={{
        background: `
          linear-gradient(135deg, ${accentColor} 0%, ${accentDark} 100%)
        `,
        padding: '36px 0 0',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 500, height: 500,
          borderRadius: '50%', background: 'rgba(255,255,255,0.06)',
        }}/>
        <div style={{
          position: 'absolute', bottom: -150, left: -100, width: 350, height: 350,
          borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
        }}/>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ marginBottom: 20 }}>
            <button onClick={() => navigate('quiz')} style={{
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', padding: '6px 14px', borderRadius: 999,
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <IconArrowLeft size={13} /> Back to your matches
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, paddingBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                  {school.type}
                </span>
                <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                  Ofsted {school.ofsted}
                </span>
              </div>
              <h1 style={{ color: '#fff', fontSize: 56, marginBottom: 12, lineHeight: 1.05 }}>{school.name}</h1>
              <div style={{ display: 'flex', gap: 20, color: 'rgba(255,255,255,0.85)', flexWrap: 'wrap', fontSize: 15 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <IconMapPin size={15} /> {school.location} · {school.distance}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <IconUsers size={15} /> {school.pupils} pupils
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <IconCalendar size={15} /> Ages {school.ageRange}
                </span>
              </div>
            </div>

            {/* Big match score */}
            <div style={{
              background: '#fff', color: 'var(--neutral-900)',
              borderRadius: 18, padding: '20px 28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', gap: 18,
              minWidth: 280,
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: `conic-gradient(${accentColor} ${school.match * 3.6}deg, var(--neutral-100) 0deg)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: 6, borderRadius: '50%',
                  background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900, color: accentDark,
                }}>{school.match}%</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Your match</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, marginTop: 2 }}>
                  {school.match >= 85 ? 'Excellent fit' : school.match >= 70 ? 'Strong fit' : school.match >= 60 ? 'Good fit' : 'Possible fit'}
                </div>
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div style={{
            background: '#fff',
            borderRadius: '16px 16px 0 0',
            padding: '14px 22px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 14, flexWrap: 'wrap',
            boxShadow: '0 -2px 20px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {school.specialisms.map(s => (
                <span key={s} className={`chip chip-${school.accent}`}>{s}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                className={saved ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                onClick={() => setSaved(!saved)}
              >
                <IconBookmark size={14} /> {saved ? 'Saved' : 'Save'}
              </button>
              <button className="btn btn-primary btn-sm" onClick={() => setContactOpen(true)} style={{ background: accentDark }}>
                <IconMail size={14} /> Contact school
              </button>
              <button className="btn btn-outline btn-sm"><IconExternalLink size={14} /> School website</button>
              <button className="btn btn-outline btn-sm"><IconCalendar size={14} /> Open evenings</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div style={{
        position: 'sticky', top: 72, zIndex: 50,
        background: '#fff', borderBottom: '1px solid var(--neutral-100)',
      }}>
        <div className="container" style={{ display: 'flex', gap: 4, overflowX: 'auto' }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'match', label: 'Why we matched' },
            { id: 'academics', label: 'Academics' },
            { id: 'sen', label: 'Support & SEN' },
            { id: 'transport', label: 'Getting there' },
            { id: 'admissions', label: 'Admissions' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: '18px 16px',
              background: 'transparent', border: 'none',
              fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 600,
              color: tab === t.id ? accentDark : 'var(--neutral-600)',
              cursor: 'pointer',
              borderBottom: `2px solid ${tab === t.id ? accentColor : 'transparent'}`,
              whiteSpace: 'nowrap',
              transition: 'all 150ms',
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <Section pad="48px 0 96px">
        <div className="container">
          {tab === 'overview' && <OverviewTab school={school} navigate={navigate} />}
          {tab === 'match' && <MatchTab school={school} accentColor={accentColor} accentBg={accentBg} />}
          {tab === 'academics' && <AcademicsTab school={school} />}
          {tab === 'sen' && <SenTab school={school} />}
          {tab === 'transport' && <TransportTab school={school} />}
          {tab === 'admissions' && <AdmissionsTab school={school} />}
        </div>
      </Section>

      {/* Contact modal */}
      {contactOpen && (
        <ContactSchoolModal
          school={school}
          contact={contact}
          accentColor={accentColor}
          accentDark={accentDark}
          accentBg={accentBg}
          onClose={() => setContactOpen(false)}
        />
      )}

      {/* Similar schools */}
      <Section pad="0 0 96px">
        <div className="container">
          <h3 style={{ fontSize: 26, marginBottom: 24 }}>Similar schools you might like</h3>
          <div style={{ display: 'grid', gap: 14 }}>
            {SAMPLE_SCHOOLS.filter(s => s.id !== school.id).slice(0, 3).map((s, i) => (
              <SchoolRow
                key={s.id}
                school={s}
                onClick={() => navigate(`school/${s.id}`)}
              />
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

// ─── Overview Tab ────────────────────────────────────────────
const OverviewTab = ({ school, navigate }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '1.6fr 1fr',
    gap: 36,
  }} className="profile-grid">
    <div style={{ display: 'grid', gap: 28 }}>
      <div className="card card-pad">
        <h3 style={{ fontSize: 22, marginBottom: 12 }}>About the school</h3>
        <p style={{ fontSize: 16, color: 'var(--neutral-700)', lineHeight: 1.7, marginBottom: 16 }}>
          {school.shortBio} {school.name} is a {school.type.toLowerCase()} of {school.pupils} pupils in {school.location}, serving ages {school.ageRange}. The school is led by {school.headTeacher} and has an Ofsted rating of {school.ofsted}.
        </p>
        <p style={{ fontSize: 16, color: 'var(--neutral-700)', lineHeight: 1.7 }}>
          Specialisms include {school.specialisms.join(', ')}. Annual intake is approximately {school.intake}. Pastoral support is anchored by {school.sen.toLowerCase()}.
        </p>
      </div>

      <div className="card card-pad">
        <h3 style={{ fontSize: 22, marginBottom: 18 }}>Profile snapshot</h3>
        <div style={{ display: 'grid', gap: 14 }}>
          <Bar label="Science & STEM" value={school.snapshot.science} color="var(--blue-500)" />
          <Bar label="Maths" value={school.snapshot.maths} color="var(--blue-500)" />
          <Bar label="Arts & Drama" value={school.snapshot.arts} color="var(--purple-500)" />
          <Bar label="Sport" value={school.snapshot.sport} color="var(--green-500)" />
          <Bar label="SEN support" value={school.snapshot.support} color="var(--pink-600)" />
        </div>
      </div>

      <div className="card card-pad">
        <h3 style={{ fontSize: 22, marginBottom: 18 }}>A note from the head</h3>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: `var(--${school.accent}-100)`, color: `var(--${school.accent}-700)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
            flexShrink: 0,
          }}>{school.headTeacher.split(' ').slice(-1)[0][0]}</div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, lineHeight: 1.5, color: 'var(--neutral-900)', marginBottom: 12 }}>
              "We believe every student deserves to leave us not just qualified, but curious, confident, and properly known. We're small enough that no one slips through, and ambitious enough that no one feels held back."
            </p>
            <div style={{ fontSize: 14, color: 'var(--neutral-600)' }}>
              <strong style={{ color: 'var(--neutral-900)' }}>{school.headTeacher}</strong> — Head Teacher
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sidebar */}
    <div style={{ display: 'grid', gap: 20, alignSelf: 'start' }}>
      <div className="card card-pad">
        <h4 style={{ fontSize: 16, marginBottom: 16 }}>Quick facts</h4>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { l: 'Type', v: school.type },
            { l: 'Pupils', v: school.pupils.toLocaleString() },
            { l: 'Ages', v: school.ageRange },
            { l: 'Ofsted', v: school.ofsted },
            { l: 'Annual intake', v: school.intake },
            { l: 'Distance', v: school.distance },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, paddingBottom: 10, borderBottom: i < 5 ? '1px solid var(--neutral-100)' : 'none' }}>
              <span style={{ color: 'var(--neutral-500)' }}>{f.l}</span>
              <span style={{ fontWeight: 600, color: 'var(--neutral-900)' }}>{f.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-pad" style={{ background: 'var(--blue-50)', border: 0 }}>
        <h4 style={{ fontSize: 16, marginBottom: 8 }}>Open evenings</h4>
        <p style={{ fontSize: 13, color: 'var(--neutral-700)', marginBottom: 14 }}>
          Visit before applying. The school is hosting:
        </p>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            { d: 'Thu 24 Sep', t: '6 — 8pm', note: 'Main open evening' },
            { d: 'Sat 11 Oct', t: '10am — 12', note: 'Saturday tour' },
            { d: 'Wed 22 Oct', t: '4 — 5pm', note: 'Sixth form only' },
          ].map((e, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 10, padding: '10px 12px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{e.d}</div>
                <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>{e.t} · {e.note}</div>
              </div>
              <IconChevronRight size={16} color="var(--neutral-400)" />
            </div>
          ))}
        </div>
      </div>

      <div className="card card-pad">
        <h4 style={{ fontSize: 16, marginBottom: 12 }}>Notes</h4>
        <textarea
          placeholder="Add notes after your visit..."
          style={{
            width: '100%', minHeight: 120, resize: 'vertical',
            padding: 12, border: '1px solid var(--neutral-200)',
            borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 14,
            outline: 'none',
          }}
        />
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) { .profile-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </div>
);

// ─── Match Tab ───────────────────────────────────────────────
const MatchTab = ({ school, accentColor, accentBg }) => (
  <div style={{ display: 'grid', gap: 24, maxWidth: 880 }}>
    <div className="card card-pad" style={{ background: accentBg, border: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: accentColor,
        }}>{school.match}%</div>
        <div>
          <h3 style={{ fontSize: 24, marginBottom: 4 }}>
            {school.match >= 85 ? 'Excellent match' : school.match >= 70 ? 'Strong match' : 'Good match'}
          </h3>
          <p style={{ fontSize: 14, color: 'var(--neutral-700)' }}>
            Based on the answers you gave in the quiz. You can change your answers anytime — the match recalculates instantly.
          </p>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="match-tab-grid">
      <div>
        <h4 style={{ fontSize: 18, marginBottom: 14, color: 'var(--green-700)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconCheckCircle size={18} /> What pushed it up
        </h4>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { f: 'Real distance', s: '+12', body: `Only ${school.distance} — well within your range` },
            { f: school.specialisms[0] + ' specialism', s: '+18', body: 'Matched against your favourite subjects' },
            { f: 'Support provision', s: '+10', body: school.sen },
            { f: 'School character', s: '+6', body: 'Ofsted ' + school.ofsted + ', strong pastoral care' },
          ].map((p, i) => (
            <div key={i} style={{
              padding: 14, borderRadius: 12,
              background: 'var(--green-50)', border: '1px solid var(--green-100)',
              display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: 'var(--green-700)', minWidth: 36 }}>{p.s}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{p.f}</div>
                <div style={{ fontSize: 13, color: 'var(--neutral-700)' }}>{p.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ fontSize: 18, marginBottom: 14, color: 'var(--neutral-700)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconInfo size={18} /> What counted against
        </h4>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { f: 'Catchment area', s: '–4', body: "You're outside the priority catchment zone" },
            { f: 'Subject coverage', s: '–3', body: 'A couple of subjects you flagged are not offered here' },
            { f: 'Class sizes', s: '–2', body: 'Slightly larger than average for your area' },
          ].map((p, i) => (
            <div key={i} style={{
              padding: 14, borderRadius: 12,
              background: 'var(--neutral-50)', border: '1px solid var(--neutral-100)',
              display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: 'var(--neutral-600)', minWidth: 36 }}>{p.s}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{p.f}</div>
                <div style={{ fontSize: 13, color: 'var(--neutral-700)' }}>{p.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 800px) { .match-tab-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </div>
);

// ─── Academics ──────────────────────────────────────────────
const AcademicsTab = ({ school }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 28 }} className="profile-grid">
    <div className="card card-pad">
      <h3 style={{ fontSize: 22, marginBottom: 18 }}>Results & progress</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
        {[
          { l: 'Attainment 8', v: '52.4', sub: 'Borough avg 48.1' },
          { l: 'Progress 8', v: '+0.32', sub: 'Above average' },
          { l: 'GCSE 9-7', v: '38%', sub: '+11pts since 2022' },
        ].map((s, i) => (
          <div key={i} style={{ padding: 18, background: 'var(--neutral-50)', borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--neutral-500)', fontWeight: 600 }}>{s.l}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 900, color: 'var(--neutral-900)', margin: '4px 0' }}>{s.v}</div>
            <div style={{ fontSize: 12, color: 'var(--green-700)', fontWeight: 600 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <h4 style={{ fontSize: 17, marginBottom: 14 }}>GCSE subjects offered</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {[
          'English Lang', 'English Lit', 'Maths', 'Combined Science', 'Triple Science',
          'French', 'Spanish', 'History', 'Geography', 'RE',
          'Art', 'Music', 'Drama', 'Computing', 'Design Tech', 'Food Tech', 'PE', 'Business',
        ].map(s => (
          <span key={s} className="chip" style={{ fontSize: 12, padding: '4px 10px' }}>{s}</span>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <h4 style={{ fontSize: 17, marginBottom: 14 }}>A Level subjects (sixth form)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[
            'Maths', 'Further Maths', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
            'English Literature', 'History', 'Geography', 'Economics', 'Psychology',
            'Art', 'Music', 'Drama', 'French', 'Spanish',
          ].map(s => (
            <span key={s} className="chip chip-blue" style={{ fontSize: 12, padding: '4px 10px' }}>{s}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="card card-pad">
      <h4 style={{ fontSize: 17, marginBottom: 14 }}>Ofsted summary</h4>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, color: 'var(--neutral-500)' }}>Most recent inspection</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--green-700)' }}>{school.ofsted}</div>
        <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>March 2024</div>
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        {[
          { l: 'Quality of education', v: 'Outstanding' },
          { l: 'Behaviour & attitudes', v: 'Outstanding' },
          { l: 'Personal development', v: 'Outstanding' },
          { l: 'Leadership & management', v: 'Outstanding' },
          { l: 'Sixth form', v: 'Outstanding' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: 'var(--neutral-700)' }}>{r.l}</span>
            <span style={{ fontWeight: 600, color: 'var(--green-700)' }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── SEN tab ─────────────────────────────────────────────────
const SenTab = ({ school }) => (
  <div className="card card-pad" style={{ maxWidth: 880 }}>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: 'var(--pink-50)', color: 'var(--pink-700)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <IconAccessibility size={22} />
      </div>
      <div>
        <h3 style={{ fontSize: 22 }}>Support & SEN provision</h3>
        <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>Sourced from EHCP returns and SENCO survey</div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }} className="profile-grid">
      <div>
        <h4 style={{ fontSize: 16, marginBottom: 12 }}>What's available</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
          {[
            'On-site SENCO + full-time deputy',
            'Speech & language therapy (weekly)',
            'EAL support — bilingual support staff',
            'Physical access — fully step-free building',
            'Learning support unit for SEMH needs',
            'EHCP review meetings on site',
          ].map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--neutral-800)' }}>
              <span style={{ flexShrink: 0, marginTop: 3, color: 'var(--green-600)' }}>
                <IconCheck size={13} stroke={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: 16, marginBottom: 12 }}>By the numbers</h4>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { l: 'Pupils with EHCPs', v: '4.2%', sub: 'Borough avg 2.8%' },
            { l: 'SEN support pupils', v: '12.5%', sub: 'Borough avg 11.1%' },
            { l: 'EAL pupils', v: '22%', sub: 'Borough avg 26%' },
          ].map((s, i) => (
            <div key={i} style={{ padding: 14, background: 'var(--neutral-50)', borderRadius: 10 }}>
              <div style={{ fontSize: 12, color: 'var(--neutral-500)', fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--neutral-900)', marginTop: 2 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: 'var(--neutral-500)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ padding: 18, background: 'var(--purple-50)', borderRadius: 12, display: 'flex', gap: 14, alignItems: 'center' }}>
      <IconLock size={20} color="var(--purple-600)" />
      <div style={{ fontSize: 14, color: 'var(--purple-900)' }}>
        Your support needs answers are protected under Article 9 GDPR and are <strong>never shared with this school</strong>. The school only sees its own provision data.
      </div>
    </div>
  </div>
);

// ─── Transport tab ──────────────────────────────────────────
const TransportTab = ({ school }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="profile-grid">
    <div className="card card-pad">
      <h3 style={{ fontSize: 22, marginBottom: 18 }}>Getting to {school.name}</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { icon: <IconBus size={22} color="var(--blue-600)" />, route: 'Bus 137', time: '18 min', detail: 'Every 8 mins · door-to-gate' },
          { icon: <IconGlobe size={22} color="var(--purple-600)" />, route: 'Tube + walk', time: '24 min', detail: 'Northern line · Clapham North' },
          { icon: <IconMapPin size={22} color="var(--green-600)" />, route: 'Walking', time: '32 min', detail: 'Quietest route via Battersea Park' },
          { icon: <IconHeart size={22} color="var(--coral-600)" />, route: 'Cycling', time: '14 min', detail: 'Cycle path most of the way' },
        ].map((r, i) => (
          <div key={i} style={{
            padding: 14, border: '1px solid var(--neutral-100)', borderRadius: 12,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: 'var(--neutral-50)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{r.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{r.route} · {r.time}</div>
              <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>{r.detail}</div>
            </div>
            <IconChevronRight size={18} color="var(--neutral-400)" />
          </div>
        ))}
      </div>
    </div>
    <DistanceMockMap />
  </div>
);

// ─── Admissions tab ─────────────────────────────────────────
const AdmissionsTab = ({ school }) => (
  <div className="card card-pad" style={{ maxWidth: 760 }}>
    <h3 style={{ fontSize: 22, marginBottom: 14 }}>Admissions criteria</h3>
    <p style={{ fontSize: 15, color: 'var(--neutral-700)', marginBottom: 24, lineHeight: 1.6 }}>
      In order. Higher-priority categories are filled first; remaining places go to subsequent categories. Distance is used as a tiebreaker.
    </p>
    <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
      {[
        { title: 'Looked-after children', body: 'And previously looked-after children, as defined in the Admissions Code.' },
        { title: 'Children with EHCPs naming this school', body: 'Must be named on the plan.' },
        { title: 'Siblings of current pupils', body: 'Sibling defined as living at the same address.' },
        { title: 'Distance from school', body: 'Measured by safe walking route, not crow flies.' },
      ].map((c, i) => (
        <li key={i} style={{
          display: 'flex', gap: 14, padding: 16,
          background: 'var(--neutral-50)', borderRadius: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: '#fff', color: 'var(--blue-700)',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            border: '1px solid var(--blue-100)',
          }}>{i + 1}</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
            <div style={{ fontSize: 13.5, color: 'var(--neutral-700)' }}>{c.body}</div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

// ─── Contact school modal ───────────────────────────────────
const ContactSchoolModal = ({ school, contact, accentColor, accentDark, accentBg, onClose }) => {
  const [role, setRole] = useState('parent');
  const [topic, setTopic] = useState('admissions');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [copyMe, setCopyMe] = useState(true);
  const [sent, setSent] = useState(false);

  // Close on Esc, lock scroll while open
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const topics = [
    { id: 'admissions', label: 'Admissions & applications' },
    { id: 'open-evening', label: 'Open evening or visit' },
    { id: 'sen', label: 'SEN & support enquiry' },
    { id: 'sixth-form', label: 'Sixth form entry' },
    { id: 'transport', label: 'Travel & transport' },
    { id: 'other', label: 'Something else' },
  ];

  const messageDefaults = {
    'admissions': `Hello, I'd like to ask about applying to ${school.name} for the next intake. Could you confirm the deadlines and the supplementary forms required?`,
    'open-evening': `Hello, I'd like to attend an upcoming open evening at ${school.name}. Could you let me know which dates still have spaces?`,
    'sen': `Hello, I'd like to ask about the SEN provision at ${school.name} and how I'd discuss specific support needs ahead of an application.`,
    'sixth-form': `Hello, I'm interested in joining the sixth form at ${school.name}. Could you tell me about the entry requirements and subject combinations?`,
    'transport': `Hello, I'd like to ask about safe travel routes and any school transport arrangements for ${school.name}.`,
    'other': '',
  };

  const canSend = name.trim() && email.trim() && message.trim().length >= 10;

  const handleSend = (e) => {
    e.preventDefault();
    if (!canSend) return;
    setSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Contact ${school.name}`}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(19,29,56,0.55)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'contactFadeIn 180ms ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 880, maxHeight: 'calc(100vh - 48px)',
          background: '#fff',
          borderRadius: 'var(--radius-xl, 24px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
          animation: 'contactPopIn 220ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid var(--neutral-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>
              Contact school
            </div>
            <h3 style={{ fontSize: 22, margin: 0 }}>{school.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid var(--neutral-200)',
              background: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--neutral-600)',
              transition: 'all 150ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--neutral-50)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
          >
            <IconClose size={16} />
          </button>
        </div>

        {/* Body */}
        <div style={{
          display: 'grid', gridTemplateColumns: '300px 1fr',
          overflow: 'auto', flex: 1,
        }} className="contact-modal-grid">
          {/* LEFT — school's contact details */}
          <aside style={{
            background: accentBg,
            padding: 28, display: 'flex', flexDirection: 'column', gap: 20,
            borderRight: '1px solid var(--neutral-100)',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: accentDark, marginBottom: 4 }}>
                Direct contact
              </div>
              <p style={{ fontSize: 13, color: 'var(--neutral-700)', lineHeight: 1.5 }}>
                You can also reach the school directly using any of these.
              </p>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              <ContactRow icon={<IconPhone size={16} />} label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, '')}`} accentDark={accentDark} />
              <ContactRow icon={<IconMail size={16} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} accentDark={accentDark} />
              <ContactRow icon={<IconMapPin size={16} />} label="Address" value={contact.address} accentDark={accentDark} />
              <ContactRow icon={<IconClock size={16} />} label="Office hours" value={contact.hours} accentDark={accentDark} />
              <ContactRow icon={<IconUser size={16} />} label="Admissions lead" value={contact.admissionsLead} accentDark={accentDark} />
            </div>

            <div style={{
              marginTop: 'auto', padding: 14,
              background: 'rgba(255,255,255,0.6)',
              borderRadius: 12,
              display: 'flex', gap: 10, alignItems: 'flex-start',
              fontSize: 12, color: 'var(--neutral-700)', lineHeight: 1.5,
            }}>
              <div style={{ color: accentDark, flexShrink: 0, marginTop: 1 }}><IconLock size={14} /></div>
              <span>Scope passes your enquiry to the school. We don't share your quiz answers or SEN data.</span>
            </div>
          </aside>

          {/* RIGHT — form OR confirmation */}
          <div style={{ padding: 28, overflow: 'auto' }}>
            {!sent ? (
              <form onSubmit={handleSend} style={{ display: 'grid', gap: 18 }}>
                <div>
                  <Label>I'm a…</Label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                    {[
                      { id: 'parent', label: 'Parent / guardian' },
                      { id: 'student', label: 'Student' },
                      { id: 'other', label: 'Someone else' },
                    ].map(r => (
                      <button
                        key={r.id} type="button"
                        onClick={() => setRole(r.id)}
                        style={{
                          padding: '11px 8px',
                          borderRadius: 10,
                          border: `2px solid ${role === r.id ? accentColor : 'var(--neutral-200)'}`,
                          background: role === r.id ? accentBg : '#fff',
                          color: role === r.id ? accentDark : 'var(--neutral-700)',
                          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 150ms',
                        }}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>What's your enquiry about?</Label>
                  <select
                    value={topic}
                    onChange={(e) => {
                      const t = e.target.value;
                      setTopic(t);
                      // Prefill message if user hasn't started typing
                      if (!message || Object.values(messageDefaults).includes(message)) {
                        setMessage(messageDefaults[t] || '');
                      }
                    }}
                    style={fieldStyle()}
                  >
                    {topics.map(t => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="contact-name-row">
                  <div>
                    <Label>Your name</Label>
                    <input
                      type="text" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder={role === 'student' ? 'Alex Patel' : 'Sam Patel'}
                      style={fieldStyle()} required
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      style={fieldStyle()} required
                    />
                  </div>
                </div>

                <div>
                  <Label optional>Phone</Label>
                  <input
                    type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="07…"
                    style={fieldStyle()}
                  />
                </div>

                <div>
                  <Label>Message</Label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a short note to the school…"
                    rows={5}
                    style={{ ...fieldStyle(), resize: 'vertical', minHeight: 120, lineHeight: 1.55, fontFamily: 'var(--font-body)' }}
                    required
                  />
                  <div style={{ fontSize: 12, color: 'var(--neutral-500)', marginTop: 6 }}>
                    {message.length} / 1000 characters
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--neutral-700)', cursor: 'pointer' }}>
                  <input
                    type="checkbox" checked={copyMe} onChange={(e) => setCopyMe(e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: accentDark, cursor: 'pointer' }}
                  />
                  Send me a copy of this enquiry
                </label>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: 12, paddingTop: 6, flexWrap: 'wrap',
                }}>
                  <div style={{ fontSize: 12, color: 'var(--neutral-500)', maxWidth: 320 }}>
                    By sending, you agree to Scope sharing your message and contact details with {school.name}.
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button type="button" onClick={onClose} className="btn btn-outline btn-sm">Cancel</button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!canSend}
                      style={{
                        background: canSend ? accentDark : 'var(--neutral-300)',
                        cursor: canSend ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Send enquiry <IconArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, paddingTop: 20 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'var(--green-50)', color: 'var(--green-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  animation: 'contactPopIn 320ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}>
                  <IconCheck size={32} stroke={3} />
                </div>
                <h3 style={{ fontSize: 26, margin: 0 }}>Your enquiry's on its way</h3>
                <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.6, margin: 0 }}>
                  We've sent your message to <strong>{school.name}</strong> via <strong>{contact.email}</strong>. Schools usually reply within 2–3 working days.
                  {copyMe && <> A copy is also in your inbox at <strong>{email}</strong>.</>}
                </p>
                <div style={{
                  padding: 14, background: 'var(--blue-50)', borderRadius: 12,
                  fontSize: 13, color: 'var(--neutral-700)', lineHeight: 1.55,
                }}>
                  <strong style={{ color: 'var(--neutral-900)' }}>What if I don't hear back?</strong><br/>
                  Drop the school a quick call on <a href={`tel:${contact.phone.replace(/\s/g, '')}`} style={{ color: accentDark, fontWeight: 600 }}>{contact.phone}</a>. Open evenings sometimes hold replies up.
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                  <button onClick={onClose} className="btn btn-primary" style={{ background: accentDark }}>Done</button>
                  <button
                    onClick={() => {
                      setSent(false);
                      setMessage(''); setTopic('admissions');
                    }}
                    className="btn btn-outline"
                  >Send another</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contactFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes contactPopIn {
          from { opacity: 0; transform: scale(0.94) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 720px) {
          .contact-modal-grid { grid-template-columns: 1fr !important; }
          .contact-name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

const Label = ({ children, optional }) => (
  <div style={{
    fontSize: 12, fontWeight: 700, color: 'var(--neutral-700)',
    letterSpacing: '0.03em', textTransform: 'uppercase',
    marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6,
  }}>
    {children}
    {optional && <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0, color: 'var(--neutral-500)', fontSize: 11 }}>· optional</span>}
  </div>
);

const fieldStyle = () => ({
  width: '100%',
  padding: '11px 14px',
  borderRadius: 10,
  border: '1px solid var(--neutral-200)',
  fontFamily: 'var(--font-body)', fontSize: 14,
  color: 'var(--neutral-900)',
  background: '#fff',
  outline: 'none',
  transition: 'all 150ms',
});

const ContactRow = ({ icon, label, value, href, accentDark }) => {
  const body = (
    <>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: '#fff', color: accentDark,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
        <div style={{
          fontSize: 14, fontWeight: 600, color: 'var(--neutral-900)',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{value}</div>
      </div>
    </>
  );
  const wrapStyle = { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' };
  return href
    ? <a href={href} style={wrapStyle}>{body}</a>
    : <div style={wrapStyle}>{body}</div>;
};

Object.assign(window, { SchoolProfilePage });
