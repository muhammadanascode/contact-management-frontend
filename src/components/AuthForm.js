import React, { useState } from "react";
import { Link } from "react-router-dom";

function AuthForm({ type }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${type} submitted: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <img
                    src="/social-media.png"
                    alt="Social media"
                    className="w-24 h-24 mx-auto mb-4"
                />

                <h1 className="text-center text-2xl font-bold text-gray-800">
                    {type === "Login" ?
                        "Welcome back" :
                        "Register Yourself"}
                </h1>
                <p className="text-center text-sm text-gray-500 mt-1 mb-6">
                    {type === "Login" ?
                        "Sign in to continue to your account" :
                        "Get Your self register here"}
                </p>

            </div>

            <div className="flex flex-col">
                <label className="mb-1 text-gray-700 font-medium">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md
             focus:outline-none focus:ring-2 focus:ring-blue-500
             focus:border-blue-500 transition"
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 text-gray-700 font-medium">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md
             focus:outline-none focus:ring-2 focus:ring-blue-500
             focus:border-blue-500 transition"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-md
             font-medium hover:bg-blue-700
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition"
            >
                {type === "Login" ? "Login" : "Signup"}
            </button>
            {type === "Login" ? (
                <p className="text-center text-sm text-gray-600 mt-4">
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
    );
}

export default AuthForm;
