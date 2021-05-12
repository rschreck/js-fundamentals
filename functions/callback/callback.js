function add(num1, num2, mycallback) {
  let sum = num1 + num2;
  mycallback(sum);
}
const multi = (num1, num2, mycallback) => {
  mycallback(num1, num2);
};
function sum(sum2) {
  console.log(sum2);
}
const multiply = (a, b) => {
  console.log(a * b);
};
add(1, 2, sum);
//multi(1, 2, multiply);
multi(4, 2, multiply);
