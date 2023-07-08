/*
 *
 * How data is stored in the memory and access them on the basic they are categorized:
 * 1. Primitive: Call By Value -> creates a new copy
 *      - String, Numbers, Boolean, Null, Undefined, Symbol, BigInt
 *
 * 2. Non-Primitive (Reference Type) -> Provide  Directly allocated memory reference
 *      - Array, Objects, Functions
 *
 */

// Primitive
const username = "jerry";
const score = 50;
const isAdmin = true;
let cold = null;
let useEmail;
let id = Symbol("JavaScript");
let anotherId = Symbol("JavaScript");
let value = 123n;

console.log(typeof username);
console.log(typeof score);
console.log(typeof isAdmin);
console.log(typeof cold);
console.log(typeof useEmail);
console.log(typeof id);
console.log(typeof value);
console.log("its");
console.log(id === anotherId); // false

// Non-Primitive
const users = ["admin", "guest", "anonymous"];
const details = {
  name: "jerry",
  age: 16,
  address: "Kathmandu",
};

const myFunction = function myFunc() {
  console.log("I am function");
};

console.log(typeof myFunction);
console.log(typeof details);
