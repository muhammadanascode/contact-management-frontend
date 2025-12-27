import ContactList from "./ContactList";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {/* Search + Action Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <SearchBar />

          <Button
            text="+ Add Contact"
            className="w-full sm:w-auto px-6"
          />
        </div>

        <ContactList />
      </main>
    </div>
  );
};

export default Dashboard;
