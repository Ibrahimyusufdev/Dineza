import { assets } from "@/assets/asset";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useAuthStore } from "@/features/auth";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/constant";
import type { UserRole } from "@/types/common";

// Wire up dashboard by role
const DASHBOARD_BY_ROLE: Record<UserRole, string> = {
  diner: ROUTES.DINER_DASHBOARD,
  restaurant: ROUTES.RESTAURANT_DASHBOARD,
};

const SideHeader = () => {
  // getting user data from my authstore
  const user = useAuthStore((state) => state.user);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to={DASHBOARD_BY_ROLE[user.role]}>
            <div className="bg-sidebar-secondary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <img src={assets.logo} alt="Dineza logo" className="h-8 w-8" />
            </div>
            <span className="font-medium">Dineza</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SideHeader;
