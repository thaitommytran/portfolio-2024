const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

hamburgerIcon.addEventListener("click", toggleMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", toggleMenu);
});
