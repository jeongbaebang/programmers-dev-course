// Payment: 기본 클래스 (슈퍼클래스)
abstract class Payment {
  abstract processPayment(amount: number): void;
}

// CreditCardPayment: Payment 클래스를 상속받은 서브클래스
class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

// PayPalPayment: Payment 클래스를 상속받은 서브클래스
class PayPalPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// 객체 생성 및 사용
function makePayment(payment: Payment, amount: number) {
  payment.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

interface Merge {
  one: string;
  two: string;
}

interface Merge2 extends Merge {
  three: string;
}

type Name = string;

let firstName: Name;
let lastName: Name;

const objName: {
  [key in Name]: string;
} = {
  firstName: 's',
};

type MathO = (a: number, b: number) => number;

const add: MathO = (a: number, b: number): number => {
  return a + b;
};

const multiply: MathO = (a, b) => {
  return a * b;
};

interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

class Circle implements Circle {
  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }
}

const circle = new Circle('#000000', 18);

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

class Dog implements Dog {
  constructor(name: string, breed: string, age: number) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

const dog = new Dog('a', 'b', 10);

namespace Exam {
  export interface Inner {
    test: string;
  }

  export interface Inner2 {
    test: number;
  }
}

const ex1: Exam.Inner = {
  test: '2',
};

const ex2: Exam.Inner2 = {
  test: 2,
};

interface Exam {
  hello: string;
  world: number;
  check: boolean;
  readonly multiply?: symbol;
}

const example: Exam = {
  hello: 'asd',
  world: 20,
  check: true,
  multiply: Symbol('sdf'),
};

const obj = {
  hello: 'hi',
  world: 123,
  check: true,
};

type Keys = keyof typeof obj; // Key
type Values = (typeof obj)[Keys]; // Value

type Arr = [1, 2, 3];
type First = Arr[0];
type length = Arr['length'];

type Arr2 = (string | boolean)[];

type Hello = {
  [key in Keys]: (typeof obj)[Keys];
};

type Tuple = [1, 2, 3];
type CopyTuple = {
  [Key in keyof Tuple]: Tuple[Key];
};

const ct: CopyTuple = [1, 2, 3];

type A = string | boolean;
type B = boolean | number;
type C = A & B;
type F = unknown | {}; // 전체 집합
type G = never & {};
type H = { a: 'b' } & number;
type I = null & { a: 'b' };
type J = {} & string; // {} -> null 과 undefined를 제외한 모든 타입

// 중간 속한거 교집합
// 전체 합집합
// 적은 타입이 보다 더 넓은 타입이다 -> 튜플을 생각하자

// 구조가 같으면 같은 객체로 인식하는 것 = 구조적 타이핑

interface Product {
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  name: 'Product1',
  price: 10000,
};

type FString = string & { __compileTimeOnly: any };

interface TyPe<T, AD> {}

const person = <Arg0, Arg1>(name: Arg0, age: Arg1) => {
  return [name, age];
};

person([1], [0]);

type B2<T> = T extends String ? number : boolean;

const aa: B2<number> = false;

interface X {
  x: number;
}

interface XY {
  x: number;
  y: number;
}

interface YX extends X {
  y: number;
}

type A1 = XY extends X ? string : number;
type B1 = YX extends X ? string : number;

type result = [1] extends [string] ? true : false;

type Start = string | number;
type New = Start extends string | number ? Start[] : never;

let arrA1: New = ['s12'];
arrA1 = [123];

type New2<A> = A extends string | number ? string[] : never;
type Never = New2<null>;
type Arr3 = New2<number>;

type GetFirstElement<T extends any[]> = T[0];

const arr = [1, '2', false];

// 1
const fn = <T>(arr: [T, ...any[]]) => {
  return arr[0];
};

const fn2 = <T>(arr: T[]) => {
  return arr[0];
};

fn(['str', 20, true]);

fn2(['str', 20, true]);

// 2
type OnlyLength<O> = O extends { length: number } ? O : never;

const onlyLength = <O>(obj: OnlyLength<O>) => {
  return obj;
};

onlyLength({ length: 20 });
// onlyLength({ length: '03' });

// const func2 = <A1 extends number, A2 extends number>(
//   a: A1,
//   b: A2
// ): Max<A1, A2> => {
//   return a > b ? a : b;
// };

type IsString<T> = T extends string ? true : false;

type Max<T extends number, U extends number> = T extends U ? T : U;

// 조건부 타입을 사용한 getMax 함수
function getMax<T extends number, U extends number>(a: T, b: U): Max<T, U> {
  return (a > b ? a : b) as Max<T, U>;
}

// maxNumber는 20으로 추론됩니다.
const maxNumber = getMax(10, 1); // 20

type StringS<T, U> = T | U;

type K9<T> = T extends string ? true : false;

//2개 숫자 number 타입으로 T, T2 정의
function numBig1<T extends number, T2 extends number>(
  a: T, //첫번째 10 타입은 T
  b: T2 //두번째 20 타입은 T2
): T extends T2 ? T : T2 {
  //반환값 조건 삼항연산자로 체크
  //a,b 비교하여 더 큰값 반환하면서 삼항연사자로 타입 결정
  return (a > b ? a : b) as T extends T2 ? T : T2;
}

const maxNumber1 = numBig1(10, 1);
const maxNumber12 = numBig1(190, 1000);

function numBig<T extends number, T2 extends number>(a: T, b: T2): T | T2 {
  return a > b ? a : b;
}
const maxNumber2 = numBig(10, 20);

type Stings<T> = T extends string ? T : never;

type Test1 = Stings<1 | false>;
