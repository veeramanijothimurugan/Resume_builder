import React, { useContext, useState } from "react";
import "./css/education.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faExclamationCircle, faExclamationTriangle, faMinus } from "@fortawesome/free-solid-svg-icons";
import { eduContex, navigationContext, showEduContex } from "../../App";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";

const schema = yup.object().shape({
  college: yup.string().required(' College is required'),
  from: yup.number().typeError(' From must be a number').required(' You must enter the from field'),
  to: yup.number().typeError(' To must be a number').required(' You must enter the to field'),
  sslcfrom: yup.number().typeError(' SSLC From must be a number').required(' You must enter the from field'),
  sslcto: yup.number().typeError(' SSLC To must be a number').required(' You must enter the to field'),
  degree: yup.string().required(' Degree is required'),
  field: yup.string().required(' Field is required'),
  city: yup.string().required('City is required'),
  sslccity: yup.string().required(' SSLC City is required'),
  cgpa: yup.number().typeError(' CGPA must be a number'),
  sslcpercentage: yup.number().required(' SSLC percentage is required').typeError('SSLC percentage must be a number'),
  sslcschool: yup.string().required(' SSLC school is required'),
});


const Education = () => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema)
  });
  console.log(errors);

  const navigation = useNavigate();

  const { markAsSubmited, trackLength, completeness } =
    useContext(navigationContext);
  const {
    bachelorsData,
    setbachelorsData,
    hsc,
    SetHsc,
    sslc,
    SetSslc,
    diploma,
    setDiploma,
  } = useContext(eduContex);
  const {showB,showD,showHsc,showSslc,setShowB,setShowD,setShowHsc,setShowSslc} = useContext(showEduContex);

  const handleBachelorData = (event) => {
    const { name, value } = event.target;
    setbachelorsData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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

  const years = [];
  const generateYear = () => {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      years.push(year);
    }
  };
  generateYear();

  const degrees = [
    "B.Tech",
    "B.E",
    "B.Sc",
    "B.com",
    "B.Ed",
    "BBA",
    "M.Tech",
    "M.E",
    "M.Sc",
    "M.com",
    "M.Ed",
    "MBA",
  ];
  

  return (
    <div>
      <div className="objective-container">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="container-fluid col-lg-6 col-md-6 col-sm-6">
          <div className="wordings">
            <h2 className="qus">Let's Highlight Your <span className="Highlight">Education</span></h2>
            <ul className="list">
              <li>Employers review the education section swiftly.</li>
              <li>We’ll ensure it's formatted for maximum clarity.</li>
            </ul>
          </div>
          <p className="alart">*indicates a require field</p>
          {!isValid&& <p className="error"><FontAwesomeIcon icon={faExclamationCircle}/> Note: You must add educational detail.</p>}
          <form onSubmit={handleSubmit(()=>{
            navigation('/skills')
          })}>
            <h4 className="heading  cover">Bachelors{showB?<FontAwesomeIcon onClick={()=>{setShowB(false)}} className="additional" icon={faMinus}/>:<FontAwesomeIcon onClick={()=>{setShowB(true)}} className="additional" icon={faAdd}/>}</h4>
            {showB&&<>
              {(errors.cgpa?.message||errors.college?.message||errors.city?.message||errors.from?.message||errors.to?.message||errors.field?.message||errors.degree?.message)&&(<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/>You entered invalid detail or missed some details to enter.</p>)}
              {(bachelorsData.from >= bachelorsData.to)&&<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/> The "to year" must be greater from the "from year".</p>}
            </>}
            {showB&&(<div className="row">
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  College Name <span className="alart">*</span>
                </p>
                <input className={errors.college?.message && "missed"}
                  name="college" {...register('college')}
                  onChange={handleBachelorData}
                  value={bachelorsData.college}
                  placeholder="e.g. Thiagarajar College of Engineering"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  Degree <span className="alart">*</span>
                </p>
                <select {...register('degree')} className={errors.degree?.message && "missed"}
                  name="degree"
                  value={bachelorsData.degree}
                  onChange={handleBachelorData}
                  id="degree"
                >
                  <option value={""}>Select</option>
                  {degrees.map((degree, index) => (
                    <option key={index} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  Field of Study <span className="alart">*</span>
                </p>
                <input {...register('field')} className={errors.field?.message && "missed"}
                  name="field"
                  onChange={handleBachelorData}
                  value={bachelorsData.field}
                  placeholder="e.g. Information Technology"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  City <span className="alart">*</span>
                </p>
                <input {...register('city')} className={errors.city?.message && "missed"}
                  name="city"
                  onChange={handleBachelorData}
                  value={bachelorsData.city}
                  placeholder="e.g. Madurai"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  GCPA <span className="alart">*</span>
                </p>
                <input {...register('cgpa',{required: "you must enter the CGPA"})} className={errors.cgpa && "missed"}
                  name="cgpa"
                  onChange={handleBachelorData}
                  value={bachelorsData.cgpa}
                  placeholder="e.g. 7.95"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  From <span className="alart">*</span>
                </p>
                <select {...register('from')} className={errors.from?.message && "missed"}
                  name="from"
                  value={bachelorsData.from}
                  onChange={handleBachelorData}
                  id="degree"
                >
                  <option value={null}>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  To <span className="alart">*</span>
                </p>
                <select {...register('to')} className={errors.to?.message && "missed"}
                  name="to"
                  value={bachelorsData.to}
                  onChange={handleBachelorData}
                  id="degree"
                >
                  <option value={"select"}>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>)}

            {/* HSC */}
            <h4 className="heading cover">HSC {showHsc?<FontAwesomeIcon onClick={()=>{setShowHsc(false)}} className="additional" icon={faMinus}/>:<FontAwesomeIcon onClick={()=>{setShowHsc(true)}} className="additional" icon={faAdd}/>} </h4>
            {showHsc&&(<div className="row">
              <div className="col-lg-4  col-md-4">
                <p className="lable">School Name <span className="alart">*</span></p>
                <input
                  name="hscschool"
                  onChange={handleHscData}
                  value={hsc.hscschool}
                  placeholder="e.g. Devangar Higher Secondary School"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">Percentage <span className="alart">*</span></p>
                <input 
                  name="hscprecentage"
                  onChange={handleHscData}
                  value={hsc.hscprecentage}
                  placeholder="e.g. 80"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">City <span className="alart">*</span></p>
                <input 
                  name="hsccity"
                  onChange={handleHscData}
                  value={hsc.hsccity}
                  placeholder="e.g. Aruppukottai"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">From <span className="alart">*</span></p>
                <select
                  name="hscfrom"
                  id="degree"
                  value={hsc.hscfrom}
                  onChange={handleHscData}
                >
                  <option >Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">To <span className="alart">*</span></p>
                <select
                  name="hscto"
                  id="degree"
                  value={hsc.hscto}
                  onChange={handleHscData}
                >
                  <option>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>)}

            {/* SSLC */}
            <h4 className="heading cover">SSLC{showSslc?<FontAwesomeIcon onClick={()=>{setShowSslc(false)}} className="additional" icon={faMinus}/>:<FontAwesomeIcon onClick={()=>{setShowSslc(true)}} className="additional" icon={faAdd}/>}</h4>
            {showSslc&&<>
              {(errors.sslcschool?.message||errors.sslcpercentage?.message||errors.sslccity?.message||errors.sslcfrom?.message||errors.sslcto?.message)&&(<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/>You entered invalid detail or missed some details to enter.</p>)}
              {(sslc.sslcfrom >= sslc.sslcto)&&<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/> The "to year" must be greater from the "from year".</p>}
            </>}
            {showSslc&&(<div className="row">
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  School Name<span className="alart">*</span>
                </p>
                <input {...register('sslcschool')} className={errors.sslcschool?.message && "missed"}
                  name="sslcschool" 
                  onChange={handleSslcData}
                  value={sslc.sslcschool}
                  placeholder="e.g. Devangar Higher Secondary School"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  Percentage<span className="alart">*</span>
                </p>
                <input {...register('sslcpercentage')} className={errors.sslcpercentage?.message && "missed"}
                  name="sslcpercentage"
                  onChange={handleSslcData}
                  value={sslc.sslcpercentage}
                  placeholder="e.g. 81"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="lable">
                  City<span className="alart">*</span>
                </p>
                <input {...register('sslccity')} className={errors.sslccity?.message && "missed"}
                  name="sslccity"
                  onChange={handleSslcData}
                  value={sslc.sslccity}
                  placeholder="e.g. Aruppukottai"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  From<span className="alart">*</span>
                </p>
                <select {...register('sslcfrom')} className={errors.sslcfrom?.message && "missed"}
                  name="sslcfrom"
                  id="degree"
                  value={sslc.sslcfrom}
                  onChange={handleSslcData}
                >
                  <option>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  To<span className="alart">*</span>
                </p>
                <select  {...register('sslcto')} className={errors.sslcto?.message && "missed"}
                  name="sslcto"
                  id="degree"
                  value={sslc.sslcto}
                  onChange={handleSslcData}
                >
                  <option>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>)}
            {/* diploma */}
            <div>
              <h4 className="heading cover">Diploma{showD?<FontAwesomeIcon onClick={()=>{setShowD(false)}} className="additional" icon={faMinus}/>:<FontAwesomeIcon onClick={()=>{setShowD(true)}} className="additional" icon={faAdd}/>}</h4>
            </div>
            
            {showD&&(<div className="row">
              <div className="col-lg-6  col-md-6">
                <p className="lable">College Name</p>
                <input
                  name="dcollege"
                  onChange={handleDiplomaData}
                  value={diploma.dcollege}
                  placeholder="e.g. XXX Diploma College"
                  type="text"
                />
              </div>
              <div className="col-lg-6  col-md-6">
                <p className="lable">Field of Study</p>
                <input
                  name="dfield"
                  onChange={handleDiplomaData}
                  value={diploma.dfield}
                  placeholder="e.g. Information Technology"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">Percentage</p>
                <input
                  name="dpercentage"
                  onChange={handleDiplomaData}
                  value={diploma.dpercentage}
                  placeholder="e.g. 79"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">City</p>
                <input
                  name="dcity"
                  onChange={handleDiplomaData}
                  value={diploma.dcity}
                  placeholder="e.g. YYY"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">From</p>
                <select
                  name="dfrom"
                  id="degree"
                  value={diploma.dfrom}
                  onChange={handleDiplomaData}
                >
                  <option value={""}>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">To</p>
                <select
                  name="dto"
                  id="degree"
                  value={diploma.dto}
                  onChange={handleDiplomaData}
                >
                  <option value={""}>Select</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>)}
            <button className="btn back-btn next-btn" onClick={()=>{navigation('/objective')}}><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</button>
            <button
              className="btn next-btn"
              type="submit"
              onClick={() => {
                markAsSubmited("education");
                trackLength(156);
                completeness(42.84);
              }}
            >
              Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
