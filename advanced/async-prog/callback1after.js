function fetchAPI(cb) {
  setTimeout(() => {
    let data = { pCode: "1", pName: "First Item" };
    cb(data);
  }, 2000);
}
function displayData(data) {
  console.log(data);
  console.log("End");
}

console.log("Starts");

fetchAPI(function displayData(data) {
  console.log(data);
  console.log("End");
});
//or
//fetchAPI(displayData);
