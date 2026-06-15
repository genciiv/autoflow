import Link from "next/link";

const vehicles = [
  {
    id: "1",
    plate: "AA123BB",
    brand: "Volkswagen",
    model: "Jetta",
    year: 2012,
    customer: "Arben Hoxha",
    mileage: "187,000",
  },
  {
    id: "2",
    plate: "AB456CD",
    brand: "BMW",
    model: "X5",
    year: 2016,
    customer: "Arben Hoxha",
    mileage: "142,000",
  },
  {
    id: "3",
    plate: "AC789EF",
    brand: "Mercedes",
    model: "C220",
    year: 2018,
    customer: "Elira Dervishi",
    mileage: "98,000",
  },
];

export default function VehiclesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Automjetet
          </h1>

          <p className="mt-2 text-slate-500">
            Menaxho automjetet e regjistruara në servis.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto automjet
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <input
          placeholder="Kërko sipas targës, markës ose klientit..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Viti</th>
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">KM</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">
                  {vehicle.plate}
                </td>

                <td className="px-6 py-5">
                  {vehicle.brand} {vehicle.model}
                </td>

                <td className="px-6 py-5">
                  {vehicle.year}
                </td>

                <td className="px-6 py-5">
                  {vehicle.customer}
                </td>

                <td className="px-6 py-5">
                  {vehicle.mileage}
                </td>

                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/vehicles/${vehicle.id}`}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
                  >
                    Shiko
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}