function Button({ type = "button", text, className, onClick }) {
    return (
        <>
            <button
                type={type}
                className={` bg-purple-600 text-white py-2.5 rounded-md
             font-medium  focus:outline-none focus:ring-2
              focus:ring-blue-500 ${className}
              `  }
                onClick={onClick}
            >{text}</button>
        </>
    )
}

export default Button;