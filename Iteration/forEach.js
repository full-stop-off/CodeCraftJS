// For Each Array Methods 
//["","",""]
//[{},{},{}]

const coding = ["js", "py", "c", "php", "rb"];
// callbackfn - function
coding.forEach(function (item) {
    console.log(item);
});

// Arrow function
coding.forEach((iterm) => {
    console.log(iterm);
});

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); // function reference only

// with index, array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// Array Structure - fetch data from database, json body
const myCoding = [
    {
        language: "javascript",
        languageFileName: "js",
    },
    {
        language: "python",
        languageFileName: "py",
    },
    {
        language: "ruby",
        languageFileName: "rb",
    },
];

myCoding.forEach((item) => {
    console.log(item.language);
});