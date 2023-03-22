/* 
    생성자(Constructor)
      - 같은 형태의 객체를 만들 수 있는 틀을 미리 만든다.
      - 생성자는 대문자로 시작한다.(파스칼 케이스)
      - 함수 내부에서 this를 통해 프로퍼티를 할당하면 생성자 함수가 된다.
        => 이때 this가 가리키는 것은 생성될 인스턴스를 가리킨다.
      - return 값을 생략해도 자동으로 객체를 생성해서 반환한다.

    인스턴스(instance)
      - 생성자를 통해 실제로 만들어진 객체로 실제 메모리 할당된다.
      - 생성자를 new 키워드와 함께 호출하면 인스턴스가 생성된다.
        => 생성된 인스턴스마다 프로퍼티 값이 다르다.
*/

// 객체 리터럴 방식 : {} 기호를 사용해 간단하게 객체 생성.
//    => 같은 형태의 객체를 만들 때 직접 작성해야 한다는 단점이 있다.
let user01 = {
  name: "Seok",
  age: 31,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

let user02 = {
  name: "Mincheol",
  age: 40,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.hello();
user02.hello();

function User(name, age) {
  this.name = name;
  this.age = age;

  // hello 메서드 만들기
}

let user03 = new User("Seok", 31);
let user04 = new User("Mincheol", 40);
console.log(user03);
console.log(user04);

// prototype : 인스턴스가 공통으로 사용할 메서드, 프로퍼티를 상속시켜준다.

// 프로포타입 메서드 : 인스턴스가 프로토타입에게 상속받아 사용하는 메서드.
User.prototype.hello = function () {
  console.log(`안녕하세요 저는 ${this.name}입니다.`);
};

// 정적(Static) 메서드 : 생성자 함수를 통해 직접 호출하는 메서드. => 인스턴스는 호출 불가. 상속 안됨.
User.isUser = function (obj) {
  return obj instanceof User;
};

console.log("user03 is User? ", User.isUser(user03));
console.log("user01 is User? ", User.isUser(user01));

Math.PI; // Math의 정적 프로퍼티.

user03.hello();

// Cat 생성자 작성해보기
// age, color 프로퍼티, cry 프로토타입 메서드 만들기("야옹~~~" 출력).
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

Cat.prototype.cry = function () {
  console.log("야옹~~~");
};

let cat = new Cat(31, "brown");
console.log(cat);
cat.cry();

let obj = new Object();
console.log(obj);

/*
  클래스(Class)
   - 생성자 함수와 동일한 역할을 한다.
   - 다른 객체지향 프로그래밍 언어에서 흔히 사용하는 클래스개념을 도입했다.
      => 새로운 개념이 아니라 프로토타입 기반인 것은 동일하다.
      => 문법적으로 사용하기 쉽게 만들어진 것으로 이를 "문법적 설탕"이라고 한다.
   - class 라는 키워드를 사용한다.
      => 함수가 아니라 () 를 사용안한다.
   - new 키워드와 함께 클래스를 호출하면 constructor가 객체를 초기화한다.
    => 초기화할 값이 없다면 constructor 생략이 가능하다.
    => JS가 내부적으로 자동으로 constructor를 생성한다.
*/

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /* 프로토타입 메서드 선언.*/
  hello() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }

  static isplayer(obj) {
    return obj instanceof Player;
  }
}

let player = new Player("jihsoo", 31);
console.log(player);
player.hello();

console.log("player is player?", Player.isplayer(player));

class Animal {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }
  eat() {
    console.log("밥을 먹습니다.");
  }
}
/*
  클래스의 상속
    - 상위 클래스를 상속받아서 메서드 등을 사용할수있다.
    - 상속받을때 constructor를 작성하면 내부에 super(상위 클래스의constructor)를 호출해야한다.
*/

class Dog extends Animal {
  constructor(legs, color) {
    super(4, color);
  }
  bow() {
    console.log("멍! 멍!");
  }

  //오버 라이딩 : 상위 클래스에 메서드를 덮어쓴다.
  eat() {
    console.log("사료먹는다.");
  }
}

let dog = new Dog(4, "black");
console.log(dog);
dog.eat();
dog.bow();

// Q :Bird 다리는 2개, color는 생성할때 초기화."날아가요~~"출력하는  fiy 메서드 만들기.

class Bird extends Animal {
  constructor(color) {
    super(2, color);
  }
  fiy() {
    console.log("날아가요~~");
  }
}

let bird = new Bird(4, "red");
console.log(bird);
bird.fiy();

/* Q: 
 Car 클래스 만들기
  -color, speed, gas(연료량), eco(연비)
  -move(이동거리) 호출하면 "?km 속도로 km이동. 남은연료 : 연료량".....
*/

class Car {
  constructor(color, speed, gas, eco) {
    this.color = color;
    this.speed = speed;
    this.gas = gas;
    this.eco = eco;
  }
  move(distance) {
    if (this.gae > distance / this.eco) {
      this.gas -= distance / this.eco;
      console.log(
        `${this.speed}k.m/h 속도로 ${distance}km이동. 남은연료 : ${this.gas}L`
      );
    } else {
      console.log("연로가 부족합니다.");
    }
  }
}

let car = new Car("red", 100, 50, 10);
car.move(10);
car.move(30);
car.move(400);
car.move(100);
