import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const ContactItem = ({ contact }) => {
    return (
        <tr className="border-b last:border-none">
            <td className="py-3 px-4">{contact.name}</td>
            <td className="py-3 px-4">{contact.phone}</td>
            <td className="py-3 px-4 text-right space-x-2">
                <button className="text-gray-600 text-sm">
                    <PencilIcon className="w-5 h-5" />
                </button>
                <button className="text-gray-600 text-sm">
                    <TrashIcon className="w-5 h-5" /> {/* Delete */}
                </button>
            </td>
        </tr>
    );
};

export default ContactItem;
