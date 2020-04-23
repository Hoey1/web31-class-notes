

// GUIDE TO COMMENT COLORS
        //TODO -    Current Subject/Focus Place Marker, Will follow with 3 solid lines to mark end
        //?    -    Notes to reference line its on our line # will be defined. 
         //*    -    Keywords and/or definitions --> Also for Breakout Session Review
        //!    -    Important! Ask Later  
        ////   -    THIS IS JUST A BREAK LINE FOR SUB SECTIONS OR BREAKOUTS

//



//todo -------------------------------------------
//todo ---------       Review        -------------
//todo ----        from yesterday    -------------
//todo -------------------------------------------

function Pet(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
}

Pet.prototype.speak = function() {
    return `${this.name} says ${this.phrase}`
}

////--------------------------------------
// creating a child (review - the old way)
////--------------------------------------
function Child(childAttributes) {
    Pet.call(this, childAttributes) //? binding this to parent
    this.isChild = childAttributes.isChild; //? this will be for any special attributes to the child
}

Child.prototype = Object.create(Pet.prototype);
////-----------------
// Create our objects
////-----------------
const petOne = new Pet({
    name: 'Maui',
    location: 'DC',
    phrase: 'I am an asshole',
});

const petTwo = new Chilld({
    name: 'Virus',
    location: 'Kitchen',
    phrase: 'Im eating',
})

console.log(petOne.speak());
console.log(petTwo.speak());
//// ---------------------------------------------
//     ---------    review over    ---------------
//// ---------------------------------------------

//
//
//
//
//
//

//todo -------------------------------------------
//todo ---------       CLASSES        ------------
//todo -------------------------------------------

//* Classes are not hoisted - that means that if we are putting our info abobe a class we have referenced it will not work.
//* they use strict - it prevent window binding, forces us to write cleaner code with error if we don't
//* Methods are a special syntax 
//* A constructor is visibile 

// Doing the review question above as a Class
// Convert to class syntax
class Pet {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.phrase = attributes.phrase;
    } //? Methods Go Here! -> putting them here is just syntax
    speak(){
        return `${this.name} says ${this.phrase}`;
    }
}

// Converting the Child to Class Syntax
// create our child using class syntax
//*  super and extends do what .call and .create did
//!  super and extends do what .call and .create did

class Child extends Pet{
    constructor(attributes) {
        super(attributes)
        //? Any special attributes for the child go here
    }
    //? Any special methods for the child go here
}

//* Child Class
//* extends links up the dunder proto - it tell us where we came from 
//* extends tells super what to super to
//* extends + super do what Object.create and parent.call did

//
// Building a class from scratch

class Parent {
    constructor (attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.work = attributes.work;
    } //? Write our Methods Here
    job() {
        return `${this.name} is a ${this.work}`;
    }
}

class Child extends Parent {
    constructor (attributes) {
        super(attributes) //? this replaces parent.clal
        //? special attributes for child go here
        this.major = attributes.major;
    } //? special methods for the child
    study(){
        return `${this.name} is studying ${this.major}`;
    }
}

class GrandChild extends Child {
    constructor (other) {
        super(other) //? this replaces parent.call (or in the case child.call)
        //? any special attributes for the grandchild go here
        this.toy = other.toy,
    } //? any special methods for the grandchild go here
    play() {
        return `${this.name} plays with ${this.toy}`;
    }
}

class Pet extends GrandChild { //? inehrits list
    constructor (attributes) {
        super(attributes)
        this.food = attributes.food;
    }
    eat() {
        return `${this.name} eats ${this.food}`;
    }
}


/////////////////
//  OBJECTS    //
/////////////////
const mom = new Parent({
    name: 'mom',
    location: 'USA',
    work = 'Computer Scientist',
});
////--------------------------------------------
//// -------------------------------------------
const daughter = new Child({
    name: 'Harper',
    location: 'DC',
    work: 'Being a badass',
    major: 'Computer Science',
});
//// -------------------------------------------
//// -------------------------------------------
const grandBaby = new GrandChild({
    name: 'Owen',
    location: 'Maryland',
    work: 'games',
    major: 'school',
    toy: 'controller',
});

