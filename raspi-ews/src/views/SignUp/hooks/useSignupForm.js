import React from 'react';
import States from '../FormStates';

const useSignupForm = ({ initialState, onSubmit }) => {

  const [values, setValues] = React.useState(initialState || {});
  const [errors, setErrors] = React.useState({ ...initialState, general: '' });
  const [state, setState] = React.useState(States.default);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    switch (state) {
      case States.submitting:
      case States.success:
        return;
      default:
        break;
    };

    setState(States.submitting);
    setErrors(initialState);

    const { success, message } = await onSubmit({ ...values });

    if (!success) {
      setState(States.error);
      setErrors((prevErrors) => ({ ...prevErrors, ...message }));
    } else {
      setState(States.success);
    }
    setValues((prevValues) => ({
      ...initialState,
      username: prevValues.username,
    }));
  };

  return {
    values,
    errors,
    state,
    handleChange,
    handleSubmit
  };
};

export default useSignupForm;