let name = 'Jen'
//if you don't defined the value, JS will define it for you which is undefined


if (name === undefined)
    console.log(`name is not defined!`)
else
    console.log(`name ${name}`)

//undefined for function, if function does not return anything
let square = function(num){
    return num*num
}
let results = square(6);
console.log(results)
let age  = 27
console.log(age)
age = null
console.log(age)