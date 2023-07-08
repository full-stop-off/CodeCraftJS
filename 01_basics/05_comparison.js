// Comparison Opeators => Return either TRUE or FALSE

// Same DataTypes => Basic
// On Numbers
console.log(4 > 8); // false
console.log(4 >= 8); // false
console.log(4 < 8); // true
console.log(4 <= 8); //true
console.log(4 == 8); // false
console.log(4 != 8); // true

// On Strings
console.log("admin" == "Admin"); // false
console.log("admin" == "admin"); // true
console.log("admin" > "ADMIN"); // true

// On Boolean
console.log(false == 0); // true
console.log(true == 1); // true

// Different DataTypes => Confusing, Avoid or Double Check
// On Stings & Numbers => UnPredictable Results
console.log("2" > 1); // true => Convert "2" into ASCII
console.log("02" > 1); // true
console.log("02" < 1); // false
console.log("02" == 1); // false
console.log("2" == 2); // true => worked  differ

// On Null => Equality check and Comparison works differ => NaN or 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true => worked differ
console.log(null != 0); // true

// On Undefined
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined != 0); // true

// '===' -> Checks DataTypes and Equality => Strict Check
console.log("1" == 1); // true
console.log("1" === 1); // false
