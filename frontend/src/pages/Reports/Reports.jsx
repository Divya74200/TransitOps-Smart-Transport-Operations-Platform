import {
  Truck,
  Users,
  Map,
  Wrench,
  Fuel,
  Wallet,
} from "lucide-react";

export default function Reports() {
  const summary = [
    {
      title: "Vehicles",
      value: 12,
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Drivers",
      value: 8,
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Trips",
      value: 26,
      icon: Map,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Maintenance",
      value: 4,
      icon: Wrench,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        <p className="text-gray-500">
          Fleet performance overview
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500">
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
            </div>
          );
        })}

      </div>

      {/* Statistics */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-bold">
            Fleet Performance
          </h2>

          <div className="space-y-6">

            <div>

              <div className="mb-2 flex justify-between">

                <span>Trip Completion</span>

                <span>88%</span>

              </div>

              <div className="h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[88%] rounded-full bg-green-500"></div>

              </div>

            </div>

            <div>

              <div className="mb-2 flex justify-between">

                <span>Vehicle Utilization</span>

                <span>72%</span>

              </div>

              <div className="h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[72%] rounded-full bg-blue-500"></div>

              </div>

            </div>

            <div>

              <div className="mb-2 flex justify-between">

                <span>Maintenance Completed</span>

                <span>91%</span>

              </div>

              <div className="h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[91%] rounded-full bg-yellow-500"></div>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-bold">
            Financial Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between rounded-lg bg-gray-100 p-4">

              <div className="flex items-center gap-3">

                <Fuel className="text-blue-600" />

                Fuel Cost

              </div>

              <strong>₹1,42,000</strong>

            </div>

            <div className="flex justify-between rounded-lg bg-gray-100 p-4">

              <div className="flex items-center gap-3">

                <Wallet className="text-green-600" />

                Operational Expenses

              </div>

              <strong>₹78,500</strong>

            </div>

            <div className="flex justify-between rounded-lg bg-gray-100 p-4">

              <div className="flex items-center gap-3">

                <Wrench className="text-red-600" />

                Maintenance Cost

              </div>

              <strong>₹56,200</strong>

            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-bold">
          Recent Activity
        </h2>

        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="py-3 text-left">Activity</th>

              <th className="text-left">Vehicle</th>

              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-4">
                Trip Completed
              </td>

              <td>Truck-11</td>

              <td className="text-green-600">
                Completed
              </td>

            </tr>

            <tr className="border-b">

              <td className="py-4">
                Fuel Added
              </td>

              <td>Van-05</td>

              <td className="text-blue-600">
                Updated
              </td>

            </tr>

            <tr>

              <td className="py-4">
                Maintenance Scheduled
              </td>

              <td>Tempo</td>

              <td className="text-yellow-600">
                Pending
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}