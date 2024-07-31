// function callback() {
//   console.log("콜백함수가 호출됨")
// }

// setTimeout(callback)
// console.log("작업을 수행함")

// function getUsers(callback) {
//   let users = [];

//   setTimeout(() => {
//     users = [
//       { name: 'Kim', email: 'kim@gmail.com' },
//       { name: 'Kim2', email: 'kim2@gmail.com' },
//       { name: 'Kim3', email: 'kim3@gmail.com' },
//     ];
//   });

//   return users;
// }

// function findUser(name, callback) {
//   getUsers(callback, name);
// }

// findUser('Kim', (users, name) => {
//   const user = users.find((user) => user.name === name);

//   console.log(user);
// });

// const greeting = document.querySelector('#greeting');

// if(greeting) {
//   greeting.addEventListener('click', sayHello);
// }

// function sayHello() {
//   console.log('HI')
// }

// function getUser(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: 'Kim', email: 'kim@gmail.com' },
//         { name: 'Kim2', email: 'kim2@gmail.com' },
//         { name: 'Kim3', email: 'kim3@gmail.com' },
//       ]);
//     }, delay);
//   });
// }

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve('good#1'), 100));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve('good#2'), 300));
// const p3 = new Promise((resolve, reject) =>
//   setTimeout(() => reject('good#3'), 200)
// );

// const reduce = (str) => [...str].reduce((a,b) => a + b)
// Promise.all([p1, p2, p3]).then(reduce).then(console.log)

// Promise.allSettled([p1, p2, p3])

// const p1 = new Promise((resolve, _reject) =>
//   setTimeout(() => {
//     resolve('A');
//   }, 100)
// );

// const p2 = new Promise((resolve, _reject) =>
//   setTimeout(() => {
//     resolve('B');
//   }, 200)
// );

// const fn1 = (promises = []) => {
//   promises.forEach(({ value }) => {
//     console.log(value);
//   });
// };

// Promise.allSettled([p1, p2])
//   .then(fn1)
//   .then(() => {
//     console.log('완료');
//   });

// const success = true;

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (success) {
//       return resolve(5);
//     }

//     return reject('에러');
//   }, 100);
// });

// const p2 = (value = 1) => {
//   return new Promise((resolve, _reject) =>
//     setTimeout(() => {
//       return resolve(value * 10);
//     }, 150)
//   );
// };

// const errorLog = () => {
//   console.log('에러!');
// };

// p1.then(p2).then(console.log).catch(errorLog);

// async function sayHello1() {
//   return '안녕';
// }

// sayHello1().then(console.log);

// const sayHello2 = async function () {
//   return '안녕';
// };

// sayHello2().then(console.log);

// const sayHello3 = async () => {
//   return '안녕';
// };

// sayHello3().then(console.log);

// class Greeter {
//   constructor() {}

//   async sayHello() {
//     return '안녕';
//   }
// }

// const greeter = new Greeter();
// greeter.sayHello().then(console.log)

//  function sayHello() {
//   return Promise.resolve("안녕")
// }

// console.log(sayHello());

// function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject('안녕'), 200);
//   });
// }

// async function display() {
//   try {
//     const result = await sayHello();

//     console.log(result);
//   } catch (error) {
//     console.warn(error);
//   }
// }

// display();

// const myPromise = () => new Promise((resolve, reject) => {
//   resolve('value is ');
// });

// function* gen() {
//   let result = "";

//   yield myPromise().then(data => result += data)
//   yield result + '1';
// }

// const asyncFunc = gen();

// const a = asyncFunc.next();
// console.log(a)

// a.value.then(() => {
//   console.log(asyncFunc.next());
// })

// console.log(asyncFunc.next())
// console.log(asyncFunc.next());

// async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout) {
//   let next = from;

//   while (next <= to) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => resolve(next), timeout);
//       next += interval;
//     });
//   }
// }

// (async () => {
//   let seq = asyncSequence(2, 10, 2, 1000);

//   for await (const value of seq) {
//     console.log(value)
//   }
// })();

// 로직 챙겨볼것
// function* generate(arr = [], index = 0) {
//   let next = arr[index];

//   while (index < arr.length) {
//     yield new Promise((resolve, _reject) => {
//       setTimeout(() => {
//         if (typeof next === 'function') {
//           return resolve(next());
//         }

//         resolve(next);
//       }, 100);

//       // 다음 요소 할당.
//       next = arr[index++];
//     });
//   }
// }

// const getUser = async () => {
//   return new Promise((resolve, _reject) => {
//     const users = {
//       1: { name: 'Kim', age: 25 },
//       2: { name: 'Bang', age: 30 },
//       3: { name: 'Jung', age: 35 },
//     };

//     setTimeout(() => {
//       resolve(users);
//     }, 1000)
//   });
// };

// (async () => {
//   for await (const value of generate([getUser])) {
//     console.log(value);
//   }
// })();


function sayHello2() {
  return Promise.resolve('안녕');
}

async function sayHello1() {
  return Promise.resolve('안녕');
}


console.log(sayHello2());
console.log(sayHello1())