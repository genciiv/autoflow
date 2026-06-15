const stats = [
  {
    title: "Biznese Aktive",
    value: "124",
  },
  {
    title: "Aplikime në pritje",
    value: "18",
  },
  {
    title: "Klientë Total",
    value: "12,840",
  },
  {
    title: "MRR",
    value: "€4,960",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-950">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}