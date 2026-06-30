document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.querySelector('#theme-toggle');
  const htmlElement = document.documentElement;

  // APPLY SAVED THEME ON LOAD
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
  }

  // TOGGLE THEME
  themeToggle.addEventListener('change', () => {

    const newTheme = themeToggle.checked ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

  });

});