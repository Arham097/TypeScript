// 1. Type Narrowing
// Type narrowing is a process in which TypeScript narrows down the type of a variable when we check its type.
function printValue(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// 3. Type Narrowing through (instanceof) Operator
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.drive = function () {
        console.log("Driving a car");
    };
    return Cars;
}());
var Bikes = /** @class */ (function () {
    function Bikes() {
    }
    Bikes.prototype.ride = function () {
        console.log("Riding a bike");
    };
    return Bikes;
}());
function getVehicle(vehicle) {
    if (vehicle instanceof Cars) {
        vehicle.drive();
    }
    else if (vehicle instanceof Bikes) {
        vehicle.ride();
    }
}
var c1 = new Cars();
var b1 = new Bikes();
getVehicle(c1);
getVehicle(b1);
