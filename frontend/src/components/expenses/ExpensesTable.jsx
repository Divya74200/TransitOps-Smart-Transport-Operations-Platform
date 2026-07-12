import { Pencil, Trash2 } from "lucide-react";

export default function ExpensesTable({
  records,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">Vehicle</th>

            <th className="px-6 py-4 text-left">Expense Type</th>

            <th className="px-6 py-4 text-left">Amount</th>

            <th className="px-6 py-4 text-left">Date</th>

            <th className="px-6 py-4 text-left">Remarks</th>

            <th className="px-6 py-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {records.map((expense) => (

            <tr
              key={expense.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4 font-medium">
                {expense.vehicle}
              </td>

              <td className="px-6 py-4">
                {expense.expenseType}
              </td>

              <td className="px-6 py-4">
                {expense.amount}
              </td>

              <td className="px-6 py-4">
                {expense.date}
              </td>

              <td className="px-6 py-4">
                {expense.remarks}
              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(expense)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >
                    <Pencil
                      size={18}
                      className="text-blue-600"
                    />
                  </button>

                  <button
                    onClick={() => onDelete(expense)}
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