import { NavLink } from "react-router-dom";

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
                <div className="sm:hidden fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 pt-6 px-4">
                    <button
                        className="mb-6 text-gray-800 text-2xl font-bold"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                    <nav className="flex flex-col gap-4">
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
                </div>
            )}
        </>
    );
};

export default Sidebar;
