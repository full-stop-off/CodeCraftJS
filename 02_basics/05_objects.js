// const tinderUser = new Object(); // singleton obj
const tinderUser = {};

tinderUser.id = "123xyz";
tinderUser.name = "jerry";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    fname: "full",
    lname: "stop",
  },
};

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname["fname"]);
console.log(regularUser.fullname.lname);

// checking where it exists or not -- on APIs
console.log(regularUser.fullname?.nickname);

// combine objects
const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "x",
  4: "y",
};

const obj3 = obj1 + obj2;
console.log(obj3); // [object Object] [object Object]

const obj4 = { obj1, obj2 };
console.log(obj4); // Array Problem -> object inside object

const obj5 = Object.assign({}, obj1, obj2); // {} target , other source
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'x', '4': 'y' }

// OR

const obj6 = { ...obj1, ...obj2 }; // spread operator
console.log(obj6);

// Return from database values
const user = [
  {
    id: 1,
    email: "a@email.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@email.com",
  },
];

console.log(user[1].email); // b@gmail.com

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // keys in an Array
console.log(Object.values(tinderUser)); // values in an Array
console.log(Object.entries(tinderUser)); // keys,values in an Array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // return true or false
