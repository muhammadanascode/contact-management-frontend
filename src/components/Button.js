function Button({ type="button", text , className }) {
    return (
        <>
            <button
                type={type}
                className={` bg-purple-600 text-white py-2.5 rounded-md
             font-medium hover:bg-purple-800
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition` + className}
            >{text}</button>
        </>
    )
}

export default Button;