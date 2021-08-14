const genFunction = function* () {
  console.log(`Hello`);
  yield "hi";
  console.log(`World`);
  yield;
  console.log(`Galaxy`);
};
const gObj = genFunction();
//const firstCall = gObj.next();
console.log(gObj);
// gObj.next();

for (let o of gObj) {
  console.log(o);
}
