console.log([...new Array(10)]);

const original = [1, 2, 3, 4, 5];
const copy = [...original];

const obj = { a: 10 };
const copyObj = { ...obj };

console.log({ ...copyObj });

const { name: userName, age: userAge } = {
  name: 'John',
  age: 20,
};

console.log(`이름: ${userName}, 나이: ${userAge}`);
