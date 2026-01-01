import { Route } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { DashboardPage } from "@/domains/restaurant/dashboard";
import { AnalyticsPage } from "@/domains/restaurant/dashboard";
import { RestaurantNotFound } from "@/pages";

export const restaurantRoutes = (
  <Route path="/restaurant/*" element={<DashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="analytics" element={<AnalyticsPage />} />

    <Route path="*" element={<RestaurantNotFound />} />
  </Route>
);
