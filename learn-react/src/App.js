const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const title = "React";

  return (
    <>
      <h1
        style={{
          color: "red",
        }}
      >
        Hello {title}!{" "}
      </h1>
      <h2>오늘은 {formatDate(today)}</h2>
      <img className="avatar" src={avatar} alt={description} />;
    </>
  );
}

/*
   JSX 안에 자바 값 (표현식) 포함시키기.
     - JSX 안에서 {}에 자바표현식을 작성하면 동적인 값을 사용할수 있다.
       => 변수 ,연산, 함수호출,객체 리터럴등 다양한 자바스크립트 값을 표함할수있다.
       => 값으로 평가되는 표현식이여야 한다. 즉 if문,for문등은 사용할수없다 .
     - style 속성을 통해 스타일을 지정할 떄는 객체를 전달해야한다.
       =>  {{}}형태로  작성한다. 겉의 {} 자자값을 명시하고, 안쪽의 {}를 객체 리터럴이다.
*/
