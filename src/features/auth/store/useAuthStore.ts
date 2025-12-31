import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import type { UserRole } from "@/types/common";


export interface User {
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token?: string | null;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

export const useAuthStore = create<AuthState>()(
  immer(
    persist(
      (set) => ({
        user: {
          name: "Ibrahim Yusuf",
          email: "Ibrahimyusuf1304@gmail.com",
          role: "diner",
          avatar: "/public/Headshot.jpeg"
        },
      }),
      {
        name: "user-storage",
        partialize: (state) => ({
          user: state.user,
        }),
      }
    )
  )
);
