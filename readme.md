# TypeScript Basics Repository

This repository serves as an introductory guide to TypeScript, covering its fundamental concepts through well-structured sections. Each section contains TypeScript code demonstrating different concepts, making it easy for beginners to learn.

## Table of Contents

1. [Data Types](#data-types)
2. [Type Inference and Type Annotations](#type-inference-and-type-annotations)
3. [Interfaces and Type Aliases](#interfaces-and-type-aliases)
4. [Classes and Objects](#classes-and-objects)
5. [Functions](#functions)
6. [Generics](#generics)
7. [Type Narrowing](#type-narrowing)

---

## 1. Data Types

TypeScript provides both **primitive** and **reference** data types. This section covers:

### **Primitive Data Types**

- `number` - Example: `let num: number = 10;`
- `string` - Example: `let str: string = "Hello";`
- `boolean` - Example: `let isTrue: boolean = true;`
- `undefined` - Example: `let u: undefined = undefined;`
- `null` - Example: `let n: null = null;`
- `void` - Used in functions that do not return a value.
- `any` - Allows any type, but reduces TypeScript's effectiveness.
- `unknown` - Safer alternative to `any`, requiring type checking before use.
- `never` - Represents values that never occur (e.g., functions that always throw an error).

### **Reference Data Types**

- **Objects** - Example: `{ name: "John", age: 25 }`
- **Arrays** - Example: `[1, "Hello", { name: "John" }]`
- **Tuples** - Example: `["John", 25, { position: "Developer" }]`
- **Enums** - Example: `enum UserRoles { ADMIN, GUEST, SUPERADMIN }`

---

## 2. Type Inference and Type Annotations

### **Type Inference**

TypeScript can automatically determine types based on assigned values. Example:

```typescript
let number1 = 10; // Inferred as number
let msg1 = "Hello"; // Inferred as string
```

### **Type Annotations**

Explicitly specify types for variables. Example:

```typescript
let number2: number = 10;
let msg2: string = "Hello";
```

---

## 3. Interfaces and Type Aliases

### **Interfaces**

Used to define object structure and can be extended. Example:

```typescript
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  position: string;
}
```

### **Type Aliases**

Used to define custom types. Example:

```typescript
type myValue = number | string | null;
let value: myValue = "Hello";
```

### **Intersection Types**

Combining multiple types. Example:

```typescript
type User = { name: string; age: number };
type Admin = User & { getDetails: (name: string) => void };
```

---

## 4. Classes and Objects

### **Class Definition and Constructor**

```typescript
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const user1 = new User("Arham", 21);
```

### **Access Modifiers**

- `public` - Accessible everywhere.
- `private` - Accessible only within the class.
- `protected` - Accessible within the class and subclasses.

Example:

```typescript
class BottleMaker {
  public material: string;
  private size: number;
  protected price: number;
}
```

### **Readonly Properties**

Prevents reassignment after initialization. Example:

```typescript
class Car {
  public readonly model: string;
  constructor(model: string) {
    this.model = model;
  }
}
```

### **Optional Properties**

Example:

```typescript
class Person {
  constructor(public name: string, public age: number, public gender?: string) {}
}
```

### **Parameter Properties**

```typescript
class Bike {
  constructor(public model: string, private price: number) {}
}
```

### **Getters and Setters**

```typescript
class Student {
  private _age: number;
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}
```

### **Static Members**

```typescript
class Circle {
  static pi: number = 3.14;
}
console.log(Circle.pi);
```

### **Abstract Classes and Methods**

```typescript
abstract class Payment {
  constructor(public amount: number, public account: number) {}
}
class CreditCard extends Payment {
  constructor(amount: number, account: number, public cardNumber: number) {
    super(amount, account);
  }
}
```

---

## 5. Functions

### **Function and Function Types**

### **void**
```typescript
function greeting(): void {
  console.log("Hello world");
}
```
### **number**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
add(10, 20);
```
### **string**
```typescript
function fullName(fname: string, lname: string): string {
  return fname + " " + lname;
}
fullName("John", "Doe");
```

### **boolean**
```typescript
function isEven(num: number): boolean {
  return num % 2 == 0;
}

isEven(4);
```

### **Default Parameters**

```typescript
function multiply(a: number, b: number = 10): number {
  return a * b;
}
```
### **Optional Parameters**

```typescript
function Address(city: string, state: string, zipCode?: number) {
  console.log(city, state, zipCode);
}
Address("New York", "NY", 10001); // New York NY 10001
Address("New York", "NY"); // New York NY undefined
```

### **Rest Parameters**

`Rest parameters` are used to pass a variable number of arguments to a function.
The `rest parameter` syntax allows us to represent an indefinite number of arguments as an array.


```typescript
function sum(...args: number[]): number {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
```

### **Overloading**

`Overloading` is a feature that allows a single function to have different signatures.
The signature of a function is represented by the number of its parameters and their types.


```typescript
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
```

---

## 6. Generics

`Generics` in TypeScript allow creating reusable and flexible components by enabling types to be passed as parameters. They help maintain type safety while allowing `functions`, `interfaces`, and `classes` to work with multiple data types dynamically.

### **Generic Function**

```typescript
function displayData<T>(data: T): T {
  return data;
}
console.log(displayData<string>("Hello World"));
console.log(displayData(1000)); // Automatically detect the type of data as number

```

### **Generic Interface**

```typescript
interface Students<T> {
  id: T;
  name: string;
  age: number;
}
function displayStudent(st: Students<number>) {
  console.log(st);
}
displayStudent({ id: 1001, name: "John", age: 25 });
```

### **Generic Class**

```typescript
class Human<T> {
  constructor(public name: string, public age: number, public id: T) {}
}
const h1 = new Human<number>("John", 25, 1001);
const h2 = new Human<string>("Doe", 30, "1002");
```

---

## 7. Type Narrowing

`Type narrowing` in TypeScript means figuring out the exact type of a variable at runtime. It helps make code safer by allowing only valid operations based on the detected type.

### **Using typeof**

The `typeof` operator in TypeScript is used for type narrowing by checking the runtime type of a variable. It is commonly used with primitive types like `string`, `number`, and `boolean` to execute type-specific logic.

```typescript
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}
```

### **Using in Operator**

The `in` operator is used in TypeScript for type narrowing by checking if a specific property exists within an object. It helps differentiate between object types in a union type scenario.

```typescript
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
```

### **Using instanceof Operator**

The `instanceof` operator in TypeScript is used to check whether an object is an instance of a specific class or constructor function.


```typescript
class Cars {
  drive() {
    console.log("Driving a car");
  }
}

class Bikes {
  ride() {
    console.log("Riding a bike");
  }
}

function getVehicle(vehicle: Cars | Bikes) {
  if (vehicle instanceof Cars) {
    vehicle.drive();
  } else if (vehicle instanceof Bikes) {
    vehicle.ride();
  }
}

let c1 = new Cars();
let b1 = new Bikes();
getVehicle(c1);
getVehicle(b1);
```

## Conclusion

This repository provides an easy-to-follow introduction to TypeScript. Each section builds upon the previous concepts, making learning TypeScript smooth and structured. Explore the provided code snippets to reinforce your understanding!

