import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../components/navbar.css";
import { Link, useActionData } from "react-router-dom";

const Navbar = () => {
  const [buildCV,setBuildCV] = useState(false);

  return (
    <>
      <nav className="navbar navbar-inverse navbar-bottom-fixed">
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="navbar-brand logo-img" src={logo} alt="" />
            <a className="navbar-brand title" href="#">
              Resume Sculpture
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a className="navbar-link" href="">Home</a></li>
            <li><a className="navbar-link" href="">About</a></li>
            <li><a className="navbar-link" href="">Contact</a></li>
              
            <li><Link to="/heading"><button className={buildCV ? "build btn btn-primary navbar-btn navbar-right":"btn btn-primary navbar-btn navbar-right"} onClick={()=>{setBuildCV(true)}}>Build your Resume</button></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
