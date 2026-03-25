/**
 * form.js
 * Builds and handles the newsletter signup and contact form.
 */

// ── Newsletter ────────────────────────────────────────────────
const newsletterContainer = document.getElementById('newsletter-container');
const newsletterMessage   = document.getElementById('newsletter-message');

newsletterContainer.innerHTML = `
  <form id="newsletter-form" novalidate>
    <input type="email" id="newsletter-email" placeholder="Your email address" required />
    <button type="submit" class="btn btn-primary">Subscribe</button>
  </form>
`;

document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletter-email');
  email.classList.remove('error');

  if (!email.value.trim() || !email.value.includes('@')) {
    email.classList.add('error');
    newsletterMessage.textContent = '⚠ Please enter a valid email.';
    newsletterMessage.style.color = '#e05555';
    return;
  }

  newsletterMessage.textContent = '✅ You\'re subscribed! Welcome to BookLib.';
  newsletterMessage.style.color = 'var(--clr-gold)';
  e.target.reset();
});

// ── Contact Form ──────────────────────────────────────────────
const contactFormContainer = document.getElementById('contact-form-container');
const contactFormMessage   = document.getElementById('contact-form-message');

contactFormContainer.innerHTML = `
  <form id="contact-form" novalidate>
    <input type="text"  id="contact-name"    placeholder="Your Name"    required />
    <input type="email" id="contact-email"   placeholder="Your Email"   required />
    <input type="text"  id="contact-subject" placeholder="Subject"      required />
    <textarea           id="contact-msg"     placeholder="Your message…" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
  </form>
`;

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const fields = ['contact-name', 'contact-email', 'contact-subject', 'contact-msg'];
  let valid = true;

  fields.forEach(id => {
    const field = document.getElementById(id);
    field.classList.remove('error');
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }
  });

  if (!valid) {
    contactFormMessage.textContent = '⚠ Please fill in all fields.';
    contactFormMessage.style.color = '#e05555';
    return;
  }

  contactFormMessage.textContent = '✅ Message sent! We\'ll get back to you soon.';
  contactFormMessage.style.color = 'var(--clr-gold)';
  e.target.reset();
});