import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import SideHeader from "./SideHeader";
// Shadcn ui
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { SidebarConfig } from "./sidebarConfig.types";
import { ChevronsUpDown, LogOut } from "lucide-react";
import NavMain from "./NavMain";
import NavFooter from "./NavFooter";
import type { UserRole } from "@/types";
import { Link, useNavigate } from "react-router-dom";


import type { User } from "@/types/common";

interface AppSidebarProps {
  user: User;
  config: SidebarConfig;
  onLogout: () => void;
}

const AppSideBar = ({ user, config, onLogout }: AppSidebarProps) => {
  // Wiring up fake user

  // sidebar data

  const isMobile = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>

      {/* Main navigation items */}
      <SidebarContent>
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
      </SidebarContent>

      {/* Footer navigation items, where user can also signout */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              {/* Trigger for dropdown */}
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">
                      {user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              {/* Dropdown menu containing routing and logout */}
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                {/* Change to routing you want to go to, and use TS */}
                <Link to={`/${user.role}/profile`}>
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="rounded-lg">
                          {user.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />

                {/* Nav links for footer */}
                <DropdownMenuGroup>
                  {config.footerItems.map((item) => (
                    <Link to={item.path}>
                      <DropdownMenuItem>
                        <item.icon />
                        {item.title}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button onClick={onLogout} variant="outline">
                    <LogOut />
                    Log out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
