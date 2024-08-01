import React, { useState } from "react";
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
import objective from "./components/input-components/Objective";

function App() {
  const [submitedPage,setSubmitedPage] = useState({
    heading: false,
    objective: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
    extracurricular: false,
  });

  const markAsSubmited = (page) =>{
    setSubmitedPage((prev) =>({...prev,[page] : true}));
  }

  return (
    <>
      <Router>
        <Navbar />
        <Input submitedPage={submitedPage}/>
        <Routes>
          <Route path="/" element={<Home markAsSubmited={markAsSubmited}/>} ></Route>
          <Route path="/resume" element={<Resume markAsSubmited={markAsSubmited}/>} ></Route>
          <Route path="/education" element={<Education markAsSubmited={markAsSubmited}/>} ></Route>
          <Route path="/heading" element={<Heading markAsSubmited={markAsSubmited}/>}></Route>
          <Route path="/objective" element={<Objective markAsSubmited={markAsSubmited}/>} ></Route>
          <Route path="/projects" element={<Projects markAsSubmited={markAsSubmited}/>} ></Route>
          <Route path="/certifications" element={<Certifications markAsSubmited={markAsSubmited}/>}></Route>
          <Route
            path="/extracurricular"
            element={<Extracurricular />} markAsSubmited={markAsSubmited}
          ></Route>
          <Route path="/skills" element={<Skills />} markAsSubmited={markAsSubmited}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
