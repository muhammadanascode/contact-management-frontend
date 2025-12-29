import { useState } from "react";
import { contacts } from "../data/contacts.js";
import ContactItem from "./ContactItem";
import Pagination from "./Pagination";
import Modal from "./Modal";
import InputField from "./InputField";

// Number of contacts to show per page for pagination
const ITEMS_PER_PAGE = 5;

/**
 * ContactList
 * - Renders a paginated table of contacts.
 * - Keeps pagination state locally and slices the contacts array.
 */
const ContactList = () => {
    // Current page (1-based index)
    const [currentPage, setCurrentPage] = useState(1);

    // Form state for editing 
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Modal open state
    const [isOpen, setIsOpen] = useState(false);

    // Compute total pages from contacts length
    const totalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);

    // Calculate slice start index for current page
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    // Slice the contacts array to only include current page items
    const paginatedContacts = contacts.slice(start, start + ITEMS_PER_PAGE);

    const handleEdit = (contact) => {
        console.log("Edit contact: " + contact.name + ", " + contact.phone);
        setName(contact.name);
        setPhoneNumber(contact.phone);
        setIsOpen(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: " + name, "phoneNumber: " + phoneNumber);
    }

    return (
        // Container card
        <div className="bg-white rounded-lg shadow mt-5">
            {/* Table showing contact rows */}
            <table className="w-full text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Phone Number</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                </thead>

                {/* Modal for creating new contact */}
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={"Edit contact"}
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

                <tbody>
                    {/* Render a ContactItem for each contact on the current page */}
                    {paginatedContacts.map((contact) => (
                        <ContactItem key={contact.id} contact={contact} onEdit={handleEdit} />
                    ))}
                </tbody>
            </table>

            {/* Summary text: shows the visible range and total count */}
            <div className="px-4 pb-4 text-sm text-gray-500">
                Showing {start + 1} to {Math.min(start + ITEMS_PER_PAGE, contacts.length)} of {contacts.length} entries
            </div>

            {/* Pagination control
                - currentPage: current page index
                - totalPages: total number of pages
                - onPageChange: function to change the page
            */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ContactList;
