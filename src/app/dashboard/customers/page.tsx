import Link from "next/link";

const customers = [
  {
    id: "1",
    name: "Arben Hoxha",
    phone: "+355 69 111 1111",
    email: "arben@email.com",
    vehicles: 2,
    lastService: "12.06.2026",
  },
  {
    id: "2",
    name: "Elira Dervishi",
    phone: "+355 69 222 2222",
    email: "elira@email.com",
    vehicles: 1,
    lastService: "08.06.2026",
  },
  {
    id: "3",
    name: "Besnik Meta",
    phone: "+355 69 333 3333",
    email: "besnik@email.com",
    vehicles: 3,
    lastService: "01.06.2026",
  },
];

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Klientët</h1>

          <p className="mt-2 text-slate-500">
            Menaxho klientët e servisit dhe automjetet e tyre.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto klient
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <input
          type="text"
          placeholder="Kërko klient me emër, telefon ose email..."
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Telefoni</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Automjete</th>
              <th className="px-6 py-4 text-left">Servisi i fundit</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium text-slate-950">
                  {customer.name}
                </td>

                <td className="px-6 py-5 text-slate-600">{customer.phone}</td>

                <td className="px-6 py-5 text-slate-600">{customer.email}</td>

                <td className="px-6 py-5">{customer.vehicles}</td>

                <td className="px-6 py-5">{customer.lastService}</td>

                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/customers/${customer.id}`}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
                  >
                    Shiko profilin
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