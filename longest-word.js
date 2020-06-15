// /**
//  * Write a function that takes a string
//  * and returns the longest word in it
//  */


// /**
//  * needs to compare the length of each word in the string
//  * needs to resturn the longest word
//  */



const findLongestWord = (str) => {
  const wordsArray = str.split(' ')
  let word = ''

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (word.length < wordsArray[i].length) {
      word = wordsArray[i]
    }
  }

  return word
}
console.log(findLongestWord(' going to do.'))




