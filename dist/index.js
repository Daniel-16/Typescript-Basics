"use strict";
//Basic types
let firstname = "Daniel";
const surname = "Oloruntoba";
console.log(surname);
const condition = false;
if (condition) {
    console.log("Condition is", condition);
}
else {
    console.log("Condition is", condition);
}
let favoriteNumber = 10;
let anyThing = false;
let friends = ["Tolu", "Esther", "Karly", "Temi", "Precious"];
let age = [1, 2, 4, 5];
age.push("13");
console.log(friends);
console.log(age);
//Tuple
let people = [19, "Daniel", true];
//Tuple array
let users;
users = [
    [1, false],
    [4, true],
    [19, true]
];
//Union
let ids = [1, 2, 4];
//Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Right"] = 2] = "Right";
    Directions[Directions["Left"] = 3] = "Left";
})(Directions || (Directions = {}));
console.log("Direction", Directions.Down);
const userDetails = {
    id: 1,
    firstname: "Daniel",
    isActive: true,
    age: 19
};
console.log(userDetails);
//Type Assertion
let cid = 1;
let customerId = cid;
customerId = "";
//Types in functions
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(12, 133));
//Function without a return type
function log(message) {
    console.log(message);
}
log("Hello");
const newUser = {
    id: 1,
    age: 19,
    firstname: "Toolz",
    isActive: false,
};
newUser.isActive = true;
const add = (x, y) => {
    return x * y;
};
console.log(add(12, 2));
//Classes
//Classes
class Friends {
    constructor(id, age, hasFriends, userName) {
        this.id = id;
        this.age = age;
        this.hasFriends = hasFriends;
        this.userName = userName;
    }
    register() {
        return `${this.userName} is now registered to the database`;
    }
}
const daniel = new Friends(1, 19, false, "Daniel");
console.log(daniel.register());
console.log(daniel);
//Subclasses
class Employee extends Friends {
    constructor(id, age, hasFriends, userName, position) {
        super(id, age, hasFriends, userName);
        this.position = position;
    }
}
const emp = new Employee(2, 23, true, "Richard", "Front end developer");
console.log(emp);
class Siblings extends Employee {
    constructor(id, age, hasFriends, userName, position) {
        super(id, age, hasFriends, userName, position);
    }
}
const brother = new Siblings(1, 26, true, "Anthony", "First born");
console.log(brother);
//Generics. Used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 5]);
let strArray = getArray(["Daniel", "Toolz", "Karly"]);
numArray.push(200);
strArray.push("Temi");
console.log(numArray, strArray);
