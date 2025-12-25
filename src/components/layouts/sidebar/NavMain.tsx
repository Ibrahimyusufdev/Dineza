import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

import type { SidebarConfig } from "./sidebarConfig.types";

interface NavMainProps {
  items: SidebarConfig;
}

const NavMain = ({ items }: NavMainProps) => {
  return (
    <SidebarMenu>
      {items.navigation.map((item) => (
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
