/*
 * Immediately Invoked Function Expression (IIFE)
 * Execute Function Immediately
 * Why - Database Connection / Global scope pollution could occur problem to reduce use IIFE
 */

function code() {
    console.log("Database Connected");
}
code();

// (function defination)(execution call) semi-colon 
(function devloper() {
    console.log("IIFE used");
})();

// On arrow function - if more then one IIFE function is used after execution termination ';'is required else error occurs
(() => {
    console.log("It works on arrow function");
})();

// Paramterized Arrow Function
((name) => {
    console.log(`Hello ${name}`);
})("fullstop");