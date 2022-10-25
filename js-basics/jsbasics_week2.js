
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

//slice()
let strg = "Apple, Banana, Kiwi";
let part = strg.slice(7, 13);
console.log(part);

var s1 = "abcdefgh";
var s2 = s1.slice(2, 5);
console.log(s2);

var str3 = "Apples are round, and apples are juicy.";
var sliced = str3.slice(3, -2);
console.log(sliced);

let str4 = "Apple, Banana, Kiwi";
let part1 = str4.slice(-12, -6)
let part3 = str4.slice(-12);
console.log(part1);
console.log(part3);

let part2 = str4.slice(7);
console.log(part2);

document.write("<br />")
var str5 = "Javatpoint";
document.write(str5.slice(4));
var part4 = str5.slice(-4);
console.log(part4);
console.log((str5.slice(-5, -1)));

//substring()
let str6 = "Apple, Banana, Kiwi";
let part5 = str6.substring(7, 13);
console.log(part5);

var str7 = "Apples are round, and apples are juicy.";
console.log((str7.substring(1, 2)));
console.log((str7.substring(0, 10)));
console.log((str7.substring(5)));

var str8 = "Javatpoint";
console.log((str8.substring(5)));

var str9 = "Javatpoint";
console.log((str9.substring()));

//substr()
let str10 = "Apple, Banana, Kiwi";
console.log(str10.substr(7, 6));

let str11 = "Apple, Banana, Kiwi";
console.log(str11.substr(7));

let str12 = "Apple, Banana, Kiwi";
console.log(str12.substr(-4));

var str13 = "Apples are round, and apples are juicy.";
console.log((str13.substr(1, 2)));
console.log((str13.substr(-2, 2)));
console.log((str13.substr(1)));
console.log((str13.substr(-20, 2)));
console.log((str13.substr(20, 2)));

var str14 = "Javatpoint";
console.log((str14.substr(0, 4)));
console.log((str14.substr(5, 5)));
console.log((str14.substr(5)));
console.log((str14.substr()));
console.log((str14.substr(-5, 5)));

//replace()
let text4 = "Please visit Microsoft!";
let newText = text4.replace("Microsoft", "W3Schools");
console.log(newText);

let text5 = "Please visit Microsoft!";
let newText1 = text5.replace(/MICROSOFT/i, "W3Schools");
console.log(newText1);

let text6 = "Please visit Microsoft and Microsoft!";
let newText2 = text6.replace(/Microsoft/g, "W3Schools");
console.log(newText2);

var str15 = "Apples are round, and apples are juicy.";
var re = /apples/gi;
var newstr = str15.replace(re, "oranges");
console.log(newstr);

var re = /(\w+)\s(\w+)/;
var str16 = "zara ali";
var newstr1 = str16.replace(re, "$2, $1");
console.log(newstr1);

var str17 = "Javatpoint";
console.log((str17.replace("tpoint", "Script")));

document.write("<br />")
var str18 = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
document.write(str18.replace(/Node.js/g, "AngularJS"));

document.write("<br />")
document.writeln(str18.replace(/Node.js/, "AngularJS")); //It will replace only first match  

document.write("<br />")
document.writeln(str18.replace(/Node.JS/g, "AngularJS"));  //replace() method is case-sensitive

document.write("<br />")
document.writeln(str18.replace(/Node.JS/gi, "AngularJS"));  //ignore case-sensitive behaviour of replace() method by using ignore flag modifier

//toUpperCase()
let text8 = "Hello World!";
let text9 = text8.toUpperCase();
console.log(text9);

document.write("<br />")
var str19 = "Apples are round, and Apples are Juicy.";
document.write(str19.toUpperCase());

var str20 = "javatpoint";
console.log((str20.toUpperCase()));

var str21 = "javatpoint TUTORIALS";
console.log((str21.toUpperCase()));

//toLowerCase()
let text10 = "Hello World!";       // String
let text11 = text10.toLowerCase();  // text11 is text10 converted to lower
console.log(text11);

var str22 = "JAVATPOINT";
console.log((str22.toLowerCase()));

var str23 = "JAVATPOINT tutorials";
console.log((str23.toLowerCase()));

