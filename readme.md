# TypeScript Basics Repository

This repository serves as an introductory guide to TypeScript, covering its fundamental concepts through well-structured sections. Each section contains TypeScript code demonstrating different concepts, making it easy for beginners to learn.

## Table of Contents

1. [Data Types](#data-types)
2. [Type Inference and Type Annotations](#type-inference-and-type-annotations)
3. [Interfaces and Type Aliases](#interfaces-and-type-aliases)
4. [Classes and Objects](#classes-and-objects)

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
Parameter Properties are a shorthand way to create and initialize class properties.
Parameter properties are declared by prefixing a constructor parameter with an access modifier.

```typescript
class Bike {
  constructor(public model: string, private price: number) {
    this.model = model;
    this.price = price;
  }
}
```


### **Getters and Setters**

Encapsulate access to properties. Example:

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

Belong to the class itself, not instances, Can access directly through class name  Example:

```typescript
class Circle {
  static pi: number = 3.14;
}
console.log(Circle.pi);
```

### **Abstract Classes and Methods**

Used as blueprints for other classes. Example:

```typescript
abstract class Payment {
  constructor(public amount: number, public account: number) {}
}
class CreditCard extends Payment {
  constructor(amount: number, account: number, public cardNumber: number) {
    super(amount, account);
    this.cardNumber = cardNumber;
  }
}

```

---

## Conclusion

This repository provides an easy-to-follow introduction to TypeScript. Each section builds upon the previous concepts, making learning TypeScript smooth and structured. Explore the provided code snippets to reinforce your understanding!

