import Endpoint from '../services/Endpoint';

const Login = async (username, password) => {
  const url = 'api/v1/auth/login';
  const { auth, message } = await Endpoint.postData(url, { username, password });
  return { success: auth, message };
};

const CreateUser = async (username, password) => {
  const url = 'api/v1/auth/register';
  const { status, message } = await Endpoint.postData(url, { username, password });
  const success = (status === 'success');
  return { success, message };
};

const CheckAuthState = async () => {
  const url = 'api/v1/auth/user';
  const { user } = await Endpoint.fetchData(url);
  return user;
}

export default {
  Login,
  CreateUser,
  CheckAuthState,
};