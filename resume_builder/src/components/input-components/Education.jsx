import React,{useContext} from 'react'
import "./css/education.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { eduContex, navigationContext } from '../../App';

const Education = () => {
  const {markAsSubmited,trackLength,completeness} = useContext(navigationContext);
  const {bachelorsData,setbachelorsData,hsc,SetHsc,sslc,SetSslc,diploma,setDiploma} = useContext(eduContex);

  const handleBachelorData = (event) => {
    const { name, value } = event.target;
    setbachelorsData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log("Methode invoked!!");
  };

  const handleHscData = (event) => {
    const { name, value } = event.target;
    SetHsc((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log("Methode invoked!!");
  };

  const handleSslcData = (event) => {
    const { name, value } = event.target;
    SetSslc((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log("Methode invoked!!");
  };

  const handleDiplomaData = (event) => {
    const { name, value } = event.target;
    setDiploma((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log("Methode invoked!!");
  };

  const handleSubmit = () => {
    console.log("buttonClicked");
  };

  const years = [];
  const generateYear = () => {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      years.push(year);
    }
  };
  generateYear();

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
              <input name='college' onChange={handleBachelorData} value={bachelorsData.college}
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
              <input name='field' onChange={handleBachelorData} value={bachelorsData.field} placeholder="e.g. Information Technology" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">City <span className="alart">*</span></p>
              <input name='city' onChange={handleBachelorData} value={bachelorsData.city} placeholder="e.g. Madurai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">GCPA <span className="alart">*</span></p>
              <input name='cgpa' onChange={handleBachelorData} value={bachelorsData.cgpa} placeholder="e.g. 7.95" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From <span className="alart">*</span></p>
              <select name="from" value={bachelorsData.from} id='degree'>
                <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To <span className="alart">*</span></p>
              <select name="to" value={bachelorsData.to} id='degree'>
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <h4 className="heading">HSC (Optional)</h4>
          <div className="row">
            <div className="col-lg-4  col-md-4">
              <p className="lable">School Name</p>
              <input name='school' onChange={handleHscData} value={hsc.school}
                placeholder="e.g. Devangar Higher Secondary School"
                type="text"
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Percentage</p>
              <input name='precentage' onChange={handleHscData} value={hsc.precentage} placeholder="e.g. 80" type="text" />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">City</p>
              <input name='city' onChange={handleHscData} value={hsc.city} placeholder="e.g. Aruppukottai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From</p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={hsc.from} >{year}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To</p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={hsc.to} >{year}</option>
                ))}
              </select>
            </div>
          </div>
          <h4 className="heading">SSLC</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p className="lable">School Name<span className="alart">*</span></p>
              <input name='school' onChange={handleSslcData} value={sslc.school}
                placeholder="e.g. Devangar Higher Secondary School"
                type="text"
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">Percentage<span className="alart">*</span></p>
              <input name='precentage' onChange={handleSslcData} value={sslc.precentage} placeholder="e.g. 81" type="text" />
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="lable">City<span className="alart">*</span></p>
              <input name='city' onChange={handleSslcData} value={sslc.city} placeholder="e.g. Aruppukottai" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From<span className="alart">*</span></p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={sslc.from} >{year}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To<span className="alart">*</span></p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={sslc.to} >{year}</option>
                ))}
              </select>
            </div>
          </div>
          <h4 className="heading">Diploma (Optional)</h4>
          <div className="row">
            <div className="col-lg-6  col-md-6">
              <p className="lable">College Name</p>
              <input name='college' onChange={handleDiplomaData} value={diploma.college}
                placeholder="e.g. XXX Diploma College"
                type="text"
              />
            </div>
            <div className="col-lg-6  col-md-6">
              <p className="lable">Field of Study</p>
              <input name='field' onChange={handleDiplomaData} value={diploma.field} placeholder="e.g. Information Technology" type="text" />
            </div>
            <div className="col-lg-6 col-md-4">
              <p className="lable">Percentage</p>
              <input name='precentage' onChange={handleDiplomaData} value={diploma.precentage} placeholder="e.g. 79" type="text" />
            </div>
            <div className="col-lg-6 col-md-4">
              <p className="lable">City</p>
              <input name='city' onChange={handleDiplomaData} value={diploma.city} placeholder="e.g. YYY" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">From</p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={diploma.from} >{year}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="lable">To</p>
              <select name="degree" id="degree">
              <option>Select</option>
                {years.map((year,index)=>(
                  <option key={index} value={diploma.to} >{year}</option>
                ))}
              </select>
            </div>
          </div>
          <Link to="/skills">
            <button className='btn next-btn' onClick={()=>{markAsSubmited('education'); trackLength(156); completeness(42.84)}}>Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Education
