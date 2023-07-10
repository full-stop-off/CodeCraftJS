// Dates in JS

let myDate = new Date();
console.log(myDate); // system time
console.log(myDate.toString());
console.log(myDate.toDateString()); // week month date year
console.log(myDate.toLocaleString()); // 7/10/2023 - current time

// let createDate = new Date(2022, 6, 11);
// let createDate = new Date(2021, 0, 19, 9, 2);
// let createDate = new Date("2020-01-05");
let createDate = new Date("12-21-2019");
console.log(createDate);
console.log(createDate.toLocaleString());
console.log(createDate.toString()); // 9:02 hour
console.log(createDate.toDateString());

// Helpfull on creating Polls,Hotel Time CheckOut example
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth()); // starts from 0-11
console.log(newDate.getHours()); // hour only
console.log(newDate.getMinutes());

console.log(`${newDate.getFullYear()}`);

// InterNationalization - we can define different parameters
console.log(
  newDate.toLocaleString("ko-KR", {
    weekday: "long",
    timeZone: "GMT",
  })
); // Monday 월요일

console.log(
  newDate.toLocaleString("default", {
    weekday: "short",
    hour12: true,
    minute: "numeric",
    day: "numeric",
  }) // 10 Mon, 17
);
