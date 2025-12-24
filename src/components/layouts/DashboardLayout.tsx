import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import AppSideBar from "./sidebar/AppSideBar"


const DashboardLayout = () => {
  return (
   <SidebarProvider>
    <AppSideBar />
    <main className="flex-1 p-4">
      <SidebarTrigger />
      <Outlet />
    </main>
   </SidebarProvider>
  )
}

export default DashboardLayout