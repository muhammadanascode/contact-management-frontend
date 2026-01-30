import { useState } from "react";
import Button from "../components/Button";
import Modal from "./Modal";
import InputField from "./InputField";
import { updatePassword } from "../services/ProfileService";
import { useAuth } from "../context/AuthContext";

/**
 * ProfilePage
 * - Displays user profile information (name, email, password).
 * - Provides ability to update password via a modal.
 */
function ProfilePage({ profile }) {

    const { token } = useAuth();

    // Modal visibility state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Password update form state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    /**
     * handleUpdatePassword
     * - Called on password update modal submit.
     * - update password field
     * - Resets form fields after submission.
     * - Close the modal
     */
    const handleUpdatePassword = async (e) => {
        //prevents reload
        e.preventDefault();
        //update password
        const status = await updatePassword(
            currentPassword,
            newPassword,
            confirmNewPassword,
            token);

        // if updates fails
        if (status !== 204) {
            return;
        }
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setIsModalOpen(false);
    }

    return (
        <>
            {/* Page wrapper */}
            <div className="max-w-4xl mx-auto p-6">

                {/* Password update modal: controlled by isModalOpen state */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        // Clear form on close
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmNewPassword("");
                    }}

                    title={"Update Password"}
                    onSubmit={handleUpdatePassword}
                    mode="edit"
                >
                    {/* Current password input */}
                    <InputField
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        setValue={setCurrentPassword}
                    />

                    {/* New password input */}
                    <InputField
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        setValue={setNewPassword}
                    />

                    {/* Confirm new password input */}
                    <InputField
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmNewPassword}
                        setValue={setConfirmNewPassword}
                    />

                </Modal>

                {/* Page Header */}
                <div className="mb-6 mt-4">
                    <h1 className="text-3xl font-bold text-gray-800">
                        My Profile
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage your application details and track your progress
                    </p>
                </div>

                {/* Profile Card: displays user info and actions */}
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">

                    {/* Section Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Personal Information
                    </h2>

                    {/* User Info Fields: name, email, password (masked) */}
                    <div className="space-y-4">
                        {/* Full Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Full Name
                            </label>
                            <p className="mt-1 text-gray-800">
                                {profile?.firstName} {profile?.lastName}
                            </p>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <p className="mt-1 text-gray-800">
                                {profile?.email}
                            </p>
                        </div>

                        {/* Password Field: displayed as masked dots */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <p className="mt-1 text-gray-800 tracking-widest">
                                ••••••••
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons: opens password update modal */}
                    <div className="mt-6 flex justify-end">
                        <Button
                            text="Update Password"
                            className=" px-4"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
