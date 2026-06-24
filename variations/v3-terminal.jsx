// V3 — Editorial + Terminal híbrido
// Serif editorial + bloques tipo terminal monospace, paleta tierra más oscura.
const V3 = (() => {
  // Paleta — Azul medianoche + cian eléctrico (light mode, claro y limpio)
  const C = {
    bg: '#0d1b3d',         // azul medianoche profundo (header/footer/dark sections)
    bg2: '#142555',        // azul medianoche un tono más claro
    panel: '#1a2f6b',      // panel terminal
    paper: '#f4f7fc',      // papel claro principal (light mode body)
    paper2: '#e6edf7',     // papel claro alterno
    ink: '#f0f6ff',        // texto sobre fondos oscuros
    ink2: '#b8cae8',       // texto secundario sobre oscuros
    mute: '#7088b8',       // muted azul sobre oscuros
    rule: '#243a72',       // borde sobre oscuros
    accent: '#00d4ff',     // cian eléctrico (acento principal)
    gold: '#5fa8ff',       // azul cielo (acento secundario)
    green: '#3ee6c4',      // verde-cian para "online/disponible"
  };

  const Nav = ({ t, lang, setLang }) => (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: `${C.bg}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.rule}`, padding: '16px 56px', display: 'flex', alignItems: 'center', gap: 24, fontFamily: 'var(--mono-v3)', fontSize: 12 }}>
      <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 13, color: C.accent, fontWeight: 700, letterSpacing: 1 }}>
        <span style={{ color: C.green }}>~/</span>miguel<span style={{ color: C.mute }}>@neira:</span><span style={{ color: C.ink }}>$</span>
      </div>
      <div style={{ display: 'flex', gap: 18, color: C.ink2, flex: 1, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>
        {t.ui.nav[lang].map((n, i) => <a key={i} href={`#v3-${i}`} style={{ color: 'inherit', textDecoration: 'none' }}>./{n.toLowerCase().replace(/\s/g, '_')}</a>)}
      </div>
      <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{ border: `1px solid ${C.rule}`, background: 'transparent', padding: '6px 12px', fontFamily: 'inherit', fontSize: 11, color: C.gold, cursor: 'pointer', letterSpacing: 1 }}>
        --lang={lang}
      </button>
      <a href={t.cvFile} download style={{ padding: '7px 14px', background: C.accent, color: C.bg, textDecoration: 'none', fontFamily: 'inherit', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>./cv.pdf</a>
    </nav>
  );

  const Hero = ({ t, lang }) => (
    <header style={{ padding: '64px 56px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 85% 20%, ${C.accent}18, transparent 50%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.green, letterSpacing: 2, marginBottom: 18 }}>
            <span style={{ color: C.mute }}>[</span> {new Date().toISOString().slice(0, 10)} <span style={{ color: C.mute }}>]</span> init_portfolio.py <span style={{ color: C.accent }}>→</span> ok
          </div>
          <h1 style={{ fontFamily: 'var(--serif-v3)', fontSize: 64, fontWeight: 500, lineHeight: 1.05, letterSpacing: -1.5, color: C.ink, margin: 0 }}>
            {t.hero[lang].greeting}<br />
            <span style={{ fontStyle: 'italic', color: C.accent, fontWeight: 400 }}>{lang === 'es' ? 'Desarrollador' : 'Full Stack'}</span> <span style={{ color: C.gold }}>{lang === 'es' ? 'Full Stack.' : 'Developer.'}</span>
          </h1>
          <p style={{ fontFamily: 'var(--serif-v3)', fontSize: 18, lineHeight: 1.55, color: C.ink2, maxWidth: 540, marginTop: 24 }}>
            {t.hero[lang].pitch}
          </p>
        </div>
        <div style={{ border: `1px solid ${C.rule}`, background: C.panel, fontFamily: 'var(--mono-v3)', fontSize: 12 }}>
          <div style={{ display: 'flex', gap: 6, padding: '10px 14px', borderBottom: `1px solid ${C.rule}`, alignItems: 'center' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#d96560' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: C.gold }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: C.green }} />
            <span style={{ color: C.mute, marginLeft: 10, fontSize: 11 }}>whoami.sh</span>
          </div>
          <div style={{ padding: 16, color: C.ink2, lineHeight: 1.8 }}>
            <div><span style={{ color: C.accent }}>$</span> whoami</div>
            <div style={{ color: C.ink, paddingLeft: 12 }}>Miguel Neira Nadal</div>
            <div style={{ marginTop: 6 }}><span style={{ color: C.accent }}>$</span> cat role.txt</div>
            <div style={{ color: C.ink, paddingLeft: 12 }}>{t.role[lang]}</div>
            <div style={{ marginTop: 6 }}><span style={{ color: C.accent }}>$</span> pwd</div>
            <div style={{ color: C.ink, paddingLeft: 12 }}>{t.location[lang]}</div>
            <div style={{ marginTop: 6 }}><span style={{ color: C.accent }}>$</span> status</div>
            <div style={{ paddingLeft: 12 }}><span style={{ color: C.green }}>●</span> <span style={{ color: C.ink }}>{t.hero[lang].tag}</span></div>
            <div style={{ marginTop: 6 }}><span style={{ color: C.accent }}>$</span> <span style={{ background: C.ink, color: C.bg, padding: '0 4px' }}>_</span></div>
          </div>
        </div>
      </div>
    </header>
  );

  // Papel: secciones alternan fondo claro (papel) vs oscuro (terminal)
  const PaperSection = ({ id, eyebrow, title, children }) => (
    <section id={id} style={{ background: C.paper, color: '#0d1b3d', padding: '80px 56px', borderTop: `1px solid ${C.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#0070a8', marginBottom: 10, fontWeight: 600 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: 'var(--serif-v3)', fontSize: 32, fontWeight: 500, margin: 0, lineHeight: 1.05, letterSpacing: -0.5 }}>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );

  const DarkSection = ({ id, eyebrow, title, children }) => (
    <section id={id} style={{ background: C.bg, padding: '80px 56px', borderTop: `1px solid ${C.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: C.accent, marginBottom: 10, fontWeight: 600 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: 'var(--serif-v3)', fontSize: 32, fontWeight: 500, margin: 0, color: C.ink, lineHeight: 1.05, letterSpacing: -0.5 }}>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );

  const About = ({ t, lang }) => (
    <PaperSection id="v3-0" eyebrow="// 01 · whoami" title={lang === 'es' ? 'Sobre mí' : 'About'}>
      <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 20, lineHeight: 1.65, color: '#3a4a78', maxWidth: 680 }}>
        {t.about[lang].map((p, i) => (
          <p key={i} style={{ margin: i === 0 ? '0 0 22px' : '0 0 18px' }}>
            {i === 0 && <span style={{ fontFamily: 'var(--serif-v3)', fontSize: 56, lineHeight: 0.85, float: 'left', marginRight: 12, marginTop: 6, color: '#0070a8', fontWeight: 500 }}>{p.charAt(0)}</span>}
            {i === 0 ? p.slice(1) : p}
          </p>
        ))}
      </div>
    </PaperSection>
  );

  const Project = ({ t, lang }) => {
    const p = t.project;
    return (
      <DarkSection id="v3-1" eyebrow="// 02 · flagship" title={lang === 'es' ? 'Proyecto' : 'Project'}>
        <div style={{ border: `1px solid ${C.rule}`, background: C.panel, padding: 28 }}>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.mute, letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
            <span>$ cat project.md</span>
            <span>{p.period}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--serif-v3)', fontSize: 44, margin: '8px 0 4px', color: C.ink, fontWeight: 500, letterSpacing: -1, lineHeight: 1.05 }}>
            {p.name}<span style={{ color: C.accent }}>.</span>
          </h3>
          <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 19, color: C.gold, fontStyle: 'italic', marginBottom: 20 }}>{p.tagline[lang]}</div>
          <p style={{ fontFamily: 'var(--serif-v3)', fontSize: 18, lineHeight: 1.55, color: C.ink2, maxWidth: 700, margin: 0 }}>{p.summary[lang]}</p>
          <div style={{ marginTop: 20, display: 'inline-block', fontFamily: 'var(--mono-v3)', fontSize: 11, padding: '4px 10px', border: `1px solid ${C.accent}`, color: C.accent, letterSpacing: 1 }}>
            ROLE → {p.role[lang]}
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {p.pillars.map((pl, i) => (
            <div key={pl.key} style={{ border: `1px solid ${C.rule}`, padding: 20, background: C.bg2, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, background: C.accent, color: C.bg, fontFamily: 'var(--mono-v3)', fontSize: 10, padding: '2px 8px', letterSpacing: 1, fontWeight: 700 }}>0{i + 1}</div>
              <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 20, fontWeight: 500, color: C.ink, marginTop: 16, letterSpacing: -0.3, lineHeight: 1.2 }}>{pl.title[lang]}</div>
              <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 14, lineHeight: 1.55, color: C.ink2, marginTop: 8 }}>{pl.body[lang]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: 16, background: C.panel, border: `1px solid ${C.rule}`, fontFamily: 'var(--mono-v3)', fontSize: 12, color: C.ink2 }}>
          <span style={{ color: C.green }}>$</span> stack --list&nbsp;&nbsp;
          {p.stack.map((s, i) => <span key={s} style={{ color: [C.accent, C.gold, C.green][i % 3], marginRight: 12 }}>[{s}]</span>)}
        </div>
      </DarkSection>
    );
  };

  const Skills = ({ t, lang }) => (
    <PaperSection id="v3-2" eyebrow="// 03 · ls ./skills" title={lang === 'es' ? 'Habilidades' : 'Skills'}>
      <div style={{ display: 'grid', gap: 10 }}>
        {t.skills.map((s, i) => (
          <div key={s.label} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 200px 60px 90px', gap: 16, alignItems: 'center', padding: '10px 0', borderBottom: `1px dotted #cad7e8` }}>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: '#7088b8', fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}.</span>
            <span style={{ fontFamily: 'var(--serif-v3)', fontSize: 20, color: '#0d1b3d', fontWeight: 500 }}>{s.label}</span>
            <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: '#0070a8', letterSpacing: 0.5 }}>
              [{'█'.repeat(Math.round(s.level / 5))}{'░'.repeat(20 - Math.round(s.level / 5))}]
            </div>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 13, fontWeight: 700, color: '#0d1b3d', fontVariantNumeric: 'tabular-nums' }}>{s.level}%</span>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 10, color: '#0070a8', letterSpacing: 1, textTransform: 'uppercase', textAlign: 'right' }}>{s.tag[lang]}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, fontFamily: 'var(--mono-v3)', fontSize: 11, color: '#7088b8', letterSpacing: 1.5, textTransform: 'uppercase' }}>
        $ cat methods.txt
      </div>
      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {t.methods[lang].map(m => <span key={m} style={{ padding: '6px 12px', background: '#0d1b3d', color: C.paper, fontFamily: 'var(--mono-v3)', fontSize: 12, letterSpacing: 0.5 }}>{m}</span>)}
      </div>
    </PaperSection>
  );

  const Certs = ({ t, lang }) => (
    <DarkSection id="v3-3" eyebrow="// 04 · credentials" title={lang === 'es' ? 'Certificaciones' : 'Certifications'}>
      <div style={{ display: 'grid', gap: 0, border: `1px solid ${C.rule}` }}>
        {t.certifications.map((c, i) => (
          <div key={c.label} style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 20, padding: '18px 24px', borderBottom: i < t.certifications.length - 1 ? `1px solid ${C.rule}` : 'none', background: i % 2 === 0 ? C.panel : C.bg2, alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.accent, letterSpacing: 1.5, fontWeight: 700, padding: '4px 8px', border: `1px solid ${C.accent}`, width: 'fit-content' }}>{c.code}</span>
            <div>
              <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 20, color: C.ink, fontWeight: 500, letterSpacing: -0.2 }}>{c.label}</div>
              <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 14, color: C.mute, fontStyle: 'italic', marginTop: 2 }}>{c.org}</div>
            </div>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.gold, letterSpacing: 1 }}>◷ {c.date[lang]}</span>
          </div>
        ))}
      </div>
    </DarkSection>
  );

  const Education = ({ t, lang }) => (
    <PaperSection id="v3-4" eyebrow="// 05 · education" title={lang === 'es' ? 'Formación' : 'Education'}>
      {t.education.map(e => (
        <div key={e.school} style={{ borderLeft: `3px solid #0070a8`, paddingLeft: 28 }}>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: '#7088b8', letterSpacing: 1, textTransform: 'uppercase' }}>{e.period} · <span style={{ color: '#0070a8' }}>[{e.status[lang]}]</span></div>
          <h3 style={{ fontFamily: 'var(--serif-v3)', fontSize: 36, color: '#0d1b3d', margin: '6px 0 4px', fontWeight: 500, letterSpacing: -0.8, lineHeight: 1 }}>{e.degree[lang]}</h3>
          <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 18, color: '#3a4a78', fontStyle: 'italic' }}>{e.school}</div>
          <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 12, color: '#7088b8', marginTop: 14, lineHeight: 1.9 }}>
            {e.focus[lang].split(' · ').map((f, i) => <span key={i} style={{ marginRight: 10 }}>▸ {f}</span>)}
          </div>
        </div>
      ))}
    </PaperSection>
  );

  const Experience = ({ t, lang }) => (
    <DarkSection id="v3-5" eyebrow="// 06 · git log" title={lang === 'es' ? 'Experiencia' : 'Experience'}>
      {t.experience.map(x => (
        <div key={x.company}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${C.rule}`, paddingBottom: 12 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif-v3)', fontSize: 28, color: C.ink, margin: 0, fontWeight: 500, letterSpacing: -0.3 }}>{x.role[lang]}</h3>
              <div style={{ fontFamily: 'var(--serif-v3)', fontSize: 16, color: C.gold, fontStyle: 'italic', marginTop: 2 }}>{x.company}</div>
            </div>
            <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.accent, letterSpacing: 1 }}>{x.period[lang]}</div>
          </div>
          <ul style={{ marginTop: 20, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 12, fontFamily: 'var(--serif-v3)', fontSize: 17, color: C.ink2, lineHeight: 1.6 }}>
            {x.bullets[lang].map((b, i) => (
              <li key={i} style={{ paddingLeft: 28, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 4, fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.accent }}>●</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </DarkSection>
  );

  const Contact = ({ t, lang }) => (
    <section id="v3-6" style={{ padding: '96px 56px', background: C.bg, color: C.ink, borderTop: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: C.accent, marginBottom: 24, fontWeight: 600 }}>// 07 · {lang === 'es' ? 'contacto' : 'contact'}</div>
      <h2 style={{ fontFamily: 'var(--serif-v3)', fontSize: 56, margin: 0, fontWeight: 400, letterSpacing: -1.2, lineHeight: 1.05, color: C.ink }}>
        {lang === 'es' ? 'Conversemos' : 'Let’s talk'}<span style={{ color: C.accent }}>.</span>
      </h2>
      <p style={{ fontFamily: 'var(--serif-v3)', fontSize: 21, color: C.ink2, marginTop: 18, maxWidth: 580, lineHeight: 1.5 }}>
        {lang === 'es' ? '¿Una oportunidad, una pasantía, un proyecto freelance? Escríbeme.' : 'An opportunity, an internship, freelance work? Reach out.'}
      </p>
      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: `1px solid ${C.rule}`, background: C.panel }}>
        {[
          { k: 'email', v: t.email, href: `mailto:${t.email}` },
          { k: 'phone', v: t.phone, href: `tel:${t.phone.replace(/\s/g, '')}` },
          { k: 'linkedin', v: 'www.linkedin.com/in/miguel-neira-nadal-906274332', href: t.linkedin },
          { k: 'github', v: 'github.com/miguel-neira', href: t.github },
        ].map((c, i) => (
          <a key={c.k} href={c.href} style={{ padding: '22px 24px', borderBottom: i < 2 ? `1px solid ${C.rule}` : 'none', borderRight: i % 2 === 0 ? `1px solid ${C.rule}` : 'none', color: C.ink, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'var(--mono-v3)', fontSize: 11, color: C.gold, letterSpacing: 1.5, textTransform: 'uppercase' }}>./{c.k}</span>
            <span style={{ fontFamily: 'var(--serif-v3)', fontSize: 18 }}>{c.v} →</span>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 40, fontFamily: 'var(--mono-v3)', fontSize: 10, color: C.mute, letterSpacing: 1.5, textTransform: 'uppercase' }}>
        <p>Miguel Neira Nadal</p>
      </div>
    </section>
  );

  const V3App = () => {
    const [lang, setLang] = React.useState('es');
    const t = window.MIGUEL;
    return (
      <div style={{ background: C.bg, color: C.ink, minHeight: '100%' }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
          :root { --serif-v3: 'Cormorant Garamond', Georgia, serif; --mono-v3: 'JetBrains Mono', ui-monospace, monospace; }`}</style>
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

  return V3App;
})();

window.V3App = V3;
