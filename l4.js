let score = ""

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
1. In Number case its converted easily (score=20)
2. In number with alpha case returns the same output as Number (score="20aa")
3. In Null case it returns 0
4. In Undefined case it returns NAN
5. In boolean case it returns 1 for True and 0 for False
6. In string case it returns NAN
7. In Empty string case it returns 0 
*/

let IsLoggedIn = "adarsh"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

/*
1. In case of 1 it returns true
2. In case of 0 it returns false
3. In case of Empty string it returns false
4. In case of name it returns true 
*/

let a = 90
let stringA = String(a)
console.log(typeof stringA);
console.log(stringA);
