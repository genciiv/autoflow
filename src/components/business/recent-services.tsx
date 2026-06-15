const services = [
  {
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    service: "Ndërrim vaji + filtra",
    amount: "€95",
    status: "Përfunduar",
  },
  {
    vehicle: "Mercedes C-Class",
    plate: "AB456CD",
    service: "Kontroll frenash",
    amount: "€140",
    status: "Në punë",
  },
  {
    vehicle: "Audi A4",
    plate: "AC789EF",
    service: "Diagnostikim",
    amount: "€35",
    status: "Në pritje",
  },
];

export function RecentServices() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">
        Serviset e fundit
      </h3>

      <div className="mt-6 space-y-4">
        {services.map((item) => (
          <div
            key={item.plate}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-slate-950">{item.vehicle}</p>
                <p className="mt-1 text-sm text-slate-500">{item.plate}</p>
              </div>

              <span className="font-semibold text-slate-950">
                {item.amount}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-600">{item.service}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}