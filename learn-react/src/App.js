export default function TodoList() {
  return (
    // This doesn't quite work!
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

/* 
    JSX (JavaScreipt and XML)
    - JavaScreipt 마크업 언어를 포함시키기 위한 확장된 문법.
       => JS 이지만 HTML 구조를 한눈에 알아보기 쉽다.
    - JSX는 React 개발을 도와주는 하나의 도구이다. 즉, React 별개이다.
       => create-react-app를 통해 프로젝트를 생성하면 Babel이라는 도구가 포함된다.

    JSX 지켜야될 문법

    1. 컴퍼넌트응 무조건 하나의 루트 요소 를 반환해야한다.

   
*/
