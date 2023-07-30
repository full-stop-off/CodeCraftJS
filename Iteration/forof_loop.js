/* For-of loop - datatypes allows looping on them
    *
    * for (const <variable> of object) {
    *   // objects = which to loop (sting, number,array)
    *  }
    *  Array Specific loops
    * Sinerio on Array
    * ["", "", ""]
    * ({}, {}, {});
*/

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// on String
const myStr = new String("jerry");
for (const i of myStr) {
    console.log(i);
}

const greet = "Hello world";
for (const greeting of greet) {
    console.log("Is Char is ", greeting);
    if (greeting == "o") {
        break;
    }
}

// Maps - having key value pairs, stores only unique, remembers the order
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("NP", "Nepal");
map.set("IN", "India");

console.log(map);

for (const keyName of map) {
    console.log(keyName); // return  object array
}
// destructure array
for (const [key, value] of map) {
    console.log(`Key name ${key} value is ${value}`);
}

const myObj = {
    name: "fullstop",
    depart: "technical",
    country: "IN",
};
// for (const [key, value] of myObj) {
//   console.log(key, value);
// } // does not work for objects* 