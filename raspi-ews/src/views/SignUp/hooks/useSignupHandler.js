import AuthService from '../../../auth/Auth';
import validatePasswords from '../Validation';

const useSignupHandler = () => {

  const handleSubmit = async ({ username, password, confirmpw }) => {
    var { success, message } = validatePasswords(password, confirmpw);
    if (!success) {
      return { success, message };
    }

    try {
      let result = await AuthService.CreateUser(username, password);
      return { success: result.success, message: { username: result.message } };
    } catch (err) {
      const success = false;
      const message = { general: 'Connection error occurred' };
      return { success, message };
    }
  };

  const handleError = (errors) => { };

  return {
    handleSubmit,
    handleError,
  };
};

export default useSignupHandler;