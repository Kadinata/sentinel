import React from 'react';
import States from '../LoginStates';

const useLoginForm = ({ initialState, onSubmit }) => {

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
      setState(States.error);
      setErrors({ message });
    } else {
      setState(States.success);
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