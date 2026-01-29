import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../components/AuthLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import UnprotectedRoute from "../components/UnprotectedRoute.js";


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
                        <Route path="/login" element={
                            <UnprotectedRoute>
                                <Login />
                            </UnprotectedRoute>} />
                        <Route path="/signup" element={
                            <UnprotectedRoute>
                                <Signup />
                            </UnprotectedRoute>
                        } />
                    </Routes>
                </AuthLayout>
            ) : (
                <div className="min-h-screen bg-gray-100">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            )}
        </>
    );
}

export default AppContent;
