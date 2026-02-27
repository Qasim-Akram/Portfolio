
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        ring.style.width = '54px';
        ring.style.height = '54px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.width = '36px';
        ring.style.height = '36px';
      });
    });

    
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    
    document.querySelectorAll('.fact, .about-heading, .about-text, .stack-category, .project-item, .contact-left, .contact-form').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    //Form 
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
  