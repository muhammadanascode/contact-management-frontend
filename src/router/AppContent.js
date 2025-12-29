import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../components/AuthLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";


function AppContent() {
    const location = useLocation();

    // Show AuthLayout only on login/signup
    const isAuthPage =
        location.pathname === "/login" || location.pathname === "/signup";

    return (
        <>
            {isAuthPage ? (
                <AuthLayout>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </AuthLayout>
            ) : (
                <div className="min-h-screen bg-gray-100">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            )}
        </>
    );
}

export default AppContent;
