//Generics
// Genereic function
// Genreic Interface
// Generic Class
// Generics is a way to create reusable components that can work with various types rather than a single type.
// It allows users to define the type of data that they want to work with, without specifying a particular type in the code.
// 1. Generic Function
function displayData(data) {
    return data;
}
console.log(displayData("Hello World"));
console.log(displayData(1000));
console.log(displayData(true));
console.log(displayData(["Hello", "World"]));
console.log(displayData([1, 2, 3, 4, 5]));
console.log(displayData(1000)); // Automatically detect the type of data as number
console.log(displayData("Hello World")); // Automatically detect the type of data as string
function logger(num) {
    console.log(num);
    // return 1000 // Error: Type '1000' is not assignable to type 'T' However 1000 is also a number but it is not assignable to T because T can be any type  not only number
    return 1000; // Type assertion
}
logger(1000);
function displayStudent(st) {
    console.log(st);
}
displayStudent({ id: 1001, name: "John", age: 25 });
// 3. Generic Class
var Human = /** @class */ (function () {
    function Human(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    return Human;
}());
var h1 = new Human("John", 25, 1001);
console.log(h1);
var h2 = new Human("Doe", 30, "1002");
console.log(h2);
