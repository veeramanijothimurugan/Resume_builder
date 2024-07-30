import React, { useState } from "react";
import "./css/project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [projectNum, setProjectNum] = useState(0);

  return (
    <>
      <div className="project-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="wordings">
            <h2 className="qus">
              How can personal <span className="Highlight">PROJECT</span>{" "}
              benefit your job application?
            </h2>
            <h4 className="answer">
              Personal projects show initiative, passion for the field, and the
              ability to work independently.
            </h4>
          </div>
          <form>
            <div className="project-input">
              <p className="lable">Enter no.of. Project</p>
              <input
              placeholder="e.g. 2"
              className="col-lg-10 col-md-10 col-sm-10 col-xs-10 skill-input"
              type="text"
            />
            <button
              className="add-btn col-lg-2 col-md-2 col-sm-2 col-xs-2 add"
              type="submit"
            >
              ADD <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
          </form>
          <ProjectDetail/>
        </div>
      </div>
    </>
  );
};

export default Projects;
