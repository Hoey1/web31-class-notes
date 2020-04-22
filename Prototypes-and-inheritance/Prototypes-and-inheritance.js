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
