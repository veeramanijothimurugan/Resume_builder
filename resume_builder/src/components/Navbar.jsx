import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import "../components/navbar.css";
import { Link } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll"

const Navbar = ({ InputTrack }) => {
  const [buildCV, setBuildCV] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [contentMargin, setContentMargin] = useState(0);

  const navbarRef = useRef(null);
  const contentRef = useRef(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    if (navbarRef.current && contentRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const newMarginTop = isNavVisible ? navbarHeight * 0.8 : 0;
      setContentMargin(newMarginTop);
    }
  }, [isNavVisible]);

  return (
    <>
      <nav
        className="navbar navbar-inverse navbar-bottom-fixed"
        ref={navbarRef}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="navbar-brand logo-img" src={logo} alt="" />
            <a className="navbar-brand title" href="#">
              RESUME SCULPTURE
            </a>
            <button className="navbar-toggler" onClick={toggleNav}>
              ☰
            </button>
          </div>
          <ul
            className={`nav navbar-nav navbar-right ${
              isNavVisible ? "show" : ""
            }`}
          >
            <li>
              <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link" href="">
                Contact
              </ScrollLink>
            </li>
            <li>
              <Link to="/heading">
                <button
                  className={
                    buildCV
                      ? "build btn btn-primary navbar-btn navbar-right"
                      : "btn btn-primary navbar-btn navbar-right"
                  }
                  onClick={() => {
                    setBuildCV(true);
                    InputTrack(true);
                  }}
                >
                  Build your Resume
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="content"
        ref={contentRef}
        style={{ marginTop: `${contentMargin}px` }}
      ></div>
    </>
  );
};

export default Navbar;
