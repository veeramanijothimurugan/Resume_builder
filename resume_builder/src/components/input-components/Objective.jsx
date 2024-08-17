import React, { useContext } from "react";
import "./css/objective.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowLeftLong, faArrowRight, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { navigationContext, objectiveContext } from "../../App";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const objective = ({}) => {
  const {register, handleSubmit, formState: {errors,isValid}} = useForm();
  console.log(errors)

  const { markAsSubmited, trackLength, completeness } =
    useContext(navigationContext);
  const { objective,setObjective } = useContext(objectiveContext);
  const navigation = useNavigate();

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
                A professional summary grabs the employer's attention and
                quickly showcases your top skills and experience.
              </h4>
            </div>
            <p className="alart">* indicates a require field</p>
            <form onSubmit={handleSubmit((data)=>{
              if(isValid){
                markAsSubmited("objective");
                  trackLength(104);
                  completeness(28.56);
                  navigation('/education');
              }
                
            })}>
            <div className="textobj">
              <h5>
                Enter your summary here <span className="alart">*</span>
              </h5>
              <textarea {...register('objective',{required: 'You should enter the details'})}
                onChange={(e)=>{setObjective(e.target.value)}} value={objective}
                placeholder="e.g. Skilled in crafting semantic and accessible HTML5. Proficient in responsive design using CSS3, Bootstrap including Flexbox and Grid. Strong in JavaScript ES6+ features, asynchronous programming, and API integration. Experienced in building React applications, utilizing hooks for state management."
                name="objective"
                className={errors.objective?.message&&"missed"}
              ></textarea>
              {errors.objective?.message&&<p className="error"><FontAwesomeIcon icon={faExclamationTriangle}/> {errors.objective?.message}</p>}
            </div>
              <button className="btn back-btn next-btn" onClick={()=>{navigation('/heading')}}><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</button>
              <button
                type="submit"
                className="btn next-btn"
              >
                Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </form>
          </div>
      </div>
    </>
  );
};

export default objective;
