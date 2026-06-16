const invoices = [
  {
    id: "1",
    number: "INV-0001",
    date: "12.06.2026",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    total: "€95",
    status: "Paguar",
  },
  {
    id: "2",
    number: "INV-0002",
    date: "10.06.2026",
    vehicle: "BMW X5",
    plate: "AB456CD",
    total: "€140",
    status: "E papaguar",
  },
];

export default function ClientInvoicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Faturat e mia</h1>

        <p className="mt-2 text-slate-500">
          Shiko faturat e shërbimeve për automjetet e tua.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Fatura</th>
              <th className="px-6 py-4 text-left">Data</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Totali</th>
              <th className="px-6 py-4 text-left">Statusi</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{invoice.number}</td>
                <td className="px-6 py-5">{invoice.date}</td>
                <td className="px-6 py-5">{invoice.vehicle}</td>
                <td className="px-6 py-5">{invoice.plate}</td>
                <td className="px-6 py-5 font-semibold">{invoice.total}</td>
                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      invoice.status === "Paguar"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}