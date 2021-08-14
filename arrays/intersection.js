let arrOne = [1, 3, 4, 5, 6, 7];
let arrTwo = [2, 4, 5, 6, 17];
let arrIntersection = arrOne.filter((value) => {
  return arrTwo.includes(value);
});
console.log(arrIntersection);
let arrUnion = [...new Set([...arrOne, ...arrTwo])];
console.log(arrUnion);
