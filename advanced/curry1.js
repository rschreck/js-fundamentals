const sum = (a) => {
  return (b) => {
    return a + b;
  };
};
//in other words closure is responsible for curry
//
let sum1 = (a) => (b) => a + b;
const cl = sum(5);
const ans = cl(6);

console.log(ans);
console.log(sum1(6)(8));
