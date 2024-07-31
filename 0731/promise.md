### 동기/비동기

defer -> 스크립트 로딩 속성

프로미스가 왜 등장했는가
-> 이전에는 콜백을 통해서 비동기를 처리해 왔다. 하지만 콜백 지옥의 패턴이 나옴에 따라 개선하기 위해서 프로미스를 도입

프로미스를 왜 사용하는가 

어떻게 동작하는가

async/await -> ES8

바로 이행상태의 프로미스가 반환된다.

async function sayHello() {
  return Promise.resolve("안녕")
}

function sayHello() {
  return Promise.resolve("안녕")
}
 
무슨 차이가 있나

---
### Promise
