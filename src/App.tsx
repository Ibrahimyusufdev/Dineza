import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getInitials } from "./helpers/getInitials";

// Public Routing pages
import PublicLayout from "./components/layouts/PublicLayout";
import LandingPage from "./pages/landing/LandingPage";
import AboutPage from "./pages/static/AboutPage";
import ContactPage from "./pages/static/ContactPage";
import FaqPage from "./pages/static/FaqPage";
import { DinerDashboardPage } from "@/domains/diner/dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import { RestaurantDashboardPage } from "@/domains/restaurant/dashboard";
import { RestaurantNotFound } from "@/pages";
import { DinerNotFound } from "@/pages";
import { GlobalNoPage } from "@/pages";
import { ROUTES } from "./lib/constant";
import { DinerExplorePage } from "@/domains/diner/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout routing */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.FAQ} element={<FaqPage />} />

          <Route path="*" element={<GlobalNoPage />} />
        </Route>

        {/* Auth Layout routing */}
        <Route element={<AuthLayout />}></Route>

        {/* diners dashboard layout routing */}
        <Route path="/diner/*" element={<DashboardLayout />}>
          <Route index element={<DinerDashboardPage />} />
          <Route path="explore" element={<DinerExplorePage />} />

          <Route path="*" element={<DinerNotFound />} />
        </Route>

        {/* restaurant dashboard layout routing */}
        <Route path="/restaurant/*" element={<DashboardLayout />}>
          <Route index element={<RestaurantDashboardPage />} />

          <Route path="*" element={<RestaurantNotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
