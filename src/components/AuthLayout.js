function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Landing Section (Purple) */}
            <div className="md:w-2/5 min-h-[40vh] md:h-screen 
                      bg-purple-600 text-white
                      flex items-center justify-center p-8">
                <div className="max-w-md flex flex-col items-center justify-center text-center space-y-6">
                    <img src="social-media.png" alt="Landing Illustration" className="w-48 md:w-64 rounded-lg" />
                    <h1 className="text-3xl md:text-4xl font-bold">Contact Management System</h1>
                    <p className="text-purple-100 text-lg max-w-xs md:max-w-md">
                        Manage your contacts securely and efficiently. With our intuitive interface, you can easily add, edit, and organize your contacts. Simple, fast, and reliable.
                    </p>
                </div>
            </div>

            {/* Auth Section (White) */}
            <div className="md:w-3/5 min-h-[60vh] md:h-screen 
                      flex items-center justify-center
                      bg-gray-100 p-6 md:p-10">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;