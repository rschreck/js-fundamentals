const account ={
    name:'Renuka Schreck',
    expenses:[],
    addExpense (desc, acc) {
        const exp = {
            description:  desc,
            account:  acc
        }
        this.expenses.push(exp)
    },
    getSummary(){
        let accSum = this.expenses.reduce((a,b)=> a.account + b.account)
        return(`${this.name} has $${accSum} in expenses.`)
    },
    getSummary2(){
        let totamount = 0;
        this.expenses.forEach(function (expense){
            totamount = totamount + expense.account
        })
        return (`${this.name} has in  ${totamount} expenses.`)
    }
}

account.addExpense('Tea',100)
account.addExpense('coffe',200)
console.log(account.getSummary2())
//console.log(account)
