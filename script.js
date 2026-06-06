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

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }
});

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

document.querySelectorAll('.stack-category').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});

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

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  emailjs.sendForm('portfolio_contack', 'template_mkyegym', e.target)
    .then(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--black)';
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = 'var(--black)';
        btn.style.color = 'var(--white)';
        btn.disabled = false;
        e.target.reset();
      }, 3000);
    }, () => {
      btn.textContent = 'Failed. Try again.';
      btn.disabled = false;
    });
}

const sections = document.querySelectorAll('section[id]');
const pillLinks = document.querySelectorAll('.pill-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  pillLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});