//concat()
let txt3 = "Hello";
let txt4 = "World";
let txt5 = txt3.concat(" ", txt4);
console.log(txt5);

txt6 = "Hello".concat(" ", "World!");
console.log(txt6);

var txt7 = "Javatpoint";
var txt8 = ".com";
console.log(txt7.concat(txt8));

var txt9 = "Javatpoint";
var txt10 = ".com";
var txt11 = " Tutorials";
console.log(txt9.concat(txt10, txt11));
console.log(txt9.concat(txt10 + "" + txt11));

var str24 = new String("This is string one");
var str25 = new String("This is string two");
var str26 = str24.concat(str25);
console.log("Concatenated String :" + str26);

//trim()
let txt27 = "      Hello World!      ";
let txt28 = txt27.trim();                          //both sides of whitespace
console.log(txt28);
console.log(txt27.trimStart());
console.log(txt27.trimEnd());

//padding methods
let txt29 = "5";
let padded = txt29.padStart(4, "x");
console.log(padded);

let txt30 = "5";
console.log(txt30.padStart(4, "0"));

let numb = 5;
let txt31 = numb.toString();
console.log(txt31.padStart(4, "0"));

let txt32 = "5";
let padded2 = txt32.padEnd(4, "x");
console.log(padded2);

let txt33 = "5";
console.log(txt33.padEnd(4, "0"));

//extract string characters
let txt34 = "HELLO WORLD";
let char = txt34.charAt(0);
console.log(char);

var str27 = "Javatpoint";
console.log(str27.charAt(4));

console.log(str27.charAt());                 //print first character  

console.log(str27.charAt(str27.length - 1));

var str28 = new String("This is string");
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

let txt35 = "HELLO WORLD";
let char1 = txt35.charCodeAt(0);
console.log(char1);
console.log(txt35[0]);

var str29 = new String("This is string");
console.log(str29.charCodeAt(0));
console.log(str29.charCodeAt(1));
console.log(str29.charCodeAt(2));
console.log(str29.charCodeAt(3));
console.log(str29.charCodeAt(4));
console.log(str29.charCodeAt(5));

var s3 = "Javatpoint";
console.log(s3.charCodeAt(3));
console.log(s3.charCodeAt());
console.log(s3.charCodeAt(x.length - 1));
console.log(s3.charCodeAt(12));



txt35.split(",")    // Split on commas
txt35.split(" ")    // Split on spaces
txt35.split("|")    // Split on pipe

//string searching 
let str30 = "Please locate where 'locate' occurs!";
console.log(str30.indexOf("locate"));
console.log(str30.lastIndexOf("locate"));
console.log(str30.lastIndexOf("John"));
console.log(str30.indexOf("locate", 15));
console.log(str30.lastIndexOf("locate", 15));
console.log(str30.search("locate"));

var web = "Learn JavaScript on Javatpoint";
console.log((web.indexOf('a')));
console.log(web.indexOf('a', 3));
console.log(web.indexOf("Java"));
console.log(web.indexOf("Java", 7));
console.log(web.indexOf("java"));
console.log(web.lastIndexOf('a'));
console.log(web.lastIndexOf("Java"));
console.log(web.lastIndexOf("Java", 19));
console.log(web.lastIndexOf("java"));

var str31 = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str31.search("scripting"));
console.log(str31.search(/Scripting/));
console.log(str31.search(/Javatpoint/));

let txt36 = "The rain in SPAIN stays mainly in the plain";
console.log(txt36.match(/ain/g));
console.log(txt36.match(/ain/gi));
console.log(txt36.includes("rain"));
console.log(txt36.includes("world", 12));

var str32 = "Javatpoint";
console.log(str32.match("Java"));
console.log(str32.match(/java/g));
console.log(str32.match(/java/gi));
console.log(str32.match(/[a-p]/));              //return the first match  

let txt37 = "Hello world, welcome to the universe.";

console.log(txt37.startsWith("Hello"));
console.log(txt37.startsWith("world"));       // Returns false
console.log(txt37.startsWith("world", 5));    // Returns false
console.log(txt37.startsWith("world", 6));    //return true

let txt38 = "John Doe";
console.log(txt38.endsWith("Doe"));

