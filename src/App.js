import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Cv } from "./Pages/Cv";
import { Portfolio } from "./Pages/Portfolio";
import { Hem } from "./Pages/Hem";
import Påskägg from "./Components/Påskägg";

export default function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      <Påskägg />
    </div>
  );
}
