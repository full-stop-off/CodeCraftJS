// Nested scope level
// Hoisting - how functions are declared, how they are stored, execution context
// how variables are treated, how the tree is created where variables & functions stored

function one() {
    const username = "fullstop";
    function two() {
        const website = "example.com";
        console.log("Hello " + username);
    }
    // console.log(website); // it is not defined -> local scope

    two(); // if the function is not called it won't execute the console
}

one();

// if statement

if (true) {
    const user = "jerry";
    if (user === "jerry") {
        const url = " stackoverflow.com";
        console.log(user + url);
    }
    // console.log(url); // Error 1: not defined
}
// console.log(user); // Error 2: not defined

// +++++++++++++++ Intersting ++++++++++

console.log(addOne(1)); // executes before declaration of function
// Basic function
function addOne(num) {
    return num + 1;
}
addOne(4);

// function or Expression
addTwo(3); // Error: cannot access before initialization -> Expression
const addTwo = function (num) {
    return num + 2;
};

addTwo(7);
