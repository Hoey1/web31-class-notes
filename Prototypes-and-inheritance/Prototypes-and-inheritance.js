// window binding - if none of the other rules apply "this" defaults to the window - unless you are in strict mode in which case it will return undefined
// 'use strict';
// function ghost(){
//   console.log(this.boo);
// }

// const boo = '👻 booooo!';

// ghost();

// Implicit binding
// most common rule - found in 80% of use cases
// when the function is invoked - we look to the left of the dot - that what 'this' refers to
// only applies to object with methods

// const myGhost = {
//   name: 'Casper',
//   boo: 'boooo 👻',
//   ghost: function(){
//     console.log(this.boo);
//   }
// }

// myGhost.ghost(); // invoking the function - look to the left of the dot - that's what 'this' refers to

const petOne = {
  name: "Ada",
  species: "Bali dog",
  pronoun: "her",
  favFood: "Salmon",
  eat: function () {
    console.log(
      `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
    );
  },
};

const petTwo = {
  name: "Sydney",
  species: "cat",
  pronoun: "her",
  favFood: "tuna",
  eat: function () {
    console.log(
      `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
    );
  },
};

const petThree = {
  name: "Kiwi",
  species: "parrot",
  pronoun: "his",
  favFood: "corn",
  eat: function () {
    console.log(
      `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
    );
  },
};

const petFour = {
  name: "Matias",
  species: "tarantula",
  pronoun: "his",
  favFood: "ramen",
  eat: function () {
    console.log(
      `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
    );
  },
};

