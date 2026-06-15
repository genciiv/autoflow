const payments = [
  {
    id: "INV-001",
    business: "Auto Service Fier",
    plan: "Pro",
    amount: "49€",
    status: "paid",
    date: "12.06.2026",
  },
  {
    id: "INV-002",
    business: "Auto Plus",
    plan: "Basic",
    amount: "29€",
    status: "pending",
    date: "10.06.2026",
  },
  {
    id: "INV-003",
    business: "Servis Elite",
    plan: "Premium",
    amount: "79€",
    status: "overdue",
    date: "05.06.2026",
  },
];

export default function PlatformPaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Pagesat e Platformës
        </h1>

        <p className="mt-2 text-slate-500">
          Monitoro pagesat mujore të serviseve për abonimet AutoFlow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Të ardhura mujore</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">4,960€</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Pagesa në pritje</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">12</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Të vonuara</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">5</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Fatura</th>
              <th className="px-6 py-4 text-left">Biznesi</th>
              <th className="px-6 py-4 text-left">Plani</th>
              <th className="px-6 py-4 text-left">Shuma</th>
              <th className="px-6 py-4 text-left">Data</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{payment.id}</td>
                <td className="px-6 py-5">{payment.business}</td>
                <td className="px-6 py-5">{payment.plan}</td>
                <td className="px-6 py-5">{payment.amount}</td>
                <td className="px-6 py-5">{payment.date}</td>
                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      payment.status === "paid"
                        ? "bg-emerald-100 text-emerald-700"
                        : payment.status === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
                    Detaje
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}