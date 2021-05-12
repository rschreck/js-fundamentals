let testArr = [33,2,4,5,2,4,5,4,3]
function removeAllInstances(arr, value){
    for (i = 0; i < arr.length; i++) {
        let index = arr.indexOf(value)
        arr.splice(index,1)
    }
}
// removeAllInstances(testArr,4)
// removeAllInstances(testArr,2)
console.log(testArr);

const removeAInst = (arr,value)=> arr.forEach(element => {
    let index = arr.indexOf(value)
    arr.splice(index,1)
});
removeAInst(testArr,4)
console.log(testArr);