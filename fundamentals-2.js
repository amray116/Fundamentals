/**
 * Data Types!
 */

// Primitives
'strings'
const boolean = false //or true
const number = 7 * 4

//  Data Structures
const arr = []
const book = {
  title: 'Titanic',
  author: 'someone',
  pages: 500
}
// console.log(book.pages)
book.author = 'Anna Marie'
book.copyright = 1884
book['copyright'] = 1884
// console.log(book)

function randomArray() {
  let r = Math.random() * 10
  r = Math.floor(r)
  // console.log(r)
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, r)
}

const candies = ['snickers', 'milky way', 'gobstoppers', 'peppermint patties', 'jr mints']
//                    0            1            2                 3

// console.log(candies[0])
// console.log(candies[candies.length - 1])

function getRandomLength () {
  const arr = randomArray()
  console.log(arr)
  console.log(arr[arr.length - 1])
}

// getRandomLength()
// getRandomLength()
// getRandomLength()
// getRandomLength()
// getRandomLength()
const sliced = candies.slice(1, 3)
// console.log(sliced)
// console.log(candies)



const loggingArray = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i])
  }
}

// loggingArray(candies)
// console.log("-----taking a break ------");

const logArrayBackwards = (array) => {
    for (let i = array.length - 1; i >= 0; i -= 1){
        console.log(array[i])
    }
}


// logArrayBackwards(candies)
// logArrayBackwards(['pico de gallo', 'ground beef', 'lettuce', 'queso'])
// logArrayBackwards('Anna Marie')

/**
 * Array functions!
 */

//  My favorite array functions are:
// #forEach
// #reduce
// #filter
// #map
// #some

// candies.forEach((candy) => {
//   console.log(candy)
// })

// Array.prototype.myForEach = function (callback) { 
//   for (let index = 0; index < this.length; index += 1) {
//     const element = this[index];
//     callback(element)
//   }
// }

Array.prototype.mattForEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i])
  }
}

candies.mattForEach((candy) => { 
  console.log(candy)
})

// const doubleCandies = candies.map(candy => `${candy} ${candy}`)
// console.log(doubleCandies)
// console.log(candies)

Array.prototype.mattsMap = function (callback) {
  const newArray = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    newArray.push(callback(element))
  }
  return newArray
  
}

const doubleCandies = candies.mattsMap(candy => `${candy} ${candy}`)
console.log(doubleCandies)
console.log(candies)