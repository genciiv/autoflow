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
          <h1 className="text-3xl font-bold">
            Serviset
          </h1>

          <p className="mt-2 text-slate-500">
            Historiku i të gjitha shërbimeve.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-white">
          Krijo servis
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b">
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
              <tr key={service.id} className="border-b">
                <td className="px-6 py-5">
                  {service.vehicle}
                  <div className="text-sm text-slate-500">
                    {service.plate}
                  </div>
                </td>

                <td className="px-6 py-5">
                  {service.customer}
                </td>

                <td className="px-6 py-5">
                  {service.service}
                </td>

                <td className="px-6 py-5">
                  {service.amount}
                </td>

                <td className="px-6 py-5">
                  {service.status}
                </td>

                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/services/${service.id}`}
                    className="rounded-xl border px-4 py-2"
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