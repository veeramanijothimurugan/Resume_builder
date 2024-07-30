import React from "react";
import "./css/project details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  return (
    <form action="">
      <div className="details-container container-fluid">
        <div className="row">
          <h4 className="headings">Project 1</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
            <p className="lable">Name</p>
            <input placeholder="e.g. AgriShop" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Type</p>
            <input placeholder="e.g. Web Application" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Used Technologies</p>
            <input placeholder="e.g. HTML, CSS, Js, FireBase" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Demo Link</p>
            <input placeholder="https://veeru-agrishop.vercel.app/index.html" type="text" />
          </div>
          <div className="col-lg-12">
            <p className="lable"></p>
            <textarea placeholder="e.g. The project aims to lower vegetable and fruit prices by eliminating brokerage costs, enabling farmers to sell directly to customers for fresher and more affordable produce." name="" id=""></textarea>
          </div>
          <div className="col-lg-12">
            <button className="btn btn-primary proAdd">ADD <FontAwesomeIcon icon={faPlus}/></button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProjectDetail;
