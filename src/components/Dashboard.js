import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Modal from "./Modal";
import InputField from "./InputField";
import { useState } from "react";
import { createContact } from "../services/ContactService";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

    const { token } = useAuth();

    //State to control modal visibility and form inputs
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailLabel, setEmailLabel] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberLabel, setPhoneNumberLabel] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createContact(
            firstName,
            lastName,
            email,
            emailLabel,
            phoneNumber,
            phoneNumberLabel,
            token
        )
        if (!res) {
            return;
        }
        setIsOpen(false);
    }


    return (
        <main className="max-w-6xl mx-auto p-6">
            {/* Search + Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-3 items-start sm:items-center">
                <div className="flex-1 w-full">
                    <SearchBar />
                </div>

                <Button
                    text="+ Add Contact"
                    className=" px-6 py-2 shrink-0 rounded-full"
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
                    value={firstName}
                    setValue={setFirstName}
                    placeholder="Firstname"
                />

                <InputField
                    type="text"
                    value={lastName}
                    setValue={setLastName}
                    placeholder="Lastname"
                />
                <InputField
                    type="text"
                    value={email}
                    setValue={setEmail}
                    placeholder="Email"
                />
                <InputField
                    type="text"
                    value={emailLabel}
                    setValue={setEmailLabel}
                    placeholder="Email Label"
                />
                <InputField
                    type="text"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    placeholder="Phone Number"
                />
                <InputField
                    type="text"
                    value={phoneNumberLabel}
                    setValue={setPhoneNumberLabel}
                    placeholder="Phone No. label"
                />
            </Modal>

            {/* Contact List Header */}
            <div className="mt-8">
                <h4 className="text-lg font-semibold">All Contacts</h4>
            </div>

            {/* Contact List Table */}
            <ContactList />
        </main>
    );
};

export default Dashboard;
