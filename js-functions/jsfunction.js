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

function myArg() {
    console.log(arguments.length);
}
myArg(1, 7, 8);

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
console.log(myFn1(10, 2));           // Will return 20

// Invoking a Function as a Method
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();             // Will return "John Doe"
