// ***ARRAY***

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***SOLUTIONS***

//***MAP***
console.log('------------------------------------\n')
console.log('1. MAP FUNCTIONS\n')

//1. Get array of all names
const listAllNames = characters.map((n) => n.name)
console.log('List of Star Wars Character Names:\n', listAllNames, '\n')

//2. Get array of all heights
const listAllHeights = characters.map((h) => h.height)
console.log('List of Star Wars Character Heights:\n', listAllHeights, '\n')

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map(({name, height}) => ({name, height}))
console.log('List of Star Wars Characters Names & Their Height:\n', nameAndHeight, '\n')

//4. Get array of all first names
const listFirstNames = characters.map((f) => f.name.split(' ').splice(0, 1))
console.log('List of Star Wars Character First Names:\n', listFirstNames, '\n')

//***REDUCE***
console.log('------------------------------------\n')
console.log('2. REDUCE FUNCTIONS\n')

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
console.log('Total Mass of Star Wars Characters:', totalMass, '\n')

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log('Total Height of Star Wars Characters:', totalHeight, '\n')

//3. Get total number of characters by eye color
const eyeColourCount = characters.reduce((acc, cur) => {
    const colour = cur.eye_color
    if (acc[colour]) {
        acc[colour]++
    } else {
        acc[colour] = 1
    }
    return acc
}, {})
console.log('Total Number of Star Wars Characters of a Certain Eye Colour:\n', eyeColourCount, '\n')

//4. Get total number of characters in all the character names
const nameCharacterCount = characters.reduce((acc, cur) => acc + cur.name.length, 0)
console.log('Total Number of Characters in Names:', nameCharacterCount, '\n')

//***FILTER***
console.log('------------------------------------\n')
console.log('3. FILTER FUNCTIONS\n')

//1. Get characters with mass greater than 100
const massOver100 = characters.filter((m) => m.mass > 100)
console.log('Star Wars Character(s) with Mass over 100:\n', massOver100, '\n')

//2. Get characters with height less than 200
const massUnder20 = characters.filter((m) => m.mass < 20)
console.log('Star Wars Character(s) with Mass under 20:\n', massUnder20, '\n')

//3. Get all male characters
const allMaleCharacters = characters.filter((g) => g.gender === 'male')
console.log('All Male Star Wars Characeters:\n', allMaleCharacters, '\n')

//4. Get all female characters
const allFemaleCharacters = characters.filter((g) => g.gender === 'female')
console.log('All Female Star Wars Characters:\n', allFemaleCharacters, '\n')

//***SORT***
console.log('------------------------------------\n')
console.log('4. SORT FUNCTIONS\n')

//1. Sort by mass
const sortByMass = characters.sort((m1, m2) => {
    return m1.mass - m2.mass
})
console.log('Star Wars Characters Sorted by Mass:\n', sortByMass, '\n')

//2. Sort by height
const sortByHeight = characters.sort((h1, h2) => {
    return h1.height - h2.height
})
console.log('Star Wars Characters Sorted by Height:\n', sortByHeight, '\n')

//3. Sort by name
const sortByName = characters.sort((n1, n2) => {
    // toLowerCase() converts names to lowercase for case-insensitive sorting, also works with toUpperCase()
    const name1 = n1.name.toLowerCase()
    const name2 = n2.name.toLowerCase()
    
    // swap around the > and < on lines 128 and 130 to sort the names (by first name) in descending order
    if (name1 < name2) {
        return -1
    } else if (name1 > name2) {
        return 1
    } else {
        return 0
    }
})
console.log('Star Wars Characters Sorted by Name:\n', sortByName, '\n')

//4. Sort by gender
const sortByGender = characters.sort((g1, g2) => {
    const gender1 = g1.gender
    const gender2 = g2.gender
    
    if (gender1 < gender2) {
        return -1
    } else if (gender1 > gender2) {
        return 1
    } else {
        return 0
    }
})
console.log('Star Wars Characters Sorted by Gender:\n', sortByGender, '\n')

//***EVERY***
console.log('------------------------------------\n')
console.log('5. EVERY FUNCTIONS\n')

//1. Does every character have blue eyes?
const hasBlueEyes = (character) => character.eye_color === 'blue'
const blueEyesCheck = characters.every(hasBlueEyes)
console.log('Does every character have blue eyes?: ', blueEyesCheck, '\n')

//2. Does every character have mass more than 40?
const hasMassOver40 = (character) => character.mass > 40
const massOver40Check = characters.every(hasMassOver40)
console.log('Does every character have a mass over 40?: ', massOver40Check, '\n') 

//3. Is every character shorter than 200?
const isShorterThan200 = (character) => character.height < 200
const shorterThan200Check = characters.every(isShorterThan200)
console.log('Is every character shorter than 200?: ', shorterThan200Check, '\n')

//4. Is every character male?
const isMale = (character) => character.gender === 'male'
const isMaleCheck = characters.every(isMale)
console.log('Is every character male?: ', isMaleCheck, '\n')

//***SOME***
console.log('------------------------------------\n')
console.log('6. SOME FUNCTIONS\n')

//1. Is there at least one male character?
const atLeast1Male = (character) => character.gender === 'male'
const checkForMales = characters.some(atLeast1Male)
console.log('Is there at least 1 male character?: ', checkForMales, '\n')

//2. Is there at least one character with blue eyes?
const atLeast1WithBlueEyes = (character) => character.eye_color === 'blue'
const checkForBlueEyes = characters.some(atLeast1WithBlueEyes)
console.log('Is there at least 1 character with blue eyes?: ', checkForBlueEyes, '\n')

//3. Is there at least one character taller than 210?
const atLeast1TallerThan210 = (character) => character.height > 210
const checkAtLeast1TallerThan210 = characters.some(atLeast1TallerThan210)
console.log('Is there at least 1 character taller than 210?: ', checkAtLeast1TallerThan210, '\n')

//4. Is there at least one character that has mass less than 50?
const atLeast1MassUnder50 = (character) => character.mass < 50
const checkAtLeast1MassUnder50 = characters.some(atLeast1MassUnder50)
console.log('Is there at least 1 character with a mass under 50?: ', checkAtLeast1MassUnder50, '\n')