const m = 'monkey'
const g = 'giraffe'
const b = 'bear'

const zoo = {
  animals: [m, g, b]
}

const zootopia = {}

zootopia.owner = 'Carry Fisher\'s Ghost'
// console.log(zootopia.owner);
zootopia.animals = zoo.animals
zoo.animals = []

console.log('This worked correctly!', zootopia);
console.log('This worked correctly!', zoo);

const transferOwnership = (zoo1, zoo2) => {
  zoo2.animals = zoo1.animals
  zoo1.animals = []
  return [zoo1, zoo2]
}
// zoo = zootopia
const [z1, z2] = transferOwnership(zootopia, zoo)

/**
 * These should be the same
 * 
 * Pass by reference allows us to use the same pointers to .animals in the function
 */
console.log('Returned Zoos', z1, z2);
console.log('Reference Zoos', zootopia, zoo);

const doggyYears = (age) => age * 7

const age = 30
console.log(doggyYears(age))

console.log(age)

let marvel = ['Iron Man', 'Thor']
console.log(marvel[1])
marvel.push('Captain America')

console.log(marvel)

marvel[3] = 'Black Panther'

marvel[12] = 'Ant Man'
console.log(marvel)

marvel.push('Black Widow')

console.log(marvel);

marvel[0] = 'DEAD'
console.log(marvel);

marvel = [...marvel.slice(1, 4), ...marvel.slice(12, 14)]
console.log(marvel);

/**
 * The spread/rest operator (...)
 */

const arr = [1, 2, 3, 4, 5]

function log(...args) {
  console.log(args)
  console.log(...args)
}

console.log(log(...arr))

const dog = {}
dog.name = 'Scruff'

dog['name'] = 'Red'
dog.bark = () => {
  return'bark, bark' 
}


console.log(dog.bark());
