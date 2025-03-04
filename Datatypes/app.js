// Primitive DataTypes
// 1. Number
var num = 10;
console.log(num);
// 2. String
var str = "Hello";
console.log(str);
// 3. Boolean
var isTrue = true;
console.log(isTrue);
// 4. Undefined
var u = undefined;
console.log(u);
// 5. Null
var n = null;
console.log(n);
// Void
function greet() {
    console.log("Hello World");
}
greet();
// Any
var a; // By default it is of type any
// Unknown
var b;
b = "Hello";
console.log(b);
// Array
var arr = [
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
var person = [
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
