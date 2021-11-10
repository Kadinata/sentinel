import { useAuthDataContext } from '../../../auth/AuthProvider';

const useLoginHandler = () => {

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

  return {
    handleSubmit,
    handleError,
  };
};

export default useLoginHandler;