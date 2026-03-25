/**
 * Scroll Event (5 pts)
 * - Triggers .scroll-reveal animations
 * - Triggers book card staggered reveal
 * - Highlights navbar on scroll
 */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Navbar shadow on scroll
  navbar.classList.toggle('scrolled', scrollY > 60);

  // Generic scroll-reveal elements
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      el.classList.add('visible');
    }
  });

  // Staggered book card reveal
  document.querySelectorAll('.book-card').forEach((card, i) => {
    if (card.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setTimeout(() => card.classList.add('visible'), i * 60);
    }
  });
});
