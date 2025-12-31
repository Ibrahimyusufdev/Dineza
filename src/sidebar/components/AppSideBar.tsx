// Shadcn ui
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

//  Sidebar header component
import SideHeader from "./SideHeader";

// Navigation component for Main and footer
import NavMain from "./NavMain";
import NavFooter from "./NavFooter";


export const AppSideBar = () => {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SideHeader />
        </SidebarHeader>

        {/* Main navigation items */}
        <SidebarContent>
          <SidebarMenu>
            <NavMain />
          </SidebarMenu>
        </SidebarContent>

        {/* Footer navigation items, where user can also signout */}
        <SidebarFooter>
          <NavFooter />
        </SidebarFooter>
      </Sidebar>
    </>
  );
};
