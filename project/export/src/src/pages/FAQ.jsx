// SCOPE — FAQ / Help page

const FAQPage = ({ navigate }) => {
  const [category, setCategory] = useState(FAQS[0].category);
  const [search, setSearch] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const currentCat = FAQS.find(c => c.category === category) || FAQS[0];

  const filtered = search.trim()
    ? FAQS.flatMap(c => c.items.map(i => ({ ...i, cat: c.category })))
        .filter(i => (i.q + ' ' + i.a).toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <React.Fragment>
      <header className="page-header tinted-blue">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow">
            <IconInfo size={14} color="var(--blue-600)" />
            Help centre
          </span>
          <h1 style={{ margin: '0 auto' }}>Things you might be wondering.</h1>
          <p className="lead" style={{ margin: '20px auto 32px' }}>
            If your question isn't here, message us — we read every message and reply within one working day.
          </p>

          {/* Search */}
          <div style={{
            background: '#fff', borderRadius: 999,
            padding: '6px 6px 6px 22px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 560, margin: '0 auto',
          }}>
            <IconSearch size={18} color="var(--neutral-500)" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search the help centre..."
              style={{
                flex: 1, border: 'none', outline: 'none',
                padding: '12px 0', fontSize: 15,
                fontFamily: 'var(--font-body)',
                background: 'transparent',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--neutral-100)', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <IconClose size={16} />
              </button>
            )}
          </div>
        </div>
      </header>

      <Section pad="64px 0 96px">
        <div className="container">
          {filtered ? (
            // Search results
            <div style={{ maxWidth: 880, margin: '0 auto' }}>
              <h3 style={{ fontSize: 22, marginBottom: 18 }}>
                {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{search}"
              </h3>
              <div style={{ display: 'grid', gap: 12 }}>
                {filtered.length === 0 && (
                  <div style={{ textAlign: 'center', padding: 60, color: 'var(--neutral-500)' }}>
                    Nothing matched. Try a different word, or get in touch.
                  </div>
                )}
                {filtered.map((f, i) => (
                  <FAQAccordion key={i} item={f} category={f.cat} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
                ))}
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid', gridTemplateColumns: '260px 1fr',
              gap: 48, maxWidth: 1080, margin: '0 auto',
            }} className="faq-grid">
              {/* Sidebar */}
              <aside>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Categories
                </div>
                <div style={{ display: 'grid', gap: 4 }}>
                  {FAQS.map(c => (
                    <button
                      key={c.category}
                      onClick={() => { setCategory(c.category); setOpenIdx(0); }}
                      style={{
                        background: c.category === category ? 'var(--blue-50)' : 'transparent',
                        color: c.category === category ? 'var(--blue-800)' : 'var(--neutral-700)',
                        border: 'none', padding: '12px 16px',
                        fontFamily: 'var(--font-body)', fontSize: 15,
                        fontWeight: c.category === category ? 700 : 500,
                        textAlign: 'left', cursor: 'pointer',
                        borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}
                    >
                      {c.category}
                      <span style={{ fontSize: 12, color: 'var(--neutral-500)' }}>{c.items.length}</span>
                    </button>
                  ))}
                </div>

                <div style={{
                  marginTop: 32, padding: 20,
                  background: 'var(--blue-50)', borderRadius: 14,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Still stuck?</div>
                  <div style={{ fontSize: 13, color: 'var(--neutral-700)', lineHeight: 1.55, marginBottom: 12 }}>
                    Message our small team. We reply within one working day.
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    <IconMail size={14} /> Get in touch
                  </button>
                </div>
              </aside>

              {/* Items */}
              <div>
                <h2 style={{ fontSize: 28, marginBottom: 20 }}>{currentCat.category}</h2>
                <div style={{ display: 'grid', gap: 10 }}>
                  {currentCat.items.map((f, i) => (
                    <FAQAccordion key={i} item={f} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <style>{`
          @media (max-width: 800px) { .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </Section>

      {/* Contact bar */}
      <Section pad="64px 0" bg="var(--neutral-50)">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }} className="contact-grid">
            {[
              { icon: <IconMail size={22} color="var(--blue-600)" />, bg: 'var(--blue-50)', t: 'Email us', d: 'hello@scope.uk', sub: 'We read every message' },
              { icon: <IconUsers size={22} color="var(--purple-600)" />, bg: 'var(--purple-50)', t: 'For schools', d: 'schools@scope.uk', sub: 'Profile & dashboard questions' },
              { icon: <IconShield size={22} color="var(--pink-700)" />, bg: 'var(--pink-50)', t: 'Privacy & data', d: 'privacy@scope.uk', sub: 'GDPR & data requests' },
            ].map((c, i) => (
              <div key={i} className="card card-pad card-hover" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: c.bg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--neutral-500)' }}>{c.t}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700 }}>{c.d}</div>
                  <div style={{ fontSize: 12, color: 'var(--neutral-500)' }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </Section>
    </React.Fragment>
  );
};

const FAQAccordion = ({ item, open, onToggle, category }) => (
  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%', background: 'transparent', border: 'none',
        padding: '22px 26px',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        gap: 16,
        textAlign: 'left', cursor: 'pointer',
        fontFamily: 'inherit',
      }}
    >
      <div style={{ flex: 1 }}>
        {category && <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue-600)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>{category}</div>}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--neutral-900)', lineHeight: 1.4 }}>{item.q}</div>
      </div>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: open ? 'var(--blue-500)' : 'var(--neutral-100)',
        color: open ? '#fff' : 'var(--neutral-700)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'all 200ms',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
      }}>
        <IconPlus size={16} stroke={2.5} />
      </div>
    </button>
    {open && (
      <div style={{ padding: '0 26px 26px', color: 'var(--neutral-700)', lineHeight: 1.65, fontSize: 15 }}>
        {item.a}
      </div>
    )}
  </div>
);

Object.assign(window, { FAQPage });
