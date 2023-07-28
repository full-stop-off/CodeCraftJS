// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: true, 1, "0", 'false', "<space>", {}, [], funcion(){}


const userEmail = "support@micorsoft.com";

// no comprasion is done
if (userEmail) {
    console.log("Got user email"); // Executed
} else {
    console.log("Does not got email");
}

const newEmail = "";
if (newEmail) {
    console.log("Email updated");
} else {
    console.log("Email is empty"); // Executed
}

const updateEmail = []; // or {}
if (updateEmail) {
    console.log("Email updated"); // Executed
} else {
    console.log("Email is empty");
}

// Checking Array is empty
if (updateEmail.length === 0) {
    console.log("Array is empty");
}

// Checking Objects is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // converting objects to array and then lenth propertiesk
    console.log("Object is empty. ");
}

// Nullish Coalescing Opertor (??) : null, undefined
// functions can return any thing, also from 3rd partys'
let val1;
val1 = 30 ?? 10;
console.log(val1); // 30

val1 = null ?? 10;
console.log(val1); // 10

var1 = undefined ?? 15;
console.log(var1); // 15

val2 = null ?? 10 ?? 30;
console.log(val2); // 10

// Terniary Opertor
// <conditions> ? true : false
const price = 100;
price <= 80 ? console.log("less than 80") : console.log("more than 80");