/*
The two types of Datatypes in JavaScript are:
this categorization is based on how the data is stored in memory and how it is accessed

1. Primitive Datatypes (Call by Value)
    String, Number, Boolean, Null, Undefined, Symbol, BigInt

2. Reference (Non Primitive) Datatypes (Call by Reference)
    Object, Array, Function

Javascript is dynamically typed language,which means that the type of a variable can change at runtime.
Statics typed version of JavaScript is TypeScript,
 which is a superset of JavaScript that adds optional static typing to the language.

Static typing is a feature of some programming languages where the type of a variable is determined 
at compile time and cannot be changed at runtime. 
In contrast, dynamic typing allows for more flexibility in how variables are used, 
but can also lead to unexpected behavior if not used carefully.
*/
 
// Primitive Datatypes (Call by Value)

// const accountId = Symbol(123456789); // accountId is a constant and cannot be reassigned
// const Id = Symbol(123456789); // Id is a constant and cannot be reassigned

// Symbols are unique and immutable primitive values that can be used as keys for object properties. 
// Here accountId and Id are two different symbols, even though they have the same description.   

// console.log(accountId); // Output: Symbol(123456789)
// console.log(Id); // Output: Symbol(123456789)

// console.log(accountId === Id); // Output: false

// Reference Datatypes (Call by Reference)

const heros = ["Iron Man", "Spider Man", "Thor"];

let myObject = {
    name: "Ashutosh Pandey",
    age: 38,
    isAdmin: true
};

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof heros); // Output: object
// console.log(typeof myObject); // Output: object
// console.log(typeof myFunction); // Output: function
// console.log(typeof null) // Output: Object

// https://tc39.es/ecma262/#sec-typeof-operator

// ****************************** Memory Allocation in JavaScript ******************************

/* In JavaScript, memory is allocated for variables and objects in two different ways: 
 1. Stack memory (Primitive Datatypes)
    - Get a copy of the value and store it in a new memory location.
    - No change in the original value, as the copy is stored in a different memory location.
*/
let myName = "Ashutosh Pandey"; // myName is a variable declared with let and can be reassigned
let myAnotherName = myName; // myAnotherName is a variable declared with let and can be reassigned

console.log('myName - ' + myName); // Output: Ashutosh Pandey
console.log('myAnotherName - ' + myAnotherName); // Output: Ashutosh Pandey
myAnotherName = "Ashutosh Pandey 2"; // myAnotherName is reassigned to a new value
console.log('myAnotherName - ' + myAnotherName); // Output: Ashutosh Pandey 2
console.log('myName - ' + myName); // Output: Ashutosh Pandey
/*
 2. Heap memory (Reference Datatypes)
    - Get a reference to the value and store it in a new memory location.
    - If values change in the referenced object, 
      those changes will be reflected in the original value, 
      as the reference points to the same memory location.
*/
let userOne = {
    email : "user@google.com",
    userId : "userOne@ybl"
};

console.log("userOne.email -" +userOne.email); // Output:

let userTwo = userOne;
console.log("userTwo.email -" +userTwo.email);

userTwo.email = "userTwo@ybl";
console.log("After Update userOne.email -" +userOne.email); 
console.log("After Update userTwo.email -" +userTwo.email);