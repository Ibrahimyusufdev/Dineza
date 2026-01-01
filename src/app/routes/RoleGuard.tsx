import { useAuthStore } from "@/features/auth";
import { ROUTES } from "@/lib/constant";

import type { UserRole } from "@/types/common";
import { Navigate, Outlet } from "react-router-dom";

interface RoleGuardProps {
  allowedRoles: UserRole[];
}

const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  // Check if a user role is the in the allowed list
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
