// Scope, Hoisting & Closures

//? What is Scope
//? Answers the quetion of where are my variables and function available to me?
//? var - is attached to the window object - LET and CONST are not

//////////////////////////
//////////////////////////
//////////////////////////
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//?                 DEFINITIONS and/or KEY TERMS
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//////////////////////////
//////////////////////////

//! var
//! - can be redefined
//! - can be redeclared
//! - function scoped

//* let
//* - cannot be redeclared
//* - can be redefined
//* - block scoped

//? const
//? - cannot be redefined
//? - cannot be redeclared
//? - block scoped

//* Global Variables
//* - Available to me anywhere in my program

//////////////////////////
//////////////////////////

const cohort = "web31";
console.log(cohort);

//////////////////////////
//////////////////////////

//* Function Scope
const track = "web";
function lambda() {
  var cohort = "web31";

  console.log(track);
}

console.log(cohort);

if (1 === 1) {
  //curly brackets traps let and const inside the code
  const answer = true;
}

console.log(answer);

//! using var below in the same code as above, will show up propertly in the console.

if (1 === 1) {
  var answer = true;
}

console.log(answer);

//////////////////////////
//////////////////////////
//////////////////////////

const otherTrack = "web";

function lambda() {
  const cohort = "web31";
  const track = "ux";
  console.log(cohort);
  console.log(track);
  console.log(otherTrack);
}

lambda(); // result: 'web31' 'ux'
//! 'track' on line 76 isn't showing beause we called it inside the function. line 76 is global
//! Best practice is to make sure you don't name variables the same (shadow variables)

//////////////////////////
//////////////////////////
//////////////////////////

//? Here we used 'var' and thats global
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

//? Here we used let, and this will not allow console.log on line 105 to work because its inside the brackets and is locked in there.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

//////////////////////////
//////////////////////////
//////////////////////////

const dog = "Ada";

function callDog(dog) {
  //const dog = '' // This will be set to whatever argument you pass
  console.log(dog);
}

function puppy() {
  const dog = "Noa";
  callDog("Fido");
}
puppy();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

sayHi("Brit");

yell(); //! This is not available globally. It's only available inside the function

//? Scope Look Up - variables that are not found inside of a function will up a level higher and look in the next scope

//////////////////////////
//////////////////////////
//////////////////////////

//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//?                             HOISTING
//*         Hoisting in JS allows us to access functions & variables
//*                     before they have been created
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------
//todo ------------------------------------------------------------

//* two things are hoisted - function declaratios and variable declaration

working();

function working() {
  console.log("it works!");
}
//* RESULT: 'it works!'

//////////////////////////
//////////////////////////

function working() {
  console.log("it works!");
  console.log(add(2, 4));
}

function add(num1, num2) {
  return num1 + num2;
}
//* RESULT: 'it works!' 6

//////////////////////////
//////////////////////////

// variables
console.log(myName);
var myName = "Brit";
//* RESULT: undefined

//? But if you take the console.log and move it after var myName

var myName = "Brit";
console.log(myName);
//* RESULT: 'Brit'

//? JavaScript has a 2 pass compiler:
//?    Pass #1 - It sets up a reference.
//?    Pass #2 - It assigns values.

//? if the console returns 'undefined' in this case, it means the variable has been used somewhere before in the code.

//? if we used a variable that has not been used yet and just console.log'd it -- it will kickback an error - - for example:

console.log(unicorn);
//* RESULT: unicorn is not undefined

//////////////////////////
//////////////////////////
//////////////////////////

//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------
//?                             CLOSURES
//*        Gives us the ability to put functions together
//*     its the ability to access functions from a parent level scope
//*     in child level scope even after the parent function has been terminated
//*     Code thats been identified elsewhere that can be used later
//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------

function country(countryName) {
  const lang1 = "French";
  const lang2 = "English";
  console.log(countryName);
  console.log(`The national food of ${countryName} is ${food}`);

  function province(provName) {
    //console.log(provName);
    console.log(
      `${provName} is the most populated province in ${countryName} the national languages are ${lang1} and ${lang2}`
    );

    function city(cityName) {
      console.log(cityName);
      const food = "Blue Crabs";
    } // this closes city
    city("DC");
  } // this closes province
  province("Washington");
} // this closes country
country("USA");

//! Functions cannot pass up <child to parent> => line 228 'food' is NOT ACCESSIBLE to line 220 (countryName)

//* PRIVATE VARIABLES

function game(sport) {
  let score = 0;
  return function win() {
    score++;
    return `your ${sport} game score is ${score}`;
  };
}

//* I can come here and make a game
const hockeyGame = game("baseball");

console.log(baseballGame()); //* RESULT: 'Your baseball game score is 1'

//////////////////////////

console.log(baseballGame()); //* RESULT: 'Your baseball game score is 2'
console.log(baseballGame()); //* RESULT: 'Your baseball game score is 3'

//////////////////////////

const basketballGame = game("basketball");

console.log(basketballGame()); //* RESULT 'Your basketball game score is 1'
//////////////////////////
console.log(score); //* RESULT: <error> - I missed what her word for word explanation

//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------
//*                     DEFINITIONS and/or KEY TERMS
//?                               for
//?                             CLOSURE
//todo ------------------------------------------------------------------------
//todo ------------------------------------------------------------------------
//////////////////////////

//* Closures are the ability for a child function or an inner function to access varabile from a higher level scope even after the variables have been called or closed or terminated.

//* Lexical Scope === Belonging

//////////////////////////
//////////////////////////
//////////////////////////
