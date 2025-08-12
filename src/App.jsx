import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
    // once:true,
  });
  AOS.refresh();
},[]);
  return (
    <div>
<Welcome/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route  path="/project" element={<Project/>}/> 
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App