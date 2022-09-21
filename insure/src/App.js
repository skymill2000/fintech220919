import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";
import AxiosComponent from "./components/AxiosComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent />}></Route>
        <Route path="/event" element={<EventComponent />}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
