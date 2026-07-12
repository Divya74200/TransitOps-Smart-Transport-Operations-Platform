import { useState } from "react";
import { Plus, Search } from "lucide-react";

import FuelTable from "../../components/fuel/FuelTable";
import FuelModal from "../../components/fuel/FuelModal";
import DeleteFuelModal from "../../components/fuel/DeleteFuelModal";

const vehicleOptions = [
  "Truck-11",
  "Van-05",
  "Tempo",
];

const dummyFuel = [
  {
    id: 1,
    vehicle: "Truck-11",
    fuelType: "Diesel",
    quantity: "65 L",
    cost: "₹6200",
    date: "2026-06-28",
  },
  {
    id: 2,
    vehicle: "Van-05",
    fuelType: "Petrol",
    quantity: "40 L",
    cost: "₹4200",
    date: "2026-06-30",
  },
];

export default function Fuel() {

  const [records, setRecords] = useState(dummyFuel);

  const [search, setSearch] = useState("");

  const [selectedFuel, setSelectedFuel] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [fuelToDelete, setFuelToDelete] = useState(null);

  const handleEdit = (fuel) => {
    setSelectedFuel(fuel);
    setIsModalOpen(true);
  };

  const handleDelete = (fuel) => {
    setFuelToDelete(fuel);
    setDeleteModalOpen(true);
  };

  const handleSave = (fuelData) => {

    if (selectedFuel) {

      setRecords(
        records.map((item) =>
          item.id === selectedFuel.id
            ? fuelData
            : item
        )
      );

    } else {

      setRecords([
        ...records,
        {
          ...fuelData,
          id: Date.now(),
        },
      ]);

    }

    setSelectedFuel(null);

    setIsModalOpen(false);

  };

  const confirmDelete = () => {

    setRecords(
      records.filter(
        (item) => item.id !== fuelToDelete.id
      )
    );

    setDeleteModalOpen(false);

    setFuelToDelete(null);

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
            Fuel Management
          </h1>

          <p className="text-gray-500">
            Track vehicle fuel records
          </p>

        </div>

        <button
          onClick={()=>{
            setSelectedFuel(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >

          <Plus size={18}/>

          Add Fuel

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
          onChange={(e)=>setSearch(e.target.value)}
          className="w-full rounded-lg border py-2 pl-10 pr-3"
        />

      </div>

      <FuelTable
        records={filteredRecords}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <FuelModal
        isOpen={isModalOpen}
        onClose={()=>{
          setIsModalOpen(false);
          setSelectedFuel(null);
        }}
        onSave={handleSave}
        fuel={selectedFuel}
        vehicles={vehicleOptions}
      />

      <DeleteFuelModal
        isOpen={deleteModalOpen}
        onClose={()=>{
          setDeleteModalOpen(false);
          setFuelToDelete(null);
        }}
        onConfirm={confirmDelete}
        fuel={fuelToDelete}
      />

    </div>

  );

}