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
    certificate: false,
    extracurricular: false,
  });

  const markAsSubmited = (page) =>{
    setSubmitedPage((prev) =>({...prev,[page] : true}));
  }

  const [length,setLength] = useState(0);

  const trackLength = (divLength)=>{
    setLength(divLength);
  }

  const [completeLen,setCompleteLen] = useState(0);

  const completeness = (comLen) =>{
    setCompleteLen(comLen);
  }

  const [showInput,setShowInput] = useState(false);
  const InputTrack = (result) =>{
    setShowInput(result);
  }

  return (
    <>
      <Router>
        <Navbar InputTrack={InputTrack}/>
        {showInput && <Input submitedPage={submitedPage} length={length} completeLen={completeLen}/>}
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/resume" element={<Resume markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>} ></Route>
          <Route path="/education" element={<Education markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>} ></Route>
          <Route path="/heading" element={<Heading markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>}></Route>
          <Route path="/objective" element={<Objective markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>} ></Route>
          <Route path="/projects" element={<Projects markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>} ></Route>
          <Route path="/certifications" element={<Certifications markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>}></Route>
          <Route
            path="/extracurricular"
            element={<Extracurricular markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>}
          ></Route>
          <Route path="/skills" element={<Skills markAsSubmited={markAsSubmited} trackLength={trackLength} completeness={completeness}/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
