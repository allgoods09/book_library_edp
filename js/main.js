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
