


// User Roles
export type UserRole = "diner" | "restaurant";

// Status
export type Status = "pending" | "active" | "inactive" | "suspended";

// Take this to auth when you start building it
export interface User {
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}