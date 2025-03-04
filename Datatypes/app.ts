// Primitive DataTypes
// 1. Number
let num: number = 10;
console.log(num);

// 2. String
let str: string = "Hello";
console.log(str);

// 3. Boolean
let isTrue: boolean = true;
console.log(isTrue);

// 4. Undefined
let u: undefined = undefined;
console.log(u);

// 5. Null
let n: null = null;
console.log(n);

// Void
function greet(): void {
  console.log("Hello World");
}
greet();

// Any
let a; // By default it is of type any
a = 10;
a = "Hello";

a.toLowerCase(); // No error as it is of type any

// Unknown
let b: unknown;
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
let obj: { name: string; age: number } = {
  name: "John",
  age: 25,
};
console.log(obj);

// Array
let arr: (number | string | { name: string })[] = [
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
let person: [string, number, { position: string }] = [
  "John",
  25,
  { position: "Developer" },
];
console.log(person);

// Enum

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPERADMIN = "superadmin",
}

enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}
console.log(UserRoles.ADMIN);
console.log(StatusCode.OK);
