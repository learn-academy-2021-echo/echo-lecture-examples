// JavaScript Intro 12/1/2021

// JavaScript is a dynamic, interpreted, scripting language

// Dynamic - variable can reassigned to different data types (the other category is statically typed languages)

// Interpreted - read line by line by an interperter that translates it to machine code (the other category of languages are compiled - Java, C)

// Scripting - logic and data manipulation (the other category is markup language - HTML)

// Commented out code - will not read, it will be ignored by the program, keyboard shortcut: command + /

// Run the file: $ node javascript-intro.js


// Data Types

// 6 primitive data types
// - Number
// - String
// - Boolean
// - Null
// - Symbol
// - Undefined

// Number

// Integer - whole number
42
// Float - non-whole number
3.14

5 * 4
15 / 3

// Have to have console.log() to see the output in terminal

// console.log(5 * 4)
// --> 20

// Exponents
// console.log(4 ** 3)
// --> 64

// Modulo - returns the remainder of a division problem
// console.log(4 % 3)
// --> 1
// console.log(4 % 2)
// --> 0
// console.log(10 % 4)
// --> 2

// String

// Properties of strings - length, location of each character is called the index

// String are zero-indexed

"hello"

"8"

// Boolean

false
true

// console.log(true)
// console.log(false)


// Relational operators
// console.log(6 < 3)
// --> false
// console.log(6 > 3)
// --> true
// console.log(5 <= 5)
// --> true
// console.log(4 >= 7)
// --> false

// Equality operators - do the two things evaluate to be the same
// === - strict equality, they have to be the same thing exactly
// == - loose equality, don't use this

// console.log(6 === 6)
// console.log(6 === 5)

// truthy or falsey

// Loose equality operator
// console.log(6 == 6)
// --> true
// 1 has truthy value
// console.log(true == 1)
// --> true
// empty string has a falsey value
// console.log("" == false)
// --> true
// string with content has a truthy value
// console.log("hello" == false)
// --> false
// console.log("9" == 9)
// --> true
// console.log("9" === 9)
// --> true


// Logical operators - comparision of mulitple clauses
// && - logical AND
// || - (pipes) logical OR

// console.log(6 === 6 && 7 > 8)
// --> false
// console.log(6 === 6 || 7 > 8)
// --> true
// console.log(6 === 6 && 5 > 3 && 4 >= 4 && 5 === 5)
// --> true
// console.log(6 === 6 && 5 > 9 && 4 >= 4 && 5 === 5)
// --> false
// console.log(6 === 9 || 5 > 9 || 4 >= 4 || 5 === 9)
            // false      false    true      false
            // At least one is true - the whole statement is true

// Negation - bang operator !, returns the logical opposite
// console.log(!true)
// --> false

// Null - equal to nothing

// console.log(null)
// --> null

// Symbols - unique keys


// Undefined - variable that has been declared but not yet assigned


// Variable

// creating a variable

// 1) declare

// var - global scope, available to the entire program
// let - local scope, inside a particular action
// const - variables that should not be reassigned

// 2) name
// naming things is hard, names communicate intent, casing convention - camelCase - iAmWritingInCamelCaseToYou


// var helloEchoClass
// console.log(helloEchoClass)
// --> undefined

// console.log(heyThereEveryoneThisIsCamelCase)
// --> ReferenceError: heyThereEveryoneThisIsCamelCase is not defined

// 3) assign it value with a single =

// 4) assign value part 2, provide it a data type

var helloEchoClass = "hello! It is the Echo class!"
// console.log(1, helloEchoClass)

helloEchoClass = "hey there."
// console.log(2, helloEchoClass)

helloEchoClass = 42
// console.log(3, helloEchoClass)

// Can log as many things as you want
// console.log(4, 5, 6, "hey", true)

// console.log(helloEchoClass + 56)
// console.log(helloEchoClass > 56)

// const myName = "Sarah"
// console.log(myName)
// myName = "Joe"
// console.log(myName)
// --> TypeError: Assignment to constant variable.



// String Methods and Properties

var cohort = "Echo"
// console.log(cohort)

// console.log(cohort.length)
// --> 4
// console.log(cohort.length > 8)
// --> false

// Index - the placement of each item in a string
// console.log(cohort[0])
// --> "E" is at the index of 0

// console.log(cohort[1])

// var myNum = 2
// console.log(myNum)

// console.log(cohort[myNum])
// "Echo"[2]

// console.log(cohort[9])
// --> undefined

// console.log(cohort[cohort.length])

// the last index of any string is the length - 1



var myCohort = "Echo Class"
// console.log(myCohort.length)
// --> 10

// Built in methods - actions that have been added to the JS language over time

// All built in method are designed for a particular data type
// Parentheses are a call to action

// console.log(myCohort.toUpperCase())
// --> ECHO CLASS

// console.log(myCohort.indexOf("C"))
// --> 5

// console.log(myCohort.indexOf("o"))
// --> 3

// console.log(myCohort.indexOf("s"))
// console.log("Echo Class".indexOf("s"))
// --> same result as above

// console.log(myCohort.includes("Cl"))
// --> true
// console.log(myCohort.includes("CL"))
// --> false

// console.log(myCohort.includes("Cl") === true)
// --> true

// console.log(myCohort.includes("Cl") && myCohort.includes("E"))
// --> true

// Cutting a section the string and returning that section
console.log(myCohort.slice(8))
// --> "ss"
console.log(myCohort.slice(0, 4))
// --> "Echo"
