import { createContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext(0);

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((c) => c + 1);
  return (
    <CountContext.Provider value={{ count, handleCount }}>
      <div
        style={{
          border: "3px solid black",
        }}
      >
        <h1>Grand Parent</h1>
        <p>count : {count}</p>
        <button onClick={handleCount}>+1</button>
        <Parent />
      </div>
    </CountContext.Provider>
  );
}

export default GrandParent;

/*
  Contex API
    - 전역에 상태를 공유 하고자할 때 사용한다.

    1) createContext : 컨텍스트를 생성한다.
           =><Context.provider>를 통해서 값을 공유 받고자하는 컴포넌트를 감싼다.
           => 공유하고자 하는 값을 value prop 에 지정한다.
           => 기본값은 Context,provi
           
    2) useContext: 컨텍스트가 제공하는 값을 받는다. 
           => 원하는 값을 제공하는 컨텍스트 인자로 전달한다.      
    */
