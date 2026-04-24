const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".cta-btn");
const links = document.querySelectorAll(".nav-btn");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});