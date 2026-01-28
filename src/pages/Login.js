import React from "react";
import AuthForm from "../components/AuthForm";
import { signin } from "../services/AuthService";

function Login() {

  // Handler to pass to AuthForm for signin
    const handleSignIn = ( email, password) => {
      signin(email, password);
    }

  return (
      <AuthForm type="Login" handleSignIn={handleSignIn} />
  );
}

export default Login;
