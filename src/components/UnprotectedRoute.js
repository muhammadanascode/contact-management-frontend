import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UnprotectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (isAuthenticated) {
        return <Navigate to="/" replace />; // or /dashboard
    }

    return children;
};

export default UnprotectedRoute;
