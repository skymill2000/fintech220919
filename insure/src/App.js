import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ userName, age }) => {
  return (
    <p>
      {age}세 <b>{userName}</b>님 안녕하세요
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome userName={"홍길동"} age={30}></Welcome>
      <Welcome userName={"홍길동"} age={30}></Welcome>
      <Welcome userName={"홍길동"} age={30}></Welcome>
      <Welcome userName={"홍길동"} age={30}></Welcome>
    </div>
  );
}

export default App;
