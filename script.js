// .......JAVASCRIPT IN THE CONSOLE.......
// console.log(`Hello`);
// console.log(`I like pizza`)

// window.alert(`This is an alert`);
// window.alert(`I like pizza`)

// .....TO GET HTML ELEMENT .....
/*document.getElementById('my-h1').textContent = 'Capricorn C.R.M.I';
document.getElementById('my-p').textContent = `I like pizza`
*/

// ..... VARIABLES .......
// 1. declaration: let x;
// 2. assignment: x = 10;

// let x = 79; //declaration and assignment
//console.log(x);

// .... DATA TYPES

// 1 NUMBERS
// let age = 39;
// let price = 24.56;
// let gpa = 2.1;

// 2 STRINGS
/*let firstName = "Alexander";
let favoriteFood = "Fish"

console.log(typeof firstName);
console.log(`my favorite food is ${favoriteFood}`);
console.log(`Your name is ${firstName}`); */

// 3 BOOLEAN
// let online = false;

// console.log(`Alex is online ${online}`);
// console.log(typeof online);

/*let fullName = 'Alexander Msumba';
let age = 34;
let isStudent = false;

document.getElementById('p1').textContent = `My name is ${fullName}`;
document.getElementById('p2').textContent = `I am ${age} years old`;
document.getElementById('p3').textContent = `Enrolled: ${isStudent}`; */

// ====== OPERATORS ======

let myStudents = 30;
// myStudents = myStudents + 2; // addition
// myStudents = myStudents - 2;     // subtraction
// myStudents = myStudents / 2 divide
// myStudents = myStudents * 10 multiplication
// myStudents = myStudents ** 2; exponents;
// let  ourStudents = myStudents % 2 //modula
// myStudents += 5;
// myStudents -= 3
// myStudents *= 2
// myStudents /= 2;
// myStudents **= 2;
// myStudents %= 2

// ===== INCREMENT OPERATOR ====
// myStudents++ this is plus 1
// myStudents--  this is minus 1

// console.log(myStudents);

/*operator precedence 
parenthesis ()
exponents
multiplication & division & modulo
addition & subtraction
*/
// let result = 1 + 2 * 3 + 4 ** 2
// let result = 12 % 5 + 8 / 2;

// console.log(result)

/* 
HOW TO ACCEPT USER INPUT
1. EASY WAY = WINDOW PROMPT
2. PROFESSIONAL WAY = HTML TEXT-BOX
*/

// 1. EASY WAY = WINDOW PROMPT
// let username;

// username = window.prompt('What is your username?');
// console.log(username);

// 2. PROFESSIONAL WAY = HTML TEXT-BOX
// let username;
// document.getElementById('mySubmit').onclick = function() {
//   username = document.getElementById('myText').value;
//   document.getElementById('myH1').textContent = `Hello ${username}`;
//   // console.log(username)
// };

/*
type conversion = change the datatype of a value to another (string, number, boolean, etc")
*/

// let age = window.prompt("How old are you")
// age = Number(age);
// age+=1;

//  console.log(age, typeof age);

// let x
// let y
// let z

// x = Number(x);
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// ===== CONST = a variable that cant be changed
// const PI = 3.34159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function () {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

// ======== COUNT TIMER =======

/*const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
*/

// ======= MATH METHOD
let x = 10;
let y = 2;
let z = 9;

// z = Math.round(x);
// z = Math.floor(x); floor, trunc and round do the same thing
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(y, x);
// z = Math.sqrt(x);
// z = Math.log(x);
// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z);
// console.log(min);

// ========= RANDOM NUMBER GENERATOR
// example
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// exercise
/*const myBtn = document.getElementById('myBtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};
*/

// ======= IF STATEMENT
// let age = 10;
// if (age >= 18) {
//   console.log('you are old enough')
// }
// else {
//   console.log('you are too young')
// }

// let isStudent = true;
// if (isStudent) {
//   console.log(`You are a student`);
// }

// else {
//   console.log(`you are not`);
// }

//

/*const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = 'You are TOO old to enter this site';
  } else if (age == 0) {
    resultElement.textContent = 'You cannot enter, you are just born';
  } else if (age >= 18) {
    resultElement.textContent = 'You are old enough to enter this site';
  } else if (age < 0) {
    resultElement.textContent = 'Your age cannot be below zero';
  } else {
    resultElement.textContent = 'You must be 18+ to enter this site';
  }
};
*/

// ===== CHECKED BOX PROPERTY =======
/*const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed`;
  } 
  else {
     subResult.textContent = `You are NOT subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`
  }
  else if (mastercardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`
  }
  else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`
  }
  else {
    paymentResult.textContent = `You must select a payment type`
  }
}*/

// ====== TERNARY OPERATOR its a shortcut to an if else statement ======
// let age = 11;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// THE ABOVE IS THE SAME AS BELOW

// let age = 21;
// let message;

// if (age >= 18) {
//   message = 'You are an adult';
// } else {
//   message = 'You are a minor';
// }
// console.log(message);

// ====== exercise ======
// let time = 16
// let greeting = time <= 12 ? "Good morning" : "Good evening"
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "Yes I am a student" : " No , I am not a student"
// console.log(message);

let purchaseAmount = 1500;
let discount = purchaseAmount >= 1000 ? 10 : 0;
console.log(
  `Your total discount is R${
    purchaseAmount - purchaseAmount * (discount / 100)
  }`
);
