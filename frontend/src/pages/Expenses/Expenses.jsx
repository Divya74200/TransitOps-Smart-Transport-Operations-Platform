import { useState } from "react";
import { Plus, Search } from "lucide-react";

import ExpensesTable from "../../components/expenses/ExpensesTable";
import ExpensesModal from "../../components/expenses/ExpensesModal";
import DeleteExpenseModal from "../../components/expenses/DeleteExpenseModal";

const vehicleOptions = [
  "Truck-11",
  "Van-05",
  "Tempo",
];

const dummyExpenses = [
  {
    id: 1,
    vehicle: "Truck-11",
    expenseType: "Insurance",
    amount: "₹18,000",
    date: "2026-07-01",
    remarks: "Annual Insurance",
  },
  {
    id: 2,
    vehicle: "Van-05",
    expenseType: "Toll",
    amount: "₹850",
    date: "2026-07-02",
    remarks: "Delhi Expressway",
  },
];

export default function Expenses() {
  const [records, setRecords] = useState(dummyExpenses);

  const [search, setSearch] = useState("");

  const [selectedExpense, setSelectedExpense] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [expenseToDelete, setExpenseToDelete] = useState(null);

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const handleDelete = (expense) => {
    setExpenseToDelete(expense);
    setDeleteModalOpen(true);
  };

  const handleSave = (expenseData) => {
    if (selectedExpense) {
      setRecords(
        records.map((item) =>
          item.id === selectedExpense.id
            ? expenseData
            : item
        )
      );
    } else {
      setRecords([
        ...records,
        {
          ...expenseData,
          id: Date.now(),
        },
      ]);
    }

    setSelectedExpense(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setRecords(
      records.filter(
        (item) => item.id !== expenseToDelete.id
      )
    );

    setDeleteModalOpen(false);
    setExpenseToDelete(null);
  };

  const filteredRecords = records.filter(
    (item) =>
      item.vehicle
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Expenses
          </h1>

          <p className="text-gray-500">
            Manage operational expenses
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedExpense(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Expense
        </button>

      </div>

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Vehicle..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border py-2 pl-10 pr-3"
        />

      </div>

      <ExpensesTable
        records={filteredRecords}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ExpensesModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedExpense(null);
          setIsModalOpen(false);
        }}
        onSave={handleSave}
        expense={selectedExpense}
        vehicles={vehicleOptions}
      />

      <DeleteExpenseModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setExpenseToDelete(null);
        }}
        onConfirm={confirmDelete}
        expense={expenseToDelete}
      />

    </div>
  );
}