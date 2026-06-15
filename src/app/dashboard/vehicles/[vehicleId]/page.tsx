const vehicle = {
  plate: "AA123BB",
  brand: "Volkswagen",
  model: "Jetta",
  year: 2012,
  fuel: "Diesel",
  vin: "WVWZZZ1KZCW123456",
  mileage: "187,000 km",
  customer: "Arben Hoxha",
  phone: "+355 69 111 1111",
};

const serviceHistory = [
  {
    date: "12.06.2026",
    mileage: "187,000 km",
    service: "Ndërrim vaji + filtra",
    mechanic: "Besnik Meta",
    amount: "€95",
    status: "Paguar",
  },
  {
    date: "05.02.2026",
    mileage: "176,500 km",
    service: "Ndërrim disqesh frenash",
    mechanic: "Arben Hoxha",
    amount: "€120",
    status: "Paguar",
  },
  {
    date: "18.11.2025",
    mileage: "168,200 km",
    service: "Diagnostikim + kontroll motori",
    mechanic: "Besnik Meta",
    amount: "€35",
    status: "Paguar",
  },
];

export default function VehicleProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Profili i automjetit
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              {vehicle.brand} {vehicle.model}
            </h1>

            <p className="mt-2 text-slate-500">
              Targa: {vehicle.plate}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold">
              Ndrysho
            </button>

            <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
              Krijo servis
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Targa</p>
            <p className="mt-2 font-semibold text-slate-950">{vehicle.plate}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Viti</p>
            <p className="mt-2 font-semibold text-slate-950">{vehicle.year}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Karburanti</p>
            <p className="mt-2 font-semibold text-slate-950">{vehicle.fuel}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Kilometra</p>
            <p className="mt-2 font-semibold text-slate-950">
              {vehicle.mileage}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm xl:col-span-2">
          <h2 className="text-xl font-bold text-slate-950">
            Historiku i serviseve
          </h2>

          <div className="mt-6 space-y-4">
            {serviceHistory.map((service) => (
              <div
                key={`${service.date}-${service.service}`}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <p className="font-semibold text-slate-950">
                      {service.service}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {service.date} • {service.mileage}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="font-bold text-slate-950">
                      {service.amount}
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                      {service.status}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Mekanik: {service.mechanic}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Pronari
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-500">Emri</p>
                <p className="font-semibold text-slate-950">
                  {vehicle.customer}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefoni</p>
                <p className="font-semibold text-slate-950">
                  {vehicle.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Detaje teknike
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-500">VIN</p>
                <p className="font-semibold text-slate-950">
                  {vehicle.vin}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Karburanti</p>
                <p className="font-semibold text-slate-950">
                  {vehicle.fuel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}