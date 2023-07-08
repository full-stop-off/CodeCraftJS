const fname = "full";
const lname = "stop";

console.log("Welcome " + fname + lname); // Concatenation

// String Interpolation - Modern ways
console.log(`Hello, My name is ${fname} ${lname}`);

// Decleration
const game = "Clash Royal";
const gameName = new String("Clash-of-Clan");
console.log(gameName);
console.log(typeof gameName); // String Object
console.log(gameName[3]); // We can access each index
console.log(game.__proto__); // {} -> view on browser

// Accessing ProtoTypes / Methods
console.log(gameName.length); // 13
console.log(gameName.toUpperCase()); // Note: does not change original value
console.log(gameName.charAt(3)); // finding position value - s
console.log(gameName.indexOf("a"));

const anotherPart = gameName.slice(-13, 6);
console.log(anotherPart); // Clash- => supports -ve value

const parts = new String(gameName.substring(0, 5));
console.log(parts); // Clash -> Sting Object => does not support -ve value

const newString = "   fname lname  ";
console.log(newString);
console.log(newString.trim()); //removes white spaces from left & right

const host = "https://google.com/text%20search%20wait";
console.log(host.replace("%20", "-")); // first occurance
console.log(host);

console.log(host.includes("search")); // Returns true or false
console.log(host.split("%20")); // In 3 parts => returns object

// For More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String