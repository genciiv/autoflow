import Link from "next/link";

const unpaidInvoices = [
  {
    id: "1",
    number: "INV-0002",
    customer: "Besnik Meta",
    vehicle: "BMW X5",
    total: "€140",
    dueDate: "15.06.2026",
    status: "unpaid",
  },
  {
    id: "2",
    number: "INV-0005",
    customer: "Elira Dervishi",
    vehicle: "Toyota Yaris",
    total: "€80",
    dueDate: "18.06.2026",
    status: "partially_paid",
  },
];

export default function UnpaidInvoicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Fatura të papaguara
        </h1>

        <p className="mt-2 text-slate-500">
          Ndiq faturat që nuk janë paguar ende ose janë paguar pjesërisht.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Fatura</th>
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Totali</th>
              <th className="px-6 py-4 text-left">Afati</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {unpaidInvoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{invoice.number}</td>
                <td className="px-6 py-5">{invoice.customer}</td>
                <td className="px-6 py-5">{invoice.vehicle}</td>
                <td className="px-6 py-5 font-semibold">{invoice.total}</td>
                <td className="px-6 py-5">{invoice.dueDate}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
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