// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after choosing a link
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form: opens the visitor's mail client pre-filled with the inquiry.
// Swap this for a form service (e.g. Formspree) when one is set up.
const CONTACT_EMAIL = 'victoryinfrastructurecorp@gmail.com';
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent(`[Website Inquiry] ${data.get('subject')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  note.textContent = 'Your email app should open with the inquiry pre-filled. If not, email us directly at ' + CONTACT_EMAIL + '.';
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
