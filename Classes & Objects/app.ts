// Classes and Objects
// Class Definition
// Constructor
// Access Modifiers (Public, Private, Protected)
// Readonly Properties
// Optional Properties
// Parameter Properties
// Getters and Setters
// Static members
// Abstract Classes and Methods

// 1. Class Definition with Constructor

// Method 1
class NewUser {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new NewUser("Arham", 21);
console.log(user1);

// Method 2
class NewUser2 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}
const user2 = new NewUser2("Shayan Naqvi", 32);
user2.name = "Shayan";
console.log(user2);

// 2. Access Modifiers (Public, Private, Protected)

class BottleMaker {
  public material: string;
  private size: number;
  protected price: number;
  constructor(material: string, size: number, price: number) {
    this.material = material;
    this.size = size;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
  changePrice(price: number): void {
    this.price = price;
  }
}

class MetalBottleMaker extends BottleMaker {
  constructor(
    material: string,
    size: number,
    price: number,
    public color: string
  ) {
    super(material, size, price);
  }
  setColor(color: string): void {
    this.color = color;
  }
  setPrice(price: number): void {
    this.price = price;
  }
}

const bottle1 = new BottleMaker("Plastic", 500, 100);
bottle1.material = "Glass"; // Allowed
// bottle1.size = 1000; // Error: Property 'size' is private and only accessible within class 'BottleMaker'.
// bottle1.price = 200 // Error: Property 'price' is protected and only accessible within class 'BottleMaker' and its subclasses.
bottle1.changePrice(200); // Allowed
console.log(bottle1.getPrice());
console.log(bottle1);
// bottle1.price = 300; // Error: Property 'price' is protected and only accessible within class 'BottleMaker' and its subclasses.

const bottle2 = new MetalBottleMaker("Metal", 500, 100, "silver");
bottle2.setPrice(200); // Allowed
bottle2.setColor("Gold"); // Allowed

// 3. Readonly Properties

class Car {
  constructor(
    public readonly model: string,
    public readonly year: number,
    public price: number
  ) {
    this.model = model;
    this.year = year;
    this.price = price;
  }
}
const BMW = new Car("BMW", 2021, 1000000);
console.log(BMW);
// BMW.model = "Audi"; // Error: Cannot assign to 'model' because it is a read-only property.
// BMW.year = 2022; // Error: Cannot assign to 'year' because it is a read-only property.
BMW.price = 2000000; // Allowed
console.log(BMW);

// 4. Optional Properties

class Person {
  constructor(public name: string, public age: number, public gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const p1 = new Person("Arham", 21, "Male");
console.log(p1);
const p2 = new Person("Shayan", 32);
console.log(p2);

// 5. Parameter Properties
// (Parameter Properties are a shorthand way to create and initialize class properties.)
// (Parameter properties are declared by prefixing a constructor parameter with an access modifier.)
class Bike {
  constructor(public model: string, private price: number) {
    this.model = model;
    this.price = price;
  }
}

const bike1 = new Bike("Yamaha", 100000);
console.log(bike1);

// 6. Getters and Setters

class Student {
  constructor(public name: string, private _age: number) {
    this.name = name;
    this._age = _age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
const s1 = new Student("Arham", 21);
console.log(s1.age);
s1.age = 22;
console.log(s1.age);

// 7. Static Members
//(Static members are properties and methods that belong to the class itself, not to its instances.)
//(Static members are accessed using the class name.)
class Circle {
  static pi: number = 3.14;
  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

Circle.calculateArea(6); // 113.04
console.log(Circle.pi);

// 8. Abstract Classes and Methods
//(Abstract classes are classes that cannot be instantiated.)
//(Abstract methods are methods that must be implemented in derived classes.)

abstract class Payment {
  constructor(public amount: number, public account: number) {
    this.amount = amount;
    this.account = account;
  }
}
class CreditCard extends Payment {
  constructor(amount: number, account: number, public cardNumber: number) {
    super(amount, account);
    this.cardNumber = cardNumber;
  }
}

const payment = new CreditCard(1000, 1234567890, 1234567890123456);
console.log(payment);
// const payment1 = new Payment(1000, 1234567890); // Error: Cannot create an instance of an abstract class.
