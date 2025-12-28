// Shadcn ui
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import { Link } from "react-router-dom";

import { useAuthStore } from "@/features/auth";
import { getSidebarConfig } from "../getSidebarConfig";

const NavMain = () => {
  // Getting user data from my store
  const user = useAuthStore((state) => state.user);
  // Func to get my sidebar based on user role from authstore user data
  const config = getSidebarConfig(user.role);

  return (
    <SidebarMenu>
      {config.items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton tooltip={item.title} asChild>
            <Link to={item.path}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default NavMain;
