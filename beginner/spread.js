const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
const copiedArray = [...hobbies];
const copiedObject = { ...hobbies };
//console.log("copiedArray", copiedArray);
console.log("copiedObject", copiedObject);
for (const property in copiedObject) {
  console.log(`${property} ${copiedObject[property]}`);
}
o = new Object();
o.propOne = null;
console.log(o.hasOwnProperty("propOne3")); // returns true
const toArray = (...args) => {
  return args;
};
const sumOfitems = (first, second, ...args) => {
  let b = args.reduce(function (a, b) {
    return a + b;
  });
  return b;
};

// console.log(toArray(1, 2, 3, 4, "dog"));
//console.log(sumOfitems(1, 2, 3));
const newFunction = (first, second) => {
  return first + second;
};
const newFunctionWithManyArgs = (...args) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = args.reduce(reducer);
  return sum;
};
// console.log(newFunction(2, 3));
// console.log(newFunctionWithManyArgs(93, 33, 44));
var arr = ["this", "is", "a", "comma", "separated", "list"];
arr = arr.join(" ");
console.log(arr);
