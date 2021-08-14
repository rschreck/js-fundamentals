let a = [1, 5, 7];
let sum = a.reduce(function (a, b) {
  return a + b;
});
console.log(sum);
let b = [1.3, 2, 4, 5];
let sum2 = b.reduce((x, y) => {
  return x + y;
});
console.log(sum2);
