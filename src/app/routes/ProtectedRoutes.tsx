import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

import { useAuthStore } from "@/features/auth";
import ContentWrapper from "@/components/common/ContentWrapper";
import { ROUTES } from "@/lib/constant";
import type { UserRole } from "@/types/common";



const ProtectedRoutes = () => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);

  const location = useLocation();

  // Checking if user is logged in
  if (isLoading) {
    return (
      <ContentWrapper>
        <Spinner />
      </ContentWrapper>
    );
  }

  /*
    Redirect to login, if user is not logged
    And also save where they were trying to go (to redirect back after login)
  */
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
