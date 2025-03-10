// Zadanie 1

const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

function generateNickname(ppl) {
  ppl.forEach((person) => {
    let nickname = "";

    if (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string"
    ) {
      if (
        person.firstName.trim().length >= 3 &&
        person.lastName.trim().length >= 3
      ) {
        nickname = `${person.firstName
          .slice(-3)
          .split("")
          .reverse()
          .join("")}${person.lastName
          .slice(0, 3)
          .split("")
          .reverse()
          .join("")}`;
        nickname = `${nickname.charAt(0).toUpperCase()}${nickname
          .slice(1)
          .toLowerCase()}`;
        person.nickname = nickname;
      }
    }
  });
  return ppl;
}
generateNickname(people);

// Zadanie 2

function getWithNickname(ppl) {
  return ppl
    .filter((person) => person.nickname)
    .map((person, index) => {
      const letterNumber = person.firstName.length + person.lastName.length;

      if (letterNumber % 2 === 0) {
        person.age = letterNumber;
      } else {
        const notZero = index === 0 ? 1 : index;
        const objKeysLength = Object.keys(person).reduce((sum, keys) => {
          return (sum += keys.length);
        }, 0);
        person.age = Math.ceil(objKeysLength / notZero);
      }
      return person;
    });
}

// Zadanie 3

const newPeople = getWithNickname(people);

function checkLargestQuantity(ppl) {
  return ppl.map((person) => {
    const letterCount = {};
    const allLetters =
      `${person.firstName}${person.lastName}${person.nickname}`.toLowerCase();
    for (const letter of allLetters) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    let mostCommon = "";
    let count = 0;

    for (const letter in letterCount) {
      if (letterCount[letter] > count) {
        mostCommon = letter;
        count = letterCount[letter];
      } else if (letterCount[letter] === count && letter < mostCommon) {
        mostCommon = letter;
      }
    }
    person.mostCommonLetter = {
      letter: mostCommon,
      count: count,
    };
    return person;
  });
}
console.log(checkLargestQuantity(newPeople));
