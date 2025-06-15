const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');
const highlightButtons = document.querySelectorAll('.button-highlight');

function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    showSection(target);
  });
});

highlightButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    if (target) {
      showSection(target);
    }
  });
});
