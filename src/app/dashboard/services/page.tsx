import Link from "next/link";

const services = [
  {
    id: "1",
    plate: "AA123BB",
    vehicle: "Volkswagen Jetta",
    customer: "Arben Hoxha",
    service: "Ndërrim vaji + filtra",
    amount: "€95",
    status: "Completed",
  },
  {
    id: "2",
    plate: "AB456CD",
    vehicle: "BMW X5",
    customer: "Besnik Meta",
    service: "Kontroll frenash",
    amount: "€140",
    status: "In Progress",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Serviset</h1>

          <p className="mt-2 text-slate-500">
            Historiku i të gjitha shërbimeve.
          </p>
        </div>

        <Link
          href="/dashboard/services/new"
          className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Krijo servis
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Shërbimi</th>
              <th className="px-6 py-4 text-left">Totali</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-slate-100">
                <td className="px-6 py-5">
                  <p className="font-medium text-slate-950">
                    {service.vehicle}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {service.plate}
                  </p>
                </td>

                <td className="px-6 py-5 text-slate-700">
                  {service.customer}
                </td>

                <td className="px-6 py-5 text-slate-700">
                  {service.service}
                </td>

                <td className="px-6 py-5 font-semibold text-slate-950">
                  {service.amount}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {service.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/services/${service.id}`}
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