// For Each pratice and problems solution
const language = ["nepali", "hindi", "tamil", "english"];

language.forEach((iterm) => {
    console.log(iterm);
});

// storeing
console.log("what is returns");
const val1 = language.forEach((item) => {
    console.log(item);
    // return item ->  // still undefined
});

// console.log(typeof val1); // undefined
console.log(val1); // print console but return undefined

// Array Filter methods returns the array - explit return arrow function
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let greaterThanFour = myNum.filter((item) => item > 4);
console.log(greaterThanFour);

// return keyword should be used to if scope is used
let smallerThan = myNum.filter((item) => {
    return item < 4;
});
console.log(smallerThan);

// for foreach - above solution
const newNums = [];
myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);

// Filter Pratices - json data
const books = [
    {
        title: "Book one",
        genre: "Math",
        publish: 1778,
    },
    {
        title: "Book two",
        genre: "Science",
        Publish: 1999,
    },
    {
        title: "Book three",
        genre: "Economics",
        Publish: 1888
    },
    {
        title: "Book four",
        genre: "Math",
        Publish: 2013
    },
];

const yourBooks = books.filter((bk) => bk.genre === "Math");
const userBooks = books.filter((bk) => {
    return bk.Publish >= 1999 && bk.genre === "Science";
});

console.log(yourBooks);
console.log(userBooks);