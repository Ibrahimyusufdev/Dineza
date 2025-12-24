import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SideHeader from "./SideHeader";

import type { SidebarConfig } from "./sidebarConfig.types";
import {
  LayoutDashboard,
  Compass,
  Book,
  DollarSign,
  Share2,
  MessageSquareText,
  Gift,
  ChartNoAxesColumnDecreasing,
} from "lucide-react";
import NavMain from "./NavMain";
import NavFooter from "./NavFooter";

const AppSideBar = () => {
  // sidebar data
  const sideBarData: SidebarConfig[] = [
    { title: "Dashboard", path: "/diner/dashboard", icon: LayoutDashboard },
    { title: "Explore Restaurants", path: "/diner/explore", icon: Compass },
    { title: "My Reservations", path: "/diner/reservations", icon: Book },
    { title: "My Earnings", path: "/diner/earnings", icon: DollarSign },
    { title: "Invite Friends", path: "/diner/invite", icon: Share2 },
    { title: "Invite Messages", path: "/diner/messages", icon: MessageSquareText },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>

      {/* Main navigation items */}
      <SidebarContent>
        <NavMain items={sideBarData} />
      </SidebarContent>

      {/* Footer navigation items, where user can also signout */}
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
