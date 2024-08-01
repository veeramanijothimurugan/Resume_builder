import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const CertificateDetails = ({ index }) => {
  const [added, setAdded] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [certificate, setCertificate] = useState({
    name: '',
    provider: '',
    credential: '',
  });

  const handleInput = (e) =>{
    const {name,value} = e.target
    setCertificate({...certificate,[name]:value});
    console.log(certificate);
  }

  const handleCertify = (e) => {
    e.preventDefault();
    setCertificates([...certificates,certificate]);
    setAdded(true);
    console.log(certificates);
  };



  return (
    <>
      <form onSubmit={handleCertify}>
        <div className="details container-fluid">
          <h4 className="heading">
            Certificate {index + 1}{" "}
            {added && (
              <span className="verify">
                <FontAwesomeIcon icon={faCheck} /> ADDED
              </span>
            )}
          </h4>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p className="lable">Name</p>
              <input onChange={handleInput}
                name="name" value={certificate.name}
                placeholder="e.g. Introduction to Front-end development"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p className="lable">Provider</p>
              <input onChange={handleInput} name="provider" value={certificate.provider} placeholder="e.g. Meta" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="lable">Credentials</p>
              <input onChange={handleInput}
                name="credential" value={certificate.credential}
                placeholder="https://coursera.org/share/e2f882827b4643b83407670485602a79"
              />
            </div>
            {!added && (
              <div className="col-lg-12">
                <button
                  className="btn btn-primary proAdd"
                  type="submit"
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default CertificateDetails;
