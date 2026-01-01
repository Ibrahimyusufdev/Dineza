import { Outlet, Navigate } from "react-router-dom";
import Footer from "../navigation/Footer";
import HeaderLanding from "../navigation/HeaderLanding";
import { useAuthStore } from "@/features/auth";

import { ROUTES } from "@/lib/constant";
import type { UserRole } from "@/types/common";

const PublicLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const ROLE_ROUTES: Record<UserRole, string> = {
    diner: ROUTES.DINER_DASHBOARD,
    restaurant: ROUTES.RESTAURANT_DASHBOARD,
  };

  if (isAuthenticated && user) {
    return <Navigate to={ROLE_ROUTES[user.role] ?? ROUTES.HOME} replace />;
  }
  
  return (
    <section>
      <HeaderLanding />
      <Outlet />
      <Footer />
    </section>
  );
};

export default PublicLayout;
