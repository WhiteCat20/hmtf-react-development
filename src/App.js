import About from "./About";
import "./css/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import HmtfNiat from "./HmtfNiat";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>   
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<HmtfNiat/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
