/* 
* Scopes determine the visibility and accessibility of variables, functions, and other identifiers within different parts of the code. 
 * Block Scope can access Global Scope
 * Global Scope should cannot access Block Scope
 */
let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

// { } -> seen in function, if-else, do-while loop, for
//  objects decleration are differ from this

// *** Global Scope ***
var f = 80;
var g = 90;
var h = 100;

if (true) {
    // *** Block Scope ***
    let d = 40;
    const e = 50;
    var f = 60;
    g = 70;
    console.log("Inner: ", h); // Can access H variable
}

// console.log(d); // Not defined
// console.log(e); // Not defined
console.log(f); // 60
console.log(g);

let i = 200;

if (true) {
    // console.log("INNER: ", i);
    let i = 300;

    console.log("Inside:", i);
}

console.log("Outside", i);