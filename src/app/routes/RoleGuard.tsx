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

  // Don't forget to change this route to unauthorized, so they can access only the role they're in

  // Check if a user role is the in the allowed list
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
