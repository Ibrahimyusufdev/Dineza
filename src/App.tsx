import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Routing pages
import PublicLayout from "./components/layouts/PublicLayout";
import LandingPage from "./pages/landing/LandingPage";
import AboutPage from "./pages/static/AboutPage";
import ContactPage from "./pages/static/ContactPage";
import FaqPage from "./pages/static/FaqPage";

import AuthLayout from "./components/layouts/AuthLayout";

import { GlobalNoPage } from "@/pages";
import { ROUTES } from "./lib/constant";
import ProtectedRoutes from "./app/routes/ProtectedRoutes";
import { LoginPage, RegisterPage, useAuthStore } from "./features/auth";
import RoleGuard from "./app/routes/RoleGuard";
import { dinerRoutes } from "./app/routes/DinerRoutes";
import { restaurantRoutes } from "./app/routes/RestaurantRoutes";

// import { DinerRoutes } from "./app/routes/DinerRoutes";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public layout routing */}
//         <Route path="/" element={<PublicLayout />}>
//           <Route index element={<LandingPage />} />
//           <Route path={ROUTES.ABOUT} element={<AboutPage />} />
//           <Route path={ROUTES.CONTACT} element={<ContactPage />} />
//           <Route path={ROUTES.FAQ} element={<FaqPage />} />

//           <Route path="*" element={<GlobalNoPage />} />
//         </Route>

//         {/* Auth Layout routing */}
//         <Route element={<AuthLayout />}>
//           <Route index path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Route>

//         {/* Diner Route */}
//         <Route element={<ProtectedRoutes />}>
//           <Route element={<RoleGuard allowedRoles={["diner"]} />}>
//             <Route path="/diner/*" element={<DashboardLayout />}>
//               <Route index element={<DinerDashboardPage />} />
//               <Route path="explore" element={<DinerExplorePage />} />

//               <Route path="*" element={<DinerNotFound />} />
//             </Route>
//           </Route>
//         </Route>

//         {/* Restaurant Route */}
//         <Route element={<ProtectedRoutes />}>
//           <Route element={<RoleGuard allowedRoles={["restaurant"]} />}>
//             <Route path="/restaurant/*" element={<DashboardLayout />}>
//               <Route index element={<RestaurantDashboardPage />} />

//               <Route path="*" element={<RestaurantNotFound />} />
//             </Route>
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout routing */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />{" "}
          <Route path={ROUTES.FAQ} element={<FaqPage />} />
          <Route path="*" element={<GlobalNoPage />} />
        </Route>

        {/* Auth Layout routing */}
        <Route element={<AuthLayout />}>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Diner Route */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<RoleGuard allowedRoles={["diner"]} />}>{dinerRoutes}</Route>
        </Route>

        {/* Restaurant Route */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<RoleGuard allowedRoles={["restaurant"]} />}>{restaurantRoutes}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
