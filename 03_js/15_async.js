/*
   동기(Synchronous)와 비동기(Asynchronous)
     -동기적 : 결과값을 기다린다.
     -비동기적 : 결과 값을 기다리지 않는다.
     - js 싱글 스레드 기반의 논블로킹 언어이다.

*/

let a = 10;
let b = 20;

let result = a + b;
console.log(result);

/*
  스케줄링
    - 특정 코드를 일정시간 뒤에 실행하거나 일정 시간마다 반복한다. 
  setTimeout(콜백함수,지연시간)
    - 콜백함수를 일정시간 뒤에 실행한다.
    - js 가 직접 관리하는것이 아니라 실행환경에서 도와준다.
    - id값을 반환하는데 이 id값으로 실행전 스케줄을 취소할 수 있다.
        =>clearTimeout(id)를 통해서 스케줄을 취소한다.

  setInterval(콜백함수,지연시간)
    -setTimeout과 차이점은 일정시간마다 반복한다.

  콜백지옥
    - 비동기 처리를 하는 가장 기본적인 방법은 콜백함수.
       => 콜백함수를 계속해서 중첩사용하는 콜백지옥에 빠진다.
       => 가독성이 떨어진다.
*/

console.log("setTimeout 시작");
const timeot = setTimeout(function () {
  console.log("실행");
}, 2000);

clearTimeout(timeot);
console.log("setTimeout 종료");

// let second = 0;
// let interval = setInterval(function () {
//   console.log(++second);
// }, 1000);
