const headPage = document.getElementById("header");
const mainPage = document.getElementById("main");

function createHeader() {
  return `
  <div class="nav-section">
    <h3 class="port-high"><span>ITP</span><span class="grey">ortfolio</span></h3>
    <h3 class="port-low">ITP</h3>
    <nav>
    <div class="nav-container">
      <button id="home" class="nav-btn active">HOME</button>
      <button id="projects" class="nav-btn">PROJECTS</button>
      <button id="about" class="nav-btn">ABOUT</button>
      <button id="contact" class="nav-btn">CONTACT</button>
      <button id="messages" class="nav-btn">MESSAGES</button>
    </div>
      <div class="burger-menu">
        <button class="js-burgerBtn">
          
        </button>
      </div>
    </nav>
  </div>
  <div class="burger-nav">
    <div class="burger-buttons">
      <button id="home" class="nav-btn active">HOME</button>
      <button id="projects" class="nav-btn">PROJECTS</button>
      <button id="about" class="nav-btn">ABOUT</button>
      <button id="contact" class="nav-btn">CONTACT</button>
      <button id="messages" class="nav-btn">MESSAGES</button>
    </div>
  </div>
  <div id="logo-display" class="about-me">
    <h1><span>NORBERT</span> <span>MUSIELAK</span></h1>
    <h3 class="lower-weight">WEB - DESIGNER</h3>
  </div>
  `;
}

let isBurgerOpen = false;

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".js-burgerBtn") || target.closest(".js-burgerBtn")) {
    const displayNav = document.querySelector(".burger-nav");
    if (displayNav.style.display === "none") {
      displayNav.style.display = "flex";
      target.classList.add("burger-img");
      isBurgerOpen = true;
    } else {
      displayNav.style.display = "none";
      target.classList.remove("burger-img");
      isBurgerOpen = false;
    }
  }
});

window.addEventListener("resize", () => {
  const displayNav = document.querySelector(".burger-nav");
  if (window.innerWidth > 768) {
    displayNav.style.display = "none";
  } else if (isBurgerOpen) {
    displayNav.style.display = "flex";
  }
});

