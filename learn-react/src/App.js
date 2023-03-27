// 첫번쨰 매개변수로 props 객체가 넘어온다. {}를 넣으면 비구조화 할당이 된다.
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

/*
  props
   
   - 같은 커포넌트를 여러번 사용할 때 내용 등을 다르게 렌더링할 수 있다.
   - 컴퍼넌트에 프로퍼티들을 나열하면 자식 컴퍼넌트의 첫번째 매개변수로 props 객체가 전달된다.
      => key-value 형태로 전달된다.
      => 매개변수에 {}를 사용하면 비구조화 할당이 되어 코드를 간소화 할수있다.
   -매개변수 기본값 문법을 사용하여 프로퍼티가 전달되지 않았을때 기본값을 적용할 수 있다.
   -부모 컴퍼넌트가 받은 props를 자식 컴퍼넌트한테 모두 전달할때는 펼침 연산자로 통해서 간단하게 전달할수있다.
*/
