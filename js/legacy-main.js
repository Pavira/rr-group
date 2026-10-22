// ============================================================
// RR GROUP OF COMPANIES — Shared Interactivity
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Navbar scroll + mobile toggle + dropdown ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  }

  const toggleBtn = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.navbar-mobile');
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      toggleBtn.innerHTML = isOpen
        ? '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));
  }

  /* ---------- Generic hero slideshow (used by home + inner-page heroes) ---------- */
  document.querySelectorAll('[data-slideshow]').forEach((wrapper) => {
    const slides = wrapper.querySelectorAll('.hero-slide, .page-hero-slide');
    const dots = wrapper.querySelectorAll('.hero-indicators button');
    if (slides.length <= 1) return;
    let current = 0;
    const interval = parseInt(wrapper.getAttribute('data-interval') || '4000', 10);

    const show = (idx) => {
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      current = idx;
    };

    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

    setInterval(() => {
      show((current + 1) % slides.length);
    }, interval);
  });

  /* ---------- Tabs (industries served sections) ---------- */
  document.querySelectorAll('[data-tabs]').forEach((tabGroup) => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels = tabGroup.querySelectorAll('.tab-panel');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab-target');
        buttons.forEach((b) => b.classList.remove('active'));
        panels.forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = tabGroup.querySelector('[data-tab-panel="' + target + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* ---------- Contact form (static — no backend) ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = contactForm.querySelector('.form-note');
      const name = contactForm.querySelector('#name');
      const subject = encodeURIComponent(contactForm.querySelector('#subject') ? contactForm.querySelector('#subject').value : 'Website Enquiry');
      const body = encodeURIComponent(
        'Name: ' + (name ? name.value : '') +
        '\nEmail: ' + (contactForm.querySelector('#email') ? contactForm.querySelector('#email').value : '') +
        '\nPhone: ' + (contactForm.querySelector('#phone') ? contactForm.querySelector('#phone').value : '') +
        '\n\n' + (contactForm.querySelector('#message') ? contactForm.querySelector('#message').value : '')
      );
      if (note) note.textContent = 'Thank you! Opening your email client to send the message…';
      window.location.href = 'mailto:contact@rrgroup.com?subject=' + subject + '&body=' + body;
      contactForm.reset();
    });
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

});
