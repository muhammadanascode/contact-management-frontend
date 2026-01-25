import AuthForm from "../components/AuthForm";
import { signup } from "../services/AuthService";

function Signup() {

  // Handler to pass to AuthForm for signup
  const handleSignup = (firstName, lastName, email, password) => {
    signup(firstName, lastName, email, password);
  }

  return (
      <AuthForm type="Signup" handleSignup={handleSignup} />
  );
}

export default Signup;
