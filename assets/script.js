// Description:
// - On page load, it checks the localStorage for the dark mode preference and applies it accordingly by adding the dark class to the <body> element.
// - It also sets the toggle checkbox state to checked if dark mode is enabled in localStorage.
// - It listens for changes on the dark mode toggle and saves the preference in localStorage.

// Add event listener to the website
document.addEventListener('DOMContentLoaded', () => {
  // Hamburgher menu button
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Dark mode button
  const darkModeButton = document.querySelector('.toggle');
  const body = document.body;

  // Check localStorage for dark mode preference
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark');
  }

  // Toggle dark mode when the button is clicked
  darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
      localStorage.setItem('darkMode', 'disabled'); // Save preference
    }
  });
});