// Functions Loops Arrays 12/06/21

// Function - is a piece of reusable code that should be dynamic and generic.

// Encapsulation - Predictable behavior, code only has access to the information that we want it to. 


// Inputs - parameter of array
// multiply each number by 5
// Output - what we want to happen: the numbers in an array multiplied by 5

const mult5 = (array) =>{
    return array * 5
}
console.log(mult5(numsArray));
// Not a Number
var numsArray = [2, 3, 4, 6, 8, 90];

const mult5 = (array) => {
    let numbersMultBy5 = []
    for (let i = 0; i < array.length; i++) {
        numbersMultBy5.push(numsArray[i] * 5);
    }
    return numbersMultBy5;
}
// console.log(mult5(numsArray));


var coffeeOrders = [
    "americano",
    "Carmel Machiato",
    "latte",
    "Hammerhead",
    "DCCMF",
    "Red eye"
]

const beverageOrder = (array) => {
    // a function that gives us back the coffee orders as strings
    // create a new array for manipulated values to be stored in
    // let orders = []
    // use a for loop to itterate throught he array log each order as a string
    // stretch: push each order into the orders array and return that piece of data
    for(let i = 0; i < array.length; i++){
        console.log(`I would like to order a ${array[i]}`);
    }
    return "all done"
}

const beverageOrder = (array) => {
  // a function that gives us back the coffee orders as strings
  // create a new array for manipulated values to be stored in
  let orders = [];
  // use a for loop to itterate throught he array log each order as a string
  // stretch: push each order into the orders array and return that piece of data
  for (let i = 0; i < array.length; i++) {
    // console.log(`I would like to order a ${array[i]}`);
    orders.push(`I would like to order a ${array[i]}`);
  }
  return orders;
};
console.log(beverageOrder(coffeeOrders));
// console.log(beverageOrder(numsArray));
// console.log(beverageOrder([true, null, undefined, 56, "black coffee"]));

var instructor = ["Austin", "Sarah"]; // does not randomize instructors
var late = []; // add previously late student(s) to be "randomly" chosen to go first, verify spelling is consistent

// student names in no particular order
var cohortStudents = [
  "John",
  "Gluay",
  "Antonio",
  "Kevin",
  "Demetrius",
  "Joshua",
  "Mikka",
  "Francisco",
  "Jason",
  "Samantha",
  "Noah",
  "Raul",
  "Salvador",
  "Yann",
  "Christopher",
  "Warren",
  "Hannah",
  "Deon",
  "Kirk",
  "Pavan",
  "Robert",
  "Regina",
];

// randomizes cohortStudents array
const randomizeArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    //each student as set by the current poistion - establishing a level of abstraction between them.
    let student = array[i];
    // random number holder
    let randomIndex = Math.floor(Math.random() * array.length);
    // reset the current poistion to a random student
    array[i] = array[randomIndex];
    // set that random student to the current student
    array[randomIndex] = student;
  }
  //give us back a the new shuffled array
  return array;
};

// takes names in late array and removes them from cohortStudents array
const lateStudent = (lateStudentArray) => {
  for (let i = 0; i < lateStudentArray.length; i++) {
    var index = cohortStudents.indexOf(lateStudentArray[i]);
    cohortStudents.splice(index, 1);
  }
  return lateStudentArray;
};

// concatnates but keeps late students first and instructors last
var checkIn = lateStudent(late).concat(
  randomizeArray(cohortStudents).concat(instructor)
);

// logs to console for easy copy and paste
for (let i = 0; i < checkIn.length; i++) {
  console.log(checkIn[i]);
}


var tvShows = [
  "Arcane",
  "Wheel of Time",
  "Seinfeld",
  "Hawkeye",
  "Dexter",
  "Curb your enthusiasm",
  "Vikings"
]

var showInfos = [
  "an advertisement for League of Legends",
  "A cool fantasy tv show",
  "A show about nothing",
  "People shooting bows and arrows when superheros exist",
  "Bad guy kills bad guys",
  "A better version of Seinfeld",
  "its about Vikings"
]

// Make a function that takes the arrays and shows us a string of the tv show and some info about it

// declare a function that takes in two params
// example input (tvShows[0], showInfos[0])
const popShows = (array1, array2) => {
  // declare an empty array
  let newArray = []
  for (let i = 0; i < array1.length; i++) {
    // for loop for itteration
    // What do we have? use console.log to determine what were are dealing with
    // console.log(array1[i] + array2[i]);
    // tools: push the two params 
    newArray.push(`${array1[i]} ${array2[i]}`);
  }
  // example output : "Arcane is an advertisement for League of Legends"
  // actual output : [
  //   'Arcane an advertisement for League of Legends',
  //   'Wheel of Time A cool fantasy tv show',
  //   'Seinfeld A show about nothing',
  //   'Hawkeye People shooting bows and arrows when superheros exist',
  //   'Dexter Bad guy kills bad guys',
  //   'Curb your enthusiasm A better version of Seinfeld',
  //   'Vikings its about Vikings'
  // ]
 return newArray
}

console.log(popShows(tvShows, showInfos));