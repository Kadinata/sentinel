import { useHistory } from 'react-router-dom';
import { useAuthDataContext } from '../../../auth/AuthProvider';

const useLoginHandler = (successRedirect) => {

  const history = useHistory();
  const { handleLogin } = useAuthDataContext();

  const handleSubmit = async ({ username, password }) => {
    try {
      return await handleLogin(username, password);
    } catch (err) {
      const success = false;
      const message = 'Connection error occurred';
      return { success, message };
    };
  }

  const handleError = (error) => { };

  const handleSuccess = () => {
    if (!successRedirect) return;
    setTimeout(() => history.push(successRedirect), 750);
  }

  return {
    handleSubmit,
    handleError,
    handleSuccess,
  };
};

export default useLoginHandler;