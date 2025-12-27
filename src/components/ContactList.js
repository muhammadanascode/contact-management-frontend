import { useState } from "react";
import { contacts } from "../data/contacts.js";
import ContactItem from "./ContactItem";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 5;

const ContactList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedContacts = contacts.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Phone Number</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>

      <div className="px-4 pb-4 text-sm text-gray-500">
        Showing {start + 1} to {Math.min(start + ITEMS_PER_PAGE, contacts.length)} of{" "}
        {contacts.length} entries
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ContactList;
