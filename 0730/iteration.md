### Iteration Protocol
순회 가능한 데이터 컬렉션을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙

### 왜 이러한 프로토콜이 생겼을까?
ES6 이전의 순회 가능한 데이터 컬렉션 등은 통일된 규약 없이 각자 나름의 구조를 가지고 for 문, for...in 문, forEach 메서 등 다양한 방법으로 통일되지 않는 방법으로 순회가 가능하였는데,

ES6에서 순회 가능한 데이터 컬렉션을 **이터레이션 프로토콜을 준수하는 이터러블**로 통일하였다.

#### 이터레이션 프로토콜 (Iteration Protocol)
- 이터러블 프로토콜 (Iterable protocol)
- 이터레이터 프로토콜 (Iterator protocol)

### 이터러블 프로토콜 (Iterable protocol)
Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 **이터레이터**를 반환한다.
> 이러한 규약을 이터러블 프로토콜이라 하며, 이터러블 프로토콜을 준수한 객체를 **이터러블**이라 한다.

### 이터레이터 프로토콜 (Iterator protocol)
이터레이터는 next 메서드를 소유하며 next 메서드를 호출하면 이터러블을 순회하며 value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
> 이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체는 이터레이터라 한다. 이터레이터는 이터러블의 요소를 탐색하기 위한 포인터 역할을 한다.

### 왜 객체는 for..of 문 사용이 불가능할까
for..of 문은 이터레이터의 next 메서드를 호출하여 이터러블을 순회하고, next 메서드가 반환한 객체의 value 값을 변수에 할당하며 done 값이 true일 때 순회를 중단한다. 따라서 이터러블 프로토콜을 따르지 않는 객체는 for..of 문을 사용할 수 없다.

### 이터레이션 프로토콜 중요성
이터레이션 프로토콜은 다양한 데이터 공급자가 동일한 순회 방식을 갖도록 규정하여, 데이터 소비자가 효율적으로 다양한 데이터를 사용할 수 있게 하는 인터페이스 역할을 한다.

---
### 기술면접
#### 이터러블이란 무엇인가요?

예상 답변: 이터러블(iterable)은 반복 가능한 객체를 의미합니다. 이러한 객체는 Symbol.iterator 메서드를 가지고 있으며, 이 메서드는 반복자(iterator)를 반환합니다. 반복자는 next() 메서드를 가지고 있으며, 이를 호출할 때마다 값과 done 속성을 포함한 객체를 반환합니다. 자바스크립트에서 배열, 문자열, Map, Set 등이 이터러블 객체입니다.

#### 이터러블 객체와 이터레이터(iterator)의 차이점은 무엇인가요?
예상 답변: 이터러블 객체는 Symbol.iterator 메서드를 구현하는 객체이고, 이터레이터는 이터러블 객체에 의해 반환되는 객체로, next 메서드를 가지고 있습니다.

#### JavaScript에서 이터러블을 사용하는 이유는 무엇인가요?
예상 답변: 이터러블을 사용하는 것은 데이터를 반복하고 조작하는 데 유연성을 제공합니다. 이터러블 프로토콜을 통해 다양한 데이터 구조를 동일한 방식으로 처리할 수 있어 코드의 가독성과 재사용성을 높일 수 있습니다.

이터러블을 사용하면 for...of 루프와 같은 문법을 사용하여 데이터를 쉽게 반복할 수 있습니다. 또한, 스프레드 연산자(...), Array.from(), Map(), Set() 및 Promise.all()과 같은 내장 함수 및 메서드와 함께 사용할 수 있습니다.


#### 자바스크립트에서 커스텀 이터러블 객체를 만든 예시는 무엇인가요?
예상 답변: 자바스크립트에서 커스텀 이터러블 객체를 만들기 위해서는 Symbol.iterator 메서드를 구현하면 됩니다. 
```js
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

####  for...of 루프와 for...in 루프의 차이점은 무엇인가요?
예상 답변: for...of 루프는 이터러블 객체를 반복하기 위해 사용되며, 각 이터레이션에서 값(value)을 반환합니다. 배열, 문자열, Map, Set 등과 함께 사용할 수 있습니다.

for...in 루프는 객체의 열거 가능한 속성(enumerable properties)을 반복하기 위해 사용되며, 각 이터레이션에서 속성 이름(property name)을 반환합니다. 객체의 모든 열거 가능한 속성을 대상으로 하므로 배열의 인덱스도 열거됩니다.