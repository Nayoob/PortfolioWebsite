const themeToggleBtn = document.querySelector('.theme-toggle-btn');

// Default to dark mode if no value is set in localStorage
let darkMode = localStorage.getItem('darkMode') === 'true' || true; // Default to true (dark mode)
applyTheme(darkMode);

themeToggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  applyTheme(darkMode);
});

function applyTheme(darkMode) {
  if (darkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggleBtn.textContent = '🌞'; // Sun emoji for dark mode
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙'; // Moon emoji for light mode
  }
}

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');
const animateSections = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 150) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', animateSections);
animateSections();

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '15px';
backToTopBtn.style.backgroundColor = '#76e5fc';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.color = '#121212';
backToTopBtn.style.fontSize = '20px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
backToTopBtn.style.transition = 'opacity 0.3s ease';
backToTopBtn.style.opacity = '0';

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
  }
});
