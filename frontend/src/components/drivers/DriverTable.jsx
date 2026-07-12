import { Pencil, Trash2 } from "lucide-react";

export default function DriverTable({
  drivers,
  onEdit,
  onDelete,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "On Trip":
        return "bg-blue-100 text-blue-700";

      case "Off Duty":
        return "bg-yellow-100 text-yellow-700";

      case "Suspended":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Driver</th>
            <th className="px-6 py-4 text-left">License No.</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Phone</th>
            <th className="px-6 py-4 text-left">Experience</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr
              key={driver.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {driver.name}
              </td>

              <td className="px-6 py-4">
                {driver.license}
              </td>

              <td className="px-6 py-4">
                {driver.category}
              </td>

              <td className="px-6 py-4">
                {driver.phone}
              </td>

              <td className="px-6 py-4">
                {driver.experience}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${getStatusColor(
                    driver.status
                  )}`}
                >
                  {driver.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onEdit(driver)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-600"
                    />
                  </button>

                  <button
                    onClick={() => onDelete(driver)}
                    className="rounded-lg p-2 hover:bg-red-100"
                  >
                    <Trash2
                      size={18}
                      className="text-red-600"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}