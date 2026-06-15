import Link from "next/link";

const invoices = [
  {
    id: "1",
    number: "INV-0001",
    customer: "Arben Hoxha",
    vehicle: "Volkswagen Jetta",
    total: "€95",
    status: "paid",
    date: "12.06.2026",
  },
  {
    id: "2",
    number: "INV-0002",
    customer: "Besnik Meta",
    vehicle: "BMW X5",
    total: "€140",
    status: "unpaid",
    date: "10.06.2026",
  },
];

export default function InvoicesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Faturat</h1>
          <p className="mt-2 text-slate-500">
            Menaxho faturat e krijuara nga serviset.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Fatura</th>
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Totali</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{invoice.number}</td>
                <td className="px-6 py-5">{invoice.customer}</td>
                <td className="px-6 py-5">{invoice.vehicle}</td>
                <td className="px-6 py-5 font-semibold">{invoice.total}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/invoices/${invoice.id}`}
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