const alive = document.getElementById("alive");
const dead = document.getElementById("dead");
const unknown = document.getElementById("unknown");
const radioStatus = document.querySelectorAll(".this-checked");
const searchByName = document.querySelector(".search");
let currentPage = 1;
let currentStatus = "Alive";
let currentQuery = "";

searchByName.addEventListener("input", (e) => {
  currentQuery = e.target.value.trim();
  currentPage = 1;
  renderCharacters();
});

radioStatus.forEach((radio) => {
  radio.addEventListener("change", () => {
    let status = "";

    switch (radio.id) {
      case "alive":
        status = "Alive";
        break;
      case "dead":
        status = "Dead";
        break;
      case "unknown":
        status = "unknown";
        break;
      default:
        status = "Alive";
    }
    currentStatus = status;
    currentPage = 1;
    renderCharacters();
  });
});

async function renderCharacters() {
  const characterBlock = document.querySelector(".character-container");
  const info = document.querySelector(".falseName");
  info.textContent = "";
  characterBlock.innerHTML = "";

  let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${currentStatus}`;
  if (currentQuery) {
    url += `&name=${currentQuery}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      characterBlock.innerHTML = "";
      info.textContent =
        "Nie znaleziono postaci spełniających kryteria wyszukiwania.";
      return;
    }
    const data = await response.json();
    createCharacter(data, characterBlock);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    characterBlock.innerHTML = "<p>Błąd pobierania danych.</p>";
  }
}
renderCharacters();

function createCharacter(data, characterBlock) {
  let count = 0;
  let maxUnit = 20;
  data.results.forEach((unit) => {
    if (count >= maxUnit) {
      return;
    }
    const character = {
      name: unit.name,
      status: unit.status,
      species: unit.species,
      img: unit.image,
    };
    const mainBlock = document.createElement("div");
    mainBlock.className = "character-page";

    const info = document.createElement("div");
    info.classList = "info";

    const image = document.createElement("img");
    image.src = character.img;

    const charName = document.createElement("p");
    charName.classList = "name";
    charName.textContent = character.name;

    info.append(image, charName);

    const type = document.createElement("div");
    type.classList = "type";

    const status = document.createElement("p");
    status.textContent = `Status: ${character.status}`;

    const species = document.createElement("p");
    species.textContent = `Gatunek: ${character.species}`;

    type.append(status, species);

    mainBlock.append(info, type);
    characterBlock.insertAdjacentElement("beforeend", mainBlock);
    count++;
  });
}

const next = document.querySelector(".next-page");
next.addEventListener("click", () => {
  currentPage++;
  renderCharacters();
});

const prev = document.querySelector(".prev-page");
prev.addEventListener("click", () => {
  if (currentPage === 1) {
    return;
  } else {
    currentPage--;
    renderCharacters();
  }
});

async function test() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  console.log(data);
}
test();