const fish = new Pet ({
    name: 'bubbles',
    location: 'mini ocean',
    work: 'swimmer',
    major: 'marine biology',
    toy: 'ship wreck',
    food: 'flakes',
});


// How do I invoke job?
// mom.job()

console.log(mom.job);
console.log(daughter.job());        //* From Breakout
console.log(daughter.study());      //* From Breakout
console.log(grandBaby.job());       //* From Question From Break (1:06)
console.log(grandBaby.study());     //* From Question From Break (1:06)
console.log(grandBaby.play());      //* From Question From Break (1:06)
console.log(fish.job());            //* From Question From Break (1:06)
console.log(fish.study());          //* From Question From Break (1:13)
console.log(fish.play());           //* From Question From Break (1:13)
console.log(fish.eat());            //* From Question From Break (1:13)


//* -----------------------------------------------------------------------------
//* ------------                    BREAKOUT                ---------------------
//* ----        DO:     Look above, we are adding a class of Child      ---------
//* ----                and we also added grandChild & Pet              ---------
//* ----        NOTE:   Have to add them above because you              --------- 
//* ----                cannot hoist classes.                           ---------
//* -----------------------------------------------------------------------------

//*     a Parent CANNOT inherit from a Child.
//*     a Child CAN inherit from a Parent.













//? Look at the 1:06 mark on the video for this below
//? Look at the 1:06 mark on the video for this below
//? Look at the 1:06 mark on the video for this below

//todo -------------------------------------------
//todo ---------        Review       -------------
//todo ---------       Module 1      -------------
//todo -------------------------------------------

//* place holder values function() inside of parenthesis are called parameters
                //? Doesn't matter what you name them
                //? Good Practice for naming them is using a clue for what they're being used for
                //* What do we pass into params when the function is called?
                //* Arguments are the actual values that get passed in

function add (num1, num2) { //
    return num1 + num2; 
}

add (3, 2); //* These are the arguments - actual values
//? 3 = num1
//! 2 = num2

//// ---------------------------------------------------------------------------------------
//* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//* console.log - is to see the results in the console - it is a method - we wrape this around the invocation to see it in the console. 
                //? This is used for debugging. 
                //? Its basically a preview of what our code is going to do.
//* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//// ---------------------------------------------------------------------------------------


//// ---------------------------------------------------------------------------------------
//* ---------       Objects      ------------- 

//* Object {
    key value pairs
    //* key: value,
    //* methods - functions that belong to objects
}   


//// ---------------------------------------------------------------------------------------
//* ---------       Arrays      ------------- 

//* Array []
                //? order is the thing that matters
                //? the computer assings an index to every item in an array - index starts at 0

//
//// ---------------------------------------------------------------------------------------


//// ---------------------------------------------------------------------------------------
//// ---------------------------------------------------------------------------------------
//* ---------      Calbacks & Higher Order Functions      ------------- 

            //* What is the differnce between CALLBACKS and HIGHER ORDER FUNCTIONS?
                        //? Callback functions are passed in
                        //? higher order functions receive
//

function maths(num1, num2, cb) {
    return cb(num1, num2);
}

const add = (num1, num2) => num1 + num2;

maths(2, 3, add)    //* 2 = num1
                    //? 3 = num2
                    //! add = cb
//// ---------------------------------------------------------------------------------------                    
//
//
//
//
                   
//*----------------------------------------
//*        Skeleton of class syntax
//*----------------------------------------

// Create Parent In Class Syntax
class parent {
    constructor(param) { //* attributes
        //? assign attributes here
    } 
    //? methods go here
}
 
// Creat Child in class syntax
class Child extends Parent{
  constructor(param){
    super(param);
    //? assign any special attributes to child 
    }
    //? assign any special methods to child 
}

//* create objects here 

//* invoke our methods or console.log



////-------------------------------------------------------------------------------------------------
//          rewatch starting at the 1:29 part over build week and javascript assessment
//!         rewatch starting at the 1:29 part over build week and javascript assessment
//*         rewatch starting at the 1:29 part over build week and javascript assessment
//?         rewatch starting at the 1:29 part over build week and javascript assessment
//todo      rewatch starting at the 1:29 part over build week and javascript assessment
////-------------------------------------------------------------------------------------------------




