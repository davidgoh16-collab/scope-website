// SCOPE — Shared components: Nav, Footer, MobileMenu, Section, PhoneMockup, SchoolCard

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── Page navigation helper (URL hash router) ────────────────
const useRouter = () => {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash.replace(/^#\/?/, '');
    return h || 'home';
  });
  useEffect(() => {
    const handler = () => {
      const h = window.location.hash.replace(/^#\/?/, '');
      setRoute(h || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  const navigate = useCallback((to) => {
    window.location.hash = '#/' + to;
  }, []);
  return [route, navigate];
};

// ─── Link that uses router ───────────────────────────────────
const NavLink = ({ to, className = '', children, ...rest }) => {
  return (
    <a
      href={'#/' + to}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};

// ─── Nav ─────────────────────────────────────────────────────
const Nav = ({ route, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 'how-it-works', label: 'How it works' },
    { id: 'families', label: 'For families' },
    { id: 'schools', label: 'For schools' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'Help' },
  ];

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => navigate('home')} aria-label="Scope home">
            <img src="assets/logo.png" alt="Scope" />
          </button>
          <div className="nav-links">
            {links.map(l => (
              <a
                key={l.id}
                href={'#/' + l.id}
                className={'nav-link' + (route === l.id ? ' active' : '')}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('signin')}>Sign in</button>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('quiz')}>
              Start the quiz
            </button>
            <button className="nav-menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <IconMenu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(false)}>
        <div className="mobile-menu-sheet" onClick={e => e.stopPropagation()}>
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <IconClose size={18} />
          </button>
          {links.map(l => (
            <a
              key={l.id}
              href={'#/' + l.id}
              className={'nav-link' + (route === l.id ? ' active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div style={{ height: 16 }} />
          <button className="btn btn-outline btn-md" onClick={() => { setMenuOpen(false); navigate('signin'); }}>Sign in</button>
          <button className="btn btn-primary btn-md" style={{ marginTop: 8 }} onClick={() => { setMenuOpen(false); navigate('quiz'); }}>
            Start the quiz
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

// ─── Footer ──────────────────────────────────────────────────
const Footer = ({ navigate }) => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="assets/logo.png" alt="Scope" />
          <p className="footer-tagline">Scope your dream school. Free school matching for every student in England.</p>
          <div className="footer-socials">
            <button className="footer-social-btn" aria-label="Twitter"><IconTwitter size={16} /></button>
            <button className="footer-social-btn" aria-label="Instagram"><IconInstagram size={16} /></button>
            <button className="footer-social-btn" aria-label="LinkedIn"><IconLinkedIn size={16} /></button>
            <button className="footer-social-btn" aria-label="TikTok"><IconTikTok size={16} /></button>
          </div>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <a onClick={() => navigate('how-it-works')}>How it works</a>
          <a onClick={() => navigate('quiz')}>Take the quiz</a>
          <a onClick={() => navigate('school/hillside')}>Sample school</a>
          <a onClick={() => navigate('families')}>For families</a>
        </div>
        <div className="footer-col">
          <h4>For schools</h4>
          <a onClick={() => navigate('schools')}>Claim your profile</a>
          <a onClick={() => navigate('schools')}>School dashboard</a>
          <a onClick={() => navigate('schools')}>Data partnerships</a>
          <a onClick={() => navigate('schools')}>Pricing</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a onClick={() => navigate('about')}>About us</a>
          <a onClick={() => navigate('about')}>Our mission</a>
          <a onClick={() => navigate('faq')}>Help centre</a>
          <a onClick={() => navigate('about')}>Press</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <a onClick={() => navigate('privacy')}>Privacy policy</a>
          <a onClick={() => navigate('privacy')}>GDPR information</a>
          <a onClick={() => navigate('privacy')}>Cookie settings</a>
          <a onClick={() => navigate('faq')}>Contact us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Scope. Made for UK students. Registered in England.</div>
        <div className="footer-legal">
          <a onClick={() => navigate('privacy')}>Privacy</a>
          <a onClick={() => navigate('privacy')}>Cookies</a>
          <a onClick={() => navigate('privacy')}>Article 9 GDPR</a>
        </div>
      </div>
    </footer>
  );
};

// ─── PhoneMockup (used on Home hero & elsewhere) ─────────────
const PhoneMockup = ({ children, style = {} }) => (
  <div style={{
    width: 280, height: 580, background: '#1C2240', borderRadius: 38, padding: 10,
    boxShadow: '0 30px 60px rgba(19,29,56,0.28), 0 10px 24px rgba(19,29,56,0.18)',
    ...style,
  }}>
    <div style={{
      width: '100%', height: '100%', background: '#fff', borderRadius: 30,
      overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '12px 18px 6px', fontSize: 11, fontWeight: 600,
        color: 'var(--neutral-900)', flexShrink: 0,
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: 14, height: 9, borderRadius: 2, border: '1px solid var(--neutral-900)', position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 1, background: 'var(--neutral-900)', borderRadius: 1 }}/>
          </span>
        </span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  </div>
);

// ─── School "row" card (compact, for results list) ───────────
const SchoolRow = ({ school, onClick, rank }) => {
  const accentColor = {
    blue: 'var(--blue-500)',
    purple: 'var(--purple-500)',
    green: 'var(--green-500)',
    pink: 'var(--pink-500)',
    coral: 'var(--coral-500)',
  }[school.accent] || 'var(--blue-500)';

  const matchClass = school.match >= 80 ? 'match-hi' : school.match >= 60 ? 'match-mid' : 'match-lo';

  return (
    <div
      onClick={onClick}
      className="card card-hover"
      style={{
        padding: '20px 22px', cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto auto',
        gap: 20,
        alignItems: 'center',
      }}
    >
      {rank != null && (
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: accentColor, color: '#fff',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>{rank}</div>
      )}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
          <h4 style={{ fontSize: 18, margin: 0 }}>{school.name}</h4>
          <span className={`match-badge ${matchClass}`}>{school.match}% match</span>
        </div>
        <div style={{ display: 'flex', gap: 14, color: 'var(--neutral-500)', fontSize: 13, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <IconBuilding size={13} />{school.type}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <IconMapPin size={13} />{school.distance}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <IconAward size={13} />Ofsted {school.ofsted}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
          {school.specialisms.map(s => (
            <span key={s} className="chip" style={{ fontSize: 12, padding: '3px 9px' }}>{s}</span>
          ))}
        </div>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={(e) => { e.stopPropagation(); }}>
        <IconBookmark size={14} /> Save
      </button>
      <div style={{ color: 'var(--neutral-400)' }}>
        <IconChevronRight size={20} />
      </div>
    </div>
  );
};

// ─── A simple bar (for snapshot graphs) ──────────────────────
const Bar = ({ label, value, color = 'var(--blue-500)' }) => (
  <div>
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      fontSize: 13, marginBottom: 6, color: 'var(--neutral-700)',
    }}>
      <span>{label}</span>
      <span style={{ fontWeight: 600, color: 'var(--neutral-900)' }}>{value}</span>
    </div>
    <div style={{ height: 8, background: 'var(--neutral-100)', borderRadius: 999, overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: 999, transition: 'width 600ms ease-out' }} />
    </div>
  </div>
);

// ─── Section wrapper ────────────────────────────────────────
const Section = ({ children, pad = '96px 0', bg, style = {}, ...rest }) => (
  <section style={{ padding: pad, background: bg, ...style }} {...rest}>
    {children}
  </section>
);

// ─── Phone status icons ─────────────────────────────────────
const StatusBar = () => (
  <div style={{
    display: 'flex', justifyContent: 'space-between',
    padding: '12px 18px 6px', fontSize: 11, fontWeight: 600,
  }}>
    <span>9:41</span>
    <span>●●●</span>
  </div>
);

Object.assign(window, {
  useRouter, NavLink, Nav, Footer, PhoneMockup, SchoolRow, Bar, Section,
});