//creating an array
const cars1 = [];
cars1[0] = "Saab";
cars1[1] = "Volvo";
cars1[2] = "BMW";
console.log(cars1);

const cars2 = new Array("Saab", "Volvo", "BMW");      // using new 

//accessing elements
const cars3 = ["Saab", "Volvo", "BMW"];
let car2 = cars3[0];
console.log(car2);
cars3[0] = "Opel";                                   // changing the element
console.log(cars3);

console.log(cars3.length);                          // Returns the number of elements
console.log(cars3.sort());                          // Sorts the array

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");                               // Adds a new element (Lemon) to fruits
//console.log(fruits);

fruits[fruits.length] = "jjj";                      // Adds  to fruits
console.log(fruits);

let type = typeof fruits;
console.log(type);

console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);

// Create an array with one element:
const points = [40];
console.log(points);

//array methods
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString());

console.log(fruits1.join(" * "));                       // join() method

var rr1 = ["AngularJs", "Node.js", "JQuery"]
var res1 = rr1.join()                                   // join() method
console.log(res1);

var rr2 = ["AngularJs", "Node.js", "JQuery"]
var res4 = rr2.join('-')                                    // join() method
console.log(res4);

console.log(fruits1.pop());                               // pop() method

var num1 = [1, 4, 9];
var ele1 = num1.pop();
console.log("element is : " + ele1);                     // pop() method

var ele2 = num1.pop();
console.log(ele2);

var rr3 = ["AngularJS", "Node.js", "JQuery"];
console.log("Orginal array: " + rr3);
console.log("Extracted element: " + rr3.pop());          // pop() method
console.log("Remaining elements: " + rr3);

console.log(fruits1.push("Kiwi"));                      // push() method

var rr4 = ["AngularJS", "Node.js"];
rr4.push("JQuery");                                     // push() method
console.log(rr4);

var rr5 = ["AngularJS", "Node.js"];
console.log("Length before invoking push(): " + rr5.length);
rr5.push("JQuery", "Bootstrap");                             // push() method
console.log("Length after invoking push(): " + rr5.length);
console.log("Update array: " + rr5);

let fruit1 = fruits1.shift();                            // shift() method
console.log(fruit1);

var element = [105, 1, 2, 3].shift();
console.log("Removed element is : " + element);          // shift() method

var ar2 = ["AngularJS", "Node.js", "JQuery"];
var res2 = ar2.shift();                                // shift() method
console.log(res2);

console.log(fruits1.unshift("Lemon"));                   // unshift() method
console.log(fruits1);

var ar3 = new Array("orange", "mango", "banana", "sugar");
var len1 = ar3.unshift("water");
console.log(len1);                                      // unshift() method

var ar4 = ["AngularJS", "Node.js"];
var res3 = ar4.unshift("JQuery");
console.log(ar4);

fruits1[0] = "grapes";                                   // changing an array element
console.log(fruits1);

fruits1[fruits1.length] = "lemon";                       // append new element to an array
console.log(fruits1);

console.log(delete fruits1[0]);
console.log(fruits1[0]);                                 // undefined

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);                // merging the arrays
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);

var arr6 = ["C", "C++", "Python"];
var arr7 = ["Java", "JavaScript", "Android"];
var result = arr6.concat(arr7);
console.log(result);

var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);

var result1 = arr6.concat("Java", "JavaScript", "Android");  // merging an array with values
console.log(result1);

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr4.concat("Peter");                 // merging an array with values

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2);
fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits2);
fruits2.splice(0, 1);
console.log(fruits2);

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1);
console.log(citrus);

const citrus1 = fruits3.slice(3);
console.log(citrus1);

const citrus2 = fruits.slice(1, 3);
console.log(citrus2);

//array sorting
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.sort());

console.log(fruits4.reverse());

var r1 = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + r1);                // reverse() method

var r2 = ["AngulaJS", "Node.js", "JQuery"];
var rev = r2.reverse();                                  // reverse() method
console.log(rev);

//numeric sorting
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function (a, b) { return a - b });
console.log(points1);
console.log(points1[0]);                                   // min value
console.log(points1[points1.length - 1]);                  // max value

