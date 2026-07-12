import { Pencil, Trash2 } from "lucide-react";

export default function VehicleTable({
  vehicles,
  onEdit,
  onDelete,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "On Trip":
        return "bg-blue-100 text-blue-700";

      case "Maintenance":
        return "bg-red-100 text-red-700";

      case "Retired":
        return "bg-gray-200 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">
              Registration
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Vehicle
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Type
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Capacity
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle) => (
            <tr
              key={vehicle.regNo}
              className="border-t hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4">
                {vehicle.regNo}
              </td>

              <td className="px-6 py-4 font-medium">
                {vehicle.name}
              </td>

              <td className="px-6 py-4">
                {vehicle.type}
              </td>

              <td className="px-6 py-4">
                {vehicle.capacity}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                    vehicle.status
                  )}`}
                >
                  {vehicle.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(vehicle)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-600"
                    />
                  </button>

                  <button
                    onClick={() => onDelete(vehicle)}
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