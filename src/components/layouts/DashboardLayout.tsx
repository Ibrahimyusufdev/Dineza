import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSideBar from "./sidebar/AppSideBar";
import { useNavigate } from "react-router-dom";
import type { User } from "@/types/common";
import { getSidebarConfig } from "./sidebar/sidebarConfig.types";
import { ROUTES } from "@/lib/constant";

const DashboardLayout = () => {
  // Wiring up fake user

  // sidebar data

  const user: User = {
    name: "Ibrahim Yusuf",
    email: "Ibrahimyusuf1304@gmail.com",
    role: "diner",
  };

  const config = getSidebarConfig(user.role);

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate(ROUTES.LOGIN);
  };
  return (
    <SidebarProvider>
      <AppSideBar user={user} config={config} onLogout={handleLogout} />
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
