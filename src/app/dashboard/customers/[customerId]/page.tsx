const customer = {
  name: "Arben Hoxha",
  phone: "+355 69 111 1111",
  email: "arben@email.com",
  city: "Fier",
  vehicles: [
    {
      brand: "Volkswagen",
      model: "Jetta",
      plate: "AA123BB",
      year: "2012",
      mileage: "187,000 km",
    },
    {
      brand: "BMW",
      model: "X5",
      plate: "AB456CD",
      year: "2016",
      mileage: "142,000 km",
    },
  ],
  services: [
    {
      date: "12.06.2026",
      vehicle: "Volkswagen Jetta",
      plate: "AA123BB",
      service: "Ndërrim vaji + filtra",
      amount: "€95",
    },
    {
      date: "04.05.2026",
      vehicle: "BMW X5",
      plate: "AB456CD",
      service: "Kontroll frenash",
      amount: "€140",
    },
  ],
};

export default function CustomerProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Profili i klientit
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              {customer.name}
            </h1>

            <p className="mt-2 text-slate-500">
              Klient i regjistruar në AutoFlow.
            </p>
          </div>

          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Ndrysho klientin
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Telefon</p>
            <p className="mt-2 font-semibold text-slate-950">{customer.phone}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-2 font-semibold text-slate-950">{customer.email}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Qyteti</p>
            <p className="mt-2 font-semibold text-slate-950">{customer.city}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Automjete</p>
            <p className="mt-2 font-semibold text-slate-950">
              {customer.vehicles.length}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Automjetet e klientit
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Makinat e lidhura me këtë klient.
            </p>
          </div>

          <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
            Shto automjet
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {customer.vehicles.map((vehicle) => (
            <div
              key={vehicle.plate}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <p className="font-semibold text-slate-950">
                {vehicle.brand} {vehicle.model}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Targa</p>
                  <p className="font-medium">{vehicle.plate}</p>
                </div>

                <div>
                  <p className="text-slate-500">Viti</p>
                  <p className="font-medium">{vehicle.year}</p>
                </div>

                <div>
                  <p className="text-slate-500">Kilometra</p>
                  <p className="font-medium">{vehicle.mileage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-8">
          <h2 className="text-xl font-bold text-slate-950">
            Historiku i shërbimeve
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Shërbimet e kryera për automjetet e këtij klienti.
          </p>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Data</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Shërbimi</th>
              <th className="px-6 py-4 text-right">Totali</th>
            </tr>
          </thead>

          <tbody>
            {customer.services.map((service) => (
              <tr key={`${service.date}-${service.plate}`} className="border-b border-slate-100">
                <td className="px-6 py-5">{service.date}</td>
                <td className="px-6 py-5">{service.vehicle}</td>
                <td className="px-6 py-5">{service.plate}</td>
                <td className="px-6 py-5">{service.service}</td>
                <td className="px-6 py-5 text-right font-semibold">
                  {service.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}