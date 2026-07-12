export default function DeleteFuelModal({
  isOpen,
  onClose,
  onConfirm,
  fuel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Fuel Record
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this fuel record?
        </p>

        <div className="mt-4 rounded-lg bg-gray-100 p-3">

          <p>
            <strong>Vehicle:</strong> {fuel?.vehicle}
          </p>

          <p>
            <strong>Fuel:</strong> {fuel?.fuelType}
          </p>

          <p>
            <strong>Date:</strong> {fuel?.date}
          </p>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}