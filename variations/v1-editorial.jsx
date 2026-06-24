// V1 — Editorial clásico crema/ocre
// Tipografía serif dominante, layout revista, paleta cálida.
const V1 = (() => {
  const C = {
    bg: '#f5ede0',
    bg2: '#ece1cc',
    ink: '#2a2620',
    ink2: '#5a4e3d',
    mute: '#8a7a62',
    rule: '#c7b896',
    accent: '#9a3d1f',
    gold: '#b8862a',
    paper: '#faf4e6',
  };

  const Section = ({ id, eyebrow, title, children, bg }) => (
    <section id={id} style={{ padding: '96px 80px', borderTop: `1px solid ${C.rule}`, background: bg || 'transparent' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: C.accent, marginBottom: 8 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: 'var(--serif-v1)', fontSize: 40, fontWeight: 500, color: C.ink, margin: 0, lineHeight: 1.05, letterSpacing: -0.5 }}>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );

  const Nav = ({ t, lang, setLang }) => (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: `${C.bg}f2`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.rule}`, padding: '18px 80px', display: 'flex', alignItems: 'center', gap: 32, fontFamily: 'var(--mono-v1)', fontSize: 12 }}>
      <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 18, fontWeight: 600, color: C.ink, letterSpacing: -0.3 }}>M. Neira <span style={{ color: C.accent }}>·</span></div>
      <div style={{ display: 'flex', gap: 22, color: C.ink2, flex: 1 }}>
        {t.ui.nav[lang].map((n, i) => <a key={i} href={`#s-${i}`} style={{ color: 'inherit', textDecoration: 'none', letterSpacing: 0.5 }}>{n}</a>)}
      </div>
      <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{ border: `1px solid ${C.rule}`, background: 'transparent', padding: '6px 12px', borderRadius: 2, fontFamily: 'inherit', fontSize: 11, color: C.ink, cursor: 'pointer', letterSpacing: 1 }}>
        {lang === 'es' ? 'ES / en' : 'es / EN'}
      </button>
      <a href={t.cvFile} download style={{ padding: '7px 14px', background: C.ink, color: C.paper, textDecoration: 'none', fontFamily: 'inherit', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>↓ {t.ui.cv[lang]}</a>
    </nav>
  );

  const Hero = ({ t, lang }) => (
    <header style={{ padding: '120px 80px 96px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 40, top: 80, fontFamily: 'var(--serif-v1)', fontSize: 420, lineHeight: 0.8, color: C.bg2, userSelect: 'none', pointerEvents: 'none', fontWeight: 400 }}>M</div>
      <div style={{ position: 'relative', maxWidth: 900 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.accent, letterSpacing: 2, textTransform: 'uppercase' }}>
          <span style={{ width: 40, height: 1, background: C.accent }} />
          Portfolio · MMXXVI
        </div>
        <h1 style={{ fontFamily: 'var(--serif-v1)', fontSize: 92, lineHeight: 0.98, letterSpacing: -2, color: C.ink, fontWeight: 400, margin: '0 0 32px' }}>
          {t.hero[lang].greeting}<br />
          <span style={{ fontStyle: 'italic', color: C.accent }}>{lang === 'es' ? 'Construyo ecosistemas' : 'I build ecosystems'}</span><br />
          {lang === 'es' ? 'con Python.' : 'with Python.'}
        </h1>
        <p style={{ fontFamily: 'var(--serif-v1)', fontSize: 22, lineHeight: 1.45, color: C.ink2, maxWidth: 640, fontWeight: 400, margin: 0 }}>
          {t.hero[lang].pitch}
        </p>
        <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: C.paper, border: `1px solid ${C.rule}` }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3f7a3f' }} />
            <span style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.ink, letterSpacing: 1, textTransform: 'uppercase' }}>{t.hero[lang].tag}</span>
          </div>
          <span style={{ fontFamily: 'var(--mono-v1)', fontSize: 12, color: C.mute }}>{t.location[lang]}</span>
        </div>
      </div>
    </header>
  );

  const About = ({ t, lang }) => (
    <Section id="s-0" eyebrow="§ 01" title={lang === 'es' ? 'Sobre mí' : 'About'}>
      <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 20, lineHeight: 1.65, color: C.ink2, columnCount: 1, maxWidth: 680 }}>
        {t.about[lang].map((p, i) => (
          <p key={i} style={{ margin: i === 0 ? '0 0 24px' : '0 0 20px' }}>
            {i === 0 && <span style={{ fontFamily: 'var(--serif-v1)', fontSize: 72, lineHeight: 0.8, float: 'left', marginRight: 10, marginTop: 6, color: C.accent, fontWeight: 500 }}>{p.charAt(0)}</span>}
            {i === 0 ? p.slice(1) : p}
          </p>
        ))}
      </div>
    </Section>
  );

  const Project = ({ t, lang }) => {
    const p = t.project;
    return (
      <Section id="s-1" eyebrow="§ 02" title={lang === 'es' ? 'Proyecto' : 'Project'} bg={C.bg2 + '60'}>
        <div style={{ borderTop: `2px solid ${C.ink}`, paddingTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.mute, letterSpacing: 1, textTransform: 'uppercase' }}>
            <span>{p.tagline[lang]}</span>
            <span>{p.period}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--serif-v1)', fontSize: 56, fontWeight: 500, color: C.ink, margin: '8px 0 20px', letterSpacing: -1 }}>
            {p.name}<span style={{ color: C.accent }}>.</span>
          </h3>
          <p style={{ fontFamily: 'var(--serif-v1)', fontSize: 21, lineHeight: 1.5, color: C.ink2, maxWidth: 680, fontStyle: 'italic', marginTop: 0 }}>
            {p.summary[lang]}
          </p>
          <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.accent, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 16 }}>
            {lang === 'es' ? 'Rol' : 'Role'} — {p.role[lang]}
          </div>
        </div>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${C.rule}` }}>
          {p.pillars.map((pl, i) => (
            <div key={pl.key} style={{ padding: 28, borderRight: i % 2 === 0 ? `1px solid ${C.rule}` : 'none', borderBottom: i < 3 ? `1px solid ${C.rule}` : 'none', background: C.paper }}>
              <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.accent, marginBottom: 10, letterSpacing: 1.5 }}>0{i + 1}</div>
              <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 22, color: C.ink, marginBottom: 8, fontWeight: 500, letterSpacing: -0.3 }}>{pl.title[lang]}</div>
              <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 15, lineHeight: 1.55, color: C.ink2 }}>{pl.body[lang]}</div>
            </div>
          ))}
          <div style={{ padding: 28, background: C.ink, color: C.paper }}>
            <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.gold, marginBottom: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
              {p.stack.map(s => <span key={s} style={{ fontFamily: 'var(--serif-v1)', fontSize: 16, fontStyle: 'italic' }}>{s}</span>)}
            </div>
          </div>
        </div>
      </Section>
    );
  };

  const Skills = ({ t, lang }) => (
    <Section id="s-2" eyebrow="§ 03" title={lang === 'es' ? 'Habilidades' : 'Skills'}>
      <div style={{ display: 'grid', gap: 14 }}>
        {t.skills.map((s, i) => (
          <div key={s.label} style={{ display: 'grid', gridTemplateColumns: '30px 1fr 120px 80px', gap: 16, alignItems: 'baseline', paddingBottom: 12, borderBottom: `1px solid ${C.rule}` }}>
            <span style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.mute }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontFamily: 'var(--serif-v1)', fontSize: 20, color: C.ink, fontWeight: 500 }}>{s.label}</span>
            <div style={{ height: 2, background: C.bg2, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, width: `${s.level}%`, background: C.accent }} />
            </div>
            <span style={{ fontFamily: 'var(--mono-v1)', fontSize: 10, color: C.mute, letterSpacing: 1, textTransform: 'uppercase', textAlign: 'right' }}>{s.tag[lang]}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.mute, letterSpacing: 1.5, textTransform: 'uppercase' }}>
        {lang === 'es' ? 'Metodologías' : 'Methodologies'}
      </div>
      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {t.methods[lang].map(m => <span key={m} style={{ padding: '6px 12px', border: `1px solid ${C.rule}`, fontFamily: 'var(--serif-v1)', fontSize: 14, fontStyle: 'italic', color: C.ink2 }}>{m}</span>)}
      </div>
    </Section>
  );

  const Certs = ({ t, lang }) => (
    <Section id="s-3" eyebrow="§ 04" title={lang === 'es' ? 'Certificaciones' : 'Certifications'} bg={C.bg2 + '60'}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${C.rule}`, background: C.paper }}>
        {t.certifications.map((c, i) => (
          <div key={c.label} style={{ padding: '24px 28px', borderRight: i % 2 === 0 ? `1px solid ${C.rule}` : 'none', borderBottom: i < t.certifications.length - 2 ? `1px solid ${C.rule}` : (i === t.certifications.length - 1 && t.certifications.length % 2 === 1 ? 'none' : `1px solid ${C.rule}`) }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
              <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 10, letterSpacing: 1.5, color: C.gold, fontWeight: 600 }}>{c.code}</div>
              <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 10, color: C.mute, letterSpacing: 1 }}>{c.date[lang]}</div>
            </div>
            <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 19, color: C.ink, marginTop: 10, fontWeight: 500, letterSpacing: -0.2 }}>{c.label}</div>
            <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 14, color: C.mute, marginTop: 4, fontStyle: 'italic' }}>{c.org}</div>
          </div>
        ))}
      </div>
    </Section>
  );

  const Education = ({ t, lang }) => (
    <Section id="s-4" eyebrow="§ 05" title={lang === 'es' ? 'Formación' : 'Education'}>
      {t.education.map(e => (
        <div key={e.school} style={{ borderLeft: `3px solid ${C.accent}`, paddingLeft: 28 }}>
          <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.mute, letterSpacing: 1, textTransform: 'uppercase' }}>{e.period} · {e.status[lang]}</div>
          <h3 style={{ fontFamily: 'var(--serif-v1)', fontSize: 32, color: C.ink, margin: '6px 0 4px', fontWeight: 500, letterSpacing: -0.5 }}>{e.degree[lang]}</h3>
          <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 17, color: C.ink2, fontStyle: 'italic' }}>{e.school}</div>
          <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 15, color: C.mute, marginTop: 10, lineHeight: 1.6 }}>{e.focus[lang]}</div>
        </div>
      ))}
    </Section>
  );

  const Experience = ({ t, lang }) => (
    <Section id="s-5" eyebrow="§ 06" title={lang === 'es' ? 'Experiencia' : 'Experience'} bg={C.bg2 + '60'}>
      {t.experience.map(x => (
        <div key={x.company}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${C.rule}`, paddingBottom: 10 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif-v1)', fontSize: 26, color: C.ink, margin: 0, fontWeight: 500, letterSpacing: -0.3 }}>{x.role[lang]}</h3>
              <div style={{ fontFamily: 'var(--serif-v1)', fontSize: 16, color: C.ink2, fontStyle: 'italic', marginTop: 2 }}>{x.company}</div>
            </div>
            <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.mute, letterSpacing: 1 }}>{x.period[lang]}</div>
          </div>
          <ul style={{ marginTop: 20, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 10, fontFamily: 'var(--serif-v1)', fontSize: 17, color: C.ink2, lineHeight: 1.6 }}>
            {x.bullets[lang].map((b, i) => (
              <li key={i} style={{ paddingLeft: 24, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: C.accent, fontFamily: 'var(--serif-v1)', fontStyle: 'italic' }}>·</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );

  const Contact = ({ t, lang }) => (
    <section id="s-6" style={{ padding: '96px 80px', background: C.ink, color: C.paper, borderTop: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: C.gold, marginBottom: 24 }}>§ 07 · {lang === 'es' ? 'Contacto' : 'Contact'}</div>
      <h2 style={{ fontFamily: 'var(--serif-v1)', fontSize: 72, margin: 0, fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
        {lang === 'es' ? 'Conversemos.' : 'Let’s talk.'}
      </h2>
      <p style={{ fontFamily: 'var(--serif-v1)', fontSize: 20, color: '#d9c9a3', marginTop: 16, maxWidth: 560, lineHeight: 1.5 }}>
        {lang === 'es' ? '¿Una oportunidad, una pasantía, un proyecto freelance? Escríbeme.' : 'An opportunity, an internship, freelance work? Reach out.'}
      </p>
      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: `1px solid #55483a` }}>
        {[
          { k: 'Email', v: t.email, href: `mailto:${t.email}` },
          { k: lang === 'es' ? 'Teléfono' : 'Phone', v: t.phone, href: `tel:${t.phone.replace(/\s/g, '')}` },
          { k: 'LinkedIn', v: 'www.linkedin.com/in/miguel-neira-nadal-906274332', href: t.linkedin },
          { k: 'GitHub', v: 'github.com/miguel-neira', href: t.github },
        ].map((c, i) => (
          <a key={c.k} href={c.href} style={{ padding: '24px 0', borderBottom: `1px solid #55483a`, borderRight: i % 2 === 0 ? `1px solid #55483a` : 'none', paddingLeft: i % 2 === 0 ? 0 : 32, paddingRight: i % 2 === 0 ? 32 : 0, color: C.paper, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'var(--mono-v1)', fontSize: 11, color: C.gold, letterSpacing: 1.5, textTransform: 'uppercase' }}>{c.k}</span>
            <span style={{ fontFamily: 'var(--serif-v1)', fontSize: 18 }}>{c.v} →</span>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 48, fontFamily: 'var(--mono-v1)', fontSize: 10, color: '#8a7a62', letterSpacing: 1.5, textTransform: 'uppercase' }}>
        © 2026 · M. Neira N. · {t.ui.hostingNote[lang]}
      </div>
    </section>
  );

  const V1App = () => {
    const [lang, setLang] = React.useState('es');
    const t = window.MIGUEL;
    return (
      <div style={{ background: C.bg, color: C.ink, fontFamily: 'var(--serif-v1)', minHeight: '100%' }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&display=swap');
          :root { --serif-v1: 'Fraunces', Georgia, serif; --mono-v1: 'JetBrains Mono', ui-monospace, monospace; }`}</style>
        <Nav t={t} lang={lang} setLang={setLang} />
        <Hero t={t} lang={lang} />
        <About t={t} lang={lang} />
        <Project t={t} lang={lang} />
        <Skills t={t} lang={lang} />
        <Certs t={t} lang={lang} />
        <Education t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </div>
    );
  };

  return V1App;
})();

window.V1App = V1;
