import React from "react";
import "./css/heading.css";
import { Link, useNavigate } from "react-router-dom";

const Heading = () => {
  // const navigate = useNavigate();

  // const handleNavigation = () =>{
  //     navigate('/objective');
  // }

  return (
    <div className=" contact-container container">
      <div className="col-lg-3 col-md-3 col-sm-3"></div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h2 className="title">
          What's your preferred method of contact for employers?
        </h2>
        <h4 className="answer">
          Please include an email address and phone number.
        </h4>
        <p className="alart">* indicates a require field</p>
        <div className="row inputfeild container-fluid">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              First name <span className="alart">*</span>
            </p>
            <input placeholder="e.g. Veeramani" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Last name<span className="alart">*</span>
            </p>
            <input placeholder="e.g. Jothimurugan" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Jobtitle<span className="alart">*</span>
            </p>
            <input placeholder="e.g. Web Developer" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Email<span className="alart">*</span>
            </p>
            <input
              placeholder="e.g. veeramanijothimurugan@gmail.com"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Phone<span className="alart">*</span>
            </p>
            <input placeholder="e.g. +91 8072640512" type="text" />
          </div>
          <div className="col-lg-6 col-md-6">
            <p className="lable">
              City<span className="alart">*</span>
            </p>
            <input placeholder="e.g. Aruppukottai" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Pin code<span className="alart">*</span>
            </p>
            <input placeholder="e.g. 626101" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="lable">
              Github<span className="alart">*</span>
            </p>
            <input
              placeholder="e.g. https://github.com/veeramanijothimurugan"
              type="text"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p className="lable">
              LinkedIn<span className="alart">*</span>
            </p>
            <input
              placeholder="e.g. https://www.linkedin.com/in/veeramanijothimurugan/"
              type="text"
            />
          </div>
          <Link to="/objective">
            <button className="btn next-btn">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
