// Variables are used to store data values. They are containers that hold information which can be accessed and manipulated throughout the program.

const accountId = 11111;
let accountEmail = "admin@mail.com";
var accountPassword = "12345";
let accountState;

accountCity = "Kathmandu";

// accountId = 2; // Not Allowed: TypeError
accountEmail = "user@mail.com";
accountPassword = "54321";
accountCity = "Biratnagar";

/*
 * Prefer not to use var
 * Cause of issue in block scope and functional scope {}
 */

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
