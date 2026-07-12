import { useState } from "react";
import { Plus, Search } from "lucide-react";

import DriverTable from "../../components/drivers/DriverTable";
import DriverModal from "../../components/drivers/DriverModal";
import DeleteDriverModal from "../../components/drivers/DeleteDriverModal";

const dummyDrivers = [
  {
    id: 1,
    name: "Rahul Sharma",
    license: "DL12345678",
    category: "Heavy",
    phone: "9876543210",
    experience: "5 Years",
    status: "Available",
  },
  {
    id: 2,
    name: "Amit Singh",
    license: "UP87654321",
    category: "Light",
    phone: "9123456789",
    experience: "3 Years",
    status: "On Trip",
  },
  {
    id: 3,
    name: "Vikas Kumar",
    license: "MH99887766",
    category: "Heavy",
    phone: "9988776655",
    experience: "8 Years",
    status: "Off Duty",
  },
];

export default function DriverList() {
  const [drivers, setDrivers] = useState(dummyDrivers);
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [driverToDelete, setDriverToDelete] = useState(null);

  const handleEdit = (driver) => {
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };

  const handleDelete = (driver) => {
    setDriverToDelete(driver);
    setDeleteModalOpen(true);
  };

  const handleSave = (driverData) => {
    if (selectedDriver) {
      setDrivers(
        drivers.map((d) =>
          d.id === selectedDriver.id ? driverData : d
        )
      );
    } else {
      setDrivers([
        ...drivers,
        {
          ...driverData,
          id: Date.now(),
        },
      ]);
    }

    setSelectedDriver(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setDrivers(
      drivers.filter(
        (d) => d.id !== driverToDelete.id
      )
    );

    setDeleteModalOpen(false);
    setDriverToDelete(null);
  };

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      driver.license
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Drivers
          </h1>

          <p className="text-gray-500">
            Manage all registered drivers
          </p>

        </div>

        <button
          onClick={() => {
            setSelectedDriver(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Driver
        </button>

      </div>

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search driver..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border py-2 pl-10 pr-3"
        />

      </div>

      <DriverTable
        drivers={filteredDrivers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <DriverModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDriver(null);
        }}
        onSave={handleSave}
        driver={selectedDriver}
      />

      <DeleteDriverModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setDriverToDelete(null);
        }}
        onConfirm={confirmDelete}
        driver={driverToDelete}
      />

    </div>
  );
}