points1.sort(function (a, b) { return b - a });
console.log(points1);
console.log(points1[0]);                                  // max value
console.log(points1[points1.length - 1]);                 // min value

function myArrayMax(points1) {
    return Math.max.apply(null, points1);
}
console.log(myArrayMax(points1));

function myArrayMin(points1) {
    return Math.min.apply(null, points1);
}
console.log(myArrayMin(points1));

//array iteration
const numbers = [45, 4, 9, 16, 25];
let t1 = "";
numbers.forEach(myFun1);
let aaa = numbers.forEach((ele) => console.log(ele * ele));
console.log({ aaa });
function myFun1(value, index, array) {
    t1 += value + " ";
}
console.log(t1);

const numbers1 = [45, 4, 9, 16, 25];
let t2 = "";
numbers1.forEach(myFun2);
function myFun2(value) {
    t2 += value + " ";
}
console.log(t2);

const numbers3 = [45, 4, 9, 16, 25];                    // map() method
const numbers4 = numbers3.map(myFun3);

// function myFun3(value, index, array) {
//     return value * 2;
// }
console.log(numbers4);

function myFun3(value) {
    return value * 2;
}

const t3 = numbers3.filter(myFun4)                       // fiter() method        
function myFun4(value, index, numbers3) {
    return value > 18;
}
console.log(t3);

// function myFun4(value) {
//     return value > 18;
//   }

let sum = numbers3.reduce(myFun5);                        // reduce() method
function myFun5(total, value) {
    return total + value;
}
console.log(sum);

let allOver18 = numbers3.every(myFun6);                   // every() method
function myFun6(value) {
    return value > 18;
}
console.log(allOver18);

var marks = [50, 40, 45, 37, 20];
function check(value) {
    return value > 30;                                   // return false, as marks[4]=20  
}
console.log(marks.every(check));                         // every() method

function test(element, index, array) {
    return index < 4;
}
console.log([21, 32, 2, 43].every(test));                 // true  
console.log([21, 32, 2, 43, 35].every(test));             // false  

let someOver18 = numbers3.some(myFun7);                   // some() method
function myFun7(value, index, array) {
    return value > 18;
}
console.log(someOver18);

let first = numbers3.find(myFun8);                       // find()  method
function myFun8(value, index, array) {
    return value > 18;
}
console.log(first);

const numbers6 = [4, 9, 16, 25, 29];                     // findIndex() method
let first1 = numbers6.findIndex(myFun9);

function myFun9(value, index, array) {
    return value > 18;
}
console.log(first1);

console.log(Array.from("ABCDEFG"));                         // array creation from string

var ar1 = Array.from("You are viewing an example of string"); //The string will get converted to an array.  
console.log(ar1);

const ft1 = ["Banana", "Orange", "Apple", "Mango"];         // read key-value pair
const f4 = ft1.entries();
for (let e of f4) {
    console.log(e);
}

var arr9 = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
var itr = arr9.entries();
for (var e1 of itr)                                          // for loop using var.  
{
    console.log(e1);
}

console.log(ft1.includes("Mango"));                         // is true

//JS date()
const d1 = new Date();
console.log(d1);

const d2 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d2);

//Specifying a month higher than 11, will not result in an error but add the overflow to the next year
const d3 = new Date(2018, 15, 24, 10, 33, 30);
const d4 = new Date(2019, 3, 24, 10, 33, 30);              //same as d3
console.log(d4);

//Specifying a day higher than max, will not result in an error but add the overflow to the next month
const d5 = new Date(2018, 5, 35, 10, 33, 30);
const d6 = new Date(2018, 6, 5, 10, 33, 30);
console.log(d6);

//5 numbers specify year, month, day, hour, and minute:
const d7 = new Date(2018, 11, 24, 10, 33);
console.log(d7);

const d8 = new Date(2018, 11, 24, 10);                 // 4 number specify
console.log(d8);

const d9 = new Date(2018, 11, 24);                    // 3 numbers specify
console.log(d9);

const d10 = new Date(2018, 11);                       // 2
console.log(d10);

const d11 = new Date(2018);                          // If you supply only one parameter it will be treated as milliseconds.
console.log(d11);

