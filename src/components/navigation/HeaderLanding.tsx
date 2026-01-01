import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth";
import { ROUTES } from "@/lib/constant";
import type { UserRole } from "@/types/common";

//  Map dashboard routes by user role

const DASHBOARD_BY_ROLE: Record<UserRole, string> = {
  diner: ROUTES.DINER_DASHBOARD,
  restaurant: ROUTES.RESTAURANT_DASHBOARD,
};

const HeaderLanding = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  //  Determine which dashboard route to send the user to
  const getCorrectDashboard = (): string => {
    if (!user) return ROUTES.LOGIN;

    return DASHBOARD_BY_ROLE[user.role] ?? ROUTES.HOME;
  };

  // Navigate user to their dashboard

  const handleGoToDashboard = (): void => {
    navigate(getCorrectDashboard());
  };

  return (
    <header className="bg-gray-300">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Main navigation */}
        <ul className="flex items-center gap-x-10 py-6">
          <li>
            <Link
              to="/"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/faq"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Auth actions */}
        {isAuthenticated && user ? (
          <Button onClick={handleGoToDashboard}>My Dashboard</Button>
        ) : (
          <ul className="flex items-center gap-9">
            <li>
              <Link
                to="/login"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="inline-flex items-center rounded-md bg-black px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeaderLanding;