headPage.innerHTML = createHeader();
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
    <div class="change-page arrows-left-right">
      <button id="left-arrow"><img src="img/Arrow left.png" /></button>
      <button id="right-arrow"><img src="img/Arrow right.png" /></button>
    </div>
    <div class="change-page arrows-up-down">
      <button id="up-arrow"><img src="img/ArrowUp.png" /></button>
      <button id="down-arrow"><img src="img/ArrowDown.png" /></button>
    </div>
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
  const turnUp = document.getElementById("up-arrow");
  const turnDown = document.getElementById("down-arrow");
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
  turnUp.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderProjects();
  });
  turnDown.addEventListener("click", () => {
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
  const blockedBody = document.querySelector("body");
  addProjectBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    blockedBody.classList.add("blocked");
  });

  const addNewProject = document.querySelector(".js-addBtn");
  addNewProject.addEventListener("click", () => {
    const inputProject = document.querySelector(".js-input-project");
    const inputTechs = document.querySelector(".js-input-tech");
    const projectName = inputProject.value;
    const projectTechs = inputTechs.value;
    const techArray = projectTechs.split(",").map((tech) => tech.trim());
    const showError = document.querySelector(".red");
    const showError2 = document.querySelector(".red2");

    if (projectName.length < 3 || projectTechs.length === 0) {
      if (projectName.length < 3) {
        showError.style.opacity = "1";
        inputProject.classList.add("error-type");
      }
      if (projectTechs.length === 0) {
        showError2.style.opacity = "1";
        inputTechs.classList.add("error-type");
      }

      inputProject.addEventListener("input", () => {
        if (inputProject.value.length >= 3) {
          showError.style.opacity = "0";
          inputProject.classList.remove("error-type");
        } else {
          showError.style.opacity = "1";
          inputProject.classList.add("error-type");
        }
      });

      inputTechs.addEventListener("input", () => {
        if (inputTechs.value.length > 0) {
          showError2.style.opacity = "0";
          inputTechs.classList.remove("error-type");
        } else {
          showError2.style.opacity = "1";
          inputTechs.classList.add("error-type");
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
    const container = document.querySelector(".no-projects");
    if (container) {
      container.remove();
    }
    projectsLayout.insertAdjacentHTML("beforeend", projectHTML);
    inputProject.value = "";
    inputTechs.value = "";
    blockedBody.classList.remove("blocked");
  });

  const closeMod = document.querySelector(".close-btn");
  closeMod.addEventListener("click", () => {
    modal.style.display = "none";
    blockedBody.classList.remove("blocked");
  });
}

function removeProject() {
  document.addEventListener("click", (event) => {
    if (event.target.closest(".trashBtn")) {
      const project = event.target.closest(".project-page");
      const projectTitle = project.querySelector("h4").textContent;
      if (project) project.remove();

      const index = projects.findIndex(
        (project) => project.title === projectTitle
      );
      if (index !== -1) {
        projects.splice(index, 1);
      }

      if (projects.length === 0) {
        const container = document.querySelector(".addBtn-container");
        const noProjectInfo = document.createElement("div");
        noProjectInfo.textContent = "There are no projects to display";
        noProjectInfo.setAttribute("class", "no-projects");
        container.append(noProjectInfo);
      }
    }
  });
}

// about me
function renderAboutMe() {
  const aboutMeHTML = `
  <div class="about-me-wrapper">
    <div class="my-info-page">
      <div class="img-container">
        <img src="/img/male-7275449_1280 1.png" />
      </div>
      <div class="img-container2">
      <img class="second-img" src="img/male-mini.png" />
      </div>
      <div class="my-description">
        <h3>My background</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
        </p>
      </div>
      <div class="my-description">
        <h3>My hobbies and interests</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
          hendrerit in vulputate velit esse molestie consequat, vel illum dolore
          eu feugiat nulla
        </p>
      </div>
      <button class="continue">
        <img class="contact-me-arrow" src="img/Arrow right.png" /> Contact me
      </button>
    </div>
  </div>
  `;
  mainPage.innerHTML = aboutMeHTML;

  const goToContact = document.querySelector(".continue");
  goToContact.addEventListener("click", () => {
    const activeBtn = document.querySelectorAll(".nav-btn");
    activeBtn.forEach((button) => button.classList.remove("active"));
    document
      .querySelectorAll("#contact")
      .forEach((button) => button.classList.add("active"));

    renderContactPage();
  });
}

//kontakt
const gatheredMessages = [
  {
    name: "Karol",
    email: "karol@email.com",
    message: `Hello, I've reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further.`,
  },
  {
    name: "Ernest",
    email: "ernest@email.com",
    message: `Hello, Please call me at 351-152-555 to talk further.`,
  },
  {
    name: "Jan",
    email: "jan@email.com",
    message: `Welcome Norbert. You created really nice project`,
  },
];
function renderContactPage() {
  const contactHTML = `
  <div class="contact-me">
    <div>
      <h2>Contact me</h3>
    </div>
    <div class="input-directions">
      <div class="put-text">
        <h3>Name</h3>
        <input class="input-text js-input-name" type="text" placeholder="Your Name">
        <p class="invalid-name red"></p>
      </div>
      <div class="put-text">
        <h3>Email</h3>
        <input class="input-text js-input-email" type="text" placeholder="email@example.com">
        <p class="red invalid-email">Please enter a valid email address</p>
      </div>
    </div>
    <div class="input-directions">
      <div class="put-text">
        <h3>Message</h3>
        <input class="input-text js-input-message" type="text" placeholder="Hello, my name is...">
        <p class="red invalid-message">The message cannot be empty</p>
      </div>
    </div>
    <div class="addBtn-container spacing">
      <button class="send-messageBtn">Send message</button>
    </div>
  </div>
  `;
  mainPage.innerHTML = contactHTML;
  return mainPage;
}
function getMessage() {
  const nameInput = document.querySelector(".js-input-name");
  const emailInput = document.querySelector(".js-input-email");
  const messageInput = document.querySelector(".js-input-message");
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  const invalidName = document.querySelector(".invalid-name");
  const invalidEmail = document.querySelector(".invalid-email");
  const invalidMessage = document.querySelector(".invalid-message");
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  if (nameValue.length < 3 || nameValue.length > 20) {
    if (nameValue.length < 3) {
      invalidName.textContent = `The name must be at least 3 characters long`;
      invalidName.style.opacity = "1";
      nameInput.classList.add("error-type");
    } else if (nameValue.length > 20) {
      invalidName.textContent = `The name must be less then 20 characters long`;
      invalidName.style.opacity = "1";
      nameInput.classList.add("error-type");
    }
  }
  if (!validateEmail(emailValue)) {
    invalidEmail.style.opacity = "1";
    emailInput.classList.add("error-type");
  }
  if (messageValue.length === 0) {
    invalidMessage.style.opacity = "1";
    messageInput.classList.add("error-type");
  }

  nameInput.addEventListener("input", () => {
    if (nameInput.value.length > 20) {
      invalidName.textContent = `The name must be less then 20 characters long`;
      invalidName.style.opacity = "1";
      nameInput.classList.add("error-type");
    } else if (nameInput.value.length < 3) {
      invalidName.textContent = `The name must be at least 3 characters long`;
      invalidName.style.opacity = "1";
      nameInput.classList.add("error-type");
    } else if (nameInput.value.length >= 3 || nameInput.value.length < 20) {
      invalidName.style.opacity = "0";
      nameInput.classList.remove("error-type");
    }
  });

  emailInput.addEventListener("input", () => {
    const currentEmail = emailInput.value;
    if (!validateEmail(currentEmail)) {
      invalidEmail.style.opacity = "1";
      emailInput.classList.add("error-type");
    } else {
      invalidEmail.style.opacity = "0";
      emailInput.classList.remove("error-type");
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.length === 0) {
      invalidMessage.style.opacity = "1";
      messageInput.classList.add("error-type");
    } else {
      invalidMessage.style.opacity = "0";
      messageInput.classList.remove("error-type");
    }
  });

  const newMessage = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };

  if (Object.values(newMessage).some((value) => value === "")) {
    return;
  }

  gatheredMessages.push(newMessage);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  return gatheredMessages;
}

function sendMessage() {
  const sendMessageBtn = document.querySelector(".send-messageBtn");
  sendMessageBtn.addEventListener("click", getMessage);
}

// wiadomości
function renderMessages() {
  const messagePageHTML = `
  <div class="messages-container"></div>
  `;
  mainPage.innerHTML = messagePageHTML;

  const messageContainer = document.querySelector(".messages-container");
  gatheredMessages.forEach((message) => {
    const messageHTML = `
    <div class="displayed-message">
      <p>Name: ${message.name}</p>
      <p>Email: ${message.email}</p>
      <p>
        Message: ${message.message}
      </p>
    </div>
    `;
    messageContainer.insertAdjacentHTML("beforeend", messageHTML);
  });

  return mainPage;
}

// buttony zmiany main page
function initialNav() {
  document.addEventListener("click", (event) => {
    if (event.target.matches(".nav-btn")) {
      const page = event.target.id;

      const logo = document.getElementById("logo-display");
      const activeBtn = document.querySelectorAll(".nav-btn");
      activeBtn.forEach((button) => button.classList.remove("active"));

      document
        .querySelectorAll(`.nav-btn#${page}`)
        .forEach((button) => button.classList.add("active"));

      switch (page) {
        case "home":
          logo.innerHTML = `
          <h1><span>NORBERT</span> <span>MUSIELAK</span></h1>
          <h3 class="lower-weight">WEB-DESIGNER</h3>
          `;
          generateMainHome();
          generateHome();
          break;
        case "projects":
          logo.innerHTML = `
          <h1><span>MY</span> <span>PROJECTS</span></h1>
          <h3 class="lower-weight">MADE WITH LOVE</h3>
          `;
          renderProjectPage();
          addProject();
          removeProject();
          break;
        case "about":
          logo.innerHTML = `
          <h1>ABOUT ME</h1>
          <h3 class="lower-weight">IT’S A-ME, <span>NORBERT!</span></h3>
          `;
          renderAboutMe();
          break;
        case "contact":
          logo.innerHTML = `
          <h1><span>CONTACT</span> <span>ME</span></h1>
          <h3 class="lower-weight">SAY HELLO <span>TO ME</span></h3>
          `;
          renderContactPage();
          sendMessage();
          break;
        case "messages":
          logo.innerHTML = `
          <h1>MESSAGES</h1>
          <h3 class="lower-weight">MESSAGE FROM THE INTERESTED PERSON</h3>
          `;
          renderMessages();
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
