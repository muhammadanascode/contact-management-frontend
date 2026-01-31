import axios from "axios";
import toast from "react-hot-toast";
import * as Validator from "../utils/validation.js";

//Service: Signup function
export const signup = async (firstName, lastName, email, password) => {
  try {
    if (!Validator.validateName(firstName)) {
      throw new Error("First name must be between 3 and 100 characters long");
    }
    if (!Validator.validateName(lastName)) {
      throw new Error("Last name must be between 3 and 100 characters long");
    }
    if (!Validator.validateEmail(email)) {
      throw new Error("Invalid email format");
    }
    if (!Validator.validatePassword(password)) {
      throw new Error("Password must be at least 8 characters long");
    }

    const res = await axios.post("http://localhost:8080/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });

    toast.success("Account created successfully");
    return res;

  } catch (err) {
    toast.error(err.message || "Error occurred");
    throw err; // optional but recommended
  }
};


// Service: Signin function
export const signin = async (email, password) => {
  try {
    // Validate all fields
    if (!Validator.validateEmail(email)) {
      throw new Error("Invalid email format");
    }
    if (!Validator.validatePassword(password)) {
      throw new Error("Password must be at least 8 characters long");
    }

    const res = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });

    if (res.status === 200) {
      toast.success("Login successful");
      return res;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message || "Error occurred");
    return false;
  }
};