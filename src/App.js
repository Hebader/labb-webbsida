import { HashRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Cv } from "./Pages/Cv";
import { Portfolio } from "./Pages/Portfolio";
import { Hem } from "./Pages/Hem";

export default function App () {
  return (
    <Router>
    <div className='site-container'>
      <header className='site-header'>
        <Navbar/>
      </header>
      <main className='site-content'>
        <Routes>
          <Route path="/" element={<Hem/>}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}
