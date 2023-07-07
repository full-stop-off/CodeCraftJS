// Data conversion is crucial for transforming data between different types, formats, or representations to ensure compatibility, consistency, and accurate processing of information within the code.

let fullname = "jerry123";
let score = 45;

console.log(typeof fullname); // String
console.log(typeof score); // Number

let stringNumber = String(score);
console.log(stringNumber); // 45
console.log(typeof stringNumber); // String

let valueInNumber = Number(fullname);
console.log(typeof valueInNumber); // Number
console.log(valueInNumber); // NaN

let something = null;
console.log(Number(something)); // 0
console.log(typeof Number(something)); // Number

let guess = undefined;
console.log(Number(guess)); // NaN
console.log(typeof Number(guess)); // Number

/*
 * "45" => 45
 * "jerry123" => NaN
 * true => 1 | false => 0
 * null => 0
 * undefined => NaN
 */

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true & vice-versa

let isEmpty = "";
let booleanIsEmpty = Boolean(isEmpty);
console.log(booleanIsEmpty); // false

let notEmpty = "fullstop";
console.log(Boolean(notEmpty)); // true
