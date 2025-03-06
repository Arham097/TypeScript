// Function and Funtion Types
// Default Parameters and Optional Parameters
// Rest Parameters
// Overloading

// 1. Funtion and Function Types

// Void Type
function greeting(): void {
  console.log("Hello world");
}
greeting();

// Number Type
function add(a: number, b: number): number {
  return a + b;
}
add(10, 20);

// String Type
function fullName(fname: string, lname: string): string {
  return fname + " " + lname;
}
fullName("John", "Doe");

// Boolean Type
function isEven(num: number): boolean {
  return num % 2 == 0;
}

isEven(4);

// 2. Default Parameters and Optional Parameters

// Default Parameters

function multiply(a: number, b: number = 10): number {
  return a * b;
}
console.log(multiply(5)); // 50 because b is 10 by default
console.log(multiply(5, 20)); // 100 because b is 20

// Optional Parameters

function Address(city: string, state: string, zipCode?: number) {
  console.log(city, state, zipCode);
}
Address("New York", "NY", 10001); // New York NY 10001
Address("New York", "NY"); // New York NY undefined

// 3. Rest Parameters
// Rest parameters are used to pass a variable number of arguments to a function.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function sum(...args: number[]): number {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// 4. Overloading
// Overloading is a feature that allows a single function to have different signatures.
// The signature of a function is represented by the number of its parameters and their types.


function displayValue(value: string): void;
function displayValue(value: number): void;

function displayValue(value: any): void {
  if (typeof value === "string") {
    value = value.toUpperCase(); 
    console.log(`The value is a string: ${value}`);
  } else if (typeof value === "number") {
    value = value.toFixed(2);
    console.log(`The value is a number: ${value}`);
  }
}
displayValue("Hello World");
displayValue(1000);
