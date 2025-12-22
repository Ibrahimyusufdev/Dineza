import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Routing pages
import PublicLayout from "./components/layouts/PublicLayout";
import LandingPage from "./pages/landing/LandingPage";
import NoPage from "./pages/error/NoPage";
import AboutPage from "./pages/static/AboutPage";
import ContactPage from "./pages/static/ContactPage";
import FaqPage from "./pages/static/FaqPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout routing */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />

          {/* Auth Layout routing */}
          
        </Route>

        {/* No page Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
