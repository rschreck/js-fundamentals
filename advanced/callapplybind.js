function test(a, b) {
  console.log(this);
  console.log(a);
  console.log(b);
}
let obj = {
  a: "this obj",
};
//test.call(obj, 5, 10);
test.apply(obj, [4, 5, 10], [6, 7]);
