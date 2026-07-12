import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import VehicleList from "../pages/Vehicles/VehicleList";
import DriverList from "../pages/Drivers/DriverList";
import TripList from "../pages/Trips/TripList";
import Maintenance from "../pages/Maintenance/Maintenance";
import Fuel from "../pages/Fuel/Fuel";
import Expenses from "../pages/Expenses/Expenses";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

import ProtectedRoute from "../auth/ProtectedRoute";
import RoleProtectedRoute from "../auth/RoleProtectedRoute";

import PublicRoute from "../auth/PublicRoute";
import { Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
  path="/"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>

<Route
  path="/signup"
  element={
    <PublicRoute>
      <Signup />
    </PublicRoute>
  }
/>

        {/* Protected Layout */}

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Fleet Manager */}

          <Route
            path="/vehicles"
            element={
              <RoleProtectedRoute
                allowedRoles={["Fleet Manager"]}
              >
                <VehicleList />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/drivers"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Fleet Manager",
                  "Safety Officer",
                ]}
              >
                <DriverList />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/trips"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Fleet Manager",
                  "Driver",
                ]}
              >
                <TripList />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/maintenance"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Fleet Manager",
                  "Safety Officer",
                ]}
              >
                <Maintenance />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/fuel"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Financial Analyst",
                ]}
              >
                <Fuel />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/expenses"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Financial Analyst",
                ]}
              >
                <Expenses />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Fleet Manager",
                  "Safety Officer",
                  "Financial Analyst",
                ]}
              >
                <Reports />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <RoleProtectedRoute
                allowedRoles={[
                  "Fleet Manager",
                ]}
              >
                <Settings />
              </RoleProtectedRoute>
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}