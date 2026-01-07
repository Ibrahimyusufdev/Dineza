import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import type { UserRole } from "@/types/common";

// Base User Interface
export interface User {
  id?: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}


interface AuthState {
  user: User | null;
  token?: string | null;
  error?: string | null;
  isAuthenticated?: boolean;
  isLoading?: boolean;

  // Actions
  setAuth?: (user: User, token: string) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  immer(
    persist(
      (set) => ({
        user: { name: "Ibrahim Yusuf", email: "Ibrahimyusuf1304@gmail.com", role: "diner" },

        isAuthenticated: true,
        isLoading: false,

        logout: async () => {
          set((state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
          });
        },
      }),
      {
        name: "user-storage",
        partialize: (state) => ({
          user: state.user,
          // token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);
