import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Heading from "./components/input-components/Heading";
import Objective from "./components/input-components/Objective";
import Education from "./components/input-components/Education";
import Projects from "./components/input-components/Projects";
import Skills from "./components/input-components/Skills";
import Certifications from "./components/input-components/Certifications";
import Extracurricular from "./components/input-components/Excurr";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import ProjectDetail from "./components/input-components/ProjectDetail";
import CertificateDetails from "./components/input-components/CertificateDetails";
import Resume from "./components/Resume";

export const navigationContext = createContext();
export const headerContext = createContext();
export const objectiveContext = createContext();
export const eduContex = createContext();
export const skillContex = createContext();
export const projectContex = createContext();
export const certifyContex = createContext();
export const extraContex = createContext();
export const navLinkContex = createContext();
export const clickContex = createContext();
export const showEduContex = createContext();

function App() {
  //header data
  const [headerDetails, setHeaderDetails] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    github: "",
    linkedIn: "",
  });


  //objective data
  const [objective, setObjective] = useState();

  //education data
  const [bachelorsData, setbachelorsData] = useState({
    college: "",
    degree: "",
    field: "",
    city: "",
    cgpa: "",
    from: "",
    to: "",
  });

  const [hsc, SetHsc] = useState({
    hscschool: "",
    hscprecentage: "",
    hsccity: "",
    hscfrom: "",
    hscto: "",
  });

  const [sslc, SetSslc] = useState({
    sslcschool: "",
    sslcpercentage: "",
    sslccity: "",
    sslcfrom: "",
    sslcto: "",
  });

  const [diploma, setDiploma] = useState({
    dcollege: "",
    dfield: "",
    dcity: "",
    dpercentage: "",
    dfrom: "",
    dto: "",
  });

  //skill data
  const [skills, setSkills] = useState([]);

  //project data
  const [projects, setProjects] = useState([]);

  const [submitedPage, setSubmitedPage] = useState({
    heading: false,
    objective: false,
    education: false,
    skills: false,
    projects: false,
    certificate: false,
    extracurricular: false,
  });

  //cerificate data
  const [certificates, setCertificates] = useState([]);

  //extracurricular data
  const [activites, setActivities] = useState([]);

  //navlink manupulation
  const [buildCV, setBuildCV] = useState(false);

  //nav highlighting
  const [click, setClick] = useState(false);

  const markAsSubmited = (page) => {
    setSubmitedPage((prev) => ({ ...prev, [page]: true }));
  };

  const [length, setLength] = useState(0);

  const trackLength = (divLength) => {
    setLength(divLength);
  };

  const [completeLen, setCompleteLen] = useState(0);

  const completeness = (comLen) => {
    setCompleteLen(comLen);
  };

  const [showInput, setShowInput] = useState(false);
  const InputTrack = (result) => {
    setShowInput(result);
  };

  const [showB,setShowB] = useState(false);
  const [showHsc,setShowHsc] = useState(false);
  const [showSslc,setShowSslc] = useState(false);
  const [showD,setShowD] = useState(false);

  return (
    <>
      <navigationContext.Provider
        value={{ InputTrack, markAsSubmited, trackLength, completeness }}
      >
        <headerContext.Provider value={{ headerDetails, setHeaderDetails }}>
          <objectiveContext.Provider value={{ objective, setObjective }}>
            <eduContex.Provider
              value={{
                bachelorsData,
                setbachelorsData,
                hsc,
                SetHsc,
                sslc,
                SetSslc,
                diploma,
                setDiploma,
              }}
            >
              <skillContex.Provider value={{ skills, setSkills }}>
                <projectContex.Provider value={{ projects, setProjects }}>
                  <certifyContex.Provider
                    value={{ certificates, setCertificates }}
                  >
                    <extraContex.Provider value={{ activites, setActivities }}>
                      <navLinkContex.Provider value={{ buildCV, setBuildCV }}>
                        <clickContex.Provider value={{click,setClick}}>
                          <showEduContex.Provider value={{showB,showD,showHsc,showSslc,setShowB,setShowD,setShowHsc,setShowSslc}}>
                          <Router>
                            <Navbar InputTrack={InputTrack} />
                            {showInput && (
                              <Input
                                submitedPage={submitedPage}
                                length={length}
                                completeLen={completeLen}
                              />
                            )}
                            <Routes>
                              <Route
                                path="/"
                                element={<Home InputTrack={InputTrack} />}
                              ></Route>
                              <Route
                                path="/resume"
                                element={<Resume/>}
                              ></Route>
                              <Route
                                path="/education"
                                element={<Education />}
                              ></Route>
                              <Route
                                path="/heading"
                                element={<Heading />}
                              ></Route>
                              <Route
                                path="/objective"
                                element={<Objective />}
                              ></Route>
                              <Route
                                path="/projects"
                                element={<Projects />}
                              ></Route>
                              <Route
                                path="/certifications"
                                element={<Certifications />}
                              ></Route>
                              <Route
                                path="/extracurricular"
                                element={<Extracurricular />}
                              />
                              <Route
                                path="/skills"
                                element={<Skills />}
                              ></Route>
                              <Route element={<ProjectDetail />}></Route>
                              <Route element={<CertificateDetails />}></Route>
                            </Routes>
                          </Router>
                          </showEduContex.Provider>   
                        </clickContex.Provider>
                      </navLinkContex.Provider>
                    </extraContex.Provider>
                  </certifyContex.Provider>
                </projectContex.Provider>
              </skillContex.Provider>
            </eduContex.Provider>
          </objectiveContext.Provider>
        </headerContext.Provider>
      </navigationContext.Provider>
    </>
  );
}

export default App;
