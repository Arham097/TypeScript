// Function and Funtion Types
// Default Parameters and Optional Parameters
// Rest Parameters
// Overloading
// 1. Funtion and Function Types
// Void Type
function greeting() {
    console.log("Hello world");
}
greeting();
// Number Type
function add(a, b) {
    return a + b;
}
add(10, 20);
// String Type
function fullName(fname, lname) {
    return fname + " " + lname;
}
fullName("John", "Doe");
// Boolean Type
function isEven(num) {
    return num % 2 == 0;
}
isEven(4);
// 2. Default Parameters and Optional Parameters
// Default Parameters
function multiply(a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
}
console.log(multiply(5)); // 50 because b is 10 by default
console.log(multiply(5, 20)); // 100 because b is 20
// Optional Parameters
function Address(city, state, zipCode) {
    console.log(city, state, zipCode);
}
Address("New York", "NY", 10001); // New York NY 10001
Address("New York", "NY"); // New York NY undefined
// 3. Rest Parameters
// Rest parameters are used to pass a variable number of arguments to a function.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        total += i;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
function displayValue(value) {
    if (typeof value === "string") {
        value = value.toUpperCase();
        console.log("The value is a string: ".concat(value));
    }
    else if (typeof value === "number") {
        value = value.toFixed(2);
        console.log("The value is a number: ".concat(value));
    }
}
displayValue("Hello World");
displayValue(1000);
