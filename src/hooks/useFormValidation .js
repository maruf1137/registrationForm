import { useState } from "react";

const useFormValidation = (initialValues) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputValues = (e) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    Object.keys(inputValues).forEach((key) => {
      if (!inputValues[key]) {
        isValid = false;
        newErrors[key] = `${key.replace("_", " ")} is required.`;
      }
    });

    // Check if password and confirm password match
    if (inputValues.password !== inputValues.confirm_password) {
      isValid = false;
      newErrors.confirm_password = "Passwords do not match.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setInputValues(initialValues);
    setErrors({});
  };

  return {
    inputValues,
    handleInputValues,
    validateForm,
    errors,
    resetForm,
  };
};

export default useFormValidation;
