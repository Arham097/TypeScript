//Generics
// Genereic function
// Genreic Interface
// Generic Class

// Generics is a way to create reusable components that can work with various types rather than a single type.
// It allows users to define the type of data that they want to work with, without specifying a particular type in the code.

// 1. Generic Function
function displayData<T>(data: T): T {
  return data;
}
console.log(displayData<string>("Hello World"));
console.log(displayData<number>(1000));
console.log(displayData<boolean>(true));
console.log(displayData<string[]>(["Hello", "World"]));
console.log(displayData<number[]>([1, 2, 3, 4, 5]));
console.log(displayData(1000)); // Automatically detect the type of data as number
console.log(displayData("Hello World")); // Automatically detect the type of data as string

function logger<T>(num: T): T {
  console.log(num);
  // return 1000 // Error: Type '1000' is not assignable to type 'T' However 1000 is also a number but it is not assignable to T because T can be any type  not only number
  return 1000 as T; // Type assertion
}
logger<number>(1000);

// 2. Generic Interface

interface Students<T> {
  id: T;
  name: string;
  age: number;
}

function displayStudent(st: Students<number>) {
  console.log(st);
}
displayStudent({ id: 1001, name: "John", age: 25 });

// 3. Generic Class

class Human<T> {
  constructor(public name: string, public age: number, public id: T) {}
}
const h1 = new Human<number>("John", 25, 1001);
const h2 = new Human<string>("Doe", 30, "1002");
console.log(h1);
console.log(h2);
