import { Pencil, Trash2 } from "lucide-react";

export default function FuelTable({
  records,
  onEdit,
  onDelete,
}) {

  return (

    <div className="overflow-hidden rounded-xl bg-white shadow-md">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Vehicle
            </th>

            <th className="px-6 py-4 text-left">
              Fuel Type
            </th>

            <th className="px-6 py-4 text-left">
              Quantity
            </th>

            <th className="px-6 py-4 text-left">
              Cost
            </th>

            <th className="px-6 py-4 text-left">
              Date
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {records.map((fuel)=>(

            <tr
              key={fuel.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4 font-medium">
                {fuel.vehicle}
              </td>

              <td className="px-6 py-4">
                {fuel.fuelType}
              </td>

              <td className="px-6 py-4">
                {fuel.quantity}
              </td>

              <td className="px-6 py-4">
                {fuel.cost}
              </td>

              <td className="px-6 py-4">
                {fuel.date}
              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={()=>onEdit(fuel)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >

                    <Pencil
                      size={18}
                      className="text-blue-600"
                    />

                  </button>

                  <button
                    onClick={()=>onDelete(fuel)}
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