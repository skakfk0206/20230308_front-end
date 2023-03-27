import Gallery from "./Gallery";
import { Profile } from "./Gallery"; //named export.
// src/App.js
export default function App() {
  return (
    <div>
      <Gallery />
      <Gallery />
    </div>
  );
}

/*
   컴포넌트 export/import

   -루트 컴퍼넌트는 기본적으로 create-reate-app로 프로젝트를 만들면 ,App.js 무루 컴퍼넌트가된다.
     => index.js가 가장먼저 실행되고 , 가장 먼저 렌더링 되는 컴퍼넌트가 App컴퍼넌트다.
     => 언제들 마음대로 변경할수있다.

   - export/import문을 통해서 컴퍼넌트를 별도의 파일로 관리할수있다.
     =>export default나 named export 둘다 상관없지만 , 핵심이 되는 컴퍼넌트는 export default 권고
     
 

   */

//컴포넌트 : JS 함수 형태로 작성. 대문자로 시작하는 파스칼케이스.
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
