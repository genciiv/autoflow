const serviceHistory = [
  {
    id: "1",
    date: "12.06.2026",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    service: "Ndërrim vaji + filtra",
    mechanic: "Besnik Meta",
    mileage: "187,000 km",
    total: "€95",
    status: "Paguar",
  },
  {
    id: "2",
    date: "04.05.2026",
    vehicle: "BMW X5",
    plate: "AB456CD",
    service: "Kontroll frenash",
    mechanic: "Arben Hoxha",
    mileage: "142,000 km",
    total: "€140",
    status: "Paguar",
  },
];

export default function ClientServiceHistoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Historiku i shërbimeve
        </h1>

        <p className="mt-2 text-slate-500">
          Shiko të gjitha shërbimet që janë kryer për makinat e tua.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Data</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Shërbimi</th>
              <th className="px-6 py-4 text-left">KM</th>
              <th className="px-6 py-4 text-left">Mekaniku</th>
              <th className="px-6 py-4 text-right">Totali</th>
            </tr>
          </thead>

          <tbody>
            {serviceHistory.map((item) => (
              <tr key={item.id} className="border-b border-slate-100">
                <td className="px-6 py-5">{item.date}</td>
                <td className="px-6 py-5 font-medium">{item.vehicle}</td>
                <td className="px-6 py-5">{item.plate}</td>
                <td className="px-6 py-5">{item.service}</td>
                <td className="px-6 py-5">{item.mileage}</td>
                <td className="px-6 py-5">{item.mechanic}</td>
                <td className="px-6 py-5 text-right font-semibold">
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}