import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-medium"
            : "text-gray-600 hover:text-blue-600";

    return (
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
            {/* Logo / App Name */}
            <h1 className="text-xl font-bold text-gray-800">
                ConnectHub CMS
            </h1>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
                <NavLink to="/" className={linkClass}>
                    Home
                </NavLink>

                <NavLink to="/dashboard" className={linkClass}>
                    Dashboard
                </NavLink>

                <NavLink to="/profile" className={linkClass}>
                    Profile
                </NavLink>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    Welcome, Alex Smith
                </span>

                <button className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
