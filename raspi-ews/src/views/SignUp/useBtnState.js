import React from 'react';
import States from './FormStates';

const initialState = {
  disabled: true,
  loading: false,
  success: false,
};

const useBtnState = ({ values, state }) => {

  const { username, password, confirmpw } = values;
  const [btnState, setBtnState] = React.useState(initialState);

  React.useEffect(() => {
    const disabled = !(username.trim()) || !(password.trim()) || !(confirmpw.trim());
    const loading = (state === States.submitting);
    const success = (state === States.success);
    setBtnState({ disabled, loading, success });
  }, [username, password, confirmpw, state]);

  return btnState;
};

export default useBtnState;