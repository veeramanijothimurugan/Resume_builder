import React, { useContext, useState } from "react";
import "./css/project details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle,faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { projectContex } from "../../App";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required('You should enter name of the project'),
  type: yup.string().required('You should enter type of the project'),
  technologies: yup.string().required('What are the technologies that you are used in the project'),
  link: yup.string().required('You should provide the hosted link/Github repository link'),
  objective: yup.string().required('You must enter objective of the project'),
})

const ProjectDetail = ({index}) => {
    const {register, handleSubmit, formState: {errors,isSubmitted, isSubmitSuccessful} } = useForm({
      resolver: yupResolver(schema)
    });
    console.log(errors);

    const {projects,setProjects} = useContext(projectContex);
    const [added,setAdded] = useState(false);
    const [inputProject, SetInputProject] = useState({

    name: "",
    type: "",
    technologies: "",
    link: "",
    objective: "",
  });

  const handleData = (e) =>{
    const {name,value}=e.target;
    SetInputProject({...inputProject,[name]:value,});
    console.log(inputProject);
  }

  return (
    <form onSubmit={handleSubmit((data)=>{
      console.log(data);
      setProjects([...projects,inputProject]);
      setAdded(true);
      console.log(projects);
    })}>
      <div className="details-container container-fluid">
        <div>
          <h4 className="headings">Project {index + 1} {added&&<span className="verify"><FontAwesomeIcon icon={faCheckCircle}/> ADDED</span>}{(errors.name?.message||errors.technologies?.message||errors.type?.message||errors.link?.message||errors.objective?.message)&&(<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/> You missed some details to enter.</p>)}</h4>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Name</p>
            <input {...register('name')} onChange={handleData} name="name" value={inputProject.name} placeholder="e.g. AgriShop" className={errors.name?.message && "missed"}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Type</p>
            <input {...register('type')} onChange={handleData} name="type" value={inputProject.type} placeholder="e.g. Web Application" type="text" className={errors.type?.message && "missed"}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Used Technologies</p>
            <input {...register('technologies')} onChange={handleData} name="technologies" value={inputProject.technologies} placeholder="e.g. HTML, CSS, Js, FireBase" type="text" className={errors.technologies?.message && "missed"}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p className="lable">Demo Link</p>
            <input {...register('link')} onChange={handleData} name="link" value={inputProject.link}
              placeholder="https://veeru-agrishop.vercel.app/index.html" className={errors.link?.message && "missed"}
            />
          </div>
          <div className="col-lg-12">
            <p className="lable">Objective</p>
            <textarea name="objective" value={inputProject.objective} {...register('objective')}
              placeholder="e.g. The project aims to lower vegetable and fruit prices by eliminating brokerage costs, enabling farmers to sell directly to customers for fresher and more affordable produce."
              onChange={handleData} className={errors.objective?.message && "missed"}
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
