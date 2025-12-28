import { dinerSidebarConfig } from "./config/dinerSidebarConfig";
import { restaurantSidebarConfig } from "./config/restaurantSidebarConfig";
import type { UserRole } from "@/types/common";
import type { SidebarConfig } from "./types/sidebarConfig.types";

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
