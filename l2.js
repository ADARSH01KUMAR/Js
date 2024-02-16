//for fixed case we use this CONST
const accountId = 12345

let accountEmail = "qwerty@gmail.com"
//Don't use var, due to problem in scope{}
var accountPass = "98765"
//Not the correct wat to write but we can also write in this manner. 
accountCity = "BBSR"
let accountState
// accountId = 2 can't be changed 
accountEmail = "asdf@gmail.com"
accountPass = "2345"
accountCity = "CTC"

console.log(accountId);

//Table method
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);