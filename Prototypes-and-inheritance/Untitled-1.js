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
