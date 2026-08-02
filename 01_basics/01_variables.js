const accountId = 123456789;
let accountEmail = "john.doe@example.com";
var accountPassword = "password123";
accountCity = "New York";
let accountState; // value will be undefined until assigned

// accountId = 2  // accountId is a constant and cannot be reassigned
console.log(accountId); // Output: 123456789

accountEmail = "hdfc@email.com"; // accountEmail is a variable declared with let and can be reassigned
accountPassword = "newpassword456"; // accountPassword is a variable declared with var and can be reassigned
accountCity = "Los Angeles"; // accountCity is a variable declared without a keyword and can be reassigned  

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 


// Java script is a dynamically typed language, which means that the type of a variable can
//  change at runtime. For example, we can reassign a variable to a different type:
// Java Script has scope defined inside {} are of three types: Global, Function, and Block scope. 
//Variables declared with var have function scope, while variables declared with let and const have 
// block scope.

/*
Prefer not to use var, as it has function scope and can lead to unexpected behavior.
*/