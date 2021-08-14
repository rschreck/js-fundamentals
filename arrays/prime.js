const isItPrime = (n) => {
  let boolIsPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      boolIsPrime = false;
      break;
    } else {
      boolIsPrime = true;
    }
  }
  return boolIsPrime;
};
console.log(isItPrime(7));
