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

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
