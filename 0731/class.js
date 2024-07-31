// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// // 인스턴스 메서드 (객체가 생성될 때마다 별도로 생성된다.)
// Point.prototype = {
//   toString() {
//     return `${this.x} ${this.y}`;
//   },
// };

// const pt1 = new Point(100, 200);
// const pt2 = new Point(200, 300);

// console.log(pt1.toString())
// console.log(pt2.toString());

// console.log(pt1 instanceof Object);

// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * this.radius;
//   };
// }

// const circle1 = new Circle(1)
// const circle2 = new Circle(2);

// // 서로 다른 인스턴스 메서드를 가지고 있다.
// console.log(circle1.getArea === circle2.getArea)

// function Circle2(radius) {
//   this.radius = radius;

// }

// Circle2.prototype.getArea = function () {
//   return Math.PI * this.radius;
// }

// const ncircle1 = new Circle2(1);
// const ncircle2 = new Circle2(2);

// // 서로 다른 인스턴스 메서드를 가지고 있다.
// console.log(ncircle1.getArea === ncircle2.getArea);

// class Person2 {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`first`);
//   }

//   static sayHello() {
//     console.log('Hello');
//   }
// }

// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log('Hi');
//   };

//   // Static
//   Person.sayHi = function () {
//     console.log('iH');
//   };

//   return Person
// })()

// const me = new Person();

// me.sayHi();
// Person.sayHi();

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   static areas(width, height) {
//     return
//   }
// }

// const square = new Square(10, 20);

// console.log(square.area())

// const Person = {
//   firstName: 'Bang',
//   lastName: 'Choi',

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   },

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split('');
//   },
// };

// console.log(Person.fullName)
// Person.firstName = 'Rich Nagn'
// console.log(Person.fullName);

// class Base {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `Hi ${this.name}. 잘 지냈니?"`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     return `Hi ${super.sayHi()}.`;
//   }
// }

// const derived = new Derived('bang');

// console.log(derived.sayHi())

const Book = (function Book() {
  function Book() {}

  Book.prototype.setItem = function (title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  };

  return Book;
})();

const book = new Book();

book.setItem('ㅁ', 'bang', 'ㅊ');

console.log(book)
