import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";
import AxiosComponent from "./components/AxiosComponent";
import NewsPage from "./page/NewsPage";
import PharmacyPage from "./page/PharmacyPage";
import HospitalPage from "./page/HospitalPage";
import HospitalDetailPage from "./page/HospitalDetailPage";
import Carinfo from "./page/CarInfo";
import TreatmentDosageInfoPage from "./page/TreatmentDosageInfoPage";

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
        <Route path="/hospitalDetail" element={<HospitalDetailPage />}></Route>
        <Route path="/carInfo" element={<Carinfo />}></Route>
        <Route path="/treatment" element={<TreatmentDosageInfoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
