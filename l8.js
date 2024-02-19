//                     MEMORY
//  1. Satck Memory- Primitive
let name = "Adarsh"
let title = name
title = "subname"

console.log(name);
console.log(title)

//  2. Heap Memory- Non-Primitive
let userO ={
    email: "a@gmail.com",
    ph: "1234",
}
let userT = userO
userT.email = "ad@gmail.com"
userT.ph = "9876"
console.log(userO.email);
console.log(userT.email)