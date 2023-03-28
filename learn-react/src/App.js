export default function Toolbar() {
  // 검색중 ... => handleSubmit 함수 작성하기. 새로고침 x.

  function handleSubmit(e) {
    e.preventDefault();
    alert("검색중...");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button>검색</button>
    </form>
  );
}
