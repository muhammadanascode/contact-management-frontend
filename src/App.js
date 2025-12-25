import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center 
                      bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 px-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
