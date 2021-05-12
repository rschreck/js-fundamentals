let add = function(num1, num2) {
    return num1 + num2
}
let subtract = function(args) {
    const {num1, num2} = args
    console.log(num1,num2);
    return num1 - num2
}
//default value to 4
let getScore = function(num1=4) {
    return num1 
}
let tipCalculater = function(tip=0.2,total) {
    return tip*total
}
let result = add(2,3)
let result2 = subtract({num1:21,num2:3})
let result3 = tipCalculater(undefined,100)

console.log(result3);