import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout";
import LandingPage from "./pages/landing/LandingPage";
import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout routing */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* No page Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
