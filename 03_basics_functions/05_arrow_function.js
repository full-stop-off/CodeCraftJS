// this keyword - defines current context(values)
const user = {
  name: "fullstop",
  price: 100,
  welcomeMessage: function () {
    console.log(`${this.name}, welcome to website`);
    // console.log(this);
  },
};

user.welcomeMessage(); // default context
user.name = "jerry";
user.welcomeMessage(); // jerry, welcome to website

// On browser Window is a global object, Node is empty
console.log(this); // {}

function code() {
  console.log(this); // bunch of object are listed
  let progammer = "fullstop";
  console.log(this.progammer); // undefined
}
code();

// Arrow function
const developer = () => {
  let codder = "jerry";
  console.log(this); // {} - cause of function expression
};
developer();

//Explicit return - Default
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 7)); // 13

// Implicit return
const addThree = (num1, num2) => num1 + num2;
console.log(addThree(2, 3)); // 5

// wrapped {} used return must be used, () don't used return - helpful in react
const addFour = (num1, num2) => num1 + num2;
console.log(addFour(5, 6)); // 11

// what if want to return object in implicit
const addFive = (num1, num2) => ({ name: "fullstop" });
console.log(addFive(0, 0)); // {name: fullstop}

// mostly used in array, loops
const myArray = [2, 4, 5, 7, 3];
myArray.forEach(function () {});
myArray.forEach(() => {});
