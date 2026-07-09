// ==============================
// Hammed Buari Portfolio Scripts
// ==============================

// Smooth reveal animation when sections enter the screen
const revealElements = document.querySelectorAll(
  ".section, .card, .timeline-item, .hero-content"
);

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealOnScroll.observe(element);
});

// Header shadow on scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
