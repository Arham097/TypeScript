function test(obj) {
    console.log(obj);
}
test({
    name: "Arham",
    age: 12,
    phone: 1234567890,
    role: "Admin",
});
// both interfaces will be merged into one interface with properties of both interfaces
function test2(obj) {
    console.log(obj.email, obj.name);
}
test2({ name: "Arham", email: " arhamhasn2@gmail.com" });
var value = 10;
var value2 = "Hello";
var value3 = null;
// let value4: myValue = true; // Error as it is not of type myValue
console.log(value, value2, value3);
function test3(obj) {
    obj.getDetails(obj.name);
}
