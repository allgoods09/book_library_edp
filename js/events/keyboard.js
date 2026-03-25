/**
 * Keyboard Event (5 pts)
 * - ESC closes the sidebar
 * - '/' focuses the search input
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('sidebar').classList.remove('open');
  }

  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    const searchInput = document.getElementById('book-search-input');
    if (searchInput) searchInput.focus();
  }
});
