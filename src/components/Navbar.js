import { NavLink } from "react-router-dom";
// import NProgress from 'nprogress';

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-purple-600 font-medium"
            : "text-gray-600 hover:text-purple-600";

    return (
        <nav className="bg-white shadow-sm px-4 sm:px-6 py-3 sm:py-4 flex flex-row sm:flex-row justify-between items-center gap-3 sm:gap-0">
            {/* Logo / App Name */}
            <div className="flex items-center gap-3 sm:gap-6">
                <img
                    src="social-media.png"
                    className="h-7 w-7 sm:h-10 sm:w-10 object-contain"
                    alt="Logo"
                />
                <h1 className="text-base sm:text-xl font-bold text-gray-800">
                    ConnectHub CMS
                </h1>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
                <NavLink to="/" className={linkClass}>
                    Dashboard
                </NavLink>

                <NavLink to="/profile" className={linkClass}>
                    Profile
                </NavLink>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
                <span className="hidden sm:inline text-xs sm:text-sm text-gray-600">
                    Welcome, Alex Smith
                </span>

                <button className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
