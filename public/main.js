// let a = 33;
// let b;
// function Move(fn) {
//   setTimeout(() => {
//     b = fn(9);
//   }, 1000);
//   return b;
// }
// function f1(n) {
//   a = n;
//   return a;
// }
// console.log(b); //undefined
// Move(f1);
// console.log(b); //undefined
// // console.log(a);
// setTimeout(() => {
//   console.log(b); //9
// }, 2000);
let p = new Promise((sucess, reject) => {
  sucess("OK");
  console.log("111");
  //   reject("Err");
});
console.log(p);
let result = p
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      resolve("fine");
    });
  })
  .then()
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      resolve("yes");
    });
  });
setTimeout(() => {
  console.log(result);
}, 2000);
console.log(result);
