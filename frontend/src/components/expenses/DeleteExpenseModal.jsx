export default function DeleteExpenseModal({
  isOpen,
  onClose,
  onConfirm,
  expense,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Expense
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this expense?
        </p>

        <div className="mt-4 rounded-lg bg-gray-100 p-3">

          <p>
            <strong>Vehicle:</strong> {expense?.vehicle}
          </p>

          <p>
            <strong>Expense:</strong> {expense?.expenseType}
          </p>

          <p>
            <strong>Amount:</strong> {expense?.amount}
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