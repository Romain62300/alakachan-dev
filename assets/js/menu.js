const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');
const overlay = document.getElementById('nav-overlay');

function openMenu() {
  navList.classList.add('nav-open');
  overlay.classList.add('overlay-visible');
  burger.setAttribute('aria-expanded', 'true');
  burger.classList.add('burger-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navList.classList.remove('nav-open');
  overlay.classList.remove('overlay-visible');
  burger.setAttribute('aria-expanded', 'false');
  burger.classList.remove('burger-open');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  navList.classList.contains('nav-open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);
navList.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
