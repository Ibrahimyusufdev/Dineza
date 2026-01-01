import { Route } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";

// Pages from diners dashboard interface
import { DashboardPage } from "@/domains/diner/dashboard";
import { ExplorePage } from "@/domains/diner/dashboard";
import { DinerNotFound, GlobalNoPage } from "@/pages";

/* diners dashboard layout routing */
export const dinerRoutes = (
  <Route path="/diner/*" element={<DashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="explore" element={<ExplorePage />} />

    {/* Add all other pages route here once they're ready */}

    <Route path="*" element={<GlobalNoPage />} />
  </Route>
);
