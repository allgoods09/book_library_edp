/**
 * Page Load Event (5 pts)
 * Runs initialization tasks when the page is fully loaded.
 */
window.addEventListener('load', () => {
  console.log('[PageLoad] Page fully loaded.');
  // Render all book cards on initial load
  if (typeof renderBooks === 'function') renderBooks(BOOKS);
});
