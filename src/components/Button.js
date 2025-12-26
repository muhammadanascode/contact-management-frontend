import React from "react";

function Button({ type, text }) {
    return (
        <>
            <button
                type={type}
                className="w-full bg-purple-600 text-white py-2.5 rounded-md
             font-medium hover:bg-purple-800
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition"
            >{text}</button>
        </>
    )
}

export default Button;