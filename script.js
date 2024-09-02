const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");
const downloadLink = document.querySelector("button.btn.btn-color-2");
const contactInfo = document.querySelector("button.btn.btn-color-1");
const linkedInProfile = document.querySelector("img[alt='LinkedIn Profile']");
const gitHubProfile = document.querySelector("img[alt='GitHub Profile']");
const experienceContainer = document.querySelector(
  "#experience .experience-containers"
);
const projectsContainer = document.querySelector(
  "#projects .experience-details-container"
);
const downArrowIcons = document.querySelectorAll("img[alt='Arrow Icon']");

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

class Project {
  constructor(name, imgSRC, gitHubURL, liveDemoURL) {
    this.name = name;
    this.imgSRC = imgSRC;
    this.gitHubURL = gitHubURL;
    this.liveDemoURL = liveDemoURL;
  }
}

const projects = [
  new Project(
    "Project One",
    "assets/project-1.png",
    "https://github.com/thaitommytran",
    "https://google.com"
  ),
  new Project(
    "Project Two",
    "assets/project-2.png",
    "https://github.com/thaitommytran",
    "https://google.com"
  ),
  new Project(
    "Project Three",
    "assets/project-3.png",
    "https://github.com/thaitommytran",
    "https://google.com"
  )
];

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
      </div>
    `;

    articleContainer.appendChild(article);
  }

  experienceContainer.appendChild(details);
}

function getProjects(projects) {
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("about-containers");

  for (const project of projects) {
    const details = document.createElement("div");
    details.classList.add("details-container");
    details.classList.add("color-container");
    details.innerHTML = `
      <div class="article-container">
        <img
          class="project-img"
          src=${project.imgSRC}
          alt=${project.name} />
      </div>
    `;

    const subTitle = document.createElement("h2");
    const btnContainer = document.createElement("div");
    const gitHubButton = document.createElement("button");
    const liveDemoButton = document.createElement("button");

    subTitle.classList.add("experience-sub-title");
    subTitle.classList.add("project-title");
    btnContainer.classList.add("btn-container");
    gitHubButton.className = "btn btn-color-2 project-btn";
    liveDemoButton.className = "btn btn-color-2 project-btn";

    subTitle.innerText = project.name;
    gitHubButton.innerText = "GitHub";
    liveDemoButton.innerText = "Live Demo";

    gitHubButton.onclick = () => window.open(project.gitHubURL, "_blank");
    liveDemoButton.onclick = () => window.open(project.liveDemoURL, "_blank");

    btnContainer.appendChild(gitHubButton);
    btnContainer.appendChild(liveDemoButton);
    details.appendChild(subTitle);
    details.appendChild(btnContainer);
    detailsContainer.appendChild(details);
  }

  projectsContainer.appendChild(detailsContainer);
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
  window.open("https://www.linkedin.com/in/thaitommytran", "_blank");
}

function openGitHub() {
  window.open("https://github.com/thaitommytran", "_blank");
}

function scrollToNextSection(index) {
  const nextSection = document.querySelectorAll("section")[index + 2];
  if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
}

hamburgerIcon.addEventListener("click", toggleMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", toggleMenu);
});
downloadLink.addEventListener("click", openResume);
contactInfo.addEventListener("click", scrollToContact);
linkedInProfile.addEventListener("click", openLinkedIn);
gitHubProfile.addEventListener("click", openGitHub);
downArrowIcons.forEach((downArrowIcon, index) => {
  downArrowIcon.addEventListener("click", () => scrollToNextSection(index));
});

getExperience(frontend);
getExperience(backend);
getProjects(projects);
