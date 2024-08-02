// i는 영문 대소문자를 구분하지 않는다.
// g는 모든 패턴
// m는 문자열의 행이 바뀌어도 계속 검색

const str1 = `I go to a mat. I go to a MART`;
const str2 = [...Array.from({ length: 3 })].map(() => str1).join('');
const str3 = `A cat gets haircut c3t c_t`;
const str4 = `Discount rate: 30% `
const str5 = `Phone number: 010-3352-2312`;
const str6 = `You are a student. Your name is nice`;
const str7 = 'Email: qwer@gmail.com';

const pattern1 = /c.t/g;
const pattern2 = /\w/g;
const pattern3 = /\d/g;
const pattern4 = /\bYou/ig;
const pattern5 = /e\b/g;
// const result = str1.replace(pattern, 'office')

// console.log(str3.match(pattern1));
// console.log(str4.match(pattern2));
// console.log(str5.match(pattern3));
// console.log(str6.match(pattern4));
// console.log(str6.replace(pattern5, '😃'));


const str8 = 'I love Apple pie and apple juice';
const pattern6 = /apple/ig;
console.log(str8.match(pattern6));

const str9 = 'Hello World! This is a Test String';
const pattern7 = /[A-Z]/g;
console.log(str9.match(pattern7));

const str11 = '1 10 100 2000 30000';
// 100, 200, 300 이 나오도록 정규식으로 작성
// const pattern9 =  /\b(100|200|300)/g;
const pattern9 = /\d{3}/g;
console.log(str11.match(pattern9));

const str12 = 'How do you do';
const pattern10 = /o|d/g;
// const pattern10 = /[od]/g;
console.log(str12.match(pattern10));

const str13 = '89139012349';
// const pattern11 = /9|9|0|9/g;
const pattern11 = /^[1-8]/g;
console.log(str13.match(pattern11));

const str14 = 'A AA B BB Aa Bb AAA';
const pattern12 = /A{1,2}/g;
console.log(str14.match(pattern12));

const str15 = 'AA BB 12 345';
const pattern13 = /[0-9]+/g;
console.log(str15.match(pattern13));