const largestPrime = (num) => {
  let divisor = 2

  while (num > 1) {
    if (num % divisor === 0) {
      num /= divisor;      
    } else {
      divisor += 1
    }
  }
  return divisor
}

console.log(largestPrime(30))
