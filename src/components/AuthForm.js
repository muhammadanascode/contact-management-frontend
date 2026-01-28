import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField"; // Reusable input component
import Button from "./Button"; // Reusable button component
import logo from '../assests/images/management.png';
import { useAuth } from "../context/AuthContext";

function AuthForm({ type, handleSignup, handleSignIn }) {

    // Using local state for form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Navigate hook for redirection
    const navigate = useNavigate();

    const { login } = useAuth();

    // Handle form submission; currently just alerts for demo purposes
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === "Signup") {

            // Call the passed handleSignup function
            const res = await handleSignup(firstName, lastName, email, password);

            if (!res) return;

            // Clear fields after signup
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");

            // Redirect to login after signup
            navigate("/login");

        } else {

            // Call the passed handleSignIn function
            const res = await handleSignIn(email, password);

            if (!res) return;

            // Clear fields after signin
            setEmail("");
            setPassword("");

            // Save token in local storage
            login(res.token)

            // Redirect to home page after signup
            navigate("/");
        }
    };

    return (

        // Card container: reusable for any auth form; uses Tailwind for styling and responsiveness
        <div
            className="
             w-full
             max-w-md
             min-h-[80vh] sm:min-h-0
             p-6 sm:p-6
             rounded-xl
             bg-purple-50/70 backdrop-blur-md
             border border-purple-100/40
             shadow-lg shadow-black-400
             mx-auto
            flex flex-col justify-start">

            <form
                onSubmit={handleSubmit}
                className={`flex flex-col ${type !== "Login" ? "gap-1" : "gap-3"}`}
            >
                {/* Top section: logo, heading, description */}
                <div className="flex flex-col">

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Social media"
                        className="w-24 h-24 mx-auto mb-1"
                    />

                    {/* Dynamic heading based on form type */}
                    <h1 className="text-center text-2xl font-bold text-purple-800">
                        {type === "Login" ?
                            "Welcome back" :
                            "Sign Up for Free"}
                    </h1>

                    {/* Dynamic subtext based on form type */}
                    <p className="text-center text-sm text-gray-500 mt-1 mb-1">
                        {type === "Login" ?
                            "Sign in to continue to your account" :
                            "Sign up to start managing your contacts effortlessly."}
                    </p>

                </div>

                {/* Conditionally render Fullname input for Signup */}
                {type !== "Login" ? <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Firstname:</label>
                    <InputField
                        type={"text"}
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <label className="mb-1 text-gray-700 font-medium">Lastname:</label>
                    <InputField
                        type={"text"}
                        value={lastName}
                        setValue={setLastName}
                    />
                </div> : null}

                {/* Email input */}
                <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Email:</label>
                    <InputField
                        type={"email"}
                        value={email}
                        setValue={setEmail}
                    />
                </div>

                {/* Password input */}
                <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Password:</label>
                    <InputField
                        type={"password"}
                        value={password}
                        setValue={setPassword}
                    />
                </div>

                {/* Submit button: reusable for both Login and Signup */}
                <Button
                    type={"submit"}
                    text={type === "Login" ? "Login" : "Signup"}
                />

                {/* Bottom link for switching forms */}
                {type === "Login" ? (
                    <p className="text-center text-sm text-gray-600">
                        Not having an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                ) : (
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Already registered?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                )}
            </form>

        </div>

    );
}

export default AuthForm;
