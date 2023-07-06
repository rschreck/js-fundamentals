const factorialFn = (n) => {
  let factorial = 1;
  for (; n >= 1; n--) {
    factorial = factorial * n;
  }
  return factorial;
};
let factorial = 1;
let n = 4;
// for (; n >= 1; n--) {
//   factorial = factorial * n;
// }
//console.log(factorialFn(5));
for (let i = 1; i <= n; ++i) {
  console.log(i, factorial);
  factorial = factorial * i;
}
console.log(factorial);
// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}
