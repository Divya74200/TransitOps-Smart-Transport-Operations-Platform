import { useState } from "react";
import { Plus, Search } from "lucide-react";

import TripTable from "../../components/trips/TripTable";
import TripModal from "../../components/trips/TripModal";
import DeleteTripModal from "../../components/trips/DeleteTripModal";

const vehicleOptions = [
  "Van-05",
  "Truck-11",
  "Tempo",
];

const driverOptions = [
  "Rahul Sharma",
  "Amit Singh",
  "Vikas Kumar",
];

const dummyTrips = [
  {
    id: 1,
    vehicle: "Van-05",
    driver: "Rahul Sharma",
    source: "Delhi",
    destination: "Kanpur",
    distance: "480 KM",
    date: "2026-06-27",
    status: "Scheduled",
  },
  {
    id: 2,
    vehicle: "Truck-11",
    driver: "Amit Singh",
    source: "Lucknow",
    destination: "Agra",
    distance: "340 KM",
    date: "2026-06-28",
    status: "In Progress",
  },
];

export default function TripList() {
  const [trips, setTrips] = useState(dummyTrips);

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTrip, setSelectedTrip] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [tripToDelete, setTripToDelete] = useState(null);

  const handleEdit = (trip) => {
    setSelectedTrip(trip);
    setIsModalOpen(true);
  };

  const handleDelete = (trip) => {
    setTripToDelete(trip);
    setDeleteModalOpen(true);
  };

  const handleSave = (tripData) => {
    if (selectedTrip) {
      setTrips(
        trips.map((trip) =>
          trip.id === selectedTrip.id
            ? tripData
            : trip
        )
      );
    } else {
      setTrips([
        ...trips,
        {
          ...tripData,
          id: Date.now(),
        },
      ]);
    }

    setSelectedTrip(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setTrips(
      trips.filter(
        (trip) =>
          trip.id !== tripToDelete.id
      )
    );

    setTripToDelete(null);
    setDeleteModalOpen(false);
  };

  const filteredTrips = trips.filter(
    (trip) =>
      trip.vehicle
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      trip.driver
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Trips
          </h1>

          <p className="text-gray-500">
            Manage transport trips
          </p>

        </div>

        <button
          onClick={() => {
            setSelectedTrip(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />

          Add Trip

        </button>

      </div>

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search trip..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border py-2 pl-10 pr-3"
        />

      </div>

      <TripTable
        trips={filteredTrips}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <TripModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTrip(null);
        }}
        onSave={handleSave}
        trip={selectedTrip}
        vehicles={vehicleOptions}
        drivers={driverOptions}
      />

      <DeleteTripModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setTripToDelete(null);
        }}
        onConfirm={confirmDelete}
        trip={tripToDelete}
      />

    </div>
  );
}