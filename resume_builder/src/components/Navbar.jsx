import React from "react";
import logo from "../assets/images/logo.png";
import "../components/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              
            <li><Link to="/heading"><button className="btn btn-primary navbar-btn navbar-right">Build your Resume</button></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
