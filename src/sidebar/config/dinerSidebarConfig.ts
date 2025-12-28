import type { SidebarConfig } from "../types/sidebarConfig.types";
import {
  LayoutDashboard,
  Compass,
  Book,
  DollarSign,
  Share2,
  MessageSquareText,
  Settings,
  Bell,
} from "lucide-react";
import { ROUTES } from "@/lib/constant";

// Wiring up the configuration for diner sidebar so that I can compose and set it via my getSidebarConfig
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
