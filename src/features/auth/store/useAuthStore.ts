import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import type { UserRole } from "@/types/common";

// Base User Interface - where I will extend the shape for Diner, Restaurant and admin
export interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profilePicture?: string;
  phoneNumber?: string;
  avatar?: string;

  createdAt: Date;
  updatedAt: Date;
}


// Diner User - extending from Base User with specific field added
export interface Diner extends BaseUser {
  role: "diner";
  preferredLocations: string[];
  totalEarnings?: number;
  pendingEarnings?: number;
  availableBalance?: number;
}

// Restaurant User - extending from Base User with specific field added
export interface Restaurant extends BaseUser {
  role: "restaurant";
  restaurantName: string;
  restaurantLogo: string;
  businessEmail: string;
  address: string;
  cuisineType: string;
  isVerified: boolean;
  rating?: number;
  totalReservations?: number;
  pendingReservations?: number;
}

// Making user to be either Diner or Restaurant using discriminated Union in TS for AuthPurpose
export type AuthUser = Diner | Restaurant;

// wiring up AuthState

export interface AuthState {
  // State of data
  user: AuthUser | null; // Current logged in user or null
  accessToken: string | null; // short-lived token used to authenticate user
  refreshToken: string | null; // Long-lived token use to generate new access token if expired for user authentication
  error?: string | null; // error from Api

  isAuthenticated: boolean; // Quick boolean check control to tell that a user is authenticated or not
  isLoading: boolean; // Loading state for Auth check
  // isCheckingAuth: boolean; // Boolean check if user is authenticated or not

  //Actions
  // Set Auth - called after successful login/register, and also set User and token, and mark as authenticated
  setAuth: (user: AuthUser, token: string) => void;

  // Control loading state, and use in auth initialization and Api calls
  setLoading?: (loading: boolean) => void;

  // Partially update user data
  updateAuthUser?: (userData: Partial<AuthUser>) => void;
  
  // Clears all auth data and reset to initial state 
  logout: () => void;
}

/**
Auth Store - Global Authentication state, persisted to localstorage, so users stay logged in
 */

export const useAuthStore = create<AuthState>()(immer(persist((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,

  
  setAuth: (user, token) => {
    set((state) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.isLoading = false;
    })
  },

  setLoading: (loading) => {
    set((state) => {
      state.isLoading = loading;
    })
  },

  logout: () => {
    set((state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false
    })
  }
  
  
}), {
  name: "dineza-auth",
  partialize: (state) => ({
    user: state.user,
    token: state.token,
    isAuthenticated: state.isAuthenticated
  })
})))