/**
 * Write a function that takes in a number (n)
 * and returns an array of length n containing fibonacci numbers
 * starting with the number 0, ex. [0, 1, 1, 2, ...]
 */

const fibSequence = (num) => {
  if (num < 0) return "get out of town"
  if (num === 0) return []
  if (num === 1) return [0]
  if (num === 2) return [0, 1]

  const fibArray = [0, 1]
  while (fibArray.length < num) {
    const sumOfPreviousTwo = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    fibArray.push(sumOfPreviousTwo)
  }
  return fibArray
}  




// input is the length of array
// output is an array with fib numbers
// example (5) => [0, 1, 1, 2, 3]
//set array to store in 
// 
console.log(fibSequence(-1))// === [] 
console.log(fibSequence(-10))// === [] 
console.log(fibSequence(-100))// === [] 
console.log(fibSequence(0))// === [] 
console.log(fibSequence(1))// === [0] 
console.log(fibSequence(2))// === [0] 
console.log(fibSequence(3))// === [0, 1] 
console.log(fibSequence(4))// === [0, 1] 
console.log(fibSequence(5))
console.log(fibSequence(100))

// [0, 1] // 2
// // 0, 1
// [0, 1, 1] // 3
// // 1, 2
// [0, 1, 1, 2] // 4
// // 2, 3
// [0, 1, 1, 2, 3] // 5
// 3, 4

