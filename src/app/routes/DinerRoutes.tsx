import { Route } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DinerDashboardPage } from "@/domains/diner/dashboard";
import { DinerExplorePage } from "@/domains/diner/dashboard";
import { DinerNotFound } from "@/pages";

/* diners dashboard layout routing */
export const DinerRoutes = () => {
  return (
    <Route path="/diner/*" element={<DashboardLayout />}>
      <Route index element={<DinerDashboardPage />} />
      <Route path="explore" element={<DinerExplorePage />} />

      <Route path="*" element={<DinerNotFound />} />
    </Route>
  );
};
