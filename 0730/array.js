// const me = [1,2,3,4,5];

// let carSales = [300, 450, 500, 550, 600, 650, 900, 1000];

// let carSales2 = new Array(carSales);

// let copy = Array.from(carSales);

// let concat = [0, ...carSales, 300, 500];

// console.log(concat)

// let numbers = [..."test"]

// let carSales3 = [...carSales];

// console.log(carSales3 === carSales)

// 배열도 객체이다.

// const a = [1,2,3,,4,5];

// a.length = 10;

// console.log(a)

// 배열 이터러블

// let sum = 0;

// for (let [indexedDB, sale] of carSales.entries()) {
//   if (indexedDB % 2 === 0) {
//     sum += sale;
//   }
// }

// let average = sum / (carSales.length / 2);

// console.log(average);

// const list = [4,5,6];

// for (let i in list) {
//   console.log(i);
// }

// for (let i of list) {
//   console.log(i)
// }

// const car = {
//   maker: "BMW",
//   color: "red",
//   year: "2012",
//   length: 3,
// }

// console.log(Array.from(car))

// const indexDB = [300, 450, 500, 550, 600, 650, 900, 1000];

// const newIndexDB = indexDB.map((db) => {
//   return db ** 2;
// })

// const highDB = indexDB.filter((db, index) => db % 2 === 1);

// console.log(highDB)

// console.log([1, 2, 3, 4, 5].findIndex((index) => index > 3));

// console.log([111, 10, 30, 4, 5].every((index) => index > 3));
// console.log([111, 10, 30, 4, 5].some((index) => index > 110));

// console.log([1,2,3,4,5,6].reduce((a,b) => a + b, 0))

// console.log([1,2,3,5].reduce(((a,b) => a > b ? a: b)))

// console.log([[[[[[[[[[[[[[[[[[[[[[[[[[['assert']]]]]]]]]]]]]]]]]]]]]]]]]]].flat(Infinity))

// console.log(['오늘은', '뭐지'].map((a) => a.split('')));

// const a = 1;
// const b = 2;

// const temp = [b, a].join(',');
// console.log(temp)

// const stack = [];

// stack.push(1);
// stack.push(2,3,4);
// stack.pop();
// console.log(stack)

// stack.unshift(1,2,3,4);

// console.log(stack);

// const stack = [1,2,3,4,5,6,7,8,9,10,11,12];

// console.log(stack.splice(0,1))

// console.log(stack)

// const stack = [1, 2, 3, 4, 5, 6, 7];

// console.log(stack.slice(1, -1))

// const a = new Array(6);

// a.fill(0);

// a.fill(1,1,-1)

// console.log(a)

// let a = [1,2,3,4,5,6,7]
// let b = a.indexOf(4);
// console.log(b)

// const a = [0, true, 2, false, NaN];

// onsole.log(a.includes(NaN))

// a.sort((a,b) => a - b);

// console.log(a)

// const scores = [67, 82, 97, 100, 92];

// for (let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
// }

// for (const iterator of scores) {
//   console.log(iterator)
// }

// const tel = ["010", "1234", '5678'];

// console.log(tel.join('-'))

// const colors = ['빨강', '노랑', '파랑', '주황']
// const rest = colors.splice(1)
// const a = rest.join(',')

// console.log(a + '/ ' + colors)

// const arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;

// console.table(arr);

// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j <= arr.length; ++j) {
//     console.log(arr[i][j]);
//   }
// }

// const a1 = [83, 90, 70, 87];
// const a2 = [87, 93, 62, 83];
// const a3 = [98, 90, 77, 97];

// // 평균: 요소 (합산) / 요소의 개수
// const [sum01, sum02, sum03] = [a1, a2, a3]
//   .map((arr) => arr.reduce((a, b) => a + b, 0))
//   .map((sum) => sum / 4);

// function fn(arr = []) {
//   if (Array.isArray(arr[0])) {
//     return arr
      // .map((arr) => arr.reduce((a, b) => a + b, 0))
      // .map((sum) => sum / 4);
//   }

//   return arr.reduce((a, b) => a + b, 0) / arr.length;
// }

// console.log(fn([a1, a2, a3]));

// const tempNumbers = [7, -24, -8, 10, 17, -18];

// const a = tempNumbers.filter((item) => item < 0).sort((a, b) => a - b);
// console.log(a[0]);
// const b = tempNumbers.find((item) => item < 0);
// console.log(b)

// const a = [12, 0, 2, 5, 4].sort((a, b) => a - b);
// const b = [0, 2, 3, 12, 8].sort((a, b) => a - b);

// // console.log(a, b)
// const c = a.filter((num, i) => {
//   return num === b[i]
// });

// console.log(c)

// const newC = [];

// for (let i = 0; i < b.length; i++) {
//   if (a[i] === b[i]) {
//     newC.push(a[i]);
//   }
// }

// console.log(newC);

// console.log([1, 3, 5].map((a) => a * 10));