const d12 = new Date(99, 11, 24);                   // One and two digit years will be interpreted as 19xx:
console.log(d12);

const d13 = new Date(9, 11, 24);
console.log(d13);

const d14 = new Date("October 13, 2014 11:13:00");  // creates a new date object from a date string
console.log(d14);

const d15 = new Date(0);                            // date(millisec) 
console.log(d15);

//01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973
const d16 = new Date(100000000000);
console.log(d16);

//January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966
const d17 = new Date(-100000000000);
console.log(d17);

const d18 = new Date(86400000);                      // One day (24 hours) is 86 400 000 milliseconds.
console.log(d18);

const d19 = new Date();
console.log(d19.toString());                        // converted to a string, with the toString()

const d20 = new Date();
console.log(d20.toUTCString());                    // converts a date to a UTC string (a date display standard)

const d21 = new Date();
console.log(d21.toDateString());                   // converts a date to a more readable format

const d22 = new Date();
console.log(d22.toISOString());

const d23 = new Date("2015-03-25");
console.log(d23);

const d24 = new Date("2015-03");
console.log(d24);

const d25 = new Date("2015");
console.log(d25);

const d26 = new Date("03/25/2015");               // short date
console.log(d26);

const d27 = new Date("Mar 25 2015");               // long date
console.log(d27);

const d28 = new Date("25 Mar 2015");               // long date
console.log(d28);

const d29 = new Date("Jan 25 2015");
console.log(d29);

const d30 = new Date("JANUARY, 25, 2015");
console.log(d30)

let msec = Date.parse("March 21, 2012");         //returns the number of milliseconds between the date and January 1, 1970
console.log(msec);

//Math.method(number)
console.log(Math.round(4.6));                 // returns the nearest integer:

console.log(Math.round(4.5));

console.log(Math.round(4.4));

console.log(Math.ceil(4.9));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));

console.log(Math.floor(4.9));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

console.log(Math.trunc(4.9));
console.log(Math.trunc(4.7));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));

console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));

console.log(Math.pow(8, 2));

console.log(Math.sqrt(64));

console.log(Math.abs(-4.7));

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

// Returns a random number:
console.log(Math.random());

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));

// Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 11));

// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101));

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1)

// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(0, 9));

function getRndInteger1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger1(1, 10));

console.log(Math.log(1));

console.log(Math.log(10));

console.log(Math.log2(8));

console.log(Math.log10(1000));

//JS boolean
console.log(Boolean(10 > 9));

//everything with value is true
console.log(Boolean(100));

console.log(Boolean(3.14));

console.log(Boolean(-15));

console.log(Boolean("Hello"));

console.log(Boolean("false"));

console.log(Boolean(7 + 1 + 3.14));

//without value is false
let bl1 = 0;
console.log(Boolean(bl1));


let bl2 = -0;
console.log(Boolean(bl2));

let bl3 = "";
console.log(Boolean(bl3));

let bl4;
console.log(Boolean(bl4));

let bl5 = false;
console.log(Boolean(bl5));

let bl6 = null;
console.log(Boolean(bl6));

let bl17 = 10 / "Hallo";
console.log(Boolean(bl17));

let bl18 = false;                                   // typeof bl18 returns boolean
let bl19 = new Boolean(false);                      // typeof bl19 returns object

//JS comparisons
let c1 = 5;

console.log(c1 == 8);
console.log(c1 == 5);
console.log(c1 == "5");
console.log(c1 === 5);
console.log(c1 === "5");
console.log(c1 !== 5);
console.log(c1 !== "5");
console.log(c1 !== 8);
console.log(c1 > 8);
console.log(c1 < 8);
console.log(c1 >= 8);
console.log(c1 <= 8);

//logical operators
let c2 = 6;
let c3 = 3;

console.log((c2 < 10 && c3 > 1));
console.log(c2 < 10 && c3 < 1);
console.log(c2 == 5 || c3 == 5);
console.log(c2 == 6 || c3 == 0);
console.log(c2 == 0 || c3 == 3);
console.log(c2 == 6 || c3 == 3);

console.log(!(c2 === c3));
console.log(!(c2 > c3));

function myAge() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("de").innerHTML = voteable + " to vote.";
}

