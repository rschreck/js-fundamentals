let pr = new Promise((resolve, reject) => {
  // setTimeout(resolve("console.log(2343)"), 2000);
  reject("Error");
});
let x = pr.then((res) => console.log(res)).catch((err) => console.log(err));
x;
