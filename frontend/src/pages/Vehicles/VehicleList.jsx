import { useState } from "react";
import { Plus, Search } from "lucide-react";
import VehicleTable from "../../components/vehicles/VehicleTable";
import VehicleModal from "../../components/vehicles/VehicleModal";
import DeleteModal from "../../components/vehicles/DeleteModal";

const dummyVehicles = [
  {
    regNo: "UP78AB1234",
    name: "Van-05",
    type: "Mini Van",
    capacity: "500 kg",
    status: "Available",
  },
  {
    regNo: "DL09XY4455",
    name: "Truck-11",
    type: "Truck",
    capacity: "1200 kg",
    status: "On Trip",
  },
  {
    regNo: "MH20PQ9087",
    name: "Tempo",
    type: "Tempo",
    capacity: "800 kg",
    status: "Maintenance",
  },
];

export default function VehicleList() {
  const [vehicles, setVehicles] = useState(dummyVehicles);
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);

  const handleEdit = (vehicle) => {
  setSelectedVehicle(vehicle);
  setIsModalOpen(true);
};

  const handleSave = (vehicleData) => {
  if (selectedVehicle) {
    setVehicles(
      vehicles.map((v) =>
        v.regNo === selectedVehicle.regNo ? vehicleData : v
      )
    );
  } else {
    setVehicles([...vehicles, vehicleData]);
  }

  setIsModalOpen(false);
  setSelectedVehicle(null);
};

const handleDelete = (vehicle) => {
  setVehicleToDelete(vehicle);
  setDeleteModalOpen(true);
};

const confirmDelete = () => {
  setVehicles(
    vehicles.filter(
      (v) => v.regNo !== vehicleToDelete.regNo
    )
  );

  setDeleteModalOpen(false);
  setVehicleToDelete(null);
};

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Vehicles</h1>
          <p className="text-gray-500">
            Manage all registered vehicles
          </p>
        </div>

        <button
  onClick={() => {
    setSelectedVehicle(null);
    setIsModalOpen(true);
  }}
  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
>
          <Plus size={18} />
          Add Vehicle
        </button>
      </div>

      {/* Search */}
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search vehicle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border py-2 pl-10 pr-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Vehicle Table */}
      <VehicleTable
        vehicles={filteredVehicles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <VehicleModal
  isOpen={isModalOpen}
  onClose={() => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  }}
  onSave={handleSave}
  vehicle={selectedVehicle}
/>

      <DeleteModal
  isOpen={deleteModalOpen}
  vehicle={vehicleToDelete}
  onClose={() => {
    setDeleteModalOpen(false);
    setVehicleToDelete(null);
  }}
  onConfirm={confirmDelete}
/>
    </div>
  );
}