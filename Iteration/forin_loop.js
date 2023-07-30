// Iteration with FOR-IN loop on object
const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python",
};

console.log(myObj["rb"]); // ruby

for (const key in myObj) {
    console.log(key); // only keys
    console.log(myObj[key]); // values

    console.log(`Programming language ${myObj[key]} file extension is ${key}`);
}

// On Array works ?? NO
const programming = ["js", "java", "python"];
for (const key in programming) {
    console.log(key); // prints indexing keys - 0,1,2
}

// Map not iterativable - no output
const map = new Map();
map.set("NP", "Nepal");
map.set("IN", "India");
map.set("US", "United State");

for (const keyName in map) {
    console.log(keyName);
}