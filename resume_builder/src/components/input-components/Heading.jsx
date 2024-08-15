import React, { useContext } from "react";
import "./css/heading.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { headerContext, navigationContext } from "../../App";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  jobTitle: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  city: yup.string().required(),
  pincode: yup.number().required(),
  github: yup.string().required(),
  linkedIn: yup.string().required(),
});

const Heading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const navigate = useNavigate();

  const { markAsSubmited, trackLength, completeness } =
    useContext(navigationContext);
  const { headerDetails, setHeaderDetails } = useContext(headerContext);

  const handledetails = (event) => {
    const { name, value } = event.target;
    setHeaderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className=" contact-container container">
      <div className="col-lg-3 col-md-3 col-sm-3"></div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h2 className="header-title">
          What's your preferred method of contact for employers?
        </h2>
        <h4 className="answer">
          Please include an email address and phone number.
        </h4>
        <p className="alart">* indicates a require field</p>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            if (isValid) {
              markAsSubmited("heading");
              trackLength(52);
              completeness(14.28);
              navigate("/objective");
            }
          })}
        >
          <div className="row inputfeild container-fluid">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                First name <span className="alart">*</span>
              </p>
              <input
                {...register("firstName")}
                name="firstName"
                onChange={handledetails}
                value={headerDetails.firstName}
                placeholder="e.g. Veeramani"
                className={errors.firstName?.message && "missed"}
              />
              {/* <p className="alart">{errors.firstName?.message}</p> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Last name<span className="alart">*</span>
              </p>
              <input
                {...register("lastName")}
                onChange={handledetails}
                value={headerDetails.lastName}
                name="lastName"
                placeholder="e.g. Jothimurugan"
                className={errors.lastName?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Jobtitle<span className="alart">*</span>
              </p>
              <input
                {...register("jobTitle")}
                onChange={handledetails}
                name="jobTitle"
                value={headerDetails.jobTitle}
                placeholder="e.g. Web Developer"
                className={errors.jobTitle?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Email<span className="alart">*</span>
              </p>
              <input
                {...register("email")}
                name="email"
                value={headerDetails.email}
                placeholder="e.g. veeramanijothimurugan@gmail.com"
                onChange={handledetails}
                className={errors.email?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Phone<span className="alart">*</span>
              </p>
              <input
                {...register("phone")}
                name="phone"
                value={headerDetails.phone}
                placeholder="e.g. +91 8072640512"
                onChange={handledetails}
                className={errors.phone?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                City<span className="alart">*</span>
              </p>
              <input
                {...register("city")}
                name="city"
                value={headerDetails.city}
                placeholder="e.g. Aruppukottai"
                onChange={handledetails}
                className={errors.city?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Pin code<span className="alart">*</span>
              </p>
              <input
                {...register("pincode")}
                name="pincode"
                value={headerDetails.pincode}
                placeholder="e.g. 626101"
                onChange={handledetails}
                className={errors.pincode?.message && "missed"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="lable">
                Github<span className="alart">*</span>
              </p>
              <input
                {...register("github")}
                name="github"
                value={headerDetails.github}
                placeholder="e.g. https://github.com/veeramanijothimurugan"
                onChange={handledetails}
                className={errors.github?.message && "missed"}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="lable">
                LinkedIn<span className="alart">*</span>
              </p>
              <input
                {...register("linkedIn")}
                name="linkedIn"
                value={headerDetails.linkedIn}
                placeholder="e.g. https://www.linkedin.com/in/veeramanijothimurugan/"
                onChange={handledetails}
                className={errors.linkedIn?.message && "missed"}
              />
            </div>
            <div className="errmsg col-lg-4">
              <p className="alart"></p>
            </div>
            <button
              className="btn next-btn"
              type="submit"
            >
              Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Heading;
