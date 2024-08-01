import React from "react";
import "./css/objective.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faCheck, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const objective = ({markAsSubmited}) => {

  const handleObjective = (e) =>{
    e.preventDefault();
    markAsSubmited('heading');
  }
  return (
    <>
      <div className="objective-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="wordings">
            <h2 className="qus">
              Why is a <span className="Highlight">PROFESSIONAL SUMMARY</span>{" "}
              needed?
            </h2>
            <h4 className="list">
              {" "}
              A professional summary grabs the employer's attention and quickly
              showcases your top skills and experience.
            </h4>
          </div>
          <p className="alart">* indicates a require field</p>
          <div className="text">
            <textarea
              placeholder="e.g. Skilled in crafting semantic and accessible HTML5. Proficient in responsive design using CSS3, Bootstrap including Flexbox and Grid. Strong in JavaScript ES6+ features, asynchronous programming, and API integration. Experienced in building React applications, utilizing hooks for state management."
              name=""
              id=""
            ></textarea>
          </div>
          <Link to="/education">
            <button className="btn next-btn" onClick={handleObjective}>Next<FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default objective;
