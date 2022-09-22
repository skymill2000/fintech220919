import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";
import AxiosComponent from "./components/AxiosComponent";
import NewsPage from "./page/NewsPage";
import PharmacyPage from "./page/PharmacyPage";
import HospitalPage from "./page/HospitalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent />}></Route>
        <Route path="/event" element={<EventComponent />}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/pharmacy" element={<PharmacyPage />}></Route>
        <Route path="/hospital" element={<HospitalPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
