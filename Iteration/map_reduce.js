const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addNum = myNum.map((item) => item + 10);
console.log(addNum);

// chaining method - second methods takes first method output

const newNum = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 40);
console.log(newNum);

// reduce method - shop card real example
const nums = [1, 2, 3];

const myTotal = nums.reduce(function (acc, currVal) {
    console.log(`Accumulator: ${acc} CurrentValue: ${currVal}`);
    return acc + currVal;
}, 0);
console.log(myTotal);

const myNewTotal = nums.reduce((acc, currVal) => acc + currVal, 4);
console.log(myNewTotal);

const shoppingCart = [
    {
        itemName: "javascript",
        price: 2000,
    },
    {
        itemName: "Python",
        price: 4000,
    },
    {
        itemName: "DSA",
        price: 5000,
    },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);