document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach((el) => {
    el.textContent = currentYear;
  });
});

