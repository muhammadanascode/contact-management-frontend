import AuthForm from "../components/AuthForm";
import { signup } from "../services/AuthService";

function Signup() {

  // Handler to pass to AuthForm for signup
  const handleSignup = async (firstName, lastName, email, password) => {
    const res =await signup(firstName, lastName, email, password);
    return res;
  }

  return (
      <AuthForm type="Signup" handleSignup={handleSignup} />
  );
}

export default Signup;
