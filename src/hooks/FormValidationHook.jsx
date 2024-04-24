import { useState } from "react";

const initialInputValues = {
  first_name: "",
  last_name: "",
  email: "",
  contact: "",
  password: "",
  confirm_password: "",
};

const FormValidationHook = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputValues = (e) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { inputValues, handleInputValues, setInputValues, initialInputValues };
};

export default FormValidationHook;
