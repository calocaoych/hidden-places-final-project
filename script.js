// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mainMenu');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.hidden = false;
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', onKeyDown);
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closeMenu();
  }

  toggle.addEventListener('click', (e) => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else openMenu();
  });

  // clicking the overlay (nav itself) closes menu
  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });

  // prevent inner clicks from closing
  menu.querySelectorAll('a, button').forEach(el =>
    el.addEventListener('click', (e) => e.stopPropagation())
  );
  });

  document.addEventListener('DOMContentLoaded', () => {
  function updateTopNav() {
    const isIndex = document.body.classList.contains('index');
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const topNav = document.querySelector('.top-nav');
    if (!topNav) return;
    }
    updateTopNav();
    window.addEventListener('resize', updateTopNav);
    });