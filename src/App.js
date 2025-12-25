import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";   // Login page component
import Signup from "./pages/Signup"; // Signup page component

function App() {
  return (
    // BrowserRouter wraps the entire app for routing capabilities
    <BrowserRouter>
      {/* 
        Full-page wrapper:
        - min-h-screen ensures it takes full viewport height
        - flex + items-center + justify-center centers content
        - bg-gradient-to-br provides background gradient
        - px-4 adds horizontal padding for mobile responsiveness
      */}
      <div className="min-h-screen flex items-center justify-center 
                      bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 px-4">
        
        {/* 
          Routes define the navigation paths for the app.
          - Keeps routing logic centralized here
        */}
        <Routes>
          <Route path="/login" element={<Login />} />   {/* Route to Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Route to Signup page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
