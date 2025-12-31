import { BrowserRouter } from "react-router-dom";
import AppContent from "./router/AppContent";
import { Toaster } from "react-hot-toast";
import RouteLoader from "./components/RouteLoader";

function App() {
  return (
    <BrowserRouter>
      <RouteLoader />
      <Toaster position="top-center" />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
