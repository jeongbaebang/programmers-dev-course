import { asyncWave } from 'async-wave';
import _ from 'lodash';

import data from './data.json';
import R from './modules';

// const userA = [
//   {
//     userID: '1',
//     name: 'John',
//   },
//   {
//     userID: '2',
//     name: 'Kim',
//   },
// ];

// const userB = [
//   {
//     userID: '3',
//     name: 'John',
//   },
//   {
//     userID: '4',
//     name: 'Lee',
//   },
// ];

// const userC = userA.concat(userB);

// const users = [
//   {
//     userID: '1',
//     name: 'John1',
//   },
//   {
//     userID: '2',
//     name: 'John2',
//   },
//   {
//     userID: '3',
//     name: 'John3',
//   },
//   {
//     userID: '4',
//     name: 'John4',
//   },
// ];

// const findUser = _.find(users, { name: 'John3' });
// console.log(findUser);
// const findUserIndex = _.findIndex(users, { name: 'John3' });
// console.log(findUserIndex);
// _.remove(users, { name: 'John3' });
// console.log(users);

// const arr = [1, 2, 3, 4];
// const even = _.remove(arr, (n) => n % 2);

// console.log(even);
// console.log(arr);

const myFriend = [
  { name: 'Kim#1', age: 21, active: false },
  { name: 'Kim#2', age: 22, active: true },
  { name: 'Kim#3', age: 23, active: false },
  { name: 'Kim#4', age: 24, active: false },
];

// console.log(_.every(myFriend, { name: 'kim#1', active: false }));
// console.log(_.filter(myFriend, (n) => n.active));

// console.log(R.arr, R.getName);

const str = JSON.stringify(data);
console.log(JSON.parse(str));
