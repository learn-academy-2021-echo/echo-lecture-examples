// LOOPS
// for loop: for is a keyword in javascript - reserved for the tool called "iteration"
// iteration: it the act of preforming a set of logical commands a number of times-- "going over something a number of times"
//index: a poistion within an array
// var: a global variable declarative
// let: a local variable declarative
// const: a local variable declaritive that can not be modified

//____________________________________________________________
// for(this is true){then do this}
// for loop has three arguments
//  for(starting point; this is true?; response) {then do this}
//     for(let index = 0; index < 10; index++){
//         console.log(`hey ${index} is less than ten`)
//     }
// //____________________________________________________________

//     for(let index = 10; index > 0; index--){
//         console.log(index);
//         console.log("hey there noah");
//     }

// //____________________________________________________________

// //                 i
// //                 0         1         2      3       4      5       6      7      8      9     10
// var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

//  for (let index = 0; index < arrayRhyme.length; index++) {
//     console.log(arrayRhyme[index]);
//   }

//   local scope test
//   console.log(index);

//____________________________________________________________

// var array = [3,4,5,6,7,8,9]
// // each value/ index is an instance of the array
// for (let index = 0; index < array.length; index++) {
//     //if statement
//     if (array[index] === 0) {
//       console.log("item equals zero");
//     }
//     // modulo 2
//     else if(array[index] % 2 === 0) {
//       console.log(array[index] + " is even");
//     } else {
//         console.log(array[index] + " is odd");
//     }
// }
//____________________________________________________________

// for (let i = 0; i < 1000000; i++) {
//   console.log(i);
// }
//____________________________________________________________
//   var newArray = [];
// const invisibleArray = () =>{
// for (let i = 0; i < 100000000; i ++) {
//   newArray.push(i)
// }
// return newArray
// }
// console.log(invisibleArray());

//____________________________________________________________

// let string = "Sheldon the booger"
              
let string = "echo is the beeeest"

for (let index = 0; index < string.length; index++) {
    console.log(string[index]);
}

//____________________________________________________________
// for (let i = 0; i < 100; i++) {
//  for (let j = 0; j < 16; j++) {
//      console.log("shots");
//  }
//  console.log("EVERYBODY");
// }