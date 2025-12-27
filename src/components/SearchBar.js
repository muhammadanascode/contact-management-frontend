import Button from './Button';

const SearchBar = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
                type="text"
                placeholder="Search contacts by name or phone..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
                text=" + Add Contact"
                className="w-full sm:w-auto px-4"
            />
        </div>
    );
};

export default SearchBar;
