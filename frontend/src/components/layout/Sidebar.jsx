import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-2xl font-bold text-blue-600">
        TransitOps
      </div>

      <nav className="flex flex-col gap-2 px-4">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/vehicles">Vehicles</Link>

        <Link to="/drivers">Drivers</Link>

        <Link to="/trips">Trips</Link>

        <Link to="/maintenance">Maintenance</Link>

        <Link to="/fuel">Fuel</Link>

        <Link to="/expenses">Expenses</Link>

        <Link to="/reports">Reports</Link>

      </nav>
    </aside>
  );
}