
let fancyName = (name) => `My Name is ${name}`
//console.log(fancyName('Renuka'));

let ftoc = (far) => {
    let celcius = (far - 32) * (5/9)
    return celcius
}

let ctof = (cel) => {
    let farheneit = (cel * (9/5) + 32)
    return {
        farheneit:farheneit.toFixed(2),
        celcisus : cel
            }
}
console.log(ctof(41).farheneit);