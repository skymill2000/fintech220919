import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import EventComponent from "./components/EventComponent";
import ListComponent from "./components/ListComponent";
import AppBar from "./components/Common/AppBar";

function App() {
  return (
    <div className="App">
      <AppBar title={"메인"}></AppBar>
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;
