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

// let options = {
//   name: "test_name",
//   width: 123,
//   height: 123,
//   colors: {
//     border: "test_border",
//     backGround: "test_color",
//   },
//   makeTest: function () {
//     // добавляем функцию как свойство объекта, чтобы объект
//     //мог что-либо выполнять
//     console.log("test_function_on_object");
//   },
// };
// console.log(options["colors"]["border"]);
// console.log(options.colors.border);
// console.log(options.width);
// options.makeTest();
// options.width = 1024;
// console.log(options);

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
// console.log(count);

// console.log(Object.keys(options)); // перебирает объект
// console.log(Object.keys(options).length); // колличество свойств объекта

// // Деструктуризация объекта - вынесение свойств за пределы объекта
// let destr = {
//   name: "test_name",
//   width: 123,
//   height: 123,
//   colors: {
//     border: "test_border",
//     backGround: "test_color",
//   },
//   makeTest: function () {
//     console.log("test_function_on_object");
//   },
// };

// let { width, name } = destr;
// console.log(width, name);

// let { border, backGround } = destr.colors;
// console.log(border, backGround);

// LESSON 21: ARRAY

// let array = [4, 8, 15, 16, 23, 42];

array.pop(); // удаляет и возвращает последний элемент массива
console.log(array);
array.push(42); // добавляем в конец 1 элемент
console.log(array);

let array = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < array.length; i++) {
  // перебор по индексам
  console.log(array[i]);
}

for (let i of array) {
  // of работает только с массиво-подобными сущностями, например: массив, строка, псевдомассив, мап, сет
  // перебор по элементам
  console.log(i);
}

let array = [4, 8, 15, 16, 23, 42];
array.forEach(); // нельзя break и continue

let str = "Любимую не отдают";
let arr = str.split(" ");
console.log(arr);
console.log(arr.join("|"));

// LESSON 22: Spread оператор
// простейшие объекты переприсваиваются без ссылок (примитивные типы данных).
// объекты, вложенные объекты, массивы, функции - изменяются ссылочно, поэтому оригиналы нужно копировать перед изменением

// способы копирования объектов:
// 1
let mainObject = {
  a: 1,
  b: 2,
  c: 3,
};
function copy(mainObject) {
  let copyObject = {};
  for (i in mainObject) {
    copyObject[i] = mainObject[i];
  }
  return copyObject;
}
let copyObject1 = copy(mainObject);
console.log(mainObject);
copyObject1.b = 0;
console.log(copyObject1);

// 2
mainObject = {
  a: 1,
  b: 2,
  c: 3,
};
let secondObject = {
  d: 4,
  e: 5,
};
console.log(Object.assign(mainObject, secondObject));
let copy2 = Object.assign({}, secondObject);
copy2.d = 0;
console.log(secondObject);
console.log(copy2);

// 3
let array1 = [1, 2, 3];
let array2 = array1.slice();
array2[2] = 99;
console.log(array1);
console.log(array2);

// 4
let item1 = ["one", "two", "three"],
  item2 = ["1", "2", "3"],
  item3 = [...item1, ...item2, "99"];
console.log(item3);

function spread(l, k, j) {
  console.log(l);
  console.log(k);
  console.log(j);
}
arr = [1, 2, 3];
spread(...arr);

// 5

mainObject = {
  a: 1,
  b: 2,
  c: 3,
};
let newObject = { ...mainObject };
console.log(newObject);
newObject.a = 99;
console.log(newObject);
console.log(mainObject);

let a = [] + false - null + true;
console.log(a);
