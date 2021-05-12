let arr = [1,3,4,5,3,4,5,2343,55]
let uniqueArr = arr =>  arr.filter((item,index) =>  arr.indexOf(item) === index)

console.log(uniqueArr(arr))