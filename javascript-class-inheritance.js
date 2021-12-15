// Class Inheritance 12/13/21

// Parent Class : A class that calls a constructor and lays the base level of data and methods.

// Child Class : is a class that inheirts all of its parents attributes and methods as well as builds its own unique attributes and methods

//                  Coffee
//                 /      \
//        Drip Coffee =x= Espresso
//                            \
//                          Latte


class Coffee {
    constructor(coffeeOrigin){
        this.origin = coffeeOrigin
    }
    info(){
        return `This coffee is from ${this.origin}`
    }
}
// let colombian = new Coffee("Colombia")
// let arabic = new Coffee("Arabic")
// let turkish = new Coffee("Turkey")
// console.log(colombian);
// console.log(arabic);
// console.log(turkish);



// ___________________________________________

// extends is a javascript key word that defines the rewlationship between the two classess. The CHILD always extends the PARENT
class DripCoffee extends Coffee {
  constructor(coffeeOrigin, coffeeYear) {
      super(coffeeOrigin);
      // super  -- Passes the data from the child class up to the constructor of the parent class
      this.isFresh = true
      this.year = coffeeYear;
  }
  wait(){
      this.isFresh = false
  }
  drink(){
      return this.isFresh?
        `A fresh pot of ${this.origin} coffee`:
        `An old warm pot of ${this.origin} coffee`
  }
}

let foldgers = new DripCoffee("America", 2020)
console.log(foldgers);


// console.log(foldgers.drink());
// foldgers.wait()
// console.log(foldgers.drink());
// console.log(foldgers.info());


// ____________________________________________

// class Espresso extends Coffee{
//     constructor(x, y){
//         super(x);
//         this.shots = y
//     }
// }


class Espresso extends Coffee {
  constructor(coffeeOrigin, numberOfShots) {
    super(coffeeOrigin);
    this.shots = numberOfShots;
  }
  esspressoInfo(){
      if (this.shots === 1) {
          return `Your single shot ${this.origin} espresso is ready!`
      }
      else if( this.shots >=2 ){
          return `Your ${this.shots} shots of ${this.origin} espresso is ready!`
      }
      else {
          return "Sorry I didn't catch that, did you want one or more shots?"
      }
  }
}

let dopio = new Espresso("colombia", 2)
// let liquidDeath = new Espresso("North Africa", 5)

console.log(dopio);
// console.log(dopio.esspressoInfo());
// console.log(liquidDeath.esspressoInfo());


// ____________________________________________

class Latte extends Espresso{
    constructor(coffeeOrigin, numberOfShots, milkType){
        super(coffeeOrigin, numberOfShots)
         this.milk = milkType;
         this.isFoamy = false
    }
    steamTheMilk(){
        this.isFoamy = true
        return "the steamer makes this noise -- pssssstphssststs"
    }
    makeLatteArt(){
        return this.isFoamy ? "You make beautiful Latte Art" : "Please steam the milk" 
    }
}

let birdRock = new Latte("Venezeula", 3, "Oat milk")
console.log(birdRock);
console.log(birdRock.makeLatteArt());
console.log(birdRock.steamTheMilk());
console.log(birdRock.makeLatteArt());

// console.log(birdRock.esspressoInfo());
// console.log(birdRock.info());
