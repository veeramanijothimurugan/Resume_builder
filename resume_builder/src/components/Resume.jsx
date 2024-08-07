import { React, useContext } from "react";
import "../components/resume.css";
import {
  certifyContex,
  eduContex,
  headerContext,
  objectiveContext,
  projectContex,
  skillContex,
} from "../App";

const resume = () => {
  const { headerDetails } = useContext(headerContext);
  const { objective } = useContext(objectiveContext);
  const { bachelorsData, hsc, sslc, diploma } = useContext(eduContex);
  const { skills } = useContext(skillContex);
  const { projects } = useContext(projectContex);
  const {certificates,setCertificates} = useContext(certifyContex);
  return (
    <>
      <div className="resume-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="preview col-lg-6 col-md-6 col-sm-6">
          <div className="heading">
            <h3 className="thalaipu">Resume Preview</h3>
          </div>
          <div className="resume">
            <div className="header">
              <h4>
                {headerDetails.firstName} {headerDetails.lastName}
              </h4>
              <h5>{headerDetails.jobTitle}</h5>
              <h5>
                {headerDetails.phone} |{" "}
                <a className="mail" href="">
                  {headerDetails.email}
                </a>{" "}
                | {headerDetails.city}
              </h5>
              <h5>
                <a className="mail" href={headerDetails.github}>
                  GitHub
                </a>{" "}
                |{" "}
                <a className="mail" href={headerDetails.linkedIn}>
                  LinedIn
                </a>
              </h5>
            </div>
            <div className="objective">
              <h5>PROFESSIONAL OBJECTIVE</h5>
              <hr className="line" />
              <p className="para">{objective}</p>
            </div>
            <div className="education">
              <h5>EDUCATION</h5>
              <hr className="line" />
              <h6 className="para">{bachelorsData.college}</h6>
              <h6 className="right">{bachelorsData.city}</h6>
              <h6>
                {bachelorsData.field} | CGPA: {bachelorsData.cgpa}
              </h6>
              <h6 className="right">(2020 - 2024)</h6>
              <h6 className="next">{hsc.school}</h6>
              <h6 className="right">{hsc.city}</h6>
              <h6>12th | Percentage: {hsc.precentage}%</h6>
              <h6 className="right">(2019 - 2020)</h6>
              <h6 className="next">{sslc.school}</h6>
              <h6 className="right">{sslc.city}</h6>
              <h6>10th | Percentage: {sslc.precentage}%</h6>
              <h6 className="right">(2017 - 2018)</h6>
              <h6 className="next">{diploma.college}</h6>
              <h6 className="right">{diploma.city}</h6>
              <h6>
                {diploma.field} | CGPA: {diploma.cgpa}
              </h6>
              <h6 className="right">(2020 - 2024)</h6>
            </div>
            <div className="education">
              <h5>SKILLS</h5>
              <hr className="line" />
              <div className="skills">
                {skills.map((skill) => (
                  <p className="para"> {skill} |</p>
                ))}
              </div>
            </div>
            <div className="projects education">
              <h5>PROJECTS</h5>
              <hr className="line" />
              <ol className="probj">
                {projects.map((project, index) => (
                  <li key={index} className="next">
                    <h6 className="para">
                      {project.name} ({project.type})
                    </h6>
                    <a className="right" href={project.link}>
                      View Demo
                    </a>
                    <h6>Technologies: {project.technologies}</h6>
                    <ul className="probj">
                      <li>{project.objective}</li>
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div className="certificate education">
              <h5>CERTICATIONS</h5>
              <hr className="line" />
              <ul className="probj">
                <h2>{certificates.length}</h2>
                
                {certificates.map((certificate) => {
                  <li>
                    <p className="para">
                      {certificate.name} – {certificate.provider}
                    </p>
                    <a className="right" href={certificate.credential}>
                      View Credentials
                    </a>
                  </li>;
                })}
              </ul>
            </div>
            <div className="extracurricular education">
              <h5>EXTRACURRICULAR ACTIVITIES</h5>
              <hr className="line" />
              <ul className="probj">
                <li>
                  <p className="para">
                    Engaged in Inter-Department kabaddi and TCE Marathon ’22 -
                    ’23.
                  </p>
                </li>
                <li>
                  <p className="para">
                    Participated in Tamil Speech and Photography events by IT
                    associations in ’22 – ’23.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
