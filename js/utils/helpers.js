/**
 * Utility / Helper Functions
 */

/** Debounce: prevents a function from firing too frequently. */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Capitalize first letter of a string. */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
