import { useState } from "react";
import Button from "../components/Button";
import Modal from "./Modal";
import InputField from "./InputField";

function ProfilePage() {
    // Temporary static data (will come from backend later)
    const user = {
        fullName: "John Doe",
        email: "john.doe@example.com",
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        console.log("Current Password: " + currentPassword);
        console.log("New Password: " + newPassword);
        console.log("Confirm New Password: " + confirmNewPassword);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    }

    return (
        <>
            {/* Page container */}
            <div className="max-w-4xl mx-auto p-6">

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmNewPassword("");
                    }}

                    title={"Update Password"}
                    onSubmit={handleUpdatePassword}
                >
                    <InputField
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        setValue={setCurrentPassword}
                    />

                    <InputField
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        setValue={setNewPassword}
                    />

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

                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">

                    {/* Section Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Personal Information
                    </h2>

                    {/* Info Fields */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Full Name
                            </label>
                            <p className="mt-1 text-gray-800">
                                {user.fullName}
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <p className="mt-1 text-gray-800">
                                {user.email}
                            </p>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <p className="mt-1 text-gray-800 tracking-widest">
                                ••••••••
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
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
