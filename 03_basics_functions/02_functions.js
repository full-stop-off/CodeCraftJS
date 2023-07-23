// function with objects

function calculateCartPrice(num1) {
    return num1;
}

console.log(calculateCartPrice(1));
console.log(calculateCartPrice(100, 200, 300)); // 100

// rest oprators -> ... (help to pass multi parameter in funcation)
function calCart(...num2) {
    return num2;
}
console.log(calCart(4));
console.log(calCart(400, 500, 600)); // [400, 500, 600] - packed in bundle

let checkType = calCart(1, 2, 3);
console.log(typeof checkType); // object

function randomNumbers(value1, value2, ...value3) {
    return value3;
}
console.log(randomNumbers(9, 8, 7, 6)); // [7, 6]

const user = {
    username: "jerry",
    price: 4000,
};

function handleObject(anyobject) {
    // type should be check in these types of function
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}, location is ${anyobject.location}`
    );
}

handleObject(user); // object should be passed
handleObject({
    username: "shyam",
    price: 3000,
    location: "india",
});

const myNewArray = [100, 200, 300, 400];
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([900, 800, 700]));