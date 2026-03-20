/**
 * SAÚDE ODONTO — Main JavaScript
 * Interatividade, animações e funcionalidades da landing page
 */

'use strict';

/* ─── HEADER: scroll behavior ──────────────────────────── */
const header = document.getElementById('header');

function handleHeaderScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleHeaderScroll, { passive: true });
handleHeaderScroll(); // run on load


/* ─── MOBILE MENU ──────────────────────────────────────── */
const navToggle  = document.getElementById('navToggle');
const navList    = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  // Animate hamburger → X
  const spans = navToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Close menu on nav link click
navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && navList.classList.contains('open')) {
    navList.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});


/* ─── SERVIÇOS: tab switcher ───────────────────────────── */
const tabs   = document.querySelectorAll('.servicos__tab');
const panels = document.querySelectorAll('.servicos__panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    // Activate clicked
    tab.classList.add('active');
    const panelId = 'panel-' + tab.dataset.tab;
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
  });
});


/* ─── SCROLL ANIMATIONS (Intersection Observer) ─────────── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -48px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Assign animation classes programmatically
function setupAnimations() {
  // Section labels & titles
  document.querySelectorAll('.section__label').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.style.transitionDelay = '0ms';
  });

  document.querySelectorAll('.section__title').forEach(el => {
    el.setAttribute('data-aos', 'fade-up');
    el.style.transitionDelay = '80ms';
  });

  // Cards
  document.querySelectorAll('.servico__card').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
  });

  document.querySelectorAll('.equipe__card').forEach((el, i) => {
    el.setAttribute('data-aos', i % 2 === 0 ? 'fade-right' : 'fade-left');
    el.style.transitionDelay = `${i * 120}ms`;
  });

  document.querySelectorAll('.diferencial__item').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.style.transitionDelay = `${i * 80}ms`;
  });

  document.querySelectorAll('.galeria__item').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.style.transitionDelay = `${i * 80}ms`;
  });

  // Sobre section
  const sobreVisual = document.querySelector('.sobre__visual');
  const sobreText   = document.querySelector('.sobre__text');
  if (sobreVisual) sobreVisual.setAttribute('data-aos', 'fade-right');
  if (sobreText)   sobreText.setAttribute('data-aos', 'fade-left');

  // CTA banner
  const ctaTitle = document.querySelector('.cta-banner__title');
  const ctaSub   = document.querySelector('.cta-banner__subtitle');
  if (ctaTitle) ctaTitle.setAttribute('data-aos', 'fade-up');
  if (ctaSub)   { ctaSub.setAttribute('data-aos', 'fade-up'); ctaSub.style.transitionDelay = '100ms'; }

  // Hero stats counter animation
  document.querySelectorAll('.hero__stat-number').forEach(el => {
    el.setAttribute('data-count', el.textContent);
  });

  // Observe all [data-aos] elements
  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

setupAnimations();


/* ─── HERO STATS: number counter animation ──────────────── */
function animateCounter(el, target, suffix = '', duration = 1400) {
  const isPercent = suffix === '%';
  const num = parseInt(target.replace(/[^0-9]/g, ''));
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(ease * num);

    if (target.includes('+')) {
      el.textContent = value + '+';
    } else if (isPercent) {
      el.textContent = value + '%';
    } else {
      el.textContent = value;
    }

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Trigger counter when hero stats come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.hero__stat-number');
      nums.forEach(el => {
        const raw = el.getAttribute('data-count') || el.textContent;
        animateCounter(el, raw);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero__stats');
if (heroStats) statsObserver.observe(heroStats);


/* ─── SMOOTH SCROLL + ACTIVE NAV HIGHLIGHT ──────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' });

sections.forEach(sec => activeObserver.observe(sec));


/* ─── GALERIA: lightbox simples ─────────────────────────── */
function createLightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(52,52,52,.92);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    backdrop-filter: blur(8px);
  `;

  const img = document.createElement('img');
  img.style.cssText = `
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 32px 80px rgba(0,0,0,.5);
    animation: lbIn .3s ease;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 28px;
    background: none;
    border: none;
    color: rgba(255,255,255,.7);
    font-size: 2.5rem;
    cursor: pointer;
    line-height: 1;
    transition: color .2s;
  `;
  closeBtn.onmouseenter = () => closeBtn.style.color = '#fff';
  closeBtn.onmouseleave = () => closeBtn.style.color = 'rgba(255,255,255,.7)';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes lbIn {
      from { opacity: 0; transform: scale(.94); }
      to   { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  function close() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  return { lightbox, img };
}

const { lightbox, img: lbImg } = createLightbox();

document.querySelectorAll('.galeria__item').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.querySelector('img')?.src;
    if (!src) return;
    lbImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  item.style.cursor = 'zoom-in';
});


/* ─── LAZY FALLBACK para imagens sem src ────────────────── */
// Se as imagens não carregarem, aplica um placeholder elegante
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    if (this.classList.contains('nav__logo-img') || this.classList.contains('footer__logo')) {
      // Logo: usa SVG inline como fallback
      this.style.display = 'none';
      return;
    }
    // Para fotos: aplica background placeholder
    this.style.visibility = 'hidden';
    const parent = this.parentElement;
    if (parent && !parent.querySelector('.img-placeholder')) {
      const ph = document.createElement('div');
      ph.className = 'img-placeholder';
      ph.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #ddd5d6 0%, #b9bdbe 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(52,52,52,.3);
        font-size: 2rem;
      `;
      ph.innerHTML = '<i class="fas fa-tooth"></i>';
      if (getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }
      parent.appendChild(ph);
    }
  });
});


/* ─── INIT LOG ──────────────────────────────────────────── */
console.log('%c🦷 Saúde Odonto — Site iniciado com sucesso!', 'color: #343434; font-weight: bold; font-size: 14px;');
