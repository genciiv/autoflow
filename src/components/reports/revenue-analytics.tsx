const revenueData = [
  { month: "Jan", revenue: "€14,200", paid: "€12,900", unpaid: "€1,300" },
  { month: "Shk", revenue: "€16,800", paid: "€15,100", unpaid: "€1,700" },
  { month: "Mar", revenue: "€18,400", paid: "€16,900", unpaid: "€1,500" },
  { month: "Pri", revenue: "€21,300", paid: "€19,500", unpaid: "€1,800" },
  { month: "Maj", revenue: "€22,700", paid: "€20,900", unpaid: "€1,800" },
  { month: "Qer", revenue: "€24,850", paid: "€21,400", unpaid: "€3,450" },
];

export function RevenueAnalytics() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">
        Analiza e të ardhurave
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-5 py-4 text-left">Muaji</th>
              <th className="px-5 py-4 text-left">Të ardhura</th>
              <th className="px-5 py-4 text-left">Të paguara</th>
              <th className="px-5 py-4 text-left">Të papaguara</th>
            </tr>
          </thead>

          <tbody>
            {revenueData.map((item) => (
              <tr key={item.month} className="border-b border-slate-100">
                <td className="px-5 py-4 font-medium">{item.month}</td>
                <td className="px-5 py-4">{item.revenue}</td>
                <td className="px-5 py-4 text-emerald-700">{item.paid}</td>
                <td className="px-5 py-4 text-red-700">{item.unpaid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}