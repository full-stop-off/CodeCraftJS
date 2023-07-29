// for loop
// for()

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Outer ooop: ${i}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`Inner loop value ${j} and Outer loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`); // multipication table
    }
}

// Array loop
let myArray = ["flash", "superman", "batman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break, continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Dected 5");
        break;
    }
    console.log(`The value of I is ${i}`);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("We have detected:  5");
        continue; // ignore mistakes 
    }
    console.log(`The value of I is ${i}`);
}