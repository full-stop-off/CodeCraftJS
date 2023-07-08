/*
 * Types of Memory: Stack | Heap
 * Primitive Data Type (Stack) | Non-Primitive DataTypes (heap)
 * Stack creates a copy and proived where it is called.
 * Head does not creates copy rather it provied whole reference.
 *
 */

let text = "admin@maildotcom";
console.log(text);

// creating new var
let anotherText = text;
console.log(anotherText);

// manupautation data;
anotherText = "suppor@maildotjcom";
console.log(anotherText);

// Does new data is inserted at text variable ?? Let's find out
console.log(text); // "admin@maildotcom" - NO

// Heap
let accountInfo = {
  accountId: 10001,
  email: "user@google.com",
  isAdmin: false,
};

let anotherAccount = accountInfo;
console.log(anotherAccount);

anotherAccount["email"] = "change@googel.com";
anotherAccount.isAdmin = true;

// Both the values has been changedj
console.log(anotherAccount);
console.log(accountInfo);
/*
 *
 *      |--------------------------|        |------------------------|
 *      |                          |        |     anotherAccount     |
 *      |                          |        |     ---------------    |
 *      |      anotherAccount      |        |      accountInfo       |
 *      |--------------------------|        |     --------------     |
 *      |                          |        |                        |
 *      |         accountInfo      |        |    Reference call      |
 *      |                          |        |     provide all info & |
 *      |--------------------------|        |   Changes are see on   |
 *      |                          |        |    on both object      |
 *      |         anotherAccout    |        |                        |
 *      |--------------------------|        |                        |
 *      |            text          |        |                        |
 *      |--------------------------|        |------------------------|
 *      | strings,numbers,boolean  |        |     Objects, Array     |
 *      | bigInt -> Primitive      |        | funtion->Non-Primitive |
 *      |--------------------------|        |------------------------|
 *
 */