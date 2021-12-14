// JavaScript Classes 12/10/2021

// Classes are blueprints for objects

// Dynamic / hard coded

// hard coded:
// 2 + 2

// dynamic:
// num1 + num2

// Function - as a blueprint for logic


// Object - hard code the values

// Classes - dynamic

// class declaration
// name - PascalCase
// static data - data types in JS, behavior - methods
// method - actionable thing that performs logic
// difference between a method and a function - method is function that belongs to a class/object

// class DoingMath {
//   constructor(){
//     this.num1 = 3,
//     this.num2 = 5,
//     this.num3 = 10
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
// }

// new - keyword in JS, create an object from a class
// let math1 = new DoingMath
// console.log(math1)
// --> { num1: 3, num2: 5, num3: 10 }
// console.log(math1.num1)
// console.log(math1.addUp())
// This doesn't work: console.log(DoingMath.num1)
// --> 18

// creating an instance of a class (object)
// let math2 = new DoingMath
// let math3 = new DoingMath
// let math4 = new DoingMath
// console.log(math2)
// console.log(math3)
// console.log(math4)




// class DoingMath {
//   constructor(num1, num2, num3){
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
// }
// let math1 = new DoingMath
// console.log(math1)
// --> { num1: undefined, num2: undefined, num3: undefined }

// let math1 = new DoingMath(4, 5, 6)
// console.log(math1)
// console.log(math1.addUp())
// --> DoingMath { num1: 4, num2: 5, num3: 6 }

// let math2 = new DoingMath(6, 7, 8)
// --> { num1: 6, num2: 7, num3: 8 }
// console.log(math2)
// console.log(math2.addUp())



// class DoingMath {
//   constructor(num1, banana){
//     this.num1 = num1,
//     this.num2 = banana,
//     this.num3 = 5
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
// }
// let math1 = new DoingMath
// --> { num1: undefined, num2: undefined, num3: undefined }

// let math1 = new DoingMath(4, 5)
// --> { num1: 4, num2: 5, num3: 5 }
// console.log(math1)

// let math2 = new DoingMath(6, 7)
// --> { num1: 6, num2: 7, num3: 5 }
// console.log(math2)

class DoingMath {
  constructor(num1, banana){
    this.num1 = num1,
    this.num2 = banana,
    this.num3 = 5
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
  largestNumber(){
    return Math.max(this.num1, this.num2, this.num3)
  }
}

let myMathVariable = new DoingMath(13, 15)
console.log(myMathVariable.largestNumber())