//comparing different types
console.log(2 < 12);
console.log(2 < "12");
console.log(2 < "John");
console.log(2 > "John");
console.log(2 == "John");
console.log("2" < "12");
console.log("2" > "12");
console.log("2" == "12");

let name1 = null;
let te1 = "missing";
let rt = name1 ?? te1;                          // Nullish Coalescing Operator 
//console.log(name1);                             // null
console.log(rt);                                // missing

// Create an object:
const cr1 = { type: "Fiat", model: "500", color: "white" };
// Ask for car name:                            // Optional Chaining Operator
console.log(cr1?.name);                         // undefind
console.log(cr1?.type);                         // fiat

//JS if stmt
if (new Date().getHours() < 18) {
    console.log("good day");
}

var age = 20;
if (age > 18) {
    console.log("Qualifies for driving");
}

var a2 = 20;
if (a2 > 10) {
    console.log("value of a is greater than 10");
}

//if-else
let greeting;
if (20 < 18) {
    console.log(greeting = "Good day");

} else {
    console.log(greeting = "Good evening");
}

var a3 = 20;
if (a3 % 2 == 0) {
    console.log("a is even number");
}
else {
    console.log("a is odd number");
}

var ag1 = 22;
if (ag1 > 18) {
    console.log("Qualifies for driving");
} else {
    console.log("Does not qualify for driving");
}

//if else-if
let time = 18;
if (time < 10) {
    console.log(greeting = "Good morning");
} else if (time < 20) {
    console.log(greeting = "Good day");
} else {
    console.log(greeting = "Good evening");
}

var ag2 = 20;
if (ag2 == 10) {
    console.log("a is equal to 10");
}
else if (ag2 == 15) {
    console.log("a is equal to 15");
}
else if (ag2 == 20) {
    console.log("a is equal to 20");
}
else {
    console.log("a is not equal to 10, 15 or 20");
}

var book = "maths";
if (book == "history") {
    console.log("History Book");
} else if (book == "maths") {
    console.log("Maths Book");
} else if (book == "economics") {
    console.log("Economics Book");
} else {
    console.log("Unknown Book");
}

//Switch-stmt
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);

var grade = 'B';
var rslt;
switch (grade) {
    case 'A':
        rslt = "A Grade";
        break;
    case 'B':
        rslt = "B Grade";
        break;
    case 'C':
        rslt = "C Grade";
        break;
    default:
        rslt = "No Grade";
}
console.log(rslt);

var grade1 = 'A';
switch (grade1) {                                 //using without break
    case 'A': console.log("Good job");
    case 'B': console.log("Pretty good");
    case 'C': console.log("Passed");
    case 'D': console.log("Not so good");
    case 'F': console.log("Failed");
    default: console.log("Unknown grade")
}

// JS for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const cs1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < cs1.length; i++) {
    console.log(cs1[i]);
}

for (let i = 0, len = cs1.length, xt = ""; i < len; i++) {
    console.log(xt += cs1[i] + " ");
}

let i = 2;
let ln1 = cs1.length;
let xt2 = "";
for (; i < ln1; i++) {
    console.log(xt2 += cs1[i] + " ");
}

let i1 = 0;
let ln2 = cs1.length;
let xt3 = "";
for (; i1 < ln2;) {
    xt3 += cs1[i1] + " ";
    console.log(xt3);
    i1++;
}

var cnt1;
console.log("Starting Loop");
for (cnt1 = 0; cnt1 < 10; cnt1++) {
    console.log("Current Count : " + cnt1);
}
console.log("Loop stopped!");

const per1 = { fname: "John", lname: "Doe", age: 25 };       // for in
for (let p in per1) {
    console.log(per1[p]);
}

const num3 = [45, 4, 9, 16, 25];                            // for in
for (let n in num3) {
    console.log(num3[n]);
}

const cs2 = ["BMW", "Volvo", "Mini"];                      // for of
for (let g of cs2) {
    console.log(g);
}

let language = "JavaScript";
for (let l of language) {                                 // for of
    console.log(l);
}

let h3 = "language";
for (let v of h3) {                                       // for of
    console.log(v);
}

let i3 = 0;
while (i3 < 7) {
    console.log(i3)                                      // while loop
    i3++;
}

