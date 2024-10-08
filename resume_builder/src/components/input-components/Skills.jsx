import React, { useContext } from "react";
import "./css/skills.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faPlus, faXmark, faExclamationTriangle, faExclamationCircle, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { navigationContext, skillContex } from "../../App";

const Skills = () => {

  const {markAsSubmited,trackLength,completeness} = useContext(navigationContext);
  const {skills,setSkills} = useContext(skillContex);
  const [input, setInput] = useState("");
  const navigation = useNavigate();

  const settingSkill = (event) => {
    const skill = event.target.value;
    setInput(skill);
  };

  const addSkill = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setSkills([...skills, input.trim()]);
      console.log(skills);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    const newArray = skills.filter((skill, i) => i !== index);
    setSkills(newArray);
  };

  return (
    <div className="skill-container container-fluid">
      <div className="col-lg-3 col-md-3 col-sm-3"></div>
      <form onSubmit={
        addSkill
      }>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="wordings">
            <h2 className="qus">
              Why is it important to list your{" "}
              <span className="Highlight">SKILLS</span> on a resume?
            </h2>
            <h4 className="answer">
              Listing your skills on a resume highlights your capabilities and
              expertise, making it easier for employers to see how you fit the
              job requirements.
            </h4>
          </div>
          <div className="">
            <p className="lable">Enter your skills here <span className="alart">*</span></p>
            <input
              placeholder="e.g. React Js"
              className="col-lg-10 col-md-10 col-sm-10 col-xs-9 skill-input"
              onChange={settingSkill}
              type="text"
            />
            <button
              className="add-btn col-lg-2 col-md-2 col-sm-2 col-xs-3 add"
              type="submit"
            >
              ADD <FontAwesomeIcon icon={faPlus} />
            </button>
            {skills.length <= 4 && <p className="error  adjust"><FontAwesomeIcon icon={faExclamationCircle}/> Note: You should enter atleast 5 skills</p>}
          </div>
          <br />
          {skills.length > 0 && (
            <>
              <div className="check-skills">
                
                <ul className="row">
                  {skills.map((skill, index) => (
                    <li
                      className="list remove col-lg-5 col-md-5 col-sm-5 col-xs-5"
                      key={index}
                    >
                      {skill}{" "}
                      <span
                        onClick={() => handleRemove(index)}
                      >
                        <FontAwesomeIcon className="delete" icon={faXmark} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={skills.length>=5&&"/projects"}>
                <button className="btn next-btn" onClick={()=>{markAsSubmited('skills'); trackLength(208);completeness(57.12)} }>Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
              </Link>
            </>
          )}
          <button className="btn back-btn next-btn" onClick={()=>{navigation('/education')}}><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
