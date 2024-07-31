import React from 'react'
import "./css/education.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faCheck, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div>
      <div className="objective-container">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="container-fluid col-lg-6 col-md-6 col-sm-6">
          <div className="wordings">
            <h2 className="title">Let's Highlight Your Education</h2>
            <ul className="list">
              <li>Employers review the education section swiftly.</li>
              <li>We’ll ensure it's formatted for maximum clarity.</li>
            </ul>
          </div>
          <p className="alart">*indicates a require field</p>
          <h4 className="heading">Bachelors</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p className="lable">College Names <span className="alart">*</span></p>
              <input
                placeholder="e.g. Thiagarajar College of Engineering"
                type="text"
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Degree <span className="alart">*</span></p>
              <select name="degree" id="degree">
                <option value="B.Tech">B.Tech</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Field of Study <span className="alart">*</span></p>
              <input placeholder="e.g. Information Technology" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">City <span className="alart">*</span></p>
              <input placeholder="e.g. Madurai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">GCPA <span className="alart">*</span></p>
              <input placeholder="e.g. 7.95" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From <span className="alart">*</span></p>
              <select name="degree" id="degree">
                <option value="B.Tech">2020</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To <span className="alart">*</span></p>
              <select name="degree" id="degree">
                <option value="B.Tech">2024</option>
              </select>
            </div>
          </div>
          <h4 className="heading">HSC (Optional)</h4>
          <div className="row">
            <div className="col-lg-4  col-md-4">
              <p className="lable">School Name</p>
              <input
                placeholder="e.g. Devangar Higher Secondary School"
                type="text"
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Percentage</p>
              <input placeholder="e.g. 80" type="text" />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">City</p>
              <input placeholder="e.g. Aruppukottai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From</p>
              <select name="degree" id="degree">
                <option value="B.Tech">2019</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To</p>
              <select name="degree" id="degree">
                <option value="B.Tech">2020</option>
              </select>
            </div>
          </div>
          <h4 className="heading">SSLC</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p className="lable">School Name<span className="alart">*</span></p>
              <input
                placeholder="e.g. Devangar Higher Secondary School"
                type="text"
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Percentage<span className="alart">*</span></p>
              <input placeholder="e.g. 81" type="text" />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">City<span className="alart">*</span></p>
              <input placeholder="e.g. Aruppukottai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From<span className="alart">*</span></p>
              <select name="degree" id="degree">
                <option value="B.Tech">2017</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To<span className="alart">*</span></p>
              <select name="degree" id="degree">
                <option value="B.Tech">2018</option>
              </select>
            </div>
          </div>
          <h4 className="heading">Diploma (Optional)</h4>
          <div className="row">
            <div className="col-lg-4  col-md-4">
              <p className="lable">School Name</p>
              <input
                placeholder="e.g. XXX Diploma College"
                type="text"
              />
            </div>
            <div className="col-lg-4  col-md-4">
              <p className="lable">Degree</p>
              <input placeholder="e.g. Information Technology" type="text" />
            </div>
            <div className="col-lg-4  col-md-4">
              <p className="lable">Field of Study</p>
              <input placeholder="e.g. Information Technology" type="text" />
            </div>
            <div className="col-lg-6 col-md-4">
              <p className="lable">Percentage</p>
              <input placeholder="e.g. 79" type="text" />
            </div>
            <div className="col-lg-6 col-md-4">
              <p className="lable">City</p>
              <input placeholder="e.g. YYY" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From</p>
              <select name="degree" id="degree">
                <option value="B.Tech">2019</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To</p>
              <select name="degree" id="degree">
                <option value="B.Tech">2020</option>
              </select>
            </div>
          </div>
          <Link to="/skills">
            <button className='btn next-btn'>Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Education