var i4 = 11;
while (i4 <= 15) {                                       // while loop
    console.log(i4);
    i4++;
}

var cnt2 = 0;
console.log("Starting Loop ");

while (cnt2 < 10) {                                      // while loop
    console.log(cnt2)
    cnt2++;
}

console.log("Loop stopped!");

let tc = 0;
do {                                                     // do-while loop                                           
    console.log(tc);
    tc++;
}
while (tc < 10);

var z = 21;
do {                                                    // do-while loop
    console.log(z);
    z++;
} while (z <= 25);

var ct3 = 0;
console.log("Starting Loop");
do {                                                    // do-while loop
    console.log("Current Count : " + ct3);
    ct3++;
}
while (ct3 < 5);
console.log("Loop stopped!");


for (let gh = 0; gh < 10; gh++) {                        // break stmt
    if (gh === 3) { break; }
    console.log(gh);
}

for (let fg = 0; fg < 10; fg++) {                        // continue stmt
    if (fg === 3) { continue; }
    console.log(fg);
}

//JS Set
//----------------------------------

// Create a Set
const lett1 = new Set(["a", "b", "c"]);

// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");


letters1.add("d");
letters1.add("e");

console.log(letters1);

// Create Variables
const rs1 = "a";
const rs2 = "b";
const rs3 = "c";

// Add Variables to the Set
letters1.add(rs1);
letters1.add(rs2);
letters1.add(rs3);

// List all Elements
let ex = "";
letters1.forEach(function (value) {
    console.log(ex += value);
})

let ex2 = "";
for (const j of letters1.values()) {
    console.log(ex2 = j);
}

var set1 = new Set();
set1.add("jQuery").add("AngularJS").add("Bootstrap");
for (let elements1 of set1) {
    console.log(elements1 + " ");
}

var set2 = new Set();
set2.add("jQuery");
set2.add("AngularJS");
set2.add("Bootstrap");
for (let elements2 of set2) {
    console.log(elements2 + " ");
}

set2.forEach(function display(value) {
    console.log(value);
})

//JS map

// Create a Map
const fruit2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruit2);

// Create a Map
const fruit3 = new Map();

// Set Map Values
fruit3.set("apples", 500);
fruit3.set("bananas", 300);
fruit3.set("oranges", 200);
console.log(fruit3);

fruit2.set("apples", 200);
console.log(fruit2);

console.log(fruit2.get("apples"));                                      // Returns 200

console.log(fruit2.size);                                               // return 3

console.log(fruit2.delete("apples"));                                   // return true
console.log(fruit2.has("apples"));                                      // return false

// let xt1 = "";
// fruit2.forEach(function (value, key) {
//     xt1 += key + ' = ' + value + " ";
// })
// console.log(xt1);

fruit2.forEach(function (value, key) {
    console.log(key + ' = ' + value + " ");
})

// List all entries
let xt6 = "";
for (const j3 of fruit3.entries()) {
    console.log(xt6 = j3 + " ");
}

//JS typeof operator
console.log(typeof "John");                         // Returns "string"
console.log(typeof 3.14);                           // Returns "number"
console.log(typeof NaN);                            // Returns "number"
console.log(typeof false);                          // Returns "boolean"
console.log(typeof [1, 2, 3, 4]);                   // Returns "object"
console.log(typeof { name: 'John', age: 34 });      // Returns "object"
console.log(typeof new Date());                     // Returns "object"
console.log(typeof function () { });                // Returns "function"
console.log(typeof myCar);                          // Returns "undefined" *
console.log(typeof null);                           // Returns "object"

//constructor property
console.log("John".constructor);                     // Returns function String()  {[native code]}
console.log((3.14).constructor);                     // Returns function Number()  {[native code]}
console.log(false.constructor);                      // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor);               // Returns function Array()   {[native code]}
console.log({ name: 'John', age: 34 }.constructor);  // Returns function Object()  {[native code]}
console.log(new Date().constructor);                 // Returns function Date()    {[native code]}
console.log(function () { }.constructor);            // Returns function Function(){[native code]}

