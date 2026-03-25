// /**
//  * Book Cards
//  * Renders book cards into #book-grid.
//  * Called by pageLoad.js, sidebar.js, and search-form.js.
//  */
// const bookGrid = document.getElementById('book-grid');

// function renderBooks(books) {
//   bookGrid.innerHTML = '';

//   if (books.length === 0) {
//     bookGrid.innerHTML = '<p style="color:var(--clr-muted)">No books to display.</p>';
//     return;
//   }

//   books.forEach(book => {
//     const card = document.createElement('article');
//     card.className = 'book-card scroll-reveal';
//     card.innerHTML = `
//       <img src="${book.cover}" alt="Cover of ${book.title}" onerror="this.src='assets/images/placeholder-cover.jpg'" />
//       <div class="book-card-body">
//         <p class="book-card-title">${book.title}</p>
//         <p class="book-card-author">${book.author}</p>
//         <span class="book-card-genre">${book.genre}</span>
//       </div>
//     `;

//     // Click to load review video
//     card.addEventListener('click', () => {
//       const videoEl = document.getElementById('review-video');
//       videoEl.src = book.video;   // ← swap source
//       videoEl.load();             // ← reload the player
//       videoEl.play();
//       document.getElementById('video-book-title').textContent = `Now reviewing: ${book.title}`;
//       document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
//     });

//     bookGrid.appendChild(card);
//   });

//   // Trigger scroll check so newly rendered cards animate in
//   window.dispatchEvent(new Event('scroll'));
// }









/**
 * Book Cards
 * Renders book cards with hover overlay into #book-grid.
 */
const bookGrid = document.getElementById('book-grid');

function renderBooks(books) {
  bookGrid.innerHTML = '';

  if (books.length === 0) {
    bookGrid.innerHTML = '<p style="color:var(--clr-muted)">No books found.</p>';
    return;
  }

  books.forEach(book => {
    const card = document.createElement('article');
    card.className = 'book-card';

    card.innerHTML = `
      <img
        src="${book.cover}"
        alt="Cover of ${book.title}"
        onerror="this.src='assets/images/placeholder-cover.jpg'"
      />

      <!-- Hover Overlay (5 pts) -->
      <div class="card-overlay">
        <button class="btn btn-primary watch-review-btn">▶ Watch Review</button>
        <a href="${book.link}" target="_blank" class="btn btn-outline">Go to Book</a>
      </div>

      <div class="book-card-body">
        <p class="book-card-title">${book.title}</p>
        <p class="book-card-author">${book.author}</p>
        <span class="book-card-genre">${book.genre}</span>
      </div>
    `;

    // "Watch Review" — swap video source and scroll to player
    card.querySelector('.watch-review-btn').addEventListener('click', () => {
      const iframe = document.getElementById('review-video');
      const reviewSection = document.getElementById('reviews');

      // Show the section if it's hidden
      reviewSection.style.display = 'block';
      syncContactBg();

      iframe.src = book.video + '?autoplay=1&enablejsapi=1';
      document.getElementById('video-book-title').textContent = `Now reviewing: ${book.title}`;
      reviewSection.scrollIntoView({ behavior: 'smooth' });
      attachYouTubeEvents(book.video.split('/embed/')[1]);
    });

    bookGrid.appendChild(card);
  });

  // Trigger scroll check so newly rendered cards animate in
  window.dispatchEvent(new Event('scroll'));
}
