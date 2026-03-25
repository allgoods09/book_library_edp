/**
 * Search Form (Form Submission Event – 5 pts)
 * Dynamically builds the search form and handles submission + validation.
 */
const searchContainer = document.getElementById('search-form-container');
const searchMessage   = document.getElementById('search-message');

searchContainer.innerHTML = `
  <form id="search-form" novalidate>
    <input
      type="text"
      id="book-search-input"
      placeholder='Search by title or author… (Press "/" to focus)'
      autocomplete="off"
    />
    <button type="submit" class="btn btn-primary">Search</button>
  </form>
`;

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.getElementById('book-search-input');
  const query = input.value.trim().toLowerCase();

  input.classList.remove('error');
  searchMessage.style.color = '';

  if (!query) {
    input.classList.add('error');
    searchMessage.textContent = '⚠ Please enter a title or author to search.';
    searchMessage.style.color = '#e05555';
    return;
  }

  const results = BOOKS.filter(b =>
    b.title.toLowerCase().includes(query) ||
    b.author.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchMessage.textContent = `No books found for "${query}".`;
    searchMessage.style.color = 'var(--clr-muted)';
  } else {
    searchMessage.textContent = `${results.length} book(s) found.`;
    searchMessage.style.color = 'var(--clr-gold)';
  }

  if (typeof renderBooks === 'function') renderBooks(results);

  // Scroll to book grid
  document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
});
