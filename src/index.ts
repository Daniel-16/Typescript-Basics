//Basic types
let firstname: string = "Daniel";
const surname: string = "Oloruntoba";
console.log(surname)
const condition: boolean = false;
if (condition) {
    console.log("Condition is", condition)
} else {
    console.log("Condition is", condition)
}
let favoriteNumber: number = 10
let anyThing: any = false
let friends: string[] = ["Tolu", "Esther", "Karly", "Temi", "Precious"]
let age: any[] = [1, 2, 4, 5]
age.push("13")
console.log(friends)
console.log(age)

//Tuple
let people: [number, string, boolean] = [19, "Daniel", true]
//Tuple array
let users: [number, boolean][]
users = [
    [1, false],
    [4, true],
    [19, true]
]

//Union
let ids: string[] | number[] = [1, 2, 4]

//Enum
enum Directions {
    Up,
    Down,
    Right,
    Left
}
console.log("Direction", Directions.Down)

//Objects
type User = {
    id: number, 
    firstname: string, 
    isActive: boolean, 
    age: number
}
const userDetails: User = {
    id: 1,
    firstname: "Daniel",
    isActive: true,
    age: 19
}

console.log(userDetails);

//Type Assertion
let cid: any = 1
let customerId = <string>cid
customerId = ""

//Types in functions
function addNumbers(x: number, y:number): number {
    return x + y;
}
console.log(addNumbers(12, 133))
//Function without a return type
function log(message:string | number): void {
    console.log(message)
}
log("Hello")

//Interfaces
interface UserInterface {
    id: number,
    age: number,
    firstname: string,
    isActive: boolean,
    lastname?: string
}
 const newUser: UserInterface = {
     id: 1,
     age: 19,
     firstname: "Toolz",
     isActive: false,
 }
newUser.isActive = true

//Interface as in a function
interface MathFunction {
    (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number): number => {
    return x * y
}
console.log(add(12, 2))

//Classes
//Classes
class Friends {
    id: number;
    age: number;
    hasFriends: boolean;
    userName: string
    constructor(id: number, age: number, hasFriends: boolean, userName: string) {
        this.id = id;
        this.age = age;
        this.hasFriends = hasFriends;
        this.userName = userName
    }
    register() {
        return `${this.userName} is now registered to the database`
    }
}
const daniel = new Friends(1, 19, false, "Daniel")
console.log(daniel.register())
console.log(daniel);

//Subclasses
class Employee extends Friends {
    position: string
    constructor(id: number, age: number, hasFriends: boolean, userName: string, position: string) {
        super(id, age, hasFriends, userName)
        this.position = position;
    }
}

const emp = new Employee(2, 23, true, "Richard", "Front end developer")
console.log(emp)

class Siblings extends Employee {
    constructor(id: number, age: number, hasFriends: boolean, userName: string, position: string) {
        super(id, age, hasFriends, userName, position)
    }
}

const brother = new Siblings(1, 26, true, "Anthony", "First born")
console.log(brother);

//Generics. Used to build reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1, 2, 3, 5])
let strArray = getArray<string>(["Daniel", "Toolz", "Karly"])

numArray.push(200);
strArray.push("Temi")
console.log(numArray, strArray);