let ch = "a";
let isVowel = (ch) => {
  let isv = false;
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    isv = true;
  } else {
    isv = false;
  }

  return isv;
};
console.log(isVowel("x"));
let stringV = "Renuka";
let strArr = stringV.toLowerCase().split("");
console.log(strArr);
let newArr = strArr.filter((v, i) => {
  return !isVowel(v);
});
console.log("new", newArr);
