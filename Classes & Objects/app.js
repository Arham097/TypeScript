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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class Definition with Constructor
// Method 1
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var user1 = new NewUser("Arham", 21);
console.log(user1);
// Method 2
var NewUser2 = /** @class */ (function () {
    function NewUser2(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return NewUser2;
}());
var user2 = new NewUser2("Shayan Naqvi", 32);
user2.name = "Shayan";
console.log(user2);
// Access Modifiers (Public, Private, Protected)
var BottleMaker = /** @class */ (function () {
    function BottleMaker(material, size, price) {
        this.material = material;
        this.size = size;
        this.price = price;
    }
    BottleMaker.prototype.getPrice = function () {
        return this.price;
    };
    BottleMaker.prototype.changePrice = function (price) {
        this.price = price;
    };
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker(material, size, price, color) {
        var _this = _super.call(this, material, size, price) || this;
        _this.color = color;
        return _this;
    }
    MetalBottleMaker.prototype.setColor = function (color) {
        this.color = color;
    };
    MetalBottleMaker.prototype.setPrice = function (price) {
        this.price = price;
    };
    return MetalBottleMaker;
}(BottleMaker));
var bottle1 = new BottleMaker("Plastic", 500, 100);
bottle1.material = "Glass"; // Allowed
// bottle1.size = 1000; // Error: Property 'size' is private and only accessible within class 'BottleMaker'.
// bottle1.price = 200 // Error: Property 'price' is protected and only accessible within class 'BottleMaker' and its subclasses.
bottle1.changePrice(200); // Allowed
console.log(bottle1.getPrice());
console.log(bottle1);
// bottle1.price = 300; // Error: Property 'price' is protected and only accessible within class 'BottleMaker' and its subclasses.
var bottle2 = new MetalBottleMaker("Metal", 500, 100, "silver");
bottle2.setPrice(200); // Allowed
bottle2.setColor("Gold"); // Allowed
// 3. Readonly Properties
var Car = /** @class */ (function () {
    function Car(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    return Car;
}());
var BMW = new Car("BMW", 2021, 1000000);
console.log(BMW);
// BMW.model = "Audi"; // Error: Cannot assign to 'model' because it is a read-only property.
// BMW.year = 2022; // Error: Cannot assign to 'year' because it is a read-only property.
BMW.price = 2000000; // Allowed
console.log(BMW);
// 4. Optional Properties
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var p1 = new Person("Arham", 21, "Male");
console.log(p1);
var p2 = new Person("Shayan", 32);
console.log(p2);
// 5. Parameter Properties
// (Parameter Properties are a shorthand way to create and initialize class properties.)
// (Parameter properties are declared by prefixing a constructor parameter with an access modifier.)
var Bike = /** @class */ (function () {
    function Bike(model, price) {
        this.model = model;
        this.price = price;
        this.model = model;
        this.price = price;
    }
    return Bike;
}());
var bike1 = new Bike("Yamaha", 100000);
console.log(bike1);
// 6. Getters and Setters
var Student = /** @class */ (function () {
    function Student(name, _age) {
        this.name = name;
        this._age = _age;
        this.name = name;
        this._age = _age;
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s1 = new Student("Arham", 21);
console.log(s1.age);
s1.age = 22;
console.log(s1.age);
