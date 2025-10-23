// Typing animation
const text = ["Web Developer", "Python & Django Learner", "React Enthusiast", "Problem Solver"];
let index = 0, charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex++);
    setTimeout(type, 100);
  } else setTimeout(erase, 1500);
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, --charIndex);
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));

// Scroll animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent! 🚀 Thank you for contacting me.");
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

// === Theme Toggle ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.replace("dark", "light");
  themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  const isLight = body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
