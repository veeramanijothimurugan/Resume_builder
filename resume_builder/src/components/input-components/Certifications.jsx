import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faCheck, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import CertificateDetails from './CertificateDetails';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const [num,setNum]=useState(0);
  const [component,setComponent] = useState([]);

  const handleNum = (e) =>{
    setNum(parseInt(e.target.value));
  }

  const handleComp = (e) =>{
    e.preventDefault();
    if(!isNaN(num) && num > 0){
      setComponent([...Array(num).keys()]);
    }
  }

  return (
    <>
      <div className="project-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="wordings">
            <h2 className="qus">
            What is the significance of<span className="Highlight"> CERTIFICATIONS</span>{" "}
            in your career?
            </h2>
            <h4 className="answer">
            Certifications enhance your credibility, demonstrate specialized knowledge, and increase your attractiveness to employers.
            </h4>
          </div>
          <form onSubmit={handleComp}>
            <div className="project-input">
              <p className="lable">Enter no.of. Certificate</p>
              <input onChange={handleNum}
              placeholder="e.g. 2"
              className="col-lg-10 col-md-10 col-sm-9 col-xs-8 skill-input"
              type="number"
            />
            <button
              className="add-btn col-lg-2 col-md-2 col-sm-3 col-xs-4 add"
              type="submit"
            >
              ADD <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
          </form>
          {component.map((_,index)=>(
            <CertificateDetails index={index} key={index}/>
          ))}
          {component.length>0 && <Link to="/extracurricular-activities"><button className='btn next-btn'>Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button></Link>}
        </div>
      </div>
    </>
  )
}

export default Certifications
