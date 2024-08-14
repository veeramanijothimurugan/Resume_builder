import React from "react";
import "./input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Input = ({ submitedPage, length, completeLen }) => {

  return (
    <>
      <section>
        <div className="input-container container-fluid px-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-3 col-sm-3 vh-100 traking">
              <div className="progress-bar" style={{ height: length }}></div>
              <p className="step">
                <span className="steps">
                  {submitedPage.heading ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "1"
                  )}
                </span>{" "}
                Heading
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.objective ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "2"
                  )}
                </span>{" "}
                Professional objective
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.education ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "3"
                  )}
                </span>{" "}
                Education
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.skills ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "4"
                  )}
                </span>{" "}
                Skills
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.projects ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "5"
                  )}
                </span>{" "}
                Projects
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.certificate ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "6"
                  )}
                </span>{" "}
                Certifications
              </p>
              <p className="step">
                <span className="steps">
                  {submitedPage.extracurricular ? (
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                  ) : (
                    "7"
                  )}
                </span>{" "}
                Extracurricular activites
              </p>
              <p>Resume completeness</p>
              <div className="completion">
                <div
                  className="scal"
                  style={{ width: completeLen + "%" }}
                ></div>
                <p className="precentage">{Math.round(completeLen)}%</p>
              </div>
              <br />
              <div className="copyrights">
                <p>
                  © 2024, Designed by <a href="">Veeramani</a>. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Input;
