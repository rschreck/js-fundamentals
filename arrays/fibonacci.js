let limit = 15;
let a = 0;
let b = 1;
let fn = a + b;
do {
  console.log(fn);
  fn = a + b;
  a = b;
  b = fn;
} while (fn < limit);
