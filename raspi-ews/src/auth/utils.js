import Cookies from 'js-cookie';

const getAuthData = () => {
  const jwt_cookie = Cookies.get('jwt');
  console.log('jwt cookie:', jwt_cookie);
  if (!jwt_cookie) return null;
  return parseJWT(jwt_cookie);
};

const removeToken = () => {
  Cookies.remove('jwt');
};

const getAuthToken = () => (Cookies.get('jwt') || null);

const parseJWT = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const uriComponent = atob(base64).split('').map((char) => {
    return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
  }).join('');
  const payload = decodeURIComponent(uriComponent);
  return JSON.parse(payload);
};

export {
  getAuthData,
  getAuthToken,
  removeToken,
};