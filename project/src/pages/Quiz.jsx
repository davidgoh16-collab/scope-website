// SCOPE — Interactive Quiz page

const QUIZ_QUESTIONS = [
  {
    id: 'stage',
    label: 'About you',
    title: "Which year are you in?",
    sub: "This helps us know which schools to look at.",
    type: 'single',
    options: [
      { id: 'y6', label: 'Year 6', sub: 'Looking at secondary schools', icon: '📚' },
      { id: 'y11', label: 'Year 11', sub: 'Looking at sixth forms & colleges', icon: '🎓' },
      { id: 'parent', label: 'Parent or guardian', sub: 'Helping someone else', icon: '👨‍👩‍👧' },
    ],
  },
  {
    id: 'postcode',
    label: 'Where you live',
    title: "What's your postcode?",
    sub: "We only need the first half (e.g. SW11). You can give the full one for more accurate distance matching.",
    type: 'text',
    placeholder: 'SW11',
    optional: false,
  },
  {
    id: 'subjects',
    label: 'What you like',
    title: "Which subjects do you actually look forward to?",
    sub: "Pick as many as you like. There are no wrong answers.",
    type: 'multi',
    options: [
      { id: 'science', label: 'Science', icon: '🧪' },
      { id: 'maths', label: 'Maths', icon: '📐' },
      { id: 'english', label: 'English', icon: '📖' },
      { id: 'art', label: 'Art & Design', icon: '🎨' },
      { id: 'music', label: 'Music', icon: '🎵' },
      { id: 'drama', label: 'Drama', icon: '🎭' },
      { id: 'history', label: 'History', icon: '🏛️' },
      { id: 'geography', label: 'Geography', icon: '🌍' },
      { id: 'languages', label: 'Languages', icon: '🗣️' },
      { id: 'computing', label: 'Computing', icon: '💻' },
      { id: 'pe', label: 'PE & Sport', icon: '⚽' },
      { id: 'dt', label: 'Design Tech', icon: '🔧' },
    ],
  },
  {
    id: 'lessontype',
    label: 'How you learn',
    title: "What kind of lessons make you actually want to show up?",
    sub: "Pick one — you can change this later.",
    type: 'single',
    options: [
      { id: 'practical', label: 'Practical & hands-on', sub: 'Experiments, making things, building', icon: '🛠️' },
      { id: 'creative', label: 'Creative & expressive', sub: 'Writing, performance, art', icon: '🎨' },
      { id: 'discussion', label: 'Discussion & debate', sub: 'Talking, arguing, presenting', icon: '💬' },
      { id: 'analytical', label: 'Analytical & problem-solving', sub: 'Maths puzzles, logic, computing', icon: '🧠' },
    ],
  },
  {
    id: 'commute',
    label: 'Getting there',
    title: 'How do you feel about a longer journey to school?',
    sub: "Some schools are perfect for you but might be further. How far is too far?",
    type: 'single',
    options: [
      { id: 'short', label: 'Stay close', sub: 'Under 20 minutes — short journey wins' },
      { id: 'medium', label: "Don't mind 30 minutes", sub: 'If the school is a great fit' },
      { id: 'long', label: 'Up to an hour', sub: 'For the right school' },
      { id: 'any', label: 'Distance is not a problem', sub: "We'll search the whole region" },
    ],
  },
  {
    id: 'character',
    label: 'School character',
    title: "What's important to you about the school itself?",
    sub: 'Pick all that apply.',
    type: 'multi',
    options: [
      { id: 'sixthform', label: 'Has a sixth form', icon: '🎓' },
      { id: 'small', label: 'Smaller school feel', icon: '🏫' },
      { id: 'big', label: 'Big with lots of options', icon: '🏢' },
      { id: 'sport', label: 'Strong sports programme', icon: '🏆' },
      { id: 'arts', label: 'Strong arts programme', icon: '🎻' },
      { id: 'religious', label: 'Faith school', icon: '✝️' },
      { id: 'singlesex', label: 'Single-sex', icon: '👤' },
      { id: 'mixed', label: 'Mixed', icon: '🧑‍🤝‍🧑' },
    ],
  },
  {
    id: 'support',
    label: 'Support needs',
    title: 'Is there anything we should know about how you learn best?',
    sub: "This stays private. Schools never see your answers. You can skip or delete at any time.",
    type: 'multi',
    optional: true,
    sensitive: true,
    options: [
      { id: 'ehcp', label: 'I have an EHCP', icon: '📋' },
      { id: 'sen', label: 'SEN support (no EHCP)', icon: '✏️' },
      { id: 'phys', label: 'Physical access needs', icon: '♿' },
      { id: 'eal', label: 'English as Additional Language', icon: '🌐' },
      { id: 'none', label: 'None of these', icon: '✓' },
      { id: 'skip', label: 'Prefer not to say', icon: '🤐' },
    ],
  },
];

