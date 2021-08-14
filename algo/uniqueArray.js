let arrtest1 = [1, 4, 5, 6, 3, 5, 3, 3, 2];
let uniqueArr = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

console.log(arrtest1);
console.log(uniqueArr(arrtest1));
let uniqueArr2 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

//console.log(uniqueArr2(arrtest1))

let uni = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uni(arrtest1));
