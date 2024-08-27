import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/support-us" element={<SupportPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
