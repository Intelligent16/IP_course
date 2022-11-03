let num = 0;

// function message(text) {
//   console.log(text);
//   let num = 12;
//   console.log(num);
// }

// message("Hello");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(2, 4));

function ret() {
  let num = 23;
  return num;
}
console.log(ret());

const logger = function () {
  console.log("expression");
};
logger();

const calc = (a, b) => a + b;
console.log(calc(2, 7));

const calc2 = (a, b) => {
  return a + b;
};
console.log(calc2(2, 2));
