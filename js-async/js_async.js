// function sequece
function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();                       // JavaScript functions are executed in the sequence they are called.
mySecond();

// sequence controll 
function myDisplayer1(some) {
    console.log(some);
}

function myCal(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCal(5, 5);
myDisplayer1(result);          // Do a calculation and then display the result.           

function myDisplay(some) {
    console.log(some);
}

function myCalc(num1, num2) {
    let sum = num1 + num2;
    myDisplay(sum);
}
myCalc(6, 5);

// callback function
function myDisplay1(some) {
    console.log(some);
}

function myCalci(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalci(8, 5, myDisplay1);

//Asynchronous functions
setTimeout(myFunction, 3000);

function myFunction() {
    console.log("Hello Javascript");
}

setTimeout(function () {
    myFuncn("Javascript learner");
}, 3000);

function myFuncn(value) {
    console.log(value);
}

setTimeout(myFunctn, 1000);

function myFunctn() {
    let d = new Date();
    let dt = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    console.log(dt);

}

var a;
a = setTimeout(fun, 2000);
function fun() {
    alert(" Welcome to the javaTpoint.com ");
}

//JS promise

function myDisp(some) {                                  // 1
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisp(value); },
    function (error) { myDisp(error); }
);

var p = new Promise(function (resolve, reject) {            // 2
    var x = 2 + 3;
    if (x == 5)
        resolve(" executed and resolved successfully");
    else
        reject("rejected");
});
p.then(function (value) {
    console.log("Promise is" + value);
}).catch(function (error) {
    console.log("Promise is " + error);
});

const myProm = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I am !!"); }, 1200);
});

myProm.then(function (value) {
    console.log(value);
});

//async and await
function myDisplr(some) {
    console.log(some);
}
async function myFuntn1() { return "Hello"; }
myFuntn1().then(
    function (value) { myDisplr(value); }
);

async function myDispli() {
    let myPre = new Promise(function (resolve) {
        resolve("I am learner!!");
    });
    console.log(await myPre);
}
myDispli();

async function myplay() {
    let myPro = new Promise(function (resolve) {
        setTimeout(function () { resolve("I am javascript learner"); }, 1600);
    });
    console.log(await myPro);
}
myplay();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
