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

//LESSON 16: FUNCTIONS

// function ret() {
//   let num = 23;
//   return num;
// }
// console.log(ret());

// const logger = function () {
//   console.log("expression");
// };
// logger();

// const calc = (a, b) => a + b;
// console.log(calc(2, 7));

// const calc2 = (a, b) => {
//   return a + b;
// };
// console.log(calc2(2, 2));

//  LESSON 19: CALLBACK FUNCTION

// function first() {
//   setTimeout(function () {
//     // задержка во времени запуска функции
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function callback(lang, back) {
//   console.log(`Я учу: ${lang}`);
//   back();
// }
// function text() {
//   console.log("qwe");
// }
// callback("Джава", text);

// LESSON 20: OBJECTS

let options = {
  name: "test_name",
  width: 123,
  height: 123,
  colors: {
    border: "test_border",
    backGround: "test_color",
  },
  makeTest: function () {
    // добавляем функцию как свойство объекта, чтобы объект
    //мог что-либо выполнять
    console.log("test_function_on_object");
  },
};
options.makeTest();

// delete options.colors.backGround;
// console.log(options.colors);

// let count = 0; // для подсчета количества свойств
// for (let key in options) {
//   // перебираем объект
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       count++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     count++;
//   }
// }
//console.log(count);

console.log(Object.keys(options)); // перебирает объект
console.log(Object.keys(options).length); // колличество свойств объекта

// Деструктуризация объекта - вынесение свойств за пределы объекта
let destr = {
  name: "test_name",
  width: 123,
  height: 123,
  colors: {
    border: "test_border",
    backGround: "test_color",
  },
  makeTest: function () {
    console.log("test_function_on_object");
  },
};

let { width, name } = destr;
console.log(width, name);

let { border, backGround } = destr.colors;
console.log(border, backGround);
