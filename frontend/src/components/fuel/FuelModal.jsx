import { useEffect, useState } from "react";

export default function FuelModal({
  isOpen,
  onClose,
  onSave,
  fuel,
  vehicles,
}) {
  const [formData, setFormData] = useState({
    vehicle: "",
    fuelType: "Diesel",
    quantity: "",
    cost: "",
    date: "",
  });

  useEffect(() => {
    if (fuel) {
      setFormData(fuel);
    } else {
      setFormData({
        vehicle: "",
        fuelType: "Diesel",
        quantity: "",
        cost: "",
        date: "",
      });
    }
  }, [fuel]);

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
          {fuel ? "Edit Fuel Record" : "Add Fuel Record"}
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

          <select
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Diesel</option>
            <option>Petrol</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>

          <input
            type="text"
            name="quantity"
            placeholder="Quantity (e.g. 50 L)"
            value={formData.quantity}
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

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

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
              Save Fuel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}