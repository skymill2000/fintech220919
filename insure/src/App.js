import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import AppBar from "./components/Common/AppBar";
import EventComponent from "./components/EventComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent />}></Route>
        <Route path="/event" element={<EventComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
