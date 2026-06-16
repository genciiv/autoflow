const serviceData = [
  { name: "Ndërrim vaji + filtra", count: 64, revenue: "€6,080", avg: "€95" },
  { name: "Kontroll frenash", count: 38, revenue: "€5,320", avg: "€140" },
  { name: "Diagnostikim", count: 31, revenue: "€1,085", avg: "€35" },
  { name: "Bateri", count: 18, revenue: "€1,530", avg: "€85" },
];

export function ServiceAnalytics() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">
        Analiza e shërbimeve
      </h2>

      <div className="mt-6 space-y-4">
        {serviceData.map((service) => (
          <div
            key={service.name}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-950">{service.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {service.count} shërbime
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-slate-950">{service.revenue}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Mesatarja {service.avg}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}