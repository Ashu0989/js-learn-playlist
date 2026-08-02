// Conversion in JavaScript is the process of converting a value from one data type to another.

let score = 100; // score is a variable declared with let and can be reassigned

// console.log(score); // Output: 100
// console.log(typeof score); // Output: number
// console.log(typeof(score)); // Output: 150

// console.log("Alphabatic String to number conversion: ");

score1 = "33"; // score is reassigned to a string value
// console.log(score1); // Output: 33
// console.log(typeof score1); // Output: string

let valueInNumber = Number(score1); // valueInNumber is assigned the numeric value of score
// console.log(typeof valueInNumber); // Output: number

score1 = "33"; // score is reassigned to a string value
// console.log(score1); // Output: 33
// console.log(typeof score1); // Output: string

// console.log("Alphanumeric string to number conversion: "); 
score1 = "33aa";
let valueInNumber1 = Number(score1); // valueInNumber is assigned the numeric value of score
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1); // Output: NaN (Not a Number) because "33aa" cannot be converted to a number

// always check after conversion if the value is NaN or not, 
// as it can lead to unexpected behavior in your code. 
// It can be 0 in case of Null valriable and NaN in case of alphanumeric/Undefined string.
// check of NaN can be done using isNaN() function, which returns true if the value is NaN, and false otherwise.
// console.log(isNaN(valueInNumber1)); // Output: true

// "33" => 33
// "33aa" => NaN (type is number but value is not a number)
// true => 1
// false => 0
// null => 0

// User String() to comvert any value to string. 
// It can be used to convert number, boolean, null, undefined, and object to string.  

// User Number() to convert any value to number.

// User Boolean() to convert any value to boolean.

//console.log("Boolean conversion: ");

let isLoggedIn = 1; // isLoggedIn is a variable declared with let and can be reassigned
//console.log(isLoggedIn);
//console.log(typeof isLoggedIn); // Output: number

let isLoggedIn1 = Boolean(isLoggedIn);
//console.log(isLoggedIn1);
//console.log(typeof isLoggedIn1); // Output: boolean

// "" -> false
// " " -> true
// 0 -> false
// 1 -> true

// ***************** Operation ******************************

let value = 3
let negativeValue = -value; // negativeValue is assigned the negative value of value
// console.log(negativeValue); // Output: -3
// console.log(typeof negativeValue); // Output: number

// console.log(" Basic Arithmetic Operations in JavaScript:");
// console.log(2 + 2); // Output: 4
// console.log(3 - 2 ); // Output: 1
// console.log(2 * 2); // Output: 4
// console.log(2 / 3); // Output: 0.6666666666666666
// console.log(7 % 3); // Output: 1 (modulus operator returns the remainder of the division)
// console.log(2 ** 3); // Output: 8 (exponentiation operator returns the value of the first operand raised to the power of the second operand)

// console.log(" Basic Operations in JavaScript String:");

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // str3 is assigned the concatenation of str1 and str2
// console.log(str3); // Output: Hello World

// console.log("1" + 2); // Output: 12 (string concatenation)
// console.log(1 + "2"); // Output: 12 (string concatenation)
// console.log("1" + 2 + 2); // Output: 122 (string concatenation)
// console.log(1 + 2 + "2"); // Output: 32 (string concatenation)

// console.log(+true); // Output: 1 (unary plus operator converts true to 1)
// console.log(+false); // Output: 0 (unary plus operator converts false to 0) 
// console.log(+null); // Output: 0 (unary plus operator converts null to 0)
// console.log(+undefined); // Output: NaN (unary plus operator converts undefined to NaN)
// console.log(+""); // Output: 0 (unary plus operator converts empty string to 0)

let gameCounter = 100;
gameCounter++; // gameCounter is incremented by 1
console.log(gameCounter); // Output: 101

let x = 3;
const y = x++;
console.log(`x: ${x}, y: ${y}`); // Output: x: 4, y: 3
// x is 4; y is 3

let x2 = 3;
const y2 = ++x2;
console.log(`x2: ${x2}, y2: ${y2}`); // Output: x2: 4, y2: 4
// x2 is 4; y2 is 4

//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion