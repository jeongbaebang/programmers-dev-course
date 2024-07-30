// const uniq = array => [...new Set(array)];

// console.log(uniq([1,2,3,2,3,2,3,2,2,null, null, NaN, NaN]))

// const {size} = new Set([1,2,3,4,5])

// console.log(size)

// const obj = {apple: 1000}
// const set = new Set();

// set.add({ apple: 1000 });

// // 삭제는 동일한 참조값이면 객체도 삭제가 가능하다 참조 전달.
// set.delete(obj)

// const userIDS = [1001, 222, 23, 222];
// const ID = new Set(userIDS);
// ID.forEach((item) => console.log(item));

// const set = new Set([1,2,3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest)

// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([4, 2, 3]);

// // 차집합
// const union = new Set([...set1, ...set2]);

// console.log(union);

// // 교집합
// const intersection = new Set([...set1].filter((x) => set2.has(x)));

// console.log(intersection);

// // 차이점
// const difference = new Set([...set1].filter((x) => !set2.has(x)));

// console.log(difference);

// console.log(new Set("i am a student").size)

// const map1 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
//   ['key4', 'value4'],
// ]);

// console.log(map1)

// const map = new Map();
// const lee = { name: 'Lee' };
// const kim = { name: 'kim' };

// map.set(lee, 'developer').set(kim, 'designer');

// console.log(map.has(kim));
// console.log(map)

// const map = new Map();

// map.set('국어', 85)
// map.set('영어', 90)
// map.set('수학', 95);

// let sum = 0;

// map.forEach((key, value) => {
//   sum += key;
// })

// console.log([...map]);

// console.log([...map].reduce((sum, [_key, value]) => sum + value, 0) / map.size );

// const map = new Map();

// map.set('title', '유럽 책방 문화 탐구')
// map.set('author', '한미화')
// map.set('price', 23000);

// map.forEach((v, k) => {
//   console.log(`${v}: ${k}`)
// })

// console.log(new Set([3, 7, 12, 3, 12, 3]))
