let data;
function cSqr(n) {
  setTimeout(() => {
    return n * n;
  }, 2000);
}
function displayData() {
  console.log(data);
}
console.log("Starts");
data = cSqr(2);
displayData();
console.log("End");
