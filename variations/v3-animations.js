// V3 animations layer — se inyecta al montar el portafolio.
// Añade: fade-in on scroll, typewriter en hero, cursor parpadeante en terminal,
// barras de skill animándose al aparecer, hover refinados, grain sutil.

(function () {
  if (window.__v3anim_installed) return;
  window.__v3anim_installed = true;

  // ── 1. Inyectar estilos ─────────────────────────────────────
  const css = `
    /* Grain overlay sobre todo */
    body::before {
      content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.7 0 0 0 0 1 0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      opacity: .35; mix-blend-mode: overlay;
    }

    /* Reveal on scroll */
    .v3-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1);
      will-change: opacity, transform;
    }
    .v3-reveal.in {
      opacity: 1;
      transform: translateY(0);
    }
    .v3-reveal-stagger > * {
      opacity: 0; transform: translateY(16px);
      transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1);
    }
    .v3-reveal-stagger.in > * { opacity: 1; transform: translateY(0); }
    .v3-reveal-stagger.in > *:nth-child(1) { transition-delay: .05s }
    .v3-reveal-stagger.in > *:nth-child(2) { transition-delay: .12s }
    .v3-reveal-stagger.in > *:nth-child(3) { transition-delay: .19s }
    .v3-reveal-stagger.in > *:nth-child(4) { transition-delay: .26s }
    .v3-reveal-stagger.in > *:nth-child(5) { transition-delay: .33s }
    .v3-reveal-stagger.in > *:nth-child(6) { transition-delay: .4s }
    .v3-reveal-stagger.in > *:nth-child(7) { transition-delay: .47s }
    .v3-reveal-stagger.in > *:nth-child(n+8) { transition-delay: .54s }

    /* Cursor parpadeante del terminal */
    @keyframes v3-blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
    .v3-cursor { animation: v3-blink 1s step-end infinite; }

    /* Typewriter: caret móvil */
    @keyframes v3-caret { 0%, 49% { border-color: #e0854a } 50%, 100% { border-color: transparent } }

    /* Hero title — entrada escalonada */
    @keyframes v3-slidein {
      from { opacity: 0; transform: translateY(40px) }
      to { opacity: 1; transform: translateY(0) }
    }
    .v3-hero-line {
      display: inline-block;
      animation: v3-slidein 1s cubic-bezier(.2,.7,.2,1) both;
    }
    .v3-hero-line:nth-child(1) { animation-delay: .1s }
    .v3-hero-line:nth-child(3) { animation-delay: .35s }
    .v3-hero-line:nth-child(5) { animation-delay: .6s }

    /* Barras de skill */
    @keyframes v3-bar-fill {
      from { clip-path: inset(0 100% 0 0) }
      to { clip-path: inset(0 0 0 0) }
    }
    .v3-reveal.in .v3-skill-bar { animation: v3-bar-fill 1.4s cubic-bezier(.2,.7,.2,1) .2s both; }

    /* Hover en enlaces de contacto */
    a[href^="mailto"], a[href^="tel"], a[href*="linkedin"], a[href*="github"] {
      position: relative;
      transition: transform .25s cubic-bezier(.2,.7,.2,1), background .25s;
    }
    a[href^="mailto"]:hover, a[href^="tel"]:hover,
    a[href*="linkedin"]:hover, a[href*="github"]:hover {
      background: rgba(0, 212, 255, .08);
    }

    /* Nav links underline */
    nav a[href^="#v3-"] {
      position: relative;
      transition: color .2s;
    }
    nav a[href^="#v3-"]::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -4px;
      height: 1px; background: #00d4ff; transform: scaleX(0);
      transform-origin: left; transition: transform .3s cubic-bezier(.2,.7,.2,1);
    }
    nav a[href^="#v3-"]:hover { color: #00d4ff !important; }
    nav a[href^="#v3-"]:hover::after { transform: scaleX(1); }

    /* CV button */
    a[href*="CV_"][download] {
      transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s !important;
    }
    a[href*="CV_"][download]:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 212, 255, .45);
    }

    /* Lang button micro-bounce */
    button { transition: transform .2s, background .2s, color .2s; }
    button:hover { transform: translateY(-1px); }

    /* Resaltar línea del terminal al hover */
    .v3-term-line { transition: background .15s; padding: 0 4px; margin: 0 -4px; }
    .v3-term-line:hover { background: rgba(0, 212, 255, .08); }

    /* Pulsing dot sobre "disponible" */
    @keyframes v3-pulse {
      0% { box-shadow: 0 0 0 0 rgba(62, 230, 196, .6) }
      70% { box-shadow: 0 0 0 8px rgba(62, 230, 196, 0) }
      100% { box-shadow: 0 0 0 0 rgba(62, 230, 196, 0) }
    }
    .v3-pulse-dot { animation: v3-pulse 2s infinite; border-radius: 50%; }

    /* Scroll progress bar */
    #v3-progress {
      position: fixed; top: 0; left: 0; height: 2px; background: #00d4ff;
      z-index: 100; width: 0%; transition: width .1s linear;
      box-shadow: 0 0 8px rgba(0, 212, 255, .6);
    }

    /* Smooth font transition cuando cambia idioma */
    h1, h2, h3, p { transition: color .3s; }

    /* Deshabilitar animaciones si el usuario prefiere reducir */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
      .v3-reveal { opacity: 1 !important; transform: none !important; }
      .v3-reveal-stagger > * { opacity: 1 !important; transform: none !important; }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── 2. Scroll progress bar ──────────────────────────────────
  const bar = document.createElement('div');
  bar.id = 'v3-progress';
  document.body.appendChild(bar);
  const updateBar = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateBar, { passive: true });

  // ── 3. IntersectionObserver para reveal on scroll ───────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        // Una vez animado, lo dejamos (no re-animar al salir del viewport)
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // ── 4. Función para "armar" las animaciones cada vez que
  //    el DOM de V3 se re-renderiza (por cambio de idioma) ───
  const arm = () => {
    // Secciones completas → reveal
    document.querySelectorAll('section').forEach(s => {
      if (!s.classList.contains('v3-reveal')) {
        s.classList.add('v3-reveal');
        io.observe(s);
      }
    });

    // Grids de tarjetas y listas → stagger hijo-por-hijo
    document.querySelectorAll('section [style*="grid-template-columns"], section ul').forEach(g => {
      // Sólo si tiene 2+ hijos visibles
      if (g.children.length >= 2 && !g.classList.contains('v3-reveal-stagger')) {
        g.classList.add('v3-reveal-stagger');
        // La sección padre dispara el "in" sobre el grid también
        io.observe(g);
      }
    });

    // Líneas del terminal → clase para hover
    document.querySelectorAll('header div[style*="fontFamily: var(--mono-v3)"] div, header [style*="mono-v3"] div').forEach(d => {
      if (d.textContent && d.textContent.trim() && !d.classList.contains('v3-term-line')) {
        d.classList.add('v3-term-line');
      }
    });

    // Cursor parpadeante: buscar el span que hace de "_"
    document.querySelectorAll('header span').forEach(s => {
      if (s.textContent === '_' && !s.classList.contains('v3-cursor')) {
        s.classList.add('v3-cursor');
      }
    });

    // Pulsing dot en estatus "disponible": punto verde (●) en header
    document.querySelectorAll('header span').forEach(s => {
      if (s.textContent === '●' && s.style.color && !s.classList.contains('v3-pulse-dot-wrap')) {
        s.classList.add('v3-pulse-dot-wrap');
        // Envolver con pulse (creamos el halo como box-shadow en el mismo span)
        s.style.display = 'inline-block';
        s.style.width = '9px';
        s.style.height = '9px';
        s.style.borderRadius = '50%';
        s.style.background = '#3ee6c4';
        s.style.animation = 'v3-pulse 2s infinite';
        s.textContent = '';
      }
    });
  };

  // Re-armar cuando React mute el DOM (cambio de idioma)
  const mo = new MutationObserver(() => {
    clearTimeout(window.__v3anim_rearm);
    window.__v3anim_rearm = setTimeout(arm, 50);
  });

  // Arrancar en cuanto haya contenido
  const kickoff = () => {
    const root = document.getElementById('root');
    if (!root || !root.children.length) return setTimeout(kickoff, 50);
    arm();
    mo.observe(root, { childList: true, subtree: true });
    updateBar();
  };
  kickoff();
})();
