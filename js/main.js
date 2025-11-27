// Simple mobile nav toggle
const navToggle = document.querySelector(".zle-nav-toggle");
const nav = document.querySelector(".zle-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("zle-nav-open");
  });
}
