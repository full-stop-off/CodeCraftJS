const marvel = ["spiderman", "thor", "ironman", "blackpanter", "hulk"];
const dc = ["superman", "batman", "flash"];
// It works on Call by Reference - manuplate real array
// marvel.push(dc);  // array in array
// console.log(marvel);
// console.log(marvel[5][1]); // batman

const allHeros = marvel.concat(dc); // returns a new array with all heros
console.log(allHeros);

const allNewHero = [...marvel, ...dc]; // spread operator to merge -  individually - multi arrays
console.log(allNewHero);

// nested array
const anotherArray = [1, 3, 4, 5, [45, 67, 74, 23], 7, [9, 32, 23, [9, 8, 7]]];

const usableArray = anotherArray.flat(Infinity); // Infinity | depth recusively
console.log(usableArray); // a single new arrray with all element in index

// data scraping
console.log(Array.isArray("jerry")); // false
console.log(Array.from("jerry")); // [ 'j','e','r','r','y']
console.log(Array.from({ name: "jerry" })); // intersting - [empty array]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100,200,300]
