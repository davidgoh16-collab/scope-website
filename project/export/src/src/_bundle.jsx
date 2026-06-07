/* ===== src/icons.jsx ===== */
// SCOPE — Icon components (Lucide-style strokes, hand-tuned)
// All icons accept `size` and `color` and `stroke` props.

const Icon = ({ size = 20, color = "currentColor", stroke = 2, children, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>;
const IconMapPin = (p) => <Icon {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>;
const IconStar = (p) => <Icon {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const IconBookmark = (p) => <Icon {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></Icon>;
const IconCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IconCheckCircle = (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></Icon>;
const IconArrowRight = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const IconArrowLeft = (p) => <Icon {...p}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></Icon>;
const IconChevronRight = (p) => <Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>;
const IconChevronDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
const IconClose = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
const IconMenu = (p) => <Icon {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></Icon>;
const IconUser = (p) => <Icon {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const IconLock = (p) => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>;
const IconShieldCheck = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>;
const IconInfo = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></Icon>;
const IconBus = (p) => <Icon {...p}><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8a3.7 3.7 0 0 0 .2-1.2c0-2-1.2-3.5-3-4l-4-2c-1.4-.7-2-1-3-1H6a3 3 0 0 0-3 3v8a1 1 0 0 0 1 1h2"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></Icon>;
const IconGraduation = (p) => <Icon {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></Icon>;
const IconBook = (p) => <Icon {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></Icon>;
const IconSparkles = (p) => <Icon {...p}><path d="M12 3l1.9 4.7L18.5 9.5l-4.6 1.8L12 16l-1.9-4.7L5.5 9.5l4.6-1.8z"/><path d="M19 14l.9 2.3L22 17l-2.1.7L19 20l-.9-2.3L16 17l2.1-.7z"/><path d="M5 14l.6 1.4L7 16l-1.4.6L5 18l-.6-1.4L3 16l1.4-.6z"/></Icon>;
const IconHeart = (p) => <Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></Icon>;
const IconClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;
const IconCalendar = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>;
const IconPhone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const IconMail = (p) => <Icon {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Icon>;
const IconFilter = (p) => <Icon {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></Icon>;
const IconSliders = (p) => <Icon {...p}><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></Icon>;
const IconQuote = (p) => <Icon {...p}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></Icon>;
const IconTwitter = (p) => <Icon {...p}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></Icon>;
const IconInstagram = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></Icon>;
const IconLinkedIn = (p) => <Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Icon>;
const IconTikTok = (p) => <Icon {...p}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></Icon>;
const IconGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>;
const IconBuilding = (p) => <Icon {...p}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="7" x2="10" y2="7"/><line x1="9" y1="11" x2="10" y2="11"/><line x1="9" y1="15" x2="10" y2="15"/><line x1="14" y1="7" x2="15" y2="7"/><line x1="14" y1="11" x2="15" y2="11"/><line x1="14" y1="15" x2="15" y2="15"/></Icon>;
const IconAccessibility = (p) => <Icon {...p}><circle cx="12" cy="4" r="2"/><path d="M19 13v-2a7 7 0 0 0-14 0v2"/><path d="M14 13l-1 9"/><path d="M10 13l1 9"/><path d="M8 8l4 5 4-5"/></Icon>;
const IconTrendingUp = (p) => <Icon {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>;
const IconAward = (p) => <Icon {...p}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></Icon>;
const IconTarget = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Icon>;
const IconZap = (p) => <Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const IconPlay = (p) => <Icon {...p}><polygon points="5 3 19 12 5 21 5 3"/></Icon>;
const IconExternalLink = (p) => <Icon {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></Icon>;
const IconPlus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
const IconMinus = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/></Icon>;

Object.assign(window, {
  Icon,
  IconSearch, IconMapPin, IconStar, IconBookmark, IconCheck, IconCheckCircle,
  IconArrowRight, IconArrowLeft, IconChevronRight, IconChevronDown, IconClose, IconMenu,
  IconUser, IconUsers, IconLock, IconShield, IconShieldCheck, IconInfo,
  IconBus, IconGraduation, IconBook, IconSparkles, IconHeart, IconClock,
  IconCalendar, IconPhone, IconMail, IconFilter, IconSliders, IconQuote,
  IconTwitter, IconInstagram, IconLinkedIn, IconTikTok, IconGlobe, IconBuilding,
  IconAccessibility, IconTrendingUp, IconAward, IconTarget, IconZap,
  IconPlay, IconExternalLink, IconPlus, IconMinus,
});


/* ===== src/components.jsx ===== */
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
            <img src={window.__resources.logo} alt="Scope" />
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
          <img src={window.__resources.logo} alt="Scope" />
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


/* ===== src/data.jsx ===== */
// SCOPE — Shared data (sample schools, FAQs, testimonials, etc.)

const SAMPLE_SCHOOLS = [
  {
    id: "hillside",
    name: "Hillside Academy",
    type: "State secondary",
    location: "Battersea, London",
    distance: "1.2 mi",
    match: 94,
    ofsted: "Outstanding",
    pupils: 1240,
    ageRange: "11–18",
    specialisms: ["Science", "Maths", "Music"],
    accent: "blue",
    shortBio: "A bright, well-supported academy with strong STEM and pastoral programmes. Sixth form on site.",
    transport: ["Bus 137", "Walk 18 min"],
    sen: "SENCO + speech & language support",
    headTeacher: "Mrs. Helen Okafor",
    intake: "180 / year",
    snapshot: { science: 92, maths: 88, arts: 74, sport: 81, support: 90 },
  },
  {
    id: "riverside",
    name: "Riverside Secondary",
    type: "Academy",
    location: "Wandsworth, London",
    distance: "2.8 mi",
    match: 87,
    ofsted: "Good",
    pupils: 980,
    ageRange: "11–18",
    specialisms: ["Drama", "English", "Languages"],
    accent: "purple",
    shortBio: "Performing-arts focused academy with strong English Lit results and a thriving languages programme.",
    transport: ["Bus 44", "Tube 12 min"],
    sen: "ASD specialist resource base",
    headTeacher: "Mr. Daniel Whitfield",
    intake: "150 / year",
    snapshot: { science: 70, maths: 72, arts: 95, sport: 65, support: 84 },
  },
  {
    id: "stcatherines",
    name: "St Catherine's College",
    type: "Academy (faith)",
    location: "Clapham, London",
    distance: "3.4 mi",
    match: 73,
    ofsted: "Good",
    pupils: 820,
    ageRange: "11–18",
    specialisms: ["Humanities", "Languages"],
    accent: "pink",
    shortBio: "Catholic academy with humanities specialism and strong A Level results. Mixed ability intake.",
    transport: ["Bus 35", "Walk 28 min"],
    sen: "Inclusion team",
    headTeacher: "Dr. Sarah Bellucci",
    intake: "120 / year",
    snapshot: { science: 74, maths: 76, arts: 80, sport: 68, support: 78 },
  },
  {
    id: "oakwell",
    name: "Oakwell School",
    type: "State secondary",
    location: "Tooting, London",
    distance: "4.1 mi",
    match: 68,
    ofsted: "Good",
    pupils: 1100,
    ageRange: "11–16",
    specialisms: ["Sport", "Design Tech"],
    accent: "green",
    shortBio: "Community school with strong sports and design-technology programmes. No sixth form on site.",
    transport: ["Bus 219", "Train + Bus"],
    sen: "EAL and SEMH support",
    headTeacher: "Mr. James Patel",
    intake: "200 / year",
    snapshot: { science: 68, maths: 65, arts: 70, sport: 95, support: 75 },
  },
  {
    id: "lambeth",
    name: "Lambeth Sixth Form",
    type: "Sixth form college",
    location: "Brixton, London",
    distance: "5.0 mi",
    match: 62,
    ofsted: "Outstanding",
    pupils: 1800,
    ageRange: "16–19",
    specialisms: ["A Levels", "BTECs", "Arts"],
    accent: "coral",
    shortBio: "Large sixth-form college offering 40+ A Levels and applied courses. Strong progression to RG unis.",
    transport: ["Tube Victoria line", "Bus 159"],
    sen: "Dedicated SEND team",
    headTeacher: "Ms. Priya Anand",
    intake: "900 / year",
    snapshot: { science: 80, maths: 82, arts: 88, sport: 60, support: 85 },
  },
];

const FAQS = [
  {
    category: "Getting started",
    items: [
      {
        q: "Is Scope free to use?",
        a: "Yes. Scope is completely free for every student in England. There are no premium tiers, no paywalls, and no upsells. We're funded by partnerships with local authorities, not by schools paying for placement.",
      },
      {
        q: "How long does the quiz take?",
        a: "About five minutes for the core quiz. You can pause and come back to it whenever you like — your progress is saved on your device. If you want a more detailed match, there are optional deeper questions that add another five to ten minutes.",
      },
      {
        q: "Do I need an account?",
        a: "You can take the quiz without an account. If you want to save your results, share them with a parent or guardian, or come back later, you can create a free account using just an email address.",
      },
      {
        q: "What ages is Scope for?",
        a: "Scope is designed for two transitions: Year 6 (age 10–11) looking at secondary schools, and Year 11 (age 15–16) looking at sixth forms. Parents and guardians can use it on behalf of their child too.",
      },
    ],
  },
  {
    category: "How matching works",
    items: [
      {
        q: "How are schools matched to me?",
        a: "We combine what you tell us in the quiz — your interests, subjects you like, support needs, what's important to you in a school — with public data on every school: Ofsted, GCSE/A Level results, specialisms, admissions criteria, and exact travel distance from your postcode.",
      },
      {
        q: "Why is my match percentage what it is?",
        a: "Every school's match score is broken down on its profile page. You can see exactly which of your answers contributed to the score, and which factors counted against. Nothing is hidden.",
      },
      {
        q: "Can I change my answers and see new results?",
        a: "Yes. You can retake or edit any answer at any time. We'll re-run the matching instantly and show you what changed.",
      },
      {
        q: "Does Scope cover the whole UK?",
        a: "We currently cover England in full. Scotland, Wales and Northern Ireland are on the roadmap for late 2026.",
      },
    ],
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "What data do you collect?",
        a: "Just the answers you give in the quiz and, if you sign up, your email. We don't ask for your full name, date of birth, or address — only your postcode, and only the first half (e.g. SW11) unless you opt in to share the full one for more accurate distance matching.",
      },
      {
        q: "Is my SEN data safe?",
        a: "Yes. SEN and disability information is classified as 'special category data' under Article 9 of UK GDPR and is encrypted, never shared with schools, never sold, and only ever used to improve your matches. You can delete it at any time, separately from the rest of your data.",
      },
      {
        q: "Do schools see my answers?",
        a: "No. Schools cannot see who has matched with them, what scores they received, or any individual data. They only ever see aggregate, anonymised trends — and only if they pay for a basic dashboard subscription.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, instantly, from your account settings. We delete everything within 30 days. You don't need to email us or wait for approval.",
      },
    ],
  },
  {
    category: "For parents",
    items: [
      {
        q: "Can I use Scope on behalf of my child?",
        a: "Yes. Many parents and guardians do, especially for Year 6 students. We recommend doing it together — the quiz is designed for the student to be in the driving seat, with you alongside.",
      },
      {
        q: "Will I be able to see my child's results?",
        a: "Only if they share them with you. We don't have parent portals or oversight features — Scope is built around the student. We'll soon offer a share-link so students can send their list to you in one click.",
      },
      {
        q: "What if my child has additional needs?",
        a: "Scope is especially useful for students with SEN, EHCPs, or physical disabilities. The quiz includes specific questions about support needs, and matching factors in each school's documented provision. All sensitive data is protected under Article 9 GDPR.",
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "I never would have found Hillside Academy on my own. It was exactly what I was looking for, and it's only 20 minutes away.",
    name: "Aisha",
    role: "Year 6 · Scoped her secondary school",
    accent: "blue",
  },
  {
    quote: "We spent weeks reading prospectuses and visiting open evenings. With Scope we had a real shortlist in an evening, and the matches actually made sense.",
    name: "Maya & Robin",
    role: "Parents of a Year 6 student",
    accent: "green",
  },
  {
    quote: "Honestly the SEN bit was the thing. I have an EHCP and most search sites either ignore it or make it feel like a tick box. Scope asked properly.",
    name: "Theo",
    role: "Year 11 · Choosing a sixth form",
    accent: "purple",
  },
  {
    quote: "It actually felt like it was made for someone my age. Not patronising. Not like a Government website.",
    name: "Yusuf",
    role: "Year 11",
    accent: "coral",
  },
];

const STATS = [
  { value: "2,400+", label: "Schools indexed across England" },
  { value: "94%", label: "Of users find a school they hadn't heard of" },
  { value: "5 min", label: "Average time to first results" },
  { value: "Free", label: "Forever, for every student in England" },
];

Object.assign(window, { SAMPLE_SCHOOLS, FAQS, TESTIMONIALS, STATS });


/* ===== src/pages/Home.jsx ===== */
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


/* ===== src/pages/HowItWorks.jsx ===== */
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


/* ===== src/pages/Families.jsx ===== */
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


/* ===== src/pages/Schools.jsx ===== */
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


/* ===== src/pages/Quiz.jsx ===== */
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


/* ===== src/pages/SchoolProfile.jsx ===== */
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


/* ===== src/pages/About.jsx ===== */
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


/* ===== src/pages/FAQ.jsx ===== */
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


/* ===== src/pages/Privacy.jsx ===== */
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


/* ===== src/pages/SignIn.jsx ===== */
// SCOPE — Sign In / Sign Up page

const SignInPage = ({ navigate }) => {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section style={{
      minHeight: '85vh',
      background: 'linear-gradient(180deg, var(--blue-50) 0%, #fff 60%)',
      padding: '48px 24px',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
        maxWidth: 1080, margin: '0 auto', width: '100%',
      }} className="signin-grid">

        {/* Left: marketing */}
        <div>
          <span className="section-eyebrow">{mode === 'signup' ? 'Create your account' : 'Welcome back'}</span>
          <h1 style={{ fontSize: 44, marginBottom: 18, lineHeight: 1.1 }}>
            {mode === 'signup'
              ? <>Save your matches.<br/>Take notes. Come back.</>
              : <>Pick up<br/>where you left off.</>
            }
          </h1>
          <p style={{ fontSize: 17, color: 'var(--neutral-700)', lineHeight: 1.6, marginBottom: 28, maxWidth: 460 }}>
            {mode === 'signup'
              ? "Free, no credit card. Just an email — that's all we ask for. You can use Scope without an account too."
              : 'Sign in to see your saved schools, retake the quiz, and pick up your notes from open evenings.'
            }
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
            {[
              'Save your shortlist of schools',
              'Take notes after open evenings',
              'Share your list with parents in one tap',
              'Get reminded before applications close',
            ].map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--neutral-800)' }}>
                <span style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'var(--green-100)', color: 'var(--green-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <IconCheck size={13} stroke={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="card" style={{
          padding: 36,
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--neutral-100)',
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', background: 'var(--neutral-50)', padding: 4, borderRadius: 12, marginBottom: 28 }}>
            {['signin', 'signup'].map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1, padding: '10px 14px',
                  background: mode === m ? '#fff' : 'transparent',
                  color: mode === m ? 'var(--neutral-900)' : 'var(--neutral-600)',
                  border: 'none', borderRadius: 8,
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: mode === m ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 200ms',
                }}
              >
                {m === 'signin' ? 'Sign in' : 'Create account'}
              </button>
            ))}
          </div>

          <h2 style={{ fontSize: 26, marginBottom: 8 }}>
            {mode === 'signin' ? 'Sign in to Scope' : 'Create your account'}
          </h2>
          <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 24 }}>
            {mode === 'signin' ? "Email and we'll send you a magic link." : "We'll email you a link to confirm — no password needed."}
          </p>

          <form onSubmit={(e) => { e.preventDefault(); navigate('quiz'); }}>
            <Field label="Email address">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={inputStyle}
                required
                autoFocus
              />
            </Field>

            {mode === 'signup' && (
              <Field label="What year are you in? (optional)">
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled>Choose one...</option>
                  <option value="y6">Year 6 — looking at secondary</option>
                  <option value="y11">Year 11 — looking at sixth form</option>
                  <option value="parent">Parent or guardian</option>
                  <option value="other">Other</option>
                </select>
              </Field>
            )}

            {mode === 'signup' && (
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 8, marginBottom: 20, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                  style={{ marginTop: 3, accentColor: 'var(--blue-500)', width: 16, height: 16 }}
                />
                <span style={{ fontSize: 13, color: 'var(--neutral-700)', lineHeight: 1.5 }}>
                  I'm 13+ or have a parent/guardian helping. I accept the{' '}
                  <a onClick={(e) => { e.preventDefault(); navigate('privacy'); }} style={{ cursor: 'pointer' }}>privacy policy</a>{' '}
                  and Scope's terms of use.
                </span>
              </label>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-md"
              style={{ width: '100%', justifyContent: 'center', marginTop: mode === 'signup' ? 0 : 10 }}
              disabled={mode === 'signup' && !agree}
            >
              {mode === 'signin' ? 'Send magic link' : 'Create account'} <IconArrowRight size={14} />
            </button>
          </form>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, margin: '24px 0',
          }}>
            <span style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }}/>
            <span style={{ fontSize: 12, color: 'var(--neutral-500)' }}>OR</span>
            <span style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }}/>
          </div>

          <div style={{ display: 'grid', gap: 8 }}>
            <button type="button" style={socialBtn}>
              <SVG_Google /> Continue with Google
            </button>
            <button type="button" style={socialBtn}>
              <SVG_Apple /> Continue with Apple
            </button>
          </div>

          <div style={{ marginTop: 20, padding: 14, background: 'var(--neutral-50)', borderRadius: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
            <IconLock size={16} color="var(--neutral-500)" />
            <div style={{ fontSize: 12.5, color: 'var(--neutral-600)' }}>
              No data is ever sold or shared with schools.{' '}
              <a onClick={(e) => { e.preventDefault(); navigate('privacy'); }} style={{ cursor: 'pointer' }}>Read why we're different.</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .signin-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, children }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--neutral-800)' }}>{label}</label>
    {children}
  </div>
);

const inputStyle = {
  width: '100%', padding: '12px 14px', fontSize: 15,
  border: '1.5px solid var(--neutral-200)',
  borderRadius: 10,
  fontFamily: 'var(--font-body)',
  outline: 'none', background: '#fff',
  transition: 'border-color 200ms',
};

const socialBtn = {
  width: '100%', padding: '12px 14px', fontSize: 14, fontWeight: 600,
  background: '#fff', border: '1.5px solid var(--neutral-200)',
  borderRadius: 10, cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
  color: 'var(--neutral-800)',
};

const SVG_Google = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SVG_Apple = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

Object.assign(window, { SignInPage });


/* ===== src/app.jsx ===== */
// SCOPE — App entry & router

const App = () => {
  const [route, navigate] = useRouter();

  // Split "school/<id>" → ['school', id]
  const parts = route.split('/');
  const view = parts[0];
  const param = parts[1];

  let page = null;
  switch (view) {
    case 'home':       page = <HomePage navigate={navigate} />; break;
    case 'how-it-works': page = <HowItWorksPage navigate={navigate} />; break;
    case 'families':   page = <FamiliesPage navigate={navigate} />; break;
    case 'schools':    page = <SchoolsPage navigate={navigate} />; break;
    case 'quiz':       page = <QuizPage navigate={navigate} />; break;
    case 'school':     page = <SchoolProfilePage navigate={navigate} schoolId={param || 'hillside'} />; break;
    case 'about':      page = <AboutPage navigate={navigate} />; break;
    case 'faq':        page = <FAQPage navigate={navigate} />; break;
    case 'privacy':    page = <PrivacyPage navigate={navigate} />; break;
    case 'signin':     page = <SignInPage navigate={navigate} />; break;
    default:           page = <HomePage navigate={navigate} />; break;
  }

  return (
    <React.Fragment>
      <Nav route={view} navigate={navigate} />
      <main key={route}>{page}</main>
      <Footer navigate={navigate} />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
