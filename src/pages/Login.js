import React from "react";
import AuthForm from "../components/AuthForm";
import { signin } from "../services/AuthService";

function Login() {

  // Handler to pass to AuthForm for signin
    const handleSignIn = async ( email, password) => {
      const res = await signin(email, password);
      return res;
    }

  return (
      <AuthForm type="Login" handleSignIn={handleSignIn} />
  );
}

export default Login;
