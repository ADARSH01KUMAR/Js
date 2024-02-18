// JavaScript is a dynamically typed language. 
//   Primitive datatypes

/*
1. Strings
2. Number
3. Boolean
4. Null (Empty)
5. Undefined 
6. Symbol (To make unique button)
7. BigInt
*/

const outsideTemp = undefined
console.log(outsideTemp);
let userEmail;
console.log(userEmail);

//In case of symbol we may get different type of datatypes
let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id == anotherId);

const a = (123)
const b = (123)

const bigNumber = 123456789012n

//   Reference Type OR Non-Primitive Type

/*
1. Arrays
2. Objects
3. Functions
*/

const hero = ["A", "B", "C"] // Array

let myProflie = {
    name: "Adarsh", // Object
    age: 19,
}


const myfunction = function(){
    console.log("Hello World!"); // Objects
}
console.log(typeof anotherId)