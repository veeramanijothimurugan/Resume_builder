import React, { useState, useEffect, useRef, useContext } from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { navLinkContex } from "../App";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ InputTrack }) => {
  const { buildCV, setBuildCV } = useContext(navLinkContex);
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
      const newMarginTop = isNavVisible ? navbarHeight * 0.9 : 0;
      setContentMargin(newMarginTop);
    }
  }, [isNavVisible]);

  const navigation = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-inverse navbar-bottom-fixed"
        ref={navbarRef}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand title" href="/">
              <FontAwesomeIcon
                className="navbar-brand logo-img"
                icon={faFeatherPointed}
              />
              RESUME SCULPTURE
            </a>
            <button
              className={`navbar-toggler ${isNavVisible ? "expanded" : ""}`}
              onClick={toggleNav}
            >
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </button>
          </div>
          <ul
            className={`nav navbar-nav navbar-right ${
              isNavVisible ? "show" : ""
            }`}
          >
            <li>
              <ScrollLink
                onClick={() => {
                  InputTrack(false);
                  setBuildCV(false);
                  navigation("/");
                }}
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
                activeClass="active"
              >
                Home
              </ScrollLink>
            </li>
            <li className={buildCV ? "hide" : "show"}>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
                activeClass="active"
              >
                About
              </ScrollLink>
            </li>
            <li className={buildCV ? "hide" : "show"}>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
                activeClass="active"
              >
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
