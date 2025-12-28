import ContactList from "./ContactList";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Modal from "./Modal";
import InputField from "./InputField";
import { useState } from "react";

const Dashboard = () => {

    //State to control modal visibility and form inputs
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: " + name, "phoneNumber: " + phoneNumber);
        setName("");
        setPhoneNumber("");
        setIsOpen(false);
    }


    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="max-w-6xl mx-auto p-6">
                {/* Search + Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 mb-3 items-start sm:items-center">
                    <div className="flex-1 w-full">
                        <SearchBar />
                    </div>

                    <Button
                        text="+ Add Contact"
                        className="w-full sm:w-auto px-6 py-2 shrink-0"
                        onClick={() => setIsOpen(true)}
                    />
                </div>

                {/* Modal for creating new contact */}
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={"Create contact"}
                    onSubmit={handleSubmit}
                >
                    <InputField
                        type="text"
                        value={name}
                        setValue={setName}
                        placeholder="Name"

                    />

                    <InputField
                        type="text"
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        placeholder="Phone Number"

                    />
                </Modal>

                {/* Contact List Table */}
                <ContactList />
            </main>
        </div>
    );
};

export default Dashboard;
