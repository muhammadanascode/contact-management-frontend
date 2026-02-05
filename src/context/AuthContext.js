import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { isTokenValid } from "../utils/validation.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load token on app start
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken && isTokenValid(storedToken)) {
            setToken(storedToken);
        } else {
            localStorage.removeItem("token");
        }
        setLoading(false);
    }, []);

    const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const value = useMemo(() => ({
        token,
        isAuthenticated: !!token,
        login,
        logout,
        loading,
    }));

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook (cleaner usage)
export const useAuth = () => {
    return useContext(AuthContext);
};
