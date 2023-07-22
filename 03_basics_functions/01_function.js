// Function - enable code reusability, modularity, and abstraction, making it easier to manage complexity and write organized, maintainable code.

console.log("j");
console.log("e");
console.log("r");
console.log("r");
console.log("y");

// Define function
function sayName() {
    console.log("jerry");
}

sayName; // reference
sayName(); // function execution

function addTwoNumbers(number1, number2) {
    // we have not validate parameters is number or not
    console.log(number1 + number2);
}

addTwoNumbers(); // NaN - Empty Arguments
addTwoNumbers(9, 3); // 12 - added
addTwoNumbers("4", "4"); // string concat
addTwoNumbers(5, "2"); // 52
addTwoNumbers("1", 1); // 11
addTwoNumbers(4, null); // 4
addTwoNumbers(8, "a"); // 8a

const sum = addTwoNumbers(10, 10);
console.log(`Result: `, sum); // output (10 + undefined) -> returns back to function

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    return result;
    console.log("Does it Prints"); // unreachable
}
mul = multiplyTwoNumbers(7, 7);
console.log(mul); // 49 only

multiplyTwoNumbers(4, 4); // does not print

function loginUserMesssage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMesssage("Jerry"));
console.log(loginUserMesssage()); // undefined just logged in

// professional code example
function greetUser(user) {
    if (user === undefined) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}
console.log(greetUser("Harry")); // Harry just logged in

// undefined equal to FALSE and "" equal to FALSE
function greetingUser(user) {
    if (!user) {
        console.log("Empty is not allowed ");
    }
    return "Hello", user;
}
console.log(greetingUser("John")); // Hello John // works perfectly

// pre-define
function greetUser(user = "jerry") {
    if ("" === undefined) {
        // Now it will never execute
        console.log("Empty is not allowed");
    }
}
