import { React, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { certifyContex } from "../../App";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  name: yup.string().required(),
  provider: yup.string().required(),
  credential: yup.string().required(),
})

const CertificateDetails = ({ index }) => {

  const {register,handleSubmit,formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  console.log(errors)

  const {certificates,setCertificates} = useContext(certifyContex);

  const [added, setAdded] = useState(false);
  const [certificate, setCertificate] = useState({
    name: '',
    provider: '',
    credential: '',
  });

  const handleInput = (e) =>{
    const {name,value} = e.target
    setCertificate({...certificate,[name]:value});
  }




  return (
    <>
      <form onSubmit={handleSubmit((data)=>{
        setCertificates([...certificates,certificate]);
        setAdded(true);
        console.log(data);
      })}>
        <div className="details-container container-fluid">
          <h4 className="heading">
            Certificate {index + 1}{" "}
            {added && (
              <span className="verify">
                <FontAwesomeIcon icon={faCheckCircle} /> ADDED
              </span>
            )}
            {(errors.name?.message||errors.provider?.message||errors.credential?.message)&&(<p className="invalid"><FontAwesomeIcon icon={faExclamationTriangle}/> You missed some details to enter.</p>)}
          </h4>
          <div>
            <div>
            <div className="details col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p className="lable">Name</p>
              <input {...register('name')} onChange={handleInput} className={errors.name?.message && "missed"}
                name="name" value={certificate.name}
                placeholder="e.g. Introduction to Front-end development"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">Provider</p>
              <input {...register('provider')} onChange={handleInput} name="provider" value={certificate.provider} placeholder="e.g. Meta" className={errors.provider?.message && "missed"} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">Credentials</p>
              <input {...register('credential')} onChange={handleInput}
                name="credential" value={certificate.credential}
                placeholder="https://coursera.org/share/e2f882827b4643b83407670485602a79" className={errors.credential?.message && "missed"}
              />
            </div>
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
