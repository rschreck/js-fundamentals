
let myAccount = {
    name : "R S",
    expenses : 20,
    income: 0,
}
let addExpense = function(account,amount){
    account.expenses+= amount
    console.log(account);
}
addExpense(myAccount,1020)