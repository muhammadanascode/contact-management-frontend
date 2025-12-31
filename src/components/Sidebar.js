import { NavLink } from "react-router-dom";
import logo from '../assests/images/social-media.png';

const Sidebar = ({ isOpen, onClose }) => {
    const handleNavClick = () => {
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            {isOpen && (
                <div className="sm:hidden fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 pt-2 px-4 flex flex-col">
                    <button
                        className="mb-6 text-gray-800 text-xl font-bold text-left"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                    {/* Logo / App Name */}
                    <div className="flex items-center gap-3 mb-8">
                        <img
                            src={logo}
                            className="h-7 w-7 sm:h-10 sm:w-10 object-contain"
                            alt="Logo"
                        />
                        <h1 className="text-base text-lg font-bold text-gray-800">
                            ConnectHub CMS
                        </h1>
                    </div>

                    <nav className="flex flex-col gap-4 flex-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 px-3 rounded transition ${isActive
                                    ? "bg-purple-100 text-purple-600 font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                            onClick={handleNavClick}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `block py-2 px-3 rounded transition ${isActive
                                    ? "bg-purple-100 text-purple-600 font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                            onClick={handleNavClick}
                        >
                            Profile
                        </NavLink>
                    </nav>

                    {/* Profile Section */}
                    <div className="mt-auto border-t pt-4">
                        <h2 className="text-md font-semibold mb-4 text-gray-800 text-center">
                            Welcome, Alex Smith
                        </h2>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
