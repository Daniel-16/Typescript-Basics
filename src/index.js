//Basic types
var firstname = "Daniel";
var surname = "Oloruntoba";
console.log(surname);
var condition = false;
if (condition) {
    console.log("Condition is", condition);
}
else {
    console.log("Condition is", condition);
}
var favoriteNumber = 10;
var anyThing = false;
var friends = ["Tolu", "Esther", "Karly", "Temi", "Precious"];
var age = [1, 2, 4, 5];
age.push("13");
console.log(friends);
console.log(age);
//Tuple
var people = [19, "Daniel", true];
//Tuple array
var users;
users = [
    [1, false],
    [4, true],
    [19, true]
];
//Union
var ids = [1, 2, 4];
//Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Right"] = 2] = "Right";
    Directions[Directions["Left"] = 3] = "Left";
})(Directions || (Directions = {}));
console.log("Direction", Directions.Down);
var userDetails = {
    id: 1,
    firstname: "Daniel",
    isActive: true,
    age: 19
};
console.log(userDetails);
//Type Assertion
var cid = 1;
var customerId = cid;
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
var newUser = {
    id: 1,
    age: 19,
    firstname: "Toolz",
    isActive: false
};
newUser.isActive = true;
var add = function (x, y) {
    return x * y;
};
console.log(add(12, 2));
//Classes
//Classes
var Friends = /** @class */ (function () {
    function Friends(id, age, hasFriends, userName) {
        this.id = id;
        this.age = age;
        this.hasFriends = hasFriends;
        this.userName = userName;
    }
    Friends.prototype.register = function () {
        return "".concat(this.userName, " is now registered to the database");
    };
    return Friends;
}());
var daniel = new Friends(1, 19, false, "Daniel");
console.log(daniel.register());
