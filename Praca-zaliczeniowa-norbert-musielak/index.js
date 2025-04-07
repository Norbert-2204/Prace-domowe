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
  about: {
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

function createHeader(type) {
  return `
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
  <div id="logo-display" class="about-me">
    <h1>${logoDisplay[type].h1}</h1>
    <h3>${logoDisplay[type].h3}</h3>
  </div>
  `;
}

headPage.innerHTML = createHeader("home");
initialNav();
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

// strona home
function generateMainHome() {
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

  return (mainPage.innerHTML = homePage);
}
generateMainHome();
generateHome();

function generateHome() {
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
      return projectContainer.insertAdjacentHTML("beforeend", projectPageHTML);
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
}

// strona projektów
function renderProjectPage() {
  const projectsPage = `
  
    <div class="addBtn-container">
      <button class="add-projectBtn display-modal"><span>+</span> Add project</button>
    </div>
    <div class="modal-wrapper">
      <div class="modal">
        <div class="modal-layout">
          <button class="close-btn"><img src="img/close.png"></button>
          <div>
            <h3>Project title</h3>
            <input type="text" class="modal-input js-input-project" placeholder="Project title">
            <p class="red">The title must be at least 3 characters long</p>
          </div>
          <div>
            <h3>Technologies</h3>
            <input type="text" class="modal-input js-input-tech" placeholder="html,css,javascript">
            <p class="red red2">Please add some technologies</p>
          </div>
          <button class="add-projectBtn js-addBtn"><span>+</span> Add project</button>
        </div>
      </div>
    </div>
    <div class="project-layout"></div>
`;

  mainPage.innerHTML = projectsPage;

  const projectsLayout = document.querySelector(".project-layout");
  projects.forEach((project) => {
    const projectHTML = `
  <div class="project-page">
    <h4>${project.title}</h4>
    <ul>
      ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
    </ul>
    <button class="trashBtn">
      <img class="trash-img" src="img/trash.png" />
    </button>
  </div>
`;
    projectsLayout.insertAdjacentHTML("beforeend", projectHTML);
  });
  return projectsPage;
}

function addProject() {
  const addProjectBtn = document.querySelector(".display-modal");
  const modal = document.querySelector(".modal-wrapper");
  addProjectBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  const addNewProject = document.querySelector(".js-addBtn");
  addNewProject.addEventListener("click", () => {
    const inputProject = document.querySelector(".js-input-project");
    const inputTechs = document.querySelector(".js-input-tech");
    const projectName = inputProject.value;
    const projectTechs = inputTechs.value;
    const techArray = projectTechs.split(",").map((tech) => tech.trim());

    const showErrorTitle = document.querySelector(".js-input-project");
    const showErrorTech = document.querySelector(".js-input-tech");
    const showError = document.querySelector(".red");
    const showError2 = document.querySelector(".red2");

    if (projectName.length < 3 || projectTechs.length === 0) {
      if (projectName.length < 3) {
        showError.style.opacity = "1";
        showErrorTitle.classList.add("error-type");
      }
      if (projectTechs.length < 0) {
        showError2.style.opacity = "1";
        showErrorTech.classList.add("error-type");
      }

      showErrorTitle.addEventListener("input", () => {
        if (showErrorTitle.value.length >= 3) {
          showError.style.opacity = "0";
          showErrorTitle.classList.remove("error-type");
        } else {
          showError.style.opacity = "1";
          showErrorTitle.classList.add("error-type");
        }
      });

      showErrorTech.addEventListener("input", () => {
        if (showErrorTech.value.length > 0) {
          showError2.style.opacity = "0";
          showErrorTech.classList.remove("error-type");
        } else {
          showError2.style.opacity = "1";
          showErrorTech.classList.add("error-type");
        }
      });
      return;
    }
    const newProject = {
      title: projectName,
      technologies: techArray,
    };

    projects.push(newProject);
    modal.style.display = "none";
    const projectsLayout = document.querySelector(".project-layout");
    const projectHTML = `
      <div class="project-page">
        <h4>${newProject.title}</h4>
        <ul>
          ${newProject.technologies.map((tech) => `<li>${tech}</li>`).join("")}
        </ul>
        <button class="trashBtn">
          <img class="trash-img" src="img/trash.png" />
        </button>
      </div>
    `;
    projectsLayout.insertAdjacentHTML("beforeend", projectHTML);
    projectName.value = "";
    projectTechs.value = "";
  });
}

// buttony zmiany main page
function initialNav() {
  document.addEventListener("click", (event) => {
    if (event.target.matches(".nav-btn")) {
      const page = event.target.id;

      const aboutMeDiv = document.getElementById("logo-display");
      const activeBtn = document.querySelectorAll(".nav-btn");
      activeBtn.forEach((button) => button.classList.remove("active"));

      document
        .querySelectorAll(`.nav-btn#${page}`)
        .forEach((button) => button.classList.add("active"));

      switch (page) {
        case "home":
          aboutMeDiv.innerHTML = `
          <h1>NORBERT MUSIELAK</h1>
          <h3>WEB-DESIGNER</h3>
          `;
          generateMainHome();
          generateHome();
          break;
        case "projects":
          aboutMeDiv.innerHTML = `
          <h1>PROJECTS</h1>
          <h3>MADE WITH LOVE</h3>
          `;
          renderProjectPage();
          addProject();
          break;
      }
    }
  });
}
// const homeBtn = document.querySelectorAll("#home");
// homeBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     headPage.innerHTML = createHeader("home");
//     initialNav();
//     generateMainHome();
//     generateHome();
//   });
// });

// const projectPageBtn = document.querySelectorAll("#projects");
// projectPageBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     headPage.innerHTML = createHeader("projects");
//   });
// });
