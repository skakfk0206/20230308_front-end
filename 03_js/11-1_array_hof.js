/*
  배열의 고차 함수

  고차함수 : 함수를 반환하거나 인자로 전달받는 함수.
    => js는 함수를 값으로 취급하기때문에 가능하다.
    => js의 함수는 일급객체이다.
*/

// 함수를 반환하는 함수.
function foo() {
  return function () {
    console.log("실행!!");
  };
}

let bar = foo(); // foo()의 실행결과로 함수를 반환. bar 변수에 할당.
bar();

//전달 받은 숫자 n만큼 코드를 반복실행하는 repeat함수 만들기.
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

let numbers = [1, 2, 3, 4, 10];
//배열의 크기만큼 반복. 가독성이 떨어진다.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/* 
    Array.prototype.forEach(function(요소, 인덱스){
        
    })
    
    - 배열의 각 요소를 순회하면서 콜백함수를 실행한다.
        => 배열의 크기만큼 반복실행된다.
    - 인자로 콜백함수를 전달한다.
        => 콜백함수의 첫번째 매개변수에는 배열의 각 요소들이 한번씩 전달되며 실행된다.
        => 콜백함수의 두번째 인자로 요소의 인덱스값이 전달된다.
    - 배열의 요소를 값으로 사용하며 단순히 반복실행한다.
    - return되는 값이 없다.
*/
let fruits = ["애플", "바나나", "오랜지"];
fruits.forEach(function (fruit, idx) {
  console.log(idx, fruit);
});

// Q: 안녕하세요 저는 31세 ji입니다.의 형식으로 배열의 각 요소를 모두 출력.
let users = [
  { name: "ji", age: 31 },
  { name: "soo", age: 28 },
  { name: "park", age: 40 },
];
let result = users.forEach(function (user) {
  console.log(`안녕하세요, 저는 ${user.age}세 ${user.name}입니다.`);
});

console.log(result);

//에로우펑션사용시.
users.forEach((user) => {
  console.log(`안녕하세요, 저는 ${user.age}세 ${user.name}입니다.`);
});

/*
 Array.portotype.filter()
     -forEach와 마찬가지로 배열을 순회하며 실행된다.
     -특정 조건을 만족하는 요소만을 모아서 새로운 배열로 반환한다.
       => 인자로 전달된 콜백함수의 return값이 true 나 fales여야 한다. 즉, 조건식이여야한다.
       => return 값이 true 인 요소만 배열로 모아서 반환한다.
     - 원본 배열이 변경되지 않는다.(중요!!!)

*/
let oldUsers = users.filter(function (user) {
  return user.age >= 30;
});

console.log("oldUsers :", oldUsers);
console.log("users :", users);

users.filter((user) => user.age >= 30); //에로우펑션사용시.

/*
  Array.portotype.map()
  - forEach와 마찬가지로 배열을 순회하며 실행된다.
  - 요소의 값을 통해서 새로운 값을 만들어서 배열로 모아서 반환한다.
    => 콜백함수의 return 값이 새로운 배열이 요소 모여서 반환된다.
    => return이 없으면 undefined가 배열로 모인다.
  - 원본 배열을 변경하지 않는다.
*/
let 더블넘버스 = numbers.map(function (num) {
  return num * 2;
});

console.log(더블넘버스);
console.log(numbers);

/*
  Q: users 에서 이름만 모음 nameList 배열만들기
*/
let nameList = users.map(function (user) {
  return user.name;
});

/*
  Array.portotype.reduce()
   - 결과를 누적시키는 누산기를 사용한다.
        - 콜백의 함수의 첫번째 매개변수에는 이전 회차의 값, 두번째 현재 회차의 값.
            => 첫번째 회차에서는 이전값에 초기값이 전달된다.
        - 콜백함수의 세번째 매개변수는 초기값을 설정한다.
*/

let total = numbers.reduce(function (acc, curr) {
  return acc * curr;
}, 1);

let total01 = numbers.reduce(add, 0);
function add(a, b) {
  return a + b;
}

console.log(total, total01);

//Q:  users => age가 30이상인 객체의 이름만 oldUserNames 배열로 모으기.

//메서드 체이닝: 메서드의 반환값에 따라서 바로 메서드를 이용해서 사용
let oldUserNames = users
  .filter((user) => user.age >= 30)
  .map((user) => user.name);

console.log(oldUserNames);

/*유사배열 : 배열처럼 key값이 인덱스이고 ,length 프로퍼티를 갖는 객체.
  - 이름처럼 배열과 유사하지만 배열은 아니기 때문에 배열의 다른 함수사용 불가능.
   =>HTMLCollection, NodeList 등...
  
 
*/

let arrayLike = {
  0: "ji",
  1: "soo",
  2: "park",
  length: 3,
};

console.log(arrayLike[0]);
// arrayLink.forEach((item) => console.log(item)); 배열이 없어 forEachg함수가 없다.

/* Array.from()
-유사배열 혹은 반복가능한 객체(이터러블)를 배열로 만들어서 반환한다.
*/
Array.from(arrayLike);
console.log(arr);
arr.forEach((item) => console.log(item));

/*
   원시값과 참조값

    원시값(Primitve)
      - 변경이 불가능한 값.
      - String, Number, Boolean, nudefined, null
      - 복사를 하면 값 복사가 일어난다.
    
    객체타임(참조)
      - 변경이 가능한 값
      - Array, function 등이 모두 객체에 포함된다.
      - 복사를하면 주소 복사가 일어난다.
        => 얕은 복사, 깊은 복사 가 있다.
*/

let num = 1;

let list = [1, 2, 3];
list.push(0);
