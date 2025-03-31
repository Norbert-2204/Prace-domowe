const headPage = document.getElementById("header");
const mainPage = document.getElementById("main");
const footerPage = document.getElementById("footer");

const logoDisplay = {
  home: {
    h1: "NORBERT MUSIELAK",
    h3: "WEB - DESIGNER",
  },
  projects: {
    h1: "MY PROJECTS",
    h3: "MADE WITH LOVE",
  },
  aboutMe: {
    h1: "ABOUT ME",
    h3: "IT’S A-ME, NORBERT!",
  },
  contact: {
    h1: "CONTACT ME",
    h3: "SAY HELLO TO ME",
  },
  messages: {
    h1: "MESSAGES",
    h3: `MESSAGE FROM THE
     INTERESTED PERSON`,
  },
};

headPage.innerHTML = `
  <div class="nav-section">
    <h3>ITPortfolio</h3>
    <button class="burgerBtn"><img src="img/burger.png" /></button>
    <nav>
      <button id="home" class="nav-btn active">HOME</button>
      <button id="projects" class="nav-btn">PROJECTS</button>
      <button id="about" class="nav-btn">ABOUT</button>
      <button id="contact" class="nav-btn">CONTACT</button>
      <button id="messages" class="nav-btn">MESSAGES</button>
    </nav>
  </div>
  <div class="about-me">
    <h1>${logoDisplay.home.h1}</h1>
    <h3>${logoDisplay.home.h3}</h3>
  </div>
`;

const skills = [
  {
    id: "html",
    img: "/img/languages/HTML5.png",
    name: "HTML5",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>`,
    years: "5 years",
  },
  {
    id: "css",
    img: "/img/languages/CSS3.png",
    name: "CSS",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>`,
    years: "5 years",
  },
  {
    id: "js",
    img: "/img/languages/Javascript.png",
    name: "JavaScript",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots "></div>
            <div class="dots "></div>`,
    years: "3 years",
  },
  {
    id: "git",
    img: "/img/languages/Shape.png",
    name: "Git",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots "></div>
            <div class="dots "></div>`,
    years: "3 years",
  },
  {
    id: "figma",
    img: "/img/languages/Figma.png",
    name: "Figma",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots "></div>
            <div class="dots "></div>
            <div class="dots "></div>
            <div class="dots "></div>`,
    years: "1 year",
  },
  {
    id: "chrome",
    img: "/img/languages/GoogleChrome.png",
    name: "Chrome",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots "></div>`,
    years: "4 years",
  },
  {
    id: "vscode",
    img: "/img/languages/VisualStudioCode.png",
    name: "VSCode",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots "></div>
            <div class="dots "></div>`,
    years: "3 years",
  },
  {
    id: "github",
    img: "/img/languages/Vector.png",
    name: "GitHub",
    dots: `<div class="dots dot-skill"></div>
            <div class="dots dot-skill"></div>
            <div class="dots "></div>
            <div class="dots "></div>
            <div class="dots "></div>`,
    years: "2 years",
  },
];

const projects = [
  {
    title: "calculator",
    technologies: ["HTML"],
  },
  {
    title: "Non-governmental organization",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Calculator program",
    technologies: ["Javascript"],
  },
  {
    title: "Non-governmental organization",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Calculator program",
    technologies: ["Javascript"],
  },
];

const homePage = `
<div class="skills-section">
          <div class="img-container">
            <img id="img" class="main-img" src="/img/male-7275449_1280 1.png" />
          </div>
          <div class="img-container2">
            <img class="second-img" src="img/male-mini.png" />
          </div>
          <div id="about-me-section" class="about-me-section"></div>
          <div id="skills-display" class="skills-display"></div>
        </div>
        <div id="project" class="project-section"></div>
        <div class="change-page">
          <button id="left-arrow"><img src="img/Arrow left.png" /></button>
          <button id="right-arrow"><img src="img/Arrow right.png" /></button>
        </div>
`;
mainPage.innerHTML = homePage;

const aboutMeHTML = document.getElementById("about-me-section");
aboutMeHTML.innerHTML = `
  <h3>About me</h3>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </p>
`;

const mySkillsHTML = document.getElementById("skills-display");
mySkillsHTML.innerHTML = `
  <h3>My Skills</h3>
  <div id="mySkills" class="my-skills"></div>
`;

const projectContainer = document.getElementById("project");
const limitedProjects = projects.slice(0, 3);
const turnLeft = document.getElementById("left-arrow");
const turnRight = document.getElementById("right-arrow");
let currentIndex = 0;
const visibleProjects = 3;

limitedProjects.forEach((project) => {
  const projectPageHTML = `
  <div class="project-page">
    <h4>${project.title}</h4>
    <ul>
      ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
    </ul>
  </div>
  `;
  projectContainer.insertAdjacentHTML("beforeend", projectPageHTML);
});

function renderProjects() {
  const limitedProjects = [];
  for (let i = 0; i < visibleProjects; i++) {
    const index = (currentIndex + i) % projects.length;
    limitedProjects.push(projects[index]);
  }
  projectContainer.innerHTML = "";

  limitedProjects.forEach((project) => {
    const projectPageHTML = `
    <div class="project-page">
      <h4>${project.title}</h4>
      <ul>
        ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
    </div>
    `;
    projectContainer.insertAdjacentHTML("beforeend", projectPageHTML);
  });
}

turnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderProjects();
});
turnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProjects();
});

const mySkills = document.getElementById("mySkills");
skills.forEach((skill) => {
  const skillsHtml = `
  <div data-skill-id="${skill.id}" class="expierience">
    <img class="language-icon" src="${skill.img}" />
    <div class="language-expierience">
      <h4>${skill.name}</h4>
      <div class="expierience-amount">
        ${skill.dots}
      </div>
      <p>${skill.years}</p>
    </div>
  </div>
  `;
  mySkills.insertAdjacentHTML("beforeend", skillsHtml);
});

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  headPage.innerHTML = `
  <div class="nav-section">
    <h3>ITPortfolio</h3>
    <button class="burgerBtn"><img src="img/burger.png" /></button>
    <nav>
      <button id="home" class="nav-btn active">HOME</button>
      <button id="projects" class="nav-btn">PROJECTS</button>
      <button id="about" class="nav-btn">ABOUT</button>
      <button id="contact" class="nav-btn">CONTACT</button>
      <button id="messages" class="nav-btn">MESSAGES</button>
    </nav>
  </div>
  <div class="about-me">
    <h1>${logoDisplay.home.h1}</h1>
    <h3>${logoDisplay.home.h3}</h3>
  </div>
`;

  const homePageHTML = `
  <div class="skills-section">
    <div class="img-container">
      <img id="img" class="main-img" src="/img/male-7275449_1280 1.png" />
    </div>
    <div class="img-container2">
      <img class="second-img" src="img/male-mini.png" />
    </div>
    <div id="about-me-section" class="about-me-section">${aboutMeHTML.innerHTML}</div>
    <div id="skills-display" class="skills-display">${mySkillsHTML.innerHTML}</div>
  </div>
  <div id="project" class="project-section"></div>
  <div class="change-page">
    <button id="left-arrow"><img src="img/Arrow left.png" /></button>
    <button id="right-arrow"><img src="img/Arrow right.png" /></button>
  </div>
`;
  mainPage.innerHTML = homePageHTML;
  renderProjects();
});
