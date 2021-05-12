let myExpense = {
    name: 'Renuka',
    expense : 0,
    income :0
}
let hisExpense = {
    name: 'Dan',
    expense : 0,
    income :0
}
let addExpense = (expneseObj, amount) => expneseObj.expense += amount
addExpense(myExpense,100)
console.log(myExpense)