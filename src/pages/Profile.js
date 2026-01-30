import { useState, useEffect } from "react";
import ProfilePage from "../components/ProfilePage";
import { getProfile } from "../services/ProfileService";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const [profile, setProfile] = useState(null); // start as null
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }
        const fetchProfile = async () => {
            setLoading(true);
            const profileData = await getProfile(token);
            if (profileData) {
                setProfile(profileData);
            }
            setLoading(false);
        };

        fetchProfile();
    }, [token]);

    if (loading) return <p>Loading profile...</p>;
    if (!profile) return <p>Failed to load profile</p>;

    return <ProfilePage profile={profile} />;
};

export default Profile;
