import { useState } from "react";
import ContactItem from "./ContactItem";
import Pagination from "./Pagination";
import Modal from "./Modal";
import InputField from "./InputField";
import ConfirmModal from "./ConfirmModal.js";
import { useAuth } from "../context/AuthContext";
import { deleteContact, updateContact } from "../services/ContactService.js";

// Number of contacts to show per page for pagination
const ITEMS_PER_PAGE = 5;

/**
 * ContactList
 * - Renders a paginated table of contacts.
 * - Keeps pagination state locally and slices the contacts array.
 */
const ContactList = ({ contacts, setContacts }) => {

    const { token } = useAuth();

    // Current page (1-based index)
    const [currentPage, setCurrentPage] = useState(1);

    // Form state for editing 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailLabel, setEmailLabel] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberLabel, setPhoneNumberLabel] = useState("");
    const [editingId, setEditingId] = useState(null);

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
        setEditingId(contact.id);
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setEmail(contact.email);
        setEmailLabel(contact.emailLabel);
        setPhoneNumber(contact.phoneNumber);
        setPhoneNumberLabel(contact.phoneNumberLabel);
        setIsOpen(true);
    }

    const handleSubmit = async (e) => {
        //prevents reload
        e.preventDefault();
        
        //update contact service
        const updatedContact = await updateContact({
            id:editingId,
            firstName,
            lastName,
            email,
            emailLabel,
            phoneNumber,
            phoneNumberLabel,
            token}
        )
        if (!updatedContact) {
            return;
        }
        // Update contacts array in state
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === editingId ? updatedContact : contact
            )
        );
        setIsOpen(false);
        setEditingId(null);
    }

    const helper = (contact) => {
        setContactToDelete(contact);
        setIsConfirmOpen(true);
    }

    const handleDelete = async () => {
        if (!contactToDelete) return;

        // Call delete API with the contact ID
        const success = await deleteContact(contactToDelete.id, token);

        if (success) {
            // Remove deleted contact from state
            setContacts((prev) =>
                prev.filter((contact) => contact.id !== contactToDelete.id)
            );
        }

        // Close modal and clear selection
        setContactToDelete(null);
        setIsConfirmOpen(false);
    };


    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* Render a ContactItem for each contact on the current page */}
                {contacts.length > 0 ? (paginatedContacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} onEdit={handleEdit} onDelete={helper} />
                ))) :
                    // Show when there are no contacts
                    <div className="text-gray-500 mt-4">No contacts available.</div>
                }

            </div>

            {/* Modals must NOT be placed inside a <table> (invalid HTML). */}
            {/* Render modal components here as siblings of the table. */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={"Edit contact"}
                onSubmit={handleSubmit}
                mode="edit"
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
            {contacts.length > 0 && (<div className="px-4 pb-4 text-sm text-gray-500 mt-4">
                Showing {start + 1} to {Math.min(start + ITEMS_PER_PAGE, contacts.length)} of {contacts.length} entries
            </div>)}

            {/* Pagination control
                - currentPage: current page index
                - totalPages: total number of pages
                - onPageChange: function to change the page
            */}
            {contacts.length > 0 && (<Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            )}
        </>
    );
};

export default ContactList;
