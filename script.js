const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");
const downloadLink = document.querySelector("button.btn.btn-color-2");
const contactInfo = document.querySelector("button.btn.btn-color-1");
const linkedInProfile = document.querySelector("img[alt='LinkedIn Profile']");
const gitHubProfile = document.querySelector("img[alt='GitHub Profile']");
const experienceContainer = document.querySelector(".experience-containers");

const frontend = {
  HTML: "Experienced",
  CSS: "Experienced",
  JavaScript: "Intermediate",
  React: "Intermediate",
  TypeScript: "Basic",
  "Tailwind CSS": "Basic"
};

const backend = {
  NodeJS: "Intermediate",
  ExpressJS: "Basic",
  PostgreSQL: "Basic",
  Git: "Intermediate",
  Firebase: "Basic"
};

function getExperience(development) {
  const devType = () => {
    if (development == frontend) return "Frontend";
    return "Backend";
  };

  const details = document.createElement("div");
  const subTitle = document.createElement("h2");
  const articleContainer = document.createElement("div");

  details.classList.add("details-container");
  subTitle.classList.add("experience-sub-title");
  articleContainer.classList.add("article-container");

  details.appendChild(subTitle);
  details.appendChild(articleContainer);

  subTitle.innerText = `${devType()} Development`;

  for (const skill in development) {
    const level = development[skill];
    const article = document.createElement("article");

    article.innerHTML = `            
      <img
        class="icon"
        src="assets/checkmark.png"
        alt="Experience Icon" />
      <div>
        <h3>${skill}</h3>
        <p>${level}</p>
      </div>`;

    articleContainer.appendChild(article);
  }

  experienceContainer.appendChild(details);
}

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

getExperience(frontend);
getExperience(backend);
