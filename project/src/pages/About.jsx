// SCOPE — About page

const AboutPage = ({ navigate }) => {
  return (
    <React.Fragment>
      <header className="page-header tinted-blue">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow">
            <IconSparkles size={14} color="var(--blue-600)" />
            Our story
          </span>
          <h1 style={{ margin: '0 auto', maxWidth: 740 }}>We're building the tool we wish our parents had.</h1>
          <p className="lead" style={{ margin: '20px auto 0' }}>
            Scope started when one of us watched a younger cousin spend three months trying to choose a secondary school
            using prospectuses, league tables, and gut feeling — and pick the wrong one. We thought it shouldn't be this hard.
          </p>
        </div>
      </header>

      {/* Mission */}
      <Section pad="96px 0">
        <div className="container-narrow">
          <div className="section-eyebrow">Mission</div>
          <h2 style={{ fontSize: 44, lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Every student in England should have a fair shot at finding the right school —
            <span style={{ color: 'var(--blue-500)' }}> regardless of postcode, background, or what their parents already know about the system.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--neutral-700)', lineHeight: 1.7, marginBottom: 16 }}>
            The school you go to shapes more of your life than almost any other single choice. And the way we ask 10-year-olds and 15-year-olds to make that decision — through 60-page prospectuses, league tables that don't capture fit, and open evenings where the school is always on its best behaviour — is broken.
          </p>
          <p style={{ fontSize: 17, color: 'var(--neutral-700)', lineHeight: 1.7 }}>
            Scope's job is to do the legwork. We pull every public school data source we can find, ask the student plain-English questions about themselves, and produce a personalised, ranked, reasoned list. The student is in charge. We just help them see clearly.
          </p>
        </div>
      </Section>

      {/* Principles */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container">
          <div className="section-eyebrow">Our principles</div>
          <h2 className="section-heading" style={{ marginBottom: 56 }}>The promises we keep, even when it's inconvenient.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="principles-grid">
            {[
              {
                n: 1, t: 'The student is the customer',
                body: "Not the school, not the parent, not the local authority. Every decision we make answers to whether it serves the student making the choice.",
                color: 'var(--blue-500)',
              },
              {
                n: 2, t: 'No paid placement, ever',
                body: 'Match scores are determined by student answers and public data. Schools cannot pay to rank higher — and we have publicly committed to this in our memorandum.',
                color: 'var(--green-500)',
              },
              {
                n: 3, t: 'Plain English, always',
                body: "If a 10-year-old can't read it, we rewrite it. No jargon, no marketing speak, no condescending tone for the kids and corporate tone for the parents.",
                color: 'var(--purple-500)',
              },
              {
                n: 4, t: 'Sensitive data is sacred',
                body: 'SEN, EHCP, EAL, physical access — Article 9 GDPR encrypted, never shared with schools, never sold, deletable in one click.',
                color: 'var(--pink-600)',
              },
              {
                n: 5, t: 'Show our working',
                body: "Every match score is broken down into what pushed it up and what counted against. Nothing is hidden behind a 'proprietary algorithm'.",
                color: 'var(--coral-500)',
              },
              {
                n: 6, t: 'Free for students, forever',
                body: 'There will never be a paid student tier. If we can\'t make the business work without charging students, we shouldn\'t be doing it.',
                color: 'var(--blue-500)',
              },
            ].map(p => (
              <div key={p.n} className="card card-pad" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `${p.color}`, color: '#fff',
                  fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 18,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{p.n}</div>
                <div>
                  <h4 style={{ fontSize: 19, marginBottom: 8 }}>{p.t}</h4>
                  <p style={{ fontSize: 14.5, color: 'var(--neutral-700)', lineHeight: 1.6 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .principles-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </Section>

      {/* Team */}
      <Section pad="96px 0">
        <div className="container">
          <div className="section-eyebrow">Who's behind this</div>
          <h2 className="section-heading" style={{ marginBottom: 48 }}>A small team in London.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="team-grid">
            {[
              { name: 'Naima Chen', role: 'Co-founder · Product', bio: 'Former teacher (RG eng grad). Built the original quiz.', color: 'var(--blue-500)' },
              { name: 'Joel Marsden', role: 'Co-founder · Engineering', bio: 'Ex-Onfido. Wrote the matching engine. Will not stop optimising.', color: 'var(--green-500)' },
              { name: 'Aaron Patel', role: 'Data & Schools', bio: 'Education researcher. Knows where every public data source lives.', color: 'var(--purple-500)' },
              { name: 'Reese Akinola', role: 'Design & UX', bio: 'Spent five years designing for kids. Will fight you on font sizes.', color: 'var(--coral-500)' },
            ].map(t => (
              <div key={t.name} className="card card-pad">
                <div style={{
                  width: 84, height: 84, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color} 0%, var(--blue-700) 100%)`,
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30,
                  marginBottom: 16,
                }}>{t.name.split(' ').map(n => n[0]).join('')}</div>
                <h4 style={{ fontSize: 18, marginBottom: 2 }}>{t.name}</h4>
                <div style={{ fontSize: 13, color: t.color, fontWeight: 600, marginBottom: 10 }}>{t.role}</div>
                <p style={{ fontSize: 14, color: 'var(--neutral-700)', lineHeight: 1.55 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 500px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </Section>

      {/* Numbers */}
      <Section pad="96px 0" bg="var(--blue-900)" style={{ color: '#fff' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'var(--blue-200)' }}>Where we are</div>
          <h2 style={{ color: '#fff', fontSize: 44, marginBottom: 48, lineHeight: 1.15 }}>
            Built quietly, launched proudly.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="num-grid">
            {[
              { v: '2,400+', l: 'Schools indexed' },
              { v: '32', l: 'Local authority partners' },
              { v: '180k', l: 'Quizzes taken to date' },
              { v: '£0', l: 'Spent on advertising' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 900,
                  color: ['var(--blue-200)', 'var(--green-300)', 'var(--purple-300)', 'var(--coral-300)'][i],
                  lineHeight: 1, marginBottom: 10, letterSpacing: '-0.02em',
                }}>{s.v}</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .num-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; } }
        `}</style>
      </Section>

      {/* Press */}
      <Section pad="96px 0">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow">Press</div>
          <h2 className="section-heading" style={{ margin: '0 auto 32px' }}>What people are saying.</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              { from: 'The Guardian — Education', q: 'Cuts through the noise of a process that intimidates even the most engaged parents.' },
              { from: 'TES Magazine', q: "Refreshingly student-first. The first matching tool that takes SEN seriously." },
              { from: 'BBC London', q: 'A welcome alternative to ranking-table obsession.' },
            ].map((p, i) => (
              <div key={i} className="card card-pad" style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{p.from}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, lineHeight: 1.45, color: 'var(--neutral-900)' }}>"{p.q}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section pad="96px 0" bg="var(--neutral-50)">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="section-heading" style={{ margin: '0 auto 16px' }}>Want to get involved?</h2>
          <p className="section-sub" style={{ margin: '0 auto 32px' }}>
            We're hiring a Head of Schools and a Senior Engineer. Or just say hello —
            we read everything.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-md">See open roles</button>
            <button className="btn btn-outline btn-md" onClick={() => navigate('faq')}>Get in touch</button>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

Object.assign(window, { AboutPage });
