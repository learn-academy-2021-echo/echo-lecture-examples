//Javascript Functions 12/06/21

// Functions - reusable, functions produce an output (keyword "return")
// Function - should neutral / generic : we don't want our functions to be "hard coded"
// Functions - dynamic : can respond appropriately to inputs

// Anatomy of a function 
    // es5 function nameOfFunction(parameter){}
    // es6  ()=>{} (fat arrow syntax/ arrow syntax)
    // when working react we'll always use es6 syntax

    // 1.) variable declaration --> const
    // 2.) name, camelCase, descriptive --> myMultiplicationFunction
    // 3.) assignemnt opperator =
        //   const myMultiplicationFunction = 

    // 4.) (), parenethese or parens- () can hold paratmeters
    // 5.) fat arrow, arrow syntax
    // 6.) code block/ curly braces - will hold all of the loigcal code
        // const myMultiplicationFunction = () => {
    // 7.) return keyword, indiciating the output : stops the function
        //     return
        // };

    // 8.) call the function - name and parens
            //  myMultiplicationFunction()
    // console.log(myMultiplicationFunction());


// static function (doesn't do cool dynamic stuff)
    // const makeDonut = () => {
    //     return "Donut is made";
    // }

    // console.log(makeDonut());
// invoking the function / calling the function
// without a return key word the result is undefined (pro tip: if you get undefined check the return)

// Parameter - a function input // a local variable

//                 parameter
//                     v
// const makeDonut = (doughType) => {
//   //           parameter
//   //              v
//   return `A ${doughType} donut is made`;
// }

// //                     argument
// //                        v
// console.log(makeDonut("glazed"));
// console.log(makeDonut("jelly"));
// console.log(makeDonut("Boston creme"));
// console.log(makeDonut("Sugar"));
// console.log(makeDonut("Mapel"));

// PB&J lessons
    // You have to be deliberate
    // Computers don't assume
    // treat the machine like a child
    // communicate w/ comp in lay person terms
    // computers don't fill in the blanks
    // syntax matters


// Donut Shop function 
    // Psuedo code:
    // input - what do we want our machine to take in?
        // donutType, quantity 
    // output - what do we want our machine to give us?
        // price, order size, order
    // 1 glazed donut => "1 glazed donut will cost you $1"
    // 10 sprinkel donuts => "10 sprinkle donuts will cost you $10"
    // conditional statment

const donutShop = (donutType, quantity) => {
  // if(this is true){then do this}
  // when quantity is one make a simple return
  if (quantity === 1) {
    return `1 ${donutType} donut will cost you $1`;
  } else if (quantity === 12) {
    return `A dozen ${doughType} donuts will cost you $10 `;
  }
  //   upt to 11 donuts the price is $1 per donut
  else if (quantity < 12) {
    // not hard coding `10 jelly donuts will cost you $10`;
    return `${quantity} ${donutType} donuts will cost you $${quantity}`;
  } else {
    return " hey thats a lot of donuts or something went wrong!";
  }
}
var boston = "Boston Creme"

console.log(donutShop("glazed", 1));
console.log(donutShop("jelly", 10));
console.log(donutShop(boston, 12));
// console.log(donutShop("Sugar"));
// console.log(donutShop("Mapel"));


// 8 pieces of a function

// const camelCaseName = (paramter) => {
    // return parameter
// }

//  call the function  camelCaseName(argument)