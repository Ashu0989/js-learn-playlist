"use strict"; //treat all code as being in strict mode and newer veriosn

// alert (3 + 4); // we can not use alert in node.js environment, it is used in browser environment
console.log(3 + 4); // Output: 7
console.log("Hello World"); // Output: Hello World

// ECMAScript (tc39) is a standard for scripting languages like JavaScript. It defines the syntax, semantics, 
// and behavior of the language. JavaScript is an implementation of the ECMAScript standard, 
// and it follows the specifications defined by ECMAScript.

/*
Primitive Datatypes: 
Primitives are the most basic data types in JavaScript. They are immutable, meaning that their values 
 cannot be changed once they are created. The primitive data types in JavaScript are:
  1. number => 2 to power of 53 - 1 (9007199254740991) and -2 to power of 53 + 1 (-9007199254740991)
  2. bigint => 2 to power of 63 - 1 (9223372036854775807) and -2 to power of 63 + 1 (-9223372036854775807)
  3. string => ""
  4. boolean => true or false
  5. null => standalone value; represents the intentional absence of any object value
  6. undefined => represents a variable that has been declared but has not yet been assigned a value
  7. symbol => a unique and immutable primitive value that can be used as a key for object properties

Object Datatypes:
 object => a collection of key-value pairs, where the keys are strings and the values can be any data type

 */
console.log(typeof 123); // Output: number
console.log(typeof "123"); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined
console.log(typeof Symbol("id")); // Output: symbol