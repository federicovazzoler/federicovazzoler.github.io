document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check localStorage for dark mode preference
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark');
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
      localStorage.setItem('darkMode', 'disabled'); // Save preference
    }
  });
});