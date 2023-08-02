const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const characterName = characters.map((character) => character.name);
// console.log(characterName);

//2. Get array of all heights
const characterHeight = characters.map((character) => character.height);
// console.log(characterHeight);

//3. Get array of objects with just name and height properties

const minifiedChacter = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
// console.log(minifiedChacter);

//4. Get array of all first names
const firstName = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstName);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
// console.log(characterByEyeColor);

//4. Get total number of characters in all the character names
const totalNameCharacter = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);
// console.log(totalNameCharacter);

//***FILTER***
//1. Get characters with mass greater than 100
const charcerMassGreaterThan100 = characters.filter(
  (character) => character.mass > 100
);
// console.log(charcerMassGreaterThan100);
//2. Get characters with height less than 200
const charcerMassLessThan100 = characters.filter(
  (character) => character.mass < 200
);
// console.log(charcerMassLessThan100);

//3. Get all male characters
const allMaleCharacters = characters.filter(
  (chacater) => chacater.gender == "male"
);
// console.log(allMaleCharacters);

//4. Get all female characters
const allFemaleCharacters = characters.filter(
  (chacater) => chacater.gender == "female"
);
// console.log(allFemaleCharacters);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => b.mass - a.mass);
// console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
// console.log(byHeight);

//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return 1;
  return -1;
});
// console.log(byName);


//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender == "female") return -1;
    return 1;
  });
  console.log(byGender);


//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some(
  (character) => character.gender == "male"
);
// console.log(oneMaleCharacter);

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(
  (character) => character.eye_color == "blue"
);
// console.log(oneBlueEyes);

//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210);
// console.log(oneTallerThan210);

//4. Is there at least one character that has mass less than 50?
const oneMassLessThan = characters.some((character) => character.mass < 50);
// console.log(oneMassLessThan);
