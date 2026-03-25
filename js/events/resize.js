/**
 * Window Resize Event (5 pts)
 * Closes the sidebar on large screens; adjusts layout as needed.
 */
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    document.getElementById('sidebar').classList.remove('open');
  }
  // TODO: add further responsive JS adjustments here
});
