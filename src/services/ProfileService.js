import axios from "axios";
import toast from "react-hot-toast";
import { validatePassword } from "../utils/validation";

//Service: fetch user's profile
export const getProfile = async (token) => {
    try {
        const res = await axios.get("http://localhost:8080/profile/info", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to fetch profile");
        return null;
    }
};

//Service: update user's password
export const updatePassword = async (oldPassword, newPassword, confirmPassword,token) => {
    if (
        !validatePassword(oldPassword) ||
        !validatePassword(newPassword) ||
        !validatePassword(confirmPassword)
    ) {
        toast.error("Password must be at least 8 characters");
        return null;
    }

    try {
        const res = await axios.post(
            "http://localhost:8080/profile/updatePassword",
            {
                oldPassword,
                newPassword,
                confirmPassword
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        toast.success("Password updated successfully");
        return res.status;

    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to update password");
        return null;
    }
};