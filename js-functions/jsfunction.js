// Function Declaration
var x = myFunction(4, 3);
console.log(x);
function myFunction(a, b) {
    return a * b;
}

function getInfo() {
    return "hello javatpoint! How r u?";       // Function with Return Value
}
console.log(getInfo());

function sayHello(name, age) {
    console.log(name + " is " + age + " years old.");
}
sayHello("janavi", 23);

// Function Expressions
const f = function (a, b) { return a * b };    // anonymous function
let z = f(3, 6);
console.log(z);

// Function() Constructor
const myFun = new Function("a", "b", "return a * b");
let d = myFun(4, 3);
console.log(d);

var add = new Function("num1", "num2", "return num1+num2");
console.log(add(6, 7));

var pow = new Function("num1", "num2", "return Math.pow(num1,num2)");
console.log((pow(2, 3)));

// Function Hoisting
console.log(myFuncn(5));
function myFuncn(y) {
    return y * y;
}

// Self-Invoking Functions
(function () {
    console.log("Hello! I called myself");
})();

// Functions Can Be Used as Values
function myFunctn(a, b) {
    return a * b;
}
let j = myFunctn(4, 3);
console.log(j);

function myFuncton(a, b) {
    return a * b;
}
let p = myFuncton(4, 3) * 2;
console.log(p);

// properties & methods
function myFuntn(a, b) {
    return arguments.length;
}
console.log(myFuntn(3, 6));

function myArg() {
    console.log(arguments.length);
}
myArg(1, 7, 8);

function myFuncton(a, b) {
    return a * b;
}
let text = myFuncton.toString();
console.log(text);

// Arrow Functions
const h = (x, y) => { return x * y };
console.log(h(5, 5));

// default parameters
function myFn(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
console.log(myFn(4));

// Arguments Object
arg = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(arg);

//Function Invocation
function myFn1(a, b) {
    return a * b;
}
console.log(myFn1(10, 2));                      // Will return 20

// Invoking a Function as a Method
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());               // Will return "John Doe"

// This is a function constructor:
function myFutn(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const myObj = new myFutn("John", "Doe");

console.log(myObj.firstName);                    // This will return "John"

// JS call() method
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "pavan",
    lastName: "koli"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.call(person1));        // This will return "pavan koli":

const persn = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const persn1 = {
    firstName: "pavan",
    lastName: "koli"
}
const persn2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(persn.fullName.call(persn2));         // this will return "mary doe"

//call() method can accept arguments:
const per = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const per1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(per.fullName.call(per1, "Oslo", "Norway"));

// JS apply() method
const pers = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const pers1 = {
    firstName: "pavani",
    lastName: "ganesh"
}

console.log(pers.fullName.apply(pers1));             // This will return "pavani ganesh":

const pern = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const pern1 = {
    firstName: "kumar",
    lastName: "koli"
}

console.log(pern.fullName.apply(pern1, ["odisha", "India"]));

console.log(Math.max(1, 2, 3));                      // Will return 3

console.log(Math.max.apply(null, [1, 2, 3]));        // will return 3

console.log(Math.max.apply(" ", [1, 2, 3]));         // Will also return 3

console.log(Math.max.apply(0, [1, 2, 3]));           // Will also return 3

var arr = [7, 5, 9, 1];
var max = Math.max.apply(null, arr);
console.log(max);

var min = Math.min.apply(null, arr);
console.log(min);

var arry = [1, 2, 3, 4];
var newarry = [5, 6, 7, 8]
arry.push.apply(arry, newarry);
console.log(arry);

var array = [1, 2, 3, 4];
var newarray = ["One", "Two", "Three", "Four"]
array.push.apply(array, newarray);
console.log(array);

// JS Function bind()
const pn = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = pn.fullName.bind(member);   // The member object borrows the fullname method from person:
console.log(fullName());

const psn = {
    firstName: "Jane",
    lastName: "smith",
    display: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(psn.display());

var website = {
    name: "Javatpoint",
    getName: function () {
        return this.name;
    }
}
var unboundGetName = website.getName;
var boundGetName = unboundGetName.bind(website);
console.log((boundGetName()));

//JS closures
function myClosFun() {
    let a = 4;                 // function can access all variables defined inside the function
    return a * a;
}
console.log(myClosFun());

let a = 4;
function myClosFuncn() {
    return a * a;
}
console.log(myClosFuncn());    // function can also access variables defined outside the function

myClosFunctn();
console.log(a * a);
function myClosFunctn() {
    a = 4;                   // Variables created without a declaration keyword (var, let, or const) are always global 
    // even if they are created inside a function.         
}

// Initiate counter
let cnt = 0;
// Function to increment counter
function plus() {
    cnt = cnt + 1;
    return cnt;
}
// Call plus() 3 times
plus();
plus();
plus();
console.log(cnt);

// closures
const greater = (function () {
    let displayCnt = 0;
    return function () {
        displayCnt += 1;
        return displayCnt
    }
})();

console.log(greater());
console.log(greater());
console.log(greater());
