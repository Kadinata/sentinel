import React from 'react';
import States from '../LoginStates';

const useLoginForm = ({ initialState, onSubmit, onError, onSuccess }) => {

  const [values, setValues] = React.useState(initialState || {});
  const [errors, setErrors] = React.useState({ message: '' });
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
    }

    setState(States.submitting);
    setErrors({ message: '' });

    const { success, message } = await onSubmit({ ...values });

    if (!success) {
      const error = { message };
      setState(States.error);
      setErrors(error);
      onError(error);
    } else {
      setState(States.success);
      onSuccess();
    }
    setValues((prevValues) => ({ ...prevValues, password: "" }));
  };

  return {
    values,
    errors,
    state,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;