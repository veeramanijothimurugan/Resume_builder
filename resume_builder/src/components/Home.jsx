import React from "react";
import bg from "../assets/images/bg.png";
import resume from "../assets/images/resume.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faDownload,
  faEdit,
  faFileCircleCheck,
  faGears,
  faGraduationCap,
  faHammer,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const home = ({InputTrack}) => {
  return (
    <div className="home-container container">
      <div className="intro">
        <h1 style={{ fontWeight: 800 }}>
          WELCOME TO{" "}
          <span style={{ fontWeight: 800 }} className="alart">
            RESUME SCULPTURE
          </span>
        </h1>
        <h3 style={{ color: "#454A84" }}>
          The Ultimate Online Resume Builder for Freshers! Create Your Resume
          with Confidence
        </h3>
      </div>
      <div className="resume-div">
        <img className="bg" src={bg} alt="" />
        <img className="resume-img" src={resume} alt="" />
        <h1 className="ats">65+ ATS SCORE</h1>
      </div>
      <br />
      <div className="welcome container">
        <h3 className="res-qus">
          ARE YOU A FRESHER LOOKING TO MAKE A STRONG IMPRESSION IN THE JOB
          MARKET?
        </h3>
        <p className="welcome-text">
          {" "}
          You've come to the right place. At{" "}
          <span style={{ color: "orangered", fontSize: "20px" }}>
            Resume Sculpture
          </span>
          , we specialize in helping you craft the perfect resume that stands
          out and increases your chances of getting hired.
        </p>
      </div>
      <div className="why container">
        <h2 className="qus" style={{ fontWeight: 700 }}>
          WHY CHOOSE RESUME SCULPTURE?
        </h2>
        <ul className="why-list row">
          <li className="why-ans col-lg-4">
            <FontAwesomeIcon className="double" icon={faGraduationCap} />
            <br />
            Tailored for Freshers: Our platform is designed specifically for
            fresh graduates and entry-level job seekers. We understand the
            unique challenges you face and provide tools to highlight your
            strengths and potential.
          </li>

          <li className=" why-ans col-lg-3">
            <FontAwesomeIcon className="double" icon={faBusinessTime} />
            <br />
            Higher Chances of Getting Hired: A well-crafted resume is your
            ticket to landing your dream job. Our resume builder ensures that
            your resume is professional, polished, and aligned with industry
            standards, giving you a competitive edge.
          </li>
          <li className=" why-ans col-lg-4">
            <FontAwesomeIcon className="double" icon={faFileCircleCheck} />
            <br />
            65+ ATS Resume Checker Score: Our resumes are optimized to score
            high on Applicant Tracking Systems (ATS), ensuring that your
            application gets noticed by recruiters. With an ATS score of 65+,
            your resume is more likely to make it to the interview stage.
          </li>
        </ul>
      </div>
      <div className="fixed-temp container">
        <h2 className="qus" style={{ fontWeight: 700 }}>
          FIXED TEMPLATE <FontAwesomeIcon className="hammer" icon={faHammer}/>
        </h2>
        <p>
          We offer a fixed, professionally designed resume template that has
          been tested and proven to be effective. This template ensures
          consistency and meets the highest standards in resume formatting. Just
          fill in your details, and our template will do the rest, making sure
          your resume looks great every time.
        </p>
      </div>
      <div className="easy-container container">
        <h2 className="qus" style={{ fontWeight: 700 }}>
          EASY TO USE
        </h2>
        <div className="easy-div">
          <div className="ease-icon">
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div className="text">
            <p>
              Enter Your Details: Fill in your personal information, education,
              skills, and work experience. Our intuitive interface makes it easy
              to input and organize your data.
            </p>
          </div>
        </div>
        <div className="easy-div">
          <div className="ease-icon">
            <FontAwesomeIcon icon={faGears} />
          </div>
          <div className="text">
            <p>
              Customize Your Content: While the template is fixed, you can still
              add your unique touch by customizing the content to reflect your
              personal experiences and skills.
            </p>
          </div>
        </div>
        <div className="easy-div">
          <div className="ease-icon">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <div className="text">
            <p>
              Download and Apply: Once you're satisfied with your resume,
              download it in your preferred format and start applying for jobs
              with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="getStart container">
        <h2 className="qus" style={{ fontWeight: 700 }}>
          Get Start Today{" "}
          <FontAwesomeIcon className="blink" icon={faWandSparkles} />
        </h2>
        <h4>
          Join thousands of successful job seekers who have landed their dream
          jobs with the help of <span>Resume Sculpture</span>. Start building
          your resume today and take the first step towards a successful career.
        </h4>
        <Link to="/heading">
          <button className="build-btn" onClick={()=>{InputTrack(true)}}>Build Your Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default home;