const fts1 = ["Banana", "Orange", "Apple", "Mango"];
function isArray(myArray) {
    return myArray.constructor === Array;
}
console.log(isArray(fts1));                          // true

function isArray1(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray1(fts1));

//difference between null & undefined

console.log(typeof undefined);          // undefined
console.log(typeof null);               // object

console.log(null === undefined);         // false
console.log(null == undefined);          // true


//type conversion
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));

let u1 = "5";                           // u1 is a string
let u2 = + u1;                          // u2 is a number

console.log(String(u1));                // returns a string from a number variable x
console.log(String(123));               // returns a string from a number literal 123
console.log(String(100 + 23));          // returns a string from a number from an expression

console.log(u1.toString());
console.log((123).toString());
console.log((100 + 23).toString());

//JS error
try {
    adddlert("Welcome guest!");
}
catch (err) {
    console.log(err.message);
}

//throws error
function myFunction8($p) {
    let msage = "";
    try {
        if ($p == "") throw "empty";
        if (isNaN($p)) throw "not a number";
        $p = Number($p);
        if ($p < 5) throw "too low";
        if ($p > 10) throw "too high";
    }
    catch (err1) {
        console.log(msage = err1);
    }
}
myFunction8("");

function myJsErr(_q) {
    let msage = "";
    try {
        if (_q == "") throw "empty";
        if (isNaN(_q)) throw "not a number";
        _q = Number(_q);
        if (_q < 5) throw "too low";
        if (_q > 10) throw "too high";
    }
    catch (jserr) {
        console.log(msage = jserr);
    }
    finally {
        console.log("finally");
    }
}
myJsErr(3);

//JS Errors

let num4 = 1;
try {
    num4.toPrecision(500);                          // Range error
}
catch (err) {
    console.log(err.name);
}

try {
    num4 = no + 1;                                 // Reference error
}
catch (err) {
    console.log(err.name);
}


try {
    eval("alert('Hello)");                        // Syntax error
}
catch (err) {
    console.log(err.name);
}

try {
    num4.toUpperCase();                          // Type error
}
catch (err) {
    console.log(err.name);
}

try {
    decodeURI("%%%");                           // URI error
}
catch (err) {
    console.log(err.name);
}

function myFuncn1() {
    var carName = "Volvo";                    // Function Scope
}


//JS strict mode
"use strict";
hj = 3.14;                                    // This will cause an error (x is not defined).
console.log(hj);

"use strict";
myAction();

function myAction() {
    rt = 3.14;
    console.log(rt);                          // This will cause an error (y is not defined)
}

//this keyword

// Create an object:
const pers1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(pers1.fullName());

//arrow function

helloArrow = () => {
    return "Hello World!";
}
console.log(helloArrow());

//This works only if the function has only one statement.
hello = () => "Hello World!";
console.log(hello());

//Arrow Function With Parameters:
helloParam = (val) => "Hello " + val;
console.log(helloParam("hjj"));

//Arrow Function Without Parentheses:
helloparam = val => "Hello " + val;
console.log(helloparam("jdk"));

//JS JSON
let tet = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

const oj = JSON.parse(tet);

console.log(oj.employees[1].firstName + " " + oj.employees[1].lastName);

var jj = '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}';
var data = JSON.parse(jj);                               // converting JSON strings into JavaScript objects
console.log(data.Email);                                 // xyz

var pq = {
    Name: "Krishna",
    Email: "XYZ",
    CN: 12345
};
var dta = JSON.stringify(pq);                          // converting an object into a JSON string
console.log(dta);

var json = '{ "firstName":"ASHU", "lastName":"BHATI", "studentCode":7 }';
var student = JSON.parse(json);
console.log((student.firstName + " " + student.lastName));

const et = '["Ford", "BMW", "Audi", "Fiat"]';
const myArry = JSON.parse(et);
console.log(myArry);

//JavaScript to illustrate JSON.stringify() method.  
var json = { firstName: "ASHU", lastName: "BHATI", studentCode: 7 };
var student = JSON.stringify(json);
console.log(student);

var fgh = ["JAVA", "C", "C++", "Python"];                // Create a JSON string from a JavaScript array
var Json = JSON.stringify(fgh);
console.log(Json);

const o = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(o);
console.log(myJSON);

