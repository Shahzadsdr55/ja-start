const accountId= 12345
let accountEmail = "Shahzad.sdr60@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail= "9717831993sdr@gmail.com"
accountPassword = "67890"
accountCity = "UttarPradesh"

console.log(accountId);

/*

Prefer not use to var
becouse of issu in block scope and functional scope({})

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])