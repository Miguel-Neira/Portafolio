// V2 — Editorial técnico / Bloomberg en tierra
// Grid marcado, números tabulares, densidad de información, tono analítico.
const V2 = (() => {
  const C = {
    bg: '#efe7d6',
    panel: '#f8f1df',
    ink: '#1c1a15',
    ink2: '#4a4338',
    mute: '#8b7e63',
    rule: '#2a2620',
    rule2: '#c4b48e',
    accent: '#c2471a',
    gold: '#a77a1a',
    green: '#4e6b2f',
  };

  const Hdr = ({ t, lang, setLang }) => (
    <header style={{ borderBottom: `2px solid ${C.rule}`, background: C.bg }}>
      <div style={{ padding: '10px 48px', borderBottom: `1px solid ${C.rule2}`, display: 'flex', gap: 24, fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 1, color: C.ink2, textTransform: 'uppercase' }}>
        <span>{new Date().toLocaleDateString(lang === 'es' ? 'es-CL' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span style={{ flex: 1 }} />
        <span>Vol. I · No. 01</span>
        <span>SCL · CL</span>
        <span style={{ color: C.green }}>● ONLINE</span>
      </div>
      <div style={{ padding: '32px 48px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, letterSpacing: 3, color: C.accent, textTransform: 'uppercase', fontWeight: 700 }}>The Miguel Neira Journal</div>
          <h1 style={{ fontFamily: 'var(--serif-v2)', fontSize: 84, fontWeight: 800, margin: '4px 0 0', letterSpacing: -2.5, color: C.ink, lineHeight: 0.9 }}>
            MIGUEL<span style={{ color: C.accent }}>·</span>NEIRA
          </h1>
          <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 20, fontStyle: 'italic', color: C.ink2, marginTop: 8 }}>{t.role[lang]} · est. 2022</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{ border: `1px solid ${C.rule}`, background: 'transparent', padding: '8px 14px', fontFamily: 'var(--mono-v2)', fontSize: 11, color: C.ink, cursor: 'pointer', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
            {lang === 'es' ? '[ ES | en ]' : '[ es | EN ]'}
          </button>
          <a href={t.cvFile} download style={{ padding: '8px 14px', background: C.ink, color: C.bg, textDecoration: 'none', fontFamily: 'var(--mono-v2)', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>CV.PDF ↓</a>
        </div>
      </div>
      <nav style={{ padding: '10px 48px', borderTop: `1px solid ${C.rule2}`, display: 'flex', gap: 32, fontFamily: 'var(--mono-v2)', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: C.ink2 }}>
        {t.ui.nav[lang].map((n, i) => <a key={i} href={`#v2-${i}`} style={{ color: 'inherit', textDecoration: 'none' }}>§ {String(i + 1).padStart(2, '0')} {n}</a>)}
      </nav>
    </header>
  );

  const Ticker = ({ t, lang }) => (
    <div style={{ background: C.ink, color: C.bg, padding: '14px 48px', display: 'flex', gap: 48, fontFamily: 'var(--mono-v2)', fontSize: 12, letterSpacing: 1, overflow: 'hidden' }}>
      {[
        { k: 'PYTHON', v: '92', d: '+3.1' },
        { k: 'SQL', v: '82', d: '+1.4' },
        { k: 'ML', v: '72', d: '+4.2' },
        { k: 'CERTS', v: '05', d: '+1' },
        { k: 'PROJ', v: '01', d: '—' },
        { k: 'YRS.RETAIL', v: '05', d: '' },
        { k: 'LOC', v: 'SCL', d: '' },
      ].map(x => (
        <span key={x.k} style={{ display: 'flex', gap: 8, whiteSpace: 'nowrap' }}>
          <span style={{ color: C.gold }}>{x.k}</span>
          <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{x.v}</span>
          {x.d && <span style={{ color: x.d.startsWith('+') ? '#8ec575' : x.d.startsWith('-') ? '#e07866' : '#998266' }}>{x.d}</span>}
        </span>
      ))}
    </div>
  );

  const Lead = ({ t, lang }) => (
    <section id="v2-0" style={{ padding: '56px 48px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, borderBottom: `1px solid ${C.rule}` }}>
      <div>
        <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>LEAD · {lang === 'es' ? 'Editorial' : 'Editorial'}</div>
        <h2 style={{ fontFamily: 'var(--serif-v2)', fontSize: 56, fontWeight: 700, margin: 0, lineHeight: 1.02, letterSpacing: -1.2, color: C.ink }}>
          {t.hero[lang].greeting} <span style={{ fontStyle: 'italic', fontWeight: 500, color: C.accent }}>{lang === 'es' ? 'Arquitecto de ecosistemas digitales' : 'Digital ecosystems architect'}</span> — {lang === 'es' ? 'desde el backend hasta el modelo.' : 'from backend to model.'}
        </h2>
        <p style={{ fontFamily: 'var(--serif-v2)', fontSize: 19, lineHeight: 1.6, color: C.ink2, marginTop: 28, maxWidth: 560 }}>
          {t.hero[lang].pitch}
        </p>
      </div>
      <aside style={{ borderLeft: `1px solid ${C.rule2}`, paddingLeft: 32 }}>
        <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.mute, textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>{lang === 'es' ? 'FICHA' : 'FACT SHEET'}</div>
        {[
          [lang === 'es' ? 'Ubicación' : 'Location', t.location[lang]],
          [lang === 'es' ? 'Disponibilidad' : 'Availability', t.hero[lang].tag],
          [lang === 'es' ? 'Formación' : 'Education', 'INACAP · 2025'],
          [lang === 'es' ? 'Especialidad' : 'Focus', 'Python · ML · Data'],
          [lang === 'es' ? 'Idiomas' : 'Languages', 'ES (nativo) · EN (A2)'],
          ['Email', t.email],
          [lang === 'es' ? 'Teléfono' : 'Phone', t.phone],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '10px 0', borderBottom: `1px dotted ${C.rule2}`, fontFamily: 'var(--mono-v2)', fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ color: C.mute, letterSpacing: 1, textTransform: 'uppercase', fontSize: 10 }}>{k}</span>
            <span style={{ color: C.ink }}>{v}</span>
          </div>
        ))}
      </aside>
    </section>
  );

  const About = ({ t, lang }) => (
    <section id="v2-0b" style={{ padding: '56px 48px', background: C.panel, borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 20, fontWeight: 700 }}>§ 01 · {lang === 'es' ? 'Sobre mí' : 'About'}</div>
      <div style={{ columnCount: 3, columnGap: 40, fontFamily: 'var(--serif-v2)', fontSize: 17, lineHeight: 1.65, color: C.ink2, columnRule: `1px solid ${C.rule2}` }}>
        {t.about[lang].map((p, i) => <p key={i} style={{ margin: 0, marginBottom: 16, breakInside: 'avoid' }}>{i === 0 && <span style={{ float: 'left', fontFamily: 'var(--serif-v2)', fontSize: 56, lineHeight: 0.85, fontWeight: 700, color: C.accent, marginRight: 8, marginTop: 4 }}>{p.charAt(0)}</span>}{i === 0 ? p.slice(1) : p}</p>)}
      </div>
    </section>
  );

  const Project = ({ t, lang }) => {
    const p = t.project;
    return (
      <section id="v2-1" style={{ padding: '56px 48px', borderBottom: `1px solid ${C.rule}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', fontWeight: 700 }}>
          <span>§ 02 · {lang === 'es' ? 'Proyecto destacado' : 'Flagship project'}</span>
          <span style={{ color: C.mute }}>{p.period}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, borderTop: `3px solid ${C.ink}`, paddingTop: 24 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--serif-v2)', fontSize: 72, fontWeight: 700, margin: 0, letterSpacing: -2, color: C.ink, lineHeight: 0.95 }}>
              {p.name}
            </h3>
            <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 20, fontStyle: 'italic', color: C.mute, marginTop: 6 }}>{p.tagline[lang]}</div>
            <p style={{ fontFamily: 'var(--serif-v2)', fontSize: 19, lineHeight: 1.55, color: C.ink, marginTop: 24, maxWidth: 620 }}>
              <span style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, background: C.ink, color: C.bg, padding: '3px 8px', marginRight: 10, letterSpacing: 1, textTransform: 'uppercase' }}>{lang === 'es' ? 'Resumen' : 'Summary'}</span>
              {p.summary[lang]}
            </p>
          </div>
          <div style={{ border: `1px solid ${C.rule}`, padding: 20, background: C.ink, color: C.bg }}>
            <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>{lang === 'es' ? 'Rol' : 'Role'}</div>
            <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 20, lineHeight: 1.3, marginBottom: 20 }}>{p.role[lang]}</div>
            <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.stack.map(s => <span key={s} style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, padding: '4px 8px', border: `1px solid ${C.gold}`, color: C.gold }}>{s}</span>)}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, border: `1px solid ${C.rule2}` }}>
          {p.pillars.map((pl, i) => (
            <div key={pl.key} style={{ padding: 20, borderRight: i < 4 ? `1px solid ${C.rule2}` : 'none', background: C.panel }}>
              <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>0{i + 1} /05</div>
              <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 17, fontWeight: 700, color: C.ink, marginBottom: 8, lineHeight: 1.15, letterSpacing: -0.2 }}>{pl.title[lang]}</div>
              <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 13, lineHeight: 1.5, color: C.ink2 }}>{pl.body[lang]}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const Skills = ({ t, lang }) => (
    <section id="v2-2" style={{ padding: '56px 48px', background: C.panel, borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>§ 03 · {lang === 'es' ? 'Habilidades · Índice' : 'Skills · Index'}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mono-v2)', fontSize: 13 }}>
        <thead>
          <tr style={{ borderTop: `2px solid ${C.ink}`, borderBottom: `2px solid ${C.ink}` }}>
            {['#', lang === 'es' ? 'Tecnología' : 'Technology', lang === 'es' ? 'Nivel' : 'Level', 'Score', lang === 'es' ? 'Categoría' : 'Category'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '10px 12px', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: C.mute, fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.skills.map((s, i) => (
            <tr key={s.label} style={{ borderBottom: `1px solid ${C.rule2}` }}>
              <td style={{ padding: '12px', color: C.mute, fontVariantNumeric: 'tabular-nums', width: 40 }}>{String(i + 1).padStart(2, '0')}</td>
              <td style={{ padding: '12px', fontFamily: 'var(--serif-v2)', fontSize: 17, fontWeight: 600, color: C.ink }}>{s.label}</td>
              <td style={{ padding: '12px', width: '35%' }}>
                <div style={{ height: 8, background: C.bg, border: `1px solid ${C.rule2}`, position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, width: `${s.level}%`, background: `repeating-linear-gradient(45deg, ${C.accent}, ${C.accent} 3px, ${C.gold} 3px, ${C.gold} 6px)` }} />
                </div>
              </td>
              <td style={{ padding: '12px', fontVariantNumeric: 'tabular-nums', fontWeight: 700, color: C.ink, width: 70 }}>{s.level}</td>
              <td style={{ padding: '12px', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: C.accent, fontWeight: 600 }}>{s.tag[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center', paddingTop: 20, borderTop: `1px solid ${C.rule2}` }}>
        <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, color: C.mute, letterSpacing: 1.5, textTransform: 'uppercase' }}>{lang === 'es' ? 'Metodologías' : 'Methods'}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {t.methods[lang].map(m => <span key={m} style={{ padding: '4px 10px', background: C.ink, color: C.bg, fontFamily: 'var(--mono-v2)', fontSize: 11, letterSpacing: 0.5 }}>{m}</span>)}
        </div>
      </div>
    </section>
  );

  const Certs = ({ t, lang }) => (
    <section id="v2-3" style={{ padding: '56px 48px', borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>§ 04 · {lang === 'es' ? 'Certificaciones · Registro' : 'Certifications · Registry'}</div>
      <div style={{ border: `2px solid ${C.ink}` }}>
        {t.certifications.map((c, i) => (
          <div key={c.label} style={{ display: 'grid', gridTemplateColumns: '80px 80px 1fr 200px', gap: 20, padding: '18px 20px', borderBottom: i < t.certifications.length - 1 ? `1px solid ${C.rule2}` : 'none', alignItems: 'center', background: i % 2 === 0 ? C.panel : 'transparent' }}>
            <span style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, color: C.mute, fontVariantNumeric: 'tabular-nums' }}>CERT-{String(i + 1).padStart(3, '0')}</span>
            <span style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 1, padding: '3px 6px', border: `1px solid ${C.accent}`, width: 'fit-content' }}>{c.code}</span>
            <div>
              <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 19, fontWeight: 600, color: C.ink, lineHeight: 1.2 }}>{c.label}</div>
              <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 14, color: C.mute, fontStyle: 'italic', marginTop: 2 }}>{c.org}</div>
            </div>
            <span style={{ fontFamily: 'var(--mono-v2)', fontSize: 11, color: C.ink, letterSpacing: 1, textAlign: 'right' }}>◷ {c.date[lang]}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const Education = ({ t, lang }) => (
    <section id="v2-4" style={{ padding: '56px 48px', background: C.panel, borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>§ 05 · {lang === 'es' ? 'Formación' : 'Education'}</div>
      {t.education.map(e => (
        <div key={e.school} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, paddingTop: 20, borderTop: `2px solid ${C.ink}` }}>
          <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 13, color: C.ink, fontWeight: 700, letterSpacing: 1 }}>
            {e.period}<br />
            <span style={{ color: C.accent, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2 }}>[ {e.status[lang]} ]</span>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--serif-v2)', fontSize: 36, fontWeight: 700, margin: 0, letterSpacing: -0.8, color: C.ink, lineHeight: 1 }}>{e.degree[lang]}</h3>
            <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 18, color: C.ink2, marginTop: 4, fontStyle: 'italic' }}>{e.school}</div>
            <div style={{ marginTop: 16, fontFamily: 'var(--mono-v2)', fontSize: 12, color: C.ink2, letterSpacing: 0.5, lineHeight: 1.8 }}>
              {e.focus[lang].split(' · ').map((f, i) => <span key={i} style={{ marginRight: 8 }}>▸ {f}</span>)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );

  const Experience = ({ t, lang }) => (
    <section id="v2-5" style={{ padding: '56px 48px', borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>§ 06 · {lang === 'es' ? 'Experiencia' : 'Experience'}</div>
      {t.experience.map(x => (
        <div key={x.company} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, paddingTop: 24, borderTop: `2px solid ${C.ink}` }}>
          <div>
            <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 12, color: C.accent, fontWeight: 700, letterSpacing: 1 }}>{x.period[lang]}</div>
            <h3 style={{ fontFamily: 'var(--serif-v2)', fontSize: 30, fontWeight: 700, margin: '6px 0 2px', letterSpacing: -0.5, color: C.ink, lineHeight: 1.05 }}>{x.role[lang]}</h3>
            <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 16, color: C.ink2, fontStyle: 'italic' }}>{x.company}</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14, fontFamily: 'var(--serif-v2)', fontSize: 17, lineHeight: 1.55, color: C.ink2 }}>
            {x.bullets[lang].map((b, i) => (
              <li key={i} style={{ paddingLeft: 28, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 4, fontFamily: 'var(--mono-v2)', fontSize: 10, color: C.accent, fontWeight: 700 }}>0{i + 1}</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );

  const Contact = ({ t, lang }) => (
    <footer id="v2-6" style={{ padding: '56px 48px', background: C.ink, color: C.bg }}>
      <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>§ 07 · {lang === 'es' ? 'Contacto' : 'Contact'}</div>
      <h2 style={{ fontFamily: 'var(--serif-v2)', fontSize: 88, fontWeight: 800, margin: 0, letterSpacing: -2.5, lineHeight: 0.95, color: C.bg }}>
        {lang === 'es' ? '¿Hablamos?' : 'Shall we talk?'}
      </h2>
      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, borderTop: `1px solid #3d362a`, paddingTop: 24 }}>
        {[
          { k: 'EMAIL', v: t.email, href: `mailto:${t.email}` },
          { k: 'TEL', v: t.phone, href: `tel:${t.phone.replace(/\s/g, '')}` },
          { k: 'LINKEDIN', v: '/miguel-neira', href: t.linkedin },
          { k: 'GITHUB', v: '@miguel-neira', href: t.github },
        ].map(c => (
          <a key={c.k} href={c.href} style={{ color: C.bg, textDecoration: 'none', display: 'block' }}>
            <div style={{ fontFamily: 'var(--mono-v2)', fontSize: 10, color: C.gold, letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>{c.k}</div>
            <div style={{ fontFamily: 'var(--serif-v2)', fontSize: 20, letterSpacing: -0.3 }}>{c.v} →</div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 40, fontFamily: 'var(--mono-v2)', fontSize: 10, color: C.mute, letterSpacing: 1.5, textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
        <span>© 2026 · The Miguel Neira Journal · {lang === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}</span>
        <span>{t.ui.hostingNote[lang]}</span>
      </div>
    </footer>
  );

  const V2App = () => {
    const [lang, setLang] = React.useState('es');
    const t = window.MIGUEL;
    return (
      <div style={{ background: C.bg, color: C.ink, minHeight: '100%' }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
          :root { --serif-v2: 'Playfair Display', Georgia, serif; --mono-v2: 'IBM Plex Mono', ui-monospace, monospace; }`}</style>
        <Hdr t={t} lang={lang} setLang={setLang} />
        <Ticker t={t} lang={lang} />
        <Lead t={t} lang={lang} />
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

  return V2App;
})();

window.V2App = V2;
