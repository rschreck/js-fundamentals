let testArr = [1,2,4,6,3,2]
let testArr2 = [1,2,4,6,3,2].splice(1, 1, 1010);
function removeItemOnce(arr, value){
    let index = arr.indexOf(value)
    arr.splice(index,1)
}
const removeitem = (arr, value) =>{
    let inde = arr.indexOf(value)
    arr.splice(index,1)
}
// removeItemOnce(testArr,2)
// console.log(testArr);

// const remove1ce = (arr, value)=> arr.splice(arr.indexOf(value),1)
// remove1ce(testArr,3)
//console.log(testArr2);

var fruits = [null, null, null,null];
console.log(fruits);
fruits.splice(0, 1, 5);
console.log(fruits);
