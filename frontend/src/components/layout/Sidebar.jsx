import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Home,
  Truck,
  Users,
  Map,
  Wrench,
  Fuel,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
  localStorage.removeItem("name");

  navigate("/", {
    replace: true,
  });
};

  const menuByRole = {
    "Fleet Manager": [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        name: "Vehicles",
        path: "/vehicles",
        icon: Truck,
      },
      {
        name: "Drivers",
        path: "/drivers",
        icon: Users,
      },
      {
        name: "Trips",
        path: "/trips",
        icon: Map,
      },
      {
        name: "Maintenance",
        path: "/maintenance",
        icon: Wrench,
      },
      {
        name: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
      {
        name: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],

    Driver: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        name: "Trips",
        path: "/trips",
        icon: Map,
      },
    ],

    "Safety Officer": [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        name: "Drivers",
        path: "/drivers",
        icon: Users,
      },
      {
        name: "Maintenance",
        path: "/maintenance",
        icon: Wrench,
      },
      {
        name: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],

    "Financial Analyst": [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        name: "Fuel",
        path: "/fuel",
        icon: Fuel,
      },
      {
        name: "Expenses",
        path: "/expenses",
        icon: Wallet,
      },
      {
        name: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],
  };

  const menuItems = menuByRole[role] || [];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white shadow-sm">

      {/* Logo */}
      <div className="border-b p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          TransitOps
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {role}
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-1 flex-col gap-2 px-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Logout */}
      <div className="border-t p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}