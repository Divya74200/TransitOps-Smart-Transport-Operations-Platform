import { useEffect, useState } from "react";

export default function DriverModal({
  isOpen,
  onClose,
  onSave,
  driver,
}) {
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    category: "Light",
    phone: "",
    experience: "",
    status: "Available",
  });

  useEffect(() => {
    if (driver) {
      setFormData(driver);
    } else {
      setFormData({
        name: "",
        license: "",
        category: "Light",
        phone: "",
        experience: "",
        status: "Available",
      });
    }
  }, [driver]);

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
          {driver ? "Edit Driver" : "Add Driver"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Driver Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="license"
            placeholder="License Number"
            value={formData.license}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Light</option>
            <option>Medium</option>
            <option>Heavy</option>
          </select>

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="experience"
            placeholder="Experience (e.g. 5 Years)"
            value={formData.experience}
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
            <option>Off Duty</option>
            <option>Suspended</option>
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
              Save Driver
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}