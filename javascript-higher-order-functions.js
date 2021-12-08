// JavaScript Higher Order Functions 12/7/2021

// Built in methods - code snippets, popular actions
// Syntactical sugar - wrappers over code functionality that make the language sweeter

// Uncaught TypeError: true.toUpperCase is not a function
// Whatever you are calling your method on is not what you think it is, or the wrong thing

// Built in methods - act on a particular data type, sometimes take more information as an argument

// Functions - preforms an action, tiny code machines
// encapsulation - code inside the function doesn't know anything about the rest of the code, the rest of the code doesn't know about the inner workings of the function
// parameter - placeholder for the argument
// argument - inputs, actual value
// code block - set of instructions, action taking place

// **Iteration - repeating an action a certain number of times or until a requirement is met

// What data types can you perform iteration on?
// - Array
// - String
// - Both strings and arrays have indexes and length
// - Objects (also have iterable properties)

// Arrays - predictable, great for storing and accessing data

// Higher-order functions - a subcategory of built in method that are called on arrays and used for iteration

// WAY MORE EFFICIENT THAN FOR LOOPS!

// .forEach()
// .map()
// .filter()

// .forEach

// [2, 3, 4, 5, 6].forEach(value => {
//   console.log(value * 3)
// })

// value is just a parameter
// [2, 3, 4, 5, 6].forEach(banana => {
//   console.log(banana * 3)
// })

// Passing two parameters needs to be wrapped in parens
// [2, 3, 4, 5, 6].forEach((value, index) => {
//   console.log("value:", value * 3)
//   console.log("index:", index)
// })

// value is the first parameter, index is the second
// [2, 3, 4, 5, 6].forEach((value, banana) => {
//   console.log("value:", value * 3)
//   console.log("index:", banana)
// })

// index cannot be accessed as the first parameter, this doesn't work
// [2, 3, 4, 5, 6].forEach((index) => {
//   console.log("index:", index)
// })

// If I only care about the index, I still have to pass value
// [2, 3, 4, 5, 6].forEach((v, index) => {
//   console.log("index:", index)
// })

// Third optional argument for higher order functions
// [2, 3, 4, 5, 6].forEach((value, index, array) => {
//   console.log("value:", value)
//   console.log("index:", index)
//   console.log("array:", array)
// })

// let myArray = [2, 3, 4, 5]
//
// myArray.forEach((value, index, array) => {
//   console.log("value:", value)
//   console.log("index:", index)
//   console.log("array:", array)
// })



// .map() - built in method, works on arrays, iterates, takes value, index, array as parameters, map returns an array




// let multThree = [3, 4, 5, 6].map(value => {
//   return value * 3
// })
// console.log(multThree)

// let myArray = [3, 4, 5, 6]
// console.log(myArray)
// let multThree = myArray.map(value => {
//   return value * 3
// })
// console.log(multThree)



// let myNumbers = [4, 5, 6, 7, -9]

// let evenOrOdd = myNumbers.map(value => {
//   if(value % 2 === 0){
//     "even"
//   } else if(value % 2 !== 0){
//     "odd"
//   } else {
//     "not a number"
//   }
// })
// console.log(evenOrOdd)
// --> [ undefined, undefined, undefined, undefined, undefined ]
// primitive data type - variable that has been declared but not given a value

// let evenOrOdd = myNumbers.map(value => {
//   if(value % 2 === 0){
//     return "even"
//   } else if(value % 2 !== 0){
//     return "odd"
//   } else {
//     return "not a number"
//   }
// })
// console.log(evenOrOdd)
// all functions need a return
// --> [ 'even', 'odd', 'even', 'odd', 'odd' ]

// This does the same thing as the variable above
// console.log(myNumbers.map(value => {
//   if(value % 2 === 0){
//     return "even"
//   } else if(value % 2 !== 0){
//     return "odd"
//   } else {
//     return "not a number"
//   }
// }))



// .filter() - higher-order function, iterates, acts on arrays, take parameters value, index, array in that exact order, returns an array, built in conditional, filter makes a decision about every item in the array

// filter is looking for a Boolean value, what is true will be included and what is false will be ignored

// let myNumbers = [4, 5, 6, 7, -9]
//
// let onlyOdds = myNumbers.filter(value => {
//   return value % 2 !== 0
// })
// console.log(onlyOdds)


// let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]

// let onlyNumbers = myArrayOfStuff.filter(value => {
//   return typeof value === "number"
// })
// console.log(onlyNumbers)
// --> [ 6, 4, 5, 1000, 5 ]

// let onlyNumbers = myArrayOfStuff.filter(value => {
//   return typeof value === "number" || typeof value === "string"
// })
// console.log(onlyNumbers)
// --> [ 6, 4, 5, 1000, 'hello', 'yo', 5 ]

// Create a function that takes in an array and returns an array of only numbers:
// const onlyNumbersFunction = (array) => {
//   return array.filter(value => {
//     return typeof value === "number"
//   })
// }

// Looking for numbers and strings
// const onlyNumbersFunction = (array) => {
//   return array.filter(value => {
//     return typeof value === "number" || typeof value === "string"
//   })
// }
// console.log(onlyNumbersFunction([4, 5, "hello"]))
// console.log(onlyNumbersFunction(["hello", null, true]))
// --> [ 6, 4, 5, 1000, 5 ]


// Create a function that takes in an array and returns a specific data type as determined by the dev
// const typeSelector = (array, type) => {
//   return array.filter(value => {
//     return typeof value === type
//   })
// }

// propmpt: create a function that takes in an array and returns the word 'odd' for every odd number
// create function called gettingOdds (done)
// parameter - array (done)
// filter out non-numbers (done)
// filter out even numbers (done)
// iterate over the remaining array and return the word "odd" instead of the number (done)

let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]
// ["odd", "odd"]

const gettingOdds = (array) => {
  let onlyOneType = array.filter(value => {
    return typeof value === "number" && value % 2 !== 0
  })
  // cool one liner
  return onlyOneType.map(value => "odd")
}
console.log(gettingOdds(myArrayOfStuff))
