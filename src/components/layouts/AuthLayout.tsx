import { Outlet, Navigate } from "react-router-dom";

import { ROUTES } from "@/lib/constant";
import { useAuthStore } from "@/features/auth";
import type { UserRole } from "@/types/common";

import AuthHome from "../common/AuthHome";

const AuthLayout = () => {
  // Check if user is authenticated and only allow them to access authenticated route
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
    <main className="relative min-h-screen">
      {/* Top lef logo */}
      <AuthHome />
      {/* Centered auth content */}
      {/* Outlet for login and register page */}
      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
