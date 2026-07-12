import { useEffect, useState } from "react";

export default function MaintenanceModal({
  isOpen,
  onClose,
  onSave,
  record,
  vehicles,
}) {
  const [formData, setFormData] = useState({
    vehicle: "",
    issue: "",
    serviceDate: "",
    cost: "",
    status: "Pending",
  });

  useEffect(() => {
    if (record) {
      setFormData(record);
    } else {
      setFormData({
        vehicle: "",
        issue: "",
        serviceDate: "",
        cost: "",
        status: "Pending",
      });
    }
  }, [record]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          {record ? "Edit Maintenance" : "Add Maintenance"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="issue"
            placeholder="Issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="date"
            name="serviceDate"
            value={formData.serviceDate}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            name="cost"
            placeholder="Cost"
            value={formData.cost}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              Save Record
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}