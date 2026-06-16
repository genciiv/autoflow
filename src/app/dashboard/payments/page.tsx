const payments = [
  {
    id: "PAY-001",
    invoice: "INV-0001",
    customer: "Arben Hoxha",
    amount: "€95",
    method: "Cash",
    date: "12.06.2026",
  },
  {
    id: "PAY-002",
    invoice: "INV-0002",
    customer: "Besnik Meta",
    amount: "€50",
    method: "Bank",
    date: "10.06.2026",
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Pagesat</h1>
        <p className="mt-2 text-slate-500">
          Monitoro pagesat e faturave të servisit.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Pagesa</th>
              <th className="px-6 py-4 text-left">Fatura</th>
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Shuma</th>
              <th className="px-6 py-4 text-left">Metoda</th>
              <th className="px-6 py-4 text-left">Data</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{payment.id}</td>
                <td className="px-6 py-5">{payment.invoice}</td>
                <td className="px-6 py-5">{payment.customer}</td>
                <td className="px-6 py-5 font-semibold">{payment.amount}</td>
                <td className="px-6 py-5">{payment.method}</td>
                <td className="px-6 py-5">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}