import { BrowserRouter } from "react-router-dom";
import AppContent from "./router/AppContent";
import { Toaster } from "react-hot-toast";
import RouteLoader from "./components/RouteLoader";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouteLoader />
        <Toaster position="top-center" />
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
