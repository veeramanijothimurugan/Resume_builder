import React from "react";
import "./input.css";
import Heading from "./input-components/Heading";

const Input = () => {
  return (
    <>
      <section>
        <div className="input-container container-fluid px-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-3 col-sm-3 vh-100 traking">
              <div className="progress-bar"></div>
              <p className="step">
                <span className="steps">1</span> Heading
              </p>
              <p className="step">
                <span className="steps">2</span> Professional objective
              </p>
              <p className="step">
                <span className="steps">3</span> Education
              </p>
              <p className="step">
                <span className="steps">4</span> Skills
              </p>
              <p className="step">
                <span className="steps">5</span> Projects
              </p>
              <p className="step">
                <span className="steps">7</span> Certifications
              </p>
              <p className="step">
                <span className="steps">8</span> Extracurricular activites
              </p>
              <p>Resume completeness</p>
              <div className="completion">
                <div className="scal"></div>
                <p className="precentage">10%</p>
              </div>
              <br />
              <div className="copyrights">
                <p>© 2024, Designed by <a href="">Veeramani</a>. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Input;
