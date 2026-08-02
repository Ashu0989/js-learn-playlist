// console.log(2 > 1); // Output: true
// console.log(2 < 1); // Output: false
// console.log(2 >= 1); // Output: true
// console.log(2 <= 1); // Output: false
// console.log(2 == 1); // Output: false
// console.log(2 != 1); // Output: true

// make sure that you are using the same data type for comparison, as JavaScript is a dynamically
//  typed language and can lead to unexpected behavior if you are not careful. For example, 
// the following comparison will return true, even though the values are not equal:
// console.log(2 == "2"); // Output: true

// console.log("2" > 1); // Output: true
// console.log("02" > 1); // Output: true

// console.log(null > 0); // Output: false
// console.log(null == 0); // Output: false
// console.log(null >= 0); // Output: true

// equality operator (==) and comparision opreators (>, <, >=, <=) behave differently 
// comparison convert null to 0, while equality operator does not convert null to 0.

// console.log(undefined > 0); // Output: false
// console.log(undefined == 0); // Output: false
// console.log(undefined >= 0); // Output: false

// strict checking operator (===) checks for both value and type, 
// while the equality operator (==) only checks for value.

// console.log(2 === "2"); // Output: false
// console.log(2 === 2); // Output: true
