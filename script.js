// Typewriter
const words = ["Web Developer", "Student Builder", "Product Thinker", "JS Learner 🚀"];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typeEl = document.getElementById("typewriter");
function type() {
  const current = words[wordIndex];
  typeEl.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);
  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true; setTimeout(type, 1500); return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false; wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));

// Active Nav Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
});