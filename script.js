const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".cta-btn");
const links = document.querySelectorAll(".nav-btn");

// toggle menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// close menu when any link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});