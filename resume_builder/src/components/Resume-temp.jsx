import React from "react";
import "../components/resume.css";

const resume = () => {
  return (
    <>
      <div className="resume-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="preview col-lg-6 col-md-6 col-sm-6">
          <div className="resume">
            <div className="header">
              <h4>VEERAMANI JOTHIMURUGAN</h4>
              <h5>WEB DEVELOPER</h5>
              <h5>
                +91 8072640512 |{" "}
                <a className="mail" href="">
                  veeramanijothimurugan@gmail.com
                </a>{" "}
                | Aruppukottai
              </h5>
              <h5>
                <a className="mail" href="">GitHub</a> | <a className="mail" href="">LinedIn</a>
              </h5>
            </div>
            <div className="objective">
              <h5>PROFESSIONAL OBJECTIVE</h5>
              <hr className="line" />
              <p className="para">
                Skilled in crafting semantic and accessible HTML5. Proficient in
                responsive design using CSS3, Bootstrap including Flexbox and
                Grid. Strong in JavaScript ES6+ features, asynchronous
                programming, and API integration. Experienced in building React
                applications, utilizing hooks for state management.
              </p>
            </div>
            <div className="education">
              <h5>EDUCATION</h5>
              <hr className="line" />
              <h6 className="para">THIAGARAJAR COLLEGE OF ENGINEERING</h6>
              <h6 className="right">Madurai</h6>
              <h6>B.tech Information Technology | CGPA: 8</h6>
              <h6 className="right">(2020 - 2024)</h6>
              <h6 className="next">DEVANGAR HIGHER SECONDARY SCHOOL</h6>
              <h6 className="right">Aruppukottai</h6>
              <h6>12th | Percentage: 80%</h6>
              <h6 className="right">(2019 - 2020)</h6>
              <h6 className="next">DEVANGAR HIGHER SECONDARY SCHOOL</h6>
              <h6 className="right">Aruppukottai</h6>
              <h6>10th | Percentage: 81%</h6>
              <h6 className="right">(2017 - 2018)</h6>
            </div>
            <div className="skills education">
              <h5>SKILLS</h5>
              <hr className="line" />
              <p className="para">
                Java | MySQL | HTML5 | CSS3 | JavaScript | React Js | Figma |
                Problem Solving | Leadership
              </p>
            </div>
            <div className="projects education">
              <h5>PROJECTS</h5>
              <hr className="line" />
              <ol className="probj">
                <li>
                  <h6 className="para">AGRISHOP (Web Application)</h6>
                  <a className="right" href="">
                    View Demo
                  </a>
                  <h6>Technologies: HTML, CSS, JavaScript, Firebase</h6>
                  <ul className="probj">
                    <li>
                      The project aims to lower vegetable and fruit prices by
                      eliminating brokerage costs, enabling farmers to sell
                      directly to customers for fresher and more affordable
                      produce.
                    </li>
                  </ul>
                </li>
                <li>
                  <h6 className="next">FOOD CART (Web Application)</h6>
                  <a className="right" href="">
                    View Demo
                  </a>
                  <h6>Technologies: HTML, CSS, React Js</h6>
                  <ul className="probj">
                    <li>
                      React-based web app that allows users to browse menus, add
                      items to their cart, and manage their orders seamlessly.
                    </li>
                  </ul>
                </li>
                <li>
                  <h6 className="next">WEATHER APP (Web Application)</h6>
                  <a className="right" href="">
                    View Demo
                  </a>
                  <h6>Technologies: HTML, CSS, React Js</h6>
                  <ul className="probj">
                    <li>
                      Integrated real-time weather data from OpenWeather API,
                      displaying dynamic images based on conditions, while
                      ensuring a smooth user experience through robust error
                      handling and input validation.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="certificate education">
              <h5>CERTICATIONS</h5>
              <hr className="line"/>
              <ul className="probj">
                <li>
                  <p className="para">Introduction to Front-end development – Meta</p>
                  <a className="right" href="">View Credentials</a>
                </li>
                <li>
                  <p className="para">Mastering JavaScript Fundamentals – Geekster</p>
                  <a className="right" href="">View Credentials</a>
                </li>
              </ul>
            </div>
            <div className="extracurricular education">
              <h5>EXTRACURRICULAR ACTIVITIES</h5>
              <hr className="line"/>
              <ul className="probj">
                <li>
                  <p className="para">Engaged in Inter-Department kabaddi and TCE Marathon ’22 - ’23.</p>
                </li>
                <li>
                  <p className="para">Participated in Tamil Speech and Photography events by IT associations in ’22 – ’23.</p>
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
