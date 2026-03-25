/**
 * Dynamic Sidebar – Genre Filter Navigation (10 pts)
 */
const sidebar     = document.getElementById('sidebar');
const openBtn     = document.getElementById('sidebar-open-btn');
const closeBtn    = document.getElementById('sidebar-close-btn');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', closeSidebar);

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !openBtn.contains(e.target)) {
    closeSidebar();
  }
});

// Genre filter links
document.querySelectorAll('.genre-list a').forEach(link => {
  const bookSection = document.getElementById('search-section');
  bookSection.style.display = 'block';
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.genre-list a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const genre = link.dataset.genre;
    const filtered = genre === 'all' ? BOOKS : BOOKS.filter(b => b.genre === genre);
    if (typeof renderBooks === 'function') renderBooks(filtered);
    bookSection.scrollIntoView({ behavior: 'smooth' });
    closeSidebar();
  });
});

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
}
