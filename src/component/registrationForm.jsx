// import FormValidationHook from "../hooks/FormValidationHook";
// import { useEffect, useState } from "react";
import useFormValidation from "../hooks/useFormValidation ";

const initialInputValues = {
  first_name: "",
  last_name: "",
  email: "",
  contact: "",
  password: "",
  confirm_password: "",
};

const RegistrationFrom = () => {
  const { inputValues, handleInputValues, validateForm, errors, resetForm } =
    useFormValidation(initialInputValues);
  // const [inputValues, setInputValues] = useState(initialInputValues);
  // const [errors, setErrors] = useState({});

  // const handleInputValues = (e) => {
  //   setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const validateForm = () => {
  //   let isValid = true;
  //   let newErrors = {};

  //   Object.keys(inputValues).forEach((key) => {
  //     if (!inputValues[key]) {
  //       isValid = false;
  //       newErrors[key] = `${key.replace("_", " ")} is required.`;
  //     }
  //   });

  //   setErrors(newErrors);
  //   return isValid;
  // };

  const handleSubmit = () => {
    // e.preventDefault();

    if (validateForm()) {
      console.log(inputValues);
      // Clear form after successful submission
      resetForm();
    }
  };

  return (
    <div className="registrationForm">
      <div className="registrationForm__wrapper">
        <div className="image-box">
          <img src="/src/assets/images/form-img.jpg" alt="" />
        </div>
        <div className="form">
          <h2 className="title">Registration</h2>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            sit sequi vero, amet assumenda aut?
          </p>

          <div className="input-wrapper">
            <div
              className={`input-box ${errors.first_name ? "has-error" : ""}`}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={inputValues.first_name}
                onChange={handleInputValues}
              />
              {errors.first_name && <p className="text">{errors.first_name}</p>}
            </div>
            <div className={`input-box ${errors.last_name ? "has-error" : ""}`}>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={inputValues.last_name}
                onChange={handleInputValues}
              />
              {errors.last_name && <p className="text">{errors.last_name}</p>}
            </div>
            <div className={`input-box ${errors.email ? "has-error" : ""}`}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={inputValues.email}
                onChange={handleInputValues}
              />
              {errors.email && <p className="text">{errors.email}</p>}
            </div>
            <div className={`input-box ${errors.contact ? "has-error" : ""}`}>
              <input
                type="number"
                name="contact"
                placeholder="Contact Number"
                value={inputValues.contact}
                onChange={handleInputValues}
              />
              {errors.contact && <p className="text">{errors.contact}</p>}
            </div>
            <div className={`input-box ${errors.password ? "has-error" : ""}`}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputValues.password}
                onChange={handleInputValues}
              />
              {errors.password && <p className="text">{errors.password}</p>}
            </div>
            <div
              className={`input-box ${
                errors.confirm_password ? "has-error" : ""
              }`}>
              <input
                type="password"
                name="confirm_password"
                placeholder="confirm Password"
                value={inputValues.confirm_password}
                onChange={handleInputValues}
              />
              {errors.confirm_password && (
                <p className="text">{errors.confirm_password}</p>
              )}
            </div>
          </div>
          <p className="text">
            Already have an account <a href="#">Log in</a>{" "}
          </p>
          <button className="btn btn-submit" onClick={handleSubmit}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFrom;
