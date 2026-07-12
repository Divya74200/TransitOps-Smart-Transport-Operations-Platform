import { useEffect, useState } from "react";

export default function VehicleModal({
  isOpen,
  onClose,
  onSave,
  vehicle,
}) {
  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    type: "",
    capacity: "",
    status: "Available",
  });

  useEffect(() => {
    if (vehicle) {
      setFormData(vehicle);
    } else {
      setFormData({
        regNo: "",
        name: "",
        type: "",
        capacity: "",
        status: "Available",
      });
    }
  }, [vehicle]);

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          {vehicle ? "Edit Vehicle" : "Add Vehicle"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="regNo"
            placeholder="Registration Number"
            value={formData.regNo}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="name"
            placeholder="Vehicle Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="type"
            placeholder="Vehicle Type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Available</option>
            <option>On Trip</option>
            <option>Maintenance</option>
            <option>Retired</option>
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
              Save Vehicle
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}