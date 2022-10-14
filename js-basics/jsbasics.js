//browser display
console.log("Hello");

//getElementById("").innerHTML
function changeContent() {
    document.getElementById("demo").innerHTML = "paragraph content changed";
}

//variable  declaration and assignment
var x = 10;
var d = 2;
var z = x + d;
//document.write(z);
document.getElementById("demo2").innerHTML = x + d;
console.log(z);
//console.log(x + u);
//var  123=30;                              // Not Possible
//var *aa=320;                             // Not possib;e


//multiple variables in one line
let person = "John", carName = "BMW", price = 200000;

//string concatination 
let h = "5" + 2 + 3;
let t = 5 + 2 + '3';
console.log(h);                            // 523
console.log(t);                            // 73

//declare let variable
let camel;
console.log(camel);                        // undefined
let myVariable = "Bob";
myVariable = "Steve";
console.log(myVariable);

//variable name can be start with $
let $ = 4;
let $$ = 12;
console.log($ + $$);

//variable name can be start with _ 
let _x = 2;

//const variable declaration
const pi = 3.14;

//re-declaring let variable 
let k = "John Doe";
//let k = 0;                            // SyntaxError: 'k' has already been declared

//re-declaring var variable
var J = "John";
var J;
console.log(J);                         // John
var H = "op";
var H = 3;
console.log(H);                        // 3

//block scope of let variable
{
    let F = 2;
    console.log(F);
}

//scope of variables
var m = 2;                           // global
let n = 3;                           // global

{
    let j = 2;                       // block
    let n = 3;                       // block scope  
}

//hoisting
van = "Volvo";
var van;

_x = "xyz";
//let _x;  not possible
let hjk = "yuy";
console.log(hjk); //posiible

//JS const
//------------------

//reassigning the variable
const f = 2;                           // Allowed
//f = 2; not allowed

//creating an constant array:
const cars = ["Saab", "Volvo", "BMW"];
// can change an element of an array:
cars[0] = "Toyota";
//can add an element to the array:
cars.push("Audi");
console.log(cars);

//can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
// can change a property:
car.color = "red";
// can add a property:
car.owner = "Johnson";

//Const hoisting
const carName1 = "Volvo";
console.log(carName1);

//assignment operator
let ass = 10;
ass += 5;
console.log(ass);

//adding strings
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

//arithmetic expression
let a = 2;
let s = (100 + 50) * a;
console.log(s);

let q = 16 + 4 + "Volvo";
console.log(q);

//JS as dynamic datatype
let p;                                     // Now x is undefined
p = 5;                                     // Now x is a Number
p = "John";                                // Now x is a String
console.log(p);

let carName2 = "Volvo XC60";               // Using double quotes
let carName3 = 'Volvo XC60';               // Using single quotes
let x1 = 34.00;                            // Written with decimals
let x2 = 34;                               // Written without decimals

let answer1 = "It's alright";              // Single quote inside double quotes
let answer3 = 'He is called "Johnny"';     // Double quotes inside single quotes

let u = 5;
let v = 5;
let w = 7;
console.log(u == v);                      // checking the equality of two variables
console.log(v == w);                      // checking the equality of two variables

//empty values
let fff = " ";                           // The value is empty, the typeof is "string"
console.log(fff);

//type operator
typeof "";                               // Returns "string"
typeof "John";                           // Returns "string"
typeof "3";                              // Returns "string"
var g = 56;
console.log(typeof (g));                 // Returns number

// JS Functions
//-------------------

function msg() {
    alert("hello! this is message");
}
msg();                                     // invoking the function

function getcube(number) {
    alert(number * number * number);
}
getcube(3);

function getInfo() {
    return "hello javatpoint! How r u?";   // return stmt in function
}
let bn = getInfo();
console.log(bn);

// Function to compute the product of p1 and p2
function myFunction1(p1, p2) {
    return p1 * p2;
}
console.log(myFunction1(22, 4));

let mulp = myFunction(4, 3);             // Function is called, return value will end up in x
console.log(mulp);
function myFunction(a, c) {
    return a * c;                        // Function returns the product of a and b
}

function toCelsius(fahrenheit) {          // function without () will return the function object instead of the function result
    return (5 / 9) * (fahrenheit - 32);
}
let r = toCelsius;
console.log(r);

function sayHello() {
    document.write("Hello there!");
} sayHello();

function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}
//console.log(concatenate("old", "gold"));

function secondFunction() {
    var result;
    result = concatenate('Zara', 'Ali');
    document.write(result);
} secondFunction();

document.write("<br>")
function sayHello1(name, age) {
    document.write(name + " is " + age + " years old.");
} sayHello1("anju", 22);

//JS objects
let emp = { id: 102, name: "Shyam Kumar", salary: 40000 }
console.log(emp);
console.log(emp.salary);                // extracting the property of an object
console.log(emp["name"]);               // extracting the property of an object

//method in JS object
const p1 = {
    firstName: "pavani",
    lastName: "koli",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(p1.fullName());             // extracting the property of an object

let emp1 = {
    id: 102,
    name: "dolly",
    salary: 40000,
    detail: function () {
        return this.id + " " + this.name;
    }
};
console.log(emp1.detail());             // extracting the property of an object 

//JS String
var stringname = "string value";

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let str = "John";
let obj = new String("John");
console.log(typeof (str) + " " + typeof (obj));

var strname = new String("hello javascript string");
console.log(strname);

//using escape char
let txt = "We are the so-called \"Vikings\" from the north.";
console.log(txt);

let txt1 = 'It\'s alright.';
console.log(txt1);

let txt2 = "The character \\ is called backslash.";
console.log(txt2);

const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
console.log(longString);

//String methods
//-------------------------

let strg = "Apple, Banana, Kiwi";
let part = strg.slice(7, 13);
console.log(part);

var s1="abcdefgh";  
var s2=s1.slice(2,5);  
console.log(s2);

var str3 = "Apples are round, and apples are juicy.";
var sliced = str3.slice(3, -2);    
console.log(sliced);