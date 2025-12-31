import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import logo from '../assests/images/contact.png';

/**
 * ContactItem Component
 * Displays a single contact as a row with name, phone, and action buttons.
 */
const ContactItem = ({ contact, onEdit, onDelete }) => {
    return (
        <>
            {/* Contact row container: flex layout with space between content and action buttons */}
            <div className="flex flex-row justify-between bg-white rounded-lg shadow mt-4 w-full">
                {/* Left section: contact avatar/logo and contact details */}
                <div className='flex flex-row gap-2 items-center ml-4'>
                    {/* Contact avatar icon */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-8 h-8 object-contain"
                    />
                    {/* Contact name and phone number display */}
                    <div className='flex flex-col px-2 py-2'>
                        {/* Contact name - displayed in bold */}
                        <div className='font-bold'>{contact.name}</div>
                        {/* Contact phone number - displayed in gray */}
                        <div className='text-gray-600'>{contact.phone}</div>
                    </div>
                </div>
                {/* Right section: action buttons (edit and delete) */}
                <div className="py-2 px-2 text-right space-x-2 flex items-center gap-4">
                    {/* Edit button - opens modal to edit contact */}
                    <button className="text-gray-600 text-sm" onClick={() => onEdit(contact)}>
                        <PencilIcon className="w-5 h-5" />
                    </button>
                    {/* Delete button - triggers delete confirmation modal */}
                    <button className="text-gray-600 text-sm" onClick={() => onDelete(contact)}>
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </>
    );
};

export default ContactItem;
