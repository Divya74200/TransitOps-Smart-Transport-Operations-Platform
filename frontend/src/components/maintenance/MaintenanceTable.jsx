import { Pencil, Trash2 } from "lucide-react";

export default function MaintenanceTable({
  records,
  onEdit,
  onDelete,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Cancelled":
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
            <th className="px-6 py-4 text-left">Vehicle</th>
            <th className="px-6 py-4 text-left">Issue</th>
            <th className="px-6 py-4 text-left">Service Date</th>
            <th className="px-6 py-4 text-left">Cost</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {record.vehicle}
              </td>

              <td className="px-6 py-4">
                {record.issue}
              </td>

              <td className="px-6 py-4">
                {record.serviceDate}
              </td>

              <td className="px-6 py-4">
                {record.cost}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${getStatusColor(
                    record.status
                  )}`}
                >
                  {record.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(record)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-600"
                    />
                  </button>

                  <button
                    onClick={() => onDelete(record)}
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