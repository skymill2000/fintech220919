import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return <p>홍길동님 안녕하세요</p>;
};

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <p>홍길동님 안녕하세요</p>
      <p>홍길동님 안녕하세요</p>
      <p>홍길동님 안녕하세요</p>
      <p>홍길동님 안녕하세요</p>
    </div>
  );
}

export default App;
