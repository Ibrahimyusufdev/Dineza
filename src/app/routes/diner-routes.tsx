

import { Route } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";

// Pages from diners dashboard interface
import { DashboardPage } from "@/domains/diner/dashboard";
import { ExplorePage } from "@/domains/diner/dashboard";
import { DinerNotFound } from "@/pages";

/* diners dashboard layout routing */
export const dinerRoutes = (
  <Route path="/diner/*" element={<DashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="explore" element={<ExplorePage />} />

    <Route path="*" element={<DinerNotFound />} />
  </Route>
);
