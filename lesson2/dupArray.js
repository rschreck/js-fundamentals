let arr = [3,3,4,5,66,5,4]
let dupArray = arr => arr.filter((item,index)=> arr.indexOf(item) != index)
console.log(dupArray(arr))