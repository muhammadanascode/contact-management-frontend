import React from "react";

function InputField({type , value , setValue}) {
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md
             focus:outline-none focus:ring-2 focus:ring-blue-500
             focus:border-blue-500 transition"
            />
        </>
    )
}

export default InputField;