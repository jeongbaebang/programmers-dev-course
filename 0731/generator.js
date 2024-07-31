// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }

//   *[Symbol.iterator]() {
//     let num = this.from;

//     while (num <= this.to) {
//       yield num;

//       num += this.interval;
//     }
//   }
// }

// function* generateIterables(...iterables) {
//   // 배열 요소
//   for (const iterator of iterables) {
//     // 각 요소
//     for (const item of iterator) {
//       yield item;
//     }
//   }
// }

// function* generateIterables(...iterables) {
//   for (let iterable of iterables) {
//     yield* iterable;
//   }
// }

// const evenNumbers = new Sequence(2, 10, 2);
// const generator = generateIterables('abc', [1, 2, 3]);
// const arr = [...generator];

// console.log(arr);

function* generate(arr = [], index = 0) {
  let next = arr[index];

  while (index < arr.length) {
    yield new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (typeof next === 'function') {
          return resolve(next());
        }

        resolve(next);
      }, 100);

      // 다음 요소 할당.
      next = arr[index++];
    });
  }
}


function* readLines(file) {
  const fileStream = fs.createReadStream(file, { encoding: 'utf8' });
  let buffer = '';
  
  for await (const chunk of fileStream) {
    buffer += chunk;
    let lines = buffer.split('\n');
    
    buffer = lines.pop();
    
    for (const line of lines) {
      yield line;
    }
  }
  
  if (buffer) {
    yield buffer;
  }
}