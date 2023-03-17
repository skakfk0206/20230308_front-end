/* 
    유효범위(scope)
        - 식별자가 유효한 범위.
        
    전역 스코프
        - 어디서든 접근할 수 있는 유효범위.
        - html에서 여러개의 js 파일 불러오면 하나의 전역 스코프 공유한다.
        - 호출하는 시점에 참조한다.
        - 함수에 내부에서 참조를 할 때 값을 변경할 수 있기 때문에 주의해야한다.

    지역 스코프
        - 코드 블록 내부에서만 유효한 범위.
        - 코드 블록 종료 시점까지만 생명 주기가 유지된다.
        - 상위 스코프와 하위 스코프에 같은 이름의 변수가 있다면
        하위 스코프부터 찾아보고 없으면 상위 스코프를 찾는다.
            => 스코프 체이닝이라고 한다.
*/

// 전역 변수
var num01 = 10;
var num02 = 20;
var a = 20;

function sub() {
  // num01 *= 2; 내부에서 상위 스코프의 변수를 변경하는 것 주의해야한다.
  return num01 - num02;
}

console.log(sub());

num01 = 30;

console.log(sub());

function foo() {
  var a = 10;

  function bar() {
    var a = 30;

    console.log(a); // 30
  }

  return a + 10;
}

console.log(foo());

/* 
   var 변수의 특징
    1. 호이스팅이 일어난다.
     - 호이스팅(hoisting) 선언부분을 먼저 읽는다.
       => 선언 부분이 끌어올려진 것처럼 동작.
     - 변수 호이스팅은 선언 부분만 호이스팅된다.
       =>ndefined로 초기화 된다.
     -선언 이전에 참조해도 오류가 발생하지 않는다.
       =>오류 발견이 늦다.

    2. 함수 블록 레벨 스코프만 지원한다. 
     - if문, for문 등의 코드블록 스코프를 지원하지 않는ㄴ다.
       => 외부 변수를 건드릴수있다. (비추천).
    
    3. 중복선언을 허용한다.
      - 이미 선언된 변수의 값이 변경될 수 잇기때분에 문제가 될수있다.

   let 
      - var 키워드에 문제가 일어 나지 않는다.   
   
   const(Constant) 
        - let과 동일하게 동작하지만, 재할당이 안된다.
            => Contstant는 상수를 의미한다.
        - 기억하기 어려운 값을 명시할 때 사용한다.
            => 변하면 안되는 값에 사용한다. ex) PI
        - 명시적으로 대문자로 표기한다.
            => 대문자를 안쓴다고 오류가 발생하진 않는다.

*/

console.log(str);
var str = "안녕하세요";

/* 변수 호이스팅 의사코드
    var str;
    console.log(str); // undefined
    str = "안녕하세요";
*/

var i = 100;
for (var i = 0; i < 5; i++) {}
console.log(i);

//let 예시
//let i 변수는 for문 내에서만 휴효하다.
// for (let i = 0; i < 5; i++) {}
// console.log(data);

/*
let 키워드는 중복 선언을 하지않는다.

 let userName = "ji";
 let userName = "jisoo";
*/
/*
  let도 호이스팅이 일어나지만, 초기화가 진행되지 않아서 오류가 발생.
        => TDZ(Temporary Dead Zone)
    
    console.log(age);
    let age = 30;
*/

/*
const TAX = 10; // 상수는 반드시 값을 초기화해야한다.
TAX = 20; // 상수라 할당불가!.
*/

/*
  함수 호이스팅
   -기본적으로  함수 호이스팅이 발생하면 실행되는 코드블록도 함꼐 끌어 올려진다.
     => 선언 이전에 호출하면 잘 동작한다.
   -함수 정의 방식에 따라 함수 호이스팅 발생 여부가 달라진다.

     */
console.log(sum(10, 20));
function sum(num01, num02) {
  x = "x"; // 키워드를 생략하면 전역 변수가 된다.
  return num01 + num02;
}

console.log(x);
