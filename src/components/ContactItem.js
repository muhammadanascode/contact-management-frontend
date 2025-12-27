const ContactItem = ({ contact }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="py-3 px-4">{contact.name}</td>
      <td className="py-3 px-4">{contact.phone}</td>
      <td className="py-3 px-4 text-right space-x-2">
        <button className="text-blue-600 text-sm">Edit</button>
        <button className="text-red-600 text-sm">Delete</button>
      </td>
    </tr>
  );
};

export default ContactItem;
