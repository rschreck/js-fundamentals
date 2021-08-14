let arr = [1, 3, 4, null, "Hi", undefined];
//if index and indexof are not same..they are duplicate
let removeUndef = arr.filter((value, index) => {
  return value;
});

console.log(removeUndef);
