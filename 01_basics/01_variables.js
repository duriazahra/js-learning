const accountId = 45321
let accountEmail = "jobhi@gmail.com"
var accountPassword = 1234567
accountCity = "Skd"

// accountId = 2 // not allowed

accountEmail = "hoo@gmail.com"
accountPassword = "010101"
accountCity = "rwp"
let accountState;

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])