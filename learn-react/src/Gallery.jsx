function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

// src/Gallery.jsx
//Gallery 컴포넌트에 사용하면서도 다른 컴포넌트에서도 사용할수있다.
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
