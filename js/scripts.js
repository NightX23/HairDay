document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  toggleButton.addEventListener('click', () => {
    toggleMenu();
  });

  function toggleMenu() {
    navList.classList.toggle('show');
  }
});
