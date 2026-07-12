import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    depotName: "TransitOps Depot",
    currency: "INR (₹)",
    distanceUnit: "Kilometers",
  });

  const permissions = [
    {
      role: "Fleet Manager",
      vehicles: true,
      drivers: true,
      trips: true,
      maintenance: true,
      fuel: false,
      expenses: false,
      reports: true,
    },
    {
      role: "Driver",
      vehicles: false,
      drivers: false,
      trips: true,
      maintenance: false,
      fuel: false,
      expenses: false,
      reports: false,
    },
    {
      role: "Safety Officer",
      vehicles: false,
      drivers: true,
      trips: false,
      maintenance: true,
      fuel: false,
      expenses: false,
      reports: true,
    },
    {
      role: "Financial Analyst",
      vehicles: false,
      drivers: false,
      trips: false,
      maintenance: false,
      fuel: true,
      expenses: true,
      reports: true,
    },
  ];

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  const badge = (allowed) => (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        allowed
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      }`}
    >
      {allowed ? "Allowed" : "Denied"}
    </span>
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500">
          Manage application settings and role permissions
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* General Settings */}

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-5 text-xl font-bold">
            General Settings
          </h2>

          <div className="space-y-4">

            <div>

              <label className="mb-2 block font-medium">
                Depot Name
              </label>

              <input
                name="depotName"
                value={settings.depotName}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Currency
              </label>

              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              >
                <option>INR (₹)</option>
                <option>USD ($)</option>
                <option>EUR (€)</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Distance Unit
              </label>

              <select
                name="distanceUnit"
                value={settings.distanceUnit}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              >
                <option>Kilometers</option>
                <option>Miles</option>
              </select>

            </div>

            <button
              onClick={handleSave}
              className="mt-3 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>

        </div>

        {/* User Info */}

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-5 text-xl font-bold">
            Logged In User
          </h2>

          <div className="space-y-4">

            <div className="rounded-lg bg-slate-100 p-4">

              <p className="text-gray-500">
                Name
              </p>

              <h3 className="text-lg font-semibold">
                {localStorage.getItem("name")}
              </h3>

            </div>

            <div className="rounded-lg bg-slate-100 p-4">

              <p className="text-gray-500">
                Email
              </p>

              <h3 className="text-lg font-semibold">
                {localStorage.getItem("email")}
              </h3>

            </div>

            <div className="rounded-lg bg-slate-100 p-4">

              <p className="text-gray-500">
                Role
              </p>

              <h3 className="text-lg font-semibold text-blue-600">
                {localStorage.getItem("role")}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Role Permissions */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-bold">
          Role Permissions
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-4 py-3 text-left">
                  Role
                </th>

                <th className="px-4 py-3">
                  Vehicles
                </th>

                <th className="px-4 py-3">
                  Drivers
                </th>

                <th className="px-4 py-3">
                  Trips
                </th>

                <th className="px-4 py-3">
                  Maintenance
                </th>

                <th className="px-4 py-3">
                  Fuel
                </th>

                <th className="px-4 py-3">
                  Expenses
                </th>

                <th className="px-4 py-3">
                  Reports
                </th>

              </tr>

            </thead>

            <tbody>

              {permissions.map((item) => (

                <tr
                  key={item.role}
                  className="border-b"
                >

                  <td className="px-4 py-4 font-semibold">
                    {item.role}
                  </td>

                  <td className="text-center">
                    {badge(item.vehicles)}
                  </td>

                  <td className="text-center">
                    {badge(item.drivers)}
                  </td>

                  <td className="text-center">
                    {badge(item.trips)}
                  </td>

                  <td className="text-center">
                    {badge(item.maintenance)}
                  </td>

                  <td className="text-center">
                    {badge(item.fuel)}
                  </td>

                  <td className="text-center">
                    {badge(item.expenses)}
                  </td>

                  <td className="text-center">
                    {badge(item.reports)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}