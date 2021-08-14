let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1");
  }, 2000);
});
let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2");
  }, 1000);
});

let pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, 5000);
});

//Promise.all([pr1, pr2, pr3]).then((res) => console.log(res));
// //[ 'promise1', 'promise2', 'promise3' ]
// Promise.all([pr2, pr1, pr3]).then((res) => console.log(res));
//["promise2", "promise1", "promise3"];
// Promise.allSettled([pr2, pr1, pr3]).then((res) => console.log(res));
Promise.race([pr2, pr1, pr3]).then((res) => console.log(res));
