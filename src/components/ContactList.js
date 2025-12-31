import { useState } from "react";
import { contacts } from "../data/contacts.js";
import ContactItem from "./ContactItem";
import Pagination from "./Pagination";
import Modal from "./Modal";
import InputField from "./InputField";
import ConfirmModal from "./ConfirmModal.js";

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

    // Confirm modal open state
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    // Contact selected for deletion
    const [contactToDelete, setContactToDelete] = useState(null);

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
        //TODO: implement update logic
        e.preventDefault();
        console.log("Name: " + name, "phoneNumber: " + phoneNumber);
    }

    const helper = (contact) => {
        setContactToDelete(contact);
        setIsConfirmOpen(true);
    }

    const handleDelete = () => {
        // TODO: perform actual delete via API
        console.log("Delete contact: " + contactToDelete.name + ", " + contactToDelete.phone);
        // Close confirm modal and clear selection. Actual removal should be
        // handled by app state (e.g., ContactsContext) or by mutating local state.
        setIsConfirmOpen(false);
        setContactToDelete(null);
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center">
            {/* Render a ContactItem for each contact on the current page */}
            {paginatedContacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} onEdit={handleEdit} onDelete={helper} />
            ))}

            </div>

            {/* Modals must NOT be placed inside a <table> (invalid HTML). */}
            {/* Render modal components here as siblings of the table. */}
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

            <ConfirmModal
                isOpen={isConfirmOpen}
                title="Delete Contact"
                message={
                    contactToDelete
                        ? `Are you sure you want to delete ${contactToDelete.name}?`
                        : "Are you sure you want to delete this contact?"
                }
                onConfirm={handleDelete}
                onClose={() => {
                    setIsConfirmOpen(false);
                    setContactToDelete(null);
                }}
            />

            {/* Summary text: shows the visible range and total count */}
            <div className="px-4 pb-4 text-sm text-gray-500 mt-4">
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
        </>
    );
};

export default ContactList;
