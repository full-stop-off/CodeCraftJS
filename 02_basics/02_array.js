// Array -  A data structure which can store collection of data-types. 

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
console.log(typeof myArr);
console.log(myArr[2]);

const heros = ["spiderman", "shaktimaan", "thor"];
const myArr2 = Array(9, 8, 7, 6);
console.log(`${myArr2}`);

// Methods - remember which methods changed the original array.
console.log(myArr2.length);
myArr2.push(4);
myArr2.push(5);
console.log(myArr2);

myArr2.pop(); // remove at last index
console.log(myArr2);

myArr2.unshift(10); // insert at first index, but changes the whole index, time consumeing
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

console.log(myArr2.includes(4)); // returns true or false if exist value
console.log(myArr2.indexOf(7)); // returns index where it lies
console.log(myArr2.indexOf(2)); // returns -1 if not found

const newArr = myArr2.join(); // converts into string
console.log(typeof newArr); // 9,8,7,6,4

// splice, slice

console.log("A ", myArr2);

const myNewArr = myArr2.slice(1, 3); // get only certain data without changing the original array
console.log(myNewArr); // [8, 7]
console.log("B ", myArr2);

const myNewArr2 = myArr2.splice(1, 3); // include start and end at 3 , cut it down into parts and print it
console.log(myNewArr2); // [8,7,6]
console.log(myArr2); // [9,4]
