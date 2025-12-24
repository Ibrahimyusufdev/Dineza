import type { LucideIcon } from "lucide-react";
import type { UserRole } from "@/types";
import { ROUTES } from "@/lib/constant";
// Dashboard icon for diners
import {
  LayoutDashboard,
  Compass,
  Book,
  DollarSign,
  Share2,
  MessageSquareText,
  Gift,
  ChartNoAxesColumnDecreasing,
  Settings,
  Bell,
} from "lucide-react";

// Wiring up shape design for my navigation routes

export interface NavItems {
  id: string;
  title: string;
  path: string;
  icon: LucideIcon;
  isActive?: boolean;
}

// export interface SidebarUser {
//   name: string;
//   email: string;
//   avatar?: string;
//   role?: UserRole;
// }

export interface SidebarConfig {
  navigation: NavItems[];
  footerItems?: NavItems[];
}

export const dinerSidebarConfig: SidebarConfig = {
  navigation: [
    { id: "dashboard", title: "dashboard", path: ROUTES.DINER_DASHBOARD, icon: LayoutDashboard },
    { id: "explore", title: "Explore Restaurants", path: ROUTES.DINER_EXPLORE, icon: Compass },
    { id: "reservations", title: "My Reservations", path: ROUTES.DINER_RESERVATIONS, icon: Book },
    { id: "earnings", title: "My Earnings", path: ROUTES.DINER_EARNINGS, icon: DollarSign },
    { id: "invite", title: "Invite Friends", path: ROUTES.DINER_INVITE, icon: Share2 },
    { id: "messages", title: "Messages", path: ROUTES.DINER_MESSAGES, icon: MessageSquareText },
  ],
  footerItems: [
    { id: "settings", title: "settings", path: ROUTES.DINER_SETTINGS, icon: Settings },
    { id: "notifications", title: "notifications", path: ROUTES.DINER_NOTIFICATIONS, icon: Bell },
  ],
};
