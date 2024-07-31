import {React,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faCheck} from "@fortawesome/free-solid-svg-icons";

const CertificateDetails = () => {
  const [added, setAdded] = useState(false);

  const handleCertify = (e) =>{
    setAdded(true);
  }

  return (
    <>
        <div className="details container-fluid">
          <h4 className="heading">Certificate 1 {added&&<span className="verify"><FontAwesomeIcon icon={faCheck}/> ADDED</span>}</h4>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p className="lable">Name</p>
              <input
                name="name"
                placeholder="e.g. Introduction to Front-end development"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p className="lable">Provider</p>
              <input name="name" placeholder="e.g. Meta" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="lable">Credentials</p>
              <input
                name="name"
                placeholder="https://coursera.org/share/e2f882827b4643b83407670485602a79"
              />
            </div>
            {!added && (
              <div className="col-lg-12">
                <button className="btn btn-primary proAdd" type="submit" onClick={handleCertify}>
                  ADD
                </button>
              </div>
            )}
          </div>
          
        </div>
    </>
  );
};

export default CertificateDetails;
