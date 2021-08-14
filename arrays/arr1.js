let arr = [4, 7, 9];
let arr1 = ["hi", true, 900];
let arr3 = [
  { pCode: 1, pName: "apple" },
  { pCode: 2, pName: "orange" },
];
// console.log(arr);
// console.log(arr1);
// arr3.forEach((value, index) => {
//   console.log(value, index);
// });
for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
}
for (let elem in arr) {
  console.log(elem, arr[elem]);
  //elem - return index
}
// for (let elem of arr) {
//   console.log(elem);
//   //elem - return index
// }
arr.forEach((element, index, arr) => {
  console.log("kdfd", element, index, arr[index]);
});
//for each does not allow break..it has to go through loop
//in return index, of return value
arr3.filter((value, index) => {});
