import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";

function AuthForm({ type }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${type} submitted: ${email}`);
    };

    return (
        <div className="w-full max-w-md p-6 sm:p-8 rounded-xl
                        bg-purple-50/70 backdrop-blur-md border border-purple-100/40
                        shadow-lg shadow-purple-200/40">
            <form
                onSubmit={handleSubmit}
                className={`flex flex-col ${type !== "Login" ? "gap-2" : "gap-3"}`}
            >
                <div className="flex flex-col">
                    <img
                        src="/social-media.png"
                        alt="Social media"
                        className="w-24 h-24 mx-auto mb-2"
                    />

                    <h1 className="text-center text-2xl font-bold text-gray-800">
                        {type === "Login" ?
                            "Welcome back" :
                            "Register Yourself"}
                    </h1>
                    <p className="text-center text-sm text-gray-500 mt-1 mb-2">
                        {type === "Login" ?
                            "Sign in to continue to your account" :
                            "Get Your self register here"}
                    </p>

                </div>

                {type !== "Login" ? <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Fullname:</label>
                    <InputField
                        type={"text"}
                        value={name}
                        setValue={setName}
                    />
                </div> : null}

                <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Email:</label>
                    <InputField
                        type={"email"}
                        value={email}
                        setValue={setEmail}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-gray-700 font-medium">Password:</label>
                    <InputField
                        type={"password"}
                        value={password}
                        setValue={setPassword}
                    />
                </div>


                <Button
                    type={"submit"}
                    text={type === "Login" ? "Login" : "Signup"}
                />

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
