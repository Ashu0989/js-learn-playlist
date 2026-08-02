const name = 'Ashutosh Pandey';
const age = 38;

//console.log(name + age); // Output: Ashutosh Pandey38
    
// console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Ashutosh Pandey and I am 38 years old.

const myName = new String("Ashutosh Pandey");

// console.log(myName[0]); // Output: A
// console.log(myName.__proto__.length); // Output: 15
// console.log(myName.length); // Output: 15

const myName1 = myName.toUpperCase();
// console.log(myName1); // Output: ASHUTOSH PANDEY
// console.log(myName1.charAt(2)); // Output: H
// console.log(myName1.indexOf("H")); // Output: 2

// console.log(myName1.substring(0, 3)); // Output: H PANDEY

const slExample = myName1.slice(0, 15);
// console.log(slExample); // Output: ASHUTO


const newOne = "    ABS     ";
// console.log(newOne); // Output:     ABS
// console.log(newOne.trim()); // Output: ABS


const url = "https://www.google.com/ashutosh%20pandey";
// console.log(url.replace("%20", "")); // Output: https://www.google.com/ashutoshpandey
// console.log(url.includes("ashutosh")); // Output: true

const myNameSplit = "Ashutosh-pandey";
console.log(myNameSplit.split("-")); // Output: [ 'ASHUTOSH', 'PANDEY' ]

