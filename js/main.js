/**
 * main.js – Entry Point
 * All modules are loaded via <script> tags in index.html.
 * Global bootstrapping logic lives here.
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('[BookLib] App ready.');

  // Trigger initial scroll check for any elements already in view
  window.dispatchEvent(new Event('scroll'));
});

document.querySelector('a[href="#reviews"]').addEventListener('click', (e) => {
  e.preventDefault();
  const reviewSection = document.getElementById('reviews');

  reviewSection.style.display = 'block';
  syncContactBg();
  reviewSection.scrollIntoView({ behavior: 'smooth' });
});

function syncContactBg() {
  const reviews = document.getElementById('reviews');
  const contact = document.getElementById('contact');

  if (reviews.style.display === 'none' || reviews.style.display === '') {
    contact.classList.add('light-bg');
  } else {
    contact.classList.remove('light-bg');
  }
}

// Run on page load
syncContactBg();