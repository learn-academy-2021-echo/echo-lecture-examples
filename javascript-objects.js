// JavaScript Objects 12/9/2021

// Primitive Data Types
// - strings
// - number
// - Boolean
// - undefined
// - null
// - symbol

// Non-primitive Data Types
// - Array
// - Objects


// Objects - JavaScript data type, key value pairs

// CSS syntax:
// .main-page {
//   font-size: 20px;
// }


// {key1: value, key2: value, key3: value}
// key - data type of symbol, unique identifiers used in objects
// value - any data type

// let myObject = {aString: "hello Echo!", aNumber: 42, aBoolean: true}

// Objects are often dropped down for readability
let myObject = {
  aString: "hello Echo!",
  aNumber: 42,
  aBoolean: true
}
// console.log(myObject)

// console.log(myObject.aString)
// console.log(myObject.aBoolean)


let breakfastItems = {
  item1: "granola",
  item2: "bread",
  item3: "eggs",
  item4: "oatmeal",
  item5: {
    bev1: "coffee",
    bev2: {
      flavor1: "orange",
      flavor2: "grapefruit",
      flavor3: "champagne"
    },
    bev3: "OJ",
    bev4: "Chocolate milk"
  }
}
// console.log(breakfastItems)
// console.log(breakfastItems.bev2)
// --> undefined
// console.log(breakfastItems.item5.bev2.flavor3)

// Destructuing - create a special variable that holds the path to a nested object

// console.log(breakfastItems.item5.bev2.flavor1)
// console.log(breakfastItems.item5.bev2.flavor2)
// console.log(breakfastItems.item5.bev2.flavor3)

let {flavor1, flavor2, flavor3} = breakfastItems.item5.bev2

// console.log(flavor1)
// console.log(flavor2)
// console.log(flavor3)
// console.log(breakfastItems.item5.bev3)



// Methods

// Difference between a function and a method?
// In common - returning something, manipulating data, action ()
// Difference - method is a property of an object

// Objects - intersection of data and behavior


var numberObject = {
  num1: 3,
  num2: 5,
  num3: 10,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
console.log(numberObject)
console.log(numberObject.num1)
console.log(numberObject.addUp())
