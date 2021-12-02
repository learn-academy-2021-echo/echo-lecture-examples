var name2 = "Deon"
let otherName = "Pavan"
const otherName2 = "Kirk"

// console.log(name2)
// console.log(otherName);
// console.log(otherName2);

// strings are in quotes
var car = "Subaru";
var car2 = "XJ";
var car3 = "Porsche";
var car4 = "Tesla";

// Data containers
// ARRAY
    //square brackets --> []
    // values seperated by comma ,

var cars = ["Subaru", "XJ", "Porsche", "Tesla"];
var favNumbers = [77, 5, 21, 68, 12]
var booleans = [true, false, true, true, false]

// console.log(favNumbers)

// variable declaration  - variable name  - assignment opperator -  array
        var                 array               =                   []

        
// Arrays are data themselves, and they hold data

// Index - the poistions inside of an Array
// arrays are zero indexed 

//                           [i]
//                 0         1         2      3       4      5       6      7      8      9
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

// console.log(arrayRhyme[0]);
// console.log(arrayRhyme[1]);
// console.log(arrayRhyme[2]);
// console.log(arrayRhyme[3]);
// console.log(arrayRhyme[4]);
// console.log(arrayRhyme[5]);
// console.log(arrayRhyme[6]);
// console.log(arrayRhyme[7]);
// console.log(arrayRhyme[8]);
// console.log(arrayRhyme[9]);

// BUILT IN METHODS
// Arrays have two kinds of methods : Mutators & Accessors 
// Mutators - change the orignal array
// .push(value)
// adds a value or data to the end of the array

// var ourColors = ["aquamarine", "pink", "purple"]
// var samsColor = "green"
// console.log("starting array", ourColors);
// ourColors.push(samsColor)
// console.log("pushed array", ourColors);
// ourColors.push("orange");
// console.log("pushed again array", ourColors);

// // .pop()
// // Remove the last value or data in an array
// ourColors.pop()
// console.log("popped array", ourColors);

// // .shift()
// //removes the value at zeroth index of the array
// var students = ["Salvador", "Mikka", "Chris", "Robert"]
// console.log("starting array", students);
// students.shift()
// console.log("shifted array", students);

// // .unshift(value)
// // adds a value to the front of the array
// students.unshift("Jason")
// console.log("unshifted array", students);

// // .reverse()
// // Reverses the order of the array
// students.reverse()
// console.log("reversed array", students);

// console.log(console);

// .sort()
// takes an array and sorts it according to a sorting algorithim 
// students.sort()
// console.log("sorted students", students);
// let numbers = [15, 2, 10, 8, 10000]
// numbers.sort()
// console.log(numbers);
// numbers.sort((a,b)=> a- b)
// console.log(numbers);

// Accessors 

// .indexOf(value)
// //gives to us the index of the value or data in the array
// var pets = ["sheldon", "paddington", "elvis", "cooper", "bubba"]
// //              0           1           2         3        4

// console.log(pets.indexOf("bubba"));
// console.log(pets.indexOf("paddington"));
// console.log(pets.indexOf("zoey"));
// console.log(pets[-1]);
// console.log(pets.indexOf("milktea"));


// // .slice()
// // returns a SUBSET of the array
// console.log(pets.slice(2, 4));
// // [ 'elvis', 'cooper' ]
// console.log(pets.slice(2, 5));
// // ["elvis", "cooper", "bubba"];
// console.log(pets.slice(3));
// // ["cooper", "bubba"];

// Strings to Arrays and back again

// .split()
var sentence = "Mary had a little lamb"
// console.log("sentence starter", sentence);

// console.log("sentence split", sentence.split());
// console.log("sentence split", sentence.split(""));
// console.log("sentence split", sentence.split(" "));
// console.log("sentence split", sentence.split("a"));


// .join()
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

// var joinedRhyme = arrayRhyme.join()
// var joinedRhyme = arrayRhyme.join("");
var joinedRhyme = arrayRhyme.join(" ");
console.log(joinedRhyme);

// Array Destructuring
// var [] = []
var [darkness, knight] = ["bat", "man"]
var [superman, flash] = ["kal el", "Barry Allen"]
var [arr1, arr2] = [["mikka","says"], ["hi"]];
console.log(darkness);
console.log(knight);
console.log(superman);