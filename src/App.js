import { BrowserRouter } from "react-router-dom";
import AppContent from "./router/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
