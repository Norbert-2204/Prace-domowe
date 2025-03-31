const mainPage = document.getElementById("main");
const footerPage = document.getElementById("footer");

const headPage = document.getElementById("header");
headPage.innerHTML = `
  <div class="nav-section">
    <h3>ITPortfolio</h3>
    <button class="burgerBtn"><img src="img/burger.png" /></button>
    <nav>
      <button id="home" class="nav-btn">HOME</button>
      <button id="projects" class="nav-btn">PROJECTS</button>
      <button id="about" class="nav-btn">ABOUT</button>
      <button id="contact" class="nav-btn">CONTACT</button>
      <button id="messages" class="nav-btn">MESSAGES</button>
    </nav>
  </div>
  <div class="about-me">
    <h1>NORBERT MUSIELAK</h1>
    <h3>WEB - DESIGNER</h3>
  </div>
`;

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {});

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
    technologies: ["HTML", "CSS", "Javascript", "jeden"],
  },
  {
    title: "Calculator program",
    technologies: ["Javascript", "jeden"],
  },
  {
    title: "Non-governmental organization",
    technologies: ["HTML", "CSS", "Javascript", "dwa"],
  },
  {
    title: "Calculator program",
    technologies: ["Javascript", "dwa"],
  },
  {
    title: "Calculator program",
    technologies: ["sprawdzenie karuzeli"],
  },
];

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
  const limitedProjects = projects.slice(
    currentIndex,
    currentIndex + visibleProjects
  );
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
  if (currentIndex + visibleProjects < projects.length) {
    currentIndex++;
    // renderProjects();
  } else {
    currentIndex = 0;
  }
  renderProjects();
});
turnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderProjects();
  } else {
    currentIndex = projects.indexOf(projects[projects.length - 1]);
    renderProjects();
  }
});
console.log(projects.indexOf(projects[projects.length - 1]));
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
