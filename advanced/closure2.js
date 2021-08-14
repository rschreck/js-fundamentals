let addCounter = () => {
  let counter = 0;
  return () => {
    return counter++;
  };
};
let cl = addCounter();
console.log(cl());
console.log(cl());
console.log(cl());

//make local variable like global
//when function return another function and
//you assign that function with function expression
//you call that expression
