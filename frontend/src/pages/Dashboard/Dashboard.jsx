import {
  Truck,
  Users,
  Map,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Active Vehicles",
    value: 24,
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Drivers On Duty",
    value: 18,
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Active Trips",
    value: 9,
    icon: Map,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Maintenance",
    value: 3,
    icon: Wrench,
    color: "bg-red-100 text-red-600",
  },
];

const recentTrips = [
  {
    id: "TR001",
    vehicle: "Van-05",
    driver: "Alex",
    status: "On Trip",
  },
  {
    id: "TR002",
    vehicle: "Truck-11",
    driver: "John",
    status: "Completed",
  },
  {
    id: "TR003",
    vehicle: "Mini Van",
    driver: "Rahul",
    status: "Pending",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back! Here's your fleet overview.
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`rounded-full p-4 ${item.color}`}
                >
                  <Icon size={28} />
                </div>

              </div>

              <div className="mt-5 flex items-center text-green-600 text-sm">

                <ArrowUpRight size={18} />

                <span className="ml-1">
                  +12% from last week
                </span>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Recent Trips */}

        <div className="lg:col-span-2 rounded-xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold">
            Recent Trips
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="py-3 text-left">Trip ID</th>

                <th className="text-left">Vehicle</th>

                <th className="text-left">Driver</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {recentTrips.map((trip) => (

                <tr
                  key={trip.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">{trip.id}</td>

                  <td>{trip.vehicle}</td>

                  <td>{trip.driver}</td>

                  <td>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">

                      {trip.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Fleet Status */}

        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold">
            Fleet Status
          </h2>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between">

                <span>Available</span>

                <span>70%</span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[70%] rounded-full bg-green-500"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>On Trip</span>

                <span>20%</span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[20%] rounded-full bg-blue-500"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Maintenance</span>

                <span>10%</span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[10%] rounded-full bg-red-500"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}