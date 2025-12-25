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
export interface SidebarConfig {
  items: NavItems[];
  footerItems: NavItems[];
}

export const dinerSidebarConfig: SidebarConfig = {
  items: [
    { id: "dashboard", title: "Dashboard", path: ROUTES.DINER_DASHBOARD, icon: LayoutDashboard },
    { id: "explore", title: "Explore Restaurants", path: ROUTES.DINER_EXPLORE, icon: Compass },
    { id: "reservations", title: "My Reservations", path: ROUTES.DINER_RESERVATIONS, icon: Book },
    { id: "earnings", title: "My Earnings", path: ROUTES.DINER_EARNINGS, icon: DollarSign },
    { id: "invite", title: "Invite Friends", path: ROUTES.DINER_INVITE, icon: Share2 },
    { id: "messages", title: "Messages", path: ROUTES.DINER_MESSAGES, icon: MessageSquareText },
  ],
  footerItems: [
    { id: "settings", title: "Settings", path: ROUTES.DINER_SETTINGS, icon: Settings },
    { id: "notifications", title: "Notifications", path: ROUTES.DINER_NOTIFICATIONS, icon: Bell },
  ],
};

export const restaurantSidebarConfig: SidebarConfig = {
  items: [
    {
      id: "dashboard",
      title: "Dashboard",
      path: ROUTES.RESTAURANT_DASHBOARD,
      icon: LayoutDashboard,
    },
    {
      id: "reservations",
      title: "My Reservations",
      path: ROUTES.RESTAURANT_RESERVATION,
      icon: Book,
    },
    { id: "offer", title: "Special Offer", path: ROUTES.RESTAURANT_OFFER, icon: Gift },
    {
      id: "analytics",
      title: "Analytics",
      path: ROUTES.RESTAURANT_ANALYTICS,
      icon: ChartNoAxesColumnDecreasing,
    },
    { id: "invite", title: "Invite Friends", path: ROUTES.RESTAURANT_INVITE, icon: Share2 },
    { id: "payment", title: "Payment", path: ROUTES.RESTAURANT_PAYMENT, icon: DollarSign },
    {
      id: "messages",
      title: "Messages",
      path: ROUTES.RESTAURANT_MESSAGES,
      icon: MessageSquareText,
    },
  ],
  footerItems: [
    { id: "settings", title: "Settings", path: ROUTES.RESTAURANT_SETTINGS, icon: Settings },
    {
      id: "notifications",
      title: "Notifications",
      path: ROUTES.RESTAURANT_NOTIFICATIONS,
      icon: Bell,
    },
  ],
};

// return sidebar config by role
const SIDEBAR_BY_ROLE: Record<UserRole, SidebarConfig> = {
  diner: dinerSidebarConfig,
  restaurant: restaurantSidebarConfig,
};
export const getSidebarConfig = (role: UserRole): SidebarConfig => {
  const config = SIDEBAR_BY_ROLE[role];
  if (!config) throw new Error(`Unsupported role: ${role}`);
  return config;
};
