//javacript uses lexical scope (static Scope)
let varOne  = 'varOne'
let varTwo  = 'var2'
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}
console.log(varTwo)