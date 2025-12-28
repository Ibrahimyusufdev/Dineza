import type { LucideIcon } from "lucide-react";

// Wiring up shape design for my navigation routes
export interface NavItems {
  id: string;
  title: string;
  path: string;
  icon: LucideIcon;
}
export interface SidebarConfig {
  items: NavItems[];
  footerItems: NavItems[];
}
