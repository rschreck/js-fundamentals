let data;
function fetchAPI() {
  setTimeout(() => {
    data = { pCode: "1", pName: "First Item" };
  }, 2000);
}
function displayData() {
  console.log(data);
}
console.log("Starts");
fetchAPI();
displayData();
console.log("End");
