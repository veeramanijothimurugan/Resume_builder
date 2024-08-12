import React, { useState, createContext, useContext } from "react";
import "./css/heading.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { headerContext, navigationContext } from "../../App";

const Heading = () => {
  const {markAsSubmited,trackLength,completeness} = useContext(navigationContext);
  const {headerDetails,setHeaderDetails} = useContext(headerContext);

  const handledetails = (event) => {
    const { name, value } = event.target;
    setHeaderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log("Methode invoked!!");
  };

  const handleSubmit = () => {
    console.log("buttonClicked");
  };

  return (
      <div className=" contact-container container">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h2 className="header-title">
            What's your preferred method of contact for employers?
          </h2>
          <h4 className="answer">
            Please include an email address and phone number.
          </h4>
          <p className="alart">* indicates a require field</p>
          <form onSubmit={handleSubmit}>
            <div className="row inputfeild container-fluid">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  First name <span className="alart">*</span>
                </p>
                <input
                  name="firstName"
                  onChange={handledetails}
                  value={headerDetails.firstName}
                  placeholder="e.g. Veeramani"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Last name<span className="alart">*</span>
                </p>
                <input
                  onChange={handledetails}
                  value={headerDetails.lastName}
                  name="lastName"
                  placeholder="e.g. Jothimurugan"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Jobtitle<span className="alart">*</span>
                </p>
                <input
                  onChange={handledetails}
                  name="jobTitle"
                  value={headerDetails.jobTitle}
                  placeholder="e.g. Web Developer"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Email<span className="alart">*</span>
                </p>
                <input
                  name="email"
                  value={headerDetails.email}
                  placeholder="e.g. veeramanijothimurugan@gmail.com"
                  onChange={handledetails}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Phone<span className="alart">*</span>
                </p>
                <input
                  name="phone"
                  value={headerDetails.phone}
                  placeholder="e.g. +91 8072640512"
                  type="text"
                  onChange={handledetails}
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="lable">
                  City<span className="alart">*</span>
                </p>
                <input
                  name="city"
                  value={headerDetails.city}
                  placeholder="e.g. Aruppukottai"
                  type="text"
                  onChange={handledetails}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Pin code<span className="alart">*</span>
                </p>
                <input
                  name="pincode"
                  value={headerDetails.pincode}
                  placeholder="e.g. 626101"
                  type="text"
                  onChange={handledetails}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lable">
                  Github<span className="alart">*</span>
                </p>
                <input
                  name="github"
                  value={headerDetails.github}
                  placeholder="e.g. https://github.com/veeramanijothimurugan"
                  type="text"
                  onChange={handledetails}
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className="lable">
                  LinkedIn<span className="alart">*</span>
                </p>
                <input
                  name="linkedIn"
                  value={headerDetails.linkedIn}
                  placeholder="e.g. https://www.linkedin.com/in/veeramanijothimurugan/"
                  type="text"
                  onChange={handledetails}
                />
              </div>
              <Link to={"/objective"}>
                <button
                  className="btn next-btn"
                  type="submit"
                  onClick={() => {
                    markAsSubmited("heading");
                    trackLength(52);
                    completeness(14.28);
                    console.log(headerDetails);
                  }}
                >
                  Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Heading;
