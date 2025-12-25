import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField"; // Reusable input component
import Button from "./Button"; // Reusable button component

function AuthForm({ type }) {

    // Using local state for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission; currently just alerts for demo purposes
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${type} submitted: ${email}`);
    };

    return (

        // Card container: reusable for any auth form; uses Tailwind for styling and responsiveness
        <div className="w-full max-w-md p-6 sm:p-8 rounded-xl
                        bg-purple-50/70 backdrop-blur-md border border-purple-100/40
                        shadow-lg shadow-purple-200/40">
            <form
                onSubmit={handleSubmit}
                className={`flex flex-col ${type !== "Login" ? "gap-2" : "gap-3"}`}
            >
                {/* Top section: logo, heading, description */}
                <div className="flex flex-col">

                    {/* Logo */}
                    <img
                        src="/social-media.png"
                        alt="Social media"
                        className="w-24 h-24 mx-auto mb-2"
                    />

                    {/* Dynamic heading based on form type */}
                    <h1 className="text-center text-2xl font-bold text-gray-800">
                        {type === "Login" ?
                            "Welcome back" :
                            "Register Yourself"}
                    </h1>

                    {/* Dynamic subtext based on form type */}
                    <p className="text-center text-sm text-gray-500 mt-1 mb-2">
                        {type === "Login" ?
                            "Sign in to continue to your account" :
                            "Get Your self register here"}
                    </p>

                </div>

                {/* Conditionally render Fullname input for Signup */}
                {type !== "Login" ? <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Fullname:</label>
                    <InputField
                        type={"text"}
                        value={name}
                        setValue={setName}
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
                    <p className="text-center text-sm text-gray-600 mt-4">
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
