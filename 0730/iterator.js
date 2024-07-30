// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const iterator = arr[Symbol.iterator]();

// console.dir(iterator)

// let result = iterator.next();

// while(!result.done) {
//   // console.log(result.value)

//   result = iterator.next();
// }

// const copy = [...iterator];
// console.log(copy)

// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }

//   [Symbol.iterator]() {
//     let next = this.from;

//     return {
//       next: () => {
//         if (next <= this.to) {
//           let result = { value: next, done: false };
//           next += this.interval;

//           return result;
//         }

//         return {
//           value: undefined,
//           done: true,
//         };
//       },
//     };
//   }
// }

// const evenNumbers = new Sequence(2, 10, 2);

// for (const num of evenNumbers) {
//   console.log(num);
// }

// function* generate() {
//   console.log('제너레이터 실행');
//   console.log('1생성')
//   yield 1;

//   console.log('2생성')
//   yield 2;

//   console.log('3생성')
//   yield 3;
// }

// for (const gen of generate()) {
//   console.log(gen)
// }

// const gen = generate()
// const iterator = gen[Symbol.iterator]();
// console.log(iterator.next())

// function* sequence(from = 0, to = Infinity, interval = 1) {
//   let next = from;

//   while (next <= to) {
//     yield next;
//     next += interval;
//   }
// }

// let evenSeq = sequence(2, 10, 1);

// for (const iterator of evenSeq) {
//   if(iterator % 2 !== 0) {
//     console.log(iterator)
//   }
// }
