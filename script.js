window.addEventListener("load", function () {
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
});

// Typing animation
const text = ["Full Stack Web Developer",
  "React & Django Developer",
  "Building Scalable Web Applications",
  "Clean Code & Modern UI"];
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



// mail 
document.addEventListener("DOMContentLoaded", function () {

  const emailBtn = document.getElementById("emailBtn");

  emailBtn.addEventListener("click", function () {

    const subject = "Project Inquiry";
    const body = "Hello Muhammed Jaseem,\n\nI reviewed your portfolio and would like to discuss a project.\n\nLooking forward to your response.";

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      window.location.href =
        "mailto:muhammedjaseemx@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=muhammedjaseemx@gmail.com&su=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body),
        "_blank"
      );
    }

  });

});
