import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../components/AuthLayout";
import { Route, Routes, useLocation } from "react-router-dom";


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
                <Routes>
                    {/* Add other clean pages here */}
                </Routes>
            )}
        </>
    );
}

export default AppContent;
