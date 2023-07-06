let limit = 15;
let a = 0;
let b = 1;
let fn = a + b;
// do {
//   console.log(fn);
//   fn = a + b;
//   a = b;
//   b = fn;
// } while (fn < limit);
let arrFib = [];

for (let i = 0; i < limit; i++) {
  arrFib.push(fn);
  fn = a + b;
  a = b;
  b = fn;
}
console.log(arrFib);
