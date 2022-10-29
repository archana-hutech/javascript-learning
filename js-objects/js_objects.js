// Creating JS object

const person = {                         // Using an Object Literal
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person.firstName + " " + person.lastName);
console.log(person["firstName"] + " is " + person["age"] + " years old.");

const person1 = {};
person1.firstName = "Jade";
person1.lastName = "smith";
person1.age = 50;
person1.eyeColor = "blue";
console.log(person1.firstName + " " + person1.lastName + " " + person1.age + " " + "years old");

const person2 = new Object();
person2.firstName = "pavan";
person2.lastName = "koli";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2.firstName + " " + person2.lastName);

const x = person2;
x.age = 10;
console.log(person2.firstName + " " + person2.lastName + " " + person2.age);

//JavaScript for...in Loop
let txt = "";
for (let p in person) {
    txt += person[p] + " ";
}
console.log(txt);

//adding new property
person.nationality = "English";
console.log(person.nationality);

//deleting the property
delete person.age;
console.log(person["firstName"] + " is " + person["age"] + " years old.");

//Nested objects
const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
console.log(myObj.cars.car2);
console.log(myObj.cars["car1"]);
console.log(myObj["cars"]["car2"]);

// object method
// Create an object:
const persn = {
    firstName: "Jane",
    lastName: "kang",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(persn.fullName());                  // Display data from the object:

const myArray = Object.values(persn);
console.log(myArray);

let myString = JSON.stringify(person);
console.log(myString);

// JS iterables

//Iterating Over a String
const name = "W3Schools";
for (const x of name) {
    console.log(x);
}

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Create Iterable
const It = myNumbers();
It.next(); // Returns 10
It.next(); // Returns 20
It.next(); // Returns 30

console.log(It.next().value);

// Object Set

//create a set
const letters = new Set(["a", "b", "c"]);

// Display set.size
console.log(letters.size);

// Create a Set
const letter = new Set();

// Add Values to the Set
letter.add("a");
letter.add("b");
letter.add("c");
console.log(letter);

// List all entries
letters.forEach(function (value) {
    console.log(value);
})

// Create an Iterator
const myIterator = letters.values();

// List all Values
for (const entry of myIterator) {
    console.log(entry);
}

typeof letters;                        // Returns object

letters instanceof Set;                // Returns true

//object Maps

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("apples"));

// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1.get("bananas"));

fruits.set("apples", 800);
console.log(fruits.get("apples"));

console.log(fruits.size);

console.log(fruits.delete("apples"));

//console.log(fruits.clear());

console.log(fruits.has("apples"));

console.log(typeof fruits1);

console.log(fruits1 instanceof Map);

fruits1.forEach(function (value, key) {
    console.log(value + " " + key);
})

let xt2 = "";
for (const h of fruits.entries()) {
    xt2 += h + " ";
    //console.log(h);
}
console.log(xt2);

for (const a of fruits.keys()) {
    console.log(a);
}

let total = 0;
for (const b of fruits.values()) {
    total += b;
}
console.log(total);

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done };
        }
    };
}

let t1 = ""
for (const num of myNumbers) {
    t1 += num + " "
}
console.log(t1);
