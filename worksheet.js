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
console.log(characters);

//***MAP***
//1. Get array of all names

let allNames = characters.map((e) => e.name);
// console.log(allNames)
//2. Get array of all heights
let allHeights = characters.map((e) => e.height);
// console.log(allHeights)
//3. Get array of objects with just name and height properties
const obj = characters.map((element) => {
  return { name: element.name, height: element.height };
});
// console.log(obj)
//4. Get array of all first names
const firstName = characters.map((e) => {
  return e.name.split(" ")[0];
});
// console.log(firstName)

//***REDUCE***
//1. Get total mass of all characters
const allMass = characters.reduce((acc, currentEl) => {
  return acc + currentEl.mass;
}, 0);

// console.log(allMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, currentEl) => {
    return acc + currentEl.height
},0)
console.log(totalHeight)
//3. Get total number of characters by eye color
const byEyeColor = characters.reduce((acc, currentEl) => {
    if(acc[currentEl.eye_color]) {
        acc[currentEl.eye_color] ++
    } else {
        acc[currentEl.eye_color] = 1
    }
    return acc
}, {})
console.log(byEyeColor)
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, currentEl) => {
    return acc + currentEl.name.length
},0)
console.log(totalNameCharacters)

//***FILTER***
//1. Get characters with mass greater than 100


//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
