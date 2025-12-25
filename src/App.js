import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center 
                      bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 px-4">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-xl
                        bg-purple-50/70 backdrop-blur-md border border-purple-100/40
                        shadow-lg shadow-purple-200/40">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
