import { Routes, Route } from "react-router-dom";
// Layout
import PublicLayout from "@/components/layouts/PublicLayout";
import AuthLayout from "@/components/layouts/AuthLayout";

// Public Pages
import LandingPage from "@/pages/landing/LandingPage";
import AboutPage from "@/pages/static/AboutPage";
import ContactPage from "@/pages/static/ContactPage";
import FaqPage from "@/pages/static/FaqPage";
import { LoginPage } from "@/features/auth";
import { RegisterPage } from "@/features/auth";

// Route Guards
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoleGuard from "./routes/RoleGuard";

// Route Groups
import { dinerRoutes } from "./routes/diner-routes";
import { restaurantRoutes } from "./routes/restaurant-routes";

// Global Error Page
import { GlobalNoPage, UnauthorizedPage } from "@/pages";

// ROUTING constant
import { ROUTES } from "@/lib/constant";
import { HelpPage } from "@/pages/static/HelpPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Public layout routing */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />{" "}
        <Route path={ROUTES.FAQ} element={<FaqPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Route>

      {/* Auth Layout routing */}
      <Route element={<AuthLayout />}>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Add register page for diner and restaurant */}
      </Route>

      <Route element={<ProtectedRoutes />}>
        {/* Diner Route */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<RoleGuard allowedRoles={["diner"]} />}>{dinerRoutes}</Route>
        </Route>

        {/* Restaurant Route */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<RoleGuard allowedRoles={["restaurant"]} />}>{restaurantRoutes}</Route>
        </Route>
      </Route>

      {/* Error and unauthorized */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<GlobalNoPage />} />
    </Routes>
  );
};
