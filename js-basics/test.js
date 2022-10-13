//msg web console
console.log("Hello");

//getElementById("").innerHTML
function changeContent() {
    document.getElementById("demo").innerHTML = "paragraph content changed";
}

//variable  declaration and assignment
var x = 10;
var u = 2;
var z = x + u;
//document.write(z);
document.getElementById("demo2").innerHTML = x + u;
console.log(z); 
//console.log(x + u);
//multiple variables in one line
let person = "John", carName = "BMW", price = 200000;

//string concatination 
let h = "5" + 2 + 3; 
let t = 5 + 2 + '3';
console.log(h); //523
console.log(t); //73
//declare let var
let camel;
console.log(camel);
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
//let k = 0; // SyntaxError: 'k' has already been declared
//re-declaring var variable
var J = "John";
var J;
console.log(J);//John
var H = "op";
var H = 3;
console.log(H);//3
//block scope of let variable
{
    let F = 2;
    console.log(F);
}
//scope of variables
var m = 2;   // global
let n = 3;   // global

{
let j = 2;  //block
let n = 3; // block scope  
}
//hoisting
van = "Volvo";
var van;

_x = "xyz";
//let _x;  not possible
let hjk =  "yuy"; 
console.log(hjk);

//JS const
//------------------
//reassigning the variable
const f = 2;     // Allowed
//x = 2; not allowed
//creating an constant array:
const cars = ["Saab", "Volvo", "BMW"];
// can change an element of an array:
cars[0] = "Toyota";
//can add an element to the array:
cars.push("Audi");
console.log(cars);
//can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
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
let p;           // Now x is undefined
p = 5;           // Now x is a Number
p = "John";      // Now x is a String
console.log(p);
let carName2 = "Volvo XC60";   // Using double quotes
let carName3 = 'Volvo XC60';   // Using single quotes
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"


