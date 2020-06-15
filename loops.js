/**
 * # LOOPS
 */

//  Log 50 to 100 inclusive
// Left most expression runs once at start
// Second expression runs first on every loop
// Third expression runs last on every loop

function countEvens() {
  for (let i = 101; i >= 50; i -= 1) {
    if (i % 2 === 0) console.log(i)
  }
}
 

function countOdds() {
  let i = 106
  while (i > 52) {
    if (i % 2 === 1) {
      console.log(i)
    }

    i -= 1
  } 
}

// const junkFoods = ['hamburger', 'pizza', 'popcorn']
// for (const junkFood of junkFoods) {
//   console.log(junkFood)
// }

// for (const junkFood of junkFoods) {
//   console.log(junkFood)
  
// }

const arrNumbers = [2, 3, 4, 7]
const multiplyByTwo = (array) => {
  const newArray = []
  //multipy every number by 2
  //return a new array w/ numbers inside
  for (const number of array) {
    newArray.push(number * 2)
  }

  return newArray
}

//Scoping & Closures
/**
 * A new scope is created everytime you open a new block
 * whether that be for a function, or a an if/else, loops
 * 
 * Variables defined in parent scopes can be read by children scopes
 * But not the other way around
 */

/**
 * Anytime a parent variable is used in a child scope, that is called a closure
 */
console.log(multiplyByTwo(arrNumbers))
console.log(multiplyByTwo([1234, 3454, 233, 2]))

arrNumbers.forEach((item, i) => {
  console.log(item, i)
})


// This is a function you're going to write
// It will do the same thing as the normal forEach
// We're rewriting it!
Array.prototype.mattsForEach = (callback) => {

}