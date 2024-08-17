import { React, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowAltCircleRight,
  faFileCircleCheck,
  faExclamationCircle,
  faTrashCan,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./css/excurr.css"
import { extraContex, navigationContext } from "../../App";
import { useNavigate } from "react-router-dom";

const excurr = () => {
  const {markAsSubmited,completeness} = useContext(navigationContext);
  const {activites, setActivities} = useContext(extraContex);
  const [activity, setActivity] = useState("");
  const [finalize,setFinalize] = useState(false);
  const navigation = useNavigate();

  const handleActivity = (e) => {
    setActivity(e.target.value);
  };

  const handleActivities = (e) => {
    e.preventDefault();
    if (activity.trim() !== "") {
      setActivities([...activites, activity.trim()]);
      setActivity("");
    }
  };

  const handleRemove = (index) => {
    console.log("Button clicked");
    const newArray = activites.filter((activity, i) => i !== index);
    setActivities(newArray);
  };

  return (
    <>
      <div className="project-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        <div className="detail col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className=" wordings">
            <h2 className="qus">
              How do
              <span className="Highlight"> extracurricular activities</span>{" "}
              contribute to your professional development?
            </h2>
            <h4 className="answer">
              Extracurricular activities build soft skills, demonstrate
              initiative, and show a well-rounded personality, all of which are
              valuable to employers.
            </h4>
          </div>
          <form onSubmit={handleActivities}>
            <div className="project-input">
              <p className="lable">Enter your activity here <span className="alart">*</span></p>
              <input
                onChange={handleActivity}
                placeholder="e.g. Engaged in Inter-Department kabaddi and TCE Marathon ’22 - ’23."
                className="col-lg-10 col-md-10 col-sm-9 col-xs-8 skill-input"
                type="text"
              />
              <button
                className="add-btn col-lg-2 col-md-2 col-sm-3 col-xs-4 add"
                type="submit"
              >
                ADD <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </form>
          {activites.length <= 1&&<p className="error"><FontAwesomeIcon icon={faExclamationCircle}/> Note: You should add atleast 2 Acitivites</p>}
          {activites.length>0&&<div className="activities">
            {activites.map((activity,index)=>(
              <ul key={index}>
                <li className="activity">{index+1}.  {activity}<FontAwesomeIcon className="trash" onClick={()=>{handleRemove(index)}} icon={faTrashCan}/></li>
              </ul>
            ))}
          </div>}
          {activites.length>0&&!finalize &&<button className='btn next-btn' onClick={()=>{setFinalize(true);markAsSubmited('extracurricular');completeness(100)}}>Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>}
          {finalize && <Link to="/resume"><button className="finalize">Finalize <FontAwesomeIcon icon={faFileCircleCheck}/></button></Link>}
          <button className="btn back-btn next-btn" onClick={()=>{navigation('/certifications')}}><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</button>
        </div>
      </div>
    </>
  );
};

export default excurr;
