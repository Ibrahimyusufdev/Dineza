import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSideBar from "../../sidebar/components/AppSideBar";
import { useNavigate } from "react-router-dom";
import type { User } from "@/types/common";
import { getSidebarConfig } from "@/sidebar";
import { ROUTES } from "@/lib/constant";

import { useAuthStore } from "@/features/auth";

const DashboardLayout = () => {
  // getting user data from my authstore

  const user = useAuthStore((state) => state.user);



  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
