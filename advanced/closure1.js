function outer() {
  function inner() {
    console.log("inner");
  }
  return inner;
}

let cl = outer();
cl();

//es 6
let outerES6 = () => {
  return () => {
    console.log("innerES6");
  };
};
let cl6 = outerES6();
cl6();
