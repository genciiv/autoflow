const invoice = {
  number: "INV-0001",
  date: "12.06.2026",
  customer: "Arben Hoxha",
  phone: "+355 69 111 1111",
  vehicle: "Volkswagen Jetta",
  plate: "AA123BB",
  mileage: "187,000 km",
  items: [
    { name: "Punë servisi", qty: 1, price: "€50", total: "€50" },
    { name: "Vaj motori 5W30", qty: 5, price: "€9", total: "€45" },
  ],
  subtotal: "€95",
  tax: "€0",
  total: "€95",
};

export default function InvoicePrintPage() {
  return (
    <main className="min-h-screen bg-white p-10 text-slate-950 print:p-0">
      <div className="mx-auto max-w-4xl print:max-w-none">
        <div className="mb-8 flex justify-end print:hidden">
          <button
            onClick={() => window.print()}
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Printo faturën
          </button>
        </div>

        <div className="border border-slate-200 p-10 print:border-0">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">AutoFlow</h1>
              <p className="mt-2 text-slate-500">Faturë servisi</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500">Fatura</p>
              <p className="text-xl font-bold">{invoice.number}</p>
              <p className="mt-2 text-sm text-slate-500">{invoice.date}</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-500">Klienti</p>
              <p className="mt-2 font-semibold">{invoice.customer}</p>
              <p className="text-sm text-slate-500">{invoice.phone}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Automjeti</p>
              <p className="mt-2 font-semibold">
                {invoice.vehicle} • {invoice.plate}
              </p>
              <p className="text-sm text-slate-500">{invoice.mileage}</p>
            </div>
          </div>

          <table className="mt-10 w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-4 text-left">Përshkrimi</th>
                <th className="py-4 text-right">Sasia</th>
                <th className="py-4 text-right">Çmimi</th>
                <th className="py-4 text-right">Totali</th>
              </tr>
            </thead>

            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.name} className="border-b border-slate-100">
                  <td className="py-5">{item.name}</td>
                  <td className="py-5 text-right">{item.qty}</td>
                  <td className="py-5 text-right">{item.price}</td>
                  <td className="py-5 text-right font-semibold">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span>{invoice.subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">TVSH</span>
                <span>{invoice.tax}</span>
              </div>

              <div className="flex justify-between border-t border-slate-200 pt-3 text-xl font-bold">
                <span>Totali</span>
                <span>{invoice.total}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
            Faleminderit që zgjodhët shërbimin tonë.
          </div>
        </div>
      </div>
    </main>
  );
}