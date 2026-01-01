import { Outlet, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "@/assets/asset";
import { ROUTES } from "@/lib/constant";
import { useAuthStore } from "@/features/auth";
import type { UserRole } from "@/types/common";

const AuthLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const ROLE_ROUTES: Record<UserRole, string> = {
    diner: ROUTES.DINER_DASHBOARD,
    restaurant: ROUTES.RESTAURANT_DASHBOARD,
  };

  if (isAuthenticated && user) {
    return <Navigate to={ROLE_ROUTES[user.role] ?? ROUTES.HOME} />;
  }

  return (
    <section className="min-h-screen">
      <Link to={ROUTES.HOME}>
        <div className="bg-sidebar-secondary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <img src={assets.logo} alt="Dineza logo" className="h-8 w-8" />
        </div>
        <span className="font-medium">DinezaApp</span>
      </Link>

      {/* Outlet for login and register page */}
      <Outlet />
    </section>
  );
};

export default AuthLayout;
