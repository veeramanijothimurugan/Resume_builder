import React, { useContext, useState } from "react";
import "./css/project.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faPlus,
  faExclamationTriangle,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import ProjectDetail from "./ProjectDetail";
import { navigationContext } from "../../App";

const Projects = () => {
  const { markAsSubmited, trackLength, completeness } =
    useContext(navigationContext);
  const [num, setNum] = useState(0);
  const [component, setComponent] = useState([]);
  const navigation = useNavigate();

  const handleNum = (event) => {
    setNum(parseInt(event.target.value));
  };

  const addProject = (event) => {
    event.preventDefault();
    if (!isNaN(num) && num > 0) {
      setComponent([...Array(num).keys()]);
    }
  };

  return (
    <>
      <div className="objective-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        <div className="detail col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="objective-container">
            <div className="wordings">
              <h2 className="qus">
                How can personal <span className="Highlight">PROJECT</span>{" "}
                benefit your job application?
              </h2>
              <h4 className="answer">
                Personal projects show initiative, passion for the field, and
                the ability to work independently.
              </h4>
            </div>
            <form onSubmit={addProject}>
              <div className="project-input">
                <p className="lable">
                  Enter no.of. Projects <span className="alart">*</span>
                </p>
                <input
                  placeholder="e.g. 2"
                  className="col-lg-10 col-md-10 col-sm-9 col-xs-9 skill-input"
                  type="number"
                  onChange={handleNum}
                />
                <button
                  className="add-btn col-lg-2 col-md-2 col-sm-3 col-xs-3 add"
                  type="submit"
                >
                  ADD <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </form>
            {component.length <= 1&&<p className="error"><FontAwesomeIcon icon={faExclamationTriangle}/> You should add atleast 2 Projects</p>}
            {component.map((_, index) => (
              <ProjectDetail key={index} index={index} />
            ))}
            {component.length > 0 && (
              <Link to="/certifications">
                <button
                  className="btn next-btn"
                  onClick={() => {
                    markAsSubmited("projects");
                    trackLength(260);
                    completeness(71.4);
                  }}
                >
                  Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </Link>
            )}
            <button className="btn back-btn next-btn" onClick={()=>{navigation('/skills')}}><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
