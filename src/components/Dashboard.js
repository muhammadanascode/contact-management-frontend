import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="max-w-6xl mx-auto p-6">
                <SearchBar />
            </main>
        </div>
    );
};

export default Dashboard;
