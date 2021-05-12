let greeting = function(){
    console.log(`Welcome!`)
}
let square = function(input){
    let result
    result = input * input
    return result
}
//console.log(Math.round(square(3.3)));
let cube = ((input) =>{ 
    let result
    result = input * input * input
    return result   
});
console.log(Math.round(cube(3)))