//컴포넌트 : JS 함수 형태로 작성. 대문자로 시작하는 파스칼케이스.

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

/*
   컴포넌트
     - UI를JS 함수 형태로 작성하여 조각으로 만들수있다.
     - 컴포넌트 함수는 대문자로 시작해야한다.
     - 마크업 언어를 return 한다.
       => 해당 요소들이 화면에 출력된다.
     - 복잡한 구조에 UI를 만들면 재사용성이 증가한다.
     - 하나의 파일에 여러개의 컴퍼넌트를 작성할 수 있다.
       => 위 예제에서 Gallery를 부모 컴퍼넌트 Profile을 자식 컴포넌트라고 볼 수 있다.
*/