const petFive = {
  name: "Suzi",
  species: "dog",
  pronoun: "her",
  favFood: "steak",
  eat: function () {
    console.log(
      `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
    );
  },
};

petOne.eat();
petTwo.eat();
petThree.eat();
petFour.eat();
petFive.eat();

//todo - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - -

const person = {
  name: "Brit",
  age: 31,
  location: "Niagara Falls",
  greet: function () {
    console.log(
      `Hi, I am ${this.name}, I am from ${this.location} and I am ${this.age} years old`
    );
  },
};

person.greet(); //! When the function is invoked - look to the left of the dot, that's what <this> refers to

//todo - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - -

//* Explicit Binding
//* call - will immediately invoke the function / .call you pass in your arguments 1 by 1
//* apply - will immediately invoke the function / .apply you pass in arguments as an array
//* bind - you pass in the aruguemnt 1 by 1 - but it does not immediately invoke the function. It returns a brand new function that can be invoked later
//* all of the above explicitly state what the 'this' keyword should refer to

//? - - - CALL

function ghost() {
  console.log(this.boo);
}

const myGhost = {
  name: "Casper",
  boo: "boo 👻",
};

const otherGhost = {
  name: "Fatso",
  boo: "😡 booo!",
};

ghost.call(myGhost); //! invoking the function - we passed in the argument of what <this> refers to
ghost.call(otherGhost);

//// -----------------------------------------------
//// -----------------------------------------------

function ghost() {
  console.log(this.boo);
}

const myGhost = {
  name: "Casper",
  boo: "boo 👻",
};

const otherGhost = {
  name: "Fatso",
  boo: "😡 booo!",
};

const friendlyGhost = ghost.bind(myGhost); //? creating a new function called friendlyGhost
const angryGhost = ghost.bind(otherGhost); //? creating a new function called angryGhost

friendlyGhost(); //? Invoking the function
angryGhost(); //? Invoking the function

//todo - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - -

//*   Instructions:
//*   Create a function and use the call keyword to make the animal say a sound
//*   Create an animal object give the animal a name a species and a sound

function animal() {
  console.log(this.sound);
}

const myAnimal = {
  name: "Cow",
  sound: "Moo 🐮",
};

const otherAnimal = {
  name: "Otter",
  boo: "Squeek 🦦",
};

animal.call(myAnimal); //! RETURN 'Moo 🐮'

//*
//* Brit's Example
//*

function callOfTheWild() {
  console.log(`${this.name} says ${this.sound}`);
}

const animal = {
  name: "Betsy",
  species: "cow",
  sound: "moooo",
};

callOfTheWild.call(animal); //! 'Betsy says moooo'

//*
//* My updated Breakout based on Brit's example
//*

function animal() {
  console.log(`${this.name} says ${this.sound}`);
}

const myAnimal = {
  name: "Cow",
  sound: "Moo 🐮",
};

const otherAnimal = {
  name: "Otter",
  boo: "Squeek 🦦",
};

animal.call(myAnimal); //! Cow says Moo 🐮

//todo - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - -

//? - - - -  New Binding - - - - -
//*     using the 'new' keyword constructs a new object and 'this' points to it.
//*     when a function is invoked as a constructor function using the 'new' keyword
//*     'this' points to the new object thats created

function Ghost(saying) {
  //? proper syntax: capitalize 1st letter of constructor function
  this.phrase = saying;
}

const myGhost = new Ghost("Casper the friendly 👻"); //? here we are creating a new object called <myGhost> and its a new Ghost.

console.log(myGhost);

console.log(myGhost.phase);

//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -

// Create a function of called food and pass in a parameter of favourite set this food to your parameter
// Create a new object using the new keyword called myFavouriteFood and pass in the parameter of your favourite cuisine
// Console log my favourite food is: and the result

// function Food(fav) {
//   this.food = fav;
// }

// myFavFood1 = new Food1('Yummy Donalds');

// console.log(`My favorite food is ${myFavFood.food}');

//// -----------------------------------------------
//// --------------My Example Did Not Work Above----

//* Brits Example

function Food(favourite) {
  this.food = favourite;
}

myFavFood = new Food("Yummy Donalds");

console.log(`My favorite food is ${myFavFood.food}`);

//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -

//// -----------------------------------------------
//// -----------------------------------------------

//? - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//? - - - - - -    Prototypes + Constructor Functions!   - - - - - - - - - -
//? - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//* Constructor function constructs other objects - thats its whole purpose in life!
//* Capitalized function name - you will want to use a capital with the new keyword
//* missing a return statement (not always)

function Pet(attributes) {
  this.name = attributes.name;
  this.species = attributes.species;
  this.pronoun = attributes.pronoun;
  this.favFood = attributes.favFood;
  this.sound = attributes.sound;
}

Pet.prototype.eat = function () {
  console.log(
    `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`
  );
};
Pet.prototype.speak = function () {
  console.log(`${this.name} says ${this.sound}`);
};

const petOne = new Pet({
  name: "Ada",
  species: "Bali dog",
  pronoun: "her",
  favFood: "Salmon",
  sound: "woof woof",
});

const petTwo = new Pet({
  name: "Sydney",
  species: "cat",
  pronoun: "her",
  favFood: "tuna",
  sound: "meow",
});

const petThree = new Pet({
  name: "Kiwi",
  species: "parrot",
  pronoun: "his",
  favFood: "corn",
  sound: "skwak",
});

const petFour = new Pet({
  name: "Matias",
  species: "tarantula",
  pronoun: "his",
  favFood: "ramen",
  sound: "hisss",
});

const petFive = new Pet({
  name: "Suzi",
  species: "dog",
  pronoun: "her",
  favFood: "steak",
  sound: "bark bark",
});

petOne.eat(); //! Ada is a Bali dog and her favourite food is Salmon
petTwo.eat(); //! Sydney is a cat and her favourite food is tuna
petThree.eat(); //! Kiwi is a parrot and his favourite food is corn
petFour.eat(); //! Matias is a tarantula and his favourite food is ramen
petFive.eat(); //! Suzi is a dog and her favourite food is steak

petOne.speak();
petTwo.speak();
petThree.speak();
petFour.speak();
petFive.speak();

//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -
//todo - - - - BREAKOUT - - - - - - - - - BREAKOUT - - - - -

//* look at last atribute added above

//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -
//todo - - - - STOP BREAKOUT - - - - - - - - - STOP BREAKOUT - - - - -

//// -----------------------------------------------
//// -----------------------------------------------

//? - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//? - - - - - -    Evening Project Review || Task 1     - - - - - - - - - -
//? - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// create a constructor function for Person
// it takes 3 properties: name, age, stomach- which is an empty array

function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = [];
}

//* create an eat function that gives the person the ability to eat some food - it has  //* a parameter of something that we can pass food into as an arg
//* if the stomach length is < 10 the person can eat
//* we want to push arg to the new array
//* - - - - - - - - - - - - - - - - - - - - - -

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
//* create a poop method - the poop method empties the stomach
//* - - - - - - - - - - - - - - - - - - - - - -
Person.prototype.poop = function () {
  this.stomach = [];
};

//* method called toString - needs to return a string with name and age
//* - - - - - - - - - - - - - - - - - - - - - -
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

personOne = new Person({
  name: "Joey",
  age: 39,
});

// not hoisted

console.log(personOne.toString());
personOne.eat("ramen");
personOne.eat("pizza");
personOne.eat("tacos");
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);
