// 1. Type Narrowing
// Type narrowing is a process in which TypeScript narrows down the type of a variable when we check its type.

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else if (typeof val === "number") {
    console.log(val.toFixed(2));
  }
}

// 2. Type Narrowing through (in) Operator
// The in operator is used to check if a property exists in an object or not.

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// 3. Type Narrowing through (instanceof) Operator

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
