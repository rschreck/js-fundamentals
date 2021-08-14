const factorialFn = (n) => {
  let factorial = 1;
  for (; n >= 1; n--) {
    factorial = factorial * n;
  }
  return factorial;
};
let factorial = 1;
let n = 4;
for (; n >= 1; n--) {
  factorial = factorial * n;
}
console.log(factorial);
console.log(factorialFn(5));
