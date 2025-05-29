const alive = document.getElementById("alive");
const dead = document.getElementById("dead");
const unknown = document.getElementById("unknown");
const radioStatus = document.querySelectorAll(".this-checked");
const searchByName = document.querySelector(".search");

const nameInput = document.querySelector(".name-input");
const selectStatus = document.querySelector(".select");
const raceInput = document.querySelector(".race-input");
const createBtn = document.querySelector(".create");

let currentPage = 1;
let maxPages = 1;
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

// const deleteBtn = document.querySelector(".deleteBtn");
// console.log(deleteBtn, "delete button");
// deleteBtn.addEventListener("click", () => {
//   console.log("klik");
// });

createBtn.addEventListener("click", async () => {
  const name = nameInput.value.trim("");
  const statusText = selectStatus.value.trim("");
  const species = raceInput.value.trim("");

  if (!name || !species) {
    console.log("uzupełnij wszystkie pola");
    return;
  }

  const switchStatus = {
    Żywy: "Alive",
    Martwy: "Dead",
    Nieznany: "unknown",
  };

  const status = switchStatus[statusText] || "unknown";

  const newCharacter = {
    name,
    status,
    species,
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  };

  try {
    const response = await fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    });

    if (!response.ok) {
      throw new Error("Nie udało się wysłać postaci");
    }

    nameInput.value = "";
    statusSelect.value = "Żywy";
    speciesInput.value = "";

    renderCharacters();
  } catch (error) {
    console.log("błąd: ", error);
  }
});

async function renderCharacters() {
  const characterBlock = document.querySelector(".character-container");
  const info = document.querySelector(".falseName");
  info.textContent = "";
  characterBlock.innerHTML = "";

  let url = `http://localhost:3000/characters?status=${currentStatus}&_page=${currentPage}&_limit=5`;
  if (currentQuery) {
    url += `&name_like=${currentQuery}`;
  }
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    const totalCount = await getTotalCount();
    maxPages = Math.max(1, Math.ceil(totalCount / 5));

    if (currentPage > maxPages) {
      currentPage = maxPages;
      renderCharacters();
      return;
    }

    if (data.length === 0) {
      characterBlock.innerHTML = "";
      info.textContent =
        "Nie znaleziono postaci spełniających kryteria wyszukiwania.";
      return;
    }
    createCharacter(data, characterBlock);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    info.textContent = "Błąd pobierania danych.";
  }
}
renderCharacters();

function createCharacter(data, characterBlock) {
  data.forEach((unit) => {
    const character = {
      id: unit.id,
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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń postać";
    deleteButton.className = "deleteBtn";
    deleteButton.addEventListener("click", async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/characters/${character.id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          mainBlock.remove();
        }
        renderCharacters();
      } catch (error) {
        console.log("nie udało się usunąć postaci: ", error);
      }
    });

    mainBlock.append(info, type, deleteButton);
    characterBlock.insertAdjacentElement("beforeend", mainBlock);
  });
}
async function getTotalCount() {
  let url = `http://localhost:3000/characters?status=${currentStatus}`;
  if (currentQuery) {
    url += `&name_like=${currentQuery}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data.length;
}

const next = document.querySelector(".next-page");
next.addEventListener("click", () => {
  currentPage++;
  renderCharacters();
});

const prev = document.querySelector(".prev-page");
prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCharacters();
  }
});

async function test() {
  const response = await fetch("http://localhost:3000/characters");
  const data = await response.json();
  console.log(data);
}
