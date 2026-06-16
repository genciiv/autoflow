const vehicles = [
  {
    id: "1",
    brand: "Volkswagen",
    model: "Jetta",
    plate: "AA123BB",
    year: "2012",
    mileage: "187,000 km",
    lastService: "12.06.2026",
    nextService: "12.12.2026",
  },
  {
    id: "2",
    brand: "BMW",
    model: "X5",
    plate: "AB456CD",
    year: "2016",
    mileage: "142,000 km",
    lastService: "04.05.2026",
    nextService: "04.11.2026",
  },
];

export default function ClientVehiclesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Makinat e mia
        </h1>

        <p className="mt-2 text-slate-500">
          Shiko automjetet e regjistruara dhe serviset e ardhshme.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  {vehicle.brand} {vehicle.model}
                </h2>

                <p className="mt-2 text-slate-500">
                  Targa: {vehicle.plate}
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {vehicle.year}
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Kilometra</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {vehicle.mileage}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Servisi i fundit</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {vehicle.lastService}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:col-span-2">
                <p className="text-sm text-slate-500">Servisi i ardhshëm</p>
                <p className="mt-2 font-semibold text-amber-700">
                  {vehicle.nextService}
                </p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
              Shiko historikun
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}