let cSqr = (a) => {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * a);
    }, 2000);
  });
  return pr;
};
cSqr(2).then((res) => {
  console.log(res);
  cSqr(res)
    .then((res1) => {
      console.log(res1);
    })
    .finally(() => {
      console.log("done");
    });
});
