import { useState } from 'react';

export const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    // Validate the form
    const formErrors = validateForm(values);
    setErrors(formErrors);

    // If there are no errors, call the onSubmit callback
    if (Object.keys(formErrors).length === 0) {
      onSubmit();
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Add your form validation logic here
    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.city) {
      errors.city = 'City is required';
    }

    if (!values.state) {
      errors.state = 'State is required';
    }

    return errors;
  };

  return { values, handleChange, handleSubmit, errors };
};