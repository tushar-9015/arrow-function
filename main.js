

// // with no parameter
// const getNum = () => 2


// // ES5 function
// function getNum() {
//   return 2
// }

// with one parameter
// Function
// const isOne = (num) => num == 1 // HW: === vs == in JavaScript, write a blog.

// // Calling the function
// console.log(isOne(12))



// const isBigger = (a, b) => a > b
// console.log('Is 2 bigger than 3?', isBigger(2, 3))

// // How would you write this with the least amount of characters
// function Add22andReturn(num) {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 1
// const Add22andReturn = (num) => {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 2
// const Add22andReturn = num => {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 3
// const Add22andReturn = num => {
//   return num + 22
// }

// // Version 4
// const Add22andReturn = num => num + 22

// //doing it on array
// [1, 2, 3, 4].map(num => num + 22)


// const printSomethingAndReturn = (a) => {
//     console.log("sq. a....");
//     return a*a;
// }

// console.log(printSomethingAndReturn(3))

// const giveMeAnObject = a => ({value: a})
// console.log(giveMeAnObject(5))

// const getObj = (num1, num2) => ({a: num1, b: num2})
// console.log(22, 45)

// const defaultExample = (a, b) => a + b
// console.log(defaultExample(2))

// const defaultExample = (a, b) => {
//     if (b === undefined) {
//       b = 5
//     }
//     return a + b
//   }
  
//   // Instead
//   const defaultExample2 = (a, b = 5) => a + b
  
//   console.log(defaultExample(2, 4))
//   console.log(defaultExample2(3))



// const defaultExample5 = (a, b=8, c) => a+b-c

// console.log(defaultExample5(4, ,5))

const defaultExample6 = (a, b=5, c=6) => a+b-c
console.log(defaultExample6(4, 7, 0))