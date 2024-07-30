import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Heading from "./components/input-components/Heading";
import Objective from "./components/input-components/Objective";
import Education from "./components/input-components/Education";
import Projects from "./components/input-components/Projects";
import Skills from "./components/input-components/Skills";
import Certifications from "./components/input-components/Certifications";
import Extracurricular from "./components/input-components/Excurr";
import Navbar from "./components/Navbar";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Input />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/heading" element={<Heading />}></Route>
          <Route path="/objective" element={<Objective />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route
            path="/extracurricular-activities"
            element={<Extracurricular />}
          ></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
