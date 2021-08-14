let outer = () => {
  let count = 5;
  let inner = () => {
    return count++;
    //console.log(count);
  };
  return inner;
};
let newOuter = outer();
