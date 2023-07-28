// Switch statement allows us to execute different blocks of code based on the value of an expression
/*
 * lets say we have single lock 🔒 and multiple keys  🔑 to open lock.
    switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March"); // when match whole block is execute until break is found
    // break;
    case 4:
        console.log("April");
    // break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Default case match");
        console.log("Out of range");
        break;
}

// with Strings
const week = "sunday";
switch (week) {
    case "sunday":
        console.log("Today is Sunday");
        break;
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
    default:
        console.log("Today might be other day");
        break;
}