const QuizPage = ({ navigate }) => {
  const [step, setStep] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const total = QUIZ_QUESTIONS.length;

  const setAnswer = (qid, val) => {
    setAnswers(prev => ({ ...prev, [qid]: val }));
  };

  if (done) return <QuizResults answers={answers} navigate={navigate} onRetake={() => { setDone(false); setStep(0); }} />;

  if (step === 0) {
    return (
      <QuizIntro onStart={() => setStep(1)} navigate={navigate} />
    );
  }

  const q = QUIZ_QUESTIONS[step - 1];
  const isLast = step === total;
  const isFirst = step === 1;

  const canContinue = () => {
    if (q.optional) return true;
    if (q.type === 'text') return (answers[q.id] || '').trim().length >= 2;
    if (q.type === 'multi') return (answers[q.id] || []).length > 0;
    return !!answers[q.id];
  };

  const next = () => {
    if (isLast) setDone(true);
    else setStep(step + 1);
  };
  const back = () => {
    if (isFirst) setStep(0);
    else setStep(step - 1);
  };

  return (
    <div style={{
      minHeight: '85vh',
      background: 'linear-gradient(180deg, var(--blue-50) 0%, #fff 50%)',
      padding: '48px 24px',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Progress header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={back}
              className="btn btn-ghost btn-sm"
              style={{ padding: '8px 12px' }}
            >
              <IconArrowLeft size={14} /> Back
            </button>
            <span style={{ fontSize: 13, color: 'var(--neutral-500)', fontWeight: 600 }}>
              Question {step} of {total}
            </span>
          </div>
          <button onClick={() => navigate('home')} className="btn btn-ghost btn-sm">
            Save & exit
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ height: 6, background: 'var(--neutral-100)', borderRadius: 999, marginBottom: 32 }}>
          <div style={{
            width: `${(step / total) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, var(--blue-500), var(--green-500))',
            borderRadius: 999,
            transition: 'width 350ms ease-out',
          }} />
        </div>

        {/* Question card */}
        <div key={q.id} className="card fade-up" style={{ padding: 40, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12,
          }}>{q.label}</div>
          <h2 style={{ fontSize: 30, marginBottom: 10, lineHeight: 1.2 }}>{q.title}</h2>
          <p style={{ fontSize: 16, color: 'var(--neutral-600)', marginBottom: q.sensitive ? 16 : 28, lineHeight: 1.5 }}>{q.sub}</p>

          {q.sensitive && (
            <div style={{
              background: 'var(--pink-50)', borderRadius: 12,
              padding: '14px 16px', marginBottom: 24,
              display: 'flex', gap: 12, alignItems: 'center',
              border: '1px solid var(--pink-100)',
            }}>
              <IconLock size={18} color="var(--pink-700)" />
              <div style={{ fontSize: 14, color: 'var(--pink-800)' }}>
                <strong>Protected data.</strong> Encrypted under Article 9 GDPR. Schools never see this.
              </div>
            </div>
          )}

          <QuizInput q={q} value={answers[q.id]} onChange={(v) => setAnswer(q.id, v)} />

          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {q.optional ? (
              <button
                onClick={next}
                className="btn btn-ghost btn-md"
                style={{ padding: '12px 18px' }}
              >Skip this</button>
            ) : <div />}
            <button
              onClick={next}
              disabled={!canContinue()}
              className="btn btn-primary btn-lg"
              style={{
                opacity: canContinue() ? 1 : 0.4,
                pointerEvents: canContinue() ? 'auto' : 'none',
              }}
            >
              {isLast ? 'See my matches' : 'Continue'} <IconArrowRight size={16} />
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--neutral-500)' }}>
          You can pause and come back anytime — we save your answers.
        </div>
      </div>
    </div>
  );
};

// ─── Quiz intro ─────────────────────────────────────────────
const QuizIntro = ({ onStart, navigate }) => (
  <Section pad="96px 0" style={{ background: 'linear-gradient(180deg, var(--blue-50) 0%, #fff 100%)' }}>
    <div className="container-narrow" style={{ textAlign: 'center' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: '#fff', color: 'var(--blue-700)',
        fontSize: 13, fontWeight: 600,
        padding: '6px 14px', borderRadius: 999,
        marginBottom: 24, border: '1px solid var(--blue-100)',
      }}>
        <IconClock size={14} /> About 5 minutes
      </div>
      <h1 style={{ fontSize: 56, marginBottom: 20 }}>Let's find your school.</h1>
      <p className="lead" style={{ margin: '0 auto 40px', fontSize: 19 }}>
        Just seven plain-English questions. You can pause at any point, skip optional questions, and edit your answers later. Nothing leaves your device unless you choose to save your results.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16, marginBottom: 48, maxWidth: 640, margin: '0 auto 48px',
      }} className="intro-cards">
        {[
          { icon: <IconSparkles size={20} color="var(--blue-600)" />, t: 'Plain English' },
          { icon: <IconLock size={20} color="var(--purple-600)" />, t: 'Private by default' },
          { icon: <IconBookmark size={20} color="var(--green-600)" />, t: 'No account needed' },
        ].map((p, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 14, padding: '20px 16px',
            boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 10,
            justifyContent: 'center', fontSize: 14, fontWeight: 600, color: 'var(--neutral-800)',
          }}>
            {p.icon} {p.t}
          </div>
        ))}
      </div>

      <button className="btn btn-primary btn-lg" onClick={onStart}>
        Start the quiz <IconArrowRight size={16} />
      </button>
      <div style={{ marginTop: 16 }}>
        <button onClick={() => navigate('how-it-works')} style={{
          background: 'transparent', border: 'none', color: 'var(--blue-600)',
          fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 8,
        }}>How does the matching work? →</button>
      </div>
    </div>
    <style>{`
      @media (max-width: 700px) { .intro-cards { grid-template-columns: 1fr !important; } }
    `}</style>
  </Section>
);

// ─── Quiz input renderer ─────────────────────────────────────
const QuizInput = ({ q, value, onChange }) => {
  if (q.type === 'text') {
    return (
      <input
        type="text"
        value={value || ''}
        onChange={e => onChange(e.target.value.toUpperCase())}
        placeholder={q.placeholder}
        autoFocus
        style={{
          width: '100%', padding: '20px 22px', fontSize: 22,
          border: '2px solid var(--neutral-200)',
          borderRadius: 14,
          fontFamily: 'var(--font-mono, var(--font-body))',
          textTransform: 'uppercase', letterSpacing: '0.05em',
          outline: 'none', transition: 'border-color 200ms',
          fontWeight: 600,
        }}
        onFocus={e => e.target.style.borderColor = 'var(--blue-500)'}
        onBlur={e => e.target.style.borderColor = 'var(--neutral-200)'}
      />
    );
  }

  if (q.type === 'single') {
    return (
      <div style={{ display: 'grid', gap: 10 }}>
        {q.options.map(opt => {
          const selected = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              style={{
                background: selected ? 'var(--blue-50)' : '#fff',
                border: `2px solid ${selected ? 'var(--blue-500)' : 'var(--neutral-200)'}`,
                borderRadius: 14,
                padding: '16px 18px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 14,
                textAlign: 'left',
                transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: selected ? 'scale(1.015)' : 'scale(1)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {opt.icon && <span style={{ fontSize: 24 }}>{opt.icon}</span>}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: selected ? 'var(--blue-800)' : 'var(--neutral-900)' }}>
                  {opt.label}
                </div>
                {opt.sub && <div style={{ fontSize: 13.5, color: 'var(--neutral-600)', marginTop: 3 }}>{opt.sub}</div>}
              </div>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                border: `2px solid ${selected ? 'var(--blue-500)' : 'var(--neutral-300)'}`,
                background: selected ? 'var(--blue-500)' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, transition: 'all 200ms',
              }}>
                {selected && <IconCheck size={14} stroke={3} color="#fff" />}
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'multi') {
    const selected = value || [];
    const toggle = (id) => {
      onChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
    };
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
        {q.options.map(opt => {
          const isOn = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              style={{
                background: isOn ? 'var(--blue-50)' : '#fff',
                border: `2px solid ${isOn ? 'var(--blue-500)' : 'var(--neutral-200)'}`,
                borderRadius: 14,
                padding: '14px 14px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
                textAlign: 'left',
                transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isOn ? 'scale(1.03)' : 'scale(1)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {opt.icon && <span style={{ fontSize: 20 }}>{opt.icon}</span>}
              <div style={{
                fontSize: 14.5, fontWeight: 600,
                color: isOn ? 'var(--blue-800)' : 'var(--neutral-900)',
                flex: 1, minWidth: 0,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {opt.label}
              </div>
              {isOn && (
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: 'var(--blue-500)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <IconCheck size={12} stroke={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    );
  }
  return null;
};

// ─── Quiz results ────────────────────────────────────────────
const QuizResults = ({ answers, navigate, onRetake }) => {
  // Compute custom match for each school based on answers
  const scored = useMemo(() => {
    const subjects = answers.subjects || [];
    const lessonType = answers.lessontype;
    const character = answers.character || [];
    const commute = answers.commute;
    const support = answers.support || [];

    return SAMPLE_SCHOOLS.map(s => {
      let score = 55;
      // Subjects boost
      const subjMap = {
        science: ['Science'], maths: ['Maths'], art: ['Art & Design'],
        music: ['Music'], drama: ['Drama'], english: ['English'],
        history: ['Humanities'], geography: ['Humanities'],
        languages: ['Languages'], pe: ['Sport'], dt: ['Design Tech'],
        computing: ['Science', 'Maths'],
      };
      subjects.forEach(sub => {
        const aliases = subjMap[sub] || [];
        if (s.specialisms.some(sp => aliases.includes(sp))) score += 6;
      });
      // Lesson type
      if (lessonType === 'practical' && s.snapshot.science >= 80) score += 6;
      if (lessonType === 'creative' && s.snapshot.arts >= 80) score += 8;
      if (lessonType === 'analytical' && s.snapshot.maths >= 80) score += 6;
      // Character
      if (character.includes('sport') && s.snapshot.sport >= 80) score += 5;
      if (character.includes('arts') && s.snapshot.arts >= 80) score += 5;
      if (character.includes('sixthform') && s.ageRange.endsWith('–18') || s.ageRange.endsWith('–19')) score += 3;
      // Commute
      const dist = parseFloat(s.distance);
      if (commute === 'short' && dist < 2) score += 6;
      if (commute === 'medium' && dist < 3.5) score += 4;
      if (commute === 'long' && dist < 6) score += 2;
      // Support
      if ((support.includes('ehcp') || support.includes('sen')) && s.snapshot.support >= 80) score += 7;
      // Cap
      score = Math.min(99, score + Math.floor(Math.random() * 4));
      return { ...s, computedMatch: score };
    }).sort((a, b) => b.computedMatch - a.computedMatch);
  }, [answers]);

  return (
    <React.Fragment>
      <section style={{
        padding: '60px 0 32px',
        background: `linear-gradient(135deg, var(--blue-50) 0%, var(--green-50) 100%)`,
      }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: 'var(--green-700)',
            fontSize: 13, fontWeight: 600,
            padding: '6px 14px', borderRadius: 999,
            marginBottom: 20, border: '1px solid var(--green-100)',
          }}>
            <IconCheckCircle size={14} color="var(--green-600)" /> Quiz complete
          </div>
          <h1 style={{ fontSize: 48, marginBottom: 14 }}>Here are your top schools.</h1>
          <p style={{ fontSize: 18, color: 'var(--neutral-700)', maxWidth: 540, margin: '0 auto' }}>
            Based on what you told us. Tap any school to see why it matched and explore the full profile.
          </p>
        </div>
      </section>

      <Section pad="48px 0 96px">
        <div className="container-narrow">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 20, flexWrap: 'wrap', gap: 14,
          }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span className="chip chip-blue"><IconMapPin size={12} /> {answers.postcode || 'SW11'}</span>
              <span className="chip chip-purple">{answers.stage === 'y6' ? 'Year 6' : answers.stage === 'y11' ? 'Year 11' : 'Browsing'}</span>
              <span className="chip">{scored.length} matches</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm"><IconSliders size={14} /> Filters</button>
              <button className="btn btn-ghost btn-sm" onClick={onRetake}>Retake</button>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {scored.map((s, i) => (
              <SchoolRow
                key={s.id}
                rank={i + 1}
                school={{ ...s, match: s.computedMatch }}
                onClick={() => navigate(`school/${s.id}`)}
              />
            ))}
          </div>

          <div style={{ marginTop: 40, padding: 28, background: 'var(--blue-50)', borderRadius: 16, textAlign: 'center' }}>
            <h3 style={{ fontSize: 22, marginBottom: 8 }}>Want to save these and come back?</h3>
            <p style={{ fontSize: 15, color: 'var(--neutral-700)', marginBottom: 18 }}>
              Create a free account in 30 seconds. We'll save your shortlist, your answers, and your notes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-md" onClick={() => navigate('signin')}>Create account</button>
              <button className="btn btn-ghost btn-md" onClick={onRetake}>Tweak my answers</button>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

Object.assign(window, { QuizPage });
