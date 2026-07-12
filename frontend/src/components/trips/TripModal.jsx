import { useEffect, useState } from "react";

export default function TripModal({
  isOpen,
  onClose,
  onSave,
  trip,
  vehicles,
  drivers,
}) {
  const [formData, setFormData] = useState({
    vehicle: "",
    driver: "",
    source: "",
    destination: "",
    distance: "",
    date: "",
    status: "Scheduled",
  });

  useEffect(() => {
    if (trip) {
      setFormData(trip);
    } else {
      setFormData({
        vehicle: "",
        driver: "",
        source: "",
        destination: "",
        distance: "",
        date: "",
        status: "Scheduled",
      });
    }
  }, [trip]);

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

      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          {trip ? "Edit Trip" : "Add Trip"}
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
            name="driver"
            value={formData.driver}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Driver</option>

            {drivers.map((driver) => (
              <option key={driver} value={driver}>
                {driver}
              </option>
            ))}

          </select>

          <input
            type="text"
            name="source"
            placeholder="Source"
            value={formData.source}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            name="distance"
            placeholder="Distance (KM)"
            value={formData.distance}
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

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Scheduled</option>
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
              Save Trip
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}