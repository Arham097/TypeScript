// Interfaces////////////////////////////////////////////////////////////////////////////////
interface Person {
  name: string;
  age: number;
  phone: number;
}

// defining an interface that extends another interface
interface Employee extends Person {
  position: string;
}

interface Admin extends Person {
  role: string;
}

function test(obj: Admin): void {
  console.log(obj);
}
test({
  name: "Arham",
  age: 12,
  phone: 1234567890,
  role: "Admin",
});

// defining two interface with same name but different properties
interface User {
  name: string;
}

interface User {
  email: string;
}

// both interfaces will be merged into one interface with properties of both interfaces
function test2(obj: User): void {
  console.log(obj.email, obj.name);
}
test2({ name: "Arham", email: " arhamhasn2@gmail.com" });

// Type Aliases////////////////////////////////////////////////////////////////////////////////

type myValue = number | string | null;

let value: myValue = 10;
let value2: myValue = "Hello";
let value3: myValue = null;
// let value4: myValue = true; // Error as it is not of type myValue
console.log(value, value2, value3);

// Intersection Types///////////////////////////////////////////////////////////////////////////////

type User1 = {
  name: string;
  age: number;
};

type Admin1 = User & {
  getDetails: (name: string) => void;
};

function test3(obj: Admin1): void {
  obj.getDetails(obj.name);
}
