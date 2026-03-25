/**
 * Image Parallax Effect (10 pts)
 * Hero background moves slower than scroll to create depth.
 */
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  if (!parallaxBg) return;
  const speed  = parseFloat(parallaxBg.dataset.parallaxSpeed) || 0.4;
  parallaxBg.style.transform = `translateY(${window.scrollY * speed}px)`;
});
