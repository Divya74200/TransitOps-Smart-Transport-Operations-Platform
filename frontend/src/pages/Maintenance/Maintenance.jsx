import { useState } from "react";
import { Plus, Search } from "lucide-react";

import MaintenanceTable from "../../components/maintenance/MaintenanceTable";
import MaintenanceModal from "../../components/maintenance/MaintenanceModal";
import DeleteMaintenanceModal from "../../components/maintenance/DeleteMaintenanceModal";

const vehicleOptions = [
  "Van-05",
  "Truck-11",
  "Tempo",
];

const dummyMaintenance = [
  {
    id: 1,
    vehicle: "Truck-11",
    issue: "Brake Service",
    serviceDate: "2026-06-30",
    cost: "₹12,000",
    status: "Completed",
  },
  {
    id: 2,
    vehicle: "Van-05",
    issue: "Oil Change",
    serviceDate: "2026-07-02",
    cost: "₹2,500",
    status: "Pending",
  },
];

export default function Maintenance() {
  const [records, setRecords] = useState(dummyMaintenance);

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [recordToDelete, setRecordToDelete] = useState(null);

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleDelete = (record) => {
    setRecordToDelete(record);
    setDeleteModalOpen(true);
  };

  const handleSave = (recordData) => {
    if (selectedRecord) {
      setRecords(
        records.map((r) =>
          r.id === selectedRecord.id ? recordData : r
        )
      );
    } else {
      setRecords([
        ...records,
        {
          ...recordData,
          id: Date.now(),
        },
      ]);
    }

    setSelectedRecord(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setRecords(
      records.filter(
        (r) => r.id !== recordToDelete.id
      )
    );

    setDeleteModalOpen(false);
    setRecordToDelete(null);
  };

  const filteredRecords = records.filter(
    (record) =>
      record.vehicle
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.issue
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Maintenance
          </h1>

          <p className="text-gray-500">
            Track vehicle maintenance records
          </p>

        </div>

        <button
          onClick={() => {
            setSelectedRecord(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />

          Add Record

        </button>

      </div>

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border py-2 pl-10 pr-3"
        />

      </div>

      <MaintenanceTable
        records={filteredRecords}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <MaintenanceModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedRecord(null);
          setIsModalOpen(false);
        }}
        onSave={handleSave}
        record={selectedRecord}
        vehicles={vehicleOptions}
      />

      <DeleteMaintenanceModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setRecordToDelete(null);
        }}
        onConfirm={confirmDelete}
        record={recordToDelete}
      />

    </div>
  );
}