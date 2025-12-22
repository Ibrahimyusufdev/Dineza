

import type { LucideIcon } from "lucide-react";

// Wiring up types shape for navigation items
export interface NavItems {
  title: string;
  path: string,
  icon: LucideIcon
  isActive?: boolean;
}