import { Route } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { DashboardPage } from "@/domains/restaurant/dashboard";
import { AnalyticsPage } from "@/domains/restaurant/dashboard";
import { GlobalNoPage, RestaurantNotFound } from "@/pages";

export const restaurantRoutes = (
  <Route path="/restaurant/*" element={<DashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="analytics" element={<AnalyticsPage />} />

    {/* Add all other pages route here once they're ready */}
    <Route path="*" element={<GlobalNoPage />} />
  </Route>
);
