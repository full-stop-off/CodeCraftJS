// Control Flow | Logic Flow

// if statement

// if (true) {} - code executes
// if (false) {} - code does not executes

const isUserLoggedIn = true;
if (isUserLoggedIn) {
    console.log("Yes, user has been logged in.");
}

// comparision operators
// <, >, <=, >=, ==, !=, ===

if (2 == 2) {
    console.log(" is 2 equal to 2"); // Yes, it executes block of code
}

if (2 === 2) {
    console.log("checks 2 is equal to 2 and is same datatype");
}

if (2 == "2") {
    console.log("Number and String are executed");
}

if (2 === "2") {
    console.log("checks comparision and same datatype");
} else {
    console.log("Not equal OR Not same datatype");
}

if (2 != 3) {
    console.log("2 is not equal to 3");
}

// else statement
const temperature = 41;
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature greater than 50"); // executed statement
}

const score = 200;
if (score > 100) {
    // const power = "fly";
    // var power = "fly";
    let power = "fly";
    console.log(`User has ${power}`);
}
// console.log(`User has ${power}`); // scope problem, if VAR is not used

// short hand notation - implicit scope - semicolon is required
const balance = 1000;
if (balance < 5000) console.log("test");
// if (balance > 500) console.log("Enough Balance"), console.log("Not enought"); // multi-line

// Nested - If-elseif
if (balance < 100) {
    console.log("Greater than 100");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); // executed
}

// real life example
const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
    console.log("Allowed to Buy");
}

// Any condition is false it does not executes
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allowed to Buy Both ");
} else {
    console.log("Not Allowed");
}

// Logical OR operator ( || )
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User can be logged in  either Email or via Google");
}
