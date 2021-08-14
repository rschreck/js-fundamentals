let a1 = [1, 4, 6, 8];
let sum = a1.reduce(function (a, b) {
  let x = a + b;
  if (x > 99) {
    return x;
  } else {
    return 9;
  }
});
//console.log(sum);
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
//countDown(3);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(5));
// expected output: [0, 1, 2, [3, 4]]
