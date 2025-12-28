// Shadcn ui
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import { NavLink } from "react-router-dom";

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
          <NavLink
            to={item.path}
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }
          >
            <SidebarMenuButton tooltip={item.title} className="cursor-pointer px-4 py-5">
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </NavLink>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default NavMain;
