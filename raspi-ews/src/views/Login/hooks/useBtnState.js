import React from 'react';
import States from '../LoginStates';

const initialState = {
  disabled: true,
  loading: false,
  success: false,
};

const useBtnState = ({ username, password, state }) => {
  const [btnState, setBtnState] = React.useState(initialState);

  React.useEffect(() => {
    const disabled = !(username.trim()) || !(password.trim());
    const loading = (state === States.submitting);
    const success = (state === States.success);
    setBtnState({ disabled, loading, success });
  }, [username, password, state]);

  return btnState;
};

export default useBtnState;