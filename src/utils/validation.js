import { jwtDecode } from "jwt-decode";

export const validateName = (name) => {
  return name?.length >= 3 && name?.length <= 100;
};

export const validatePassword = (password) => {
  return password?.length >= 8;
};

export const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  return emailRegex.test(email);
};

export const validateLabel = (label) => {
  if (!label) return false;

  const len = label.trim().length;
  return len >= 3 && len <= 20;
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return false;

  const phoneRegex = /^\+[1-9][0-9]{1,14}$/;
  return phoneRegex.test(phoneNumber);
};

// validation: check token expiry
export const isTokenValid = (token) => {
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};
