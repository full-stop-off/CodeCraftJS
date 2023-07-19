/*
 * Objects can be decleared in two types
 * 1. Literals
 * 2. Constructor - Singleton
 */

// Objects literals

// Creating Objects
// Object.create(); // Constructor - creates singleton
const users = {
  name: "fullstop",
  "some thing": "no thing",
  env: "researcher",
  location: "Country",
  isLoggedIn: false,
  lastLoginDate: ["Monday", "Saturday"],
};

// Accessing Objects
console.log(users);
console.log(users.name);
console.log(users["name"]);
console.log(users["some thing"]); // dot opertors can't access there types

// Q1. Decleare a symbol and put it into an object and print it
const unique = Symbol("key1");

const record = {
  name: "apple",
  item: 10,
  [unique]: "mykey1", // [ ] it is referenced to symbok
  mail: "support@chatgpt.com",
};
console.log(record.unique); // undefined
console.log(record[unique]); // mykey1

// Changeing Values | Override
record.iterm = 20;
console.log(record);

// UnModifiedable
record.mail = "support@yahoo.com"; // modified
Object.freeze(record);
record.mail = "support@microsoft.com"; // not modified
console.log(record);

// functions on Objects
record.greet = function () {
  console.log("i am inside function");
};

console.log(record.greet); // undefined
// console.log(record.greet()); // ERROR is not a function -> Cause of Object.freeze()

users.greeting = function () {
  console.log("Welcome to Home");
};
console.log(users);
console.log(users.greeting); // [Function (anonymous) -> reference
console.log(users.greeting()); // Its Prints and undefined

users.greetingTwo = function () {
  console.log(`Welcome to Home, ${this.name}`); // user THIS for same object reference
};
console.log(users.greetingTwo()); // Welcome  to Home, fullstop
