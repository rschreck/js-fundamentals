let testArr = [33,2,4,5,2,4,5,4,3]
let dupArray = arr => arr.filter((item, index) => arr.indexOf(item) != index)
let uniqueArray = arr => arr.filter((item, index) => arr.indexOf(item) === index)
let sortArray = arr => arr.sort((a, b) =>{
    if (a < b)
        return -1
    else if ( b < a ) 
        return 1
    else
        return 0 
})

//console.log(dupArray(testArr)) // Unique duplicates
console.log([...new Set(dupArray(testArr))]) // Unique duplicates

console.log(uniqueArray(testArr)) // Unique duplicates
//console.log(sortArray(testArr)) // Unique duplicates
console.log('sorted ', sortArray(uniqueArray(testArr)))
console.log('reverse ', sortArray(uniqueArray(testArr)).reverse())