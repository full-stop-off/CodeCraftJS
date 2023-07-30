// All loops are same, Only there structure is changed.

let index = 0; // initilization
while (index <= 10) {
    // condition are defined above
    console.log(`Value of index is ${index}`);
    index += 2; // increment
}

// On Array
let myArray = ["flash", "batman", "superman", "aquaman"];
let increment = 0;

while (increment < myArray.length) {
    console.log(myArray[increment]);
    increment += 1; // increment ++
}

// do while - it runs atleast one time eiter condiion is false
// let score = 1;
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// On Array
let myNewArray = ["ironman", "thor", "hulk", "black panther", "black wido"];
let value = 0;
do {
    console.log("From Do-While Loop " + myNewArray[value]);
    if (myNewArray[value] === "hulk") {
        console.log("I am hulk");
    }
    value += 1;
} while (value < myNewArray.length);