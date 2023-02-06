import './App.css';
// first, need to import to use Route
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect} from "react";

import Home from "./directory/Home";
import About from "./directory/About";
import Skill from "./directory/Skill";
import Experience from "./directory/Experience";
import Contact from "./directory/Contact";


function App() {
  useEffect(() => {
    document.title = "Programmer | David Tu";  
  }, []);
  return (
    <div>
      <head>
        <title>Programmer | David Tu</title>
      </head>
      <div class="task_bar">
        <nav>
          <a><Link to="/"> Home </Link></a>
          <a><Link to="/about"> About </Link></a>
          <a><Link to="/skill"> Skill </Link></a>
          <a><Link to="/experience"> Experience </Link></a>
          <a><Link to="/contact"> Contact </Link></a>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />    
      </Routes>
    </div>
  );
}

export default App;
