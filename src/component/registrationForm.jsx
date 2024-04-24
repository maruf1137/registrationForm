import FormValidationHook from "../hooks/FormValidationHook";

const RegistrationFrom = () => {
  const { inputValues, handleInputValues, setInputValues, initialInputValues } =
    FormValidationHook();

  const handleSubmit = () => {
    console.log(inputValues);
    setInputValues(initialInputValues);
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
            <div className="input-box">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={inputValues.first_name}
                onChange={handleInputValues}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={inputValues.last_name}
                onChange={handleInputValues}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={inputValues.email}
                onChange={handleInputValues}
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="contact"
                placeholder="Contact Number"
                value={inputValues.contact}
                onChange={handleInputValues}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputValues.password}
                onChange={handleInputValues}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirm_password"
                placeholder="confirm Password"
                value={inputValues.confirm_password}
                onChange={handleInputValues}
              />
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
