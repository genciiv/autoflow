const vehicle = {
  plate: "AA123BB",
  brand: "Volkswagen",
  model: "Jetta",
  year: 2012,
  vin: "WVWZZZ1KZCW123456",
  mileage: "187,000",
  customer: "Arben Hoxha",
};

export default function VehicleProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-500">
          Profili i automjetit
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          {vehicle.brand} {vehicle.model}
        </h1>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          <div>
            <p className="text-sm text-slate-500">Targa</p>
            <p className="font-semibold">{vehicle.plate}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Viti</p>
            <p className="font-semibold">{vehicle.year}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">VIN</p>
            <p className="font-semibold">{vehicle.vin}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">KM</p>
            <p className="font-semibold">{vehicle.mileage}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Klienti</p>
            <p className="font-semibold">{vehicle.customer}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h2 className="text-xl font-bold">
          Historiku i serviseve
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex justify-between">
              <span>12.06.2026</span>
              <span className="font-semibold">€95</span>
            </div>

            <p className="mt-3">
              Ndërrim vaji + filtra
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex justify-between">
              <span>05.02.2026</span>
              <span className="font-semibold">€120</span>
            </div>

            <p className="mt-3">
              Ndërrim disqesh frenash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}