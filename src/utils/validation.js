export const validateName = (name) => {
  return name?.length >= 3 && name?.length <= 50;
};

export const validatePassword = (password) => {
  return password?.length >= 8;
};

export const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  return emailRegex.test(email);
};
