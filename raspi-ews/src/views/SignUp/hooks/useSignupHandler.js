import { useHistory } from 'react-router-dom';
import AuthService from '../../../auth/Auth';
import validatePasswords from '../Validation';

const useSignupHandler = (successRedirect) => {

  const history = useHistory();

  const handleSubmit = async ({ username, password, confirmpw }) => {
    var { success, message } = validatePasswords(password, confirmpw);
    if (!success) {
      return { success, message };
    }

    try {
      let result = await AuthService.CreateUser(username, password);
      console.log(result);
      return { success: result.success, message: { username: result.message } };
    } catch (err) {
      const success = false;
      const message = { general: 'Connection error occurred' };
      return { success, message };
    }
  };

  const handleError = (errors) => { };

  const handleSuccess = () => {
    if (!successRedirect) return;
    setTimeout(() => history.push(successRedirect), 750);
  };

  return {
    handleSubmit,
    handleError,
    handleSuccess,
  };
};

export default useSignupHandler;