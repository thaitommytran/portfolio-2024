const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");
const downloadLink = document.querySelector("button.btn.btn-color-2");
const contactInfo = document.querySelector("button.btn.btn-color-1");
const linkedInProfile = document.querySelector("img[alt='LinkedIn Profile']");
const gitHubProfile = document.querySelector("img[alt='GitHub Profile']");

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

function openResume() {
  window.open("/assets/resume-example.pdf");
}

function scrollToContact() {
  location.href = "./#contact";
}

function openLinkedIn() {
  location.href = "https://www.linkedin.com/in/thaitommytran";
}

function openGitHub() {
  location.href = "https://github.com/thaitommytran";
}

hamburgerIcon.addEventListener("click", toggleMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", toggleMenu);
});
downloadLink.addEventListener("click", openResume);
contactInfo.addEventListener("click", scrollToContact);
linkedInProfile.addEventListener("click", openLinkedIn);
gitHubProfile.addEventListener("click", openGitHub);
