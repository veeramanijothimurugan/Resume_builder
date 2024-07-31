import React, { useState } from "react";
import "./css/project details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faCheck} from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = ({index}) => {
    const [added,setAdded] = useState(false);
    const [inputProject, SetInputProject] = useState({

    name: "",
    type: "",
    technologies: "",
    link: "",
    objective: "",
  });

  const [projects,setProjects]=useState([]);

  const handleData = (e) =>{
    const {name,value}=e.target;
    SetInputProject({...inputProject,[name]:value,});
    console.log(inputProject);
  }

  const handleProjects = (e) =>{
    e.preventDefault();
    setProjects([...projects,inputProject]);
    setAdded(true);
    console.log(projects);
  }

  return (
    <form onSubmit={handleProjects}>
      <div className="details-container container-fluid">
        <div className="row">
          <h4 className="headings">Project {index + 1} {added&&<span className="verify"><FontAwesomeIcon icon={faCheck}/> ADDED</span>}</h4>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Name</p>
            <input onChange={handleData} name="name" value={inputProject.name} placeholder="e.g. AgriShop"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Type</p>
            <input onChange={handleData} name="type" value={inputProject.type} placeholder="e.g. Web Application" type="text"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Used Technologies</p>
            <input onChange={handleData} name="technologies" value={inputProject.technologies} placeholder="e.g. HTML, CSS, Js, FireBase" type="text" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Demo Link</p>
            <input onChange={handleData} name="link" value={inputProject.link}
              placeholder="https://veeru-agrishop.vercel.app/index.html"
            />
          </div>
          <div className="col-lg-12">
            <p className="lable">Objective</p>
            <textarea name="objective" value={inputProject.objective}
              placeholder="e.g. The project aims to lower vegetable and fruit prices by eliminating brokerage costs, enabling farmers to sell directly to customers for fresher and more affordable produce."
              onChange={handleData}
            ></textarea>
          </div>
          {
            !added &&
            <div className="col-lg-12">
                <button className="btn btn-primary proAdd" type="submit">
                  ADD
                </button>
              </div>
          }
        </div>
      </div>
    </form>
  );
};

export default ProjectDetail;
