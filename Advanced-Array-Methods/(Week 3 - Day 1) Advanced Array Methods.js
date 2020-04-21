///////////////////////////////////////////////////////////////////
///////////////////                                  //////////////
///////////////////       Higher Order Functions     //////////////
///////////////////                                  //////////////
///////////////////////////////////////////////////////////////////

// Higher Order Functions + Callbacks
// higher order functions can receive other functions as parameters
// callback function are the functions that are passed into other functions as arguements
// callback functions are passed in // HOF receive

function hOf(num1, num2, cb) {
  return cb(num1, num2);
  // add(2,3);
  // subtract(5,4);
  // multiply(9,8);
  //divide(4,2)
}

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};
// console.log(add(2,3));

console.log(hOf(2, 3, add));
console.log(hOf(5, 4, subtract));
console.log(hOf(9, 8, multiply));
console.log(hOf(4, 2, divide));

// Advanced Array methods!

const cityData = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 },
];

///////////////////////////////////////////////////////////////////
////////////////////////                   ////////////////////////
////////////////////////     .forEach())   ////////////////////////
////////////////////////                   ////////////////////////
///////////////////////////////////////////////////////////////////

// .forEach()
// must interate through every item in the array wihtout stopping
// (could be a power/memory killer)
// .forEach does NOT return a new array !!!!!!!!!!!!!
// return is optional
// A higher order function

// Syntax
//arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

// .forEach() is the higher order function
// the anon function is the callback

cityData.forEach(function (item) {
  console.log(item.city);
  //   console.log(index);
  console.log(item.state);
});

//
//
//
//
//
//
//
//

///////////////////////////////////////////////////////////////////
////////////////////////                   ////////////////////////
////////////////////////      .map()       ////////////////////////
////////////////////////                   ////////////////////////
///////////////////////////////////////////////////////////////////

// Source Array for easy viewing
const cityData = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 },
];

// returns a new array
// does not manipulate the original array
// converting data
// ***** NEEDS THE RETURN KEYWORD ******

// SYNTAX //////////////////////////////////////////

// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//   return element for new_array
// }[, thisArg])
///////////////////////////////////////////////////

const newCityData = cityData.map(function (item) {
  return item.state.toLowerCase();
});

console.log(newCityData);

//
//
//
//
//
//
//
//

///////////////////////////////////////////////////////////////////
////////////////////////                   ////////////////////////
////////////////////////      .filter()    ////////////////////////
////////////////////////                   ////////////////////////
///////////////////////////////////////////////////////////////////

// returns a new array
// does not manipulate the original array
// it filters out results into a new array
// (it is looking for something that can be true or false)

// SYNTAX //
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

// callback
// Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise.

// It accepts three arguments:

// element
// The current element being processed in the array.
///////////////////////////////////////////////////////////////

const cityData = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 },
];

const newCityFilter = cityData.filter(function (item) {
  // true or false
  // true is INCLUDED
  // false is EXCLUDED
  return item.population > 500000; // returns everything except kansas city
  // return item.state === 'NY'; // returns new york, ny
});

console.log(newCityFilter);

// State Name Matches New York

const newCityFilter = cityData.filter(function (item) {
  // true or false
  // true is INCLUDED
  // false is EXCLUDED
  return item.state === "NY";
});

console.log(newCityFilter);

//
//
//
//
//
//
//
//

///////////////////////////////////////////////////////////////////
////////////////////////                   ////////////////////////
////////////////////////      .reduce()    ////////////////////////
////////////////////////                   ////////////////////////
///////////////////////////////////////////////////////////////////

// The .reduce() function takes four arguments:

// 1 - Accumulator (acc)
// 2 - Current Value (cur)
// 3 - Current Index (idx)
// 4 - Source Array (src)

// Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

// returns a value NOT an array
// doesn't manipulate the original array
// usually used for sums and products

// use .reduce() to get a total land area from cityData array

const cityData = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 },
];

const totalLandArea = cityData.reduce(function (accumulator, item) {
  console.log(`I am the accumulator ${accumulator}`);
  console.log(`I am the current value ${item.land_area}`);
  return accumulator + item.land_area;
}, 0);

console.log(`I am the total land area ${totalLandArea}`);

//////////////////////////////////////////////
////////////// It Returns ////////////////////
//////////////////////////////////////////////

// I am the accumulator 0
// I am the current value 83.9
// I am the accumulator 83.9
// I am the current value 302.6
// I am the accumulator 386.5
// I am the current value 48.3
// I am the accumulator 434.8
// I am the current value 315
// I am the total land area 749.8

console.log(cityData);

// Why 'item' as currentValue when using .reduce()?

// 'item' IS ALWAYS THE 'currentValue' - it could be anything but for uniformity and understanding its best that we keep rolling this WebAssembly.

///////////////////////////////////////////////////////////////////
////////////////////////                      /////////////////////
////////////////////////   BREAKOUT SESSION   /////////////////////
////////////////////////      - Review -      /////////////////////
////////////////////////                      /////////////////////
///////////////////////////////////////////////////////////////////

// Using forEach() - take the state initials and return them in a new array in lowercase

const cityData = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 },
];

const lowerCase = [];

cityData.forEach(function (item) {
  return lowerCase.push(item.state.toLocaleLowerCase());
});

console.log(lowerCase);

/////////////// Extra Research or Help //////////////

// Using Array.Filter() with Arrow Functions we can achieve this using

// users = users.filter(x => x.name == 'Mark' && x.address == 'England');

// Here is the complete snippet

// initializing list of users
var users = [
  {
    name: "John",
    email: "johnson@mail.com",
    age: 25,
    address: "USA",
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 35,
    address: "England",
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 28,
    address: "England",
  },
];

//filtering the users array and saving
//result back in users variable
users = users.filter((x) => x.name == "Mark" && x.address == "England");

//logging out the result in console
console.log(users);
