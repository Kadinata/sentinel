import React from 'react';
import States from './LoginStates';

const useLoginForm = ({ initialState, onSubmit }) => {

  const [values, setValues] = React.useState(initialState || {});
  const [errors, setErrors] = React.useState(null);
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
    setErrors(null);

    const { success } = await onSubmit({ ...values });

    if (!success) {
      setState(States.error);
      setErrors({ message: 'asdf' });
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