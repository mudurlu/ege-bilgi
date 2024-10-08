import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
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
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
