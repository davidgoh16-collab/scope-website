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
