/**
 * Hover Event (5 pts)
 * JS-enhanced hover for book cards (tooltip / quick-info overlay).
 * Base hover styles live in book-card.css.
 */
document.addEventListener('mouseover', (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  // TODO: show a quick-info tooltip or highlight effect
});

document.addEventListener('mouseout', (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  // TODO: hide tooltip
});

document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
});