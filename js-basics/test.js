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
//let _x;