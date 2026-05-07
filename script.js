// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ── NAV SCROLL STATE ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || (i * 80);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => observer.observe(el));

// Stagger children in stack grid
document.querySelectorAll('.stack-category').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});

// ── HERO TEXT SPLIT ANIMATION (letter by letter) ──
const heroText = document.getElementById('heroText');
if (heroText) {
  const text = heroText.textContent;
  heroText.innerHTML = text.split('').map((char, i) => 
    char === ' ' 
      ? '<span style="display:inline-block;width:0.3em"> </span>'
      : `<span style="display:inline-block;opacity:0;transform:translateY(40px);transition:opacity 0.5s ${0.35 + i * 0.025}s cubic-bezier(0.16,1,0.3,1),transform 0.5s ${0.35 + i * 0.025}s cubic-bezier(0.16,1,0.3,1)">${char}</span>`
  ).join('');

  requestAnimationFrame(() => {
    heroText.querySelectorAll('span').forEach(span => {
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    });
  });
}

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'transparent';
  btn.style.color = 'var(--black)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = 'var(--black)';
    btn.style.color = 'var(--white)';
    e.target.reset();
  }, 3000);
}

// ── SMOOTH ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--black)' : '';
  });
});