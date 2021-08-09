let data;
function cSqr(n, cb) {
  setTimeout(() => {
    return cb(n * n);
  }, 2000);
}
function displayData(data) {
  console.log(data);
}
console.log("Starts");
data = cSqr(2, displayData);

console.log("End");
