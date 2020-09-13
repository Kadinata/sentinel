const MIN_PW_LENGTH = 8;
const PW_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/;

const validatePasswords = (password, confirmpw) => {

  let success = true;
  const message = {
    password: '',
    confirmpw: '',
  };

  if (password.length < MIN_PW_LENGTH) {
    message.password = 'Password must contain 8 or more characters.';
    success = false;
  } else if (!password.match(PW_VALIDATION)) {
    message.password = 'Password must have at least 1 uppercase, 1 lowercase, 1 numeric, and 1 special characters.';
    success = false;
  }

  if (password !== confirmpw) {
    message.confirmpw = 'Passwords do not match.';
    success = false;
  }

  return { success, message };
};

export default validatePasswords;