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

let x 
let y 
let z 

x = Number(x);
y = String(y)
z = Boolean(z)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
