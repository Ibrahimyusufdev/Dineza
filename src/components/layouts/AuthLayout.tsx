import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "@/assets/asset";
import { ROUTES } from "@/lib/constant";

const AuthLayout = () => {
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
