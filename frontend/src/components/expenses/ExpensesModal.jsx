import { useEffect, useState } from "react";

export default function ExpensesModal({
  isOpen,
  onClose,
  onSave,
  expense,
  vehicles,
}) {
  const [formData, setFormData] = useState({
    vehicle: "",
    expenseType: "Insurance",
    amount: "",
    date: "",
    remarks: "",
  });

  useEffect(() => {
    if (expense) {
      setFormData(expense);
    } else {
      setFormData({
        vehicle: "",
        expenseType: "Insurance",
        amount: "",
        date: "",
        remarks: "",
      });
    }
  }, [expense]);

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
          {expense ? "Edit Expense" : "Add Expense"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((vehicle) => (
              <option
                key={vehicle}
                value={vehicle}
              >
                {vehicle}
              </option>
            ))}
          </select>

          <select
            name="expenseType"
            value={formData.expenseType}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>Insurance</option>
            <option>Repair</option>
            <option>Toll</option>
            <option>Parking</option>
            <option>Salary</option>
            <option>Miscellaneous</option>
          </select>

          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
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

          <textarea
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={3}
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
              Save Expense
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}