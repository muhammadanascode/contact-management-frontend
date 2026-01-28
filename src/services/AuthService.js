import axios from "axios";
import toast from "react-hot-toast";

//Service: Signup function
export const signup = async (firstName, lastName, email, password) => {
    try {
        const res = await axios.post("http://localhost:8080/auth/register", {
            firstName,
            lastName,
            email,
            password,
        })

        if (res.status === 200) {
            toast.success("Account created successfully");
        }

        return res;

    } catch (err) {
        toast.error(err?.response?.data?.message || "Error occured");
    }
}

// Service: Signin function
export const signin = async (email, password) => {
  try {
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