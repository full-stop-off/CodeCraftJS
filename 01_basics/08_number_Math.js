// Numbers

const balance = 3000; // auto define a number
console.log(balance); //  3000

const salary = new Number(15000); // declearing new object number
console.log(salary); // [Number: 15000]
console.log(salary.toFixed(2)); // 15000.00

let strSalary = salary.toString();
console.log(typeof strSalary); // String
console.log(strSalary.length); // 5 character

let otherNumber = 2145.19999999994435;
console.log(otherNumber.toPrecision(3)); // precise value 2.15e+3

let hundred = 10000000000;
console.log(hundred.toLocaleString()); // 10,000,000,000 -> ease to read :)
console.log(hundred.toLocaleString("en-IN")); // 10,00,00,000

// Maths
console.log("Maths");

console.log(Math); // Object [Math] {}
console.log(Math.abs(-5)); // 5 - negative into possitive
console.log(Math.round(4, 8)); // choose lower or upper [roundOf]

console.log(Math.ceil(5.1)); // 6 - upper value
console.log(Math.floor(5.2)); // 5 - lower value

console.log(Math.sqrt(9)); // 3 -  square root is 9
console.log(Math.min(9, 7, 3, 2, 5)); // 2 minimum
console.log(Math.max(9, 7, 3, 2, 5)); // 9 maximum

console.log(Math.random()); // 0 to 1 -> 0.1,0.8,0.5 any
console.log(Math.random() * 10 + 1); // values shifted [0-9] with decimal
console.log(Math.floor(Math.random() * 10 + 1)); // cause of floor result could be 0

const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // [1-6] range
