import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import VehicleList from "../pages/Vehicles/VehicleList";
import DriverList from "../pages/Drivers/DriverList";
import TripList from "../pages/Trips/TripList";
import Maintenance from "../pages/Maintenance/Maintenance";
import Fuel from "../pages/Fuel/Fuel";
import Expenses from "../pages/Expenses/Expenses";
import Reports from "../pages/Reports/Reports";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/trips" element={<TripList />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/fuel" element={<Fuel />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}