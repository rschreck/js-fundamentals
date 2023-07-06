let arr = [1, 3, 4, 4];
//if index and indexof are not same..they are duplicate
let uniqueArr = arr.filter((value, index) => {
  //return arr.indexOf(value) === index;
  return arr.indexOf(value) === index;
});
let dupArr = arr.filter((value, index) => {
  return arr.indexOf(value) !== index;
});
console.log(dupArr);
//use set method for unique
let uniqueArr2 = [...new Set(arr)];
console.log(uniqueArr2);
