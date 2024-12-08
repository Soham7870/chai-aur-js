const accountId = 12345
let accountEmail = "vc@gmail.com"
var accountPassword = "3333"
accountCity = "kolkata"

// accountId=2 (Not allowed) coz its a constant value //

accountEmail = "ab@ab.com"
accountPassword = "99999"
accountCity = "ranchi"

/* 
Always use let . Never use var because of issue in block scope & functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]); //prints in tabular form//
