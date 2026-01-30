import axios from "axios";
import toast from "react-hot-toast";

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
