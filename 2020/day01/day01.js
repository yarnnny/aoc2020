const { test, readInput } = require('../utils')

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const allNumbers = input.split('\n')
  let correctNumbers = []
  allNumbers.forEach((number) => {
    const correctNumber = allNumbers.filter((eachNumber) => {
      return +eachNumber + +number === 2020
    })

    if (correctNumber) {
      correctNumbers.push(correctNumber)
    }
  })
  correctNumbers = correctNumbers.filter((number) => number.length)
  const result = correctNumbers.reduce((acc, val) => acc.concat(val), [])
  return +result[0] * +result[1]
}

const goB = (input) => {
  const allNumbers = input.split('\n')
  let correctNumbers = []
  allNumbers.forEach((firstNumber) => {
    allNumbers.forEach((secondNumber) => {
      const correctNumber = allNumbers.filter((thirdNumber) => {
        return +thirdNumber + +secondNumber + +firstNumber === 2020
      })

      if (correctNumber.length) {
        correctNumbers.push(correctNumber)
      }
    })
  })

  correctNumbers = correctNumbers.reduce((acc, val) => acc.concat(val), [])
  const arrayResult = correctNumbers.filter(
    (number, index) => correctNumbers.indexOf(number) === index
  )
  return arrayResult.reduce((acc, val) => acc * val)
}

console.time('Time')
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd('Time')

console.log('Solution to part 1:', resultA)
console.log('Solution to part 2:', resultB)
