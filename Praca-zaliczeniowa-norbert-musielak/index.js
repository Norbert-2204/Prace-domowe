import { userData } from "./data.js";

const headPage = document.getElementById("header");
const mainPage = document.getElementById("main");
const data = userData;
function createHeader(first, second) {
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
        <button class="js-burgerBtn"></button>
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
    <h1><span>${first}</span></h1>
    <h3 class="lower-weight">${second}</h3>
  </div>
  `;
}

let isBurgerOpen = false;

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".js-burgerBtn") || target.closest(".js-burgerBtn")) {
    const displayNav = document.querySelector(".burger-nav");
    isBurgerOpen = !isBurgerOpen;
    displayNav.style.display = isBurgerOpen ? "flex" : "none";
    target.classList.toggle("burger-img", isBurgerOpen);
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

headPage.innerHTML = createHeader(
  data.header.main.name,
  data.header.second.profession
);
initialNav();

// strona home
function generateMainHome() {
  mainPage.innerHTML = "";

  const skillsSection = document.createElement("div");
  skillsSection.className = "skills-section";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const mainImg = document.createElement("img");
  mainImg.id = "img";
  mainImg.className = "main-img";
  mainImg.src = "/img/male-7275449_1280 1.png";
  imgContainer.appendChild(mainImg);

  const imgContainer2 = document.createElement("div");
  imgContainer2.className = "img-container2";

  const secondImg = document.createElement("img");
  secondImg.className = "second-img";
  secondImg.src = "img/male-mini.png";
  imgContainer2.appendChild(secondImg);

  const aboutMeSection = document.createElement("div");
  aboutMeSection.id = "about-me-section";
  aboutMeSection.className = "about-me-section";

  const skillsDisplay = document.createElement("div");
  skillsDisplay.id = "skills-display";
  skillsDisplay.className = "skills-display";

  skillsSection.appendChild(imgContainer);
  skillsSection.appendChild(imgContainer2);
  skillsSection.appendChild(aboutMeSection);
  skillsSection.appendChild(skillsDisplay);

  const skillSection = document.createElement("div");
  skillSection.className = "skill-section";

  const projectSection = document.createElement("div");
  projectSection.id = "project";
  projectSection.className = "project-section second-one";

  const arrowsLeftRight = document.createElement("div");
  arrowsLeftRight.id = "change-page-arrows";
  arrowsLeftRight.className = "change-page arrows-left-right";

  const leftArrowButton = document.createElement("button");
  leftArrowButton.id = "left-arrow";
  const leftArrowImg = document.createElement("img");
  leftArrowImg.src = "img/Arrow left.png";
  leftArrowButton.appendChild(leftArrowImg);

  const rightArrowButton = document.createElement("button");
  rightArrowButton.id = "right-arrow";
  const rightArrowImg = document.createElement("img");
  rightArrowImg.src = "img/Arrow right.png";
  rightArrowButton.appendChild(rightArrowImg);

  arrowsLeftRight.appendChild(leftArrowButton);
  arrowsLeftRight.appendChild(rightArrowButton);

  const arrowsUpDown = document.createElement("div");
  arrowsUpDown.className = "change-page arrows-up-down";

  const upArrowButton = document.createElement("button");
  upArrowButton.id = "up-arrow";
  const upArrowImg = document.createElement("img");
  upArrowImg.src = "img/ArrowUp.png";
  upArrowButton.appendChild(upArrowImg);

  const downArrowButton = document.createElement("button");
  downArrowButton.id = "down-arrow";
  const downArrowImg = document.createElement("img");
  downArrowImg.src = "img/ArrowDown.png";
  downArrowButton.appendChild(downArrowImg);

  arrowsUpDown.appendChild(upArrowButton);
  arrowsUpDown.appendChild(downArrowButton);

  skillSection.appendChild(projectSection);
  skillSection.appendChild(arrowsLeftRight);
  skillSection.appendChild(arrowsUpDown);

  mainPage.appendChild(skillsSection);
  mainPage.appendChild(skillSection);
}
generateMainHome();
generateHome();

function generateHome() {
  const aboutMeHTML = document.getElementById("about-me-section");
  aboutMeHTML.textContent = "";

  const aboutHeading = document.createElement("h3");
  aboutHeading.textContent = "About me";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent = data.about.home;

  aboutMeHTML.appendChild(aboutHeading);
  aboutMeHTML.appendChild(aboutParagraph);

  const mySkillsHTML = document.getElementById("skills-display");
  mySkillsHTML.textContent = "";

  const skillsHeading = document.createElement("h3");
  skillsHeading.textContent = "My Skills";

  const mySkillsDiv = document.createElement("div");
  mySkillsDiv.id = "mySkills";
  mySkillsDiv.classList.add("my-skills");

  mySkillsHTML.appendChild(skillsHeading);
  mySkillsHTML.appendChild(mySkillsDiv);

  const projectContainer = document.getElementById("project");
  const limitedProjects = data.projects.slice(0, 3);
  const turnLeft = document.getElementById("left-arrow");
  const turnRight = document.getElementById("right-arrow");
  const turnUp = document.getElementById("up-arrow");
  const turnDown = document.getElementById("down-arrow");
  const arrowsContainer = document.getElementById("change-page-arrows");
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
      const index = (currentIndex + i) % data.projects.length;
      limitedProjects.push(data.projects[index]);
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
    currentIndex = (currentIndex + 1) % data.projects.length;
    renderProjects();
  });
  turnLeft.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + data.projects.length) % data.projects.length;
    renderProjects();
  });
  turnUp.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % data.projects.length;
    renderProjects();
  });
  turnDown.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + data.projects.length) % data.projects.length;
    renderProjects();
  });

  if (data.projects.length <= 3) {
    turnDown.style.display = "none";
    turnLeft.style.display = "none";
    turnRight.style.display = "none";
    turnUp.style.display = "none";
    arrowsContainer.classList.remove("change-page");
    projectContainer.style.paddingBottom = "84px";
    if (data.projects.length === 0) {
      projectContainer.style.paddingTop = "0px";
    }
  } else {
    turnDown.style.display = "flex";
    turnLeft.style.display = "flex";
    turnRight.style.display = "flex";
    turnUp.style.display = "flex";
    arrowsContainer.classList.add("change-page");
    projectContainer.style.paddingBottom = "0px";
    projectContainer.style.paddingTop = "84px";
  }
  // skillsy
  const mySkills = document.getElementById("mySkills");
  data.skills.forEach((skill) => {
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
  mainPage.textContent = "";

  const addBtnContainer = document.createElement("div");
  addBtnContainer.classList.add("addBtn-container");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-projectBtn", "display-modal");
  addProjectBtn.innerHTML = `<span>+</span> Add project`;

  addBtnContainer.appendChild(addProjectBtn);
  mainPage.appendChild(addBtnContainer);

  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");

  const modalLayout = document.createElement("div");
  modalLayout.classList.add("modal-layout");

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  const closeImg = document.createElement("img");
  closeImg.setAttribute("src", "img/close.png");
  closeBtn.appendChild(closeImg);
  modalLayout.appendChild(closeBtn);

  const titleDiv = document.createElement("div");

  const titleH3 = document.createElement("h3");
  titleH3.textContent = "Project title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("modal-input", "js-input-project");
  titleInput.placeholder = "Project title";

  const titleError = document.createElement("p");
  titleError.classList.add("red");
  titleError.textContent = "The title must be at least 3 characters long";

  titleDiv.appendChild(titleH3);
  titleDiv.appendChild(titleInput);
  titleDiv.appendChild(titleError);

  modalLayout.appendChild(titleDiv);

  const techDiv = document.createElement("div");

  const techH3 = document.createElement("h3");
  techH3.textContent = "Technologies";

  const techInput = document.createElement("input");
  techInput.type = "text";
  techInput.classList.add("modal-input", "js-input-tech");
  techInput.placeholder = "html,css,javascript";

  const techError = document.createElement("p");
  techError.classList.add("red", "red2");
  techError.textContent = "Please add some technologies";

  techDiv.appendChild(techH3);
  techDiv.appendChild(techInput);
  techDiv.appendChild(techError);

  modalLayout.appendChild(techDiv);

  const modalAddBtn = document.createElement("button");
  modalAddBtn.classList.add("add-projectBtn", "js-addBtn");
  modalAddBtn.innerHTML = `<span>+</span> Add project`;

  modalLayout.appendChild(modalAddBtn);

  modalWrapper.appendChild(modalLayout);
  mainPage.appendChild(modalWrapper);

  const projectLayout = document.createElement("div");
  projectLayout.classList.add("project-layout");

  mainPage.appendChild(projectLayout);

  const container = document.querySelector(".addBtn-container");
  if (data.projects.length === 0) {
    const isExisting = document.querySelector(".no-projects");
    if (!isExisting && container) {
      const noProjectInfo = document.createElement("div");
      noProjectInfo.textContent = "There are no projects to display";
      noProjectInfo.setAttribute("class", "no-projects");
      container.append(noProjectInfo);
    }
  } else {
    const projectsLayout = document.querySelector(".project-layout");
    data.projects.forEach((project) => {
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
  }
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

    data.projects.push(newProject);
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

      const index = data.projects.findIndex(
        (project) => project.title === projectTitle
      );
      if (index !== -1) {
        data.projects.splice(index, 1);
      }

      if (data.projects.length === 0) {
        const isExisting = document.querySelector(".no-projects");
        if (isExisting) {
          return;
        } else {
          const container = document.querySelector(".addBtn-container");
          const noProjectInfo = document.createElement("div");
          noProjectInfo.textContent = "There are no projects to display";
          noProjectInfo.setAttribute("class", "no-projects");
          container.append(noProjectInfo);
        }
      }
    }
  });
}

// about me
function renderAboutMe() {
  mainPage.textContent = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("about-me-wrapper");

  const infoPage = document.createElement("div");
  infoPage.classList.add("my-info-page");

  const imgContainer1 = document.createElement("div");
  imgContainer1.classList.add("img-container");

  const img1 = document.createElement("img");
  img1.setAttribute("src", "/img/male-7275449_1280 1.png");

  imgContainer1.appendChild(img1);
  infoPage.appendChild(imgContainer1);

  const imgContainer2 = document.createElement("div");
  imgContainer2.classList.add("img-container2");

  const img2 = document.createElement("img");
  img2.classList.add("second-img");
  img2.setAttribute("src", "img/male-mini.png");

  imgContainer2.appendChild(img2);
  infoPage.appendChild(imgContainer2);

  const backgroundDiv = document.createElement("div");
  backgroundDiv.classList.add("my-description");

  const backgroundH3 = document.createElement("h3");
  backgroundH3.textContent = "My background";

  const backgroundP = document.createElement("p");
  backgroundP.textContent = data.about.background;

  backgroundDiv.appendChild(backgroundH3);
  backgroundDiv.appendChild(backgroundP);
  infoPage.appendChild(backgroundDiv);

  const hobbiesDiv = document.createElement("div");
  hobbiesDiv.classList.add("my-description");

  const hobbiesH3 = document.createElement("h3");
  hobbiesH3.textContent = "My hobbies and interests";

  const hobbiesP = document.createElement("p");
  hobbiesP.textContent = data.about.hobbies;

  hobbiesDiv.appendChild(hobbiesH3);
  hobbiesDiv.appendChild(hobbiesP);
  infoPage.appendChild(hobbiesDiv);

  const continueBtn = document.createElement("button");
  continueBtn.classList.add("continue");

  const arrowImg = document.createElement("img");
  arrowImg.classList.add("contact-me-arrow");
  arrowImg.setAttribute("src", "img/Arrow right.png");

  continueBtn.appendChild(arrowImg);
  continueBtn.append(" Contact me");
  infoPage.appendChild(continueBtn);

  wrapper.appendChild(infoPage);
  mainPage.appendChild(wrapper);

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
function renderContactPage() {
  mainPage.textContent = "";

  const contactMe = document.createElement("div");
  contactMe.classList.add("contact-me");

  const headingWrapper = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Contact me";
  headingWrapper.appendChild(heading);
  contactMe.appendChild(headingWrapper);

  const inputDirections = document.createElement("div");
  inputDirections.classList.add("input-directions");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("put-text");

  const nameLabel = document.createElement("h3");
  nameLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.classList.add("input-text", "js-input-name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Your Name");

  const nameError = document.createElement("p");
  nameError.classList.add("invalid-name", "red");

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  nameDiv.appendChild(nameError);

  const emailDiv = document.createElement("div");
  emailDiv.classList.add("put-text");

  const emailLabel = document.createElement("h3");
  emailLabel.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.classList.add("input-text", "js-input-email");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("placeholder", "email@example.com");

  const emailError = document.createElement("p");
  emailError.classList.add("red", "invalid-email");
  emailError.textContent = "Please enter a valid email address";

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(emailError);

  inputDirections.appendChild(nameDiv);
  inputDirections.appendChild(emailDiv);
  contactMe.appendChild(inputDirections);

  const inputDirections2 = document.createElement("div");
  inputDirections2.classList.add("input-directions2");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("put-text");

  const messageLabel = document.createElement("h3");
  messageLabel.textContent = "Message";

  const messageInput = document.createElement("input");
  messageInput.classList.add("input-text", "js-input-message");
  messageInput.setAttribute("type", "text");
  messageInput.setAttribute("placeholder", "Hello, my name is...");

  const messageError = document.createElement("p");
  messageError.classList.add("red", "invalid-message");
  messageError.textContent = "The message cannot be empty";

  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(messageInput);
  messageDiv.appendChild(messageError);

  inputDirections2.appendChild(messageDiv);
  contactMe.appendChild(inputDirections2);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("addBtn-container", "spacing");

  const sendBtn = document.createElement("button");
  sendBtn.classList.add("send-messageBtn");
  sendBtn.textContent = "Send message";

  btnContainer.appendChild(sendBtn);
  contactMe.appendChild(btnContainer);

  mainPage.appendChild(contactMe);
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

  data.messages.push(newMessage);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  return data.messages;
}

function sendMessage() {
  const sendMessageBtn = document.querySelector(".send-messageBtn");
  sendMessageBtn.addEventListener("click", getMessage);
}

// wiadomości
function renderMessages() {
  mainPage.textContent = "";

  const messagesContainer = document.createElement("div");
  messagesContainer.classList.add("messages-container");

  mainPage.appendChild(messagesContainer);

  const messageContainer = document.querySelector(".messages-container");
  data.messages.forEach((message) => {
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

      switch (page) {
        case "home":
          headPage.innerHTML = createHeader(
            data.header.main.name,
            data.header.second.profession
          );
          generateMainHome();
          generateHome();
          isBurgerOpen = false;
          break;
        case "projects":
          headPage.innerHTML = createHeader(
            data.header.main.projects,
            data.header.second.projects
          );
          renderProjectPage();
          addProject();
          removeProject();
          isBurgerOpen = false;
          break;
        case "about":
          headPage.innerHTML = createHeader(
            data.header.main.about,
            data.header.second.about
          );
          renderAboutMe();
          isBurgerOpen = false;
          break;
        case "contact":
          headPage.innerHTML = createHeader(
            data.header.main.contact,
            data.header.second.contact
          );
          renderContactPage();
          sendMessage();
          isBurgerOpen = false;
          break;
        case "messages":
          headPage.innerHTML = createHeader(
            data.header.main.messages,
            data.header.second.messages
          );
          renderMessages();
          isBurgerOpen = false;
          break;
      }
      const activeBtn = document.querySelectorAll(".nav-btn");
      activeBtn.forEach((button) => button.classList.remove("active"));

      document
        .querySelectorAll(`.nav-btn#${page}`)
        .forEach((button) => button.classList.add("active"));
    }
  });
}
