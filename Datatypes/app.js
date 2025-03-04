"use strict";
// Primitive DataTypes
// 1. Number
let num = 10;
console.log(num);
// 2. String
let str = "Hello";
console.log(str);
// 3. Boolean
let isTrue = true;
console.log(isTrue);
// 4. Undefined
let u = undefined;
console.log(u);
// 5. Null
let n = null;
console.log(n);
// Void
function greet() {
    console.log("Hello World");
}
greet();
// Any
let a; // By default it is of type any
a = 10;
a = "Hello";
a.toLowerCase(); // No error as it is of type any
// Unknown
let b;
b = 10;
b = "Hello";
// b.toLowerCase(); // Error as it is of type unknown
if (typeof b === "string") {
    b.toLowerCase();
}
console.log(b);
// // Never
// function throwError(): never {
//   throw new Error();
// }
// throwError();
// Reference DataTypes
// Object
let obj = {
    name: "John",
    age: 25,
};
console.log(obj);
// Array
let arr = [
    1,
    2,
    3,
    4,
    5,
    "Hello",
    { name: "John" },
];
console.log(arr);
// Tuple
let person = [
    "John",
    25,
    { position: "Developer" },
];
console.log(person);
// Enum
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPERADMIN"] = "superadmin";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCode || (StatusCode = {}));
console.log(UserRoles.ADMIN);
console.log(StatusCode.OK);
